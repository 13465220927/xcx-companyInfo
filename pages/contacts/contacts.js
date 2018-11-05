// pages/contacts/contacts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
       lists:[
         {name:"政府机关",key:""},
         {name:"事业单位",key:""},
         {name:"新闻媒体",key:""},
         {name:"医院",key:""},
         {name:"学校",key:""},
         {name:"社会团体",key:""},
         {name:"乡镇单位",key:""},
         {name:"厂矿企业",key:""},
         {name:"其他",key:""},
         {name:"政府",key:""},
       ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  toAdd(){
     wx.navigateTo({
        url:"../add_contact/add_contact"
     })
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