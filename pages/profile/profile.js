// pages/profile/profile.js
const app = getApp()
Page({
  data: {
    item card-category: '',
    item
    endDate: ''
  },

  onLoad: function (options) {
    let page = this;
    wx.request({
      url: 'https://rent-my-closet.herokuapp.com/api/v1/users/37',
      method: 'GET',
      success(res) {
        const user = res.data;
        page.setData({
          user: user
        }),
          wx.hideToast();
      }
    }),
    this.setData(app.globalData)
  },

  showUser(e) {
    const data = e.currentTarget.dataset;
    const user = data.user;
  }

})
