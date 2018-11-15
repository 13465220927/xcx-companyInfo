// pages/link/link.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const ctx = wx.createCanvasContext('myCanvas', this);
    console.log(ctx);
    ctx.drawImage("https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350", 0, 0);
    ctx.draw();
    wx.canvasGetImageData({
      canvasId: 'myCanvas',
      x: 0,
      y: 0,
      width: 600,
      height: 1000,
      success(res) {
        console.log(res.width) // 100
        console.log(res.height) // 100
        console.log(res.data instanceof Uint8ClampedArray) // true
        console.log(res.data.length) // 100 * 100 * 4
      },
      fail(err){
        console.log('error');
        console.log(err);
      }
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