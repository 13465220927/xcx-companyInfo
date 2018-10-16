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
  },
  }
})
