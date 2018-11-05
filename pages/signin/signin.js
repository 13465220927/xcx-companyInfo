const userLib=require('../../utils/user');
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
     password:"",
     account:""
  },

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
  passChange(e){
    this.setData({
       password:e.detail.detail.value
    })
  },
  accountChange(e){
    this.setData({
      account:e.detail.detail.value
    })
  },
  handleClick(){
    userLib.companyUserLogin(this.data.account,this.data.password,app,this,true)
    //userLib.companyUserLogin('  ','123456',app,this,true)
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