import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,d as e}from"./app-Bv-1UOm-.js";const i={},l=e(`<h2 id="一、变量介绍" tabindex="-1"><a class="header-anchor" href="#一、变量介绍"><span>一、变量介绍</span></a></h2><p>在编程中，我们总有一些数据需要临时存放在内存，以待后续使用时快速读出。先了解一下计算机的存储单位吧。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>计算机的单位:</span></span>
<span class="line"><span>1B=8bit</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1KB=1024B</span></span>
<span class="line"><span>1MB=1024KB</span></span>
<span class="line"><span>1GB=1024MB</span></span>
<span class="line"><span>1TB=1024GB</span></span>
<span class="line"><span>1PB=1024TB</span></span>
<span class="line"><span>1EB=1024PB</span></span>
<span class="line"><span>1ZB=1024EB</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>好了，已经够大了！当然还有YB、BB更大的单位，同样进制也是1024.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1G=1024*1024*1024=1073741824B</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假如你将一个1B的字符存入内存，如何读出呢？有没有一种大海捞针的感觉啊！我们讨论一下计算机是如何通过让我们人类快速将数据存在内存，如何从内存中读出数据的。我们研究过变量后就明白了。</p><p>变量：变量是编程中最常用的一种临时在内存中存取数据的一种方式。</p><p>变量存取原理</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>关于内存的说明</span></span>
<span class="line"><span>a、系统启动    内存被按照1B一个单位划分成N块     并且以十六进制为每一个空间编号</span></span>
<span class="line"><span></span></span>
<span class="line"><span>b、内存跟踪表记录  使用和未使用的内存的地址编号</span></span>
<span class="line"><span></span></span>
<span class="line"><span>c、内存申请    系统从未使用的内存中拿出一个或者一段连续空间  给你使用   同时在内存跟踪表中记录</span></span>
<span class="line"><span>该地址被占用不在分给别人，同时在系统中建立映射机制   </span></span>
<span class="line"><span>比如:变量名 STRING1=‘ABC’</span></span>
<span class="line"><span></span></span>
<span class="line"><span>name&lt;==&gt;0x5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>d、释放内存</span></span>
<span class="line"><span>从内存跟踪表中将记录删除，下次存数据直接覆盖</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://www.zutuanxue.com:8000/static/media/images/2020/9/21/1600685218168.png" alt="变量存储.png" tabindex="0" loading="lazy"><figcaption>变量存储.png</figcaption></figure><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>CHAR1(0x3)=A</span></span>
<span class="line"><span>从图片可以看出，当我们在脚本中定义变量存值的时候，可以从以下方面看到变化：</span></span>
<span class="line"><span>a、内存占用：如果存的是一个字符则占用1个字节，如果存的是字符串则是字符串的长度加1个字节长度(\\0是一个</span></span>
<span class="line"><span>特殊字符，代表字符串结束)。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>b、变量名与内存空间关系：计算机中会将对应的内存空间地址和变量名称绑定在一起，此时代表这段内存空间已经被</span></span>
<span class="line"><span>程序占用，其他程序不可复用；然后将变量名对应的值存在对应内存地址的空间里。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、变量定义" tabindex="-1"><a class="header-anchor" href="#二、变量定义"><span>二、变量定义</span></a></h2><h5 id="_2-1、什么时候需要定义变量" tabindex="-1"><a class="header-anchor" href="#_2-1、什么时候需要定义变量"><span>2.1、什么时候需要定义变量？</span></a></h5><p>如果某个内容需要多次使用，并且在代码中重复出现，那么可以用变量代表该内容。这样在修改内容的时候，仅仅需要修改变量的值。 在代码运作的过程中，可能会把某些命令的执行结果保存起来，后续代码需要使用这些结果，就可以直接使用这个变量。</p><h5 id="_2-2、定义一个变量" tabindex="-1"><a class="header-anchor" href="#_2-2、定义一个变量"><span>2.2、定义一个变量</span></a></h5><p>变量格式： 变量名=值</p><p>在shell编程中的变量名和等号之间不能有空格。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>变量名命名规则：</span></span>
<span class="line"><span>    命名只能使用英文字母，数字和下划线，首个字符不能以数字开头。</span></span>
<span class="line"><span>    中间不能有空格，可以使用下划线（_）。</span></span>
<span class="line"><span>    不能使用标点符号。</span></span>
<span class="line"><span>    不能使用bash里的关键字（可用help命令查看保留关键字）。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义变量举例： VAR1=1 age=18 整形 name=‘baism’ 字符串 score=88.8 浮点</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>注意：字符串要用单引号或双引号引起来</span></span>
<span class="line"><span>建议变量名为大写，和命令区分</span></span>
<span class="line"><span>			_name</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义变量演示：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>变量赋值，此种方法设置为本地变量</span></span>
<span class="line"><span>[root@zutuanxue ~]# name=&quot;baism&quot;</span></span>
<span class="line"><span>[root@zutuanxue ~]# school=&#39;ayitula&#39;</span></span>
<span class="line"><span>[root@zutuanxue ~]# age=30</span></span>
<span class="line"><span>[root@zutuanxue ~]# score=88.8</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-3、取消变量-unset" tabindex="-1"><a class="header-anchor" href="#_2-3、取消变量-unset"><span>2.3、取消变量 unset</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>取消当前环境中的变量，如果是变量设置是保存在文件中，下次重启又会恢复</span></span>
<span class="line"><span>[root@zutuanxue ~]# unset name</span></span>
<span class="line"><span>[root@zutuanxue ~]# echo $name</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-4、-有类型变量-declare" tabindex="-1"><a class="header-anchor" href="#_2-4、-有类型变量-declare"><span>2.4、 有类型变量 declare</span></a></h5><p>-i 将变量看成整数 -r 使变量只读 readonly,该变量的值无法改变，并且不能为unset -x 标记变量通过环境导出 export -a 指定为索引数组（普通数组）；查看普通数组 -A 指定为关联数组；查看关联数组</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[root@zutuanxue ~]# declare -i num=&#39;asa&#39;</span></span>
<span class="line"><span>[root@zutuanxue ~]# echo $num</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>[root@zutuanxue ~]# num=100</span></span>
<span class="line"><span>[root@zutuanxue ~]# echo $num</span></span>
<span class="line"><span>100</span></span>
<span class="line"><span>[root@zutuanxue ~]# declare -r num</span></span>
<span class="line"><span>[root@zutuanxue ~]# echo $num</span></span>
<span class="line"><span>100</span></span>
<span class="line"><span>[root@zutuanxue~]# num=200</span></span>
<span class="line"><span>-bash: num: 只读变量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@zutuanxue ~]# declare -x</span></span>
<span class="line"><span>declare -x HISTCONTROL=&quot;ignoredups&quot;</span></span>
<span class="line"><span>declare -x HISTSIZE=&quot;1000&quot;</span></span>
<span class="line"><span>declare -x HOME=&quot;/root&quot;</span></span>
<span class="line"><span>declare -x HOSTNAME=&quot;Bai_Shuming&quot;</span></span>
<span class="line"><span>declare -x LANG=&quot;zh_CN.UTF-8&quot;</span></span>
<span class="line"><span>declare -x LESSOPEN=&quot;||/usr/bin/lesspipe.sh %s&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、变量分类" tabindex="-1"><a class="header-anchor" href="#三、变量分类"><span>三、变量分类</span></a></h2><p>系统中的变量根据作用域及生命周期可以分为四类：本地变量、环境变量、全局变量、内置变量</p><h5 id="_3-1、本地变量" tabindex="-1"><a class="header-anchor" href="#_3-1、本地变量"><span>3.1、本地变量</span></a></h5><p>用户自定义的变量，定义在脚本或者当前终端中，脚本执行完毕或终端结束变量失效。</p><h5 id="_3-2、环境变量" tabindex="-1"><a class="header-anchor" href="#_3-2、环境变量"><span>3.2、环境变量</span></a></h5><p>定义在用户家目录下的.bashrc或.bash_profile文件中，用户私有变量，只能本用户使用。</p><p>查看当前用户的环境变量 env</p><p>查询当前用户的所有变量(临时变量与环境变量) set</p><h5 id="_3-3、将当前变量变成环境变量-export" tabindex="-1"><a class="header-anchor" href="#_3-3、将当前变量变成环境变量-export"><span>3.3、将当前变量变成环境变量 export</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>定义一个临时变量</span></span>
<span class="line"><span>1、</span></span>
<span class="line"><span>[root@zutuanxue tmp]# export A=hello //临时将一个本地变量（临时变量）变成环境变量</span></span>
<span class="line"><span>[root@zutuanxue tmp]# env|grep ^A</span></span>
<span class="line"><span>A=hello</span></span>
<span class="line"><span>2、</span></span>
<span class="line"><span>[root@zutuanxue tmp]# A=HELLO</span></span>
<span class="line"><span>[root@zutuanxue tmp]# export A</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3、定义一个永久生效变量：</span></span>
<span class="line"><span>vim .bash_profile 或者 ~/.bashrc</span></span>
<span class="line"><span>A=hello</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>关于export说明</span></span>
<span class="line"><span>用户登录时:</span></span>
<span class="line"><span>1) 用户登录到Linux系统后，系统将启动一个用户shell。在这个shell中，可以使用shell命令或声明变量，也可以</span></span>
<span class="line"><span>创建并运行 shell脚本程序。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>运行脚本时:</span></span>
<span class="line"><span>2) 运行shell脚本程序时，系统将创建一个子shell。此时，系统中将有两个shell，一个是登录时系统启动的shell，</span></span>
<span class="line"><span>另一个是系统为运行脚本程序创建的shell。当一个脚本程序运行完毕，它的脚本shell将终止，可以返回到执行该脚本</span></span>
<span class="line"><span>之前的shell。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>从这种意义上来说，用户可以有许多 shell，每个shell都是由某个shell（称为父shell）派生的。</span></span>
<span class="line"><span>在子shell中定义的变量只在该子shell内有效。如果在一个shell脚本程序中定义了一个变量，当该脚本程序运行时，</span></span>
<span class="line"><span>这个定义的变量只是该脚本程序内的一个局部变量，其他的shell不能引用它，要使某个变量的值可以在其他shell中</span></span>
<span class="line"><span>被改变，可以使用export命令对已定义的变量进行输出。 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>export命令将使系统在创建每一个新的shell时定义这个变量的一个拷贝。这个过程称之为变量输出。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父shell与子shell</p><figure><img src="https://www.zutuanxue.com:8000/static/media/images/2020/9/21/1600685550727.png" alt="shell父子关系.png" tabindex="0" loading="lazy"><figcaption>shell父子关系.png</figcaption></figure><h5 id="_3-4、全局变量" tabindex="-1"><a class="header-anchor" href="#_3-4、全局变量"><span>3.4、全局变量</span></a></h5><p>使用export命令将本地变量输出为当前shell中的环境变量 所有用户及shell都可以使用，可以在/etc/profile /etc/bashrc下永久定义</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>打印全局变量 printenv</span></span>
<span class="line"><span></span></span>
<span class="line"><span>定义格式</span></span>
<span class="line"><span>export SCHOOL=&#39;zutuanxue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>测试方法：</span></span>
<span class="line"><span>通过不同用户登录测试是否能读取变量</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-5、内置变量" tabindex="-1"><a class="header-anchor" href="#_3-5、内置变量"><span>3.5、内置变量</span></a></h5><p>系统变量(内置bash中变量) ： shell本身已经固定好了它的名字和作用.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>$?：上一条命令执行后返回的状态，当返回状态值为0时表示执行正常，非0值表示执行异常或出错</span></span>
<span class="line"><span> 若退出状态值为0，表示命令运行成功</span></span>
<span class="line"><span> 若退出状态值为127,表示command not found</span></span>
<span class="line"><span> 若退出状态值为126,表示找到了该命令但无法执行（权限不够）</span></span>
<span class="line"><span> 若退出状态值为1&amp;2,表示没有那个文件或目录</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>$$：当前所在进程的进程号     echo $$   eg：kill -9 \`echo $$\`  = exit   退出当前会话</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$!：后台运行的最后一个进程号  （当前终端）  # gedit &amp;</span></span>
<span class="line"><span>!$ 调用最后一条命令历史中的参数</span></span>
<span class="line"><span>!! 调用最后一条命令历史</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>$#：脚本后面接的参数的个数</span></span>
<span class="line"><span>$*：脚本后面所有参数，参数当成一个整体输出，每一个变量参数之间以空格隔开</span></span>
<span class="line"><span>$@: 脚本后面所有参数，参数是独立的，也是全部输出</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$0：当前执行的进程/程序名  echo $0     </span></span>
<span class="line"><span>$1~$9 位置参数变量</span></span>
<span class="line"><span>\${10}~\${n} 扩展位置参数变量  第10个位置变量必须用{}大括号括起来</span></span>
<span class="line"><span>./1.sh a b c</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@zutuanxue shell01]# cat 2.sh </span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>#xxxx</span></span>
<span class="line"><span>echo &quot;\\$0 = $0&quot;</span></span>
<span class="line"><span>echo &quot;\\$# = $#&quot;</span></span>
<span class="line"><span>echo &quot;\\$* = $*&quot;</span></span>
<span class="line"><span>echo &quot;\\$@ = $@&quot;</span></span>
<span class="line"><span>echo &quot;\\$1 = $1&quot; </span></span>
<span class="line"><span>echo &quot;\\$2 = $2&quot; </span></span>
<span class="line"><span>echo &quot;\\$3 = $3&quot; </span></span>
<span class="line"><span>echo &quot;\\$11 = \${11}&quot; </span></span>
<span class="line"><span>echo &quot;\\$12 = \${12}&quot; </span></span>
<span class="line"><span></span></span>
<span class="line"><span>了解$*和$@的区别：</span></span>
<span class="line"><span>$* :表示将变量看成一个整体</span></span>
<span class="line"><span>$@ :表示变量是独立的</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>for i in &quot;$@&quot;</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>echo $i</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;======我是分割线=======&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for i in &quot;$*&quot;</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>echo $i</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@zutuanxue shell01]# bash 3.sh a b c</span></span>
<span class="line"><span>a</span></span>
<span class="line"><span>b</span></span>
<span class="line"><span>c</span></span>
<span class="line"><span>======我是分割线=======</span></span>
<span class="line"><span>a b c</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量总结说明：</p><p>本地变量：当前用户自定义的变量。当前进程中有效，其他进程及当前进程的子进程无效。</p><p>环境变量：当前进程有效，并且能够被子进程调用。</p><p>全局变量：全局所有的用户和程序都能调用，且继承，新建的用户也默认能调用.</p><p>内置变量：shell本身已经固定好了它的名字和作用.</p><table><thead><tr><th>变量类型</th><th>作用域</th><th>生命周期</th></tr></thead><tbody><tr><td>本地变量</td><td>当前shell环境(子shell不能用)</td><td>脚本结束或终端结束</td></tr><tr><td>环境变量</td><td>当前shell或者子shell</td><td>当前进程结束</td></tr><tr><td>全局变量</td><td>所有用户及shell环境</td><td>关机</td></tr><tr><td>内置变量</td><td>所有用户及shell环境</td><td>关机</td></tr></tbody></table><h2 id="四、变量取值" tabindex="-1"><a class="header-anchor" href="#四、变量取值"><span>四、变量取值</span></a></h2><p>读取变量内容符: 读取方法：变量名</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>变量内容读出</span></span>
<span class="line"><span>[root@zutuanxue ~]# echo $name</span></span>
<span class="line"><span>baism</span></span>
<span class="line"><span>[root@zutuanxue ~]# echo $school</span></span>
<span class="line"><span>ayitula</span></span>
<span class="line"><span>[root@zutuanxue ~]# echo $age</span></span>
<span class="line"><span>30</span></span>
<span class="line"><span>[root@zutuanxue ~]# echo $score</span></span>
<span class="line"><span>88.8</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>变量读取过程中，默认单引号是不解释变量的.比如</span></span>
<span class="line"><span>[root@zutuanxue ~]# echo &#39;$name&#39;</span></span>
<span class="line"><span>$name</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果必须使用单引号还要读取变量的值可以使用eval命令[重新运算求出参数的内容] </span></span>
<span class="line"><span>[root@zutuanxue ~]# eval  echo &#39;$name&#39;</span></span>
<span class="line"><span>baism</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、其他变量-扩展" tabindex="-1"><a class="header-anchor" href="#五、其他变量-扩展"><span>五、其他变量（扩展）</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>1）取出一个目录下的目录和文件：dirname和 basename </span></span>
<span class="line"><span>2）变量&quot;内容&quot;的删除和替换</span></span>
<span class="line"><span>一个“%”代表从右往左去掉一个/key/</span></span>
<span class="line"><span>两个“%%”代表从右往左最大去掉/key/</span></span>
<span class="line"><span>一个“#”代表从左往右去掉一个/key/</span></span>
<span class="line"><span>两个“##”代表从左往右最大去掉/key/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># A=/root/Desktop/shell/mem.txt </span></span>
<span class="line"><span># echo $A</span></span>
<span class="line"><span>/root/Desktop/shell/mem.txt</span></span>
<span class="line"><span># dirname $A   取出目录</span></span>
<span class="line"><span>/root/Desktop/shell</span></span>
<span class="line"><span># basename $A  取出文件</span></span>
<span class="line"><span>mem.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># url=www.taobao.com</span></span>
<span class="line"><span># echo \${#url}      获取变量的长度</span></span>
<span class="line"><span># echo \${url#*.}       以分隔符.界限  *匹配所有</span></span>
<span class="line"><span># echo \${url##*.}</span></span>
<span class="line"><span># echo \${url%.*}</span></span>
<span class="line"><span># echo \${url%%.*}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,56),p=[l];function d(c,r){return a(),n("div",null,p)}const u=s(i,[["render",d],["__file","shell变量详解.html.vue"]]),h=JSON.parse('{"path":"/demo/back-ends/Linux/Shell%E8%84%9A%E6%9C%AC/shell%E5%8F%98%E9%87%8F%E8%AF%A6%E8%A7%A3.html","title":"shell变量详解","lang":"en-US","frontmatter":{"title":"shell变量详解","order":4,"icon":"code","category":"shell","description":"一、变量介绍 在编程中，我们总有一些数据需要临时存放在内存，以待后续使用时快速读出。先了解一下计算机的存储单位吧。 假如你将一个1B的字符存入内存，如何读出呢？有没有一种大海捞针的感觉啊！我们讨论一下计算机是如何通过让我们人类快速将数据存在内存，如何从内存中读出数据的。我们研究过变量后就明白了。 变量：变量是编程中最常用的一种临时在内存中存取数据的一种...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/demo/back-ends/Linux/Shell%E8%84%9A%E6%9C%AC/shell%E5%8F%98%E9%87%8F%E8%AF%A6%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"Utopia"}],["meta",{"property":"og:title","content":"shell变量详解"}],["meta",{"property":"og:description","content":"一、变量介绍 在编程中，我们总有一些数据需要临时存放在内存，以待后续使用时快速读出。先了解一下计算机的存储单位吧。 假如你将一个1B的字符存入内存，如何读出呢？有没有一种大海捞针的感觉啊！我们讨论一下计算机是如何通过让我们人类快速将数据存在内存，如何从内存中读出数据的。我们研究过变量后就明白了。 变量：变量是编程中最常用的一种临时在内存中存取数据的一种..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.zutuanxue.com:8000/static/media/images/2020/9/21/1600685218168.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-21T02:46:20.000Z"}],["meta",{"property":"article:author","content":"GXL"}],["meta",{"property":"article:modified_time","content":"2024-09-21T02:46:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"shell变量详解\\",\\"image\\":[\\"https://www.zutuanxue.com:8000/static/media/images/2020/9/21/1600685218168.png\\",\\"https://www.zutuanxue.com:8000/static/media/images/2020/9/21/1600685550727.png\\"],\\"dateModified\\":\\"2024-09-21T02:46:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"GXL\\",\\"url\\":\\"https://www.cnblogs.com/feel-myself\\",\\"email\\":\\"gaoxiaoliang123@126.com\\"}]}"]]},"headers":[{"level":2,"title":"一、变量介绍","slug":"一、变量介绍","link":"#一、变量介绍","children":[]},{"level":2,"title":"二、变量定义","slug":"二、变量定义","link":"#二、变量定义","children":[]},{"level":2,"title":"三、变量分类","slug":"三、变量分类","link":"#三、变量分类","children":[]},{"level":2,"title":"四、变量取值","slug":"四、变量取值","link":"#四、变量取值","children":[]},{"level":2,"title":"五、其他变量（扩展）","slug":"五、其他变量-扩展","link":"#五、其他变量-扩展","children":[]}],"git":{"createdTime":1726886780000,"updatedTime":1726886780000,"contributors":[{"name":"udo-bit","email":"enote_gxl@163.com","commits":1}]},"readingTime":{"minutes":8.73,"words":2620},"filePathRelative":"demo/back-ends/Linux/Shell脚本/shell变量详解.md","localizedDate":"September 21, 2024","excerpt":"<h2>一、变量介绍</h2>\\n<p>在编程中，我们总有一些数据需要临时存放在内存，以待后续使用时快速读出。先了解一下计算机的存储单位吧。</p>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>计算机的单位:</span></span>\\n<span class=\\"line\\"><span>1B=8bit</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>1KB=1024B</span></span>\\n<span class=\\"line\\"><span>1MB=1024KB</span></span>\\n<span class=\\"line\\"><span>1GB=1024MB</span></span>\\n<span class=\\"line\\"><span>1TB=1024GB</span></span>\\n<span class=\\"line\\"><span>1PB=1024TB</span></span>\\n<span class=\\"line\\"><span>1EB=1024PB</span></span>\\n<span class=\\"line\\"><span>1ZB=1024EB</span></span>\\n<span class=\\"line\\"><span>...</span></span>\\n<span class=\\"line\\"><span>好了，已经够大了！当然还有YB、BB更大的单位，同样进制也是1024.</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>1G=1024*1024*1024=1073741824B</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{u as comp,h as data};
