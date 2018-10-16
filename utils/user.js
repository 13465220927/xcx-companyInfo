const lib=require('./util');

function doReg(userName,email,password,confirmPassword){
    let s={
        userName,
        email,
        password,
        confirmPassword
    }
    return lib.post('/users/doReg',s);
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
function getUserContent(current=1,user_id){     //获取指定用户的发布文章
    let api=`/users/getUserContents?current=${current}&user_id=${user_id}`;
    return lib.get(api);
}
module.exports={
    doReg,
    getUserContent,
    replyMessage
}