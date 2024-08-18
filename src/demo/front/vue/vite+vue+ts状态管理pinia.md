---
title: 状态管理pinia
icon: code
order: 3
category:
  - vue
tag:
  - Layout
---

## 1. 安装pinia

```bash
npm install pinia
```

## 2. 配置pinia

```typescript
// main.ts
import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
```

## 3. 创建store

```typescript
import {defineStore} from 'pinia'

export const useTodos = defineStore('todos', {
    state: () => ({
        /** @type {{ text: string, id: number, isFinished: boolean }[]} */
        todos: [],
        /** @type {'all' | 'finished' | 'unfinished'} */
        filter: 'all',
        // 类型将自动推断为 number
        nextId: 0,
    }),
    getters: {
        finishedTodos(state) {
            // 自动补全！ ✨
            return state.todos.filter((todo) => todo.isFinished)
        },
        unfinishedTodos(state) {
            return state.todos.filter((todo) => !todo.isFinished)
        },
        /**
         * @returns {{ text: string, id: number, isFinished: boolean }[]}
         */
        filteredTodos(state) {
            if (this.filter === 'finished') {
                // 调用其他带有自动补全的 getters ✨
                return this.finishedTodos
            } else if (this.filter === 'unfinished') {
                return this.unfinishedTodos
            }
            return this.todos
        },
    },
    actions: {
        // 接受任何数量的参数，返回一个 Promise 或不返回
        addTodo(text) {
            // 你可以直接变更该状态
            this.todos.push({text, id: this.nextId++, isFinished: false})
        },
    },
})
```

## 4. 使用store

```vue

<script setup>
  import {storeToRefs} from 'pinia'

  const store = useCounterStore()
  // `name` 和 `doubleCount` 是响应式的 ref
  // 同时通过插件添加的属性也会被提取为 ref
  // 并且会跳过所有的 action 或非响应式 (不是 ref 或 reactive) 的属性
  const {todos} = storeToRefs(store)
  // 作为 action 的 increment 可以直接解构
  const {addTodo} = store
</script>
```

## 5. 参考资料

- 官网：[https://pinia.vuejs.org/zh/](https://pinia.vuejs.org/zh/)



