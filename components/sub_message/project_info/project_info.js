const userLib=require('../../../utils/user');
const app=getApp();
const User=require('../../../controller/User');
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
    oneCat:"企业发布",
    twoCat:"项目合作",
    params:{
      title:"测试公司类型",
      stitle:"测试公司小类型",
      discription:"这是藐视内容",
      company_kind_name:"",
      categories:[],
      comments:'这是正文内容',
      uid:"",
      tags: "kp_iR2P01"
    }
  },

  /**
   * 组件的方法列表
   */
  ready(){
    console.log(app.globalData.userData)
    let categories=[];
    let params=this.data.params;
    params.company_kind_name=app.globalData.userData.company_kind_name;
    params.uid=app.globalData.userData._id;
    categories.push(User.searchCategory(app.globalData.categoryList,this.data.oneCat));
    categories.push(User.searchCategory(app.globalData.categoryList,this.data.twoCat));
    params.categories=categories;
    this.setData({params});
  },
  methods: {
    inputChange(e){
        let type=e.currentTarget.dataset.type; 
        let val=e.detail.detail.value;
        let params=this.data.params;
        params[type]=val;
        this.setData({params});
    },
    submit(){
      console.log(this.data.params);
      console.log('发布了啦啦');

      userLib.addOneContent(this.data.params).then(result=>{
        console.log(result); 
        wx.showToast({
           title:"发布成功,审核完成后即可展示",
           icon:"none",
           duration:2000
         })
         console.log('来这了')
         setTimeout(()=>{
           wx.navigateBack()
         },2000)
        
      }).catch(err=>{
        console.log(err);
        wx.showToast({
          title:`${err}`,
          icon:"none"
        })
      })
    }
  }
})
