const {hostname}=require('../../utils/config');
const app=getApp();
const manageLib=require('../../utils/manage');
const userLib=require('../../utils/user');

Page({

  /**
   * 页面的初始数据
   */
  data: {
       userName:"",
       logo:"",
       operaData:[
         {icon:"brush_fill",name:"我的发布",url:"../profile_my_subcontent/profile_my_subcontent"},
         {icon:"collection_fill",name:"我的企业",url:"../mechanize/mechanize?isMe=1"},
         {icon:"editor",name:"修改资料",url:"../edit_company_info/edit_company_info"},
         {icon:"interactive_fill",name:"消息管理",url:"../message/message"},
         {icon:"emoji_fill",name:"信息反馈",url:"../feedback/feedback"},
       ],
       hostname:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
       console.log(app.globalData.userData)
       let operaData=this.data.operaData;

       if(app.globalData.userData.company_type==0){
        operaData.splice(1,1);
       }
       this.setData({
          userName:app.globalData.userData.userName,
          logo:app.globalData.userData.logo,
          operaData,
          hostname
       })  
       //userLib.updateUserLogo(app.globalData.userData.id,"/upload/images/img20181013173940.jpeg");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  loginOut(){
    let that=this;
    wx.showModal({
      title: '提示',
      content: '您确定要退出登录吗?',
      success (res) {
        if (res.confirm) {
          wx.clearStorageSync();
          app.globalData.userData={};
          app.bLoginOut=1;
          that.setData({
            userName:"",
             logo:""
          })
          wx.switchTab({
              url: '../index/index'
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if(!this.data.userName){
      this.setData({
        userName:app.globalData.userData.userName,
        logo:app.globalData.userData.logo
     })  
    }
    
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