let WxParse = require('../../wxParse/wxParse.js');
const manageLib=require('../../utils/manage');
const apiLib=require('../../utils/api');
const {uploadHost}=require('../../utils/config');
Page({

  /**
   * 页面的初始数据
   */
  data: {
     doc:{},
     visible1: false,
     txtData:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     let doc=JSON.parse(options.content);
     let article=doc.content;
     this.setData({
       doc:doc
     })
     if(options.needGet){
        console.log(doc._id);
        manageLib.getOneAnnounceContent(doc._id).then(result=>{
          console.log('来这了')
          console.log(result)
          let parseData=WxParse.wxParse('article', 'html', result.data, this, 5);
          console.log(parseData)
        })
     }else{
      WxParse.wxParse('article', 'html', article, this, 5);
     }
     
  },
  wxParseTagATap(e){
    console.log('点击啦');
    console.log(e.currentTarget.dataset.src);
    let src=uploadHost+e.currentTarget.dataset.src;
    if(src.endsWith('jpg')||src.endsWith('jpeg')||src.endsWith('png')||src.endsWith('gif')){
      wx.previewImage({
        current: src, // 当前显示图片的http链接
        urls: [src] // 需要预览的图片http链接列表
      })
    }else if(src.endsWith('txt')){
      console.log('来这了')
      wx.showLoading({title:"读取文档中"})
      apiLib.readTxt(src).then(result=>{
        console.log(result);
        this.setData({
          visible1: true,
          txtData:result
        });
        wx.hideLoading();
      })
      
    }else if(src.endsWith('doc')||src.endsWith('docx')||src.endsWith('xls')||src.endsWith('xlsx')||src.endsWith('ppt')||src.endsWith('pptx')||src.endsWith('pdf')){
      let fileType=src.substring(src.lastIndexOf('.')+1);

      
      wx.showLoading({title:"下载文件中"});
      wx.downloadFile({
        // 示例 url，并非真实存在
        url: src,
        success: function(res) {
            wx.hideLoading();
            console.log(res);
            const filePath = res.tempFilePath
            wx.openDocument({
                filePath: filePath,
                fileType,
                success: function(res) {
                    console.log(res)
                    console.log('打开文档成功')
                },
                fail(err){
                  console.log(err)
                }
            })
        }
      })
    }else{
      wx.showToast({
        title:"不支持该文件格式"
      })
    }
  },
  handleClose1 () {
    this.setData({
        visible1: false
    });
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