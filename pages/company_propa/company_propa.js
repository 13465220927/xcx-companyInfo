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
    company_kind_name:"",
    company_type:1,
    loadTip:"正在加载更多数据",
    bLoadData:true,
    docs:[],
    infoData:[
      {url:`../company_pub/company_pub?company_type=1&company_kind_name=jixiezhizao`,img:"company/1.png",name:"机械制造"},
      {url:`../company_pub/company_pub?company_type=1&company_kind_name=fangzhifangsha`,img:"company/2.png",name:"纺织纺纱"},
      {url:`../company_pub/company_pub?company_type=1&company_kind_name=suliaozhipin`,img:"company/3.png",name:"塑料制品"},
      {url:`../company_pub/company_pub?company_type=1&company_kind_name=yiyaozhipin`,img:"company/4.png",name:"医药制品"},
      {url:`../company_pub/company_pub?company_type=1&company_kind_name=chuantonggongyi`,img:"company/5.png",name:"传统工艺"},
      {url:`../company_pub/company_pub?company_type=1&company_kind_name=xinxichanye`,img:"company/6.png",name:"信息产业"},
      {url:`../company_pub/company_pub?company_type=1&company_kind_name=gangtieyelian`,img:"company/7.png",name:"钢铁冶炼"},
      {url:`../company_pub/company_pub?company_type=1&company_kind_name=lianjiaohuagong`,img:"company/8.png",name:"炼焦化工"},
      {url:`../company_pub/company_pub?company_type=1&company_kind_name=nongfuchanpin`,img:"company/9.png",name:"农副产品"},
      {url:`../company_pub/company_pub?company_type=1&company_kind_name=jiancaijianye`,img:"company/10.png",name:"建材建业"}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
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
  toggleBtn(e){
    let sign=e.currentTarget.dataset.sign;
    this.setData({
      isActive:sign
    });
    this.setData({
      docs:[],
      current:1
    })
    if(sign==0){
      this.getList();
    }else{
      this.getContentList()
    }
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