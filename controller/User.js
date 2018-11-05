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
    loginAfter(result,app,that,email,password,isCompanyUser=false){
       
        app.globalData.userData=result.data;
        app.bLoginOut=0;
        that.setData({bShowLogin:false})
        wx.setStorage({key:"userData",data:{email,password,isCompanyUser}})
        that.triggerEvent('cancelLoginDialog',{},{});
       
        
        wx.showToast({title: `登录成功`});
        
    }
    reveiveChatList(result,that){
        result.forEach(item=>{
            item.send_time=formateDate(Number(item.send_time));
        })
        that.setData({
            chatList:result
        })
    }
    switchKind(company_kind_name){
        switch (company_kind_name){
            case "jixiezhizao":
                return "机械制造";
                break;
            case "fangzhifangsha":
                return "纺织纺纱";
                break;
            case "suliaozhipin":
                return "塑料制品";
                break;  
            case "yiyaozhipin":
                return "医药制品";
                break;
            case "nongfuchanpin":
                return "农副产品";
                break;    
            case "chuantonggongyi":
                return "传统工艺";
                break; 
            case "mingyouzuofang":
                return "名优作坊";
                break; 
            case "xinxichanye":
                return "信息产业";
                break; 
            case "gangtieyelian":
                return "钢铁冶炼";
                break; 

        }
    }
    tidyCompany(result,that){
        console.log(result)
        result.data.docs.forEach(item=>{
            item.kind= this.switchKind(item.company_kind_name);
        })
       
        that.setData({
            totalItems:result.data.pageInfo.totalItems,
            docs:that.data.docs.concat(result.data.docs),
            loadTip:"没有更多数据了",
            bLoadData:false
        })
    }
}

module.exports=new User();