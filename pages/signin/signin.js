const userLib=require('../../utils/user');
Page({

  /**
   * 页面的初始数据
   */
  data: {
     userName:"",
     password:"",
     email:""
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
  userNameChange(e){
     this.setData({
       userName:e.detail.detail.value
     })
  },
  passChange(e){
    this.setData({
       password:e.detail.detail.value
    })
  },
  emailChange(e){
    this.setData({
      email:e.detail.detail.value
    })
  },
  handleClick(){
    userLib.doReg(this.data.userName,this.data.email,this.data.password).then(()=>{
      
    }).catch(err=>{
       wx.showToast({
        title: `${err}`,
        icon: 'none'
       })
    });
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