"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
Page({
    data: {
        logs: [],
        imgSrc: '',
        inputVal: '',
    },
    onLoad: function () {
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map(function (log) {
                return util_1.formatTime(new Date(log));
            }),
            imgSrc: 'https://www.baidu.com/img/bd_logo1.png'
        });
    },
    handleInput: function (inputVal) {
        this.setData({
            inputVal: inputVal.detail.value,
            imgSrc: inputVal.detail.value,
        });
    },
    naviagteToHome: function () {
        var _this = this;
        wx.request({
            url: 'https://www.pangbing.top/users',
            data: {},
            header: { 'content-type': 'application/json' },
            success: function (res) {
                console.log('网络请求返回：', res.data);
                if (res.data) {
                    _this.setData({
                        msgList: res.data
                    });
                }
                else {
                    wx.showModal({
                        title: '提示',
                        content: '这是一个模态框',
                        success: function () {
                            wx.switchTab({ url: '/pages/index/index' });
                        }
                    });
                }
            },
            fail: function () {
            },
            complete: function () {
            }
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx5Q0FBNkM7QUFFN0MsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLEVBQWM7UUFDcEIsTUFBTSxFQUFFLEVBQUU7UUFDVixRQUFRLEVBQUUsRUFBRTtLQUNiO0lBQ0QsTUFBTSxFQUFOO1FBQ0UsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBVztnQkFDdEQsT0FBTyxpQkFBVSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7WUFDbEMsQ0FBQyxDQUFDO1lBRUYsTUFBTSxFQUFFLHdDQUF3QztTQUNqRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsV0FBVyxFQUFYLFVBQVksUUFBYTtRQUN2QixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osUUFBUSxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSztZQUMvQixNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzlCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxjQUFjLEVBQWQ7UUFDRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSxnQ0FBZ0M7WUFDckMsSUFBSSxFQUFFLEVBQUU7WUFDUixNQUFNLEVBQUUsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUU7WUFDOUMsT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFFVCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pDLElBQUksR0FBRyxDQUFDLElBQUksRUFBRTtvQkFDWixLQUFLLENBQUMsT0FBUSxDQUFDO3dCQUNiLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSTtxQkFDbEIsQ0FBQyxDQUFDO2lCQUNKO3FCQUFNO29CQUNMLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBQ1gsS0FBSyxFQUFFLElBQUk7d0JBQ1gsT0FBTyxFQUFFLFNBQVM7d0JBQ2xCLE9BQU87NEJBQ0wsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxvQkFBb0IsRUFBRSxDQUFDLENBQUM7d0JBQzlDLENBQUM7cUJBQ0YsQ0FBQyxDQUFDO2lCQUNKO1lBRUgsQ0FBQztZQUNELElBQUk7WUFFSixDQUFDO1lBQ0QsUUFBUTtZQUVSLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9sb2dzLmpzXG5pbXBvcnQgeyBmb3JtYXRUaW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCdcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBsb2dzOiBbXSBhcyBzdHJpbmdbXSxcbiAgICBpbWdTcmM6ICcnLC8v572R57uc5Zu+54mH5Zyw5Z2AXG4gICAgaW5wdXRWYWw6ICcnLC8v6L6T5YWl5qGG55qE5YC8XG4gIH0sXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGxvZ3M6ICh3eC5nZXRTdG9yYWdlU3luYygnbG9ncycpIHx8IFtdKS5tYXAoKGxvZzogbnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lKG5ldyBEYXRlKGxvZykpXG4gICAgICB9KSxcbiAgICAgIC8vIGltZ1NyYzonaHR0cDovL2JkZG4uY24vcGljcy9ha3lrLmpwZycsXG4gICAgICBpbWdTcmM6ICdodHRwczovL3d3dy5iYWlkdS5jb20vaW1nL2JkX2xvZ28xLnBuZydcbiAgICB9KTtcbiAgfSxcbiAgaGFuZGxlSW5wdXQoaW5wdXRWYWw6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgaW5wdXRWYWw6IGlucHV0VmFsLmRldGFpbC52YWx1ZSxcbiAgICAgIGltZ1NyYzogaW5wdXRWYWwuZGV0YWlsLnZhbHVlLFxuICAgIH0pO1xuICB9LFxuICAvL+WvvOiIquWIsOmmlumhtVxuICBuYXZpYWd0ZVRvSG9tZSgpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cHM6Ly93d3cucGFuZ2JpbmcudG9wL3VzZXJzJyxcbiAgICAgIGRhdGE6IHt9LFxuICAgICAgaGVhZGVyOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIC8v5pS25YiwaHR0cHPmnI3liqHmiJDlip/lkI7ov5Tlm55cbiAgICAgICAgY29uc29sZS5sb2coJ+e9kee7nOivt+axgui/lOWbnu+8micsIHJlcy5kYXRhKTtcbiAgICAgICAgaWYgKHJlcy5kYXRhKSB7XG4gICAgICAgICAgX3RoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgbXNnTGlzdDogcmVzLmRhdGFcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ+i/meaYr+S4gOS4quaooeaAgeahhicsXG4gICAgICAgICAgICBzdWNjZXNzKCkge1xuICAgICAgICAgICAgICB3eC5zd2l0Y2hUYWIoeyB1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgIH0sXG4gICAgICBmYWlsKCkge1xuICAgICAgICAvLyDlj5HnlJ/nvZHnu5zplJnor6/nrYnmg4XlhrXop6blj5FcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgLy8g5oiQ5Yqf5oiW6ICF5aSx6LSl5ZCO6Kem5Y+RXG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG59KVxuIl19