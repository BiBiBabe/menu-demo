// pages/detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {
      img: '../../images/index/b1181127267.jpg',
      title: '台湾卤肉饭',
      subtitle: '原味、茄子、卤肉、黄玉米，酸辣真美味',
      price: '68.86',
      mouthNum: '135',
      list: [
        { title: '主料', content: '猪肉，木耳' },
        { title: '辅料', content: '青辣椒，西芹，大蒜' },
        { title: '菜系', content: '粤菜' },
        { title: '口感', content: '爽口' },
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = options.foodId
  },

})