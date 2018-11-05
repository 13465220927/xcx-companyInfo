const app=getApp();
const manageLib=require('../../utils/manage');

Page({

  /**
   * 页面的初始数据
   */
  data: {
     docs:[],
     current:1,
     totalItems:1,
     loadTip:"正在加载更多数据",
     bLoadData:true,
     categoryList:[],
     objectMultiArray: [
      ['求职信息', '创业项目'],
      ["综合发布","供求信息","项目合作","招聘信息"]
    ],
    multiIndex: [0, 0],
    multiArray: [['个人发布', '企业发布'], ['求职信息', '创业项目']],
    activeKindId:"",  //目前的类目ID
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     console.log(options.name);
     let multiArray=this.data.multiArray;
     multiArray[0][this.data.multiIndex[0]]=options.kind;
     multiArray[1][this.data.multiIndex[1]]=options.name;
     this.setData({multiArray,activeKindId: this.searchCateId(options.name)});
     this.getList();
     
  },
  getList(){
    console.log('加载了')
    manageLib.getContentList(this,this.data.current,this.data.activeKindId)
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    let  objectMultiArray=this.data.objectMultiArray;
    let  multiArray=this.data.multiArray;
    let  multiIndex=this.data.multiIndex;
  
    multiIndex[e.detail.column] = e.detail.value;
    if(e.detail.column==0){
     multiArray[Number(e.detail.value)]=objectMultiArray[Number(e.detail.value)]
    }
    this.setData({current:1,objectMultiArray,multiArray,multiIndex,activeKindId: this.searchCateId(this.data.multiArray[1][multiIndex[1]])});
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
  cancelPicker(){
    console.log('关闭了')
  },
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