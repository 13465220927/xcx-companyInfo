const userLib=require('./utils/user');

App({
  onLaunch: function () {
    userLib.getOpenId(this);
    console.log('onlaunch le')
    wx.hideTabBar({animation:true});
  },
  globalData: {
    userInfo: null,
    contentTags:[],
    categoryList:[],
    userData:{
      company_type:0
    }
  },
  bLoginOut:1
})