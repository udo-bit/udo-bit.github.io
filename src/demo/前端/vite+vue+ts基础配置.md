---
title: vite+vue+ts 基础配置
icon: object-group
order: 1
category:
  - vue
tag:
  - Layout
---

## 1. 配置自动引入组件和依赖插件

### 1.1 安装插件
```bash
# 需要安装的插件
npm install -D vite-plugin-components vite-plugin-style-import
```
### 1.2 配置vite.config.ts
```typescript

export default defineConfig({
  plugins: [
      vue(),
        AutoImport({
          //第三方组件库的解析器
          imports:['vue','vue-router','pinia'],
          resolvers:[ElementPlusResolver()],
          //指定生成文件位置
          dts:'src/auto-imports.d.ts'
        }),
        Components({
            // dirs 指定组件所在位置，默认为 src/components
            dirs: ['src/components'],
            resolvers: [ElementPlusResolver()],
            dts: 'src/components.d.ts',
        })
  ],
})

```
### 1.3 参考资料：
- 参考：[https://blog.csdn.net/weixin_55776562/article/details/136236256](https://blog.csdn.net/weixin_55776562/article/details/136236256)
- 参考：[https://blog.csdn.net/shanghai597/article/details/130885636](https://blog.csdn.net/shanghai597/article/details/130885636)

## 2. 配置路径别名
### 2.1 安装依赖
```bash
npm i -D @types/node
```
### 2.2 配置vite.config.ts
```typescript

export default defineConfig({
  //...
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  //...
})
```
### 2.3 修改tsconfig.json
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```
### 2.4 参考资料：
- 参考：[https://www.cnblogs.com/liujunhang/p/17004528.html](https://www.cnblogs.com/liujunhang/p/17004528.html)
- 参考：[https://blog.csdn.net/weixin_55555471/article/details/136497926](https://blog.csdn.net/weixin_55555471/article/details/136497926)

## 3. 安装naive-ui组件库
### 3.1 安装依赖
```bash
npm install naive-ui
```
### 3.2 配置vite.config.ts
```typescript
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ]
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ]
})
```
### 3.3 参考资料：
- 文档：[https://www.naiveui.com/zh-CN/light/docs/introduction](https://www.naiveui.com/zh-CN/light/docs/introduction)

## 4. 配置proxy代理
### 4.1 配置vite.config.ts
```typescript
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
```
### 4.2 参考资料：
- 参考：[https://blog.csdn.net/m0_62128476/article/details/139045540](https://blog.csdn.net/m0_62128476/article/details/139045540)
- 文档：[https://cn.vitejs.dev/config/server-options.html#server-proxy](https://cn.vitejs.dev/config/server-options.html#server-proxy)


## 5. 配置unocss
### 5.1 安装依赖
```bash
npm install -D unocss
```
### 5.2 配置vite.config.ts
```typescript
// vite.config.ts
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
  ],
})
```
### 5.3 创建uno.config.ts文件
```typescript
// uno.config.ts
import { defineConfig } from 'unocss'
export default defineConfig({
  // ...UnoCSS options
})
```
### 5.4 在入口文件中引入uno.css
```typescript
// main.ts
import 'virtual:uno.css'
```
### 5.5 参考资料：
- 文档：[https://unocss.dev/guide/](https://unocss.dev/guide/)





