//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.request({
url:'https://www.easy-mock.com/mock/5b5feee8d4b1f53c2a45caf4/items/api/v1/items#!method=get',
method: 'GET',
success: function(res) {
  page.setData(res.data)

})
