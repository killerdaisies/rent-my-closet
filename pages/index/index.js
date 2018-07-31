const app = getApp()

Page({
  // data: {

  // },

  // bindViewTap: function () {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },

  onLoad: function (options) {
    let page = this;
    wx.request({
      url: "http://localhost:3000/api/v1/items",
      method: 'GET',
      success(res) {
        const items = res.data.items;
        page.setData ({
          items: items
        });
        wx.hideToast();
      }
    });
  }
});