const {hostname}=require('../utils/config');
function formatDate(time){
     return time.getFullYear()+'年'+(time.getMonth()+1)+'月'+time.getDate()+'日';
}
console.log(new Date().valueOf())
class Docs{
    constructor(){

    }
    tidyData(docs){
        let data=[];
        docs.forEach(item=>{
            console.log(item.tags[1].name)
            data.push({
                userName:item.uAuthor.userName,
                logo:hostname+item.uAuthor.logo,
                date:item.date,
                title:item.title,
                tag:item.tags.length>1?item.tags[1].name:item.tags[0].name,
                content:item.comments,
                discription:item.discription
            })
        });
        return data;
    }
    tidyTags(tags,that,app){
        let arr=[];
        tags.forEach(item=> {
            arr.push({name:item.name,id:item.id})
        });
        app.globalData.contentTags=arr;
        that.setData({
          contentTags:arr
        })
        return arr;
    }
    tidyCategories(categories,that,app){
        let arr=[];
        categories.forEach(item=>{
           arr.push({name:item.name,id:item._id})
        })
        that.setData({
            categoryList:arr
        })
        app.globalData.categoryList=arr;
        return arr;
    }
    tidyArticleData(docs){
         let data=[];
         docs.forEach(item=>{
             let obj={};
             if(item.author){
                obj.userName=item.author.userName;
                obj.uid=item.author._id;
                obj.udate=formatDate(new Date(item.author.date));
                obj.logo=hostname+item.author.logo;
                obj.phoneNum=item.author.phoneNum;
                obj.isAdmin=1;
                obj.company_type=item.author.company_type;
             }else{
                obj.userName=item.uAuthor.userName;
                obj.uid=item.uAuthor._id;
                obj.udate=formatDate(new Date(item.uAuthor.date));
                obj.logo=hostname+item.uAuthor.logo;
                obj.phoneNum=item.uAuthor.email;
                obj.isAdmin=0;
                obj.company_type=item.uAuthor.company_type;
             }
             obj.title=item.title;
             obj.clickNum=item.clickNum;
             if(item.categories[0]){
                obj.category=item.categories[item.categories.length-1].name;
             }
            
             obj.date=item.date;
             obj.discription=item.discription;
             obj.bOpera=false;
             data.push(obj)
         })
         return data;
    }
    switchType(type,app){
        let docTypeData=app.globalData.categoryList;
        let typeId='';
        for(let i=0;i<docTypeData.length;i++){
          if(docTypeData[i].name==type){
               typeId=docTypeData[i].id;
               break;
          }
        }
        return typeId;
    }
}
module.exports=new Docs();