//home.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list_items:[],
    motto: 'Hello World'
  },
  //事件处理函数
  bindViewTap: function () {
    wx.switchTab({
      url: "../mine/mine",
      success: function (options) {
        console.log(options)
        console.log('跳转到news页面成功')// success              
      },
      fail: function (options) {

        console.log(options)  // fail 
      }
    })
  },
  onLoad: function () {
    this.loadTestInfo()
  },

  loadTestInfo() {
    var self = this
    wx.request({
      url: 'https://cnodejs.org/api/v1/topics', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        self.setData({
          list_items : [...res.data.data]
        })
        console.log(self.list_items)
      }
    })
  }
})
