const {hostname}=require('../../../utils/config');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    honor_photo:{type:Array,value:[]},
    company_info:{type:String,value:''},
    product_photo:{type:Array,value:[]}
  },

  /**
   * 组件的初始数据
   */
  data: {
    hostname:""
  },

  /**
   * 组件的方法列表
   */
  ready(){
    this.setData({
      hostname:hostname
    })
  },
  methods: {

  }
})
