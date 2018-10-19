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
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isActive:0
  }, 

  /**
   * 组件的方法列表
   */
  methods: {
    toggleBtn(e){
      this.setData({
        isActive:e.currentTarget.dataset.sign
      }) 
    },
    toDetail(e){
       console.log(e.currentTarget.dataset.index);
       wx.navigateTo({
           url:`../read_content/read_content?content=${JSON.stringify(this.data.docs[e.currentTarget.dataset.index])}`
       })
    }
  }
})
