
class Contact{
    constructor(){

    }
    filterGroup(index,that){
        let allData=that.data.allDataArray;
        let children=[];
        allData[Number(index)].children.forEach(item=>{
            children.push(item.name)
           })
           let nowArr=that.data.multiArray;
           nowArr[1]=children
           that.setData({
            multiArray:nowArr
       })
    }
}

module.exports=new Contact();