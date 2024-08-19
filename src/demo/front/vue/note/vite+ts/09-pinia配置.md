---
title: 09-pinia配置
order: 9
---

## 目标
完成pinia的初始化配置并实现一个useCounter状态管理

## 为什么采用pinia
[pinia](https://pinia.vuejs.org/zh/index.html)也是由vue官方出品的一个新一代的状态管理器，用于替代vuex的产物。
在pinia中没有为了devtools的集成而延伸的mutation的历史包袱，同时呢还支持了组合式api的使用方式，我们也会完全通过组合式api的使用方式去开发我们的项目。

## 挂载实例
首先我们需要在main.ts中挂载pinia的实例
```typescript
import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(pinia)

```

## 创建目录
我们在项目配置中层做了对stores目录的自动导入，那么我们就需要在src下面去创建一个stores目录用于存放我们的状态管理的api。

### 实现counter
然后我们在根目录中创建一个counter.ts的文件，我们来实现一个计数器。

```typescript
export const useCounter = defineStore('counter', () => {
  const counter = ref(0)

  const increment = () => {
    counter.value++
  }

  const decrement = () => {
    counter.value--
  }

  const double = computed(() => counter.value * 2)

  return {
    counter,
    increment,
    decrement,
    double,
  }
})

```

### 项目中使用

我们分别在workspace和home中使用我们的useCounter实例

```vue
<script lang="ts" setup>
const counterStore = useCounter()

// 解构
const { counter } = storeToRefs(counterStore)
</script>


<template>
  <div>
    值：{{ counter }}
    <n-button @click="counterStore.increment">
      增加
    </n-button>
    <n-button @click="counterStore.decrement">
      减少
    </n-button>
  </div>
</template>
```

需要注意的是，我们的pinia是不允许直接解构使用的，我们需要通过storeToRefs来进行解构赋值，避免响应式不生效的问题。
