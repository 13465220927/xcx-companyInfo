// pages/submit/submit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoData:[
      {img:"index/info.png",name:"综合信息"},
      {img:"index/enterprise.png",name:"招聘求职"},
      {img:"index/intermediary.png",name:"供求信息"},
      {img:"index/service.png",name:"创业信息"},
      {img:"index/infogroup.png",name:"项目信息"}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  toSubMessage(e){
    
    let index=e.currentTarget.dataset.index;
    wx.navigateTo({
      url:`../sub_message/sub_message?key=${this.data.infoData[index].name}`
    })
  },
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