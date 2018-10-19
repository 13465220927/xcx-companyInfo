const lib=require('./util');
const config=require('./config');
const Docs=require('../controller/Docs');
const User=require('../controller/User');
function doReg(userName,email,password,confirmPassword){
    let s={
        userName,
        email,
        password,
        confirmPassword
    }
    return lib.post('/users/doReg',s);
}
function doLogin(email,password,app,that){
    let s={
        email,
        password
    }
    return lib.post('/users/doLogin',s).then(result=>{
        User.loginAfter(result,app,that);
    }).catch((err)=>{
        wx.showToast({
            title: `${err}`,
            icon: 'none'
        });
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
function getUserContent(current=1,user_id,that){     //获取指定用户的发布文章
    let api=`/users/getUserContents?current=${current}&user_id=${user_id}`;
    return lib.get(api).then(result=>{
        let data=Docs.tidyData(result.data.docs);
        that.setData({
            docs:that.data.docs.concat(data)
        });
        console.log(that.data.docs)
    });
}
function getUserUploadVideo(uid){
    let api=`/users/getUploadVideo?uid='${uid}'`;
    return lib.get(api);
}
function uploadImg(){
    let api=`/system/upload?type=images`
}
function addOneContent(){       //发布消息
    var params = {
        categories: "Nycd05pP",
        comments: "<p>这里是正文内容<br/></p>",
        discription: "这是文章的摘要",
        sImg: "/upload/images/img20181018181228.jpg",
        tags: "Bk3BDBJoX",
        title: "这是文章的标题"
    }
    return lib.post('/api/content/addOne/',params)
}
function updateUserLogo(uid,logo){
    return  lib.normalPost('/users/updateUserLogo',{uid,logo})
}
module.exports={
    doReg,
    doLogin,
    getUserContent,
    replyMessage,
    getUserUploadVideo,
    addOneContent,
    updateUserLogo
}