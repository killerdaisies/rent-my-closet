var app = getApp()
Page({
  onLoad: function (options) {
    let that = this;

    wx.request({
      url: `http://localhost:3000/api/v1/items/${options.id}`,
      method: 'GET',
      success(res) {
        const item = res.data;

        that.setData(
          item
        );

        wx.hideToast();
      }
    });
  }
});