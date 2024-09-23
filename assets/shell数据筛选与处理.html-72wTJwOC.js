import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,d as i}from"./app-Bv-1UOm-.js";const e={},l=i(`<p>聊聊大家常说的数据分析：</p><ul><li>数据收集：负责数据的收集</li><li>数据清洗：负责数据的筛选</li><li>数据分析：数据运算、整理</li><li>数据展示：图表或表格方式输出结果</li></ul><p><strong>shell脚本数据的处理</strong></p><p>1）数据检索:grep tr cut</p><p>2）数据处理:uniq sort tee paste xargs</p><p>之前的脚本中我们都是通过grep、cut、tr、uniq、sort等命令通过管道组合在一起将字符串检索出来，然后在通过shell中对应的运算得到结果，在数据检索过程中大家可能也体会到了其中的辛苦和蹩脚。没办法，会的就这么多，还需要完成任务。</p><p>缺点：复杂的命令组合</p><p>多次运算</p><p>上手难</p><p><strong>解决办法</strong></p><p>好了，学完这节课大家的所有之前的痛苦就都能解决了，今天要给大家介绍一个更加厉害的命令awk。他可以让大家从输出流中检索出自己需要的数据而不需要再向以前那样通过大量命令组合来完成，只需一个命令awk就能完成。并且还能够通过awk对数据进行处理，而不再需要额外的shell运算。</p><p><strong>awk的应用场景</strong></p><p>字符串截取</p><p>数据运算</p><p>比如内存使用率脚本</p><h2 id="shell对输出流的处理-awk" tabindex="-1"><a class="header-anchor" href="#shell对输出流的处理-awk"><span>shell对输出流的处理-awk</span></a></h2><h3 id="_1、awk介绍" tabindex="-1"><a class="header-anchor" href="#_1、awk介绍"><span>1、awk介绍</span></a></h3><p>在日常计算机管理中，总会有很多数据输出到屏幕或者文件，这些输出包含了标准输出、标准错误输出。默认情况下，这些信息全部输出到默认输出设备—屏幕。然而，大量的数据输出中，只有一小部分是我们需要重点关注的，我们需要把我们需要的或者关注的这些信息过滤或者提取以备后续需要时调用。早先的学习中，我们学过使用grep来过滤这些数据，使用cut、tr命令提出某些字段，但是他们都不具备提取并处理数据的能力，都必须先过滤，再提取转存到变量，然后在通过变量提取去处理，比如：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>内存使用率的统计步骤</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1) 通过free -m提取出内存总量，赋值给变量 memory_totle</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2）通过free -m提取出n内存使用量，赋值给变量memory_use</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3）通过数学运算计算内存使用率</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要执行多步才能得到内存使用率，那么有没有一个命令能够集过滤、提取、运算为一体呢？当然，就是今天我要给大家介绍的命令：awk</p><p>平行命令还有gawk、pgawk、dgawk</p><p>awk是一种可以处理数据、产生格式化报表的语言，功能十分强大。awk 认为文件中的每一行是一条记录 记录与记录的分隔符为换行符,每一列是一个字段 字段与字段的分隔符默认是一个或多个空格或tab制表符.</p><p>awk的工作方式是读取数据，将每一行数据视为一条记录（record）每条记录以字段分隔符分成若干字段，然后输出各个字段的值.</p><h3 id="_2、awk语法" tabindex="-1"><a class="header-anchor" href="#_2、awk语法"><span>2、awk语法</span></a></h3><p>awk [options] ‘[BEGIN]{program}[END]’ [FILENAME]</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>常用命令选项</span></span>
<span class="line"><span>-F fs 指定描绘一行中数据字段的文件分隔符  默认为空格</span></span>
<span class="line"><span>-f file 指定读取程序的文件名</span></span>
<span class="line"><span>-v var=value 定义awk程序中使用的变量和默认值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：awk 程序由左大括号和右大括号定义。 程序命令必须放置在两个大括号之间。由于awk命令行假定程序是单文本字符串，所以必须将程序包括在单引号内。</span></span>
<span class="line"><span>1）程序必须放在大括号内</span></span>
<span class="line"><span>2）程序必须要用单引号引起来</span></span>
<span class="line"><span></span></span>
<span class="line"><span>awk程序运行优先级是:</span></span>
<span class="line"><span>    1)BEGIN: 在开始处理数据流之前执行，可选项</span></span>
<span class="line"><span>    2)program: 如何处理数据流，必选项</span></span>
<span class="line"><span>    3)END: 处理完数据流后执行，可选项</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、awk基本应用" tabindex="-1"><a class="header-anchor" href="#_3、awk基本应用"><span>3、awk基本应用</span></a></h3><p>能够熟练使用awk对标准输出的行、列、字符串截取</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>学习用例</span></span>
<span class="line"><span>[root@zutuanxue ~]# cat test </span></span>
<span class="line"><span>1 the quick brown fox jumps over the lazy cat . dog</span></span>
<span class="line"><span>2 the quick brown fox jumps over the lazy cat . dog</span></span>
<span class="line"><span>3 the quick brown fox         jumps over the lazy cat . dog</span></span>
<span class="line"><span>4 the quick brown fox jumps over the lazy cat . dog</span></span>
<span class="line"><span>5 the quick brown fox jumps over the lazy cat . dog</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-awk对字段-列-的提取" tabindex="-1"><a class="header-anchor" href="#_3-1-awk对字段-列-的提取"><span>3.1）awk对字段(列)的提取</span></a></h3><p>字段提取:提取一个文本中的一列数据并打印输出</p><p>字段相关内置变量</p><p>$0 表示整行文本</p><p>$1 表示文本行中的第一个数据字段</p><p>$2 表示文本行中的第二个数据字段</p><p>$N 表示文本行中的第N个数据字段</p><p>$NF 表示文本行中的最后一个数据字段</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>读入test每行数据并把每行数据打印出来</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;{print $0}&#39; test </span></span>
<span class="line"><span>1 the quick brown fox jumps over the lazy cat . dog</span></span>
<span class="line"><span>2 the quick brown fox jumps over the lazy cat . dog</span></span>
<span class="line"><span>3 the quick brown fox         jumps over the lazy cat . dog</span></span>
<span class="line"><span>4 the quick brown fox jumps over the lazy cat . dog</span></span>
<span class="line"><span>5 the quick brown fox jumps over the lazy cat . dog</span></span>
<span class="line"><span></span></span>
<span class="line"><span>打印test第六个字段</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;{print $6}&#39; test</span></span>
<span class="line"><span>jumps</span></span>
<span class="line"><span>jumps</span></span>
<span class="line"><span>jumps</span></span>
<span class="line"><span>jumps</span></span>
<span class="line"><span>jumps</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>打印test最后一个字段</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;{print $NF}&#39; test</span></span>
<span class="line"><span>dog</span></span>
<span class="line"><span>dog</span></span>
<span class="line"><span>dog</span></span>
<span class="line"><span>dog</span></span>
<span class="line"><span>dog</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-命令选项详解" tabindex="-1"><a class="header-anchor" href="#_3-2-命令选项详解"><span>3.2）命令选项详解</span></a></h4><p>-F: 指定字段与字段的分隔符</p><p>当输出的数据流字段格式不是awk默认的字段格式时，我们可以使用-F命令选项来重新定义数据流字段分隔符。比如:</p><p>处理的文件是/etc/passwd，希望打印第一列、第三列、最后一列</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[root@zutuanxue ~]# awk -F &#39;:&#39; &#39;{print $1,$3,$NF}&#39; /etc/passwd</span></span>
<span class="line"><span>root 0 /bin/bash</span></span>
<span class="line"><span>bin 1 /sbin/nologin</span></span>
<span class="line"><span>daemon 2 /sbin/nologin</span></span>
<span class="line"><span>adm 3 /sbin/nologin</span></span>
<span class="line"><span>lp 4 /sbin/nologin</span></span>
<span class="line"><span>sync 5 /bin/sync</span></span>
<span class="line"><span>shutdown 6 /sbin/shutdown</span></span>
<span class="line"><span>halt 7 /sbin/halt</span></span>
<span class="line"><span>mail 8 /sbin/nologin</span></span>
<span class="line"><span>operator 11 /sbin/nologin</span></span>
<span class="line"><span>games 12 /sbin/nologin</span></span>
<span class="line"><span>ftp 14 /sbin/nologin</span></span>
<span class="line"><span>nobody 99 /sbin/nologin</span></span>
<span class="line"><span>systemd-network 192 /sbin/nologin</span></span>
<span class="line"><span>dbus 81 /sbin/nologin</span></span>
<span class="line"><span>polkitd 999 /sbin/nologin</span></span>
<span class="line"><span>postfix 89 /sbin/nologin</span></span>
<span class="line"><span>chrony 998 /sbin/nologin</span></span>
<span class="line"><span>sshd 74 /sbin/nologin</span></span>
<span class="line"><span>ntp 38 /sbin/nologin</span></span>
<span class="line"><span>tcpdump 72 /sbin/nologin</span></span>
<span class="line"><span>nscd 28 /sbin/nologin</span></span>
<span class="line"><span>mysql 997 /sbin/nologin</span></span>
<span class="line"><span>www 996 /sbin/nologin</span></span>
<span class="line"><span>apache 48 /sbin/nologin</span></span>
<span class="line"><span>tss 59 /sbin/nologin</span></span>
<span class="line"><span>zabbix 995 /sbin/nologin</span></span>
<span class="line"><span>saslauth 994 /sbin/nologin</span></span>
<span class="line"><span>grafana 993 /sbin/nologin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>可以看的出，awk输出字段默认的分隔符也是空格</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-f file: 如果awk命令是日常重复工作，而又没有太多变化，可以将程序写入文件，每次使用-f调用程序文件就好，方便，高效。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[root@zutuanxue ~]# cat abc </span></span>
<span class="line"><span>{print $1,$3,$NF}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@zutuanxue ~]# awk -f abc test</span></span>
<span class="line"><span>1 quick dog</span></span>
<span class="line"><span>2 quick dog</span></span>
<span class="line"><span>3 quick dog</span></span>
<span class="line"><span>4 quick dog</span></span>
<span class="line"><span>5 quick dog</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-v 定义变量，既然作者写awk的时候就是按着语言去写的，那么语言中最重要的要素—变量肯定不能缺席，所以可以使用-v命令选项定义变量</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[root@zutuanxue ~]# awk -v name=&#39;baism&#39; &#39;BEGIN{print name}&#39;</span></span>
<span class="line"><span>baism</span></span>
<span class="line"><span></span></span>
<span class="line"><span>定义了一个变量 name=baism，然后调用变量读出数据。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-awk对记录-行-的提取" tabindex="-1"><a class="header-anchor" href="#_3-3-awk对记录-行-的提取"><span>3.3）awk对记录(行)的提取</span></a></h4><p>记录提取：提取一个文本中的一行并打印输出</p><p>记录的提取方法有两种：a、通过行号 b、通过正则匹配</p><p>记录相关内置变量</p><p>NR: 指定行号 number row</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>提取test第三行数据</span></span>
<span class="line"><span></span></span>
<span class="line"><span>指定行号为3</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;NR==3{print $0}&#39; test </span></span>
<span class="line"><span>3 the quick brown fox         jumps over the lazy cat . dog</span></span>
<span class="line"><span></span></span>
<span class="line"><span>指定行的第一个字段精确匹配字符串为3</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;$1==&quot;3&quot;{print $0}&#39; test </span></span>
<span class="line"><span>3 the quick brown fox         jumps over the lazy cat . dog</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-4-awk对字符串提取" tabindex="-1"><a class="header-anchor" href="#_3-4-awk对字符串提取"><span>3.4）awk对字符串提取</span></a></h4><p>记录和字段的汇合点就是字符串</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>打印test第三行的第六个字段</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;NR==3{print $6}&#39; test</span></span>
<span class="line"><span>jumps</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、awk程序的优先级" tabindex="-1"><a class="header-anchor" href="#_4、awk程序的优先级"><span>4、awk程序的优先级</span></a></h3><p>awk代码块的优先级</p><p>关于awk程序的执行优先级，BEGIN是优先级最高的代码块，是在执行PROGRAM之前执行的，不需要提供数据源，因为不涉及到任何数据的处理，也不依赖与PROGRAM代码块；PROGRAM是对数据流干什么，是必选代码块，也是默认代码块。所以在执行时必须提供数据源；END是处理完数据流后的操作，如果需要执行END代码块，就必须需要PROGRAM的支持，单个无法执行。</p><p>BEGIN：处理数据源之前干什么 不需要数据源就可以执行</p><p>PROGRAM： 对数据源干什么 【默认必须有】 需要数据源</p><p>END：处理完数据源后干什么 需要program 需要数据源</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>优先级展示</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;BEGIN{print &quot;hello zutuanxue&quot;}{print $0}END{print &quot;bye zutuanxue&quot;}&#39; test</span></span>
<span class="line"><span>hello zutuanxue</span></span>
<span class="line"><span>1 the quick brown fox jumps over the lazy cat . dog</span></span>
<span class="line"><span>2 the quick brown fox jumps over the lazy cat . dog</span></span>
<span class="line"><span>3 the quick brown fox         jumps over the lazy cat . dog</span></span>
<span class="line"><span>4 the quick brown fox jumps over the lazy cat . dog</span></span>
<span class="line"><span>5 the quick brown fox jumps over the lazy cat . dog</span></span>
<span class="line"><span>bye zutuanxue</span></span>
<span class="line"><span></span></span>
<span class="line"><span>不需要数据源，可以直接执行</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;BEGIN{print &quot;hello world&quot;}&#39;</span></span>
<span class="line"><span>hello world</span></span>
<span class="line"><span></span></span>
<span class="line"><span>没有提供数据流，所以无法执行成功</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;{print &quot;hello world&quot;}&#39;</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;END{print &quot;hello world&quot;}&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、awk高级应用" tabindex="-1"><a class="header-anchor" href="#_5、awk高级应用"><span>5、awk高级应用</span></a></h3><p>awk是一门语言，那么就会符合语言的特性，除了可以定义变量外，还可以定义数组，还可以进行运算，流程控制，我们接下来看看吧。</p><h4 id="_5-1-awk定义变量和数组" tabindex="-1"><a class="header-anchor" href="#_5-1-awk定义变量和数组"><span>5.1）awk定义变量和数组</span></a></h4><p>定义变量</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[root@zutuanxue ~]# awk -v name=&#39;baism&#39; &#39;BEGIN{print name}&#39;</span></span>
<span class="line"><span>baism</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;BEGIN{name=&quot;baism&quot;;print name}&#39;</span></span>
<span class="line"><span>baism</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数组定义方式: 数组名[索引]=值</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>定义数组array，有两个元素，分别是100，200，打印数组元素。</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;BEGIN{array[0]=100;array[1]=200;print array[0],array[1]}&#39;</span></span>
<span class="line"><span>100 200</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;BEGIN{a[0]=100;a[1]=200;print a[0]}&#39;</span></span>
<span class="line"><span>100</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;BEGIN{a[0]=100;a[1]=200;print a[1]}&#39;</span></span>
<span class="line"><span>200</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-awk运算" tabindex="-1"><a class="header-anchor" href="#_5-2-awk运算"><span>5.2）awk运算</span></a></h4><ol><li>赋值运算 =</li><li>比较运算 &gt; &gt;= == &lt; &lt;= !=</li><li>数学运算 + - * / % ** ++ –</li><li>逻辑运算 &amp;&amp; || ！</li><li>匹配运算 ~ !~ 精确匹配 == !=</li></ol><p>a.赋值运算：主要是对变量或者数组赋值，如：</p><p>变量赋值 name=‘baism’ school=‘zutuanxue’</p><p>数组赋值 array[0]=100</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[root@zutuanxue ~]# awk -v name=&#39;baism&#39; &#39;BEGIN{print name}&#39;</span></span>
<span class="line"><span>baism</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;BEGIN{school=&quot;zutuanxue&quot;;print school}&#39;</span></span>
<span class="line"><span>zutuanxue</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;BEGIN{array[0]=100;print array[0]}&#39;</span></span>
<span class="line"><span>100</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b.比较运算，如果比较的是字符串则按ascii编码顺序表比较。如果结果返回为真则用1表示，如果返回为假则用0表示</p><p>ascii</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[root@zutuanxue ~]# awk &#39;BEGIN{print &quot;a&quot; &gt;= &quot;b&quot; }&#39;</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;BEGIN{print &quot;a&quot; &lt;= &quot;b&quot; }&#39;</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;$1&gt;4{print $0}&#39; test</span></span>
<span class="line"><span>5 the quick brown fox jumps over the lazy cat . dog</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;BEGIN{print 100 &gt;= 1 }&#39;</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;BEGIN{print 100 == 1 }&#39;</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;BEGIN{print 100 &lt;= 1 }&#39;</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;BEGIN{print 100 &lt; 1 }&#39;</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;BEGIN{print 100 != 1 }&#39;</span></span>
<span class="line"><span>1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>c.数学运算</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[root@zutuanxue ~]# awk &#39;BEGIN{print 100+3 }&#39;</span></span>
<span class="line"><span>103</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;BEGIN{print 100-3 }&#39;</span></span>
<span class="line"><span>97</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;BEGIN{print 100*3 }&#39;</span></span>
<span class="line"><span>300</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;BEGIN{print 100/3 }&#39;</span></span>
<span class="line"><span>33.3333</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;BEGIN{print 100**3 }&#39;</span></span>
<span class="line"><span>1000000</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;BEGIN{print 100%3 }&#39;</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk -v &#39;count=0&#39; &#39;BEGIN{count++;print count}&#39;</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk -v &#39;count=0&#39; &#39;BEGIN{count--;print count}&#39;</span></span>
<span class="line"><span>-1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>d.逻辑运算</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>与运算:真真为真，真假为假，假假为假</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;BEGIN{print 100&gt;=2 &amp;&amp; 100&gt;=3 }&#39;</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;BEGIN{print 100&gt;=2 &amp;&amp; 1&gt;=100 }&#39;</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>或运算:真真为真，真假为真，假假为假</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;BEGIN{print 100&gt;=2 || 1&gt;=100 }&#39;</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;BEGIN{print 100&gt;=200 || 1&gt;=100 }&#39;</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>非运算</span></span>
<span class="line"><span>[root@manage01 resource]# awk &#39;BEGIN{print ! (100&gt;=2)}&#39;</span></span>
<span class="line"><span>0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>e.匹配运算</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[root@zutuanxue ~]# awk -F &#39;:&#39; &#39;$1 ~ &quot;^ro&quot; {print $0}&#39; /etc/passwd</span></span>
<span class="line"><span>root:x:0:0:root:/root:/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@zutuanxue ~]# awk -F &#39;:&#39; &#39;$1 !~ &quot;^ro&quot; {print $0}&#39; /etc/passwd</span></span>
<span class="line"><span>bin:x:1:1:bin:/bin:/sbin/nologin</span></span>
<span class="line"><span>daemon:x:2:2:daemon:/sbin:/sbin/nologin</span></span>
<span class="line"><span>adm:x:3:4:adm:/var/adm:/sbin/nologin</span></span>
<span class="line"><span>lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin</span></span>
<span class="line"><span>sync:x:5:0:sync:/sbin:/bin/sync</span></span>
<span class="line"><span>shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown</span></span>
<span class="line"><span>halt:x:7:0:halt:/sbin:/sbin/halt</span></span>
<span class="line"><span>mail:x:8:12:mail:/var/spool/mail:/sbin/nologin</span></span>
<span class="line"><span>operator:x:11:0:operator:/root:/sbin/nologin</span></span>
<span class="line"><span>games:x:12:100:games:/usr/games:/sbin/nologin</span></span>
<span class="line"><span>ftp:x:14:50:FTP User:/var/ftp:/sbin/nologin</span></span>
<span class="line"><span>nobody:x:99:99:Nobody:/:/sbin/nologin</span></span>
<span class="line"><span>systemd-network:x:192:192:systemd Network Management:/:/sbin/nologin</span></span>
<span class="line"><span>dbus:x:81:81:System message bus:/:/sbin/nologin</span></span>
<span class="line"><span>polkitd:x:999:997:User for polkitd:/:/sbin/nologin</span></span>
<span class="line"><span>postfix:x:89:89::/var/spool/postfix:/sbin/nologin</span></span>
<span class="line"><span>chrony:x:998:996::/var/lib/chrony:/sbin/nologin</span></span>
<span class="line"><span>sshd:x:74:74:Privilege-separated SSH:/var/empty/sshd:/sbin/nologin</span></span>
<span class="line"><span>ntp:x:38:38::/etc/ntp:/sbin/nologin</span></span>
<span class="line"><span>tcpdump:x:72:72::/:/sbin/nologin</span></span>
<span class="line"><span>nscd:x:28:28:NSCD Daemon:/:/sbin/nologin</span></span>
<span class="line"><span>mysql:x:997:995::/home/mysql:/sbin/nologin</span></span>
<span class="line"><span>www:x:996:994::/home/www:/sbin/nologin</span></span>
<span class="line"><span>apache:x:48:48:Apache:/usr/share/httpd:/sbin/nologin</span></span>
<span class="line"><span>tss:x:59:59:Account used by the trousers package to sandbox the tcsd daemon:/dev/null:/sbin/nologin</span></span>
<span class="line"><span>zabbix:x:995:993:Zabbix Monitoring System:/var/lib/zabbix:/sbin/nologin</span></span>
<span class="line"><span>saslauth:x:994:76:Saslauthd user:/run/saslauthd:/sbin/nologin</span></span>
<span class="line"><span>grafana:x:993:992:grafana user:/usr/share/grafana:/sbin/nologin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-3-awk-环境变量" tabindex="-1"><a class="header-anchor" href="#_5-3-awk-环境变量"><span>5.3）awk 环境变量</span></a></h4><table><thead><tr><th style="text-align:left;">变量</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">FIELDWIDTHS</td><td style="text-align:left;">以空格分隔的数字列表，用空格定义每个数据字段的精确宽度</td></tr><tr><td style="text-align:left;">FS</td><td style="text-align:left;">输入字段分隔符号 数据源的字段分隔符 -F</td></tr><tr><td style="text-align:left;">OFS</td><td style="text-align:left;">输出字段分隔符号</td></tr><tr><td style="text-align:left;">RS</td><td style="text-align:left;">输入记录分隔符</td></tr><tr><td style="text-align:left;">ORS</td><td style="text-align:left;">输出记录分隔符号</td></tr></tbody></table><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>FIELDWIDTHS:重定义列宽并打印，注意不可以使用$0打印所有，因为$0是打印本行全内容，不会打印你定义的字段</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;BEGIN{FIELDWIDTHS=&quot;5 2 8&quot;}NR==1{print $1,$2,$3}&#39; /etc/passwd</span></span>
<span class="line"><span>root: x: 0:0:root</span></span>
<span class="line"><span></span></span>
<span class="line"><span>FS:指定数据源中字段分隔符，类似命令选项-F</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;BEGIN{FS=&quot;:&quot;}NR==1{print $1,$3,$NF}&#39; /etc/passwd</span></span>
<span class="line"><span>root 0 /bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>OFS:指定输出到屏幕后字段的分隔符</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;BEGIN{FS=&quot;:&quot;;OFS=&quot;-&quot;}NR==1{print $1,$3,$NF}&#39; /etc/passwd</span></span>
<span class="line"><span>root-0-/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>RS:指定记录的分隔符</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;BEGIN{RS=&quot;&quot;}{print $1,$13,$25,$37,$49}&#39; test</span></span>
<span class="line"><span>1 2 3 4 5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>将记录的分隔符修改为空行后，所有的行会变成一行，所以所有字段就在一行了。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ORS:输出到屏幕后记录的分隔符，默认为回车</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;BEGIN{RS=&quot;&quot;;ORS=&quot;*&quot;}{print $1,$13,$25,$37,$49}&#39; test</span></span>
<span class="line"><span>1 2 3 4 5*[root@zutuanxue ~]# </span></span>
<span class="line"><span></span></span>
<span class="line"><span>可以看出，提示符和输出在一行了，因为默认回车换成了*</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-4-流程控制" tabindex="-1"><a class="header-anchor" href="#_5-4-流程控制"><span>5.4）流程控制</span></a></h4><p><strong>if判断语句</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>学习用例</span></span>
<span class="line"><span>[root@zutuanxue ~]# cat num</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>9</span></span>
<span class="line"><span></span></span>
<span class="line"><span>单if语句</span></span>
<span class="line"><span>打印$1大于5的行</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;{if($1&gt;5)print $0}&#39; num</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>9</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if...else语句</span></span>
<span class="line"><span>假如$1大于5则除以2输出，否则乘以2输出</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;{if($1&gt;5)print $1/2;else print $1*2}&#39; num</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>10</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>3.5</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>4.5</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>for循环语句</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>学习用例</span></span>
<span class="line"><span>[root@zutuanxue ~]# cat num2</span></span>
<span class="line"><span>60 50 100</span></span>
<span class="line"><span>150 30 10</span></span>
<span class="line"><span>70 100 40</span></span>
<span class="line"><span></span></span>
<span class="line"><span>将一行中的数据都加起来  $1+$2+$3</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;{sum=0;for (i=1;i&lt;4;i++){sum+=$i}print sum}&#39; num2</span></span>
<span class="line"><span>210</span></span>
<span class="line"><span>190</span></span>
<span class="line"><span>210</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果看的不明白可以看下面格式</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;{</span></span>
<span class="line"><span>&gt; sum=0</span></span>
<span class="line"><span>&gt; for (i=1;i&lt;4;i++) {</span></span>
<span class="line"><span>&gt;     sum+=$i</span></span>
<span class="line"><span>&gt; }</span></span>
<span class="line"><span>&gt; print sum</span></span>
<span class="line"><span>&gt; }&#39; num2</span></span>
<span class="line"><span>210</span></span>
<span class="line"><span>190</span></span>
<span class="line"><span>210</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>while循环语句</strong>–先判断后执行</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>学习用例</span></span>
<span class="line"><span>[root@zutuanxue ~]# cat num2</span></span>
<span class="line"><span>60 50 100</span></span>
<span class="line"><span>150 30 10</span></span>
<span class="line"><span>70 100 40</span></span>
<span class="line"><span></span></span>
<span class="line"><span>将文件中的每行的数值累加，和大于或等于150就停止累加</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;{sum=0;i=1;while(sum&lt;150){sum+=$i;i++}print sum}&#39; num2</span></span>
<span class="line"><span>210</span></span>
<span class="line"><span>150</span></span>
<span class="line"><span>170</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果看的不明白可以看下面格式</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;{                                                 </span></span>
<span class="line"><span>sum=0</span></span>
<span class="line"><span>i=1</span></span>
<span class="line"><span>while (sum&lt;150) {</span></span>
<span class="line"><span>   sum+=$i</span></span>
<span class="line"><span>   i++</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>print sum</span></span>
<span class="line"><span>}&#39; num2</span></span>
<span class="line"><span>210</span></span>
<span class="line"><span>150</span></span>
<span class="line"><span>170</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>do…while循环语句</strong>–先执行后判断</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>学习用例</span></span>
<span class="line"><span>[root@zutuanxue ~]# cat num2</span></span>
<span class="line"><span>60 50 100</span></span>
<span class="line"><span>150 30 10</span></span>
<span class="line"><span>70 100 40</span></span>
<span class="line"><span></span></span>
<span class="line"><span>将文件中的每行的数值累加，和大于或等于150就停止累加</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;{sum=0;i=1;do{sum+=$i;i++}while(sum&lt;150);print sum}&#39; num2</span></span>
<span class="line"><span>210</span></span>
<span class="line"><span>150</span></span>
<span class="line"><span>170</span></span>
<span class="line"><span>如果看的不明白可以看下面格式</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;{</span></span>
<span class="line"><span>&gt; sum=0</span></span>
<span class="line"><span>&gt; i=1</span></span>
<span class="line"><span>&gt; do {</span></span>
<span class="line"><span>&gt; sum+=$i</span></span>
<span class="line"><span>&gt; i++</span></span>
<span class="line"><span>&gt; }while (sum&lt;150)</span></span>
<span class="line"><span>&gt; print sum</span></span>
<span class="line"><span>&gt; }&#39; num2</span></span>
<span class="line"><span>210</span></span>
<span class="line"><span>150</span></span>
<span class="line"><span>170</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>循环控制语句</strong></p><p>break 跳出循环,继续执行后续语句</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>学习用例</span></span>
<span class="line"><span>[root@zutuanxue ~]# cat num2</span></span>
<span class="line"><span>60 50 100</span></span>
<span class="line"><span>150 30 10</span></span>
<span class="line"><span>70 100 40</span></span>
<span class="line"><span></span></span>
<span class="line"><span>累加每行数值，和大于150停止累加</span></span>
<span class="line"><span>[root@zutuanxue ~]# awk &#39;{</span></span>
<span class="line"><span>&gt; sum=0</span></span>
<span class="line"><span>&gt; i=1</span></span>
<span class="line"><span>&gt; while (i&lt;4){</span></span>
<span class="line"><span>&gt;    sum+=$i</span></span>
<span class="line"><span>&gt;    if (sum&gt;150){</span></span>
<span class="line"><span>&gt;       break</span></span>
<span class="line"><span>&gt;    }</span></span>
<span class="line"><span>&gt;    i++</span></span>
<span class="line"><span>&gt; }</span></span>
<span class="line"><span>&gt; print sum</span></span>
<span class="line"><span>&gt; }&#39; num2</span></span>
<span class="line"><span>210</span></span>
<span class="line"><span>180</span></span>
<span class="line"><span>170</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,100),p=[l];function d(c,r){return a(),n("div",null,p)}const v=s(e,[["render",d],["__file","shell数据筛选与处理.html.vue"]]),o=JSON.parse('{"path":"/demo/back-ends/Linux/Shell%E8%84%9A%E6%9C%AC/shell%E6%95%B0%E6%8D%AE%E7%AD%9B%E9%80%89%E4%B8%8E%E5%A4%84%E7%90%86.html","title":"shell数据筛选与处理","lang":"en-US","frontmatter":{"title":"shell数据筛选与处理","icon":"code","category":"shell","order":23,"description":"聊聊大家常说的数据分析： 数据收集：负责数据的收集 数据清洗：负责数据的筛选 数据分析：数据运算、整理 数据展示：图表或表格方式输出结果 shell脚本数据的处理 1）数据检索:grep tr cut 2）数据处理:uniq sort tee paste xargs 之前的脚本中我们都是通过grep、cut、tr、uniq、sort等命令通过管道组合在...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/demo/back-ends/Linux/Shell%E8%84%9A%E6%9C%AC/shell%E6%95%B0%E6%8D%AE%E7%AD%9B%E9%80%89%E4%B8%8E%E5%A4%84%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"Utopia"}],["meta",{"property":"og:title","content":"shell数据筛选与处理"}],["meta",{"property":"og:description","content":"聊聊大家常说的数据分析： 数据收集：负责数据的收集 数据清洗：负责数据的筛选 数据分析：数据运算、整理 数据展示：图表或表格方式输出结果 shell脚本数据的处理 1）数据检索:grep tr cut 2）数据处理:uniq sort tee paste xargs 之前的脚本中我们都是通过grep、cut、tr、uniq、sort等命令通过管道组合在..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-21T02:46:20.000Z"}],["meta",{"property":"article:author","content":"GXL"}],["meta",{"property":"article:modified_time","content":"2024-09-21T02:46:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"shell数据筛选与处理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-21T02:46:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"GXL\\",\\"url\\":\\"https://www.cnblogs.com/feel-myself\\",\\"email\\":\\"gaoxiaoliang123@126.com\\"}]}"]]},"headers":[{"level":2,"title":"shell对输出流的处理-awk","slug":"shell对输出流的处理-awk","link":"#shell对输出流的处理-awk","children":[{"level":3,"title":"1、awk介绍","slug":"_1、awk介绍","link":"#_1、awk介绍","children":[]},{"level":3,"title":"2、awk语法","slug":"_2、awk语法","link":"#_2、awk语法","children":[]},{"level":3,"title":"3、awk基本应用","slug":"_3、awk基本应用","link":"#_3、awk基本应用","children":[]},{"level":3,"title":"3.1）awk对字段(列)的提取","slug":"_3-1-awk对字段-列-的提取","link":"#_3-1-awk对字段-列-的提取","children":[]},{"level":3,"title":"4、awk程序的优先级","slug":"_4、awk程序的优先级","link":"#_4、awk程序的优先级","children":[]},{"level":3,"title":"5、awk高级应用","slug":"_5、awk高级应用","link":"#_5、awk高级应用","children":[]}]}],"git":{"createdTime":1726886780000,"updatedTime":1726886780000,"contributors":[{"name":"udo-bit","email":"enote_gxl@163.com","commits":1}]},"readingTime":{"minutes":12.61,"words":3783},"filePathRelative":"demo/back-ends/Linux/Shell脚本/shell数据筛选与处理.md","localizedDate":"September 21, 2024","excerpt":"<p>聊聊大家常说的数据分析：</p>\\n<ul>\\n<li>数据收集：负责数据的收集</li>\\n<li>数据清洗：负责数据的筛选</li>\\n<li>数据分析：数据运算、整理</li>\\n<li>数据展示：图表或表格方式输出结果</li>\\n</ul>\\n<p><strong>shell脚本数据的处理</strong></p>\\n<p>1）数据检索:grep tr cut</p>\\n<p>2）数据处理:uniq sort tee paste xargs</p>\\n<p>之前的脚本中我们都是通过grep、cut、tr、uniq、sort等命令通过管道组合在一起将字符串检索出来，然后在通过shell中对应的运算得到结果，在数据检索过程中大家可能也体会到了其中的辛苦和蹩脚。没办法，会的就这么多，还需要完成任务。</p>","autoDesc":true}');export{v as comp,o as data};
