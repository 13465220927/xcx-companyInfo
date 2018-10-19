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
    return lib.get('/manage/systemAnnounce/getList')
}
function getContentList(current=1){     //获取所有招聘文章的
    let api=`/manage/content/getList?current=${current}&state=true&model=simple`
    return lib.get(api)
}
function getOneContentDetail(id){       //获取一篇文章的详情内容
    let api=`/manage/content/getContent?id=${id}`;
    return lib.get(api)      
}
function getContentTagList(){
      let api=`/manage/contentTag/getList`;
      return lib.get(api).then(result=>{
          let data=Docs.tidyTags(result.data.docs);
          console.log(data)
      });
}
function getCategoryList(){
      let api=`/manage/contentCategory/getList`;
      return lib.get(api).then(result=>{
          let data=Docs.tidyCategories(result.data.docs);
          console.log(data)
      });
}
module.exports={
    addAnnounceOne,
    getAnnounceList,
    getContentList,
    getOneContentDetail,
    getContentTagList,
    getCategoryList
}