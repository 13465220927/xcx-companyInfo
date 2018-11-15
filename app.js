const userLib=require('./utils/user');
const { $Message } = require('./components/dist/base/index');
App({
  onLaunch: function () {
    userLib.getOpenId(this);
    console.log('onlaunch le')
    // setInterval(()=>{
    //   $Message({
    //     content: '这是一条成功提醒',
    //     type: 'success'
    //   });
    // },6000)
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