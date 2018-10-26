const userLib=require('./utils/user');
App({
  onLaunch: function () {
    userLib.getOpenId(this);
   
  },
  globalData: {
    userInfo: null,
    contentTags:[],
    categoryList:[]
  },
  bLoginOut:0
})