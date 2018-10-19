const config=require('../utils/config');
class User{
    constructor(){

    }
    loginAfter(result,app,that){
        result.data.logo=config.hostname+result.data.logo;
        app.globalData.userData=result.data;
        wx.setStorage({key:"userData",data:result.data})
        wx.showToast({title: `登录成功`});
        that.triggerEvent('cancelLoginDialog',{},{});
    }
}

module.exports=new User();