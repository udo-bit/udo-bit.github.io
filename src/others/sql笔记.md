---
title: SQL笔记
icon: mysql
category: SQL
---

## SQL学习笔记

### 1. DDL相关
#### 1.1 操作数据库
```sql
CREATE DATABASE IF NOT EXISTS test;  # 创建数据库
DROP DATABASE IF NOT EXISTS test; # 删除数据库
USE test; # 使用数据库
```


#### 1.2 创建表
```sql
CREATE TABLE IF NOT EXISTS student(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    age INT NOT NULL
);
```
#### 1.3 删除表
```sql
DROP TABLE IF EXISTS student;
```
#### 1.4 修改表
```sql
ALTER TABLE old_name RENAME TO new_name; # 修改表名 
ALTER TABLE name ADD column_name column_type; # 添加列
ALTER TABLE name modify column_name new_column_type; # 修改列的数据类型
ALTER TABLE name change old_column_name new_column_name new_column_type; # 修改列名和数据类型
ALTER TABLE name DROP column_name; # 删除列
```

### 2. DQL相关
#### 2.1 分组查询
```sql
SELECT 字段列表 FROM 表名 [WHERE 分组前条件限定] GROUP BY 分组字段名 [HAVING 分组后条件过滤];
```
>[!warning] 
>分组之后，查询的字段为聚合函数和分组字段，查询其他字段无任何意义

#### 2.2 分页查询
```sql
SELECT 字段列表 FROM 表名 LIMIT  起始索引 , 查询条目数;
```
>[!tip]
> 在分页查询中，起始索引的计算公式：**起始索引 = (当前页码 - 1) * 每页条目数**


