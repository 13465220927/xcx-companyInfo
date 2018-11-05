const {hostname}=require('../../../utils/config');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    honor_photo:{type:Array,value:[]},
    company_info:{type:String,value:''},
    product_photo:{type:Array,value:[]},
    company_type:{type:String,value:"0"},
    prefer_policy:{type:String,value:"该用户尚未填写该信息"},
    service_item:{type:String,value:"该用户尚未填写该信息"},
    free_item:{type:String,value:"该用户尚未填写该信息"}
  },

  /**
   * 组件的初始数据
   */
  data: {
    hostname:"",
    defaultVideoImg:"https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
    defaultPrizeImg:"https://images.pexels.com/photos/1043506/pexels-photo-1043506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
    defaultProImg:'https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350'
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
    previewImg(e){
      console.log( e.currentTarget.dataset.url)
      wx.previewImage({
        current: e.currentTarget.dataset.url, // 当前显示图片的http链接
        urls:[e.currentTarget.dataset.url]
      })
    }
  }
})
