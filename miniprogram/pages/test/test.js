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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxhQUFhO1FBQ2xCLE9BQU8sRUFBRSxLQUFLO1FBQ2QsT0FBTyxFQUFFO1lBQ1A7Z0JBQ0UsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsRUFBRSxFQUFFLENBQUM7YUFDTjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxLQUFLO2dCQUNkLEVBQUUsRUFBRSxDQUFDO2FBQ047U0FDRjtRQUNELEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFHRCxNQUFNLEVBQU47UUFBQSxpQkFtQ0M7UUFsQ0MsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixHQUFHLEVBQUUsY0FBYzthQUNwQixFQUFFO2dCQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDUixFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1gsS0FBSyxFQUFFLEtBQUs7WUFDWixJQUFJLEVBQUUsU0FBUztZQUNmLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBb0I3QyxDQUFDO0lBRUQsTUFBTSxnQkFBSyxDQUFDO0lBRVosT0FBTztRQUNMLElBQUksQ0FBQyxPQUFPLENBQUM7WUFFWCxNQUFNLEVBQUUsd0NBQXdDO1NBQ25ELENBQUMsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLGdCQUFLLENBQUM7SUFJWixRQUFRO0lBRVIsQ0FBQztJQUdELGlCQUFpQjtRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELGFBQWE7UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELGlCQUFpQjtRQUNmLE9BQU87WUFDTCxLQUFLLEVBQUUsU0FBUztZQUNoQixJQUFJLEVBQUUsbUJBQW1CO1NBQzFCLENBQUE7SUFDSCxDQUFDO0lBRUQsWUFBWSxnQkFBSyxDQUFDO0lBQ2xCLFVBQVU7UUFDUixFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ1YsT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDWCxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO2dCQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsbUJBQW1CO1FBQ2pCLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDaEIsT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLEdBQUcsQ0FBQyxXQUFXLEtBQUssTUFBTSxFQUFFO29CQUM5QixFQUFFLENBQUMsWUFBWSxDQUFDO3dCQUNkLEdBQUcsRUFBRSwrQkFBK0I7d0JBQ3BDLE9BQU8sRUFBRSxVQUFDLEdBQUc7NEJBRVgsRUFBRSxDQUFDLFlBQVksQ0FBQztnQ0FDZCxRQUFRLEVBQUUsR0FBRyxDQUFDLFlBQVk7NkJBQzNCLENBQUMsQ0FBQzt3QkFDTCxDQUFDO3FCQUNGLENBQUMsQ0FBQztpQkFDSjtxQkFBTTtvQkFDTCxFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUNYLEtBQUssRUFBRSxZQUFZO3FCQUNwQixDQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIG1zZzogJ2hlbGxvIHdvcmxkJyxcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgbXNnTGlzdDogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbWVzc2FnZTogJ2ZvbycsXHJcbiAgICAgICAgaWQ6IDFcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG1lc3NhZ2U6ICdiYXInLFxyXG4gICAgICAgIGlkOiAyXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICB0aW1lcjogbnVsbCxcclxuICB9LFxyXG4gIC8vUGFnZeWunuS+i+eahDXkuKrnlJ/lkb3lkajmnJ/lh73mlbBcclxuICAvL+ebkeWQrOmhtemdouWKoOi9ve+8jOinpuWPkeaXtuacuuaXqeS6jm9uU2hvd+WSjG9uUmVhZHlcclxuICBvbkxvYWQoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgbXNnOiAnaGVsbG8gbWFzdGVyJyxcclxuICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgIC8v5Zyo6L+Z5qyhc2V0RGF0YeWvueeVjOmdoua4suafk+WujOavleWQjuinpuWPkVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCfmlbDmja7kv67mlLnlrozmiJDvvIzpobXpnaLmuLLmn5PmiJDlip8nKTtcclxuICAgICAgfSk7XHJcbiAgICB9LCAxMDAwKVxyXG4gICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgdGl0bGU6ICflt7Llj5HpgIEnLFxyXG4gICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgIGR1cmF0aW9uOiAxNTAwXHJcbiAgICB9KTtcclxuICAgIGxldCBpbmZvID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuICAgIGNvbnNvbGUubG9nKCflsI/nqIvluo/nmoTln7rnoYDniYjmnKzkuLrvvJonLCBpbmZvLlNES1ZlcnNpb24pO1xyXG5cclxuICAgIC8vIC8v6YCa6L+HdXNlcmFnZW506I635Y+W5byA5Y+R6ICF5bel5YW3d2Vic29ja2V05pyN5Yqh5Zmo55uR5ZCs55qE56uv5Y+jXHJcbiAgICAvLyBsZXQgcG9ydCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9wb3J0XFwvKFxcZCopLylbMV07XHJcbiAgICAvLyAvL+mAmui/h+aMh+WumiBwcm90b2NvbCA9PT0gJ0FQUFNFUlZJQycg5ZGK55+l5byA5Y+R6ICF5bel5YW36L+Z5Liq6ZO+5o6l5p2l6Ieq6YC76L6R5bGCXHJcbiAgICAvLyBsZXQgd3MgPSBuZXcgV2ViU29ja2V0KGB3czovLzEyNy4wLjAuMToke3BvcnR9YCwnQVBQU0VSVklDRScpO1xyXG4gICAgLy8gd3Mub25tZXNzYWdlID0gKGV2ZW50KT0+e1xyXG4gICAgLy8gICBsZXQgbWVzc2FnZSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XHJcbiAgICAvLyAgIC8v5aSE55CG5p2l6Ieq5byA5Y+R6ICF55qE5L+h5oGvXHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIC8v6LCD55SoYXBp5o6l5Y+jIHd4Lm5hdmlnYXRlQmFja1xyXG4gICAgLy8gd3Muc2VuZChKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAvLyAgIGNvbW1hbmQ6J0FQUFNFUlZJQ0VfSU5WT0tFJyxcclxuICAgIC8vICAgZGF0YTp7XHJcbiAgICAvLyAgICAgYXBpOiduYXZpZ2F0ZUJhY2snLFxyXG4gICAgLy8gICAgIGFyZ3M6e31cclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSkpO1xyXG4gIH0sXHJcbiAgLy/nm5HlkKzpobXpnaLmmL7npLrvvIzop6blj5Hkuovku7bml6nkuo5vblJlYWR5XHJcbiAgb25TaG93KCkgeyB9LFxyXG4gIC8v55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXHJcbiAgb25SZWFkeSgpIHsgXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAvLyBpbWdTcmM6J2h0dHA6Ly9iZGRuLmNuL3BpY3MvYWt5ay5qcGcnLFxyXG4gICAgICBpbWdTcmM6ICdodHRwczovL3d3dy5iYWlkdS5jb20vaW1nL2JkX2xvZ28xLnBuZydcclxuICB9KTtcclxuICB9LFxyXG4gIC8v55uR5ZCs6aG16Z2i6ZqQ6JePXHJcbiAgb25IaWRlKCkgeyB9LFxyXG4gIC8v55uR5ZCs6aG16Z2i5Y246L29XHJcbiAgLy/lvZPliY3pobXpnaLkvb/nlKh3eC5yZWRpcmVjdFRv5oiWd3gubmF2aWdhdGVCYWNr6L+U5Zue5Yiw5YW25LuW6aG15pe277yMXHJcbiAgLy/lvZPliY3pobXpnaLkvJrooqvlvq7kv6HlrqLmiLfnq6/plIDmr4Hlm57mlLbvvIzmraTml7ZQYWdl5p6E6YCg5Zmo5Y+C5pWw5omA5a6a5LmJ55qEb25VbmxvYWTmlrnms5XkvJrooqvosIPnlKjjgIJcclxuICBvblVubG9hZCgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLy/pobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgY29uc29sZS5sb2coJ+eUqOaIt+inpuWPkeS6huS4i+aLieWIt+aWsOaTjeS9nCcpO1xyXG4gIH0sXHJcbiAgLy/pobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcclxuICBvblJlYWNoQm90dG9tKCkge1xyXG4gICAgY29uc29sZS5sb2coJ+eVjOmdouS4i+aWuei3neemu+mhtemdouW6lemDqOWwj+S6jjEwMOWDj+e0oGxpYW8nKTtcclxuICB9LFxyXG4gIC8v55So5oi354K55Ye75Y+z5LiK6KeS6L2s5Y+RXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogJ+iHquWumuS5iei9rOWPkeagh+mimCcsXHJcbiAgICAgIHBhdGg6ICcvcGFnZS91c2VyP2lkPTEyMydcclxuICAgIH1cclxuICB9LFxyXG4gIC8v6aG16Z2i5rua5Yqo6Kem5Y+R5LqL5Lu255qE5aSE55CG5Ye95pWwXHJcbiAgb25QYWdlU2Nyb2xsKCkgeyB9LFxyXG4gIHFyQ29kZVNjYW4oKSB7XHJcbiAgICB3eC5zY2FuQ29kZSh7XHJcbiAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICBsZXQgbnVtID0gcmVzLnJlc3VsdDtcclxuICAgICAgICBjb25zb2xlLmxvZyhudW0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHRhYlRvR2V0TmV0d29ya1R5cGUoKSB7XHJcbiAgICB3eC5nZXROZXR3b3JrVHlwZSh7XHJcbiAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIGlmIChyZXMubmV0d29ya1R5cGUgPT09ICd3aWZpJykge1xyXG4gICAgICAgICAgd3guZG93bmxvYWRGaWxlKHtcclxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly90ZXN0LmNvbS9zb21lZmlsZS5wZGYnLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy/kuIvovb3miJDlip/lkI7ov5vooYzpooTop4jmlofmoaNcclxuICAgICAgICAgICAgICB3eC5vcGVuRG9jdW1lbnQoe1xyXG4gICAgICAgICAgICAgICAgZmlsZVBhdGg6IHJlcy50ZW1wRmlsZVBhdGhcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5b2T5YmN5Li66Z2ed2lmaee9kee7nCdcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59KTsiXX0=