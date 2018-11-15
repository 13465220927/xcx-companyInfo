// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:"",
    longitude:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let that=this;
      if(options.obj){
        console.log('来着快乐')
        let obj=JSON.parse(options.obj);
        console.log(!isNaN(Number(obj.latitude)))
        wx.openLocation({
          latitude:!isNaN(Number(obj.latitude))?Number(obj.latitude):39.9,
          longitude:!isNaN(Number(obj.longitude))?Number(obj.longitude):117.11,
          name:obj.name
         })  
      }else{
        wx.getLocation({
          success(res){
             wx.openLocation({
              latitude:res.latitude,
              longitude:res.longitude,
              name:""
             })
           
          }
        });
      }
      
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