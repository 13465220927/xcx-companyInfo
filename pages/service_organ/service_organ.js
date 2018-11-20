const manageLib=require('../../utils/manage');
const User=require('../../controller/User');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isActive:0,
    current:1,
    totalItems:1,
    company_type:3,
    company_kind_name:"",
    loadTip:"正在加载更多数据",
    bLoadData:true,
    docs:[],
    infoData:[
      
      {url:"../company_pub/company_pub?company_type=3&company_kind_name=yulexiuxian",img:"service/2.png",name:"娱乐休闲"},
      {url:"../company_pub/company_pub?company_type=3&company_kind_name=jianzhuanzhuang",img:"service/3.png",name:"建筑安装"},
      {url:"../company_pub/company_pub?company_type=3&company_kind_name=lingshoubaihuo",img:"service/4.png",name:"零售百货"},
      {url:"../company_pub/company_pub?company_type=3&company_kind_name=yiliaobaoxian",img:"service/5.png",name:"生活服务"},
      {url:"../company_pub/company_pub?company_type=3&company_kind_name=qichefuwu",img:"service/6.png",name:"汽车服务"},
      {url:"../company_pub/company_pub?company_type=3&company_kind_name=jiazhengbaoan",img:"service/7.png",name:"家政保安"},
      {url:"../company_pub/company_pub?company_type=3&company_kind_name=guanggaochuanmei",img:"service/8.png",name:"广告传媒"},
      {url:"../company_pub/company_pub?company_type=3&company_kind_name=jiaoyupeixun",img:"service/9.png",name:"教育培训"},
      {url:"../company_pub/company_pub?company_type=3&company_kind_name=wuliuyunshu",img:"service/10.png",name:"物流运输"},
      {url:"../company_pub/company_pub?company_type=3&company_kind_name=jinrongbaoxian",img:"service/1.png",name:"其他服务"}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  toggleBtn(e){
    let type=e.currentTarget.dataset.type;
    this.setData({
      isActive:e.currentTarget.dataset.sign,
      current:1,
      docs:[]
    });
    if(this.data.isActive==0){
      this.getList();
    }else{
      this.getContentList()
    }
   },
  onLoad: function (options) {
    this.getList();
  },
  getList(){
    manageLib.getCompanyList(this.data.current,this.data.company_type,this.data.company_kind_name).then(result=>{
      User.tidyCompany(result,this)
    })
  },
  getContentList(){
    manageLib.getContentList(this,this.data.current);
  },
  toComPub(){
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
      if(this.data.isActive==0){
        this.getList();
      }else{
        this.getContentList()
      }
    }  
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})