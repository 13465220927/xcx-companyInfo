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
    bSubmit:false,
    oneCat:"企业发布",
    twoCat:"供求信息",
    params:{
      title:"",
      discription:"",
      comments:"",
      company_kind_name:"",
      other_photos:[],
      tags:[
        "kp_iR2P01"
      ],
    }
  },

  /**
   * 组件的方法列表
   */
  ready(){
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
    modifySpecificKind(e){
      let params=this.data.params;
      params.specificKind=e.detail.specificKind;
      this.setData({
        params
      })
    },
    updatePhoto(e){
      let params=this.data.params;
      params.other_photos=e.detail.other_photos;
      this.setData({params})
    },
    inputChange(e){
      let type=e.currentTarget.dataset.type; 
      let val=e.detail.detail.value;
      let params=this.data.params;
      params[type]=val;
      this.setData({params});
    },
    submit(){
      let params=this.data.params; 
      if(params.comments.length<5){
        wx.showToast({title:"内容信息至少5个字",icon:"none"});
        return
      }else if(params.title.length<5){
        wx.showToast({title:"标题信息至少5个字",icon:"none"});
        return
      }

      if(this.data.bSubmit){
        return
      }else{
        this.setData({bSubmit:true}) 
      }
      
      params.discription=params.comments.substring(0,55);
      console.log(params.discription);
      userLib.addOneContent(params).then(result=>{
         wx.showToast({
           title:"发布成功",
           icon:"none",
           mask:"true",
           duration:2000
         })
         setTimeout(()=>{
           wx.navigateBack()
         },2000)
      }).catch(err=>{
        console.log(err)
        this.setData({bSubmit:false});
        wx.showToast({
          title:`${err}`,
          icon:"none"
        })
      })
    }
  }
})
