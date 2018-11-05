const Contact=require('../../controller/Contact');
const {allContactGroup,map_key}=require('../../utils/config');
const manageLib=require('../../utils/manage');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    allDataArray:[],
    
    multiArray: [
      ['政府机关', '事业单位',"新闻媒体","医院","学校"],
      ['市政府', '政协']
    ],
    multiIndex: [0, 0],
    address:"",
    latitude:'',
    longitude:'',
    phone:"",
    name:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  nameChange(e){
    console.log(e.detail.detail.value)
    this.setData({
      name:e.detail.detail.value
    })
  },
  phoneChange(e){
    this.setData({
        phone:e.detail.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    if(e.detail.column==0){
       Contact.filterGroup(e.detail.value,this);   
    }
  },  
  bindMultiPickerChange: function (e) {
    this.setData({
      multiIndex: e.detail.value
    })
  },
  submit(){
    manageLib.addContact(this.data.name,this.data.phone,2,this.data.address,this.data.latitude,this.data.longitude).then(()=>{
      wx.showToast({
         title:"发布成功,请等待审核通过",
         icon:"none"
      });
      setTimeout(()=>{
        wx.navigateBack()
      },2000)
    })
  },
  onLoad: function (options) {
     this.setData({allDataArray:allContactGroup});
    
  },
  openMap(){
    let that=this;
    wx.chooseLocation({
        success(res){
            console.log(res);
            that.setData({
              address:res.address,
              latitude:res.latitude,
              longitude:res.longitude
            })
        }
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})