const lib=require('./util');
const Docs=require('../controller/Docs');
const { $Message } = require('../components/dist/base/index');
const Contact=require('../controller/Contact');
function addAnnounceOne(){
    let s={
        title:'小程序段的公告屌不屌ccc',
        content:'小程序段的内容呀呀呀',
        id:'4JiWCMhzg'
    }
    return lib.post('/manage/systemAnnounce/addOne',s)
}
function getAnnounceList(noticeKind,current,pageSize=3){
    let api=`/manage/systemAnnounce/getList?fromXcx=1&pageSize=${pageSize}&current=${current}`;
    if(noticeKind){
        api=`/manage/systemAnnounce/getList?fromXcx=1&pageSize=${pageSize}&noticeKind=${noticeKind}&current=${current}`;
    }
    return lib.get(api)
}
function getOneAnnounceContent(_id){
     return lib.get(`/manage/systemAnnounce/getOne?_id=${_id}`)
}
function getContentList(that,current=1,typeId){     //获取所有招聘文章的
    let api=``;
    if(typeId){
        api=`/manage/content/getList?current=${current}&state=true&model=simple&typeId=${typeId}`;
    }else{
        api=`/manage/content/getList?current=${current}&state=true&model=simple`;
    }
   
    return lib.get(api).then(result=>{
        console.log(result)
        if(result.data.docs.length<=0){
            that.setData({
                bLoadMore:false,
                loadTip:"没有更多数据了",
            })
        }
        let data=Docs.tidyArticleData(result.data.docs);

        console.log(data)
        that.setData({
            docs:that.data.docs.concat(data),
            bLoadData:false,
            totalPage:result.data.pageInfo.totalPage
        })
    })
}
function getSpecifyContentList(that,current=1,specificKind,pageSize=5){
    let api=`/manage/content/getList?pageSize=${pageSize}&current=${current}&state=true&model=simple&specificKind=${specificKind}`;
    return lib.get(api).then(result=>{
        console.log(result)
        if(result.data.docs.length<=0){
            that.setData({
                bLoadMore:false,
                loadTip:"没有更多数据了",
            })
        }else{
            let previousTime=wx.getStorageSync('companyInfoTime');
              
            if(new Date(result.data.docs[0].date).valueOf()>previousTime||!previousTime){
                console.log('来这了')
                $Message({
                    content: '有关于您的消息了',
                    type: 'success'
                });
                that.setData({isHasComInfo:true})
            }
            wx.setStorage({
                key:"companyInfoTime",
                data:new Date(result.data.docs[0].date).valueOf()
            })
        }
        let data=Docs.tidyArticleData(result.data.docs);

        that.setData({
            docs:that.data.docs.concat(data),
            bLoadData:false,
            totalPage:result.data.pageInfo.totalPage
        })
    })
}

function getCompanyConts(that,current,typeId,user){      //获取一个公司主页下的文章
    console.log(user);
    console.log(typeId);
    let api=`/manage/content/getList?user=${user}&current=${current}&state=true&model=simple&typeId=${typeId}`;
    return lib.get(api).then(result=>{
        console.log(result)
        if(result.data.docs.length<=0){
            that.setData({
                bLoadMore:false,
                loadTip:"没有更多数据了",
            })
        }
        let data=Docs.tidyArticleData(result.data.docs);
        
        console.log(data)
        that.setData({
            docs:data,
            bLoadData:false,
            totalPage:result.data.pageInfo.totalPage
        })
    })
}
function getCompanyTypeList(that,current,company_kind_name){         //获取某个公司类型下的文章
    let api=`/manage/content/getList?current=${current}&state=true&model=simple&company_kind_name=${company_kind_name}`;
    return lib.get(api).then(result=>{
        console.log(result)
        if(result.data.docs.length<=0){
            that.setData({
                bLoadMore:false,
                loadTip:"没有更多数据了",
            })
        }
        let data=Docs.tidyArticleData(result.data.docs);
        
        console.log(data)
        that.setData({
            docs:data,
            bLoadData:false,
            totalPage:result.data.pageInfo.totalPage
        })
    })
}

function getOneContentDetail(id){       //获取一篇文章的详情内容
    let api=`/manage/content/getContent?id=${id}`;
    return lib.get(api)      
}
function getContentTagList(that,app){
      let api=`/manage/contentTag/getList`;
      return lib.get(api).then(result=>{
          let data=Docs.tidyTags(result.data.docs,that,app);
      });
}
function getCategoryList(that,app){
      let api=`/manage/contentCategory/getList`;
      return lib.get(api).then(result=>{
          let data=Docs.tidyCategories(result.data.docs,that,app);
      });
}
function serachArticle(key,that){
    let api=`/manage/content/getList?searchkey=${decodeURI(key)}&state=true`;
    return lib.get(api).then(result=>{
        let data=Docs.tidyArticleData(result.data.docs);
        that.setData({
            docs:data
        })
    });
}

function getCompanyList(current,company_type=1,company_kind_name){ 
   let api=`/manage/regUser/getList?current=${current}&pageSize=3&isNomarl=0&company_type=${company_type}&company_kind_name=${company_kind_name}`;
   if(!company_kind_name){
     api=`/manage/regUser/getList?current=${current}&pageSize=3&isNomarl=0&company_type=${company_type}`;
   };
   return lib.get(api);
}

function addContact(name,phone,parentId,address,latitude,longitude){
    return lib.normalPost("/manage/contact/addOne",{name,phone,parentId,address,latitude,longitude,fromXcx:'true'})
}

function getContactList(parentId,key){
    let api;
    if(key){
        key=encodeURI(key);
        api=`/manage/contact/getList?key=${key}`;
    }
    if(parentId){
        api=`/manage/contact/getList?parentId=${parentId}`;
    }
    return lib.get(api);
}
function getContactRoot(rootId){           //获取一个根下的二级树节点
    return lib.get(`/manage/contact/getRoot?rootId=${rootId}`)
}

function getToolList(){
    return lib.get('/manage/tool/getList?pageSize=100')
}
module.exports={
    addAnnounceOne,
    getAnnounceList,
    getContentList,
    getOneContentDetail,
    getContentTagList,
    getCategoryList,
    serachArticle,
    getOneAnnounceContent,
    getCompanyList,
    addContact,
    getCompanyConts,
    getCompanyTypeList,
    getContactList,
    getContactRoot,
    getSpecifyContentList,
    getToolList
}