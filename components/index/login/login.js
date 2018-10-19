const userLib=require('../../../utils/user');
const app=getApp();
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
    }
  }
})
