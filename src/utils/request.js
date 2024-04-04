import axios from "axios";
import { Message, MessageBox } from "element-ui";



// 创建axios实例
const service = axios.create({
    // 公共接口
    baseURL: process.env.VUE_APP_SERVER_URL,
    // 超时时间，5s的超时时间
    timeout: 5 * 1000
})

// 设置cross跨域 并设置访问权限 允许跨域携带cookie信息,使用JWT可关闭
service.defaults.withCredentials = false


service.interceptors.response.use(
    // 接收到响应数据并成功后的一些共有的处理，关闭loading等
    response => {
        const res = response.data
        // 如果自定义代码不是200，则将其判断为错误。
        if (res.code !== 200) {
            // 301: 暂未登录或token已经过期
            if (res.code === 301) {
                // 重新登录
                MessageBox.confirm('会话失效，您可以留在当前页面，或重新登录', '权限不足', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(() => {
                    window.location.href = '#/login'
                })
            } else { // 其他异常直接提示
                Message({
                    showClose: true,
                    message: '⚠' + res.message || 'Error',
                    type: 'error',
                    duration: 3 * 1000
                })
            }
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        /** *** 接收到异常响应的处理开始 *****/
        console.log(error.message)
        if (error.message === 'Network Error') {
            Message({
                showClose: true,
                message: '网络错误，请检查您的网络连接',
                type: 'error',
                duration: 5 * 1000
            });
        }
        return Promise.reject(error)
    }
)
export default service