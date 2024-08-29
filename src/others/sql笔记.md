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


### 3. 约束

#### 3.1 一般约束
```sql
-- 建完表后添加非空约束
ALTER TABLE 表名 MODIFY 字段名 数据类型 NOT NULL;
-- 删除约束
ALTER TABLE 表名 MODIFY 字段名 数据类型;
-- 删除唯一约束
ALTER TABLE 表名 DROP INDEX 字段名;
-- 建完表后添加主键约束
ALTER TABLE 表名 ADD PRIMARY KEY(字段名);
-- 删除主键约束
ALTER TABLE 表名 DROP PRIMARY KEY;
-- 建完表后添加默认约束
ALTER TABLE 表名 ALTER 列名 SET DEFAULT 默认值;
-- 建完表后删除默认约束
ALTER TABLE 表名 ALTER 列名 DROP DEFAULT
```
#### 3.2 外键约束
```sql
[CONSTRAINT] [外键名称] FOREIGN KEY(外键列名) REFERENCES 主表(主表列名) 
-- 添加外键 dep_id,关联 dept 表的id主键
CONSTRAINT fk_emp_dept FOREIGN KEY(dep_id) REFERENCES dept(id)

-- 建完表后添加外键约束
ALTER TABLE 表名 ADD CONSTRAINT 外键名称 FOREIGN KEY (外键字段名称) REFERENCES 主表名称(主表列名称);

-- 删除外键约束
ALTER TABLE 表名 DROP FOREIGN KEY 外键名称;

```

### 4. 表关系
#### 4.1 一对多
>[!note]
> 在多的一方建立外键，指向一的一方的主键

```sql
-- 删除表
DROP TABLE IF EXISTS tb_emp;
DROP TABLE IF EXISTS tb_dept;

-- 部门表
CREATE TABLE tb_dept(
	id int primary key auto_increment,
	dep_name varchar(20),
	addr varchar(20)
);
-- 员工表 
CREATE TABLE tb_emp(
	id int primary key auto_increment,
	name varchar(20),
	age int,
	dep_id int,

	-- 添加外键 dep_id,关联 dept 表的id主键
	CONSTRAINT fk_emp_dept FOREIGN KEY(dep_id) REFERENCES tb_dept(id)	
);
```

#### 4.2 多对多
>[!note]
> 建立第三张中间表，中间表至少包含两个外键，分别关联两方主键

```sql
-- 删除表
DROP TABLE IF EXISTS tb_order_goods;
DROP TABLE IF EXISTS tb_order;
DROP TABLE IF EXISTS tb_goods;

-- 订单表
CREATE TABLE tb_order(
	id int primary key auto_increment,
	payment double(10,2),
	payment_type TINYINT,
	status TINYINT
);

-- 商品表
CREATE TABLE tb_goods(
	id int primary key auto_increment,
	title varchar(100),
	price double(10,2)
);

-- 订单商品中间表
CREATE TABLE tb_order_goods(
	id int primary key auto_increment,
	order_id int,
	goods_id int,
	count int
);

-- 建完表后，添加外键
alter table tb_order_goods add CONSTRAINT fk_order_id FOREIGN key(order_id) REFERENCES tb_order(id);
alter table tb_order_goods add CONSTRAINT fk_goods_id FOREIGN key(goods_id) REFERENCES tb_goods(id);

```

#### 4.3 一对一
>[!note]
> 在任意一方加入外键，关联另一方主键，并且设置外键为唯一(UNIQUE)

```sql
create table tb_user_desc (
	id int primary key auto_increment,
	city varchar(20),
	edu varchar(10),
	income int,
	status char(2),
	des varchar(100)
);

create table tb_user (
	id int primary key auto_increment,
	photo varchar(100),
	nickname varchar(50),
	age int,
	gender char(1),
	desc_id int unique,
	-- 添加外键
	CONSTRAINT fk_user_desc FOREIGN KEY(desc_id) REFERENCES tb_user_desc(id)	
);

```

### 5. 子查询

>[!note]
>子查询语句结果是单行单列，子查询语句作为条件值，使用 = != > < 等进行条件判断  
>子查询语句结果是多行单列，子查询语句作为条件值，使用 in 等关键字进行条件判断  
>子查询语句结果是多行多列，子查询语句作为虚拟表  

### 6. 事物

```sql
-- 示例：
-- 开启事务
BEGIN;
-- 转账操作
-- 1. 查询李四账户金额是否大于500

-- 2. 李四账户 -500
UPDATE account set money = money - 500 where name = '李四';

出现异常了...  -- 此处不是注释，在整体执行时会出问题，后面的sql则不执行
-- 3. 张三账户 +500
UPDATE account set money = money + 500 where name = '张三';

-- 提交事务

COMMIT;

-- 回滚事务
ROLLBACK;
```






