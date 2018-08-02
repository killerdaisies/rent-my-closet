const app = getApp()

Page({
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo
    });

    var nickName = e.detail.userInfo.nickName;
    var avatarUrl = e.detail.userInfo.avatarUrl;
    var description = e.detail.userInfo.province;

    let user = {
      "open_id": "2",
      "wechat_name": nickName,
      "description": description,
      "avatarUrl": avatarUrl
    }

    var users = app.globalData.users

    wx.request({
      url: `https://rent-my-closet.herokuapp.com/api/v1/users`,
      method: 'POST',
      data: user,
      success() {
        console.log("he");
        wx.reLaunch({
          url: '/pages/landing/landing',
        });
      }
    });
  },
})

