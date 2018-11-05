const app=getApp();
const Docs=require('../../../controller/Docs');
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
    },
    contentList:{
      type:Array,
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
        let type=e.currentTarget.dataset.type;
        console.log(type);
        this.setData({
          isActive:e.currentTarget.dataset.sign
        });
        this.triggerEvent('toggleType',{typeId:Docs.switchType(type,app)},{}) 
    },
    toGovInfo(){
       wx.navigateTo({
         url:"../company_propa/company_propa"
       })
    }
  }
})
