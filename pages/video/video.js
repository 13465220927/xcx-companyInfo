const userLib=require('../../utils/user');
const {hostname}=require('../../utils/config');
Page({

  /**
   * 页面的初始数据
   */
  data: {
     current:1,
     loadTip:"正在加载更多数据",
     bLoadMore:false,
     totalPage:0,
     docs:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList();
  },
  getList(){
    userLib.getVideoList(this.data.current).then(result=>{
      
      result.data.docs.forEach(item=>{
        console.log(item)
        for(let i=0;i<item.video_url.length;i++){
          item.video_url[i]=hostname+item.video_url[i];
          
        }
      });
      this.setData({
        docs:result.data.docs,
        totalPage:result.data.pageInfo.totalPage
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