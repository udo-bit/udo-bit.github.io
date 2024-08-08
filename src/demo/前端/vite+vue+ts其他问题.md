---
title: vite+vue+ts 其他问题
icon: object-group
order: 50
category:
  - vue
tag:
    - Layout
---

## 1. TS2307: Cannot find module ./App.vue or its corresponding type declarations.
### 1.1 解决方法：在src目录下创建shims-vue.d.ts文件，内容如下：
```typescript
declare module '*.vue' {
    import { defineComponent } from 'vue'
    const component: ReturnType<typeof defineComponent>
    export default component
}
```
### 1.2 参考：[https://blog.csdn.net/qq_40028324/article/details/136165459](https://blog.csdn.net/qq_40028324/article/details/136165459)
