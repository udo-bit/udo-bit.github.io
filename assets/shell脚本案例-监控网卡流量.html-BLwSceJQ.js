import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as e}from"./app-B3Z58FXn.js";const i={},l=e(`<h1 id="job-网卡流量监控" tabindex="-1"><a class="header-anchor" href="#job-网卡流量监控"><span>job-网卡流量监控</span></a></h1><h2 id="案例需求" tabindex="-1"><a class="header-anchor" href="#案例需求"><span>案例需求</span></a></h2><p>网卡发送和就收数据量监控，按秒统计。</p><p><strong>思考:</strong> 如何获取某块网卡上一秒的流入、流出数据流量 ifconfig中可以获得，你知道吗？</p><figure><img src="https://www.zutuanxue.com:8000/static/media/images/2020/10/6/1601963911887.png" alt="网卡流量.png" tabindex="0" loading="lazy"><figcaption>网卡流量.png</figcaption></figure><h2 id="脚本应用场景" tabindex="-1"><a class="header-anchor" href="#脚本应用场景"><span>脚本应用场景：</span></a></h2><p>动态监控网卡的流量</p><h2 id="解决问题" tabindex="-1"><a class="header-anchor" href="#解决问题"><span>解决问题</span></a></h2><p>实时掌握网卡的流量，掌握带宽使用情况</p><h2 id="脚本思路" tabindex="-1"><a class="header-anchor" href="#脚本思路"><span>脚本思路</span></a></h2><p>1、获得网卡当前流入流出总量</p><p>2、休息一秒</p><p>3、获得网卡当前流入流出总量</p><p>4、运算得出上一秒网卡流量</p><p>5、输出结果</p><h2 id="实现代码" tabindex="-1"><a class="header-anchor" href="#实现代码"><span>实现代码</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#Release: </span></span>
<span class="line"><span>#Description: 网卡流量监控</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#脚本用法</span></span>
<span class="line"><span>#判断用户是否传参</span></span>
<span class="line"><span>if [ -z &quot;$1&quot;] || [ &quot;$1&quot; == &quot;--help&quot; ];then</span></span>
<span class="line"><span>  cat &lt;&lt; EOF</span></span>
<span class="line"><span>$0 网卡名称</span></span>
<span class="line"><span>--help 打印帮助菜单</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#如果用户没有传参，则退出脚本</span></span>
<span class="line"><span>[ $# -lt 1 ]&amp;&amp;exit 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#第一次取值</span></span>
<span class="line"><span>#1、获得当前网卡流量 初始化值</span></span>
<span class="line"><span>NIC_RX=\`ifconfig $1|grep &quot;RX packets&quot;|tr -s &quot; &quot;|cut -d &quot; &quot; -f6\`</span></span>
<span class="line"><span>NIC_TX=\`ifconfig $1|grep &quot;TX packets&quot;|tr -s &quot; &quot;|cut -d &quot; &quot; -f6\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#休息一秒开始循环</span></span>
<span class="line"><span>sleep 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#循环开始监控网卡流量 监控频率 1s</span></span>
<span class="line"><span>while :</span></span>
<span class="line"><span>  do</span></span>
<span class="line"><span>     #2、监控当前网络的流量,第二次取值</span></span>
<span class="line"><span>     NIC_RX_1=\`ifconfig $1|grep &quot;RX packets&quot;|tr -s &quot; &quot;|cut -d &quot; &quot; -f6\`</span></span>
<span class="line"><span>     NIC_TX_1=\`ifconfig $1|grep &quot;TX packets&quot;|tr -s &quot; &quot;|cut -d &quot; &quot; -f6\`  </span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>     #3、制作输出</span></span>
<span class="line"><span>     #3.1、清屏输出下文</span></span>
<span class="line"><span>     clear</span></span>
<span class="line"><span>     echo -e &quot;\\t$1 网卡流量监控&quot;</span></span>
<span class="line"><span>     echo &quot;----------------------------------------&quot;</span></span>
<span class="line"><span>     echo -e &quot;网卡: $1\\n&quot;</span></span>
<span class="line"><span>     #3.2、运算得出结论</span></span>
<span class="line"><span>      echo -e &quot;发送:\\t$((NIC_TX_1-NIC_TX))B/s\\t接收:\\t$((NIC_RX_1-NIC_RX))B/s&quot;</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>     #重新赋值网卡初始化流入流出变量</span></span>
<span class="line"><span>     NIC_RX=$NIC_RX_1</span></span>
<span class="line"><span>     NIC_TX=$NIC_TX_1</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>     #休眠1秒,进入下一次循环</span></span>
<span class="line"><span>     sleep 1</span></span>
<span class="line"><span>done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例思考" tabindex="-1"><a class="header-anchor" href="#案例思考"><span>案例思考</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>如何采用图表的方式输出网卡信息</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,19),p=[l];function t(c,d){return a(),s("div",null,p)}const u=n(i,[["render",t],["__file","shell脚本案例-监控网卡流量.html.vue"]]),m=JSON.parse('{"path":"/demo/back-ends/Linux/Shell%E8%84%9A%E6%9C%AC/shell%E8%84%9A%E6%9C%AC%E6%A1%88%E4%BE%8B-%E7%9B%91%E6%8E%A7%E7%BD%91%E5%8D%A1%E6%B5%81%E9%87%8F.html","title":"job-网卡流量监控","lang":"en-US","frontmatter":{"title":"job-网卡流量监控","icon":"code","category":"shell","order":28,"description":"job-网卡流量监控 案例需求 网卡发送和就收数据量监控，按秒统计。 思考: 如何获取某块网卡上一秒的流入、流出数据流量 ifconfig中可以获得，你知道吗？ 网卡流量.png网卡流量.png 脚本应用场景： 动态监控网卡的流量 解决问题 实时掌握网卡的流量，掌握带宽使用情况 脚本思路 1、获得网卡当前流入流出总量 2、休息一秒 3、获得网卡当前流入...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/demo/back-ends/Linux/Shell%E8%84%9A%E6%9C%AC/shell%E8%84%9A%E6%9C%AC%E6%A1%88%E4%BE%8B-%E7%9B%91%E6%8E%A7%E7%BD%91%E5%8D%A1%E6%B5%81%E9%87%8F.html"}],["meta",{"property":"og:site_name","content":"Utopia"}],["meta",{"property":"og:title","content":"job-网卡流量监控"}],["meta",{"property":"og:description","content":"job-网卡流量监控 案例需求 网卡发送和就收数据量监控，按秒统计。 思考: 如何获取某块网卡上一秒的流入、流出数据流量 ifconfig中可以获得，你知道吗？ 网卡流量.png网卡流量.png 脚本应用场景： 动态监控网卡的流量 解决问题 实时掌握网卡的流量，掌握带宽使用情况 脚本思路 1、获得网卡当前流入流出总量 2、休息一秒 3、获得网卡当前流入..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.zutuanxue.com:8000/static/media/images/2020/10/6/1601963911887.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-21T02:46:20.000Z"}],["meta",{"property":"article:author","content":"GXL"}],["meta",{"property":"article:modified_time","content":"2024-09-21T02:46:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"job-网卡流量监控\\",\\"image\\":[\\"https://www.zutuanxue.com:8000/static/media/images/2020/10/6/1601963911887.png\\"],\\"dateModified\\":\\"2024-09-21T02:46:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"GXL\\",\\"url\\":\\"https://www.cnblogs.com/feel-myself\\",\\"email\\":\\"gaoxiaoliang123@126.com\\"}]}"]]},"headers":[{"level":2,"title":"案例需求","slug":"案例需求","link":"#案例需求","children":[]},{"level":2,"title":"脚本应用场景：","slug":"脚本应用场景","link":"#脚本应用场景","children":[]},{"level":2,"title":"解决问题","slug":"解决问题","link":"#解决问题","children":[]},{"level":2,"title":"脚本思路","slug":"脚本思路","link":"#脚本思路","children":[]},{"level":2,"title":"实现代码","slug":"实现代码","link":"#实现代码","children":[]},{"level":2,"title":"案例思考","slug":"案例思考","link":"#案例思考","children":[]}],"git":{"createdTime":1726886780000,"updatedTime":1726886780000,"contributors":[{"name":"udo-bit","email":"enote_gxl@163.com","commits":1}]},"readingTime":{"minutes":1.48,"words":445},"filePathRelative":"demo/back-ends/Linux/Shell脚本/shell脚本案例-监控网卡流量.md","localizedDate":"September 21, 2024","excerpt":"\\n<h2>案例需求</h2>\\n<p>网卡发送和就收数据量监控，按秒统计。</p>\\n<p><strong>思考:</strong> 如何获取某块网卡上一秒的流入、流出数据流量\\nifconfig中可以获得，你知道吗？</p>\\n<figure><img src=\\"https://www.zutuanxue.com:8000/static/media/images/2020/10/6/1601963911887.png\\" alt=\\"网卡流量.png\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>网卡流量.png</figcaption></figure>\\n<h2>脚本应用场景：</h2>","autoDesc":true}');export{u as comp,m as data};
