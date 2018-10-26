const lib=require('./util');
const config=require('./config');
const Docs=require('../controller/Docs');
const User=require('../controller/User');
function doReg(userName,email,password){
    let s={
        userName,
        email,
        password,
        confirmPassword:password
    }
    return lib.post('/users/doReg',s);
}
function doLogin(email,password,app,that){
    let s={
        email,
        password
    }
    return lib.post('/users/doLogin',s).then(result=>{
        User.loginAfter(result,app,that,email,password);
    }).catch((err)=>{
        wx.showToast({
            title: `${err}`,
            icon: 'none'
        });
        if(that){
            that.setData({
                bShowLogin:true
            })
        }
        
    })
}
function replyMessage(content,user_id,contentId){        //回复一条消息
    let s={
        adminReplyAuthor: "",
        content,
        contentId,
        logined: false,
        message: "",
        relationMsgId: "",
        replyAuthor: "",
        replyState: false,
        showErr: false,
        validate: {},
        user_id
    }
    lib.post('/users/message/post',s)
}
function getUserContent(current=1,user_id,that,isAdmin=false){     //获取指定用户的发布文章
    console.log(user_id)
    let api=`/users/getUserContents?current=${current}&user_id=${user_id}&isAdmin=${isAdmin}`;
    return lib.get(api).then(result=>{
        let data=Docs.tidyArticleData(result.data.docs);
        that.setData({
            docs:that.data.docs.concat(data)
           
        });
        if(that.data.totalItems){
            that.setData({
                totalItems:result.data.pageInfo.totalItems
            })
        }
        console.log(that.data.docs)
    });
}
function getUserUploadVideo(uid){
    let api=`/users/getUploadVideo?uid='${uid}'`;
    return lib.get(api);
}
function uploadImg(filePath){
    let api=`/system/upLoadVideo`;
    return new Promise((resolve,reject)=>{
        wx.uploadFile({
            url: config.hostname+api, 
            filePath:filePath,
            name:"img",
            formData:{
               
            },
            success: function(res){
                resolve(JSON.parse(res.data))
            },
            fail(err){
                console.log(err);
                reject(err)
            }
        })
    })
    
}
function addOneContent(){       //发布消息
    var params = {
        categories: "Nycd05pP",
        comments: "哥要发一条求职信息",
        discription: "哥来自小程序",
        sImg: "/upload/images/img201810j18181228.jpg",
        tags: "Bk3BDBJoX",
        title: "哥来自小程序",
        uid:'SJdChE1sX',

        workTimes:"一到三年",
        hopeSalary:"3000以上",
        gender:"0/1//2",
        birthday:"1997-12-26",
        evaluate:"这是自我评价",
        contact:"15110436770"
    }
    return lib.post('/api/content/addOne',params)
}
function updateUserLogo(uid,logo){
    return  lib.normalPost('/users/updateUserLogo',{uid,logo})
}

//用户私信相关
function getChatList(openId,userName,userImg,that){
    return lib.get(`/users/getMyMessList?openId=${openId}&userName=${userName}&userImg=${userImg}`).then(result=>{
        
        User.reveiveChatList(result,that)
    });
}
function getConversatiomDetail(openId,friendId){
    return lib.get(`/users/getConversatiomDetail?openId=${openId}&friendId=${friendId}`);
}
function sendChatMessage(sender_id,receive_id,message_type,message_content){
    
    return lib.normalPost('/users/sendMessage',{
        sender_id,receive_id,message_type,message_content
    });
}
function updateUserInfo(userData){
    if(userData.logo.indexOf(config.hostname)!=-1){
        userData.logo=userData.logo.substring(config.hostname.length);
        console.log(userData.logo) 
    };

    let api=`/users/updateInfo`;
    // let s={
    //     _id,
    //     company_type,
    //     company_info,
    //     supply_info,
    //     service_item,
    //     prefer_policy,
    //     free_item,
    //     userName,
    //     name,
    //     email,
    //     logo,
    //     phoneNum,
    //     confirm,
    //     group,
    //     password,
       
    // }
    return lib.post(api,userData);
}
function chooseImg(count=1){
    return new Promise((resolve,reject)=>{
        wx.chooseImage({
            count,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success (res) {
              // tempFilePath可以作为img标签的src属性显示图片
              const tempFilePaths = res.tempFilePaths;
              wx.showLoading();
              uploadImg(tempFilePaths[0]).then(result=>{
                wx.hideLoading(); 
                resolve(result.path);
              }).catch(err=>{
                  wx.showToast({title:"服务器出错了",icon:"none"})
              })
            }
        })
    })
    
}
function getOpenId(app){
    return new Promise((resolve,reject)=>{
        wx.login({
            success(res) {
                lib.get(`/users/getOpenId?code=${res.code}`).then(result=>{
                    app.sessionKey=result.session_key; 
                    app.openId=result.openid;
                })
            }
        })
    })

};
function decryptPhone(sessionKey,encryptedData,iv){  
  return lib.normalPost('/users/decryptPhone',{appId:config.appId,sessionKey,encryptedData,iv})
}
module.exports={
    doReg,
    doLogin,
    getUserContent,
    replyMessage,
    getUserUploadVideo,
    addOneContent,
    updateUserLogo,
    uploadImg,
    getChatList,
    getConversatiomDetail,
    sendChatMessage,
    updateUserInfo,
    chooseImg,
    getOpenId,
    decryptPhone
}