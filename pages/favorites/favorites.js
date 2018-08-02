// // pages/favorites/favorites.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
  
//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {
  
//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {
  
//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {
  
//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {
  
//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {
  
//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {
  
//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {
  
//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {
  
//   }
// })

const app = getApp()

Page({
  data: {
    mode: "scaleToFill",
    arr: ['../images/SK2.jpeg', 
          '../images/Furniture.png',
          '../images/Milktea.jpeg'],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
  },

  onLoad: function (options) {
    let page = this;
    wx.request({
      url: "http://localhost:3000/api/v1/items",
      method: 'GET',
      success(res) {
        const items = res.data.items;
        page.setData({
          items: items
        });
        wx.hideToast();
      }
    });
    this.setData(app.globalData)
  },
  showItem(e) {
    const data = e.currentTarget.dataset;
    const item = data.item;
    wx.navigateTo({
      url: `../show/show?id=${item.id}`
    });
  }
});

