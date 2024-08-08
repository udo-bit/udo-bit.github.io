---
title: vite+vue+ts 封装axios请求
icon: object-group
order: 2
category:
  - vue
tag:
  - Layout
---

## 1. 安装axios

```bash
npm install axios
```

## 2. 封装axios请求
```typescript
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { ElMessage } from "element-plus";

// axios 请求配置
const config = {
    // baseURL:'http://localhost:8080',
    baseURL: '/api',
    timeout: 1000
}
// 定义返回值类型
export interface Result<T = any> {
    code: number;
    msg: string;
    data: T;
}

class Http {
    // axios 实例
    private instance: AxiosInstance;
    // 构造函数初始化
    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config);
        //定义拦截器
        this.interceptors();
    }
    private interceptors() {
        // axios 发送请求之前的处理
        this.instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
            // 在请求头部携带token
            // let token = sessionStorage.getItem('token');
            let token = '';
            if (token) {
                config.headers!['token'] = token;
                // 把 token 放到 headers 里面
                // (config.headers as AxiosRequestHeaders).token = token;
            }
            console.log(config);
            return config;

        }, (error: any) => {
            error.data = {};
            error.data.msg = '服务器异常，请联系管理员！'
            return error;
        })
        // axios 请求返回之后的处理
        // 请求返回处理
        this.instance.interceptors.response.use((res: AxiosResponse) => {
            // console.log(res.data);
            if (res.data.code != 200) {
                ElMessage.error(res.data.msg || '服务器出错啦');
                return Promise.reject(res.data.msg || '服务器出错啦');
            } else {
                return res.data;
            }
        }, (error) => {
            console.log('进入错误！');
            error.data = {};
            if (error && error.response) {
                switch (error.response.status) {
                    case 400:
                        error.data.msg = "错误请求";
                        ElMessage.error(error.data.msg);
                        break;
                    case 401:
                        error.data.msg = "未授权，请登录";
                        ElMessage.error(error.data.msg);
                        break;
                    case 403:
                        error.data.msg = "拒绝访问";
                        ElMessage.error(error.data.msg);
                        break;
                    case 404:
                        error.data.msg = "请求错误，未找到该资源";
                        ElMessage.error(error.data.msg);
                        break;
                    case 405:
                        error.data.msg = "请求方法未允许";
                        ElMessage.error(error.data.msg);
                        break;
                    case 408:
                        error.data.msg = "请求超时";
                        ElMessage.error(error.data.msg);
                        break;
                    case 500:
                        error.data.msg = "服务器端出错";
                        ElMessage.error(error.data.msg);
                        break;
                    case 501:
                        error.data.msg = "网络未实现";
                        ElMessage.error(error.data.msg);
                        break;
                    case 502:
                        error.data.msg = "网络错误";
                        ElMessage.error(error.data.msg);
                        break;
                    case 503:
                        error.data.msg = "服务不可用";
                        ElMessage.error(error.data.msg);
                        break;
                    case 504:
                        error.data.msg = "网络超时";
                        ElMessage.error(error.data.msg);
                        break;
                    case 505:
                        error.data.msg = "http版本不支持该请求";
                        ElMessage.error(error.data.msg);
                        break;
                    default:
                        error.data.msg = `连接错误${error.response.status}`;
                        ElMessage.error(error.data.msg);
                }
            } else {
                error.data.msg = "连接到服务器失败";
                ElMessage.error(error.data.msg)
            }
            return Promise.reject(error);
        })
    }
    // GET方法
    get<T = Result>(url: string, params?: object): Promise<T> {
        return this.instance.get(url, { params });
    }
    // POST方法
    post<T = Result>(url: string, data?: object): Promise<T> {
        return this.instance.post(url, data);
    }
    // PUT方法
    put<T = Result>(url: string, data?: object): Promise<T> {
        return this.instance.put(url, data );
    }
    // DELETE方法
    delete<T = Result>(url: string): Promise<T> {
        return this.instance.delete(url);
    }
}
export default new Http(config);
```

## 3. 参考资料
- 参考：[https://blog.csdn.net/weixin_56050344/article/details/137172550](https://blog.csdn.net/weixin_56050344/article/details/137172550)
- axios文档：[https://axios-http.com/zh/](https://axios-http.com/zh/)
