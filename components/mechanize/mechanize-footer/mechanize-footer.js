// components/mechanize/machanize-footer/machanize-footer.js
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
    current: 'tab1',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleChange ({ detail }) {
      this.setData({
          current: detail.key
      });
      this.triggerEvent('toggleKind',{kind:this.swicthKind(detail.key)},{});
      console.log(detail)
    },
    swicthKind(key){
      let kind="";
      switch (key) {
        case "tab1":
          kind="供求信息"
          break;
        case  "tab2":
           kind="创业项目";
           break;
        case  "tab3":
           kind="招聘信息";
           break;   
        case  "tab4":
           kind="综合发布";
           break;     
       }
       return kind
    }
    
  }
})
