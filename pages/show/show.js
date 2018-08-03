var app = getApp()
Page({
  data: {
    startDate: '',
    endDate: ''
  },
  onLoad: function (options) {
    let that = this;
    console.log(223,options)
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
  },

  reserveTap: function() {
    let startDate = this.data.startDate
    let endDate = this.data.endDate

    // console.log(app.globalData.userInfo);
    wx.showModal({
      content: 'Would you like to confirm this reservation?',
      confirmText: "Confirm",
      cancelText: "Not now",
      success: function (res) {
        if (res.confirm) {
          wx.request({
            url: 'http://localhost:3000/api/v1/bookings',
            method: 'POST',
            data: {
              start_date: startDate,
              end_date: endDate
            }
          });
          wx.reLaunch({
            url: '/pages/profile/profile'
          });
        } else {
          console.log("Staying on page")
        }
      }
    })
  },
  // bindDateChange1: function(event) {
  //   console.log("bindDateChange1: ", event.detail.value)
  // },

  bindDateChange2: function (event) {
    console.log("bindDateChange2: ", event.detail.value)
    this.setData({
      endDate: event.detail.value
    })
  }
});