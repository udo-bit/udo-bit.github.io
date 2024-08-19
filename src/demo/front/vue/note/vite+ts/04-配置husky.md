---
title: 04-配置husky
order: 4
---
## 目标
1. 了解什么是git hooks
2. 配置husky+lint-staged完成代码提交规范检查
## 背景
当一个团队在维护同一个项目的过程中，一般我们都采用git来进行代码托管，便于多人协同工作。那么这样同样会出现在代码提交的时候，代码规范不一致的问题，所以我们需要控制在代码提交的时候，保证大家的代码规范都是统一的。
那么这节课，配合我们上节课学习的代码规范工具，通过husky的调用git hooks钩子来实现代码提交前的代码规范校验。
## 什么是git hooks 钩子
git hooks是一些自定义的脚本，用于控制git工作的流程。
默认我们初始化完成一个项目的时候, 会在.git目录下生成hooks的文件夹，里面默认会有一些demo，我们可以直接在这里写脚本，然后在提交代码的各个阶段执行我们的钩子，来实现我们想要的功能。
直接使用.git/hooks的缺陷是，默认情况下，在.git/hooks目录下的hooks钩子无法被提交，就不能将钩子共享到团队项目中。所以我们需要通过husky来实现，git钩子的调用。
## husky
husky可以将git内置的钩子暴露出来，那么我们就可以解决，在git hooks中导致的无法提交钩子的问题。
### 安装
```powershell
pnpm add husky -D
```
### 使用
在package.json的scripts中配置如下：
```json
{
  "scripts":{
    "prepare":"husky install"
  }
}
```
配置完成后，我们pnpm i初始化一下我们的工程。
初始化完成后会自动生成一个.husky的目录，接下来我们来配置一下在提交信息之前先去检查我们的代码。如果检查通过允许提交，如果检查不通过，我们不允许提交代码。
通过如下命令：
```shell
pnpm exec husky add .husky/pre-commit "pnpm run lint"
```
我们配置一下lint的命令在项目中：
```json
{
 "scripts":{
   "lint":"eslint --ext .ts,.tsx,.vue,.js,.jsx src"
 }
}
```
测试一下，我们在项目中写一个debugger，来测试一些命令:
![image.png](https://cdn.nlark.com/yuque/0/2022/png/10377041/1667705889271-94be6898-ce88-4be8-9c02-47e42e2a0260.png#clientId=u282e1b80-4bba-4&from=paste&height=47&id=ub14a0c9c&name=image.png&originHeight=47&originWidth=773&originalType=binary&ratio=1&rotation=0&showTitle=false&size=15476&status=done&style=none&taskId=ub585110d-d490-4356-9c36-c4b098571f3&title=&width=773)
提示我们不能存在debugger
像一些警告我们想默认修复他，那么我们可以直接在命令的后面加一个--fix就可以自动修复一些警告例如：
![image.png](https://cdn.nlark.com/yuque/0/2022/png/10377041/1667705965169-84695a83-01b9-4b59-82f3-6d57c76a8f00.png#clientId=u282e1b80-4bba-4&from=paste&height=165&id=u9570cd66&name=image.png&originHeight=165&originWidth=962&originalType=binary&ratio=1&rotation=0&showTitle=false&size=57618&status=done&style=none&taskId=u12f24c42-9c4b-43d9-ad9e-d82677a403c&title=&width=962)
这些警告我们可以让eslint帮助我们按照我们定义的规范自动修复。
### 存在的问题
我们每次没必要把所有的文件都检查一遍，我们只需要检查我们提交改动的代码即可，所以这种情况下我们需要配合lint-staged使用。他的作用相当于一个文件过滤器，每次提交时只检查本次提交的暂存区的文件，但是他不能校验我们的代码。所以我们可以配合着husky lint-staged和我们的eslint一起使用。
我们先安装一下lint-staged

```shell
pnpm add lint-staged -D
```
然后我们在package.json中配置如下：
```json
{
  "lint-staged":{
    "*.{js,tsx,vue,ts,jsx}":"eslint --fix"
  }
}
```
调整husky的执行命令：
```shell
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# pnpm run lint 改为
pnpm exec lint-staged

```
测试提交代码
![image.png](https://cdn.nlark.com/yuque/0/2022/png/10377041/1667706672223-e4405209-de6c-4ad1-b820-74d72d26f932.png#clientId=u282e1b80-4bba-4&from=paste&height=206&id=ua60f0a04&name=image.png&originHeight=206&originWidth=493&originalType=binary&ratio=1&rotation=0&showTitle=false&size=36426&status=done&style=none&taskId=u73f457ee-4242-4897-9e47-2ecd91b7fe3&title=&width=493)
配置完成
