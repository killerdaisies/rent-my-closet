const app = getApp()

Page({
  data: {
    mode: "scaleToFill",
    arr: ['../images/SK2.jpeg', 
          '../images/Furniture.png',
          '../images/Milktea.jpeg'],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
  },

  onLoad: function (options) {
    let page = this;
    wx.request({
      url: "https://rent-my-closet.herokuapp.com/api/v1/items",
      method: 'GET',
      success(res) {
        const items = res.data.items;
        page.setData({
          items: items
        });
        wx.hideToast();
      }
    });
    this.setData(app.globalData)
  },

  search: function (e) {
    let input = e.detail.value
    console.log(input)
    wx.request({
      url: `https://rent-my-closet.herokuapp.com/api/v1/items?query=${input}`,
      method: 'GET',

    })
    wx.navigateTo({
      url: `../index/index?query=${input}`,
    })
  },

  showItem(e) {
    const data = e.currentTarget.dataset;
    const item = data.item;
    wx.navigateTo({
      url: `../show/show?id=${item.id}`
    });
  }
});

