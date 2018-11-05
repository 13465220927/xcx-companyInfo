// components/government/government-body/government-body.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bShowToggerBar:{
      type:Boolean,
      value:true
    },
    docs:{
      type:Array,
      value:[]
    },
    isActive:{
      type:Number,
      value:0 
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
    toggleBtn(e){
      this.triggerEvent('toggleAnnounce',{noticeKind:e.currentTarget.dataset.sign},{});
    },
    toDetail(e){
       console.log(e.currentTarget.dataset.index);
       wx.navigateTo({
           url:`../read_content/read_content?needGet=1&content=${JSON.stringify(this.data.docs[e.currentTarget.dataset.index])}`
       })
    }
  }
})
