const app=getApp();
const manageLib=require('../../../utils/manage');
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  ready(){
    manageLib.getAnnounceList().then((result)=>{
        result.data.docs.forEach(item => {
          item.author=item.adminSender.userName;
          delete item.adminSender;
        });
        this.setData({
          noticeData:result.data.docs
        })
    });
  },
  /**
   * 组件的初始数据
   */
  data: {
     noticeData:[
       
     ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
     toDetail(e){
        let content=this.data.noticeData[e.currentTarget.dataset.index];
      
        wx.navigateTo({
          url:`../read_content/read_content?content=${JSON.stringify(content)}`
        })
     }
  }
})
