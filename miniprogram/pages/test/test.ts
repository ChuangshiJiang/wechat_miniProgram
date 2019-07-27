Page({
  data: {
    msg: 'hello world',
    loading: false,
    msgList: [
      {
        message: 'foo',
        id: 1
      },
      {
        message: 'bar',
        id: 2
      }
    ],
    timer: null,
    imgSrc:'',//网络图片地址
    inputVal:'',//输入框的值
  },
  //Page实例的5个生命周期函数
  //监听页面加载，触发时机早于onShow和onReady
  onLoad() {
    setTimeout(() => {
      this.setData({
        msg: 'hello master',
      }, () => {
        //在这次setData对界面渲染完毕后触发
        console.log('数据修改完成，页面渲染成功');
      });
    }, 1000)
    wx.showToast({
      title: '已发送',
      icon: 'success',
      duration: 1500
    });
    let info = wx.getSystemInfoSync();
    console.log('小程序的基础版本为：', info.SDKVersion);

    // //通过useragent获取开发者工具websocket服务器监听的端口
    // let port = window.navigator.userAgent.match(/port\/(\d*)/)[1];
    // //通过指定 protocol === 'APPSERVIC' 告知开发者工具这个链接来自逻辑层
    // let ws = new WebSocket(`ws://127.0.0.1:${port}`,'APPSERVICE');
    // ws.onmessage = (event)=>{
    //   let message = JSON.parse(event.data);
    //   //处理来自开发者的信息
    //   console.log(message);
    // }

    // //调用api接口 wx.navigateBack
    // ws.send(JSON.stringify({
    //   command:'APPSERVICE_INVOKE',
    //   data:{
    //     api:'navigateBack',
    //     args:{}
    //   }
    // }));
  },
  //监听页面显示，触发事件早于onReady
  onShow() { },
  //监听页面初次渲染完成
  onReady() { 
    this.setData({
      // imgSrc:'http://bddn.cn/pics/akyk.jpg',
      imgSrc: 'https://www.baidu.com/img/bd_logo1.png'
  });
  },
  //监听页面隐藏
  onHide() { },
  //监听页面卸载
  //当前页面使用wx.redirectTo或wx.navigateBack返回到其他页时，
  //当前页面会被微信客户端销毁回收，此时Page构造器参数所定义的onUnload方法会被调用。
  onUnload() {

  },

  //页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh() {
    console.log('用户触发了下拉刷新操作');
  },
  //页面上拉触底事件的处理函数
  onReachBottom() {
    console.log('界面下方距离页面底部小于100像素liao');
  },
  //用户点击右上角转发
  onShareAppMessage() {
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  },
  //页面滚动触发事件的处理函数
  onPageScroll() { },
  //导航到首页
  naviagteToHome(event: any) {
    let _this = this;
    wx.request({
      url: 'https://www.pangbing.top/users',
      data: {},
      header: { 'content-type': 'application/json' },
      success(res) {
        //收到https服务成功后返回
        console.log('网络请求返回：', res.data);
        if (res.data) {
          _this.setData({
            msgList: res.data
          });
        } else {
          wx.showModal({
            title: '提示',
            content: '这是一个模态框',
            success() {
              wx.switchTab({ url: '/pages/index/index' });
            }
          });
        }

      },
      fail() {
        // 发生网络错误等情况触发
      },
      complete() {
        // 成功或者失败后触发
      }
    });

  },
  //按钮点击
  handleBtnTap() {
    this.setData({
      loading: true
    });
  },
  qrCodeScan() {
    wx.scanCode({
      success: (res) => {
        let num = res.result;
        console.log(num);
      }
    });
  },
  tabToGetNetworkType() {
    wx.getNetworkType({
      success: (res) => {
        console.log(res);
        if (res.networkType === 'wifi') {
          wx.downloadFile({
            url: 'https://test.com/somefile.pdf',
            success: (res) => {
              //下载成功后进行预览文档
              wx.openDocument({
                filePath: res.tempFilePath
              });
            }
          });
        } else {
          wx.showToast({
            title: '当前为非wifi网络'
          });
        }
      }
    });
  },
  handleInput(inputVal){
    this.setData({
      inputVal:inputVal.detail.value,
      imgSrc: inputVal.detail.value,
    });
  }
});