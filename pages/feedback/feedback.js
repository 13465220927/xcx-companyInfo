const userLib=require('../../utils/user');
const Form=require('../../controller/Form');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:"",
    name:"",
    message:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  inputChange(e){
    Form.modifyFeedForm(this,e.currentTarget.dataset.type,e.detail.detail.value)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  subFeed(){
    if(!this.data.phone||!this.data.name||this.data.message){
       wx.showToast({title:"有表单项未填写",icon:"none"})      
       return;      
    }
    userLib.addOneFeedMsg(this.data.phone,this.data.name,this.data.message)
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