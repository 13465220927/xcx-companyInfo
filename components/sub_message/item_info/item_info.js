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
    oneCat:"个人发布",
    twoCat:"创业项目",
    params:{
      title:"",
      stitle:"",
      discription:"",
      categories:[],
      comments:'',
      uid:"",
      tags: "kp_iR2P01"
    }
  },

  /**
   * 组件的方法列表
   */
  ready(){
    let categories=[];
    let params=this.data.params;
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
         wx.showToast({
           title:"发布成功,审核完成后即可展示",
           icon:"none",
           mask:"true",
           duration:2000
         })
         setTimeout(()=>{
           wx.navigateBack()
         },2000)
        
      })
    }
  }
})
