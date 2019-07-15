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
        timer: null
    },
    //Page实例的5个生命周期函数
    //监听页面加载，触发时机早于onShow和onReady
    onLoad: function () {
        var _this = this;
        setTimeout(function () {
            _this.setData({
                msg: 'hello master'
            }, function () {
                //在这次setData对界面渲染完毕后触发
                console.log('数据修改完成，页面渲染成功');
            });
        }, 1000);
        wx.showToast({
            title: '已发送',
            icon: 'success',
            duration: 1500
        });
    },
    //监听页面显示，触发事件早于onReady
    onShow: function () { },
    //监听页面初次渲染完成
    onReady: function () { },
    //监听页面隐藏
    onHide: function () { },
    //监听页面卸载
    //当前页面使用wx.redirectTo或wx.navigateBack返回到其他页时，
    //当前页面会被微信客户端销毁回收，此时Page构造器参数所定义的onUnload方法会被调用。
    onUnload: function () {
    },
    //页面相关事件处理函数--监听用户下拉动作
    onPullDownRefresh: function () {
        console.log('用户触发了下拉刷新操作');
    },
    //页面上拉触底事件的处理函数
    onReachBottom: function () {
        console.log('界面下方距离页面底部小于100像素liao');
    },
    //用户点击右上角转发
    onShareAppMessage: function () {
        return {
            title: '自定义转发标题',
            path: '/page/user?id=123'
        };
    },
    //页面滚动触发事件的处理函数
    onPageScroll: function () { },
    //导航到首页
    naviagteToHome: function (event) {
        wx.switchTab({ url: '/pages/index/index' });
        console.log(event);
        // wx.request({
        //   url: 'https://www.pangbing.top',
        //   data: {},
        //   header: { 'content-type': 'application/json' },
        //   success(res) {
        //     //收到https服务成功后返回
        //     console.log(res.data);
        //   },
        //   fail() {
        //     // 发生网络错误等情况触发
        //   },
        //   complete() {
        //     // 成功或者失败后触发
        //   }
        // });
        wx.showModal({
            title: '提示',
            content: '这是一个模态框'
        });
    },
    //按钮点击
    handleBtnTap: function () {
        this.setData({
            loading: true
        });
    },
    qrCodeScan: function () {
        wx.scanCode({
            success: function (res) {
                var num = res.result;
                console.log(num);
            }
        });
    },
    tabToGetNetworkType: function () {
        wx.getNetworkType({
            success: function (res) {
                console.log(res);
            }
        });
    }
});
