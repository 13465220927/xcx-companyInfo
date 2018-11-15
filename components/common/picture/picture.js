const {hostname}=require('../../../utils/config');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pics:{type:Array,value:[]}
  },

  /**
   * 组件的初始数据
   */
  data: {
      bShowMore:false,
      hostname
  },

  /**
   * 组件的方法列表
   */
  ready(){
    this.setData({hostname})
  },
  methods: {
    showMore(){
      this.setData({
        bShowMore:true
      })
    },
    previewImg(e){
      console.log(this.data.pics)
      let urls=this.data.pics.map(item=>{
        return item=this.data.hostname+item;
      });
      console.log(urls);
      wx.previewImage({
        current:this.data.hostname+this.data.pics[e.currentTarget.dataset.index], // 当前显示图片的http链接
        urls
      })
    }
  }
})
