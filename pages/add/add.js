// pages/add/add.js
var app = getApp()
Page({
  data: {
    loading: false
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
      url: `http://localhost:3000/api/v1/items`,
      method: 'POST',
      data: item,

      success: function(res) {
        // set data on index page and show
        console.log("he");
        wx.redirectTo({
          url: '/pages/show/show?id=' + res.data.id
        });
      }
    });
  },

  onLoad: function () {
    console.log("page loaded");
  }
  
});