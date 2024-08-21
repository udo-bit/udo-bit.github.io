---
title: NuxtJS
icon: nuxtjs
---

## NuxtJS入门

> [!tip]
> 官方文档：[https://nuxt.com/](https://nuxt.com/)

### 1. 安装

```shell
# 安装nuxt
pnpm dlx nuxi@latest init <project-name>
# 进入项目
cd <project-name>
# 安装依赖
pnpm install
# 启动项目
pnpm run dev
```

### 2. 配置

##### 2.1 Nuxt配置

```ts
export default defineNuxtConfig({
    // My Nuxt config
})
```

#### 2.2 环境配置

```ts
// nuxt.config.ts
export default defineNuxtConfig({
    $production: {
        routeRules: {
            '/**': {isr: true}
        }
    },
    $development: {
//
    }
})

```

#### 2.3 runtime环境变量

```ts
//会被.env环境变量覆盖
// nuxt.config.ts
export default defineNuxtConfig({
    runtimeConfig: {
        // The private keys which are only available server-side
        apiSecret: '123',
        // Keys within public are also exposed client-side
        public: {
            apiBase: '/api'
        }
    }
})
```

#### 2.4 app全局配置

```ts
// app全局变量不会被.env环境变量所覆盖
// app.config.ts
export default defineAppConfig({
    title: 'Hello Nuxt',
    theme: {
        dark: true,
        colors: {
            primary: '#ff0000'
        }
    }
})
```

### 3. 视图

#### 3.1 app.vue

nuxt将app.vue作为根组件

#### 3.2 Components

nuxt约定将components目录下的组件自动注册为全局组件，无需手动引入

#### 3.3 页面

nuxt约定将pages目录下的文件自动注册为路由,使用时，在pages中创建index.vue文件,并在app.vue中引入<NuxtPage/>,
或者删除app.vue，使用pages/index.vue作为根组件

#### 3.4 布局

nuxt约定将layouts目录下的文件自动注册为布局,使用时，默认使用default.vue文件,使用时需要在app.vue中引入<NuxtLayout/>

#### 3.5 扩展html模版

使用Nitro插件扩展html模版

```ts
//server/plugins/extend-html.ts
export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:html', (html, {event}) => {
        // This will be an object representation of the html template.
        console.log(html)
        html.head.push(`<meta name="description" content="My custom description" />`)
    })
    // You can also intercept the response here.
    nitroApp.hooks.hook('render:response', (response, {event}) => {
        console.log(response)
    })
})


```

### 4. 静态文件

#### 4.1 public目录

使用时直接用根路径符接相对路径即可，此目录下的文件会被复制到dist目录下

```app.vue
<template>
  <img src="/img/nuxt.png" alt="Discover Nuxt 3" />
</template>
```

#### 4.2 assets目录

此目录下的文件会在打包时被处理，如压缩、转换等，使用时需要用~符号接相对路径

```app.vue
<template>
  <img src="~/assets/img/nuxt.png" alt="Discover Nuxt 3" />
</template>
```

#### 4.3 全局样式变量引入

```sass
// assets/_colors.scss
$primary: #49240F
$secondary: #E4A79D
```

```ts
// nuxt.config.ts
export default defineNuxtConfig({
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/_colors.scss" as *;'
                }
            }
        }
    }
})
```

### 5. 路由

### 5.1 基本路由

1. nuxt约定将pages目录下的文件自动注册为路由
2. 导航：nuxt使用<NuxtLink/>组件代替vue-router的<router-link/>组件
3. 获取路由参数：使用useRoute()

```vue

<script setup lang="ts">
  import {useRoute} from "vue-router";

  const route = useRoute()

  // When accessing /posts/1, route.params.id will be 1
  console.log(route.params.id)
</script>
```

### 5.2 路由中间件

nuxt中的路由中间件共分为三种，分别是全局中间件、匿名中间件和命名中间件,其中全局中间件和命名中间件位于middleware目录下，匿名中间件位于pages目录下,
全局中间件以.global.ts结尾

```ts
// middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
    // isAuthenticated() is an example method verifying if a user is authenticated
    if (isAuthenticated() === false) {
        return navigateTo('/login')
    }
})
```

```vue

<script setup lang="ts">
  definePageMeta({
    middleware: 'auth'
  })
</script>

<template>
  <h1>Welcome to your dashboard</h1>
</template>
```

### 5.3 路由守卫

如果validate返回false，Nuxt将会显示404页面

```vue
// pages/posts/[id].vue
<script setup lang="ts">
  definePageMeta({
    validate: async (route) => {
      // Check if the id is made up of digits
      return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
    }
  })
</script>
```

### 6. SEO and Meta

#### 6.1 useHead

```vue
// app.vue
<script setup lang="ts">
  useHead({
    title: 'My App',
    meta: [
      {name: 'description', content: 'My amazing site.'}
    ],
    bodyAttrs: {
      class: 'test'
    },
    script: [{innerHTML: 'console.log(\'Hello world\')'}]
  })
</script>
```













