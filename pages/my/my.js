
// 获取全局应用程序实例对象
var app = getApp();
Page({
  data: {
    title: 'user',
    userInfo: null,
    userList: [{
      title: '个人信息',
      id: 'number'
    }, {
      title: '消息中心',
      id: 'message'
    }, {
      title: '积分兑换',
      id: 'integral'
    }, {
      title: '兑换记录',
      id: 'order'
    }]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad() {
    wx.getUserInfo({
      success: res => {
        this.setData({
          userInfo: res.userInfo
        })
      }
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {
    // TODO: onReady
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {
    // TODO: onShow
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function onHide() {
    // TODO: onHide
  },


  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function onUnload() {
    // TODO: onUnload
  },


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function onPullDownRefresh() {
    // TODO: onPullDownRefresh
  }
});