const manageLib=require('../../utils/manage');
const User=require('../../controller/User');
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isActive:0,
    current:1,
    totalItems:1,
    company_kind_name:"",
    company_type:1,
    loadTip:"正在加载更多数据",
    bLoadData:true,
    docs:[],
    infoData:[
      {url:`../info-kind-group/info-kind-group?name=创业项目&kind=个人发布`,img:"index/info.png",name:"创业项目"},
      {url:`../info-kind-group/info-kind-group?name=求职信息&kind=个人发布`,img:"index/enterprise.png",name:"求职信息"},
      {url:`../info-kind-group/info-kind-group?name=招聘信息&kind=企业发布`,img:"index/infogroup.png",name:"招聘信息"}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList();
    console.log(app.globalData.userData)
    if(app.globalData.userData.company_type!=0){
         let infoData=[
           {url:`../info-kind-group/info-kind-group?name=项目合作&kind=企业发布`,img:"index/info.png",name:"项目合作"},
           {url:`../info-kind-group/info-kind-group?name=供求信息&kind=企业发布`,img:"index/intermediary.png",name:"供求信息"},
           {url:`../info-kind-group/info-kind-group?name=综合发布&kind=企业发布`,img:"index/service.png",name:"综合发布"},
           {url:`../info-kind-group/info-kind-group?name=求职信息&kind=个人发布`,img:"index/enterprise.png",name:"求职信息"},
           {url:`../info-kind-group/info-kind-group?name=招聘信息&kind=企业发布`,img:"index/infogroup.png",name:"招聘信息"}
          ]
         this.setData({
           infoData
         })
    }
  },
  getList(){
    manageLib.getContentList(this,this.data.current)
  },
  toComPub(e){
    wx.navigateTo({
      url:`../company_pub/company_pub?company_type=${this.data.company_type}&company_kind_name=${this.data.company_kind_name}`
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
    console.log('到底了')
    if(this.data.current>=this.data.totalPage){
      this.setData({
        bLoadMore:false,
        loadTip:"无更多数据可加载"
      })
    }else if(!this.data.bLoadData){
      this.setData({
        bLoadMore:false,
        loadTip:"正在加载数据",
        current:this.data.current+1,
        bLoadData:false
      })
      this.getList();
    }  
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})