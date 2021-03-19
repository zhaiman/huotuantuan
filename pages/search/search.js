// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onSearch: function(e) {
    var val = e.detail.q;
    var self = this;
    wx.request({
      url: 'https://movie.douban.com/j/subject_suggest?q=' + val,
      header: {
        "content-type": "json"
      },
      success(res) {
        self.setData({
          results: res.data
        })
      }
    })
  },

  toDetail: function(e) {
    wx.setStorageSync('url', e.currentTarget.dataset.url)
    wx.navigateTo({
      url: '/pages/goodsDetail/goodsDetail',
    })
  }
})