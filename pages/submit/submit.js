const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoData:[
      
      {img:"index/enterprise.png",name:"个人求职"},
      {img:"index/service.png",name:"创业项目"}
     
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
       console.log(app.globalData.userData);
      
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
    let infoData=[];
    if(app.globalData.userData.logo&&app.globalData.userData.company_type!=0){
      infoData=[
        {img:"index/enterprise.png",name:"招聘信息"},
        {img:"index/intermediary.png",name:"供求信息"},
        {img:"index/info.png",name:"综合发布"},
        {img:"index/infogroup.png",name:"项目合作"}
      ]   
      
   }else{
    infoData=[
      {img:"index/enterprise.png",name:"个人求职"},
      {img:"index/service.png",name:"创业项目"}
    ]
   }
   this.setData({
    infoData
  })
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