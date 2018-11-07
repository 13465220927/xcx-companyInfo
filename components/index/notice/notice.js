const app=getApp();
const manageLib=require('../../../utils/manage');
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  ready(){
    Promise.all(
      [
        manageLib.getAnnounceList(0,1,1),
        manageLib.getAnnounceList(1,1,1),
        manageLib.getAnnounceList(2,1,1),
      ]
    )
    .then((result)=>{
     
      let noticeData=[];
      result.forEach(item=>{
        console.log('事件')
        if(item.data.docs.length>0){
          item.data.docs[0].date=item.data.docs[0].date.split(' ')[0];
          noticeData.push(item.data.docs[0])
        }
       
      })
      this.setData({noticeData});
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
          url:`../read_content/read_content?needGet=1&content=${JSON.stringify(content)}`
        })
     },
     toMore(){
       wx.navigateTo({
         url:"../government_info/government_info"
       })
     }
  }
})
