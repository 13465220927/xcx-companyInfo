const lib=require('./util');
const config=require('./config');
function getAllAds(that){     //获得所有广告位
    let bannerImg=[];
    return lib.get('/api/ads/getAll').then(result=>{
        result.data.docs.forEach(item=>{
            bannerImg.push({img:config.hostname+item.items[0].sImg})
         })
         that.setData({
           bannerImg
         })
    })
}
function getMessageList(contentId,pageSize=100){  //文章下的留言信息
    let data=[];
    let api=`/api/message/getList?contentId=${contentId}&pageSize=${pageSize}`
    return lib.get(api).then(result=>{
        result.data.docs.forEach(item=>{
            data.push({comment:item.content,name:item.author.userName});
        })
    });
    
}
function getOneContent(id){       //获取某一篇文章的详情
    let api=`/api/content/getContent?id=${id}`;
    return lib.get(api);
}
function readTxt(src){
    console.log('src is'+src)
    return new Promise((resolve,reject)=>{
        wx.request({
            url:src,
            success(res){
                resolve(res.data)
            }
        })
    })
}

module.exports={
    getAllAds,
    getMessageList,
    getOneContent,
    readTxt
}