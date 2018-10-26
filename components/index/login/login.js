const userLib=require('../../../utils/user');
const app=getApp();
const {defaultPassword}=require('../../../utils/config');
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
      email:'',
      password:""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toSign(){
      wx.navigateTo({
        url:"../signin/signin"
      })
    },
    emailChange(e){
        console.log(e.detail.detail.value);
        this.setData({
          email:e.detail.detail.value
        })
    },
    passChange(){
      this.setData({
        password:e.detail.detail.value
      })
    },
    handleLogin(){
      //userLib.doLogin(this.data.email,this.data.password,app,this);
      userLib.doLogin("wangjuesix@gmail.com","123456",app,this)
    },
    getPhoneNumber (e) { 
      console.log(e.detail.iv) 
      console.log(e.detail.encryptedData) 
      if(e.detail.iv){
        userLib.decryptPhone(app.sessionKey,e.detail.encryptedData,e.detail.iv).then(result=>{
          const phoneNumber=result.data.phoneNumber;
          userLib.doReg(`用户${parseInt(new Date().valueOf()/1000)}`,phoneNumber,defaultPassword).then(result=>{
             userLib.doLogin(phoneNumber,defaultPassword,app,this)
          }).catch(err=>{
            userLib.doLogin(phoneNumber,defaultPassword,app,this)
          })
        })
      }
    } 
  }
})
