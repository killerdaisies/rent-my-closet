//app.js

App({
  onLaunch: function () {
    // const host = 'https://rent-my-closet.herokuapp.com/'
    const host = "http://localhost:3000/"
    // const host = 'https://localhost.3000(what is your address)/'
    wx.login({
      success: (res) => {
        console.log(res)
        let currentUser = wx.getStorageSync('currentUser') 
        if (!currentUser) {
          wx.request({
            url: host + 'api/v1/login',
            method: 'post',
            data: {
              code: res.code
            },
            success: (res1) => {
              console.log(1, res1)
              // this.globalData.userId = res1.data.userId
              const page = this
              console.log(11, res1)
              // wx.getUserInfo({
              //   success: function (res2) {

              //     page.globalData.userInfo = res2.userInfo
              //     wx.request({
              //       url: `http://localhost:3000/api/v1/users/${res1.data.userId}`,
              //       method: 'put',
              //       data: {
              //         name: res2.userInfo.nickName,
              //         gender: res2.userInfo.gender,
              //         avatarUrl: res2.userInfo.avatarUrl
              //       },
              //       success: function (res) {
              //         // set data on index page and show
              //         // wx.redirectTo({
              //         //   url: '/pages/main/main'
              //         // });
              //         wx.setStorageSync('currentUser', res.data)
              //       }
              //       // insert next code here
              //     })
              //   },
              // })

            }
          })
        }
      }
    })
  }
})