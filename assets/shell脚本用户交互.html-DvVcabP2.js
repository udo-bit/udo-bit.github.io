import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as e,d as a}from"./app-B3Z58FXn.js";const i={},l=a(`<p>学会了输出，那么输出什么呢？当然是人类让计算机运算的数据，那么运算的数据来自哪里？</p><p>可以肯定是你或其他人给的，那如何给程序数据呢？</p><p><strong>那么我们就得看看如何实现人机交互了。</strong></p><ul><li>比如计算机程序</li><li>比如信息录入系统</li></ul><h2 id="一、read命令" tabindex="-1"><a class="header-anchor" href="#一、read命令"><span>一、read命令</span></a></h2><p>功能：默认接受键盘的输入，回车符代表输入结束 应用场景：人机交互 命令选项</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>-p打印信息</span></span>
<span class="line"><span>-t限定时间</span></span>
<span class="line"><span>-s不回显</span></span>
<span class="line"><span>-n输入字符个数</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、交互输入案例" tabindex="-1"><a class="header-anchor" href="#二、交互输入案例"><span>二、交互输入案例</span></a></h2><p><strong>案例需求：</strong> 写一个系统用户交互登录界面脚本，仿linux文本界面登录 <strong>案例要点：</strong> 了解linux文本界面登陆所需要的输出信息及界面布局</p><figure><img src="https://www.zutuanxue.com:8000/static/media/images/2020/9/24/1600910891275.gif" alt="login.gif" tabindex="0" loading="lazy"><figcaption>login.gif</figcaption></figure><p><strong>job实现步骤：</strong> 1、根据linux文本界面登陆窗口输出信息，打印登陆提示信息 2、交互输入登陆账号 3、交互输入登陆密码</p><p><strong>代码实现：</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#job实现代码   02_login.sh</span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description: 仿真登陆</span></span>
<span class="line"><span></span></span>
<span class="line"><span>IP=\`ifconfig ens33|egrep -w &quot;inet&quot;|awk &#39;{print $2}&#39;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#1、清屏</span></span>
<span class="line"><span>clear</span></span>
<span class="line"><span>#2、输出提示信息</span></span>
<span class="line"><span>echo &quot;CentOS Linux 8 (Core)&quot;</span></span>
<span class="line"><span>echo -e &quot;Kernel \`uname -r\` on an \`uname -m\`\\n&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo -e &quot;Web console: https://localhost:9090/ or https://$IP:9090/ \\n&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#3、交互输入登陆名</span></span>
<span class="line"><span>echo -n &quot;$HOSTNAME login: &quot;</span></span>
<span class="line"><span>read account</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#4、交互输入密码</span></span>
<span class="line"><span>read -s -t30 -p &quot;Password: &quot; pw</span></span>
<span class="line"><span>echo</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实现效果：</strong></p><figure><img src="https://www.zutuanxue.com:8000/static/media/images/2020/9/24/1600912191604.gif" alt="login2.gif" tabindex="0" loading="lazy"><figcaption>login2.gif</figcaption></figure>`,15),t=[l];function p(r,c){return e(),s("div",null,t)}const m=n(i,[["render",p],["__file","shell脚本用户交互.html.vue"]]),u=JSON.parse('{"path":"/demo/back-ends/Linux/Shell%E8%84%9A%E6%9C%AC/shell%E8%84%9A%E6%9C%AC%E7%94%A8%E6%88%B7%E4%BA%A4%E4%BA%92.html","title":"shell脚本用户交互","lang":"en-US","frontmatter":{"title":"shell脚本用户交互","icon":"code","category":"shell","order":7,"description":"学会了输出，那么输出什么呢？当然是人类让计算机运算的数据，那么运算的数据来自哪里？ 可以肯定是你或其他人给的，那如何给程序数据呢？ 那么我们就得看看如何实现人机交互了。 比如计算机程序 比如信息录入系统 一、read命令 功能：默认接受键盘的输入，回车符代表输入结束 应用场景：人机交互 命令选项 二、交互输入案例 案例需求： 写一个系统用户交互登录界面...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/demo/back-ends/Linux/Shell%E8%84%9A%E6%9C%AC/shell%E8%84%9A%E6%9C%AC%E7%94%A8%E6%88%B7%E4%BA%A4%E4%BA%92.html"}],["meta",{"property":"og:site_name","content":"Utopia"}],["meta",{"property":"og:title","content":"shell脚本用户交互"}],["meta",{"property":"og:description","content":"学会了输出，那么输出什么呢？当然是人类让计算机运算的数据，那么运算的数据来自哪里？ 可以肯定是你或其他人给的，那如何给程序数据呢？ 那么我们就得看看如何实现人机交互了。 比如计算机程序 比如信息录入系统 一、read命令 功能：默认接受键盘的输入，回车符代表输入结束 应用场景：人机交互 命令选项 二、交互输入案例 案例需求： 写一个系统用户交互登录界面..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.zutuanxue.com:8000/static/media/images/2020/9/24/1600910891275.gif"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-21T02:46:20.000Z"}],["meta",{"property":"article:author","content":"GXL"}],["meta",{"property":"article:modified_time","content":"2024-09-21T02:46:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"shell脚本用户交互\\",\\"image\\":[\\"https://www.zutuanxue.com:8000/static/media/images/2020/9/24/1600910891275.gif\\",\\"https://www.zutuanxue.com:8000/static/media/images/2020/9/24/1600912191604.gif\\"],\\"dateModified\\":\\"2024-09-21T02:46:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"GXL\\",\\"url\\":\\"https://www.cnblogs.com/feel-myself\\",\\"email\\":\\"gaoxiaoliang123@126.com\\"}]}"]]},"headers":[{"level":2,"title":"一、read命令","slug":"一、read命令","link":"#一、read命令","children":[]},{"level":2,"title":"二、交互输入案例","slug":"二、交互输入案例","link":"#二、交互输入案例","children":[]}],"git":{"createdTime":1726886780000,"updatedTime":1726886780000,"contributors":[{"name":"udo-bit","email":"enote_gxl@163.com","commits":1}]},"readingTime":{"minutes":1.25,"words":375},"filePathRelative":"demo/back-ends/Linux/Shell脚本/shell脚本用户交互.md","localizedDate":"September 21, 2024","excerpt":"<p>学会了输出，那么输出什么呢？当然是人类让计算机运算的数据，那么运算的数据来自哪里？</p>\\n<p>可以肯定是你或其他人给的，那如何给程序数据呢？</p>\\n<p><strong>那么我们就得看看如何实现人机交互了。</strong></p>\\n<ul>\\n<li>比如计算机程序</li>\\n<li>比如信息录入系统</li>\\n</ul>\\n<h2>一、read命令</h2>\\n<p>功能：默认接受键盘的输入，回车符代表输入结束\\n应用场景：人机交互\\n命令选项</p>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>-p打印信息</span></span>\\n<span class=\\"line\\"><span>-t限定时间</span></span>\\n<span class=\\"line\\"><span>-s不回显</span></span>\\n<span class=\\"line\\"><span>-n输入字符个数</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{m as comp,u as data};
