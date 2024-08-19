---
title: 01-pnpm介绍
order: 1
---
<a name="ahKOc"></a>
## 什么是pnpm
我们可以看一下 [官方文档](https://pnpm.io/zh/)
> 快速的，节省磁盘空间的包管理工具

<a name="Z9SNf"></a>
### 快速
pnpm比其他包管理器快2倍。我们来看一看官方的benchmark数据对比。<br />npm / yarn / pnpm，[benchmark对比](https://pnpm.io/zh/benchmarks)<br />黄色代表pnpm。<br />整体比其他两个包管理工具都要快一些。
<a name="BaGfx"></a>
### 高效
node_modules中的文件为复制或链接自特定的内容寻址存储库。

1. 重复依赖只会安装一次。 传统的我们使用npm和yarn的时候，如果100个项目都依赖了同一个依赖，他会重复安装100次，但在pnpm中只会被安装一次，磁盘中只有一个地方写入，其他的项目都会直接使用硬链接。
2. 版本不同的情况下，优先复用之前不同版本的相同代码，只会更新和下载不同的的文件。

<a name="yEhSY"></a>
### 支持monorepos
支持单仓库多包管理。<br />前端工程日益复杂，很多项目都开始使用monorepo的模式开发。<br />比较常见的开源项目，使用monorepos的：vite 、vue、element-plus等等。

<a name="uI5Qe"></a>
### 严格
pnpm 默认创建了一个非平铺的node_modules，因此无法访问任意包。<br />举个例子：在npm和yarn中，当一个项目中存在A依赖B，B依赖C的关系，那么在A中可以直接使用C的依赖包，但是A中并没有安装C依赖。这种情况就相当于越级访问。但是pnpm就很好的解决了这个问题。规避了这种幽灵依赖的问题。