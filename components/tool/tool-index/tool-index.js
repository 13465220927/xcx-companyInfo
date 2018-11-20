const manageLib=require('../../../utils/manage');
const {hostname}=require('../../../utils/config');
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
     toolsData:[
      
     ]
  },

  ready(){
    manageLib.getToolList().then(result=>{
       result.data.docs.forEach(item=>{
         item.img=hostname+item.img;
       })
       this.setData({toolsData:result.data.docs})
    })
  }, 
  /**
   * 组件的方法列表
   */
  methods: {
    
    toUrl(e){
      if(this.data.toolsData[e.currentTarget.dataset.index].link){
        wx.navigateTo({
          url:`../web-view/web-view?key=${this.data.toolsData[e.currentTarget.dataset.index].link}`
        })
      }
      
    }
  }
})
