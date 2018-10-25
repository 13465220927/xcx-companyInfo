// components/index/search/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
       isNav:{
         type:Boolean,
         value:true
       }
  },

  /**
   * 组件的初始数据
   */
  data: {
     key:""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(){
      if(this.data.isNav){
        wx.navigateTo({
          url:`../search/search?key=${this.data.key}`
       })
      }else{
        this.triggerEvent('searchArticle',{key:'ww'},{})
      }
       
    },
    inputChange(e){
        this.setData({
          key:e.detail.detail.value
        })
    }
  }
})
