
const app = getApp()
const manageLib=require('../../utils/manage');
const apiLib=require('../../utils/api');
Page({
  data: {
    infoData:[
      {url:"",img:"index/info.png",name:"政府信息"},
      {url:"",img:"index/enterprise.png",name:"企业宣传"},
      {url:"",img:"index/intermediary.png",name:"中介机构"},
      {url:"",img:"index/service.png",name:"服务机构"},
      {url:"",img:"index/infogroup.png",name:"信息广场"}
    ]
  },
  //事件处理函数

  onLoad: function () {
     apiLib.getMessageList('rkx2FZ7sX')
   
  },
  getUserInfo: function(e) {
   
  }
})
