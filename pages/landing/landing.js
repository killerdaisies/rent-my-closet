// pages/landing/landing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  search: function (e) {
    let input = e.detail.value
    console.log(input)
    wx.request({
      url: `https://rent-my-closet.herokuapp.com/api/v1/items?query=${input}`,
      method: 'GET',

    })
    wx.reLaunch({
      url: `../index/index?query=${input}`,
    })
  },

  searchDress: function (e) {
    let category= e.target.dataset.category
    wx.reLaunch({
      url: `../index/index?query=${category}`,
    })
  },

  // searchDress: function (category) {
  //   console.log(category);
  //   wx.switchTab({
  //     url: '/pages/index/index?category=' + `${category}`
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
