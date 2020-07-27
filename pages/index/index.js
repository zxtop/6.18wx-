//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    num1:0,
    num2:0,
    result:''
  },

  num1change(e){
    this.num1 = Number(e.detail.value);
    console.log('第一个数字为;'+this.num1)
  },

  num2change(e){
    this.num2 = Number(e.detail.value);
    console.log('第二个数字为'+this.num2);
  },
  change2(e){
    let data = {}
    data[e.target.dataset.id] = Number(e.detail.value);
    this.setData(data);
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('页面加载')
    // wx.navigateTo({
    //   url: '/pages/test/test?name1=value1&name2=value2',
    // })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  onReady:function(){
    console.log('页面初次渲染完成');
  },
  onShow:function(){
    console.log('页面显示')
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onPullDownRefresh:function(){
    console.log('此时用户下拉触顶')
  },
  onReachBottom:function(){
    console.log('此时用户上拉触底')
  },
  onPageScroll:function(options){
    console.log('此时用户正在滚动页面');
    console.log('滚动距离：'+options.scrollTop)
  },
  compare(e){
    console.log('比较按钮被点击了',e);
    let str = '两数相等';
    if(this.num1>this.num2){
      str = '第一个数大'
    }else{
      str = '第二数大'
    }
    this.setData({
      result:str
    })
  },
  viewtap(e){
    console.log(e.target.id+'--'+e.currentTarget.id);
  }
})
