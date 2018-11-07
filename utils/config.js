const ajaxHost="https://paxj.zhuozhida.com.cn";  //接口地址
const hostname="http://47.92.123.206:8096";      //静态资源地址

//const ajaxHost="http://localhost:8080";
//const hostname="http://localhost:8080";
const map_key="RDRBZ-2R734-5MRUI-XCYTY-DC246-AKBPE";
let allContactGroup=[    
    {name:"zhengfujiguan",children:[
      {name:"市政府"},
      {name:"政协"},
      {name:"财政局"},
      {name:"教育局"},
      {name:"国税局"},
      {name:"地税局"},
      {name:"公安局"},
      {name:"检察院"},
      {name:"法院"},
      {name:"建设局"},
      {name:"卫生局"},
      {name:"人大常委会"},
    ]},
    {name:"shiyedanwei",children:[
      {name:"新华书店"},
      {name:"文工团"},
    ]},
    {name:"xinwenmeiti",children:[
      {name:"报社"},
      {name:"电视台"}
    ]},
    {name:"yiyuan",children:[
      {name:"人民医院"}
    ]},
    {name:"xuexiao",children:[
      {name:"中心学校"}
    ]},
    {name:"shehuituanti",children:[
        {name:"体育协会"},
        {name:"作家协会"},
    ]},
    {name:"乡镇单位",children:[
        {name:"xxx乡政府"}
    ]},
    {name:"厂矿企业",children:[
        {name:"煤矿"}
    ]},
    {name:"其他",children:[
        {name:"其他"}
    ]},
    {name:"政府",children:[
       
    ]},
]

module.exports={
    ajaxHost,
    hostname,
    appId:"wx20bfc5b736d98eaf",
    defaultPassword:"8weqw8888888",
    allContactGroup,
    map_key
}