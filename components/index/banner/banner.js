const apiLib=require('../../../utils/api');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      
  },

  /**
   * 组件的初始数据
   */
  ready(){
    apiLib.getAllAds(this)
  },
  data: {
    bannerImg:[],
    bg:"#f0a027"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    modifyBg(){
        if(this.data.bg=="#f0a027"){
          this.setData({
            bg:"#40becc"
          })
        }else{
          this.setData({
            bg:"#f0a027"
          })
        }
        
    }
  }
})
