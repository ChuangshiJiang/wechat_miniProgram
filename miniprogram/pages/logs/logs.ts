//logs.js
import { formatTime } from '../../utils/util'

Page({
  data: {
    logs: [] as string[],
    imgSrc: '',//网络图片地址
    inputVal: '',//输入框的值
    msgList: [],//消息列表
  },
  onLoad() {
    this.setData!({
      logs: (wx.getStorageSync('logs') || []).map((log: number) => {
        return formatTime(new Date(log))
      }),
      // imgSrc:'http://bddn.cn/pics/akyk.jpg',
      imgSrc: 'https://www.baidu.com/img/bd_logo1.png'
    });
  },
  handleInput(inputVal: any) {
    this.setData!({
      inputVal: inputVal.detail.value,
      imgSrc: inputVal.detail.value,
    });
  },
  //导航到首页
  naviagteToHome() {
    console.log('调用接口');
    let _this = this;
    wx.request({
      url: 'https://www.pangbing.top/msgList',
      data: {},
      header: { 'content-type': 'application/json' },
      success(res) {
        //收到https服务成功后返回
        console.log('网络请求返回：', res.data);
        if (res.data) {
          _this.setData!({
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
})
