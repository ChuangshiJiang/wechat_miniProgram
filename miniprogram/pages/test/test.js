"use strict";
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
    },
    onLoad: function () {
        var _this = this;
        setTimeout(function () {
            _this.setData({
                msg: 'hello master',
            }, function () {
                console.log('数据修改完成，页面渲染成功');
            });
        }, 1000);
        wx.showToast({
            title: '已发送',
            icon: 'success',
            duration: 1500
        });
        var info = wx.getSystemInfoSync();
        console.log('小程序的基础版本为：', info.SDKVersion);
    },
    onShow: function () { },
    onReady: function () {
        this.setData({
            imgSrc: 'https://www.baidu.com/img/bd_logo1.png'
        });
    },
    onHide: function () { },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
        console.log('用户触发了下拉刷新操作');
    },
    onReachBottom: function () {
        console.log('界面下方距离页面底部小于100像素liao');
    },
    onShareAppMessage: function () {
        return {
            title: '自定义转发标题',
            path: '/page/user?id=123'
        };
    },
    onPageScroll: function () { },
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
                if (res.networkType === 'wifi') {
                    wx.downloadFile({
                        url: 'https://test.com/somefile.pdf',
                        success: function (res) {
                            wx.openDocument({
                                filePath: res.tempFilePath
                            });
                        }
                    });
                }
                else {
                    wx.showToast({
                        title: '当前为非wifi网络'
                    });
                }
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxhQUFhO1FBQ2xCLE9BQU8sRUFBRSxLQUFLO1FBQ2QsT0FBTyxFQUFFO1lBQ1A7Z0JBQ0UsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsRUFBRSxFQUFFLENBQUM7YUFDTjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxLQUFLO2dCQUNkLEVBQUUsRUFBRSxDQUFDO2FBQ047U0FDRjtRQUNELEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFHRCxNQUFNLEVBQU47UUFBQSxpQkFtQ0M7UUFsQ0MsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixHQUFHLEVBQUUsY0FBYzthQUNwQixFQUFFO2dCQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDUixFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1gsS0FBSyxFQUFFLEtBQUs7WUFDWixJQUFJLEVBQUUsU0FBUztZQUNmLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBb0I3QyxDQUFDO0lBRUQsTUFBTSxnQkFBSyxDQUFDO0lBRVosT0FBTyxFQUFQO1FBQ0UsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUVaLE1BQU0sRUFBRSx3Q0FBd0M7U0FDbkQsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sZ0JBQUssQ0FBQztJQUlaLFFBQVE7SUFFUixDQUFDO0lBR0QsaUJBQWlCO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsYUFBYTtRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsT0FBTztZQUNMLEtBQUssRUFBRSxTQUFTO1lBQ2hCLElBQUksRUFBRSxtQkFBbUI7U0FDMUIsQ0FBQTtJQUNILENBQUM7SUFFRCxZQUFZLGdCQUFLLENBQUM7SUFDbEIsVUFBVTtRQUNSLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDVixPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNYLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7Z0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxtQkFBbUI7UUFDakIsRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUNoQixPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksR0FBRyxDQUFDLFdBQVcsS0FBSyxNQUFNLEVBQUU7b0JBQzlCLEVBQUUsQ0FBQyxZQUFZLENBQUM7d0JBQ2QsR0FBRyxFQUFFLCtCQUErQjt3QkFDcEMsT0FBTyxFQUFFLFVBQUMsR0FBRzs0QkFFWCxFQUFFLENBQUMsWUFBWSxDQUFDO2dDQUNkLFFBQVEsRUFBRSxHQUFHLENBQUMsWUFBWTs2QkFDM0IsQ0FBQyxDQUFDO3dCQUNMLENBQUM7cUJBQ0YsQ0FBQyxDQUFDO2lCQUNKO3FCQUFNO29CQUNMLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBQ1gsS0FBSyxFQUFFLFlBQVk7cUJBQ3BCLENBQUMsQ0FBQztpQkFDSjtZQUNILENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgbXNnOiAnaGVsbG8gd29ybGQnLFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBtc2dMaXN0OiBbXHJcbiAgICAgIHtcclxuICAgICAgICBtZXNzYWdlOiAnZm9vJyxcclxuICAgICAgICBpZDogMVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbWVzc2FnZTogJ2JhcicsXHJcbiAgICAgICAgaWQ6IDJcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgIHRpbWVyOiBudWxsLFxyXG4gIH0sXHJcbiAgLy9QYWdl5a6e5L6L55qENeS4queUn+WRveWRqOacn+WHveaVsFxyXG4gIC8v55uR5ZCs6aG16Z2i5Yqg6L2977yM6Kem5Y+R5pe25py65pep5LqOb25TaG935ZKMb25SZWFkeVxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICBtc2c6ICdoZWxsbyBtYXN0ZXInLFxyXG4gICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgLy/lnKjov5nmrKFzZXREYXRh5a+555WM6Z2i5riy5p+T5a6M5q+V5ZCO6Kem5Y+RXHJcbiAgICAgICAgY29uc29sZS5sb2coJ+aVsOaNruS/ruaUueWujOaIkO+8jOmhtemdoua4suafk+aIkOWKnycpO1xyXG4gICAgICB9KTtcclxuICAgIH0sIDEwMDApXHJcbiAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICB0aXRsZTogJ+W3suWPkemAgScsXHJcbiAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgZHVyYXRpb246IDE1MDBcclxuICAgIH0pO1xyXG4gICAgbGV0IGluZm8gPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgY29uc29sZS5sb2coJ+Wwj+eoi+W6j+eahOWfuuehgOeJiOacrOS4uu+8micsIGluZm8uU0RLVmVyc2lvbik7XHJcblxyXG4gICAgLy8gLy/pgJrov4d1c2VyYWdlbnTojrflj5blvIDlj5HogIXlt6Xlhbd3ZWJzb2NrZXTmnI3liqHlmajnm5HlkKznmoTnq6/lj6NcclxuICAgIC8vIGxldCBwb3J0ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL3BvcnRcXC8oXFxkKikvKVsxXTtcclxuICAgIC8vIC8v6YCa6L+H5oyH5a6aIHByb3RvY29sID09PSAnQVBQU0VSVklDJyDlkYrnn6XlvIDlj5HogIXlt6Xlhbfov5nkuKrpk77mjqXmnaXoh6rpgLvovpHlsYJcclxuICAgIC8vIGxldCB3cyA9IG5ldyBXZWJTb2NrZXQoYHdzOi8vMTI3LjAuMC4xOiR7cG9ydH1gLCdBUFBTRVJWSUNFJyk7XHJcbiAgICAvLyB3cy5vbm1lc3NhZ2UgPSAoZXZlbnQpPT57XHJcbiAgICAvLyAgIGxldCBtZXNzYWdlID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcclxuICAgIC8vICAgLy/lpITnkIbmnaXoh6rlvIDlj5HogIXnmoTkv6Hmga9cclxuICAgIC8vICAgY29uc29sZS5sb2cobWVzc2FnZSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gLy/osIPnlKhhcGnmjqXlj6Mgd3gubmF2aWdhdGVCYWNrXHJcbiAgICAvLyB3cy5zZW5kKEpTT04uc3RyaW5naWZ5KHtcclxuICAgIC8vICAgY29tbWFuZDonQVBQU0VSVklDRV9JTlZPS0UnLFxyXG4gICAgLy8gICBkYXRhOntcclxuICAgIC8vICAgICBhcGk6J25hdmlnYXRlQmFjaycsXHJcbiAgICAvLyAgICAgYXJnczp7fVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KSk7XHJcbiAgfSxcclxuICAvL+ebkeWQrOmhtemdouaYvuekuu+8jOinpuWPkeS6i+S7tuaXqeS6jm9uUmVhZHlcclxuICBvblNob3coKSB7IH0sXHJcbiAgLy/nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcclxuICBvblJlYWR5KCkgeyBcclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAvLyBpbWdTcmM6J2h0dHA6Ly9iZGRuLmNuL3BpY3MvYWt5ay5qcGcnLFxyXG4gICAgICBpbWdTcmM6ICdodHRwczovL3d3dy5iYWlkdS5jb20vaW1nL2JkX2xvZ28xLnBuZydcclxuICB9KTtcclxuICB9LFxyXG4gIC8v55uR5ZCs6aG16Z2i6ZqQ6JePXHJcbiAgb25IaWRlKCkgeyB9LFxyXG4gIC8v55uR5ZCs6aG16Z2i5Y246L29XHJcbiAgLy/lvZPliY3pobXpnaLkvb/nlKh3eC5yZWRpcmVjdFRv5oiWd3gubmF2aWdhdGVCYWNr6L+U5Zue5Yiw5YW25LuW6aG15pe277yMXHJcbiAgLy/lvZPliY3pobXpnaLkvJrooqvlvq7kv6HlrqLmiLfnq6/plIDmr4Hlm57mlLbvvIzmraTml7ZQYWdl5p6E6YCg5Zmo5Y+C5pWw5omA5a6a5LmJ55qEb25VbmxvYWTmlrnms5XkvJrooqvosIPnlKjjgIJcclxuICBvblVubG9hZCgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLy/pobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgY29uc29sZS5sb2coJ+eUqOaIt+inpuWPkeS6huS4i+aLieWIt+aWsOaTjeS9nCcpO1xyXG4gIH0sXHJcbiAgLy/pobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcclxuICBvblJlYWNoQm90dG9tKCkge1xyXG4gICAgY29uc29sZS5sb2coJ+eVjOmdouS4i+aWuei3neemu+mhtemdouW6lemDqOWwj+S6jjEwMOWDj+e0oGxpYW8nKTtcclxuICB9LFxyXG4gIC8v55So5oi354K55Ye75Y+z5LiK6KeS6L2s5Y+RXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogJ+iHquWumuS5iei9rOWPkeagh+mimCcsXHJcbiAgICAgIHBhdGg6ICcvcGFnZS91c2VyP2lkPTEyMydcclxuICAgIH1cclxuICB9LFxyXG4gIC8v6aG16Z2i5rua5Yqo6Kem5Y+R5LqL5Lu255qE5aSE55CG5Ye95pWwXHJcbiAgb25QYWdlU2Nyb2xsKCkgeyB9LFxyXG4gIHFyQ29kZVNjYW4oKSB7XHJcbiAgICB3eC5zY2FuQ29kZSh7XHJcbiAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICBsZXQgbnVtID0gcmVzLnJlc3VsdDtcclxuICAgICAgICBjb25zb2xlLmxvZyhudW0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHRhYlRvR2V0TmV0d29ya1R5cGUoKSB7XHJcbiAgICB3eC5nZXROZXR3b3JrVHlwZSh7XHJcbiAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIGlmIChyZXMubmV0d29ya1R5cGUgPT09ICd3aWZpJykge1xyXG4gICAgICAgICAgd3guZG93bmxvYWRGaWxlKHtcclxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly90ZXN0LmNvbS9zb21lZmlsZS5wZGYnLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy/kuIvovb3miJDlip/lkI7ov5vooYzpooTop4jmlofmoaNcclxuICAgICAgICAgICAgICB3eC5vcGVuRG9jdW1lbnQoe1xyXG4gICAgICAgICAgICAgICAgZmlsZVBhdGg6IHJlcy50ZW1wRmlsZVBhdGhcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5b2T5YmN5Li66Z2ed2lmaee9kee7nCdcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59KTsiXX0=