//index.js
const app = getApp()

Page({
  onLoad: function (options) {
    let page = this;
    wx.request({
      // url: "http://localhost:3000/api/v1/items",
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
  showItem(e) {
    const data = e.currentTarget.dataset;
    const item = data.item;
    wx.navigateTo({
      url: `../show/show?id=${item.id}`
    });
  }
});

