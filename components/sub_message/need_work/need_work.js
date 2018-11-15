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
  ready(){
    if(app.globalData.contentTags.length==0){
      manageLib.getCategoryList(this,app);
      manageLib.getContentTagList(this,app)
    }  
  },
  data: {
    isAgree:false,
    bSubmit:false, 
    tags : [
            {
                name : '业务员/销售',
                checked : false
            },
            {
                name : '司机',
                checked : false   
            },
            {
                name : '客服',
                checked : false
            },
            {
                name : '前台',
                checked :false,
            },
            {
              name : '文员',
              checked :false,
           },
           {
            name : '设计师',
            checked :false,
           }
        ],
    gender: [
            {name:'保密',value:"0" ,checked: true},
            {name: '男', value: '1'},
            {name: '女', value: '2'}
    ],
   
    workExperience:['应届生','1年内','1-3年','3年+'],
    workIndex:0,
    salaryIndex:0,
    salary:['2000-3000','3000-4000','4000-5000','5000-10000','10000+'],
    company_type:0,
    oneCat:"个人发布",
    twoCat:"求职信息",
    birthday:"",
    params:{
        tags:[
            "kp_iR2P01"
        ],
        company_kind_name:"",
        title:"一则招聘信息",
        other_photos:[],
        recruit:{
            gender:"",         //性别
            salary:"",         //期望薪资 
            workExperience:'', //工作经验
            expectWork:[],     //期望的职位
            tel:"",            //电话号码 
            contacter:"",      //联系人
        },
        contentTags:[],
        categoryList:[],
        discription:"",
        comments:'',
        specificKind:""
    }
  },

  /**
   * 组件的方法列表
   */
  ready(){
      if(app.globalData.userData.company_type!=0){
        this.setData({
            oneCat:"企业发布",
            twoCat:"招聘信息",
        })
      }
      this.setData({
        company_type:app.globalData.userData.company_type
      })

      let categories=[];
      let params=this.data.params;
      params.uid=app.globalData.userData._id;
      params.company_kind_name=app.globalData.userData.company_kind_name;
      categories.push(User.searchCategory(app.globalData.categoryList,this.data.oneCat));
      categories.push(User.searchCategory(app.globalData.categoryList,this.data.twoCat));
      params.categories=categories;
      this.setData({params});
      console.log(app.globalData.contentTags)
  },
  methods: {
    radioChange(e){
        let params=this.data.params;
        params.recruit.gender=this.data.gender[e.detail.value].name;
        this.setData({
            params
        })
    },
    commentsChange(e){
        let type=e.currentTarget.dataset.type; 
        let val=e.detail.detail.value;
        let params=this.data.params;
        params[type]=val;
        this.setData({
            params
        })
    },
    modifySpecificKind(e){
        let params=this.data.params;
        params.specificKind=e.detail.specificKind;
        this.setData({
          params
        })
    },
    inputChange(e){
        let type=e.currentTarget.dataset.type; 
        let val=e.detail.detail.value;
        let params=this.data.params;
        
        params.recruit[type]=val;
        console.log(params.recruit["tel"])
        this.setData({params});
    },  
    submit(){
      if(!this.data.isAgree){
        wx.showToast({
            title:"请点击同意条款",
            icon:"none"
        })
        return;
      }
      if(this.data.bSubmit){
        return
      }else{
        this.setData({bSubmit:true}) 
      }
      
      let params=this.data.params; 
      let arr=[];
      this.data.tags.forEach(item=>{
          if(item.checked){
              arr.push(item.name);
          }
      })
      params.recruit.expectWork=arr;
      if(arr.length==0){
        wx.showToast({
            title:"请至少选择一个职位",
            icon:"none"
        })  
        return
      
      }else if(!params.recruit.tel){
          console.log(params.recruit.tel)
         wx.showToast({title:"请填写联系电话",icon:"none"});
         return
      }else if(!params.recruit.contacter){
        wx.showToast({title:"请填写联系人",icon:"none"});
        return
      }
      params.recruit.birthday=this.data.birthday;
      params.recruit.salary=this.data.salary[this.data.salaryIndex];
      params.recruit.workExperience=this.data.workExperience[this.data.workIndex];


      params.discription=params.comments.substring(0,55);
      console.log('发送的params');
      console.log(params);
      userLib.addOneContent(params).then(result=>{
        let title="发布成功,审核完成后即可展示";
        if(app.globalData.userData.company_type!=0){
            title="发布成功"
        } 
        wx.showToast({
           title:title,
           icon:"none",
           mask:"true",
           duration:2000
         })
         setTimeout(()=>{
           wx.navigateBack()
         },2000)
        
      }).catch(err=>{
        wx.showToast({
            title:`${err}`,
            icon:"none"
        })
        this.setData({bSubmit:false})
      })
    },  
    updatePhoto(e){
        let params=this.data.params;
        params.other_photos=e.detail.other_photos;
        this.setData({params})
    },
    onChange(event){
      const detail = event.detail;
      console.log(['tags['+event.detail.name+'].checked'])
      this.setData({
          ['tags['+event.detail.name+'].checked'] : detail.checked
      }) 
      

      
    },
    toBack(){
      console.log('点击啦')
      wx.switchTab({
          url:"../submit/submit"
      })
    },
    isAgreeChange(event){
      const detail = event.detail;
      this.setData({
          'isAgree' : detail.value
      })
      
    },
    bindExperChange(e){
        console.log(e.detail.value);
        this.setData({
            workIndex:e.detail.value
        })
    },
    bindSalaryChange(e){
        this.setData({
            salaryIndex:e.detail.value
        })
    },
    bindDateChange(e){
        this.setData({
            birthday:e.detail.value
        })
    }
  }
})
