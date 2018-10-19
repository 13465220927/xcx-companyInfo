
const app=getApp();
const manageLib=require('../../utils/manage');
const userLib=require('../../utils/user');

Page({

  /**
   * 页面的初始数据
   */
  data: {
       userName:"",
       logo:"https://i.loli.net/2017/08/21/599a521472424.jpg",
       operaData:[
         {icon:"brush_fill",name:"我的发布",url:"../profile_my_subcontent/profile_my_subcontent"},
         {icon:"collection_fill",name:"我的企业"},
         {icon:"interactive_fill",name:"消息管理"},
         {icon:"mine_fill",name:"用户注册"},
         {icon:"emoji_fill",name:"信息反馈"},
       ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(['userData['+'userName'+']'])
       this.setData({
          userName:app.globalData.userData.userName,
          logo:app.globalData.userData.logo
       })  
       //userLib.updateUserLogo(app.globalData.userData.id,"/upload/images/img20181013173940.jpeg");
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