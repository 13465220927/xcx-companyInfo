const userLib=require('../../utils/user');
const app=getApp();
const Form=require('../../controller/Form');;
const config=require('../../utils/config');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userData:{},
    hostname:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        userData:app.globalData.userData,
        hostname:config.hostname
      })
  },
  chooseLogo(){
      userLib.chooseImg().then((result)=>{
        let userData=this.data.userData;
        userData.logo=config.hostname+''+result;
        app.globalData.userData.logo=config.hostname+''+result;
        this.setData({
          userData
        })
      })   
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  handleSubmit(){
    userLib.updateUserInfo(this.data.userData).then(result=>{
      wx.showToast({
        title:`修改成功`
      })
      app.globalData.userData.name=this.data.userData.name;
    }).catch(err=>{
       wx.showToast({
         title:`${err}`,
         icon:"none"
       })
    });
  },
  modifyInput(e){
    Form.modifyUserInfo(this,e.currentTarget.dataset.type,e.detail.detail.value)
  },
  delHonorPho(e){
    let that=this;
    wx.showModal({
      title: '提示',
      content: '确定要删除这张图片吗',
      success (res) {
        if (res.confirm) {
          let userData=that.data.userData;
          userData.honor_photo.splice(e.currentTarget.dataset.index,1)
          that.setData({
            userData
          })
        }
      }
    })
  },
  delProductPho(e){
    let that=this;
    wx.showModal({
      title: '提示',
      content: '确定要删除这张图片吗',
      success (res) {
        if (res.confirm) {
          let userData=that.data.userData;
          userData.product_photo.splice(e.currentTarget.dataset.index,1)
          that.setData({
            userData
          })
        }
      }
    })
  },
  chooseHonorPho(){
    userLib.chooseImg().then((result)=>{
      let userData=this.data.userData;
      userData.honor_photo.push(result);
      this.setData({
        userData
      })
    })
  },
  chooseProductPho(){
    userLib.chooseImg().then((result)=>{
      let userData=this.data.userData;
      userData.product_photo.push(result);
      this.setData({
        userData
      })
    })
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