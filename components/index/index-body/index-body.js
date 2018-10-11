// components/index/index-body/index-body.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bShowInfoType:{
      type:Boolean,
      value:true
    },
    leftText:{
      type:String,
      value:''
    },
    rightText:{
      type:String,
      value:''
    },
    useInfoTem:{       //使用的信息模板
      type:String,
      value:""
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
    }
  }
})
