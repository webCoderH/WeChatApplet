var App = getApp();
//按钮打卡页面
var util = require('../../utils/util.js')
Page({
  data: {
    wxName: '',
    avatar: '',
    btnStr: '打卡',
    timer: '',
    touchBled: true,
    progress_txt: '当前步数',
    step_txt: 5000,
    count: 0, // 设置 计数器 初始为0
    countTimer: null // 设置 定时器 初始为null
  },
  onLoad: function(options) {

  },
  onReady: function() {


  },
  onShareAppMessage: function () {
    return {
      title: '挖得起我',
      desc: '大沙发上的飞洒的电风扇!',
      path: '/pages/index/index'
    }
  },
  onShow: function() {
    // 页面显示
    var that = this;
    wx.getUserInfo({
      withCredentials: true,
      success: function (res) {
        that.setData({
          wxName: res.userInfo.nickName,
          avatar: res.userInfo.avatarUrl
        })
      }
    })
    this.startTime()
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  },
  //打卡按钮
  toClock: function() {
    var that = this;
    wx.getUserInfo({
      success: res => {
        that.setData({
          wxName: res.userInfo.nickName,
          avatar: res.userInfo.avatarUrl
        })
        wx.getWeRunData({
          success(res) {
            const encryptedData = res.encryptedData
            wx.showNavigationBarLoading()
            that.setData({
              touchBled: false
            })
            // // 以下两个是测试数据
            let totalItems = 10000;
            let rightItems = that.data.step_txt;
            let completePercent = Number(rightItems / totalItems);
            that.drawProgressbg();
            console.log(completePercent)
            that.drawCircle(completePercent * 2)
            // this.countInterval()
            wx.hideNavigationBarLoading()
          },
          fail(e) {
            // werun
            wx.getSetting({
              success(res) {
                console.log(res)
                if (!res.authSetting['scope.werun']) {
                  wx.showModal({
                    title: '警告',
                    content: '尚未进行微信运动授权，请跳转到授权页面进行授权。',
                    showCancel: false,
                    confirmText: "知道了",
                    success: function (res) {
                      wx.openSetting({
                        success(res) {
                          console.log(res.authSetting)
                          // res.authSetting = {
                          //   "scope.userInfo": true,
                          //   "scope.userLocation": true
                          // }
                        }
                      })
                    }
                  })
                }
              }
            })
          }
        })
      },
      fail() {
        wx.showModal({
          title: '警告',
          content: '尚未进行授权，请点击确定跳转到授权页面进行授权。',
          showCancel: false,
          confirmText: "知道了",
          success: function (res) {
            if (res.confirm) {
              wx.navigateTo({
                url: '../tologin/tologin',
              })
            }
          }
        })
      }
    })

  },
  startTime: function() {
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
    var t = setTimeout(() => {
      this.startTime()
    }, 500);
  },

  checkTime: function(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  },
  drawProgressbg: function() {
    // 使用 wx.createContext 获取绘图上下文 context
    var ctx = wx.createCanvasContext('canvasProgressbg')
    ctx.setLineWidth(4); // 设置圆环的宽度
    ctx.setStrokeStyle('#20183b'); // 设置圆环的颜色
    ctx.setLineCap('round') // 设置圆环端点的形状
    ctx.beginPath(); //开始一个新的路径
    ctx.arc(110, 110, 100, 0, 2 * Math.PI, false);
    //设置一个原点(110,110)，半径为100的圆的路径到当前路径
    ctx.stroke(); //对当前路径进行描边
    ctx.draw();
  },
  drawCircle: function(step) {
    var context = wx.createCanvasContext('canvasProgress');
    // 设置渐变
    var gradient = context.createLinearGradient(200, 100, 100, 200);
    gradient.addColorStop("0", "#2661DD");
    gradient.addColorStop("0.5", "#40ED94");
    gradient.addColorStop("1.0", "#5956CC");

    context.setLineWidth(10);
    context.setStrokeStyle(gradient);
    context.setLineCap('round')
    context.beginPath();
    // 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
    context.arc(110, 110, 100, -Math.PI / 2, step * Math.PI - Math.PI / 2, false);
    context.stroke();
    context.draw()
  },
  // countInterval: function () {
  //   // 设置倒计时 定时器 每100毫秒执行一次，计数器count+1 ,耗时6秒绘一圈
  //   this.countTimer = setInterval(() => {
  //     if (this.data.count <= 60) {
  //       /* 绘制彩色圆环进度条  
  //       注意此处 传参 step 取值范围是0到2，
  //       所以 计数器 最大值 60 对应 2 做处理，计数器count=60的时候step=2
  //       */
  //       this.drawCircle(this.data.count / (60 / 2))
  //       this.data.count++;
  //     } else {
  //       this.setData({
  //         progress_txt: "匹配成功"
  //       });
  //       clearInterval(this.countTimer);
  //     }
  //   }, 100)
  // },
})