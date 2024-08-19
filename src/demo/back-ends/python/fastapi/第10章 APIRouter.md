---
title: 第10章 APIRouter
order: 10
icon: code
---

## 10-1 APIRouter基本使用

**需求场景**

如果我们写一个网站，或者写一个APP，那整个项目应该是比较复杂的，此时不应该把所有代码放在一个文件中。

前几节课，我们通过把代码拆分到不同文件的方式，可以解决一些代码混乱的问题，但是却不能更好的解决。

比如一个项目中可能含有不同的模块，那不同的模块应该分开管理，这样项目才便于维护和管理。



**FastAPI的解决方式**

APIRouter就是FastAPI为了此需求场景提供了一种解决方式，它类似 Flask中的蓝图，Django中的app



示例1：APIRouter的基本使用

- main.py 非常简洁，主要负责注册管理
- 使用 `app.include_router(blog.router, prefix="/blog", tags=["Blog"])` 注册模块，同时可以指定及api的前缀(prefix)和标签(tags)

~~~python
from fastapi import FastAPI
from routers import blog, user

app = FastAPI()
app.include_router(blog.router, prefix="/blog", tags=["Blog"])
app.include_router(user.router)
~~~

- routers/blog.py 主要负责和blog模块有关的业务
- `router = APIRouter()`得到的 router对象和main.py中的app对象使用方式一样

~~~python
from fastapi import APIRouter

router = APIRouter()


@router.get("/blogs")
def blogs():
    return [{"id": i, "title": f"blog{i}"} for i in range(10)]


@router.get("/{blog_id}")
def get_blog(blog_id: int):
    return {"id": blog_id, "title": f"blog{blog_id}"}


@router.delete("/{blog_id}")
def delete(blog_id: int):
    return {"code": 1, "msg": f"Done blog_id: {blog_id}"}
~~~



- routers/user.py，负责和用户相关的模块

~~~python
from fastapi import APIRouter, Form


router = APIRouter(tags=["User"], prefix="/user")


@router.post("/login")
def login(name: str = Form(), pwd: str = Form()):
    return {"name": name}


@router.get("/me")
def info():
    return {"info":  "this is a cute boy"}
~~~







## 10-2 APIRouter集成到Blog_app项目

- 见源码 blog_app

补充：数据库中 blog建表sql

~~~mysql
use db;		-- 使用名字为 db 的数据库

CREATE TABLE `blogs` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `title` varchar(255) NOT NULL,
    `body` TEXT,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin AUTO_INCREMENT=1 ;
~~~

- 项目结构

![image-20220730151232306](/assets/fastapi-pic/chapter10.assets/image-20220730151232306.png)

- api文档

![image-20220730151127863](/assets/fastapi-pic/chapter10.assets/image-20220730151127863.png)

