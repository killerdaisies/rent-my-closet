// pages/add/add.js
var app = getApp()
Page({
  data: {
    loading: false,
    index: 0,
    categories: [{ "id": 13, "name": "Cam Neely", "description": "You are in luck! There's a town about three miles that way. I'm sure you'll find a couple guys there. Okay, thanks. Do you realize what you've done?", "price": "196", "category": "cocktail", "availability": true }, { "id": 14, "name": "Karen Duffy", "description": "We got no food, we got no jobs... our PETS' HEADS ARE FALLING OFF!", "price": "212", "category": "formal", "availability": false }, { "id": 15, "name": "Cam Neely", "description": "Skis, huh? That's right! Great! They yours? Uh-huh. Both of 'em? Yes. Cool!", "price": "512", "category": "cocktail", "availability": false }, { "id": 16, "name": "Charles Rocket", "description": "Oh, yeah! It's right here. Samsonite! I was way off! I knew it started with an S, though.", "price": "714", "category": "summer", "availability": false }, { "id": 17, "name": "this is bad ", "description": "very bad", "price": "100", "category": "djsk", "availability": false }]
  },

  bindtag: function(e) {
    wx.redirectTo({
      url: '/pages/landing/landing'
    });
  },

  bindSubmit: function (e) {
    console.log(23, e)
    this.setData({
      loading: !this.data.loading
    });

    var name = e.detail.value.name
    var description = e.detail.value.description;
    var price = e.detail.value.price;
    var sizing = e.detail.value.sizing;
    var category = e.detail.value.category;

    var items = app.globalData.items

    let item = {
      "name": name,
      "description": description,
      "price": price,
      "sizing": sizing,
      "category": category,
      "user_id": 14
    }

    wx.request({
      url: `https://rent-my-closet.herokuapp.com/api/v1/items`,
      method: 'POST',
      data: item,

      success: function(res) {
        // set data on index page and show
        console.log("he");
        wx.navigateTo({
          url: '/pages/show/show?id=' + res.data.id
        });
      }
    });
  },

  onLoad: function () {
    console.log("page loaded");
    let page = this;
    wx.request({
      url: "https://rent-my-closet.herokuapp.com/api/v1/items",
      method: 'GET',
      success(net) {
        const items = net.data.items;
        console.log(33, items);

        // Update local data
        // page.setData({
        //   categories: items
        // });

        wx.hideToast();
      }
    });
  },
  // takePhoto: function () {
  //   let that = this
  //   wx.chooseImage({
  //     count: 1,
  //     sizeType: ['original', 'compressed'],
  //     sourceType: ['album', 'camera'],
  //     success: function (res) {
  //       let tempFilePath = res.tempFilePaths[0];
  //       that.uploadPromise(tempFilePath).then(res => {
  //         console.log('You can execute anything here')
  //         return res
  //       }).then(res => {
  //         console.log('Or .. execute more')
  //         return res
  //       }).then(res => {
  //         console.log(res)
  //         that.setData({photo:res})


  //       })
  //     }
  //   });
  // },

  pickImage: function () {
    wx.chooseImage({
      success: function (res) {
        console.log(res);
      }
    })
  },

  uploadPromise: function (tempFilePath) {
    return new Promise((resolve, reject) => {
      new AV.File('file-name', {
        blob: {
          uri: tempFilePath,
        },
      }).save()
        .then(file => resolve(file.url()))
        .catch(e => reject(e));
    })
  },

});
