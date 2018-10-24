const App = getApp();
//按钮打卡页面
var util = require('../../utils/util.js')
// var seconds = 10
// var ing //定时器
Page({
  data: {
    encrypt: '',
    wxName: '',
    avatar: '',
    btnStr: '打卡',
    touchBled: true
  },
  onLoad: function (options) {
    this.getUserInfo((info) => {
      this.setData({
        encrypt: info.belongsTo._id,
        wxName: info.wxName,
        avatar: info.img
      })
    })
  },
  onReady: function () {
    // 页面渲染完成
    
  },
  onShow: function () {
    // 页面显示
    this.startTime()
    console.log(App.globalData)
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },

  //获取个人信息  来判断是否打过卡
  getUserInfo: function (cb) {
    // wx.request({
    // url: ,
    // data: {},
    // method: 'GET',
    // success: function (res) {
    //   // success
    //   console.log(res)
    //   typeof cb == 'function' && cb(res.data)
    // }
    // })
  },

  //打卡按钮

  toClock: function () {
    wx.showNavigationBarLoading()
    // ing = setInterval(() => {
    //   this.sleepOneMinute()
    // }, 1000);
    console.log("2")
    // this.setData({
    //   touchBled: false
    // })
    // wx.getLocation({
    //   type: 'wgs84',
    //   success: (res) => {
    //     console.log('location', res)
    //     this.setData({
    //       touchBled: true
    //     })
    //     //this.punch(res.latitude, res.longitude)
    //   },
    //   fail: (res) => {
    //     console.log('location', res)
    //     wx.hideNavigationBarLoading()
    //     this.setData({
    //       info: '打卡功能需要获取您的地理位置信息，请稍后重试'
    //     })
    //     wx.getSetting({
    //       success: (res) => {
    //         if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) { //非初始化进入该页面,且未授权
    //           wx.showModal({
    //             title: '是否授权当前位置',
    //             content: '需要获取您的地理位置，请确认授权，否则无法获取您所需数据',
    //             success: function (res) {
    //               if (res.cancel) {
    //                 wx.showToast({
    //                   title: '授权失败',
    //                   icon: 'success',
    //                   duration: 1000
    //                 })
    //               } else if (res.confirm) {
    //                 wx.openSetting({
    //                   success: function (dataAu) {
    //                     if (dataAu.authSetting["scope.userLocation"] == true) {
    //                       wx.showToast({
    //                         title: '授权成功',
    //                         icon: 'success',
    //                         duration: 1000
    //                       })
    //                     } else {
    //                       wx.showToast({
    //                         title: '授权失败',
    //                         icon: 'success',
    //                         duration: 1000
    //                       })
    //                     }
    //                   }
    //                 })
    //               }
    //             }
    //           })
    //         }
    //       }
    //     })
    //   }
    // })
  },

  startTime: function () {
    var today = new Date();
    var month = today.getMonth();
    var day = today.getDate();
    var week = today.getDay();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds(); // 在小于10的数字前加一个‘0’
    month = this.checkTime(month);
    day = this.checkTime(day);
    m = this.checkTime(m);
    s = this.checkTime(s);
    this.setData({
      hours: h,
      minutes: m,
      month: util.translateMonth(month),
      day: day,
      week: util.translateWeek(week)
    })
    // var t = setTimeout(() => {
    //   this.startTime()
    // }, 500);
  },

  checkTime: function (i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  },

  sleepOneMinute: function () {
    // if (this.data.touchBled == true) {
    //   // seconds--
    //   // this.setData({
    //   //   btnStr: (seconds + ' 秒后可再打卡')
    //   // })
    //   // if (seconds == 0) {
    //   //   this.setData({
    //   //     btnStr: '打卡',
    //   //     touchBled: false,
    //   //   })
    //   //   // seconds = 10
    //   //   // clearInterval(ing)
    //   // }
    // }
  }
})