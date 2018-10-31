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
    modifyFeedForm(that,type,newVal){
        switch (type){
            case "phone":
                 that.setData({phone:newVal});
                 break; 
            case "name":
                 that.setData({name:newVal});
                 break;
            case "message":
                 that.setData({message:newVal});
                 break;           
        }
             
    }
}


module.exports=new Form();