import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,d as i}from"./app-C5AwaB9N.js";const e={},l=i(`<p><strong>计算机编程就是三大步：输入、运算、输出</strong></p><p>那么计算机运算有哪些呢，计算机能做哪些运算呢？</p><p><strong>我们来看看常见的计算机运算</strong></p><h2 id="一、赋值运算" tabindex="-1"><a class="header-anchor" href="#一、赋值运算"><span>一、赋值运算</span></a></h2><p>赋值运算符 =</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> 	a=10   </span></span>
<span class="line"><span> 	name=&#39;baism&#39;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> 重点：字符串必须用引号引起来</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、算术运算-四则运算" tabindex="-1"><a class="header-anchor" href="#二、算术运算-四则运算"><span>二、算术运算[四则运算]</span></a></h2><h3 id="_2-1-运算符与命令" tabindex="-1"><a class="header-anchor" href="#_2-1-运算符与命令"><span>2.1 运算符与命令</span></a></h3><p><strong>四则运算符：</strong> + - * \\ 【加减乘除】 <strong>扩展：</strong> % ** 【取余 开方】</p><p><strong>运算命令:</strong></p><ul><li>整形运算 – expr – let – $(()) – bc</li><li>浮点运算 – bc</li></ul><h3 id="_2-2-整形运算" tabindex="-1"><a class="header-anchor" href="#_2-2-整形运算"><span>2.2 整形运算</span></a></h3><p>expr 命令：只能做整数运算，格式比较古板，注意空格</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[root@zutuanxue ~]# expr 1 + 1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>[root@zutuanxue ~]# expr 5 - 2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>[root@zutuanxue ~]# expr 5 \\* 2  #注意*出现应该转义，否则认为是通配符</span></span>
<span class="line"><span>10</span></span>
<span class="line"><span>[root@zutuanxue ~]# expr 5 / 2</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>[root@zutuanxue ~]# expr 5 % 2</span></span>
<span class="line"><span>1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>let命令:只能做整数运算，且运算元素必须是变量，无法直接对整数做运算</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[root@zutuanxue ~]# let a=100+3;echo $a</span></span>
<span class="line"><span>103</span></span>
<span class="line"><span>root@zutuanxue ~]# let a=100-3;echo $a</span></span>
<span class="line"><span>97</span></span>
<span class="line"><span>[root@zutuanxue ~]# let a=100/3;echo $a</span></span>
<span class="line"><span>33</span></span>
<span class="line"><span>[root@zutuanxue ~]# let a=100*3;echo $a</span></span>
<span class="line"><span>300</span></span>
<span class="line"><span>[root@zutuanxue ~]# let a=100%3;echo $a</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>[root@zutuanxue ~]# let a=100**3;echo $a</span></span>
<span class="line"><span>1000000</span></span>
<span class="line"><span>[root@zutuanxue ~]# a=100</span></span>
<span class="line"><span>[root@zutuanxue ~]# let a++;echo $a</span></span>
<span class="line"><span>101</span></span>
<span class="line"><span>[root@zutuanxue ~]# let a--;echo $a</span></span>
<span class="line"><span>100</span></span>
<span class="line"><span>[root@zutuanxue ~]# let a-=3;echo $a</span></span>
<span class="line"><span>97</span></span>
<span class="line"><span>[root@zutuanxue ~]# let a+=5;echo $a</span></span>
<span class="line"><span>102</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>双小圆括号运算，在shell中(( ))也可以用来做数学运算</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[root@zutuanxue ~]# echo $(( 100+3))</span></span>
<span class="line"><span>103</span></span>
<span class="line"><span>[root@zutuanxue ~]# echo $(( 100-3)) </span></span>
<span class="line"><span>97</span></span>
<span class="line"><span>[root@zutuanxue ~]# echo $(( 100%3))</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>[root@zutuanxue ~]# echo $(( 100*3))</span></span>
<span class="line"><span>300</span></span>
<span class="line"><span>[root@zutuanxue ~]# echo $(( 100/3))</span></span>
<span class="line"><span>33</span></span>
<span class="line"><span>[root@zutuanxue ~]# echo $(( 100**3))     #开方运算</span></span>
<span class="line"><span>1000000</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-浮点运算" tabindex="-1"><a class="header-anchor" href="#_2-3-浮点运算"><span>2.3 浮点运算</span></a></h3><p>浮点运算是采用的命令组合的方式来实现的 echo “scale=N;表达式”|bc</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[root@zutuanxue ~]# echo &quot;scale=2;3+100&quot;|bc</span></span>
<span class="line"><span>103</span></span>
<span class="line"><span>[root@zutuanxue ~]# echo &quot;scale=2;100-3&quot;|bc</span></span>
<span class="line"><span>97</span></span>
<span class="line"><span>[root@zutuanxue ~]# echo &quot;scale=2;100/3&quot;|bc</span></span>
<span class="line"><span>33.33</span></span>
<span class="line"><span>[root@zutuanxue ~]# echo &quot;scale=2;100*3&quot;|bc</span></span>
<span class="line"><span>300</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4、练习案例" tabindex="-1"><a class="header-anchor" href="#_2-4、练习案例"><span>2.4、练习案例</span></a></h3><h4 id="_2-4-1-实现一个四则运算计算器" tabindex="-1"><a class="header-anchor" href="#_2-4-1-实现一个四则运算计算器"><span>2.4.1 实现一个四则运算计算器</span></a></h4><p><strong>案例思考：</strong> 计算器的功能: + - * \\</p><p><strong>实现步骤：</strong> 1、要求用户传输三个参数，num1 算术运算符 num2 2、运算输出结果</p><p><strong>实现代码</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>##03_calculator.sh</span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description: 简单计算器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;$1 $2 $3&quot;|bc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-2-内存使用率统计-要求打印内存使用率" tabindex="-1"><a class="header-anchor" href="#_2-4-2-内存使用率统计-要求打印内存使用率"><span>2.4.2 内存使用率统计，要求打印内存使用率</span></a></h4><p><strong>案例思考：</strong></p><ul><li>物料1、内存总量 获得方式是什么 free top /proc/meminfo</li><li>物料2、内存使用量</li><li>物料3、内存使用率公式 使用量/总量*100%</li></ul><p><strong>实现步骤：</strong></p><ul><li>1、获取内存总量</li><li>2、获取内存使用量</li><li>3、运算输出结果</li></ul><p><strong>实现代码</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#job实现代码  04_memory_use.sh</span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description:内存使用率计算脚本</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#free</span></span>
<span class="line"><span>#1、获得内存总量</span></span>
<span class="line"><span>memory_total=\`free -m|grep -i &quot;mem&quot;|tr -s &quot; &quot;|cut -d &quot; &quot; -f2\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#2、获得内存使用的量</span></span>
<span class="line"><span>memory_use=\`free -m|grep -i &quot;mem&quot;|tr -s &quot; &quot;|cut -d &quot; &quot; -f3\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#3、计算输出</span></span>
<span class="line"><span>#运算的时候是否需要小数点 浮点运算，要考虑使用的命令 （难点 重点）</span></span>
<span class="line"><span>#echo &quot;内存使用率: $((memory_use*100/memory_total))%&quot;</span></span>
<span class="line"><span>#难点：浮点运算中，同优先级的情况下，大数除以小数 尽可能保证精确</span></span>
<span class="line"><span>echo &quot;内存使用率: \`echo &quot;scale=2;$memory_use*100/$memory_total&quot;|bc\`%&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实现效果</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#运算结果</span></span>
<span class="line"><span>[root@zutuanxue day2]# sh memory_use.sh </span></span>
<span class="line"><span>Memory使用率: 2.61%</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、比较运算" tabindex="-1"><a class="header-anchor" href="#三、比较运算"><span>三、比较运算</span></a></h2><p>计算机除了算术和赋值运算外，还有比较运算，比如说比较两个数的关系，比较两个字符串的关系【用户登录系统】等。接下来我们学习如何在shell中进行比较运算</p><h3 id="_3-1、整形比较运算" tabindex="-1"><a class="header-anchor" href="#_3-1、整形比较运算"><span>3.1、整形比较运算</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>					运算符解释：</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 精确比较</span></span>
<span class="line"><span>        -eq         等于 equal</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        -gt         大于</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        -lt         小于</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 模糊比较</span></span>
<span class="line"><span>        -ge         大于或等于</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        -le         小于或等于</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        -ne         不等于</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>通过test命令比较两个整数关系</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[root@zutuanxue ~]# test 100 -gt 300;echo $?</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>[root@zutuanxue ~]# test 100 -ge 300;echo $?</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>[root@zutuanxue ~]# test 100 -eq 300;echo $?</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>[root@zutuanxue ~]# test 100 -le 300;echo $?</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>[root@zutuanxue ~]# test 100 -lt 300;echo $?</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>[root@zutuanxue ~]# test 100 -ne 300;echo $?</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>备注：linux命令test只能比较两个整数的关系，不会返回结果，需要通过$?才能看到结果</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-练习案例" tabindex="-1"><a class="header-anchor" href="#_3-2-练习案例"><span>3.2 练习案例</span></a></h3><h4 id="_3-2-1-写一个脚本实现对两个证书关系的判断" tabindex="-1"><a class="header-anchor" href="#_3-2-1-写一个脚本实现对两个证书关系的判断"><span>3.2.1 写一个脚本实现对两个证书关系的判断</span></a></h4><p><strong>案例思考：</strong> 两个数有几种关系？</p><ul><li>1、大于</li><li>2、小于</li><li>3、等于</li></ul><p><strong>实现步骤</strong></p><ul><li>1、交互或者外传参的方式获得两个整数</li><li>2、判断关系</li><li>3、输出结果</li></ul><p><strong>实现代码</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description:判断两个数的关系</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#1、输入两个数，$1 $2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#2、判断两个数关系</span></span>
<span class="line"><span>if [ $1 -gt $2 ];then</span></span>
<span class="line"><span>  #3、输出结果</span></span>
<span class="line"><span>  echo &quot;$1 &gt; $2 &quot;</span></span>
<span class="line"><span>elif [ $1 -eq $2 ];then</span></span>
<span class="line"><span>  echo &quot;$1 = $2&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>  echo &quot;$1 &lt; $2&quot;</span></span>
<span class="line"><span>fi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实现结果：</strong></p><figure><img src="https://www.zutuanxue.com:8000/static/media/images/2020/9/24/1600942462497.gif" alt="比较两个数关系.gif" tabindex="0" loading="lazy"><figcaption>比较两个数关系.gif</figcaption></figure><h4 id="_3-2-2-判断两个浮点数的关系" tabindex="-1"><a class="header-anchor" href="#_3-2-2-判断两个浮点数的关系"><span>3.2.2 判断两个浮点数的关系</span></a></h4><p><strong>案例思考</strong> shell中的浮点类型如何做比较运算？</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>默认情况下shell是不能判断浮点的，那么在linux中又避免不了需要进行浮点运算，那怎么解决</span></span>
<span class="line"><span></span></span>
<span class="line"><span>解决思路如下：</span></span>
<span class="line"><span>1）两个数据同时放大到整数倍</span></span>
<span class="line"><span>2）处理掉小数点位，保留整数位</span></span>
<span class="line"><span>3）进行整形判断</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实现代码</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description:判断两位小数点的关系</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#1、交互或者外传参的方式获得两个整数</span></span>
<span class="line"><span>#$1 $2</span></span>
<span class="line"><span>[ $# -lt 2 ]&amp;&amp;echo &quot;need two args&quot;&amp;&amp;exit 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#采用外传参的方式接收数据并放大100倍,并处理为整数</span></span>
<span class="line"><span>num1=\`echo &quot;scale=2;$1*100&quot;|bc|cut -d &quot;.&quot; -f1\`</span></span>
<span class="line"><span>num2=\`echo &quot;scale=2;$2*100&quot;|bc|cut -d &quot;.&quot; -f1\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#2、比较运算</span></span>
<span class="line"><span>if [ $num1 -gt $num2 ];then</span></span>
<span class="line"><span>   #3、输出结果</span></span>
<span class="line"><span>   echo &quot;$1 &gt; $2&quot;</span></span>
<span class="line"><span>elif [ $num1 -lt $num2 ];then</span></span>
<span class="line"><span>   echo &quot;$1 &lt; $2&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>   echo &quot;$1 = $2&quot;</span></span>
<span class="line"><span>fi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实现结果</strong></p><figure><img src="https://www.zutuanxue.com:8000/static/media/images/2020/9/24/1600942985455.gif" alt="比较两个浮点数关系.gif" tabindex="0" loading="lazy"><figcaption>比较两个浮点数关系.gif</figcaption></figure><h3 id="_3-3、字符串比较运算" tabindex="-1"><a class="header-anchor" href="#_3-3、字符串比较运算"><span>3.3、字符串比较运算</span></a></h3><h4 id="_3-3-1-字符串比较运算符" tabindex="-1"><a class="header-anchor" href="#_3-3-1-字符串比较运算符"><span>3.3.1 字符串比较运算符</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>运算符解释，注意字符串一定别忘了使用引号引起来</span></span>
<span class="line"><span>  ==          等于   </span></span>
<span class="line"><span>  !=          不等于</span></span>
<span class="line"><span>  -n          检查字符串的长度是否大于0  </span></span>
<span class="line"><span>  -z          检查字符串的长度是否为0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-2-比较两个字符串关系" tabindex="-1"><a class="header-anchor" href="#_3-3-2-比较两个字符串关系"><span>3.3.2 比较两个字符串关系</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[root@zutuanxue ~]# test &#39;root&#39; == &#39;root&#39;;echo $?</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>[root@zutuanxue ~]# test &#39;root&#39; != &#39;root1&#39;;echo $?</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>[root@zutuanxue ~]# name=</span></span>
<span class="line"><span>[root@zutuanxue ~]# test -n &quot;$name&quot;;echo $?</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>[root@zutuanxue ~]# test -z &quot;$name&quot;;echo $?</span></span>
<span class="line"><span>0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-3-练习案例" tabindex="-1"><a class="header-anchor" href="#_3-3-3-练习案例"><span>3.3.3 练习案例</span></a></h4><p><strong>案例需求：</strong> 模拟一个linux文本界面登陆程序，要求账号密码验证成功进入系统，账号密码验证失败退回登陆界面</p><p><strong>案例思考：</strong></p><ul><li>1、熟悉linux文本界面登陆步骤</li><li>2、熟悉字符串比较运算</li></ul><p><strong>案例步骤：</strong></p><ul><li>1、预设正确账号、密码</li><li>2、输出提示登录信息并实现交互登录</li><li>3、输出密码输入信息并实现交互</li><li>4、判断输入是否正确 – 4.1）正确，进入系统 – 4.2）不正确 继续运行该脚本</li></ul><p><strong>实现代码</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description: 仿真登陆</span></span>
<span class="line"><span>####</span></span>
<span class="line"><span>default_account=&#39;root&#39;</span></span>
<span class="line"><span>default_pw=&#39;123456&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>######main</span></span>
<span class="line"><span>#1、清屏</span></span>
<span class="line"><span>clear</span></span>
<span class="line"><span>#2、输出提示信息</span></span>
<span class="line"><span>echo &quot;CentOS Linux 7 (Core)&quot;</span></span>
<span class="line"><span>echo -e &quot;Kernel \`uname -r\` on an \`uname -m\`\\n&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#3、交互输入登陆名</span></span>
<span class="line"><span>echo -n &quot;$HOSTNAME login: &quot;</span></span>
<span class="line"><span>read account</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#4、交互输入密码</span></span>
<span class="line"><span>read -s -t30 -p &quot;Password: &quot; pw</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#5、判断用户输入是否正确</span></span>
<span class="line"><span>if [ &quot;$default_account&quot; == &quot;$account&quot; ] &amp;&amp; [ &quot;$default_pw&quot; == &quot;$pw&quot; ];then</span></span>
<span class="line"><span>   clear</span></span>
<span class="line"><span>   echo -e &quot;\\nwelcome to root&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>   echo  &quot;用户名或密码错误...&quot;</span></span>
<span class="line"><span>   #输入错误，再次调用本脚本</span></span>
<span class="line"><span>   sh $0</span></span>
<span class="line"><span>fi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实现效果</strong> 账号:root 密码:123456</p><figure><img src="https://www.zutuanxue.com:8000/static/media/images/2020/9/24/1600943778077.gif" alt="仿真登陆01.gif" tabindex="0" loading="lazy"><figcaption>仿真登陆01.gif</figcaption></figure><h2 id="四、逻辑运算" tabindex="-1"><a class="header-anchor" href="#四、逻辑运算"><span>四、逻辑运算</span></a></h2><p>完成一个任务中需要多个条件都满足或者多个条件中只要满足一个即可，那么这就是我们的逻辑运算。 通过多个条件判断结果，才能得出结论</p><h4 id="_4-1、逻辑运算应用场景" tabindex="-1"><a class="header-anchor" href="#_4-1、逻辑运算应用场景"><span>4.1、逻辑运算应用场景</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>多条件同时判断</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_4-2、逻辑运算符" tabindex="-1"><a class="header-anchor" href="#_4-2、逻辑运算符"><span>4.2、逻辑运算符</span></a></h4><ul><li>逻辑与运算 &amp;&amp;</li><li>逻辑或运算 ||</li><li>逻辑非运算 ！</li></ul><p><strong>逻辑运算秘籍</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>逻辑运算注意事项：</span></span>
<span class="line"><span>    逻辑与 或 运算都需要两个或以上条件</span></span>
<span class="line"><span>    逻辑非运算只能一个条件。</span></span>
<span class="line"><span>    口诀:     逻辑与运算               真真为真 真假为假   假假为假</span></span>
<span class="line"><span>             逻辑或运算               真真为真 真假为真   假假为假</span></span>
<span class="line"><span>             逻辑非运算               非假为真   非真为假</span></span>
<span class="line"><span>             </span></span>
<span class="line"><span>             </span></span>
<span class="line"><span>逻辑与或的短路运算</span></span>
<span class="line"><span>逻辑与中靠前的条件中出现了假，后面的就不在判断了，因为已经是假的了</span></span>
<span class="line"><span>逻辑或中靠前的条件中出现了真，后不在往后判断了，结果已经为真了</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3、练习案例" tabindex="-1"><a class="header-anchor" href="#_4-3、练习案例"><span>4.3、练习案例</span></a></h3><p>明白了逻辑运算符和逻辑运算的口诀和短路运算后，我们来通过练习加深理解，接下来我们来看一个案例。 上一个字符串运算练习案例(3.3.3) 中我们练习的是仿真用户登录，判断登陆的方式是分步判断的，既先判断用户名，不管是否正确都会继续判断密码的正确性，这样是两步判断，既然已知用户名是错误的啦，完全没必要在判断密码的正确性了，因为结果都一样，你不能进入系统。既然判断一个用户输入的用户名和密码是否正确，且一个不正确就不能进入系统，那么我们可以这么去思考一下： <strong>两个条件全为真则进入系统，两个条件一个为假则重新登陆</strong> 。这样是不是就满足了逻辑与运算了，同时思考逻辑与运算的短路运算，逻辑与条件中的判断顺序是从前往后，前边一个条件为假的时候，后边的条件就不用判断了，那么就减少了判断的次数，加快了运算速度。你品！你细品！！是不是这个道理。</p><h4 id="_4-3-1、就按照刚才的思路再去写一个升级版的仿真用户登录系统。" tabindex="-1"><a class="header-anchor" href="#_4-3-1、就按照刚才的思路再去写一个升级版的仿真用户登录系统。"><span>4.3.1、就按照刚才的思路再去写一个升级版的仿真用户登录系统。</span></a></h4><p><strong>案例需求</strong> 使用逻辑运算写一个仿真用户登录验证程序</p><p><strong>案例思路</strong></p><ul><li>1、输入用户名</li><li>2、输入密码</li><li>3、与运算返回结果</li></ul><p><strong>案例代码</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>echo &quot;CentOS linux 8 (Core)&quot;</span></span>
<span class="line"><span>echo -e &quot;Kernel \`uname -r\` on an \`uname -m\` \\n&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#1、输入用户名</span></span>
<span class="line"><span>echo -n &quot;$HOSTNAME login: &quot;</span></span>
<span class="line"><span>read myuser</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#echo -n &quot;password: &quot;</span></span>
<span class="line"><span>#read -s -t 5 -n 2 pw</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#2、输入密码</span></span>
<span class="line"><span>read -p &quot;password: &quot; -s -t 5 -n 6 pw</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#3、与运算返回结果</span></span>
<span class="line"><span>[ $myuser == &#39;root&#39; ] &amp;&amp; [ $pw == &#39;123456&#39; ] &amp;&amp; echo yes || echo no</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-2-丈母娘择婿" tabindex="-1"><a class="header-anchor" href="#_4-3-2-丈母娘择婿"><span>4.3.2 丈母娘择婿</span></a></h4><p><strong>案例需求</strong> 伟大、慈祥的丈母娘有女儿，她想给自己的女儿选一个女婿，所以就想通过网上招婿的方式去处理，为了节约成本，让你帮忙开发一个小程序来自动过滤一下不满足条件的男士。 改程序为了能够满足大量丈母娘的需求，所以可以根据女儿的年龄做出不同的判断</p><ul><li>姑娘20岁 应征男士条件：房子需要两套及以上、存款100W及以上、车子1辆以上，条件必须全部满足</li><li>姑娘30岁 应征男士条件：房子需要两套及以上、存款100W及以上、车子1辆以上，条件满足其中一个即可</li><li>姑娘40岁 应征男士条件：是男的都可以报名 注意：应征者必须全是男性</li></ul><p><strong>案例思考</strong> 因为是多条件判断，复合逻辑运算的条件，重点在不同年龄段的逻辑判断方式！</p><p><strong>案例步骤</strong></p><ul><li>1、要求传入两个参数：姑娘年龄、应征者行吧</li><li>2、交互输入用户条件</li><li>3、判断用户条件并输出结果</li></ul><p><strong>案例代码</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description: 丈母娘选女婿  练习逻辑运算</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cat &lt;&lt;EOF</span></span>
<span class="line"><span>游戏规则:</span></span>
<span class="line"><span>    1）根据交互输入信息，让脚本去判断是否满足条件。</span></span>
<span class="line"><span>    2）判断条件如下:</span></span>
<span class="line"><span>        第一次 姑娘20岁    要求应征男子报名条件 房子需要两套及以上、存款100W及以上、车子1辆以上</span></span>
<span class="line"><span>	第二次 姑娘30岁               			以上条件满足一个即可</span></span>
<span class="line"><span>	第三次 姑娘40岁					是男的都可以报名</span></span>
<span class="line"><span>    3) 脚本执行方法  $0 姑娘年龄[20|30|40] 应征者性别[男|女]</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#1、判断传递参数数量，要求两个</span></span>
<span class="line"><span>if [ $# -lt 2 ];then</span></span>
<span class="line"><span>   echo &#39;need two args $1 $2&#39;</span></span>
<span class="line"><span>   exit 1</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#2、交互输入</span></span>
<span class="line"><span>read -p &quot;请输入你的存款: &quot; money</span></span>
<span class="line"><span>read -p &quot;请输入你的房子数量: &quot; zhangse</span></span>
<span class="line"><span>read -p &quot;请输入你车子的数量: &quot; car</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#3、判断应征条件，并给出结果</span></span>
<span class="line"><span>#姑娘20岁代码</span></span>
<span class="line"><span>if [ $1 -eq 20 ] &amp;&amp; [ $money -gt 1000000 ] &amp;&amp; [ $zhangse -ge 2 ] &amp;&amp; [ $car -ge 1 ] &amp;&amp; [ &quot;$2&quot; == &quot;男&quot; ];then</span></span>
<span class="line"><span>    echo &quot;初始通过，等待姑娘复试吧&quot;</span></span>
<span class="line"><span>#姑娘30岁代码</span></span>
<span class="line"><span>elif [ $1 -eq 30 ] &amp;&amp; [ &quot;$2&quot; == &quot;男&quot; ] &amp;&amp; ( [ $money -gt 1000000 ] || [ $zhangse -ge 2 ] || [ $car -ge 1 ] );then</span></span>
<span class="line"><span>    echo &quot;初始通过，等待姑娘复试吧&quot;</span></span>
<span class="line"><span>#姑娘40岁代码</span></span>
<span class="line"><span>elif [ $1 -eq 40 ] &amp;&amp; [ ! $2 == &quot;女&quot; ];then</span></span>
<span class="line"><span>    echo &quot;初始通过，等待姑娘复试吧&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>   echo &quot;你不满足条件,byebye&quot;</span></span>
<span class="line"><span>fi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、文件判断-文件类型、权限、新旧判断" tabindex="-1"><a class="header-anchor" href="#五、文件判断-文件类型、权限、新旧判断"><span>五、文件判断[文件类型、权限、新旧判断]</span></a></h2><p>linux的设计思路：一切皆文件，对文件系统的操作其实可以狭隘的理解为对文件的操作。如果希望对文件类型和权限或者两个文件做新旧或者是否同一个文件进行判断。</p><h2 id="_5-1、test判断命令" tabindex="-1"><a class="header-anchor" href="#_5-1、test判断命令"><span>5.1、test判断命令</span></a></h2><p><strong>命令功能：</strong> 检测文件类型和比较运算</p><p><strong>命令用法</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>			test [命令选项] 表达式</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>命令选项</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>-d  检查文件是否存在且为目录</span></span>
<span class="line"><span>-e  检查文件是否存在</span></span>
<span class="line"><span>-f  检查文件是否存在且为文件</span></span>
<span class="line"><span>-r  检查文件是否存在且可读</span></span>
<span class="line"><span>-s  检查文件是否存在且不为空</span></span>
<span class="line"><span>-w  检查文件是否存在且可写</span></span>
<span class="line"><span>-x  检查文件是否存在且可执行</span></span>
<span class="line"><span>-O  检查文件是否存在并且被当前用户拥有</span></span>
<span class="line"><span>-G  检查文件是否存在并且默认组为当前用户组</span></span>
<span class="line"><span>-nt file1 -nt file2  检查file1是否比file2新</span></span>
<span class="line"><span>-ot file1 -ot file2  检查file1是否比file2旧     </span></span>
<span class="line"><span>-ef file1 -ef file2  检查file1是否与file2是同一个文件，判定依据的是i节点</span></span>
<span class="line"><span></span></span>
<span class="line"><span>以上只列出部分命令选项，详细的可以通过:man test获得。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>命令用法练习</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>文件类型</span></span>
<span class="line"><span>[root@zutuanxue ~]# test -f /etc/passwd;echo $?</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>[root@zutuanxue ~]# test -f /etc;echo $?</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>[root@zutuanxue ~]# test -d /etc;echo $?</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>权限判断</span></span>
<span class="line"><span>[root@zutuanxue ~]# test -x /root/anaconda-ks.cfg ;echo $?</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>[root@zutuanxue ~]# ll /root/anaconda-ks.cfg </span></span>
<span class="line"><span>-rw-------. 1 root root 1216 6月  26 09:06 /root/anaconda-ks.cfg</span></span>
<span class="line"><span>[root@zutuanxue ~]# test -r /root/anaconda-ks.cfg ;echo $?</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@zutuanxue ~]# test -w /root/anaconda-ks.cfg ;echo $?</span></span>
<span class="line"><span>0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-2、练习案例" tabindex="-1"><a class="header-anchor" href="#_5-2、练习案例"><span>5.2、练习案例</span></a></h2><p><strong>案例需求</strong> 写一个平滑关闭服务脚本。</p><p><strong>案例思路</strong></p><ul><li>判断服务进程文件是否存在，存在读取PID并判断是否存在进程</li><li>进程存在就使用Kill命令结束服务</li><li>不存在就报“服务已经结束“</li></ul><p><strong>案例步骤</strong> 1、检查服务PID文件 2、检查进程是否存在 3、杀死进程</p><p><strong>案例代码</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description:找到服务的PID号,如果服务开启则杀死，否则提示服务已经关闭或不存在</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#1、判断PID</span></span>
<span class="line"><span>#注意PID的路径，如果服务的PID不在这里可以做个软连接</span></span>
<span class="line"><span>if [ -f /var/run/$1.pid ];then</span></span>
<span class="line"><span>   #2、如果存在</span></span>
<span class="line"><span>   PID=\`cat /var/run/$1.pid\`</span></span>
<span class="line"><span>   #3、统计进程数</span></span>
<span class="line"><span>   process_num=\`ps aux|grep $PID|wc -l\`</span></span>
<span class="line"><span>   #5、判断进程数大于2则杀死</span></span>
<span class="line"><span>   if [ $process_num -ge 2 ];then</span></span>
<span class="line"><span>       kill -s QUIT $PID </span></span>
<span class="line"><span>   else</span></span>
<span class="line"><span>   #5、判断小于2则提示进程不存在,同时删除服务PID文件</span></span>
<span class="line"><span>   	echo &quot;service $1 is close&quot;</span></span>
<span class="line"><span>        rm -f /var/run/$1.pid</span></span>
<span class="line"><span>   fi</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>   #2、不存在</span></span>
<span class="line"><span>   echo &quot;service $1 is close&quot;</span></span>
<span class="line"><span>fi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,115),p=[l];function d(c,t){return a(),n("div",null,p)}const v=s(e,[["render",d],["__file","shell运算详解.html.vue"]]),o=JSON.parse(`{"path":"/demo/back-ends/Linux/Shell%E8%84%9A%E6%9C%AC/shell%E8%BF%90%E7%AE%97%E8%AF%A6%E8%A7%A3.html","title":"shell运算详解","lang":"en-US","frontmatter":{"title":"shell运算详解","icon":"code","category":"shell","order":8,"description":"计算机编程就是三大步：输入、运算、输出 那么计算机运算有哪些呢，计算机能做哪些运算呢？ 我们来看看常见的计算机运算 一、赋值运算 赋值运算符 = 二、算术运算[四则运算] 2.1 运算符与命令 四则运算符： + - * \\\\ 【加减乘除】 扩展： % ** 【取余 开方】 运算命令: 整形运算 – expr – let – $(()) – bc 浮点运算...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/demo/back-ends/Linux/Shell%E8%84%9A%E6%9C%AC/shell%E8%BF%90%E7%AE%97%E8%AF%A6%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"Utopia"}],["meta",{"property":"og:title","content":"shell运算详解"}],["meta",{"property":"og:description","content":"计算机编程就是三大步：输入、运算、输出 那么计算机运算有哪些呢，计算机能做哪些运算呢？ 我们来看看常见的计算机运算 一、赋值运算 赋值运算符 = 二、算术运算[四则运算] 2.1 运算符与命令 四则运算符： + - * \\\\ 【加减乘除】 扩展： % ** 【取余 开方】 运算命令: 整形运算 – expr – let – $(()) – bc 浮点运算..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.zutuanxue.com:8000/static/media/images/2020/9/24/1600942462497.gif"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-21T02:46:20.000Z"}],["meta",{"property":"article:author","content":"GXL"}],["meta",{"property":"article:modified_time","content":"2024-09-21T02:46:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"shell运算详解\\",\\"image\\":[\\"https://www.zutuanxue.com:8000/static/media/images/2020/9/24/1600942462497.gif\\",\\"https://www.zutuanxue.com:8000/static/media/images/2020/9/24/1600942985455.gif\\",\\"https://www.zutuanxue.com:8000/static/media/images/2020/9/24/1600943778077.gif\\"],\\"dateModified\\":\\"2024-09-21T02:46:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"GXL\\",\\"url\\":\\"https://www.cnblogs.com/feel-myself\\",\\"email\\":\\"gaoxiaoliang123@126.com\\"}]}"]]},"headers":[{"level":2,"title":"一、赋值运算","slug":"一、赋值运算","link":"#一、赋值运算","children":[]},{"level":2,"title":"二、算术运算[四则运算]","slug":"二、算术运算-四则运算","link":"#二、算术运算-四则运算","children":[{"level":3,"title":"2.1 运算符与命令","slug":"_2-1-运算符与命令","link":"#_2-1-运算符与命令","children":[]},{"level":3,"title":"2.2 整形运算","slug":"_2-2-整形运算","link":"#_2-2-整形运算","children":[]},{"level":3,"title":"2.3 浮点运算","slug":"_2-3-浮点运算","link":"#_2-3-浮点运算","children":[]},{"level":3,"title":"2.4、练习案例","slug":"_2-4、练习案例","link":"#_2-4、练习案例","children":[]}]},{"level":2,"title":"三、比较运算","slug":"三、比较运算","link":"#三、比较运算","children":[{"level":3,"title":"3.1、整形比较运算","slug":"_3-1、整形比较运算","link":"#_3-1、整形比较运算","children":[]},{"level":3,"title":"3.2 练习案例","slug":"_3-2-练习案例","link":"#_3-2-练习案例","children":[]},{"level":3,"title":"3.3、字符串比较运算","slug":"_3-3、字符串比较运算","link":"#_3-3、字符串比较运算","children":[]}]},{"level":2,"title":"四、逻辑运算","slug":"四、逻辑运算","link":"#四、逻辑运算","children":[{"level":3,"title":"4.3、练习案例","slug":"_4-3、练习案例","link":"#_4-3、练习案例","children":[]}]},{"level":2,"title":"五、文件判断[文件类型、权限、新旧判断]","slug":"五、文件判断-文件类型、权限、新旧判断","link":"#五、文件判断-文件类型、权限、新旧判断","children":[]},{"level":2,"title":"5.1、test判断命令","slug":"_5-1、test判断命令","link":"#_5-1、test判断命令","children":[]},{"level":2,"title":"5.2、练习案例","slug":"_5-2、练习案例","link":"#_5-2、练习案例","children":[]}],"git":{"createdTime":1726886780000,"updatedTime":1726886780000,"contributors":[{"name":"udo-bit","email":"enote_gxl@163.com","commits":1}]},"readingTime":{"minutes":12.51,"words":3753},"filePathRelative":"demo/back-ends/Linux/Shell脚本/shell运算详解.md","localizedDate":"September 21, 2024","excerpt":"<p><strong>计算机编程就是三大步：输入、运算、输出</strong></p>\\n<p>那么计算机运算有哪些呢，计算机能做哪些运算呢？</p>\\n<p><strong>我们来看看常见的计算机运算</strong></p>\\n<h2>一、赋值运算</h2>\\n<p>赋值运算符 =</p>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span> \\ta=10   </span></span>\\n<span class=\\"line\\"><span> \\tname='baism'</span></span>\\n<span class=\\"line\\"><span> </span></span>\\n<span class=\\"line\\"><span> 重点：字符串必须用引号引起来</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{v as comp,o as data};
