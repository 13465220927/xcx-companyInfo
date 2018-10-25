// components/message/message-item/message-item.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toDetail(e){
      wx.navigateTo({
        url:`../chat_detail/chat_detail?name=测试好友&friendId=${e.currentTarget.dataset.id}`
      })
    } 
  }
})
