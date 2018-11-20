const {hostname}=require('../../../utils/config');
let video=null;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    id:{type:Number,value:[]},
    doc:{type:Array,value:[]},
    userData:{type:Object,value:""}
  },

  /**
   * 组件的初始数据
   */
  ready(){
    this.setData({
      hostname
    })
  },
  data: {
    hostname:"",
    posters:[
      "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
      "https://images.pexels.com/photos/34092/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=350",
      "https://images.pexels.com/photos/990818/pexels-photo-990818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
      "https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
      "https://images.pexels.com/photos/288477/pexels-photo-288477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
      "https://images.pexels.com/photos/149656/pexels-photo-149656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
      "https://images.pexels.com/photos/273250/pexels-photo-273250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
    ],
    randomNumber:0
  },

  /**
   * 组件的方法列表
   */
  ready(){
    let randomNumber=Math.floor(Math.random()*this.data.posters.length);
    console.log('随机数是'+randomNumber)
    this.setData({randomNumber,hostname})
  },
  methods: {
    errorOccur(){
      wx.showToast({
        title:"暂不支持该视频格式",
        icon:"none"
      })
    },
    toCompInfo(){
      wx.navigateTo({
        url:`../mechanize/mechanize?userData=${JSON.stringify(this.data.userData)}`
     })
    },
    fullScreen(e){
      let index=e.currentTarget.dataset.index;
      
      video=wx.createVideoContext(`v${this.data.id}${index}`,this);
      video.requestFullScreen();
    },
    fullscreenchange(e){
      if(e.detail.fullScreen==false){
        video.pause();
      }
    }
  }
})
