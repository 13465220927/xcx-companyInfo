const userLib=require('../../../utils/user');
const app=getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    friendId:{type:String,value:""},
    name:{type:String,value:""},
    img:{type:String,value:""}
  },

  /**
   * 组件的初始数据
   */
  data: {
     content:""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleSubmit(){
        if(this.data.content){
            this.triggerEvent('postMessage',{receive_id:this.data.friendId,message_type:1,message_content:this.data.content});
            userLib.sendChatMessage(
              app.globalData.userData._id,
              this.data.friendId,
              1,
              this.data.content,
              this.data.name,
              this.data.img
              )
            this.setData({content:""})  
        }else{
            wx.showToast({title:"内容不可为空",icon:"none"})
        }
    },
    inputChange(e){
        console.log(e)
        this.setData({
          content:e.detail.value
        })
    }
  }
})
