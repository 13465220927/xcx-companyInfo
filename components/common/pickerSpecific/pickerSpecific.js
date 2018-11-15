// comps/common/pickerSpecific/pickerSpecific.js
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
    options: [
      {
        children:[
          {value:"",label:"无"}
        ]
      },
      {
      value: '1',
      label: '企业宣传',
      children: [
        {value: 'jixiezhizao',label: '机械制造'},
        {value: 'fangzhifangsha',label: '纺织纺纱'},
        {value: 'suliaozhipin',label: '塑料制品'},
        {value: 'yiyaozhipin',label: '医药制品'},
        {value: 'nongfuchanpin',label: '农副产品',},
        {value: 'chuantonggongyi',label: '传统工艺'},
        {value: 'mingyouzuofang',label: '名优作坊'},
        {value: 'xinxichanye',label: '信息产业'},
        {value: 'gangtieyelian',label: '钢铁冶炼'},
        {value: 'jiancaichanye',label: '建材产业'},
      ]},
      {value: '2',label: '中介机构',children:[
        {value:"zhongjiejigou",label:"中介机构"}
      ]}, 
      {
        value: '3',
        label: '服务机构',
        children: [
          {value: 'jinrongbaoxian',label: '金融保险'},
          {value: 'guanggaochuanmei',label: '广告传媒'}, 
          {value: 'wuliuyunshu',label: '物流运输'},
          {value: 'jiudiancanyin',label: '酒店餐饮'},
          {value: 'jiazhengbaoan',label: '家政保安'},
          {value: 'yulexiuxian',label: '娱乐休闲'},
          {value: 'jiaoyupeixun',label: '教育培训'},
          {value: 'jianzhujiazhuang',label: '建筑家装'},
          {value: 'lingshoubaihuo',label: '零售百货'},
          {value: 'qichefuwu',label: '汽车服务'},
          {value: 'yiliaobaojian',label: '医疗保健'},
        ],
      }
    ],
    multiIndex: [-1, -1],
    multiArray: [
      ["请选择企业类型",'企业宣传', '中介机构','服务机构'],
      []
    ],
    specificKind:"jixiezhizao",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindMultiPickerColumnChange: function (e) {
      console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
      let  objectMultiArray=this.data.objectMultiArray;
      let  multiArray=this.data.multiArray;
      let  multiIndex=this.data.multiIndex;
      multiIndex[e.detail.column] = e.detail.value;
      let options=this.data.options;
      if(e.detail.column==0){
        multiArray[1]=options[Number(e.detail.value)].children.map(item=>{
          return item.label;
        })
        multiIndex[1]=0;
      }
      console.log('9099')
      console.log(multiIndex[0])
      this.setData({
        multiArray,
        multiIndex,
        specificKind:this.searchPinYin(multiIndex[0],multiArray[1][multiIndex[1]])
      })   
      this.triggerEvent('modifySpecificKind',{specificKind:this.data.specificKind})
    },
    searchPinYin(index,label){
       let options=this.data.options;
       let specificKind='';
       if(index>=0&&options[index]){
        options[index].children.forEach(item => {
          if(item.label==label){
           specificKind=item.value;
          }
        });
       }
      
       console.log(specificKind)
       return specificKind;

    },
    cancelPicker(){
      console.log('关闭了')
    },
    bindMultiPickerChange(){

    }
  }
})
