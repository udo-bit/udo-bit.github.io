import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,d as e}from"./app-B3Z58FXn.js";const i={},l=e(`<p>shell脚本中的代码是按照执行的优先级的顺序从上往下抒写的，代码量越大，在脚本调试的时候就越难排错，当因执行需要调整代码执行顺序的时候就需要不断的复制粘贴，或者删除部分代码来完成，这和从写一个脚本花费的时候相比甚至需要更长的时间。</p><p>代码量大后遇到的问题：</p><ul><li>单个脚本代码量大 （300-500行）</li><li>阅读修改耗时费力</li><li>排错困难</li><li>改变执行顺序困难</li></ul><p>为了解决这些问题，我们可以把代码模块化，按需调用。</p><h2 id="一、函数" tabindex="-1"><a class="header-anchor" href="#一、函数"><span>一、函数</span></a></h2><h3 id="_1-1、函数介绍" tabindex="-1"><a class="header-anchor" href="#_1-1、函数介绍"><span>1.1、函数介绍</span></a></h3><p>shell中允许将<strong>一组命令集合</strong>或<strong>语句</strong>形成一段<strong>可用代码</strong>，这些代码块称为shell函数。给这段代码起个名字称为函数名，后续可以直接调用该段代码的功能。</p><p>将完成一个功能的一段代码进行命名、封装</p><p>函数的优点：</p><ol><li>代码模块化，调用方便，节省内存</li><li>代码模块化，代码量少，排错简单</li><li>代码模块化，可以改变代码的执行顺序</li></ol><h3 id="_1-2、函数定义" tabindex="-1"><a class="header-anchor" href="#_1-2、函数定义"><span>1.2、函数定义</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>语法一:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>函数名 () {</span></span>
<span class="line"><span>    代码块</span></span>
<span class="line"><span>    return N</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法二：</span></span>
<span class="line"><span>function 函数名 {</span></span>
<span class="line"><span>      代码块</span></span>
<span class="line"><span>      return N</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>函数中return说明：</span></span>
<span class="line"><span>1.return可以结束一个函数，类似于前面讲的循环控制语句break(结束当前循环，执行循环体后面的代码)</span></span>
<span class="line"><span>2.return默认返回函数中最后一个命令的退出状态，也可以给定参数值，该参数值的范围是0-256之间。</span></span>
<span class="line"><span>3.如果没有return命令，函数将返回最后一个Shell的退出值。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3、函数调用" tabindex="-1"><a class="header-anchor" href="#_1-3、函数调用"><span>1.3、函数调用</span></a></h3><ul><li>当前命令行调用</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[root@zutuanxue shell04]# cat fun1.sh </span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>hello(){</span></span>
<span class="line"><span>echo &quot;hello zutuanxue $1&quot;</span></span>
<span class="line"><span>hostname</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>menu(){</span></span>
<span class="line"><span>cat &lt;&lt;-EOF</span></span>
<span class="line"><span>1. mysql</span></span>
<span class="line"><span>2. web</span></span>
<span class="line"><span>3. app</span></span>
<span class="line"><span>4. exit</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@zutuanxue shell04]# source fun1.sh </span></span>
<span class="line"><span>[root@zutuanxue shell04]# . fun1.sh </span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@zutuanxue shell04]# hello 888</span></span>
<span class="line"><span>hello zutuanxue 888</span></span>
<span class="line"><span>MissHou.zutuanxue.cc</span></span>
<span class="line"><span>[root@zutuanxue shell04]# menu</span></span>
<span class="line"><span>1. mysql</span></span>
<span class="line"><span>2. web</span></span>
<span class="line"><span>3. app</span></span>
<span class="line"><span>4. exit</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>定义到用户的环境变量中</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/etc/profile	/etc/bashrc		~/.bash_profile	~/.bashrc</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@zutuanxue shell04]# cat ~/.bashrc </span></span>
<span class="line"><span># .bashrc</span></span>
<span class="line"><span></span></span>
<span class="line"><span># User specific aliases and functions</span></span>
<span class="line"><span></span></span>
<span class="line"><span>alias rm=&#39;rm -i&#39;</span></span>
<span class="line"><span>alias cp=&#39;cp -i&#39;</span></span>
<span class="line"><span>alias mv=&#39;mv -i&#39;</span></span>
<span class="line"><span># Source global definitions</span></span>
<span class="line"><span>if [ -f /etc/bashrc ]; then</span></span>
<span class="line"><span>	. /etc/bashrc</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>hello(){</span></span>
<span class="line"><span>echo &quot;hello zutuanxue $1&quot;</span></span>
<span class="line"><span>hostname</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>menu(){</span></span>
<span class="line"><span>cat &lt;&lt;-EOF</span></span>
<span class="line"><span>1. mysql</span></span>
<span class="line"><span>2. web</span></span>
<span class="line"><span>3. app</span></span>
<span class="line"><span>4. exit</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：</span></span>
<span class="line"><span>当用户打开bash的时候会读取该文件</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>脚本中调用</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>#打印菜单</span></span>
<span class="line"><span>source ./fun1.sh</span></span>
<span class="line"><span>menu(){</span></span>
<span class="line"><span>cat &lt;&lt;-END</span></span>
<span class="line"><span>	h	显示命令帮助</span></span>
<span class="line"><span>	f	显示磁盘分区</span></span>
<span class="line"><span>	d	显示磁盘挂载</span></span>
<span class="line"><span>	m	查看内存使用</span></span>
<span class="line"><span>	u	查看系统负载</span></span>
<span class="line"><span>	q	退出程序</span></span>
<span class="line"><span>	END</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>menu		//调用函数</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、学习视频" tabindex="-1"><a class="header-anchor" href="#二、学习视频"><span>二、学习视频</span></a></h2><p><a href="https://www.bilibili.com/video/BV1Tf4y1v7E2?p=68" target="_blank" rel="noopener noreferrer">视频：函数与case语句介绍</a><a href="https://www.bilibili.com/video/BV1Tf4y1v7E2?p=69" target="_blank" rel="noopener noreferrer">视频：函数介绍与定义</a><a href="https://www.bilibili.com/video/BV1Tf4y1v7E2?p=70" target="_blank" rel="noopener noreferrer">视频：函数调用</a></p>`,21),p=[l];function c(d,r){return a(),n("div",null,p)}const u=s(i,[["render",c],["__file","shell函数.html.vue"]]),o=JSON.parse('{"path":"/demo/back-ends/Linux/Shell%E8%84%9A%E6%9C%AC/shell%E5%87%BD%E6%95%B0.html","title":"shell函数","lang":"en-US","frontmatter":{"title":"shell函数","icon":"code","category":"shell","order":19,"description":"shell脚本中的代码是按照执行的优先级的顺序从上往下抒写的，代码量越大，在脚本调试的时候就越难排错，当因执行需要调整代码执行顺序的时候就需要不断的复制粘贴，或者删除部分代码来完成，这和从写一个脚本花费的时候相比甚至需要更长的时间。 代码量大后遇到的问题： 单个脚本代码量大 （300-500行） 阅读修改耗时费力 排错困难 改变执行顺序困难 为了解决这...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/demo/back-ends/Linux/Shell%E8%84%9A%E6%9C%AC/shell%E5%87%BD%E6%95%B0.html"}],["meta",{"property":"og:site_name","content":"Utopia"}],["meta",{"property":"og:title","content":"shell函数"}],["meta",{"property":"og:description","content":"shell脚本中的代码是按照执行的优先级的顺序从上往下抒写的，代码量越大，在脚本调试的时候就越难排错，当因执行需要调整代码执行顺序的时候就需要不断的复制粘贴，或者删除部分代码来完成，这和从写一个脚本花费的时候相比甚至需要更长的时间。 代码量大后遇到的问题： 单个脚本代码量大 （300-500行） 阅读修改耗时费力 排错困难 改变执行顺序困难 为了解决这..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-21T02:46:20.000Z"}],["meta",{"property":"article:author","content":"GXL"}],["meta",{"property":"article:modified_time","content":"2024-09-21T02:46:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"shell函数\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-21T02:46:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"GXL\\",\\"url\\":\\"https://www.cnblogs.com/feel-myself\\",\\"email\\":\\"gaoxiaoliang123@126.com\\"}]}"]]},"headers":[{"level":2,"title":"一、函数","slug":"一、函数","link":"#一、函数","children":[{"level":3,"title":"1.1、函数介绍","slug":"_1-1、函数介绍","link":"#_1-1、函数介绍","children":[]},{"level":3,"title":"1.2、函数定义","slug":"_1-2、函数定义","link":"#_1-2、函数定义","children":[]},{"level":3,"title":"1.3、函数调用","slug":"_1-3、函数调用","link":"#_1-3、函数调用","children":[]}]},{"level":2,"title":"二、学习视频","slug":"二、学习视频","link":"#二、学习视频","children":[]}],"git":{"createdTime":1726886780000,"updatedTime":1726886780000,"contributors":[{"name":"udo-bit","email":"enote_gxl@163.com","commits":1}]},"readingTime":{"minutes":2.33,"words":698},"filePathRelative":"demo/back-ends/Linux/Shell脚本/shell函数.md","localizedDate":"September 21, 2024","excerpt":"<p>shell脚本中的代码是按照执行的优先级的顺序从上往下抒写的，代码量越大，在脚本调试的时候就越难排错，当因执行需要调整代码执行顺序的时候就需要不断的复制粘贴，或者删除部分代码来完成，这和从写一个脚本花费的时候相比甚至需要更长的时间。</p>\\n<p>代码量大后遇到的问题：</p>\\n<ul>\\n<li>单个脚本代码量大 （300-500行）</li>\\n<li>阅读修改耗时费力</li>\\n<li>排错困难</li>\\n<li>改变执行顺序困难</li>\\n</ul>\\n<p>为了解决这些问题，我们可以把代码模块化，按需调用。</p>\\n<h2>一、函数</h2>\\n<h3>1.1、函数介绍</h3>\\n<p>shell中允许将<strong>一组命令集合</strong>或<strong>语句</strong>形成一段<strong>可用代码</strong>，这些代码块称为shell函数。给这段代码起个名字称为函数名，后续可以直接调用该段代码的功能。</p>","autoDesc":true}');export{u as comp,o as data};
