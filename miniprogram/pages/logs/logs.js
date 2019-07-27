"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
Page({
    data: {
        logs: [],
        imgSrc: '',
        inputVal: '',
        msgList: [],
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
        console.log('调用接口');
        var _this = this;
        wx.request({
            url: 'https://www.pangbing.top/msgList',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx5Q0FBNkM7QUFFN0MsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLEVBQWM7UUFDcEIsTUFBTSxFQUFFLEVBQUU7UUFDVixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxFQUFFO0tBQ1o7SUFDRCxNQUFNLEVBQU47UUFDRSxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFXO2dCQUN0RCxPQUFPLGlCQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUNsQyxDQUFDLENBQUM7WUFFRixNQUFNLEVBQUUsd0NBQXdDO1NBQ2pELENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxXQUFXLEVBQVgsVUFBWSxRQUFhO1FBQ3ZCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixRQUFRLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQy9CLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDOUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGNBQWMsRUFBZDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEVBQUUsa0NBQWtDO1lBQ3ZDLElBQUksRUFBRSxFQUFFO1lBQ1IsTUFBTSxFQUFFLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFO1lBQzlDLE9BQU8sRUFBUCxVQUFRLEdBQUc7Z0JBRVQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUU7b0JBQ1osS0FBSyxDQUFDLE9BQVEsQ0FBQzt3QkFDYixPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUk7cUJBQ2xCLENBQUMsQ0FBQztpQkFDSjtxQkFBTTtvQkFDTCxFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUNYLEtBQUssRUFBRSxJQUFJO3dCQUNYLE9BQU8sRUFBRSxTQUFTO3dCQUNsQixPQUFPOzRCQUNMLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO3dCQUM5QyxDQUFDO3FCQUNGLENBQUMsQ0FBQztpQkFDSjtZQUVILENBQUM7WUFDRCxJQUFJO1lBRUosQ0FBQztZQUNELFFBQVE7WUFFUixDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vbG9ncy5qc1xuaW1wb3J0IHsgZm9ybWF0VGltZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbG9nczogW10gYXMgc3RyaW5nW10sXG4gICAgaW1nU3JjOiAnJywvL+e9kee7nOWbvueJh+WcsOWdgFxuICAgIGlucHV0VmFsOiAnJywvL+i+k+WFpeahhueahOWAvFxuICAgIG1zZ0xpc3Q6IFtdLC8v5raI5oGv5YiX6KGoXG4gIH0sXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGxvZ3M6ICh3eC5nZXRTdG9yYWdlU3luYygnbG9ncycpIHx8IFtdKS5tYXAoKGxvZzogbnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lKG5ldyBEYXRlKGxvZykpXG4gICAgICB9KSxcbiAgICAgIC8vIGltZ1NyYzonaHR0cDovL2JkZG4uY24vcGljcy9ha3lrLmpwZycsXG4gICAgICBpbWdTcmM6ICdodHRwczovL3d3dy5iYWlkdS5jb20vaW1nL2JkX2xvZ28xLnBuZydcbiAgICB9KTtcbiAgfSxcbiAgaGFuZGxlSW5wdXQoaW5wdXRWYWw6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgaW5wdXRWYWw6IGlucHV0VmFsLmRldGFpbC52YWx1ZSxcbiAgICAgIGltZ1NyYzogaW5wdXRWYWwuZGV0YWlsLnZhbHVlLFxuICAgIH0pO1xuICB9LFxuICAvL+WvvOiIquWIsOmmlumhtVxuICBuYXZpYWd0ZVRvSG9tZSgpIHtcbiAgICBjb25zb2xlLmxvZygn6LCD55So5o6l5Y+jJyk7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICB3eC5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnBhbmdiaW5nLnRvcC9tc2dMaXN0JyxcbiAgICAgIGRhdGE6IHt9LFxuICAgICAgaGVhZGVyOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIC8v5pS25YiwaHR0cHPmnI3liqHmiJDlip/lkI7ov5Tlm55cbiAgICAgICAgY29uc29sZS5sb2coJ+e9kee7nOivt+axgui/lOWbnu+8micsIHJlcy5kYXRhKTtcbiAgICAgICAgaWYgKHJlcy5kYXRhKSB7XG4gICAgICAgICAgX3RoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgbXNnTGlzdDogcmVzLmRhdGFcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ+i/meaYr+S4gOS4quaooeaAgeahhicsXG4gICAgICAgICAgICBzdWNjZXNzKCkge1xuICAgICAgICAgICAgICB3eC5zd2l0Y2hUYWIoeyB1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgIH0sXG4gICAgICBmYWlsKCkge1xuICAgICAgICAvLyDlj5HnlJ/nvZHnu5zplJnor6/nrYnmg4XlhrXop6blj5FcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgLy8g5oiQ5Yqf5oiW6ICF5aSx6LSl5ZCO6Kem5Y+RXG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG59KVxuIl19