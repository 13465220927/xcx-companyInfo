const app = getApp()
const manageLib=require('../../utils/manage');
const User=require('../../controller/User');
Page({

  /**
   * 页面的初始数据
   */
  data: {
     isActive:0,
     docs:[],
     current:1,
     totalItems:1,
     loadTip:"正在加载更多数据",
     bLoadData:true,
     company_type:2
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
  getList(){
    manageLib.getCompanyList(this.data.current,this.data.company_type,this.data.company_kind_name).then(result=>{
      console.log(result)
      User.tidyCompany(result,this)
    })
  },
  getContentList(){
    manageLib.getContentList(this,this.data.current);
  },
  onLoad: function (options) {
       this.getList();
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