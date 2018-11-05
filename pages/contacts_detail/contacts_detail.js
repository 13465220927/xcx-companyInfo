
Page({

  /**
   * 页面的初始数据
   */
  data: {
    units:[
      {name:"全部",key:"all"},
      {name:"市政府",key:"shizhengfu"},
      {name:"政协",key:"zhengxie"},
      {name:"财政局"},
      {name:"教育局"},
      {name:"国税局"},
    ],
    cities : [
      {"label":"北京Beijing010","name":"北京","pinyin":"Beijing",kind:"shizhengfu"},  
      {"label":"重庆Chongqing023","name":"重庆","pinyin":"Chongqing",kind:"zhengxie"},  
      {"label":"上海Shanghai021","name":"上海","pinyin":"Shanghai",kind:"zhengxie"}, 
      {"label":"北京Beijing010","name":"北京","pinyin":"Deijing","zip":"010"},  
      {"label":"重庆Chongqing023","name":"重庆","pinyin":"Chongqing",kind:"shizhengfu"},  
      {"label":"上海Shanghai021","name":"上海","pinyin":"Ehanghai",kind:"shizhengfu"}, 
      {"label":"北亭Beijing010","name":"北京","pinyin":"Feijing","zip":"010"},  
      {"label":"重庆Chongqing023","name":"重庆","pinyin":"Ghongqing","zip":"023"},  
      {"label":"山东Shanghai021","name":"上海","pinyin":"Shanghai","zip":"021"}, 
     ],
     toggleCities:[],
     toggleIndex:'0'
  },
  onChange(event){
    console.log(event.detail,'click right menu callback data')
  }, 
  onReady(){
    let cities=this.data.cities;
    let storeCity = new Array(26);
    const words = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    words.forEach((item,index)=>{
        storeCity[index] = {
            key : item,
            list : []
        }
    })
    cities.forEach((item)=>{
        let firstName = item.pinyin.substring(0,1);
        let index = words.indexOf( firstName );
        storeCity[index].list.push({
            name : item.name,
            key : firstName,
            kind:item.kind
        });
    })
    storeCity=storeCity.filter(item=>{
         return  item.list.length>0;
    })
    this.data.cities = storeCity;
    console.log('来着啦');
    console.log( storeCity)
    this.setData({
        cities :  storeCity,
        toggleCities:this.data.cities
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  initCity(){

  },
  toggle(e){
   let index=e.currentTarget.dataset.index;
   let key=this.data.units[index].key;
   let cities=JSON.parse(JSON.stringify(this.data.cities));
   let toggleCities=[];
   
   if(key=="all"){
    console.log(this.data.cities)
    toggleCities=this.data.cities;
   }else{
    cities.forEach((item)=>{
        item.list=item.list.filter(chil=>{
            return chil.kind==key;
        })
     })
     toggleCities=cities;
   }
    this.setData({
      toggleIndex:index,
      toggleCities
    })
  },
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
 

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