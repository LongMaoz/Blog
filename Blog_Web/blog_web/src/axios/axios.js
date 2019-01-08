import axios from 'axios'
import {
    Notification,Loading 
} from 'element-ui';

let BaseUrl = "https://localhost:5001/api";
let loading;

// 请求时的拦截
axios.interceptors.request.use(function (config) {
    // 发送请求之前做一些处理
    loading = Loading.service({
        lock:true,
        text:"正在加载数据",
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    });
    return config;
}, function (error) {
    // 当请求异常时做一些处理
    Notification.warning({
        title: '警告',
        message: '请求发送异常',
    });
    return Promise.reject(error);
});

// 响应时拦截
axios.interceptors.response.use(function (response) {
    // 返回响应时做一些处理
    Notification.success({
        title: '成功',
        message: '获取成功',
    });
    loading.close()
    return response;
}, function (error) {
    Notification.error({
        title: '错误',
        message: '响应错误',
    });
    loading.close()
    return Promise.reject(error);
});

export default {
    post(url, data) {
        return axios({
            method: 'post', // 请求协议
            url: BaseUrl + url, // 请求的地址
            data: data, // post 请求的数据
            timeout: 5000, // 超时时间, 单位毫秒
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
    },
    get(url, params) {
        return axios({
            method: 'get',
            url: BaseUrl + url,
            params, // get 请求时带的参数
            timeout: 5000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
    },
    put(url,data){
        return axios({
            method:'put',
            url:BaseUrl + url,
            data:data,
            timeout:5000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
    }
}