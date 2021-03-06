//index.js
const app = getApp()

Page({
  onLoad: function (options) {
    console.log(options, 182774)
    let page = this;
    wx.request({
      url: `https://rent-my-closet.herokuapp.com/api/v1/items?query=${options.query}`,
      method: 'GET',
      success(res) {
        const items = res.data.items;
        page.setData({
          items: items
        });
        wx.hideToast();
      }
    });
    console.log(12, options.query)
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

