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
    bannerImg:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
