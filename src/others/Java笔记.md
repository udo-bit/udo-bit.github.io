---
title: Java基础
icon: java
category:
  - Java
---

## Integer

1. `public static Integer valueOf(int i)`: 返回表示指定的 int 值的 Integer 实例。
2. `public static Integer valueOf(String s)`: 返回保存指定的 String 的值的 Integer 对象。
3. `public static int parseInt(String s)`: 将字符串参数作为有符号的十进制整数进行解析。

> [!tip]
> int 和 String 之间的转换<br>
> int -> String  <br>
> 方式一：直接在数字后加一个空字符串  <br>
> 方式二：使用String类的valueOf方法<br>
> String -> int  <br>
> 方式一：使用Integer类的parseInt方法  <br>
> 方式二：使用Integer类的valueOf方法返回Integer对象，再调用Integer对象的intValue方法<br>

## Arrays

1. `public static String toString(int[] a)`    返回指定数组的内容的字符串表示形式
2. `public static void sort(int[] a)`    按照数字顺序排列指定的数组
3. `public static int binarySearch(int[] a, int key)`    利用二分查找返回指定元素的索引

> [!tip]
> `public static int binarySearch(int[] a, int key)` <br>
> 1,数组必须有序.  <br>
> 2.如果要查找的元素存在,那么返回的是这个元素实际的索引 <br>
> 3.如果要查找的元素不存在,那么返回的是 (-插入点-1).插入点:如果这个元素在数组中,他应该在哪个索引上.  <br>

## Throwable

1. `public String getMessage()`    返回此 throwable 的详细消息字符串
2. `public String toString()`    返回此可抛出的简短描述
3. `public void printStackTrace()`    把异常的错误信息输出在控制台
4. 自定义异常
    1. 定义异常类
    2. 写继承关系
    3. 提供空参构造
    4. 提供带参构造

```java
public class AgeOutOfBoundsException extends RuntimeException {
    public AgeOutOfBoundsException() {
    }

    public AgeOutOfBoundsException(String message) {
        super(message);
    }
}

```

## Date

1. `public long getTime()`    获取的是日期对象从1970年1月1日 00:00:00到现在的毫秒值
2. `public void setTime(long time)`    设置时间，给的是毫秒值

## SimpleDateFormat

1. `public SimpleDateFormat(String pattern)`    用给定的模式和默认语言环境的日期格式符号构造 SimpleDateFormat
2. `public String format(Date date)`    将一个 Date 格式化为日期/时间字符串
3. `public Date parse(String source)`    从给定字符串的开始解析文本，以生成一个日期


