---
title: vite+vue+ts入门
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
...
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
...
```
### 1.3 参考资料：
- 参考：[https://blog.csdn.net/weixin_55776562/article/details/136236256](https://blog.csdn.net/weixin_55776562/article/details/136236256)
- 参考：[https://blog.csdn.net/shanghai597/article/details/130885636](https://blog.csdn.net/shanghai597/article/details/130885636)
