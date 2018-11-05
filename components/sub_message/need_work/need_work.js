const app=getApp();
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
    if(app.globalData.contentTags.length>0){
      manageLib.getCategoryList(this,app);
      manageLib.getContentTagList(this,app)
    }  
  },
  data: {
    isAgree:false,
    tags : [
            {
                name : '业务员/销售',
                checked : false
            },
            {
                name : '司机',
                checked : false   
            },
            {
                name : '客服',
                checked : false
            },
            {
                name : '前台',
                checked :false,
            },
            {
              name : '文员',
              checked :false,
           },
           {
            name : '设计师',
            checked :false,
           }
        ],
    gender: [
            {name:'保密',value:"0" ,checked: true},
            {name: '男', value: '1'},
            {name: '女', value: '2'}
    ],
    array: ['美国', '中国', '巴西', '日本'],
    upLoadImages:[],
    contentTags:[],
    categoryList:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event){
      const detail = event.detail;
      console.log(['tags['+event.detail.name+'].checked'])
      this.setData({
          ['tags['+event.detail.name+'].checked'] : detail.checked
      }) 
      
    },
    chooseImg(){
      let that=this;  
      wx.chooseImage({
          count: 9-this.data.upLoadImages.length, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
              console.log(res.tempFilePaths)
              var tempFilePaths = res.tempFilePaths;
              that.setData({
                  upLoadImages:that.data.upLoadImages.concat(tempFilePaths)
              })
          }
      })
    },
    toBack(){
      console.log('点击啦')
      wx.switchTab({
          url:"../submit/submit"
      })
    },
    isAgreeChange(event){
      const detail = event.detail;
      this.setData({
          'isAgree' : detail.value
      })
      
    },
  }
})
