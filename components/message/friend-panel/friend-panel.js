const app=getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     conversationData:{
       type:Array,
       value:[]
     }
  },

  /**
   * 组件的初始数据
   */
  data: {
       openId:""
  },
  ready(){
    this.setData({
      openId:app.globalData.userData._id
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
