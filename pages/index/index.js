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
    resultComment: "本阶段目标10000步"    
  },
  onLoad: function(options) {

  },
  onReady: function() {
    // 页面初始化 options为页面跳转所带来的参数
    let that = this;
    // 以下两个是测试数据
    let totalItems = 10000;
    let rightItems = 5000;
    // let completePercent = parseInt((rightItems / totalItems) * 100);
    // that.getResultComment(completePercent);
    that.showScoreAnimation(rightItems, totalItems);
  },
  onShow: function() {
    // 页面显示
    this.startTime()
    wx.getUserInfo({
      success: res => {
        this.setData({
          wxName: res.userInfo.nickName,
          avatar: res.userInfo.avatarUrl
        })
      }
    })
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  },
  //打卡按钮
  toClock: function() {
    wx.showNavigationBarLoading()
    console.log(App)
    if (!App.globalData.userInfo) {
      //获取用户信息失败后。请跳转授权页面
      wx.showModal({
        title: '警告',
        content: '尚未进行授权，请点击确定跳转到授权页面进行授权。',
        success: function(res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.navigateTo({
              url: '../tologin/tologin',
            })
          }
        }
      })
      return false;
    }
    this.setData({
      "touchBled": false
    })
    wx.hideNavigationBarLoading()

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

  showScoreAnimation: function(rightItems, totalItems) {
    /*
    cxt_arc.arc(x, y, r, sAngle, eAngle, counterclockwise);
    x	                    Number	  圆的x坐标
    y	                    Number	  圆的y坐标
    r	                    Number	  圆的半径
    sAngle	            Number	  起始弧度，单位弧度（在3点钟方向）
    eAngle	            Number	  终止弧度
    counterclockwise	    Boolean	  可选。指定弧度的方向是逆时针还是顺时针。默认是false，即顺时针。
    */
    let that = this;
    let copyRightItems = 0;
    // that.setData({
      // timer: setInterval(function() {
        // copyRightItems = copyRightItems+5;
        if (rightItems >= totalItems) {
          console.log(copyRightItems)
          that.setData({
            resultComment: "本阶段目标已达成",
            rightItems: rightItems
          })
          // clearInterval(that.data.timer)
        } else {
          that.setData({
            rightItems: rightItems
          })
          // 页面渲染完成
          // 这部分是灰色底层
          let cxt_arc = wx.createCanvasContext('canvasArc'); //创建并返回绘图上下文context对象。
          cxt_arc.setLineWidth(8); //绘线的宽度
          cxt_arc.setStrokeStyle('#d2d2d2'); //绘线的颜色
          cxt_arc.setLineCap('round'); //线条端点样式
          cxt_arc.beginPath(); //开始一个新的路径
          cxt_arc.arc(120, 120, 115, 0, 2 * Math.PI, false); //设置一个原点(53,53)，半径为50的圆的路径到当前路径
          cxt_arc.stroke(); //对当前路径进行描边
          //这部分是蓝色部分
          cxt_arc.setLineWidth(8);
          cxt_arc.setStrokeStyle('#3ea6ff');
          cxt_arc.setLineCap('round')
          cxt_arc.beginPath(); //开始一个新的路径
          cxt_arc.arc(120, 120, 115, -Math.PI * 1 / 2, 2 * Math.PI * (rightItems / totalItems) - Math.PI * 1 / 2, false);
          cxt_arc.stroke(); //对当前路径进行描边
          cxt_arc.draw();
        }
      // }, 1)
    // })
  },
  getResultComment: function(completePercent) {
    let that = this;
    switch (true) {
      case completePercent < 60:
        that.setData({
          resultComment: "渣渣"
        })
        break;
      case completePercent >= 60 && completePercent <= 69:
        that.setData({
          resultComment: "学弱"
        })
        break;
      case completePercent >= 70 && completePercent < 80:
        that.setData({
          resultComment: "中等"
        })
        break;
      case completePercent >= 80 && completePercent < 90:
        that.setData({
          resultComment: "良好"
        })
        break;
      case completePercent >= 90 && completePercent < 95:
        that.setData({
          resultComment: "优秀"
        })
        break;
      case completePercent >= 95 && completePercent < 100:
        that.setData({
          resultComment: "学霸"
        })
        break;
      case completePercent >= 100:
        that.setData({
          resultComment: "学神"
        })
        break;
    }
  },
})