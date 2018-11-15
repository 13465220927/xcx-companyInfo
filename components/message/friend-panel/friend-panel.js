const app=getApp();
const {hostname}=require('../../../utils/config');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     conversationData:{
       type:Array,
       value:[]
     },
     friendImg:{type:String,value:""}
  },

  /**
   * 组件的初始数据
   */
  data: {
       openId:"",
       img:""
  },
  ready(){
    this.setData({
      openId:app.globalData.userData._id,
      img:hostname+app.globalData.userData.logo,
      hostname
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
