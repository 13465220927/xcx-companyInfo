const userLib=require('../../../utils/user');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     bShowInfoType:{
       type:Boolean,
       value:true
     }
  },

  /**
   * 组件的初始数据
   */
  data: {
     bShowReply:false,
     replyMessage:[
       {name:"路人甲",comment:"这是路人甲的评论"},
       {name:"路人已",comment:"这是d2312312路人甲的评论老铁666，无敌，点赞关注走一波"}
     ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showReply(){
       this.setData({
        bShowReply:!this.data.bShowReply
       })
    },
    confirm(e){
      let replyMessage=this.data.replyMessage;
      replyMessage.push({comment:e.detail.detail.value,name:"珏哥"});
      this.setData({
        replyMessage
      })
      userLib.replyMessage('小程序上真是对接端口啦啦啦',"S19oqnWsQ","rkx2FZ7sX").catch(err=>{

      })
      console.log('我确认啦')
    },
    blur(){
      this.setData({
        bShowReply:false
      })
    }
  }
})
