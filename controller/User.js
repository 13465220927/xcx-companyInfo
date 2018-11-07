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
            case "jiancaichanye":
                return "建材产业";
                break;
            case "zhongjiejigou":
                return "中介机构";
                break;
            case "jinrongbaoxian":
                return "金融保险";
                break;
            case "guanggaochuanmei":
                return "广告传媒";
                break;
            case "wuliuyunshu":
                return "物流运输";
                break;
            case "jiudiancanyin":
                return "酒店餐饮";
                break;
            case "jiazhengbaoan":
                return "家政保安";
                break;
            case "yulexiuxian":
                return "娱乐休闲";
                break;
            case "jiaoyupeixun":
                return "教育培训";
                break;
            case "jianzhujiazhuang":
                return "建筑家装";
                break;
            case "lingshoubaihuo":
                return "零售百货";
                break;
            case "qichefuwu":
                return "汽车服务";
                break;
            case "yiliaobaojian":
                return "医疗保健";
                break;
            default:
                return  company_kind_name;                                                                  
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
    searchCategory(categoryList,name){
        console.log(name)
        let arr=[];
        arr=categoryList.filter(item=>{
            return item.name==name;
        });
        console.log(arr)
        return arr[0].id;
    }
}

module.exports=new User();