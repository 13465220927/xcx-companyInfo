
const app = getApp()
const manageLib=require('../../utils/manage');
const userLib=require('../../utils/user');
const apiLib=require('../../utils/api');

Page({
  data: {
    infoData:[
      {url:"../government_info/government_info",img:"index/info.png",name:"政府信息"},
      {url:"../company_propa/company_propa",img:"index/enterprise.png",name:"企业宣传"},
      {url:"../intermediary/intermediary",img:"index/intermediary.png",name:"中介机构"},
      {url:"../service_organ/service_organ",img:"index/service.png",name:"服务机构"},
      {url:"../info-group/info-group",img:"index/infogroup.png",name:"信息广场"}
    ],
    bShowLogin:false,
    docs:[],
    totalPage:0,
    current:1,
    bLoadMore:true,
    loadTip:"正在加载更多数据",
    bLoadData:false
  },
  //事件处理函数

  onLoad: function (options) {
    console.log('来首页了')
    console.log(options)
     let userData=wx.getStorageSync('userData');
     this.setData({
      totalPage:0,
      current:1,
      bLoginOut:options.bLoginOut?options.bLoginOut:0
     })
     if(userData&&!userData.isCompanyUser){
       console.log(userData)
        userLib.doLogin(userData.email,userData.password,app,this)
     }else if(userData&&userData.isCompanyUser){
        userLib.companyUserLogin(userData.email,userData.password,app,this)
     }else{
       this.setData({bShowLogin:true})
     }
     manageLib.getContentList(this);
     manageLib.getContentTagList(this,app);
     manageLib.getCategoryList(this,app);
  },
  getUserInfo: function(e) {
   
  },
  cancelLoginDialog(){
    this.setData({
      bShowLogin:false
    })
  },
  onReachBottom() {
    console.log('到底了');
    if(this.data.current>=this.data.totalPage){
        this.setData({
          bLoadMore:false,
          loadTip:"无更多数据可加载"
        })
    }else if(!this.data.bLoadData){
        this.setData({
          bLoadMore:true,
          loadTip:"正在加载数据",
          current:this.data.current+1,
          bLoadData:true
        })
        
        manageLib.getContentList(this,this.data.current);
    } 
  },
  onShow(){
       console.log('onshow le ')
      if(app.bLoginOut==1){
        this.setData({bShowLogin:true})
      }else if(app.bLoginOut==0){
        this.setData({bShowLogin:false})
      }
  },
  toggleType(e){
      console.log(e.detail.typeId);
      this.setData({
        totalPage:0,
        current:1
       })
       manageLib.getContentList(this,1,e.detail.typeId);
  }
  
})
