var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
const App = getApp();
Page({
  data: {
    tabs: ["日排行", "月排行"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    dList: [{
      rank: "1",
      wxName: "Chen",
      avatar: "https://wx.qlogo.cn/mmopen/vi_32/5ic8ZY5hzPbwdpibb0CWS0QRT4XUAuaibZOrg3GpFmJQmmMrIoZk0upKhDflia5R2fhc2iaPXxd4oVvPMbzgrqKjTRQ/132",
      integral: "666"
    }, {
      rank: "2",
      wxName: "Chen",
      avatar: "https://wx.qlogo.cn/mmopen/vi_32/5ic8ZY5hzPbwdpibb0CWS0QRT4XUAuaibZOrg3GpFmJQmmMrIoZk0upKhDflia5R2fhc2iaPXxd4oVvPMbzgrqKjTRQ/132",
      integral: "777"
      }, {
        rank: "3",
        wxName: "Chen",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5ic8ZY5hzPbwdpibb0CWS0QRT4XUAuaibZOrg3GpFmJQmmMrIoZk0upKhDflia5R2fhc2iaPXxd4oVvPMbzgrqKjTRQ/132",
        integral: "888"
      }, {
        rank: "3",
        wxName: "Chen",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5ic8ZY5hzPbwdpibb0CWS0QRT4XUAuaibZOrg3GpFmJQmmMrIoZk0upKhDflia5R2fhc2iaPXxd4oVvPMbzgrqKjTRQ/132",
        integral: "888"
      }, {
        rank: "3",
        wxName: "Chen",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5ic8ZY5hzPbwdpibb0CWS0QRT4XUAuaibZOrg3GpFmJQmmMrIoZk0upKhDflia5R2fhc2iaPXxd4oVvPMbzgrqKjTRQ/132",
        integral: "888"
      }, {
        rank: "3",
        wxName: "Chen",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5ic8ZY5hzPbwdpibb0CWS0QRT4XUAuaibZOrg3GpFmJQmmMrIoZk0upKhDflia5R2fhc2iaPXxd4oVvPMbzgrqKjTRQ/132",
        integral: "888"
      }, {
        rank: "3",
        wxName: "Chen",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5ic8ZY5hzPbwdpibb0CWS0QRT4XUAuaibZOrg3GpFmJQmmMrIoZk0upKhDflia5R2fhc2iaPXxd4oVvPMbzgrqKjTRQ/132",
        integral: "888"
      }, {
        rank: "3",
        wxName: "Chen",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5ic8ZY5hzPbwdpibb0CWS0QRT4XUAuaibZOrg3GpFmJQmmMrIoZk0upKhDflia5R2fhc2iaPXxd4oVvPMbzgrqKjTRQ/132",
        integral: "888"
      }, {
        rank: "3",
        wxName: "Chen",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5ic8ZY5hzPbwdpibb0CWS0QRT4XUAuaibZOrg3GpFmJQmmMrIoZk0upKhDflia5R2fhc2iaPXxd4oVvPMbzgrqKjTRQ/132",
        integral: "888"
      }, {
        rank: "3",
        wxName: "Chen",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5ic8ZY5hzPbwdpibb0CWS0QRT4XUAuaibZOrg3GpFmJQmmMrIoZk0upKhDflia5R2fhc2iaPXxd4oVvPMbzgrqKjTRQ/132",
        integral: "888"
      }, {
        rank: "3",
        wxName: "Chen",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5ic8ZY5hzPbwdpibb0CWS0QRT4XUAuaibZOrg3GpFmJQmmMrIoZk0upKhDflia5R2fhc2iaPXxd4oVvPMbzgrqKjTRQ/132",
        integral: "888"
      }, {
        rank: "3",
        wxName: "Chen",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5ic8ZY5hzPbwdpibb0CWS0QRT4XUAuaibZOrg3GpFmJQmmMrIoZk0upKhDflia5R2fhc2iaPXxd4oVvPMbzgrqKjTRQ/132",
        integral: "888"
      }, {
        rank: "3",
        wxName: "Chen",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5ic8ZY5hzPbwdpibb0CWS0QRT4XUAuaibZOrg3GpFmJQmmMrIoZk0upKhDflia5R2fhc2iaPXxd4oVvPMbzgrqKjTRQ/132",
        integral: "888"
      }, {
        rank: "3",
        wxName: "Chen",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5ic8ZY5hzPbwdpibb0CWS0QRT4XUAuaibZOrg3GpFmJQmmMrIoZk0upKhDflia5R2fhc2iaPXxd4oVvPMbzgrqKjTRQ/132",
        integral: "888"
      }, {
        rank: "3",
        wxName: "Chen",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5ic8ZY5hzPbwdpibb0CWS0QRT4XUAuaibZOrg3GpFmJQmmMrIoZk0upKhDflia5R2fhc2iaPXxd4oVvPMbzgrqKjTRQ/132",
        integral: "888"
      }, {
        rank: "3",
        wxName: "Chen",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5ic8ZY5hzPbwdpibb0CWS0QRT4XUAuaibZOrg3GpFmJQmmMrIoZk0upKhDflia5R2fhc2iaPXxd4oVvPMbzgrqKjTRQ/132",
        integral: "888"
      }, {
        rank: "3",
        wxName: "Chen",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5ic8ZY5hzPbwdpibb0CWS0QRT4XUAuaibZOrg3GpFmJQmmMrIoZk0upKhDflia5R2fhc2iaPXxd4oVvPMbzgrqKjTRQ/132",
        integral: "888"
      }, {
        rank: "3",
        wxName: "Chen",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5ic8ZY5hzPbwdpibb0CWS0QRT4XUAuaibZOrg3GpFmJQmmMrIoZk0upKhDflia5R2fhc2iaPXxd4oVvPMbzgrqKjTRQ/132",
        integral: "888"
      }, {
        rank: "3",
        wxName: "Chen",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5ic8ZY5hzPbwdpibb0CWS0QRT4XUAuaibZOrg3GpFmJQmmMrIoZk0upKhDflia5R2fhc2iaPXxd4oVvPMbzgrqKjTRQ/132",
        integral: "888"
      }, {
        rank: "3",
        wxName: "Chen",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5ic8ZY5hzPbwdpibb0CWS0QRT4XUAuaibZOrg3GpFmJQmmMrIoZk0upKhDflia5R2fhc2iaPXxd4oVvPMbzgrqKjTRQ/132",
        integral: "888"
      }, {
        rank: "3",
        wxName: "Chen",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5ic8ZY5hzPbwdpibb0CWS0QRT4XUAuaibZOrg3GpFmJQmmMrIoZk0upKhDflia5R2fhc2iaPXxd4oVvPMbzgrqKjTRQ/132",
        integral: "888"
      }, {
        rank: "3",
        wxName: "Chen",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5ic8ZY5hzPbwdpibb0CWS0QRT4XUAuaibZOrg3GpFmJQmmMrIoZk0upKhDflia5R2fhc2iaPXxd4oVvPMbzgrqKjTRQ/132",
        integral: "888"
      }, {
        rank: "3",
        wxName: "Chen",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5ic8ZY5hzPbwdpibb0CWS0QRT4XUAuaibZOrg3GpFmJQmmMrIoZk0upKhDflia5R2fhc2iaPXxd4oVvPMbzgrqKjTRQ/132",
        integral: "888"
      }, {
        rank: "3",
        wxName: "Chen",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5ic8ZY5hzPbwdpibb0CWS0QRT4XUAuaibZOrg3GpFmJQmmMrIoZk0upKhDflia5R2fhc2iaPXxd4oVvPMbzgrqKjTRQ/132",
        integral: "888"
      }, {
        rank: "3",
        wxName: "Chen",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5ic8ZY5hzPbwdpibb0CWS0QRT4XUAuaibZOrg3GpFmJQmmMrIoZk0upKhDflia5R2fhc2iaPXxd4oVvPMbzgrqKjTRQ/132",
        integral: "888"
      }, {
        rank: "3",
        wxName: "Chen",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/5ic8ZY5hzPbwdpibb0CWS0QRT4XUAuaibZOrg3GpFmJQmmMrIoZk0upKhDflia5R2fhc2iaPXxd4oVvPMbzgrqKjTRQ/132",
        integral: "888"
      }],
    mList: [{
      rank: "1",
      wxName: "Chen",
      avatar: "https://wx.qlogo.cn/mmopen/vi_32/5ic8ZY5hzPbwdpibb0CWS0QRT4XUAuaibZOrg3GpFmJQmmMrIoZk0upKhDflia5R2fhc2iaPXxd4oVvPMbzgrqKjTRQ/132",
      integral: "999"
    }, {
      rank: "2",
      wxName: "Chen",
      avatar: "https://wx.qlogo.cn/mmopen/vi_32/5ic8ZY5hzPbwdpibb0CWS0QRT4XUAuaibZOrg3GpFmJQmmMrIoZk0upKhDflia5R2fhc2iaPXxd4oVvPMbzgrqKjTRQ/132",
      integral: "10000"
    }, {
      rank: "3",
      wxName: "Chen",
      avatar: "https://wx.qlogo.cn/mmopen/vi_32/5ic8ZY5hzPbwdpibb0CWS0QRT4XUAuaibZOrg3GpFmJQmmMrIoZk0upKhDflia5R2fhc2iaPXxd4oVvPMbzgrqKjTRQ/132",
      integral: "222"
    }]
  },
  onLoad: function() {
    // this.setData({
    //   wxName: App.globalData.userInfo.nickName,
    //   avatar: App.globalData.userInfo.avatarUrl
    // })
    // console.log(App)
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
});