const {hostname}=require('./config');
function get(api){
    return new Promise((resolve,reject)=>{
        wx.request({
            url:hostname+api,
            data:{},
            success(res){
               console.log(res.data);
               if(res.data.status==500){
                   reject(res.data.message)
               }else{
                   resolve(res.data);
               }
            }
        })
    })
}
function post(api,data){
    return new Promise((resolve,reject)=>{
        wx.request({
            url:hostname+api,
            method:'POST',
            contentType: "application/json; charset=utf-8",
            data:JSON.stringify(data),
            success(res){
                console.log(res.data)
                if(res.data.status==500){
                    reject(res.data.message) 
                }else{ 
                    resolve(res.data)
                }
            }
        }) 
    })
}
function normalPost(api,data){
    console.log('发送的数据是',data)
    return new Promise((resolve,reject)=>{
        wx.request({
            url:hostname+api,
            method:'POST',
            header: {
                "content-type": "application/x-www-form-urlencoded",
            },
            data,
            success(res){
                console.log(res.data)
                if(res.data.status==500){
                    reject(res.data.message) 
                }else{ 
                    resolve(res.data)
                }
            }
        }) 
    })
}

module.exports = {
    get,
    post,
    normalPost
}
