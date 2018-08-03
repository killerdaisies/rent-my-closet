var app = getApp()
Page({
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
    wx.showModal({
      content: 'Would you like to confirm this reservation?',
      confirmText: "Confirm",
      cancelText: "Not now",
      success: function (res) {
        if (res.confirm) {
        wx.reLaunch({
          url: '../../pages/profile/profile'
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

  // bindDateChange2: function (event) {
  //   console.log("bindDateChange2: ", event)
  // }
});