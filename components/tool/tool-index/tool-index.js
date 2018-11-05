// components/tool/tool-index/tool-index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: { 
     toolsData:[
       {url:"wuliu",img:"tool/1.jpg",name:"物流查询"},
       {url:"rili",img:"tool/2.jpg",name:"日历查询"},
       {url:"jipiao",img:"tool/3.jpg",name:"机票查询"},
       {url:"qiche",img:"tool/4.jpg",name:"汽车时刻表"},
       {url:"test",img:"tool/5.jpg",name:"天气查询"},
       {url:"chepiao",img:"tool/6.jpg",name:"火车票表查询"},
       {url:"fanyi",img:"tool/7.jpg",name:"在线翻译"},
       {url:"jisuanqi",img:"tool/8.jpg",name:"计算器"},
     ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toUrl(e){
      if(this.data.toolsData[e.currentTarget.dataset.index].url){
        wx.navigateTo({
          url:`../web-view/web-view?key=${this.data.toolsData[e.currentTarget.dataset.index].url}`
        })
      }
      
    }
  }
})
