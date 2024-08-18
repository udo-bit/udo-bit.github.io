---
title: 路由vue-router
icon: code
order: 5
category:
  - vue
tag:
  - Layout
---

## 1. 安装vue-router

```bash
npm install vue-router@next
```

## 2. 创建路由配置文件

```typescript
// src/router/index.ts
import {createRouter, createWebHistory} from "vue-router"
// import HelloWorld from "@/components/HelloWorld.vue";
import Son from "@/components/Son.vue";

const routes = [
    {
        path: '/',
        // component:HelloWorld,
        children: [
            {path: '', component: Son}
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
```

## 3. 在main.ts中引入router

```typescript
// main.ts
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
```

## 4. 在App.vue中使用router-view

```vue

<template>
  <div id="app">
    <RouterView/>
  </div>
</template>
```

## 5. 参考资料

- [vue-router](https://router.vuejs.org/zh/guide/)



