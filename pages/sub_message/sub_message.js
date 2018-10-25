const userLib=require('../../utils/user');
const manageLib=require('../../utils/manage');
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tags : [
            {
                name : '业务员/销售',
                checked : false
            },
            {
                name : '司机',
                checked : false   
            },
            {
                name : '客服',
                checked : false
            },
            {
                name : '前台',
                checked :false,
            },
            {
              name : '文员',
              checked :false,
           },
           {
            name : '设计师',
            checked :false,
           }
        ],
    gender: [
            {name:'保密',value:"0" ,checked: true},
            {name: '男', value: '1'},
            {name: '女', value: '2'}
    ],
    array: ['美国', '中国', '巴西', '日本'],
    upLoadImages:[],
    contentTags:[],
    categoryList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onChange(event){
      const detail = event.detail;
      console.log(['tags['+event.detail.name+'].checked'])
      this.setData({
          ['tags['+event.detail.name+'].checked'] : detail.checked
      }) 
      
  },
  onLoad: function (options) {
    if(app.globalData.contentTags.length>0){
        manageLib.getCategoryList(this,app);
        manageLib.getContentTagList(this,app)
    }  
   
    
  },
  chooseImg(){
    let that=this;  
    wx.chooseImage({
        count: 9-this.data.upLoadImages.length, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
            console.log(res.tempFilePaths)
            var tempFilePaths = res.tempFilePaths;
            that.setData({
                upLoadImages:that.data.upLoadImages.concat(tempFilePaths)
            })
        }
    })
  },
  handleSubmit(){
    userLib.uploadImg(this.data.upLoadImages[i]);
    userLib.addOneContent();
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