let manageLib=require('../../utils/manage');
Page({

  /**
   * 页面的初始数据
   */
  data: {
       lists:[
         
       ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({title:"加载中"})
    manageLib.getContactList('0').then(result=>{
      console.log(result);
      let lists=[];
      result.forEach(item=>{
        lists.push({name:item.name,_id:item._id})
      })
      this.setData({lists})
      wx.hideLoading();
    })
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