class Docs{
    constructor(){

    }
    tidyData(docs){
        let data=[];
        docs.forEach(item=>{
            data.push({
                author:item.uAuthor.userName,
                date:item.date,
                title:item.title,
                tag:item.tags[0].name,
                content:item.comments,
                discription:item.discription
            })
        });
        return data;
    }
    tidyTags(tags){
        let arr=[];
        tags.forEach(item=> {
            arr.push({name:item.name,id:item.id})
        });
        return arr;
    }
    tidyCategories(categories){
        let arr=[];
        categories.forEach(item=>{
           arr.push({name:item.name,id:item._id})
        })
        return arr;
    }
}
module.exports=new Docs();