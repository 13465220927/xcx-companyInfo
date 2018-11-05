const {hostname}=require('../../../utils/config');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      isMe:{type:Boolean,value:false},
      companyName:{type:String,value:""},
      phone:{type:String,value:''},
      addr:{type:String,value:""},
      logo:{type:String,value:""},
      latitude:{type:String,value:""},
      longitude:{type:String,value:""}   
  },

  /**
   * 组件的初始数据
   */
  data: {
    bShowOpera:false,
    hostname:""
  },

  /**
   * 组件的方法列表
   */
  ready(){
    this.setData({
      hostname
    })
  },
  methods: {
    toggleOpera(){
      console.log('点击了')
      this.setData({
        bShowOpera:!this.data.bShowOpera
      })
    },
    toMap(){
      wx.openLocation({
        latitude:Number(this.data.latitude),
        longitude:Number(this.data.longitude),
        fail(err){
           console.log(err);
           wx.showToast({
             title:"该用户未填写地址",
             icon:"none"
           })
        }
      })
    }
  }
})
