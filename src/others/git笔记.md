---
title: git笔记
icon: git1
category:
  - Git
---

## 1. git环境搭建

### 1.1 git安装

- linux: `sudo apt install git-all`
- macOS: 最简单的方式是安装Xcode Command Line Tools，安装完后会有git
- windows: [下载地址](https://git-scm.com/download/win)

### 1.2 git配置

- 配置用户信息

```shell
git config --global user.name "Your Name"
git config --global user.email "
```

- 查看配置信息

```shell
git config --list # 查看所有配置信息
git config <key> # 查看某个配置项
```

### 1.3 获取帮助

```shell
git help <verb>
git <verb> --help
man git-<verb>
git <verb> -h # 获取命令的简短描述
```

## 2. git基础

### 2.1 基础命令

```shell
git init # 初始化仓库
git add <file> # 添加文件到暂存区
git commit -m "message" # 提交文件到仓库
git clone https://github.com/libgit2/libgit2 <target_name> # 克隆仓库并指定新的目录名
git status # 检查文件状态
git diff # 查看文件修改内容
git commit -a -m "message" # 跳过add直接提交
git rm <file> # *删除文件
git rm --cached <file> # *停止追踪文件但不删除
git mv <old_file> <new_file> # *重命名文件
```

### 2.2 git忽略文件

```shell
// 示例：.gitignore文件
# 忽略所有的 .a 文件
*.a

# 但跟踪所有的 lib.a，即便你在前面忽略了 .a 文件
!lib.a

# 只忽略当前目录下的 TODO 文件，而不忽略 subdir/TODO
/TODO

# 忽略任何目录下名为 build 的文件夹
build/

# 忽略 doc/notes.txt，但不忽略 doc/server/arch.txt
doc/*.txt

# 忽略 doc/ 目录及其所有子目录下的 .pdf 文件
doc/**/*.pdf
```

> [!tip]
> github上有很多.gitignore文件模板，可以直接使用[github/gitignore](https://github.com/github/gitignore)

### 2.3 查看提交历史

```shell
git log # 查看提交历史
git log --patch # 查看提交历史并显示修改内容
git log -<n> # 查看最近n次提交
git log --pretty=oneline # 简洁显示
git log --graph # 图形化显示
git log --abbrev-commit # 缩短commit id
git log --since=2.weeks # 查看最近两周的提交
git log --author=<name> # 查看某个作者的提交
git log --grep=<pattern> # 查看包含某个关键字的提交
git log -S<keyword> # 查看添加或删除某个关键字的提交
git log --pretty=format:"%h - %an, %ar : %s" # 自定义格式
```

### 2.4 撤销操作

```shell
git commit --amend # 修改最后一次提交
git reset HEAD <file> # 撤销暂存区的修改
git checkout -- <file> # 撤销对文件的修改
# 撤销对整个工作区的修改 
git checkout -- .
```

> [!tip]
> `git commit --amend`会将暂存区的文件提交到上一次提交中，如果没有暂存文件，则会修改上一次提交的提交信息

### 2.5 远程仓库

```shell
git remote # 查看远程仓库
git remote -v # 查看远程仓库详细信息
git remote add <name> <url> # 添加远程仓库
git fetch <remote> # 从远程仓库拉取数据到新的分支上，不会自动合并
git pull <remote> <branch> # 从远程仓库拉取数据并合并到当前分支
git push <remote> <branch> # 推送数据到远程仓库
git remote show <remote> # 查看远程仓库的详细信息
git remote rename <old_name> <new_name> # 重命名远程仓库
git remote rm <name> # 删除远程仓库
```

> [!warning]
> `git push <remote> <branch>`当你和其他人在同一时间克隆，他们先推送到上游然后你再推送到上游，你的推送就会毫无疑问地被拒绝。
> 你必须先抓取他们的工作并将其合并进你的工作后才能推送。

### 2.6 标签

```shell
git tag # 查看标签
git tag <tag_name> # 创建轻量标签
git tag -a <tag_name> -m "message" # 创建附注标签
git show <tag_name> # 查看标签信息
git tag -a <tag_name> <commit_id> # 在某个提交上创建标签,适用于后期打标签
git push <remote> <tag_name> # 推送标签到远程仓库
git push origin --tags # 推送所有标签到远程仓库
git tag -d <tag_name> # 删除本地标签
git push <remote> :refs/tags/<tag_name> # 删除远程标签
git push <remote> --delete <tag_name> # 删除远程标签
git checkout -b <branch_name> <tag_name> # 在标签上创建分支
git checkout <tag_name> # 切换到标签,但是会处于分离头指针状态
```

> [!warning]
> 在“分离头指针”状态下，如果你做了某些更改然后提交它们，标签不会发生变化，
> 但你的新提交将不属于任何分支，并且将无法访问，除非通过确切的提交哈希才能访问。
> 如果你想在标签上工作，最好创建一个新分支。

### 2.7 git别名

```shell
git config --global alias.<alias_name> <command> # 创建别名
git config --global alias.st status # 示例
git config --global alias.co checkout # 示例
git config --global alias.ci commit # 示例
git config --global alias.br branch # 示例
git config --global alias.unstage 'reset HEAD --' # 示例
git config --global alias.last 'log -1 HEAD' # 示例
git config --global alias.visual '!gitk' # 外部命令
```

## 3. git分支

### 3.1 分支操作

```shell
git branch <branch_name> # 创建分支,但不会切换到新分支
git branch -v # 查看分支的最后一次提交
git checkout <branch_name> # 切换分支
git checkout -b <newbranchname> # 创建并切换到新分支
git branch -d <branch_name> # 删除分支
git branch -D <branch_name> # 强制删除分支
git branch merge <branch_name> # 合并分支
git branch --merged # 查看已经合并的分支
git branch --no-merged # 查看未合并的分支
git branch --merged <branch_name> # 查看已经合并到某个分支的分支,而不用检出到该分支
```

> [!warning]
> `git branch -d <branch_name>`
> 删除分支时，如果分支没有合并到当前分支，会提示错误信息，此时可以使用`git branch -D <branch_name>`强制删除分支

### 3.2 远程分支

```shell
# 推送
git push <remote> <branch> # 推送分支到远程仓库
git push origin serverfix:awesomebranch # 推送本地分支到远程仓库并重命名
# 跟踪
git checkout -b serverfix origin/serverfix # 拉取远程分支并创建本地分支
git branch -u origin/serverfix # 设置本地分支跟踪远程分支
git checkout -b <branch> <remote>/<branch> # 跟踪远程分支并创建本地分支
git checkout --track origin/serverfix # 跟踪远程分支
git checkout serverfix # 创建跟踪分支
git branch -vv # 查看本地分支跟踪的远程分支
git branch --set-upstream-to origin/serverfix
# 拉取
git pull # 拉取远程分支并合并到当前分支
git pull origin serverfix # 拉取远程分支并合并到当前分支
# 删除
git push origin --delete <branch> # 删除远程分支
```

### 3.3 变基

```shell
# 执行步骤
git rebase <branch> # 变基
git checkout <branch> # 切换到目标分支
git merge <branch> # 合并
# --onto
git rebase --onto <branch1> <branch2> <branch3> # 将branch3上的提交移动到branch1上,并且不包含branch2上的提交
git rebase <basebranch> <topicbranch> # 将topicbranch上的提交移动到basebranch上
```

> [!note]
> 变基和合并的区别：合并会保留提交历史，而变基会将提交历史整理成一条直线



