const config=require('../utils/config');
function formateDate(time){
    let date=new Date(time);
    let Y=date.getFullYear()+'-';
    let M=(date.getMonth()+1<10?'0'+(date.getMonth()+1):date.getMonth()+1)+'-';
    let D=(date.getDate()<10?'0'+date.getDate():date.getDate())+' ';
    let h=date.getHours()+':';
    let m=date.getMinutes()+':';
    let s=date.getSeconds();
    return Y+M+D+h+m+s;
}
class User{
    constructor(){

    }
    loginAfter(result,app,that,email,password){
        result.data.logo=config.hostname+result.data.logo;
        app.globalData.userData=result.data;
        app.bLoginOut=0;
        wx.setStorage({key:"userData",data:{email,password}})
        wx.showToast({title: `登录成功`});
        that.triggerEvent('cancelLoginDialog',{},{});
    }
    reveiveChatList(result,that){
        result.forEach(item=>{
            item.send_time=formateDate(Number(item.send_time));
        })
        that.setData({
            chatList:result
        })
    }
}

module.exports=new User();