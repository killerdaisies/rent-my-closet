var app = getApp()
Page({
  onLoad: function (options) {
    let that = this;

    wx.request({
      url: `https://rent-my-closet.herokuapp.com/api/v1/items/${options.id}`,
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