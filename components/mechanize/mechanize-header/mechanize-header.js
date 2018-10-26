// components/mechanize/mechanize-header/mechanize-header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      isMe:{type:Boolean,value:false},
      companyName:{type:String,value:""},
      phone:{type:String,value:''},
      addr:{type:String,value:""}    
  },

  /**
   * 组件的初始数据
   */
  data: {
    bShowOpera:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toggleOpera(){
      console.log('点击了')
      this.setData({
        bShowOpera:!this.data.bShowOpera
      })
    }
  }
})
