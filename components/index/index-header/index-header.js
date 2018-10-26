// components/index/index-header/index-header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      infoData:{
        type:Array,
        value:[]
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
          if(e.currentTarget.dataset.url){
            wx.navigateTo({
              url:e.currentTarget.dataset.url
            })
          }
          
      }
  } 
})
