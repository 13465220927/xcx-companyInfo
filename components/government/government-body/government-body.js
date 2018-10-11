// components/government/government-body/government-body.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    }
  }
})
