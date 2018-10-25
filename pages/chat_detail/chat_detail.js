const userLib=require('../../utils/user');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    conversationData:[],
    friendId:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.setNavigationBarTitle({
        title:`${options.name}`
      })
      this.setData({
        friendId:options.friendId
      })
     userLib.getConversatiomDetail('111',options.friendId).then(result=>{
         this.setData({
             conversationData:result
         })   
      
     })
       
  },
  postMessage(e){
     let conversationData=this.data.conversationData;
     let data=e.detail;
     conversationData.push({
       sender_id:"111",
       receive_id:data.receive_id,
       message_type:data.message_type,
       message_content:data.message_content
      });
     this.setData({
       conversationData
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