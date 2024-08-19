---
title: 32-axios封装(下)
order: 32
---

## 目标
完成错误提示信息的封装
完成401错误跳转登录页的封装
完成restful请求组合式api的封装
## 错误提示信息
当我们的接口请求发生错误的时候，我们不可能直接在控制台进行打印，对于用户的体验是非常差的，所以我们需要在页面中弹出对应的提示信息。
首先我们需要让我们的提示信息支持多语言，在lang/global下面的zh-CN.ts和en-US.ts中分别导入：
```typescript
// 请求多语言配置
  'global.request.error.401': 'Login Expired',
  'global.request.error.403': 'Resource Request Error',
  'global.request.error.500': 'Server Error',
  'global.request.error.other': 'System Error',
```
```typescript
 // 请求多语言配置
  'global.request.error.401': '登录过期',
  'global.request.error.403': '资源请求错误',
  'global.request.error.500': '服务器错误',
  'global.request.error.other': '系统错误',
```

我们可以使用naive-ui给我们提供的notification组件来实现，接下来我们先来写一下这一部分的代码。
在request.ts中:
```typescript
const errorHandler = (error: AxiosError): Promise<any> => {
  const notification = useNotification()
  // 判断是否存在response
  if (error.response) {
    const { data, status, statusText } = error.response as AxiosResponse<any>
    if (status === 401) {
      // 重新登录
      notification.error({
        title: i18n.global.t('global.request.error.401'),
        content: data?.msg || statusText,
        duration: 3000,
      })
    }
    else if (status === 403) {
      // 
      notification.error({
        title: i18n.global.t('global.request.error.403'),
        content: data?.msg || statusText,
        duration: 3000,
      })
    }
    else if (status === 500) {
      notification.error({
        title: i18n.global.t('global.request.error.500'),
        content: data?.msg || statusText,
        duration: 3000,
      })
    }
    else {
      notification.error({
        title: i18n.global.t('global.request.error.other'),
        content: data?.msg || statusText,
        duration: 3000,
      })
    }
  }
  return Promise.reject(error)
}
```
我们测试一下会发现当我们点击401请求的时候，不仅没有弹出框，而且报错告诉我们inject只能在setup中使用或者函数式组件，所以我们在这里没办法直接使用的。
![image.png](https://cdn.nlark.com/yuque/0/2022/png/10377041/1669022587644-338bfdbf-98f2-4dd8-ae39-29fab37b6331.png#averageHue=%23202225&clientId=u536c9bdd-ff67-4&from=paste&height=89&id=u6042e2ac&name=image.png&originHeight=89&originWidth=728&originalType=binary&ratio=1&rotation=0&showTitle=false&size=3993&status=done&style=none&taskId=u69f76a06-6fcc-4dc7-8293-73d8d1213ee&title=&width=728)
那么我们来改进一下让他能使用，我们在compsables创建一个全局配置的组合式api，global-config.ts的文件，然后实现如下：
```typescript
import { merge } from 'lodash-es'

interface GlobalConfigType {
  notification?: ReturnType<typeof useNotification>
  message?: ReturnType<typeof useMessage>
  dialog?: ReturnType<typeof useDialog>
  loadingBar?: ReturnType<typeof useLoadingBar>
}
const globalConfig: GlobalConfigType = {
}

export const useGlobalConfig = (): GlobalConfigType => {
  return globalConfig
}

export const useGlobalConfigProvider = (config: GlobalConfigType) => {
  merge(globalConfig, config)
}

```
然后在components中的app-provider中增加一个naive-provider.vue组件
```vue
<script lang="ts" setup>
const notification = useNotification()
const dialog = useDialog()
const message = useMessage()
const loadingBar = useLoadingBar()
useGlobalConfigProvider({
  notification,
  dialog,
  message,
  loadingBar,
})
</script>

<template>
  <slot />
</template>

```
然后在app-provider/index.vue中导入并使用
```vue
<template>
  <n-message-provider>
    <n-dialog-provider>
      <n-notification-provider>
        <n-loading-bar-provider>
+          <naive-provider>
            <slot />
+          </naive-provider>
        </n-loading-bar-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-message-provider>
</template>

```
接下来我们调整request.ts中的引用：
```typescript
const errorHandler = (error: AxiosError): Promise<any> => {
  const { notification } = useGlobalConfig()
  // 判断是否存在response
  if (error.response) {
    const { data, status, statusText } = error.response as AxiosResponse<any>
    if (status === 401) {
      // 重新登录
      notification?.error({
        title: i18n.global.t('global.request.error.401'),
        content: data?.msg || statusText,
        duration: 3000,
      })
    }
    else if (status === 403) {
      //
      notification?.error({
        title: i18n.global.t('global.request.error.403'),
        content: data?.msg || statusText,
        duration: 3000,
      })
    }
    else if (status === 500) {
      notification?.error({
        title: i18n.global.t('global.request.error.500'),
        content: data?.msg || statusText,
        duration: 3000,
      })
    }
    else {
      notification?.error({
        title: i18n.global.t('global.request.error.other'),
        content: data?.msg || statusText,
        duration: 3000,
      })
    }
  }
  return Promise.reject(error)
}

```
然后测试，发现可以正常使用了。
### 401跳转登录页面
接下来我们完成一下401跳转登录页面的功能。
首先我们项目中还没有登录页，我们先创建一个登录页面在pages中创建一个login文件夹，然后再创建一个index.vue的文件内容如下：
```vue
<script lang="ts" setup>

</script>

<template>
  <div>
    登录页面
  </div>
</template>

```
然后再配置一下路由
```typescript
import { createRouter, createWebHistory } from 'vue-router'
import staticRoutes from '~/routes/static-routes'
const router = createRouter({
  routes: [
    ...staticRoutes,
    {
      path: '/login',
      component: () => import('~/pages/login/index.vue'),
      name: 'Login',
    },
  ],
  history: createWebHistory(import.meta.env.VITE_APP_BASE ?? '/'),
})

export default router

```
最后我们在request.ts中401的部分增加跳转逻辑：
```typescript
if (status === 401) {
  // 重新登录
  notification?.error({
    title: i18n.global.t('global.request.error.401'),
    content: data?.msg || statusText,
    duration: 3000,
  })
  router.replace({ path: '/login' }).then(() => {
    /**
     * 这里处理清空用户信息和token的逻辑，后续扩展
     */
    token.value = null
  })
}
```
刷新页面测试跳转

### 封装restfulAPI
我们整个项目的增删改查我们会使用restfulAPI的方式进行请求接下来我们一起封装一下增删改查的请求。
在request.ts中：
```typescript

export const useGet = <P = any, R = any>(url: string, params?: P, config?: AxiosRequestConfig): Promise< ResponseBody<R>> => {
  return instance.request({
    url,
    method: 'GET',
    params,
    ...config,
  })
}

export const usePost = <P = any, R = any>(url: string, data?: P, config?: AxiosRequestConfig): Promise< ResponseBody<R>> => {
  return instance.request({
    url,
    method: 'POST',
    data,
    ...config,
  })
}

export const usePut = <P = any, R = any>(url: string, data?: P, config?: AxiosRequestConfig): Promise< ResponseBody<R>> => {
  return instance.request({
    url,
    method: 'PUT',
    data,
    ...config,
  })
}

export const useDelete = <P = any, R = any>(url: string, data?: P, config?: AxiosRequestConfig): Promise< ResponseBody<R>> => {
  return instance.request({
    url,
    method: 'DELETE',
    data,
    ...config,
  })
}
```
然后我们在compsables中创建一个axios-fetch.ts的文件：
```typescript
import { useDelete, useGet, usePost, usePut } from '~/utils/request'

export {
  useGet,
  usePost,
  usePut,
  useDelete,
}
```
实现自动导入的功能。

接下来我们进行测试，我们准备了四个请求如下：
```shell
# get
https://mock.lingyu.org.cn/mock/642b5d1e939061307ed09d1b/example/test/200
# post
https://mock.lingyu.org.cn/mock/642b5d1e939061307ed09d1b/example/test/post
# put
https://mock.lingyu.org.cn/mock/642b5d1e939061307ed09d1b/example/test/put
# delete
https://mock.lingyu.org.cn/mock/642b5d1e939061307ed09d1b/example/test/delete
```
接下来我们在pages/index.vue中进行测试
```vue
<script lang="ts" setup>
const onRequest1 = async () => {
  await useGet('https://mock.lingyu.org.cn/mock/642b5d1e939061307ed09d1b/example/test/200')
}
const onRequest2 = async () => {
  await usePost('https://mock.lingyu.org.cn/mock/642b5d1e939061307ed09d1b/example/test/post')
}
const onRequest3 = async () => {
  await usePut('https://mock.lingyu.org.cn/mock/642b5d1e939061307ed09d1b/example/test/put')
}

const onRequest4 = async () => {
  await useDelete('https://mock.lingyu.org.cn/mock/642b5d1e939061307ed09d1b/example/test/delete')
}
</script>

<template>
  <div>
    <n-space>
      <n-button @click="onRequest1">
        get
      </n-button>
      <n-button @click="onRequest2">
        post
      </n-button>
      <n-button @click="onRequest3">
        put
      </n-button>
      <n-button @click="onRequest4">
        delete
      </n-button>
    </n-space>
  </div>
</template>

<style scoped>

</style>

```
测试是否能够请求成功
