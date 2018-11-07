const userLib=require('../../../utils/user');
const app=getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     bShowInfoType:{
       type:Boolean,
       value:true
     },
     contentList:{
       type:Array,
       valuse:[]
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
     ],
     bShowOpera:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toUserDetail(e){
      let obj={};
      let userData=this.data.contentList[e.currentTarget.dataset.index];
      obj.udate=userData.udate;
      obj.uid=userData.uid;
      obj.userName=userData.userName;
      obj.logo=userData.logo;
      obj.isAdmin=userData.isAdmin;
      wx.navigateTo({
        url:`../oneUser_detail/oneUser_detail?userData=${JSON.stringify(obj)}`
      })
    },
    showOpera(e){
      console.log('点击了')
      let contentList=this.data.contentList;
      contentList.forEach((item,index)=>{
            if(index!==e.currentTarget.dataset.index){
              item.bOpera=false;
            }   
      })
      contentList[e.currentTarget.dataset.index].bOpera=!contentList[e.currentTarget.dataset.index].bOpera;
      this.setData({
        contentList
      })
    },
    calling(e){
      let index=e.currentTarget.dataset.index;
      console.log(this.data.contentList[index].phoneNum);
      if(this.data.contentList[index].phoneNum){
        wx.makePhoneCall({
          phoneNumber:this.data.contentList[index].phoneNum.toString()
        })
      }else{
         wx.showToast({
           title:"该用户未填写手机号",
           icon:"none"
         })
      }
     
    },
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
    },
    toChat(e){
       
       let userData=this.data.contentList[e.currentTarget.dataset.index];   
       if(userData.uid!=app.globalData.userData._id){
          wx.navigateTo({
            url:`../chat_detail/chat_detail?name=${userData.userName}&friendId=${userData.uid}`
          })
       };
       
    }
  }
})
