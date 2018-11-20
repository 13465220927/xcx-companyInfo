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
    let api=`/users/getUserContents?state=true&current=${current}&user_id=${user_id}&isAdmin=${isAdmin}`;
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
    let api=`/users/getUploadVideo?uid=${uid}`;
    return lib.get(api);
}
function uploadImg(filePath){
    let api=`/manage/upLoadVideo`;
    return new Promise((resolve,reject)=>{
        wx.uploadFile({
            url: config.ajaxHost+api, 
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
function addOneContent(params){       //发布消息
   
    return lib.post('/api/content/addOne',params)
}
function updateUserLogo(uid,logo){
    return  lib.normalPost('/users/updateUserLogo',{uid,logo})
}

//用户私信相关
function getChatList(openId,userName,userImg,that){
    return lib.get(`/users/getMyMessList?openId=${openId}&userName=${userName}&userImg=${userImg}`).then(result=>{
        console.log(result);
        User.reveiveChatList(result,that)
    });
}
function getConversatiomDetail(openId,friendId){
    return lib.get(`/users/getConversatiomDetail?openId=${openId}&friendId=${friendId}`);
}
function sendChatMessage(sender_id,receive_id,message_type,message_content,name,img){
    
    return lib.normalPost('/users/sendMessage',{
        sender_id,receive_id,message_type,message_content,name,img
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
                console.log(res);
              // tempFilePath可以作为img标签的src属性显示图片
              const tempFilePaths = res.tempFilePaths;
              wx.showLoading({title:"上传图片中~"});
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
function addOneFeedMsg(phone,name,message){
  return lib.normalPost('/users/decryptPhone',{phone,name,message})
}

function companyUserLogin(account,password,app,that,isInCompanyPage){
    return lib.normalPost('/manage/regUser/companyUserLogin',{account,password}).then(result=>{
        User.loginAfter(result,app,that,account,password,true);
        if(isInCompanyPage){
            wx.switchTab({
                url: '../index/index'
            })
        }
           
    }).catch(err=>{
        wx.showToast({
            title: `账号或密码有误`,
            icon: 'none'
        });
    })
}

function getVideoList(current){
    return lib.get(`/users/getVideoList?current='${current}'`);
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
    decryptPhone,
    addOneFeedMsg,
    companyUserLogin,
    getVideoList
}