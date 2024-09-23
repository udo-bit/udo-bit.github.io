import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,d as i}from"./app-C5AwaB9N.js";const e={},l=i(`<h2 id="一、if介绍" tabindex="-1"><a class="header-anchor" href="#一、if介绍"><span>一、if介绍</span></a></h2><p>如何写一个高可用性的脚本，赋予脚本智能化，赋予脚本执行逻辑。</p><p>比如nginx安装脚本中</p><ul><li>configure执行成功在执行make,</li><li>make执行成功在执行make install</li><li>上一步错误就不需要执行后面的代码了。</li></ul><p>answer: 加入判断</p><p>只要你想在代码中判断一下的时候就第一时间想到if就行了，适用于99%的语言。</p><p>当我们在写程序的时候，时常对上一步执行是否成功如何判断苦恼，当我们今天学习了if就可以解决你的苦恼。if语句在我们程序中就是用来做判断的，以后大家不管学习什么语言，以后只要涉及到判断的部分，大家就可以直接拿if来使用，不同的语言之间的if只是语法不同，原理是相同的。</p><h2 id="二、单if语法" tabindex="-1"><a class="header-anchor" href="#二、单if语法"><span>二、单if语法</span></a></h2><p>适用范围:只需要一步判断，条件返回真干什么。</p><p>语句格式</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>if [ condition ]           #condition 值为true or false</span></span>
<span class="line"><span>   then                    #条件为真的时候执行</span></span>
<span class="line"><span>      commands             #代码块 一行或者多行代码</span></span>
<span class="line"><span>fi			   #语句的结束</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://www.zutuanxue.com:8000/static/media/images/2020/9/25/1601016825298.png" alt="流程判断11.png" tabindex="0" loading="lazy"><figcaption>流程判断11.png</figcaption></figure><p>该语句翻译成汉语大意如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>假如  条件为真</span></span>
<span class="line"><span> 那么</span></span>
<span class="line"><span>    执行commands代码块</span></span>
<span class="line"><span>结束</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过一段代码来演示一下吧，判断 当前用户是不是root，如果不是那么返回”ERROR: need to be root so that!“</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#Script Description: </span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ $USER != &#39;root&#39; ]</span></span>
<span class="line"><span>   then</span></span>
<span class="line"><span>	echo &quot;ERROR: need to be root so that&quot;</span></span>
<span class="line"><span>	exit 1</span></span>
<span class="line"><span>fi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、if-else语句" tabindex="-1"><a class="header-anchor" href="#三、if-else语句"><span>三、if…else语句</span></a></h2><p>适用范围==:两步判断，条件为真干什么，条件为假干什么。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>if [ condition ]     </span></span>
<span class="line"><span>     then           	条件为真</span></span>
<span class="line"><span>          commands1     	真  要执行代码块</span></span>
<span class="line"><span>else                	条件为假</span></span>
<span class="line"><span>          commands2     	假   要执行的代码块</span></span>
<span class="line"><span>fi         		结束</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://www.zutuanxue.com:8000/static/media/images/2020/9/25/1601016994805.png" alt="流程判断2.png" tabindex="0" loading="lazy"><figcaption>流程判断2.png</figcaption></figure><p>该语句翻译成汉语大意如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>假如条件为真</span></span>
<span class="line"><span>  那么</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        执行commands1代码块</span></span>
<span class="line"><span>否则</span></span>
<span class="line"><span>        执行commands2代码块</span></span>
<span class="line"><span>结束</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过一段代码演示一下吧，判断当前登录用户是管理员还是普通用户,如果是管理员输出”hey admin“ 如果是普通用户输出”hey guest“</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>#Author:www.zutuanxue.com</span></span>
<span class="line"><span>#Created Time:</span></span>
<span class="line"><span>#Script Description: </span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ $USER == &#39;root&#39; ]</span></span>
<span class="line"><span>   then</span></span>
<span class="line"><span>	echo &quot;hey admin&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>	echo &quot;hey guest&quot;</span></span>
<span class="line"><span>fi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、if-elif-else" tabindex="-1"><a class="header-anchor" href="#四、if-elif-else"><span>四、if…elif…else</span></a></h2><p>适用范围:多于两个以上的判断结果，也就是多于一个以上的判断条件。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>if [ condition 1]     满足第一个条件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     then          真</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            command1    执行command1代码块</span></span>
<span class="line"><span>elif [ condition 2]   满足第二个条件</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>     then           真</span></span>
<span class="line"><span></span></span>
<span class="line"><span>             commands2    执行command2代码块</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  .......</span></span>
<span class="line"><span>else      如果条件都不满足</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            commandsX      执行commandX代码块</span></span>
<span class="line"><span>fi    结束判断</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://www.zutuanxue.com:8000/static/media/images/2020/9/25/1601017300715.png" alt="流程判断3.png" tabindex="0" loading="lazy"><figcaption>流程判断3.png</figcaption></figure><p>该语句翻译成汉语大意如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>假如 条件1 为真</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      那么</span></span>
<span class="line"><span></span></span>
<span class="line"><span>             执行代码块1</span></span>
<span class="line"><span>假如 条件2 为真</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      那么</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            执行代码块2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      以此类推的N个条件及对应的执行代码块</span></span>
<span class="line"><span>否则 【以上所有条件中没有一个满足的】</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           执行代码块X</span></span>
<span class="line"><span>结束</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过一段代码演示一下吧，通过一个脚本，判断两个整数的关系</p><p><strong>案例需求</strong> 判断内存的使用率 60以下 ok 60以上 黄色警告 70以上 橙色严重警告 80以上 红色警告</p><p><strong>案例思考</strong></p><ul><li>内存使用率获得方式 – 手动给出 – 通过内存查看命令运算得出</li></ul><p><strong>案例代码</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>#1、条件</span></span>
<span class="line"><span>#判断内存的使用率</span></span>
<span class="line"><span>#60以下    ok 绿色  32m</span></span>
<span class="line"><span>#60以上    黄色警告   33m</span></span>
<span class="line"><span>#70以上    粉色严重警告 35m </span></span>
<span class="line"><span>#80以上    红色警告 31m</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#2、算法</span></span>
<span class="line"><span>#收集内存使用率  $1 </span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>#多条件判断</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ $1 -gt 80 ]</span></span>
<span class="line"><span>then</span></span>
<span class="line"><span>	echo -e &quot;\\033[31m 警告 \\033[0m&quot;</span></span>
<span class="line"><span>elif [ $1 -gt 70 ]</span></span>
<span class="line"><span>then</span></span>
<span class="line"><span>	echo -e &quot;\\033[35m 警告 \\033[0m&quot;</span></span>
<span class="line"><span>elif [ $1 -gt 60 ]</span></span>
<span class="line"><span>then</span></span>
<span class="line"><span>	echo -e &quot;\\033[33m 警告 \\033[0m&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>	echo -e &quot;\\033[32m OK \\033[0m&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#注意事项</span></span>
<span class="line"><span>#多条件判断  需要从最严格开始判断  否者 后面的就不会生效</span></span>
<span class="line"><span>#如果你第一个判断的是60以上，那么 70 80 都符合第一个条件。所以后面的判断70  80 就没有任何意义</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、练习案例" tabindex="-1"><a class="header-anchor" href="#五、练习案例"><span>五、练习案例</span></a></h2><p><strong>案例需求</strong> 比较两个整数的关系</p><p><strong>案例思考</strong></p><ul><li>两个整数有几种关系 – 大于 – 等于 – 小于</li></ul><p><strong>案例代码</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Created Time:</span></span>
<span class="line"><span>#Script Description: </span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ $1 -gt $2 ]</span></span>
<span class="line"><span>   then</span></span>
<span class="line"><span>	echo &quot;$1 &gt; $2&quot;</span></span>
<span class="line"><span>elif [ $1 -eq $2 ]</span></span>
<span class="line"><span>   then</span></span>
<span class="line"><span>        echo &quot;$1 = $2&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>        echo &quot;$1 &lt; $2&quot;</span></span>
<span class="line"><span>fi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、if嵌套if" tabindex="-1"><a class="header-anchor" href="#六、if嵌套if"><span>六、if嵌套if</span></a></h2><p>当有多步判断的时候，可以使用if嵌套</p><p><strong>1、多步判断 类似于多条件if</strong><strong>2、依赖执行的环境 configure-&gt;make-&gt;make install</strong></p><h4 id="_6-1、使用if嵌套if的方式判断两个整数的关系" tabindex="-1"><a class="header-anchor" href="#_6-1、使用if嵌套if的方式判断两个整数的关系"><span>6.1、使用if嵌套if的方式判断两个整数的关系</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>#Author: </span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#Script Description: </span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ $1 -ne $2 ]</span></span>
<span class="line"><span>   then</span></span>
<span class="line"><span>       if [ $1 -gt $2 ]</span></span>
<span class="line"><span>  	  then</span></span>
<span class="line"><span>		echo &quot; $1 &gt; $2 &quot;</span></span>
<span class="line"><span>       else</span></span>
<span class="line"><span>		echo &quot; $1 &lt; $2 &quot;</span></span>
<span class="line"><span>       fi</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>       echo &quot; $1 = $2 &quot;</span></span>
<span class="line"><span>fi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-2、写一个nginx安装初始化脚本" tabindex="-1"><a class="header-anchor" href="#_6-2、写一个nginx安装初始化脚本"><span>6.2、写一个nginx安装初始化脚本</span></a></h4><p><strong>案例需求</strong> 写一个nginx业务初始化脚本，完成nginx软件自动安装。</p><p><strong>案例思考</strong></p><ul><li>1、nginx软件包获得方式</li><li>2、nginx安装流程</li><li>3、nginx安装依赖关系</li></ul><p><strong>案例步骤</strong></p><ul><li>1、软件包下载</li><li>2、软件包解压</li><li>3、安装依赖包</li><li>4、安装nginx</li><li>5、返回结果</li></ul><p><strong>案例代码</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#Script Description: nginx aoto install script</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>source_pkg=nginx-1.19.2.tar.gz</span></span>
<span class="line"><span>#1、软件包下载</span></span>
<span class="line"><span>wget http://nginx.org/download/$source_pkg </span></span>
<span class="line"><span>#2、解压</span></span>
<span class="line"><span>if [ -f $source_pkg ];then</span></span>
<span class="line"><span>	tar xf $source_pkg &amp;&amp; cd nginx-1.19.2</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>        echo &quot;not found $source_pkg&quot;</span></span>
<span class="line"><span>	exit 1</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#3、安装依赖包</span></span>
<span class="line"><span>if ! ( yum -y install pcre-devel zlib-devel );then</span></span>
<span class="line"><span>      echo &quot;yum: install soft error&quot;</span></span>
<span class="line"><span>      exit 1</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#4、配置</span></span>
<span class="line"><span>#判断配置语句执行结果</span></span>
<span class="line"><span>if ./configure 1&gt;/dev/null        </span></span>
<span class="line"><span>	then</span></span>
<span class="line"><span>	#判断make执行结果</span></span>
<span class="line"><span>	     if make 1&gt;/dev/null</span></span>
<span class="line"><span>		 then</span></span>
<span class="line"><span>		 #判断make install安装结果</span></span>
<span class="line"><span>			if make install 1&gt;/dev/null</span></span>
<span class="line"><span>			   then</span></span>
<span class="line"><span>			 	echo &quot;nginx 安装成功&quot;</span></span>
<span class="line"><span>			else</span></span>
<span class="line"><span>			 	echo &quot;nginx 安装失败&quot;</span></span>
<span class="line"><span>				exit 1</span></span>
<span class="line"><span>		        fi</span></span>
<span class="line"><span>		else</span></span>
<span class="line"><span>			echo &quot;make fail&quot;</span></span>
<span class="line"><span>			exit 1</span></span>
<span class="line"><span>		fi</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>		echo &quot;configure fail&quot;</span></span>
<span class="line"><span>		exit 1</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#./configure</span></span>
<span class="line"><span>#if [ $? -eq 0 ];then</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#注意: 1&gt;/dev/null</span></span>
<span class="line"><span>1  标准输出</span></span>
<span class="line"><span>2  标准错误输出</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七、if高级用法" tabindex="-1"><a class="header-anchor" href="#七、if高级用法"><span>七、if高级用法</span></a></h2><h4 id="_7-1、条件符号使用双圆括号-可以在条件中植入数学表达式-if" tabindex="-1"><a class="header-anchor" href="#_7-1、条件符号使用双圆括号-可以在条件中植入数学表达式-if"><span>7.1、条件符号使用双圆括号，可以在条件中植入数学表达式 if (())</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>#Author:</span></span>
<span class="line"><span>#Created Time:</span></span>
<span class="line"><span>#Script Description: </span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (( (5+5-5)*5/5 &gt; 10 ))</span></span>
<span class="line"><span>    then</span></span>
<span class="line"><span>        echo &quot;yes&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>        echo &quot;no&quot;</span></span>
<span class="line"><span>fi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-2、使用双方括号-可以在条件中使用通配符" tabindex="-1"><a class="header-anchor" href="#_7-2、使用双方括号-可以在条件中使用通配符"><span>7.2、使用双方括号,可以在条件中使用通配符</span></a></h4><p>通过代码看下 ，为字符串提供高级功能，模式匹配 r* 匹配r开头的字符串</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>#Author: </span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#Script Description: </span></span>
<span class="line"><span>for var in  ab ac rx bx rvv vt</span></span>
<span class="line"><span>   do</span></span>
<span class="line"><span>       if [[ &quot;$var&quot; == r* ]]</span></span>
<span class="line"><span>	  then</span></span>
<span class="line"><span>		echo &quot;$var&quot;</span></span>
<span class="line"><span>       fi</span></span>
<span class="line"><span>done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八、简写if" tabindex="-1"><a class="header-anchor" href="#八、简写if"><span>八、简写if</span></a></h2><p>省去了关键字，条件为真采用&amp;&amp;符号链接命令块，条件为假采用||链接命令块</p><p>简写if一般用在简单的判断中</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>if [ ! -d /tmp/baism ]</span></span>
<span class="line"><span>    then</span></span>
<span class="line"><span>        mkdir /tmp/baism</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>可以简写为</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[ ！ -d /tmp/baism ] &amp;&amp; mkdir /tmp/baism</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ $USER == &#39;root&#39; ]</span></span>
<span class="line"><span>	  then</span></span>
<span class="line"><span>	      echo &quot;hello root&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>			  echo &quot;hello guest&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>可以简写</span></span>
<span class="line"><span>[ $USER == &#39;root&#39; ]&amp;&amp;echo &quot;hello root&quot; || echo &quot;hello guest&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="九、课后练习" tabindex="-1"><a class="header-anchor" href="#九、课后练习"><span>九、课后练习</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>1、计算机状态监控。能ping通就算up，不通为down,需要考虑网络延迟问题造成的假报警问题。</span></span>
<span class="line"><span>#1、分别ping  取三个值  判断三个值的结果</span></span>
<span class="line"><span>    1.1 ping 3次 并取值</span></span>
<span class="line"><span>    1.2 三次结果与运算  得出结论</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>2、监控一个服务端口,判断其状态</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3、打印内存使用率脚本，打印内存使用率、swap使用率、buff&amp;cache使用量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4、打印磁盘使用率脚本，对本机的磁盘使用率统计并打印结果</span></span>
<span class="line"><span>     使用率小于80，绿色输出</span></span>
<span class="line"><span>     使用率小于90，大于80，黄色输出</span></span>
<span class="line"><span>     使用率小于95，大于90，红色输出</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5、网卡发送和就收数据量监控，按秒统计。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>6、URL监控脚本，对某个URL进行监控，返回值为200则代表成功访问。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>7、写一个mysql binlog备份脚本，要求每天0点0分，计算机自动备份前一天的binlog日志，打包后发送给备份服务器。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>8、闰年判断</span></span>
<span class="line"><span></span></span>
<span class="line"><span>9、判断/tmp/run目录是否存在，如果不存在就建立，如果存在就删除目录里所有文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>10、写一个nginx安装脚本</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,67),p=[l];function d(c,t){return a(),n("div",null,p)}const u=s(e,[["render",d],["__file","shell流程控制-if判断语句.html.vue"]]),m=JSON.parse('{"path":"/demo/back-ends/Linux/Shell%E8%84%9A%E6%9C%AC/shell%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6-if%E5%88%A4%E6%96%AD%E8%AF%AD%E5%8F%A5.html","title":"shell流程控制-if判断语句","lang":"en-US","frontmatter":{"title":"shell流程控制-if判断语句","icon":"code","category":"shell","order":11,"description":"一、if介绍 如何写一个高可用性的脚本，赋予脚本智能化，赋予脚本执行逻辑。 比如nginx安装脚本中 configure执行成功在执行make, make执行成功在执行make install 上一步错误就不需要执行后面的代码了。 answer: 加入判断 只要你想在代码中判断一下的时候就第一时间想到if就行了，适用于99%的语言。 当我们在写程序的时...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/demo/back-ends/Linux/Shell%E8%84%9A%E6%9C%AC/shell%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6-if%E5%88%A4%E6%96%AD%E8%AF%AD%E5%8F%A5.html"}],["meta",{"property":"og:site_name","content":"Utopia"}],["meta",{"property":"og:title","content":"shell流程控制-if判断语句"}],["meta",{"property":"og:description","content":"一、if介绍 如何写一个高可用性的脚本，赋予脚本智能化，赋予脚本执行逻辑。 比如nginx安装脚本中 configure执行成功在执行make, make执行成功在执行make install 上一步错误就不需要执行后面的代码了。 answer: 加入判断 只要你想在代码中判断一下的时候就第一时间想到if就行了，适用于99%的语言。 当我们在写程序的时..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.zutuanxue.com:8000/static/media/images/2020/9/25/1601016825298.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-21T02:46:20.000Z"}],["meta",{"property":"article:author","content":"GXL"}],["meta",{"property":"article:modified_time","content":"2024-09-21T02:46:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"shell流程控制-if判断语句\\",\\"image\\":[\\"https://www.zutuanxue.com:8000/static/media/images/2020/9/25/1601016825298.png\\",\\"https://www.zutuanxue.com:8000/static/media/images/2020/9/25/1601016994805.png\\",\\"https://www.zutuanxue.com:8000/static/media/images/2020/9/25/1601017300715.png\\"],\\"dateModified\\":\\"2024-09-21T02:46:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"GXL\\",\\"url\\":\\"https://www.cnblogs.com/feel-myself\\",\\"email\\":\\"gaoxiaoliang123@126.com\\"}]}"]]},"headers":[{"level":2,"title":"一、if介绍","slug":"一、if介绍","link":"#一、if介绍","children":[]},{"level":2,"title":"二、单if语法","slug":"二、单if语法","link":"#二、单if语法","children":[]},{"level":2,"title":"三、if…else语句","slug":"三、if-else语句","link":"#三、if-else语句","children":[]},{"level":2,"title":"四、if…elif…else","slug":"四、if-elif-else","link":"#四、if-elif-else","children":[]},{"level":2,"title":"五、练习案例","slug":"五、练习案例","link":"#五、练习案例","children":[]},{"level":2,"title":"六、if嵌套if","slug":"六、if嵌套if","link":"#六、if嵌套if","children":[]},{"level":2,"title":"七、if高级用法","slug":"七、if高级用法","link":"#七、if高级用法","children":[]},{"level":2,"title":"八、简写if","slug":"八、简写if","link":"#八、简写if","children":[]},{"level":2,"title":"九、课后练习","slug":"九、课后练习","link":"#九、课后练习","children":[]}],"git":{"createdTime":1726886780000,"updatedTime":1726886780000,"contributors":[{"name":"udo-bit","email":"enote_gxl@163.com","commits":1}]},"readingTime":{"minutes":6.62,"words":1985},"filePathRelative":"demo/back-ends/Linux/Shell脚本/shell流程控制-if判断语句.md","localizedDate":"September 21, 2024","excerpt":"<h2>一、if介绍</h2>\\n<p>如何写一个高可用性的脚本，赋予脚本智能化，赋予脚本执行逻辑。</p>\\n<p>比如nginx安装脚本中</p>\\n<ul>\\n<li>configure执行成功在执行make,</li>\\n<li>make执行成功在执行make install</li>\\n<li>上一步错误就不需要执行后面的代码了。</li>\\n</ul>\\n<p>answer: 加入判断</p>\\n<p>只要你想在代码中判断一下的时候就第一时间想到if就行了，适用于99%的语言。</p>\\n<p>当我们在写程序的时候，时常对上一步执行是否成功如何判断苦恼，当我们今天学习了if就可以解决你的苦恼。if语句在我们程序中就是用来做判断的，以后大家不管学习什么语言，以后只要涉及到判断的部分，大家就可以直接拿if来使用，不同的语言之间的if只是语法不同，原理是相同的。</p>","autoDesc":true}');export{u as comp,m as data};
