// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menulist: [
      { id: '1', img: '../../images/index/b1181127267.jpg', title: '台湾卤肉饭', subtitle: '原味、茄子、卤肉、黄玉米，酸辣真美味', price: '25.9' },
      { id: '2', img: '../../images/index/b1181127267.jpg', title: '台湾卤肉饭', subtitle: '原味、茄子、卤肉、黄玉米', price: '25.9' },
      { id: '3', img: '../../images/index/b1181127267.jpg', title: '台湾卤肉饭', subtitle: '原味、茄子、卤肉、黄玉米', price: '25.9' },
      { id: '4', img: '../../images/index/b1181127267.jpg', title: '台湾卤肉饭', subtitle: '原味、茄子、卤肉、黄玉米', price: '25.9' },
      { id: '5', img: '../../images/index/b1181127267.jpg', title: '台湾卤肉饭', subtitle: '原味、茄子、卤肉、黄玉米', price: '25.9' },
    ]
  },

  goToDetail(e){
    const id = e.currentTarget.dataset.id
    console.log('id:', id)
    wx.navigateTo({
      url: `/pages/detail/index?foodId=${id}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})