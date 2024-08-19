---
title: 31-axios封装(上)
order: 31
---

## 目标
1. 完成基础的axios的封装
2. 完成请求拦截token设置封装
## 开发
### 安装
首先我们先来安装一下axios
```shell
pnpm add axios
```
### 封装
首先我们在项目中创建utils文件夹用于存放我们的工具类。
然后我们创建一个request.ts的文件来封装我们的axios
```typescript
import axios from 'axios'

const instance = axios.create({
  baseURL: '',
  timeout: 6000
})

export default instance

```
其中baseURL我们通过环境变量的方式传入：
在.env中增加：
```shell
VITE_APP_BASE_API='/api' # 项目请求接口路径

```
然后在types/env.d.ts中增加对应的类型：
```typescript
interface ImportMetaEnv {
  readonly VITE_APP_BASE: string
+  readonly VITE_APP_BASE_API:string
}
```
最后调整request.ts中的baseURL
```typescript
import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API || '/',
  timeout: 6000
})

export default instance

```

### 请求拦截器封装
请求拦截器一般情况下我们需要在这里设置请求头的信息，比如在我们登录后，有些接口的请求需要token才能正常访问，所以我们需要在请求前给我们的请求链接携带上我们的token。
一般情况下我们的token是存放在localstorage中的，所以我们先来封装一下我们的token获取的组合式API。
在composables中创建一个authorization.ts的文件
```typescript
export const STORAGE_AUTHORIZATION_KEY = 'Authorization';

export const useAuthorization = createGlobalState(()=>useStorage(STORAGE_AUTHORIZATION_KEY, null))

```
接下来我们一起封装一下请求拦截器在request.ts中：
```typescript
const requestHandler = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
  const authorization = useAuthorization();
  /**
   * 判断是否存在token，如果存在的话，则每个http header都加上token
   */
  if (authorization.value) {
    config.headers = {
      ...config.headers,
      [STORAGE_AUTHORIZATION_KEY]: authorization.value,
    }
  }
  return config
}

instance.interceptors.request.use(requestHandler)
```

### 响应拦截器封装
接下来我们一起封装一下响应拦截器，响应拦截器需要处理的是当数据返回的时候,我们可以对数据进行自定义处理，由于我们数据格式一般都是在后端统一进行返回的，所以处理的逻辑也比较简单，如下：
```typescript
export interface ResponseBody<T = any> {
  code: number
  data?: T
  msg: string
}

const responseHandler = (response: AxiosResponse): ResponseBody<any> | AxiosResponse<any> | Promise<any> | any => {
  return response.data
}

instance.interceptors.response.use(responseHandler)

```
### 错误处理
整个项目我们会采用restful请求的设计风格来实现。所以我们把code码分为了五类，分别是：

- 200：请求成功
- 401：请求未授权
- 403：资源请求错误
- 500：服务器端错误
- 其他错误

那么我们通过axios的响应错误来拦截这些错误。
```typescript
const errorHandler = (error: AxiosError): Promise<any> => {
  // 判断是否存在response
  if (error.response) {
    const { status, statusText } = error.response
    // 401
    if (status === 401) {
      // 重新登录
      // eslint-disable-next-line no-console
      console.log('请求未授权')
    }
    else if (status === 403) {
      // 403
      // eslint-disable-next-line no-console
      console.log('资源请求错误')
    }
    else if (status === 500) {
      // 500
      // eslint-disable-next-line no-console
      console.log('服务器错误')
    }
    else {
      // 其他错误
      // eslint-disable-next-line no-console
      console.log('其他错误', statusText)
    }
  }
  return Promise.reject(error)
}
```
我这里准备了几个链接用于测试我们的状态码：
```shell
# 200
https://mock.lingyu.org.cn/mock/642b5d1e939061307ed09d1b/example/test/200
# 401
https://mock.lingyu.org.cn/mock/642b5d1e939061307ed09d1b/example/test/401
# 403
https://mock.lingyu.org.cn/mock/642b5d1e939061307ed09d1b/example/test/403
# 404
https://mock.lingyu.org.cn/mock/642b5d1e939061307ed09d1b/example/test/404
# 500
https://mock.lingyu.org.cn/mock/642b5d1e939061307ed09d1b/example/test/500
```
然后我们在pages/index.vue中进行测试：
```vue
<script lang="ts" setup>
import request from '~/utils/request'
const onRequest1 = () => {
  request.request({
    url: 'https://mock.28yanyu.cn/mock/637af0d4080d2f1284a9e77b/test/200',
  }).then((res) => {
    // eslint-disable-next-line no-console
    console.log(res)
  })
}
const onRequest2 = () => {
  request.request({
    url: 'https://mock.28yanyu.cn/mock/637af0d4080d2f1284a9e77b/test/401',
  })
}
const onRequest3 = () => {
  request.request({
    url: 'https://mock.28yanyu.cn/mock/637af0d4080d2f1284a9e77b/test/403',
  })
}

const onRequest4 = () => {
  request.request({
    url: 'https://mock.28yanyu.cn/mock/637af0d4080d2f1284a9e77b/test/404',
  })
}

const onRequest5 = () => {
  request.request({
    url: 'https://mock.28yanyu.cn/mock/637af0d4080d2f1284a9e77b/test/500',
  })
}
</script>

<template>
  <div>
    <n-space>
      <n-button @click="onRequest1">
        200
      </n-button>
      <n-button @click="onRequest2">
        401
      </n-button>
      <n-button @click="onRequest3">
        403
      </n-button>
      <n-button @click="onRequest4">
        404
      </n-button>
      <n-button @click="onRequest5">
        500
      </n-button>
    </n-space>
  </div>
</template>

<style scoped>

</style>

```
测试结果：
![image.png](https://cdn.nlark.com/yuque/0/2022/png/10377041/1669017943550-b9db9002-41ca-4b93-bde8-f199c71eba0f.png#averageHue=%23232528&clientId=uc488c07b-a7b3-4&from=paste&height=127&id=ub6411561&name=image.png&originHeight=127&originWidth=639&originalType=binary&ratio=1&rotation=0&showTitle=false&size=5579&status=done&style=none&taskId=u4755726a-27a6-42d9-8d1a-6b9571d6ac5&title=&width=639)
测试通过
