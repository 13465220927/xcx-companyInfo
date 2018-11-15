const {hostname}=require('../../../utils/config');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    chatList:{
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
  ready(){
    this.setData({hostname})
  },
  /**
   * 组件的方法列表
   */
  methods: {
    toDetail(e){
      let item=this.data.chatList[e.currentTarget.dataset.index];
      console.log(item);
      
      wx.navigateTo({
        url:`../chat_detail/chat_detail?name=${item.name}&friendId=${item.friend_id}&img=${item.img}`
      })
    } 
  }
})
