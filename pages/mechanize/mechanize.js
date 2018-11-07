const app=getApp();
const manageLib=require('../../utils/manage');
const User=require('../../controller/User');
Page({

  /**
   * 页面的初始数据
   */
  data: {
      company:{},
      isMe:false,
      company_id:"",
      current:1,
      kind:"供求信息",
      totalItems:1,
      loadTip:"正在加载更多数据",
      bLoadData:true,
      docs:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('公司类型')
  
     if(options.isMe==1){
         if(app.globalData.userData.company_type==2){
          app.globalData.userData.kind='中介机构';
         }else{
          app.globalData.userData.kind=User.switchKind(app.globalData.userData.company_kind_name);
         }
        
         this.setData({
          company:app.globalData.userData,
          isMe:true,
          company_id:app.globalData.userData._id
         })
     }else{
        let company=JSON.parse(options.userData)
        if(company.company_type==2){
          company.kind="中介机构"
        }else{
          company.kind=User.switchKind(company.company_kind_name);
        }
       
        this.setData({
            company,
            company_id:company._id
        })
     }
     console.log('公司ID is');
     console.log(this.data.company_id);
     this.getList();
  },
  getList(){
    manageLib.getCompanyConts(this,this.data.current,this.searchCateId(this.data.kind),this.data.company_id)
  },  
  toggleKind(e){
      console.log(e.detail.kind);
      this.setData({
        kind:e.detail.kind,
        current:1,
        totalItems:1
      })
      console.log('点击了啊啊')
      this.getList();
  },
  searchCateId(name){
    let cateId=""
    app.globalData.categoryList.forEach(item=>{
      if(item.name==name){
       cateId=item.id;
      }
    })
    return cateId;
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
        this.getList();
      }  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})