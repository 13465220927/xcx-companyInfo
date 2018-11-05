const {hostname}=require('../../../utils/config');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
       docs:{
         type:Array,
         value:[]
       }
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
      hostname
    })
  },
  methods: {
    toDetail(e){
      
      wx.navigateTo({
         url:`../mechanize/mechanize?userData=${JSON.stringify(this.data.docs[e.currentTarget.dataset.index])}`
      })
    },
    calling(e){
      let phone=e.currentTarget.dataset.phone;
     
      if(phone){
        wx.makePhoneCall({
          phoneNumber:phone
        })
      }else{
         wx.showToast({
           title:"该用户未填写手机号",
           icon:"none"
         })
      }
     
    }
  }
})
