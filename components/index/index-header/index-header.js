// components/index/index-header/index-header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      infoData:{
        type:Array,
        value:[]
      },
      isTrigger:{
        type:Boolean,
        value:false
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
     
  },

  /**
   * 组件的方法列表
   */
  methods: {
      toUrl(e){
          if(this.data.isTrigger){
            this.triggerEvent('toggleAnnounce',{noticeKind:e.currentTarget.dataset.sign})
            
          }else if(e.currentTarget.dataset.url&&!this.data.isTrigger){
            wx.navigateTo({
              url:e.currentTarget.dataset.url
            })
          }   
      }
  } 
})
