"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WxMock_js_1 = require("./utils/WxMock.js");
WxMock_js_1.default.mock('https://www.pangbing.top/msgList', {
    "code": 200,
    "data": [
        {
            from: 'jack',
            to: 'tom',
            message: 'hello tom'
        },
        {
            from: 'tom',
            to: 'jack',
            message: 'hello jack'
        },
        {
            from: 'tom',
            to: 'jack',
            message: 'where are you now?'
        },
        {
            from: 'jack',
            to: 'tom',
            message: 'I am in Calofonia'
        },
    ]
});
WxMock_js_1.default.mock('https://xxx.com/user/delete', {
    "code": 200,
    "message": "s删除成功"
});
App({
    onLaunch: function () {
        var _this = this;
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        wx.login({
            success: function (_res) {
            }
        });
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (res) {
                            _this.globalData.userInfo = res.userInfo;
                            if (_this.userInfoReadyCallback) {
                                _this.userInfoReadyCallback(res.userInfo);
                            }
                        }
                    });
                }
            }
        });
    },
    globalData: {}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUUEsK0NBQXFDO0FBRXJDLG1CQUFJLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxFQUFFO0lBQzVDLE1BQU0sRUFBRSxHQUFHO0lBQ1gsTUFBTSxFQUFFO1FBQ047WUFDRSxJQUFJLEVBQUUsTUFBTTtZQUNaLEVBQUUsRUFBRSxLQUFLO1lBQ1QsT0FBTyxFQUFFLFdBQVc7U0FDckI7UUFDRDtZQUNFLElBQUksRUFBRSxLQUFLO1lBQ1gsRUFBRSxFQUFFLE1BQU07WUFDVixPQUFPLEVBQUUsWUFBWTtTQUN0QjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEtBQUs7WUFDWCxFQUFFLEVBQUUsTUFBTTtZQUNWLE9BQU8sRUFBRSxvQkFBb0I7U0FDOUI7UUFDRDtZQUNFLElBQUksRUFBRSxNQUFNO1lBQ1osRUFBRSxFQUFFLEtBQUs7WUFDVCxPQUFPLEVBQUUsbUJBQW1CO1NBQzdCO0tBQ0Y7Q0FDRixDQUFDLENBQUE7QUFFRixtQkFBSSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsRUFBRTtJQUN2QyxNQUFNLEVBQUUsR0FBRztJQUNYLFNBQVMsRUFBRSxPQUFPO0NBQ25CLENBQUMsQ0FBQTtBQUdGLEdBQUcsQ0FBUztJQUNWLFFBQVEsRUFBUjtRQUFBLGlCQWdDQztRQTlCQyxJQUFJLElBQUksR0FBYSxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO1FBQ3hCLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBRy9CLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDUCxPQUFPLFlBQUMsSUFBSTtZQUdaLENBQUM7U0FDRixDQUFDLENBQUE7UUFFRixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDWCxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtvQkFFckMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3QkFDYixPQUFPLEVBQUUsVUFBQSxHQUFHOzRCQUVWLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7NEJBR3ZDLElBQUksS0FBSSxDQUFDLHFCQUFxQixFQUFFO2dDQUM5QixLQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBOzZCQUN6Qzt3QkFDSCxDQUFDO3FCQUNGLENBQUMsQ0FBQTtpQkFDSDtZQUNILENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsVUFBVSxFQUFFLEVBQ1g7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2FwcC50c1xuZXhwb3J0IGludGVyZmFjZSBJTXlBcHAge1xuICB1c2VySW5mb1JlYWR5Q2FsbGJhY2s/KHJlczogd3guVXNlckluZm8pOiB2b2lkXG4gIGdsb2JhbERhdGE6IHtcbiAgICB1c2VySW5mbz86IHd4LlVzZXJJbmZvXG4gIH1cbn1cblxuaW1wb3J0IE1vY2sgZnJvbSAnLi91dGlscy9XeE1vY2suanMnO1xuXG5Nb2NrLm1vY2soJ2h0dHBzOi8vd3d3LnBhbmdiaW5nLnRvcC9tc2dMaXN0Jywge1xuICBcImNvZGVcIjogMjAwLFxuICBcImRhdGFcIjogW1xuICAgIHtcbiAgICAgIGZyb206ICdqYWNrJyxcbiAgICAgIHRvOiAndG9tJyxcbiAgICAgIG1lc3NhZ2U6ICdoZWxsbyB0b20nXG4gICAgfSxcbiAgICB7XG4gICAgICBmcm9tOiAndG9tJyxcbiAgICAgIHRvOiAnamFjaycsXG4gICAgICBtZXNzYWdlOiAnaGVsbG8gamFjaydcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyb206ICd0b20nLFxuICAgICAgdG86ICdqYWNrJyxcbiAgICAgIG1lc3NhZ2U6ICd3aGVyZSBhcmUgeW91IG5vdz8nXG4gICAgfSxcbiAgICB7XG4gICAgICBmcm9tOiAnamFjaycsXG4gICAgICB0bzogJ3RvbScsXG4gICAgICBtZXNzYWdlOiAnSSBhbSBpbiBDYWxvZm9uaWEnXG4gICAgfSxcbiAgXVxufSlcblxuTW9jay5tb2NrKCdodHRwczovL3h4eC5jb20vdXNlci9kZWxldGUnLCB7XG4gIFwiY29kZVwiOiAyMDAsXG4gIFwibWVzc2FnZVwiOiBcInPliKDpmaTmiJDlip9cIlxufSlcblxuXG5BcHA8SU15QXBwPih7XG4gIG9uTGF1bmNoKCkge1xuICAgIC8vIOWxleekuuacrOWcsOWtmOWCqOiDveWKm1xuICAgIHZhciBsb2dzOiBudW1iZXJbXSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dzJykgfHwgW11cbiAgICBsb2dzLnVuc2hpZnQoRGF0ZS5ub3coKSlcbiAgICB3eC5zZXRTdG9yYWdlU3luYygnbG9ncycsIGxvZ3MpXG5cbiAgICAvLyDnmbvlvZVcbiAgICB3eC5sb2dpbih7XG4gICAgICBzdWNjZXNzKF9yZXMpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coX3Jlcy5jb2RlKVxuICAgICAgICAvLyDlj5HpgIEgX3Jlcy5jb2RlIOWIsOWQjuWPsOaNouWPliBvcGVuSWQsIHNlc3Npb25LZXksIHVuaW9uSWRcbiAgICAgIH1cbiAgICB9KVxuICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuICAgIHd4LmdldFNldHRpbmcoe1xuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XG4gICAgICAgICAgLy8g5bey57uP5o6I5p2D77yM5Y+v5Lul55u05o6l6LCD55SoIGdldFVzZXJJbmZvIOiOt+WPluWktOWDj+aYteensO+8jOS4jeS8muW8ueahhlxuICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgIC8vIOWPr+S7peWwhiByZXMg5Y+R6YCB57uZ5ZCO5Y+w6Kej56CB5Ye6IHVuaW9uSWRcbiAgICAgICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gICAgICAgICAgICAgIC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXG4gICAgICAgICAgICAgIC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcbiAgICAgICAgICAgICAgaWYgKHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2socmVzLnVzZXJJbmZvKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIGdsb2JhbERhdGE6IHtcbiAgfVxufSkiXX0=