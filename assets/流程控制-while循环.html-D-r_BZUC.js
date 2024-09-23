import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,d as e}from"./app-DedkmrMl.js";const i={},l=e(`<p>while在shell中也是负责循环的语句，和for一样。因为功能一样，很多人在学习和工作中的脚本遇到循环到底该使用for还是while呢？很多人不知道，就造就了有人一遇到循环就是for或者一位的while。我个人认为可以按照我说的这个思想来使用，既知道循环次数就可以用for，比如说一天需要循环24次；如果不知道代码要循环多少次，那就用while，比如我们作业中要求写的猜数字，每个人猜对一个数字的次数都是不能固定的，也是未知的。所以这样的循环我就建议大家用while了。</p><h2 id="一、while介绍" tabindex="-1"><a class="header-anchor" href="#一、while介绍"><span>一、while介绍</span></a></h2><p>**特点：**条件为真就进入循环；条件为假就退出循环，一般应用在未知循环次数的环境。</p><h3 id="_1-1、while语法" tabindex="-1"><a class="header-anchor" href="#_1-1、while语法"><span>1.1、while语法</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>while [ 表达式 ]</span></span>
<span class="line"><span>	do</span></span>
<span class="line"><span>		command...</span></span>
<span class="line"><span>	done</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>while  [ 1 -eq 1 ]    或者 (( 1 &gt; 2 ))</span></span>
<span class="line"><span>  do</span></span>
<span class="line"><span>     command</span></span>
<span class="line"><span>     command</span></span>
<span class="line"><span>     ...</span></span>
<span class="line"><span> done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>案例</strong> 使用for循环和while循环分别循环打印数组1-5</p><p><strong>案例代码</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>for循环打印：</span></span>
<span class="line"><span>for ((i=1;i&lt;=5;i++))</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>	echo $i</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while循环打印：</span></span>
<span class="line"><span>#打印数字1-5</span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description: 打印1-5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>num=1</span></span>
<span class="line"><span>while [ $num -le 5 ]</span></span>
<span class="line"><span>  do</span></span>
<span class="line"><span>      echo $num</span></span>
<span class="line"><span>      let num++</span></span>
<span class="line"><span>done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>备注：</strong> 知道循环次数就可以用for，比如说一天需要循环24次；如果不知道代码要循环多少次，那就用while，比如我们作业中要求写的猜数字，每个人猜对一个数字的次数都是不能固定的，也是未知的。</p><h2 id="二、while与shell运算" tabindex="-1"><a class="header-anchor" href="#二、while与shell运算"><span>二、while与shell运算</span></a></h2><h3 id="_2-1、比较运算" tabindex="-1"><a class="header-anchor" href="#_2-1、比较运算"><span>2.1、比较运算</span></a></h3><p><strong>案例：</strong> 循环交互输入一个小写字母，按Q退出循环</p><p><strong>案例代码</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#按Q退出场景</span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description: </span></span>
<span class="line"><span>read -p &quot;请输入一个小写字母,按Q退出: &quot; choose</span></span>
<span class="line"><span>while [ $choose != &#39;Q&#39; ]</span></span>
<span class="line"><span>  do</span></span>
<span class="line"><span>     echo &quot;你输入的是: $choose&quot;</span></span>
<span class="line"><span>     read -p &quot;请输入一个小写字母,按Q退出: &quot; choose</span></span>
<span class="line"><span>done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2、逻辑运算" tabindex="-1"><a class="header-anchor" href="#_2-2、逻辑运算"><span>2.2、逻辑运算</span></a></h3><p><strong>案例：</strong> 使用循环语句帮助丈母娘批量选择女婿</p><p><strong>案例代码</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description: </span></span>
<span class="line"><span></span></span>
<span class="line"><span>#丈母娘选女婿  分别按照姑娘20  30   40 进行与或非模拟</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#1.第一个应征者回答</span></span>
<span class="line"><span>read -p &quot;你有多少钱: &quot; money</span></span>
<span class="line"><span>read -p &quot;你有多少车: &quot; car</span></span>
<span class="line"><span>read -p &quot;你家房子有几套: &quot; house</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#while [ $money -lt 10000 ]&amp;&amp;[ $car -lt 1 ]&amp;&amp;[ $house -lt 2 ]</span></span>
<span class="line"><span>while [ $money -lt 10000 ]||[ $car -lt 1 ]||[ $house -lt 2 ]</span></span>
<span class="line"><span>  do</span></span>
<span class="line"><span>     #应征者不满住条件开始下一次循环</span></span>
<span class="line"><span>     echo &quot;有请下一个&quot;</span></span>
<span class="line"><span>     read -p &quot;你有多少钱: &quot; money</span></span>
<span class="line"><span>     read -p &quot;你有多少车: &quot; car</span></span>
<span class="line"><span>     read -p &quot;你家房子有几套: &quot; house</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>#应征者满足条件</span></span>
<span class="line"><span>echo  &quot;乖女婿，你怎么才来啊！女儿给你了&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3、文件类型判断" tabindex="-1"><a class="header-anchor" href="#_2-3、文件类型判断"><span>2.3、文件类型判断</span></a></h3><p><strong>案例:</strong> 使用循环判断/tmp/xxx目录下的文件，如果不是文件类型的打印字符串&quot;目录&quot;</p><p><strong>案例代码</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>文件类型判断</span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description: </span></span>
<span class="line"><span></span></span>
<span class="line"><span>while [ ! -f /tmp/xxx ]</span></span>
<span class="line"><span> do</span></span>
<span class="line"><span>   echo “目录”</span></span>
<span class="line"><span>   sleep 1</span></span>
<span class="line"><span>done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4、特殊条件" tabindex="-1"><a class="header-anchor" href="#_2-4、特殊条件"><span>2.4、特殊条件</span></a></h3><p>while语句中可以使用特殊条件来进行循环：</p><ul><li>符号&quot;:&quot; 条件代表真，适用与无限循环</li><li>字符串 “true” 条件代表真，适用与无限循环</li><li>字符串 &quot;false&quot;条件代表假</li></ul><p><strong>代码展示</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>特殊符号 :  代表真</span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description: </span></span>
<span class="line"><span></span></span>
<span class="line"><span>while : </span></span>
<span class="line"><span> do</span></span>
<span class="line"><span>   echo haha</span></span>
<span class="line"><span>   sleep 1</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>true 字符串代表真，和:类似</span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Created Time:</span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description: </span></span>
<span class="line"><span></span></span>
<span class="line"><span>while true</span></span>
<span class="line"><span> do</span></span>
<span class="line"><span>   echo haha</span></span>
<span class="line"><span>   sleep 1</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>false   字符串代表假，在while中不会开始循环</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、while与循环控制语句" tabindex="-1"><a class="header-anchor" href="#三、while与循环控制语句"><span>三、while与循环控制语句</span></a></h2><h3 id="_3-1、sleep语句" tabindex="-1"><a class="header-anchor" href="#_3-1、sleep语句"><span>3.1、sleep语句</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description: 倒计时游戏</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#1.定义初始值</span></span>
<span class="line"><span>time=9</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#2.循环输出，1秒一次</span></span>
<span class="line"><span>while [ $time -ge 0 ]</span></span>
<span class="line"><span>  do</span></span>
<span class="line"><span>     echo -n -e  &quot;\\b$time&quot;</span></span>
<span class="line"><span>     let time--</span></span>
<span class="line"><span>     #控制循环 1秒一次	</span></span>
<span class="line"><span>     sleep 1</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#回车</span></span>
<span class="line"><span>echo</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2、break" tabindex="-1"><a class="header-anchor" href="#_3-2、break"><span>3.2、break</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description: 输出数字1-9，当输出5时停止</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#1、定义初始值</span></span>
<span class="line"><span>num=1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while [ $num -lt 10 ]</span></span>
<span class="line"><span>  do</span></span>
<span class="line"><span>     echo $num</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     #判断当前num的值，如果等于5就跳出循环</span></span>
<span class="line"><span>     if [ $num -eq 5 ]</span></span>
<span class="line"><span>        then</span></span>
<span class="line"><span>		break</span></span>
<span class="line"><span>     fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     #自动累加</span></span>
<span class="line"><span>     let num++</span></span>
<span class="line"><span>done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3、continue" tabindex="-1"><a class="header-anchor" href="#_3-3、continue"><span>3.3、continue</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author: </span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description: 输出数字1-9,当等于5时跳过本次循环，输出1、2、3、4、6、7、8、9</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#1、定义初始值</span></span>
<span class="line"><span>num=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while [ $num -lt 9 ]</span></span>
<span class="line"><span>  do</span></span>
<span class="line"><span>     #自动累加</span></span>
<span class="line"><span>     let num++</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>     #判断当前num的值，如果等于5就跳过本次循环</span></span>
<span class="line"><span>     if [ $num -eq 5 ]</span></span>
<span class="line"><span>        then</span></span>
<span class="line"><span>		continue</span></span>
<span class="line"><span>     fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     #输出num的值</span></span>
<span class="line"><span>     echo $num</span></span>
<span class="line"><span>done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、while嵌套其他语句" tabindex="-1"><a class="header-anchor" href="#四、while嵌套其他语句"><span>四、while嵌套其他语句</span></a></h2><h3 id="_4-1、while嵌套if" tabindex="-1"><a class="header-anchor" href="#_4-1、while嵌套if"><span>4.1、while嵌套if</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description: 输出数字1-9，当输出5时停止</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#1、定义初始值</span></span>
<span class="line"><span>num=1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while [ $num -lt 10 ]</span></span>
<span class="line"><span>  do</span></span>
<span class="line"><span>     echo $num</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     #判断当前num的值，如果等于5就跳出循环</span></span>
<span class="line"><span>     if [ $num -eq 5 ]</span></span>
<span class="line"><span>        then</span></span>
<span class="line"><span>		break</span></span>
<span class="line"><span>     fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     #自动累加</span></span>
<span class="line"><span>     let num++</span></span>
<span class="line"><span>done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2、while嵌套for" tabindex="-1"><a class="header-anchor" href="#_4-2、while嵌套for"><span>4.2、while嵌套for</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description: 99乘法表</span></span>
<span class="line"><span></span></span>
<span class="line"><span>A=1</span></span>
<span class="line"><span>while [ $A -lt 10 ]</span></span>
<span class="line"><span>  do</span></span>
<span class="line"><span>    for ((B=1;B&lt;=$A;B++))</span></span>
<span class="line"><span>       do</span></span>
<span class="line"><span>	  echo -n -e &quot;$B*$A=$((A*B)) \\t&quot;</span></span>
<span class="line"><span>   done</span></span>
<span class="line"><span>   echo </span></span>
<span class="line"><span>   let A++</span></span>
<span class="line"><span>done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3、while嵌套while" tabindex="-1"><a class="header-anchor" href="#_4-3、while嵌套while"><span>4.3、while嵌套while</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description: 99乘法表</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#定义A</span></span>
<span class="line"><span>A=1</span></span>
<span class="line"><span>while [ $A -lt 10 ]</span></span>
<span class="line"><span>  do</span></span>
<span class="line"><span>      #定义B</span></span>
<span class="line"><span>      B=1</span></span>
<span class="line"><span>      while [ $B -le $A ]</span></span>
<span class="line"><span>        do</span></span>
<span class="line"><span>          echo -n -e &quot;$B*$A=$((A*B)) \\t&quot;</span></span>
<span class="line"><span>          let B++</span></span>
<span class="line"><span>      done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   echo </span></span>
<span class="line"><span>   let A++</span></span>
<span class="line"><span>done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、学习视频" tabindex="-1"><a class="header-anchor" href="#五、学习视频"><span>五、学习视频</span></a></h2><p><a href="https://www.bilibili.com/video/BV1Tf4y1v7E2?p=62" target="_blank" rel="noopener noreferrer">视频：while介绍</a><a href="https://www.bilibili.com/video/BV1Tf4y1v7E2?p=63" target="_blank" rel="noopener noreferrer">视频：while与shell运算</a><a href="https://www.bilibili.com/video/BV1Tf4y1v7E2?p=64" target="_blank" rel="noopener noreferrer">视频：while循环控制</a><a href="https://www.bilibili.com/video/BV1Tf4y1v7E2?p=65" target="_blank" rel="noopener noreferrer">视频: while嵌套</a></p>`,43),p=[l];function d(c,r){return a(),n("div",null,p)}const h=s(i,[["render",d],["__file","流程控制-while循环.html.vue"]]),u=JSON.parse('{"path":"/demo/back-ends/Linux/Shell%E8%84%9A%E6%9C%AC/%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6-while%E5%BE%AA%E7%8E%AF.html","title":"while循环","lang":"en-US","frontmatter":{"title":"while循环","icon":"code","category":"shell","order":17,"description":"while在shell中也是负责循环的语句，和for一样。因为功能一样，很多人在学习和工作中的脚本遇到循环到底该使用for还是while呢？很多人不知道，就造就了有人一遇到循环就是for或者一位的while。我个人认为可以按照我说的这个思想来使用，既知道循环次数就可以用for，比如说一天需要循环24次；如果不知道代码要循环多少次，那就用while，比如...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/demo/back-ends/Linux/Shell%E8%84%9A%E6%9C%AC/%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6-while%E5%BE%AA%E7%8E%AF.html"}],["meta",{"property":"og:site_name","content":"Utopia"}],["meta",{"property":"og:title","content":"while循环"}],["meta",{"property":"og:description","content":"while在shell中也是负责循环的语句，和for一样。因为功能一样，很多人在学习和工作中的脚本遇到循环到底该使用for还是while呢？很多人不知道，就造就了有人一遇到循环就是for或者一位的while。我个人认为可以按照我说的这个思想来使用，既知道循环次数就可以用for，比如说一天需要循环24次；如果不知道代码要循环多少次，那就用while，比如..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-21T02:46:20.000Z"}],["meta",{"property":"article:author","content":"GXL"}],["meta",{"property":"article:modified_time","content":"2024-09-21T02:46:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"while循环\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-21T02:46:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"GXL\\",\\"url\\":\\"https://www.cnblogs.com/feel-myself\\",\\"email\\":\\"gaoxiaoliang123@126.com\\"}]}"]]},"headers":[{"level":2,"title":"一、while介绍","slug":"一、while介绍","link":"#一、while介绍","children":[{"level":3,"title":"1.1、while语法","slug":"_1-1、while语法","link":"#_1-1、while语法","children":[]}]},{"level":2,"title":"二、while与shell运算","slug":"二、while与shell运算","link":"#二、while与shell运算","children":[{"level":3,"title":"2.1、比较运算","slug":"_2-1、比较运算","link":"#_2-1、比较运算","children":[]},{"level":3,"title":"2.2、逻辑运算","slug":"_2-2、逻辑运算","link":"#_2-2、逻辑运算","children":[]},{"level":3,"title":"2.3、文件类型判断","slug":"_2-3、文件类型判断","link":"#_2-3、文件类型判断","children":[]},{"level":3,"title":"2.4、特殊条件","slug":"_2-4、特殊条件","link":"#_2-4、特殊条件","children":[]}]},{"level":2,"title":"三、while与循环控制语句","slug":"三、while与循环控制语句","link":"#三、while与循环控制语句","children":[{"level":3,"title":"3.1、sleep语句","slug":"_3-1、sleep语句","link":"#_3-1、sleep语句","children":[]},{"level":3,"title":"3.2、break","slug":"_3-2、break","link":"#_3-2、break","children":[]},{"level":3,"title":"3.3、continue","slug":"_3-3、continue","link":"#_3-3、continue","children":[]}]},{"level":2,"title":"四、while嵌套其他语句","slug":"四、while嵌套其他语句","link":"#四、while嵌套其他语句","children":[{"level":3,"title":"4.1、while嵌套if","slug":"_4-1、while嵌套if","link":"#_4-1、while嵌套if","children":[]},{"level":3,"title":"4.2、while嵌套for","slug":"_4-2、while嵌套for","link":"#_4-2、while嵌套for","children":[]},{"level":3,"title":"4.3、while嵌套while","slug":"_4-3、while嵌套while","link":"#_4-3、while嵌套while","children":[]}]},{"level":2,"title":"五、学习视频","slug":"五、学习视频","link":"#五、学习视频","children":[]}],"git":{"createdTime":1726886780000,"updatedTime":1726886780000,"contributors":[{"name":"udo-bit","email":"enote_gxl@163.com","commits":1}]},"readingTime":{"minutes":4.41,"words":1323},"filePathRelative":"demo/back-ends/Linux/Shell脚本/流程控制-while循环.md","localizedDate":"September 21, 2024","excerpt":"<p>while在shell中也是负责循环的语句，和for一样。因为功能一样，很多人在学习和工作中的脚本遇到循环到底该使用for还是while呢？很多人不知道，就造就了有人一遇到循环就是for或者一位的while。我个人认为可以按照我说的这个思想来使用，既知道循环次数就可以用for，比如说一天需要循环24次；如果不知道代码要循环多少次，那就用while，比如我们作业中要求写的猜数字，每个人猜对一个数字的次数都是不能固定的，也是未知的。所以这样的循环我就建议大家用while了。</p>\\n<h2>一、while介绍</h2>\\n<p>**特点：**条件为真就进入循环；条件为假就退出循环，一般应用在未知循环次数的环境。</p>","autoDesc":true}');export{h as comp,u as data};
