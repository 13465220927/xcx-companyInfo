// pages/tool/tool.js
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
    // let fs = wx.getFileSystemManager();
    // fs.removeSavedFile({
    //   filePath: wx.env.USER_DATA_PATH + '/1.pdf',
    //   success: function(res) {
    //     console.log('成功', res)
    //   },
    //   fail: function(res) {
    //     console.log('失败', res)
    //   }
    // })
    // const downloadTask = wx.downloadFile({
    //   url: 'https://paxj.zhuozhida.com.cn/public/upload/file/ueditor/1062176401806987264.txt',
    //   filePath: wx.env.USER_DATA_PATH + '/1.pdf',
    //   success(res2) {
    //     console.log(res2)
    //     let tmpfilePath = res2.tempFilePath
    //       wx.openDocument({
    //         filePath: res2.filePath,
    //         complete: function(res) {
    //           console.log(res);
    //         }
    //       }) 
    //   }

    // })


    // wx.downloadFile({
    //   url: 'https://paxj.zhuozhida.com.cn/public/upload/images/defaultlogo.png', //仅为示例，并非真实的资源
    //   filePath:wx.env.USER_DATA_PATH+'1.png',
   
    //   success (res) {
    //     console.log('我下载问价啦')
    //     if (res.statusCode === 200) {
    //       console.log(res)
    //     }
    //   },
    //   fail(res){
    //     console.log('下载文件失败了');
    //     console.log(res)
    //   }
    // })
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