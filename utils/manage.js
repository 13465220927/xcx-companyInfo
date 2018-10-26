const lib=require('./util');
const Docs=require('../controller/Docs');
function addAnnounceOne(){
    let s={
        title:'小程序段的公告屌不屌ccc',
        content:'小程序段的内容呀呀呀',
        id:'4JiWCMhzg'
    }
    return lib.post('/manage/systemAnnounce/addOne',s)
}
function getAnnounceList(){
    return lib.get('/manage/systemAnnounce/getList?pageSize=3')
}
function getContentList(that,current=1,typeId){     //获取所有招聘文章的
    let api=``;
    if(typeId){
        api=`/manage/content/getList?current=${current}&state=true&model=simple&typeId=${typeId}`;
    }else{
        api=`/manage/content/getList?current=${current}&state=true&model=simple`;
    }
   
    return lib.get(api).then(result=>{
        if(result.data.docs.length<=0){
            that.setData({
                bLoadMore:false,
                loadTip:"没有更多数据了",
            })
        }
        let data=Docs.tidyArticleData(result.data.docs);

        console.log(data)
        that.setData({
            contentList:data,
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
    let api=`/manage/content/getList?searchkey=${decodeURI(key)}`;
    return lib.get(api).then(result=>{
        let data=Docs.tidyArticleData(result.data.docs);
        that.setData({
            docs:data
        })
    });
}
module.exports={
    addAnnounceOne,
    getAnnounceList,
    getContentList,
    getOneContentDetail,
    getContentTagList,
    getCategoryList,
    serachArticle
}