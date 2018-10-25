class Form{
    constructor(){

    }
    modifyUserInfo(that,type,newVal){
        let userData=that.data.userData;
        userData[type]=newVal;
        console.log(userData[type])
        that.setData({
           userData 
        })
       
    }
}


module.exports=new Form();