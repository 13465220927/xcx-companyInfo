const config=require('../../../utils/config');
const userLib=require('../../../utils/user');
const app=getApp();
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
    other_photos:[],
    hostname:''
  },

  /**
   * 组件的方法列表
   */
  ready(){
    this.setData({
      hostname:config.hostname
    })
  }, 
  methods: {
    delProductPho(e){
      let that=this;
      wx.showModal({
        title: '提示',
        content: '确定要删除这张图片吗',
        success (res) {
          if (res.confirm) {
            let other_photos=that.data.other_photos;
            other_photos.splice(e.currentTarget.dataset.index,1)
            that.setData({
              other_photos
            });
            that.triggerEvent('updatePhoto',{other_photos})
          }
        }
      })
    },
    chooseProductPho(){
      if(this.data.other_photos.length>=9){
        wx.showToast({title:"最多上传9张图片",icon:"none"}); 
        return
      }
      userLib.chooseImg().then((result)=>{
        let other_photos=this.data.other_photos;
        other_photos.push(result);
        this.setData({
          other_photos
        })
        this.triggerEvent('updatePhoto',{other_photos},{})
      })
    }
  }
})
