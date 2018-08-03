const app = getApp()

Page({
  data: {
    motto: 'Hello',
    hasUserInfo: false,
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    const page = this;
      // const host = 'https://rent-my-closet.herokuapp.com/'
    const host = 'http://localhost:3000/'
    wx.login({
      success: (res) => {
        wx.request({
          url: host + 'api/v1/login',
          method: 'post',
          data: {
            code: res.code
          },
          success: (wechat) => {
            wx.setStorageSync('currentUser', wechat.data);
            wx.request({
              url: `http://localhost:3000/api/v1/users/${wechat.data.id}`,
              success: function (user) {
                page.setData({
                  hasUserInfo: user.data.avatarUrl
                });
                page.setData({
                  userInfo: user.data,
                  motto: 'Hello ' + user.data.wechat_name
                })
              }
            })
          },
          fail: (error) => {
            console.log(error);
          }
        })
      }
    });
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse) {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况

    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  getUserInfo: function (e) {
    const page = this;
    // app.globalData.currentUser = e.detail.userInfo
    const currentUser = wx.getStorageSync('currentUser');
    if (!currentUser.id) {
      wx.request({
        url: `http://localhost:3000/api/v1/users`,
        method: 'POST',
        data: {
          open_id: currentUser.open_id,
          wechat_name: e.detail.userInfo.nickName,
          avatarUrl: e.detail.userInfo.avatarUrl
        },
        success: function (res) {
          wx.setStorageSync('currentUser', res.data);
          page.setData({
            hasUserInfo: true
          });
        },
      });
    } else {
      if(!currentUser.avatarUrl) {
        wx.request({
          url: `http://localhost:3000/api/v1/users/${currentUser.id}`,
          method: "PUT",
          data: {
            open_id: currentUser.open_id,
            wechat_name: e.detail.userInfo.nickName,
            avatarUrl: e.detail.userInfo.avatarUrl
          },
          success: function(res) {
            wx.setStorageSync('currentUser', res.data);
          }
        })
      }
    }
    // wx.reLaunch({
    //   url: '../../pages/landing/landing',
    // })
  }
})
