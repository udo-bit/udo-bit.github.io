---
title: vite+vue+ts基础配置
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
  ...
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
  ...
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
  ...
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  ...
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