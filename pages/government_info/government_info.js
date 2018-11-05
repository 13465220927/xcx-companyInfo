const manageLib=require('../../utils/manage');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoData:[
      {sign:0,img:"government/notice.png",name:"通知公告"},
      {sign:1,img:"government/propagate.png",name:"政策宣传"},
      {sign:2,img:"government/office.png",name:"办事服务"}
    ],
    docs:[],
    noticeKind:0,
    loadTip:"正在加载更多数据",
    bLoadData:false,
    totalPage:0,
    current:1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList();
  },
  toggleAnnounce(e){
    console.log(e);
     this.setData({
       totalPage:0,
       current:1,
       noticeKind:e.detail.noticeKind,
       docs:[]
      })
     this.getList();
  },
  getList(){
    this.setData({bLoadData:true})
    manageLib.getAnnounceList(this.data.noticeKind,this.data.current).then(result=>{
      result.data.docs.forEach(item=>{
        item.date=item.date.split(' ')[0];
      });
      
      this.setData({
        docs:this.data.docs.concat(result.data.docs),
        totalPage:result.data.pageInfo.totalPage,
        loadTip:"数据加载完成",
        bLoadData:false
      })
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
          bLoadData:true
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