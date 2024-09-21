import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as e}from"./app-B3Z58FXn.js";const l={},i=e(`<h2 id="案例需求" tabindex="-1"><a class="header-anchor" href="#案例需求"><span>案例需求</span></a></h2><p>写一个mysql binlog备份脚本，要求每天0点0分，计算机自动备份前一天的binlog日志，打包后发送给备份服务器。</p><h2 id="脚本应用场景" tabindex="-1"><a class="header-anchor" href="#脚本应用场景"><span>脚本应用场景：</span></a></h2><p>文件备份</p><h2 id="解决问题" tabindex="-1"><a class="header-anchor" href="#解决问题"><span>解决问题</span></a></h2><p>日常文件备份</p><p>日常数据备份</p><h2 id="脚本思路" tabindex="-1"><a class="header-anchor" href="#脚本思路"><span>脚本思路</span></a></h2><p>1、确定binlog的位置及备份时间间隔 每天</p><p>当前要备份的binlog是谁</p><p>刷新binlog日志，生成新的binlog用于存储备份节点后的数据</p><p>2、打包binlog日志 以年-月-日_binlog.tar.gz格式</p><p>3、生成校验码 md5sum</p><p>4、将校验码和压缩包存入到文件夹 文件夹命名 年-月-日 再次打包</p><p>5、使用scp拷贝到备份机器</p><p>6、备份机器解压收到的目录压缩包 通过校验码 教研binlog压缩包是否完整</p><p>完整 完成备份 -----发邮件给管理员，明确备份成功</p><p>不完整 报错------发邮件给管理员，要求手动备份</p><h2 id="实现代码" tabindex="-1"><a class="header-anchor" href="#实现代码"><span>实现代码</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>#Description: </span></span>
<span class="line"><span>#Author: www.zutuanxue.com</span></span>
<span class="line"><span>#Created Time: </span></span>
<span class="line"><span>#将mysql的binlog日志备份到备份服务器</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>########variables</span></span>
<span class="line"><span>db_user=&#39;root&#39;</span></span>
<span class="line"><span>db_password=&#39;&#39;</span></span>
<span class="line"><span>log=&#39;/var/log/mysql_backup.log&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>###main</span></span>
<span class="line"><span>#获得信息</span></span>
<span class="line"><span>binlog_dir=&#39;/var/lib/mysql&#39;</span></span>
<span class="line"><span>current_binlog=\`mysql -u $db_user -e &quot;show master status&quot;|egrep &quot;binlog.[[:digit:]]*&quot;|awk &#39;{print $1}&#39;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>date &gt;&gt; $log</span></span>
<span class="line"><span>#准备备份</span></span>
<span class="line"><span>#1 刷新binlog    </span></span>
<span class="line"><span>mysql -u $db_user -e &quot;flush logs&quot;</span></span>
<span class="line"><span>#2 打包要备份的binlog</span></span>
<span class="line"><span>tar czf \`date +%F\`_binlog.tar.gz $binlog_dir/$current_binlog &amp;&gt;&gt;$log</span></span>
<span class="line"><span>#3 生成校验码</span></span>
<span class="line"><span>md5sum \`date +%F\`_binlog.tar.gz &gt; &quot;\`date +%F\`_md5sum.txt&quot;</span></span>
<span class="line"><span>#4 存入文件夹</span></span>
<span class="line"><span>[ ! -d \`date +%F\` ]&amp;&amp;mkdir \`date +%F\`</span></span>
<span class="line"><span>mv  \`date +%F\`_binlog.tar.gz \`date +%F\`</span></span>
<span class="line"><span>mv \`date +%F\`_md5sum.txt \`date +%F\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 打包目录</span></span>
<span class="line"><span>tar czf \`date +%F\`.tar.gz \`date +%F\` &amp;&gt;&gt;$log</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#5 拷贝</span></span>
<span class="line"><span>#要求提前做证书信任</span></span>
<span class="line"><span>scp \`date +%F\`.tar.gz root@192.168.11.241:/opt/backup &amp;&gt;&gt;$log</span></span>
<span class="line"><span>if [ $? -ne 0 ];then</span></span>
<span class="line"><span>    echo &quot;ERROR:scp \`date +%F\`.tar.gz fail&quot; &amp;&gt;&gt;$log</span></span>
<span class="line"><span>    exit 1</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#6 校验</span></span>
<span class="line"><span>ssh root@192.168.11.241 &quot;tar xf /opt/backup/\`date +%F\`.tar.gz -C /opt&quot;</span></span>
<span class="line"><span>#ssh root@192.168.11.241 &quot;cd /opt/backup\`date +%F\`&quot;</span></span>
<span class="line"><span>ssh root@192.168.11.241 &quot;cd /opt/\`date +%F\`;md5sum -c \`date +%F\`_md5sum.txt&quot; &amp;&gt;&gt;$log</span></span>
<span class="line"><span>if [ $? -eq 0 ];then</span></span>
<span class="line"><span>   echo &quot;success&quot; &amp;&gt;&gt;$log</span></span>
<span class="line"><span>   ssh root@192.168.11.241 &quot;rm -rf /opt/\`date +%F\`&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>   echo &quot;fail&quot; &amp;&gt;&gt;$log</span></span>
<span class="line"><span>fi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例思考" tabindex="-1"><a class="header-anchor" href="#案例思考"><span>案例思考</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>双机同步实现方式</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,22),p=[i];function t(d,c){return a(),s("div",null,p)}const m=n(l,[["render",t],["__file","shell脚本案例-mysql备份脚本.html.vue"]]),u=JSON.parse('{"path":"/demo/back-ends/Linux/Shell%E8%84%9A%E6%9C%AC/shell%E8%84%9A%E6%9C%AC%E6%A1%88%E4%BE%8B-mysql%E5%A4%87%E4%BB%BD%E8%84%9A%E6%9C%AC.html","title":"shell脚本案例-mysql备份脚本","lang":"en-US","frontmatter":{"title":"shell脚本案例-mysql备份脚本","icon":"code","category":"shell","order":30,"description":"案例需求 写一个mysql binlog备份脚本，要求每天0点0分，计算机自动备份前一天的binlog日志，打包后发送给备份服务器。 脚本应用场景： 文件备份 解决问题 日常文件备份 日常数据备份 脚本思路 1、确定binlog的位置及备份时间间隔 每天 当前要备份的binlog是谁 刷新binlog日志，生成新的binlog用于存储备份节点后的数据 ...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/demo/back-ends/Linux/Shell%E8%84%9A%E6%9C%AC/shell%E8%84%9A%E6%9C%AC%E6%A1%88%E4%BE%8B-mysql%E5%A4%87%E4%BB%BD%E8%84%9A%E6%9C%AC.html"}],["meta",{"property":"og:site_name","content":"Utopia"}],["meta",{"property":"og:title","content":"shell脚本案例-mysql备份脚本"}],["meta",{"property":"og:description","content":"案例需求 写一个mysql binlog备份脚本，要求每天0点0分，计算机自动备份前一天的binlog日志，打包后发送给备份服务器。 脚本应用场景： 文件备份 解决问题 日常文件备份 日常数据备份 脚本思路 1、确定binlog的位置及备份时间间隔 每天 当前要备份的binlog是谁 刷新binlog日志，生成新的binlog用于存储备份节点后的数据 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-21T02:46:20.000Z"}],["meta",{"property":"article:author","content":"GXL"}],["meta",{"property":"article:modified_time","content":"2024-09-21T02:46:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"shell脚本案例-mysql备份脚本\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-21T02:46:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"GXL\\",\\"url\\":\\"https://www.cnblogs.com/feel-myself\\",\\"email\\":\\"gaoxiaoliang123@126.com\\"}]}"]]},"headers":[{"level":2,"title":"案例需求","slug":"案例需求","link":"#案例需求","children":[]},{"level":2,"title":"脚本应用场景：","slug":"脚本应用场景","link":"#脚本应用场景","children":[]},{"level":2,"title":"解决问题","slug":"解决问题","link":"#解决问题","children":[]},{"level":2,"title":"脚本思路","slug":"脚本思路","link":"#脚本思路","children":[]},{"level":2,"title":"实现代码","slug":"实现代码","link":"#实现代码","children":[]},{"level":2,"title":"案例思考","slug":"案例思考","link":"#案例思考","children":[]}],"git":{"createdTime":1726886780000,"updatedTime":1726886780000,"contributors":[{"name":"udo-bit","email":"enote_gxl@163.com","commits":1}]},"readingTime":{"minutes":1.64,"words":493},"filePathRelative":"demo/back-ends/Linux/Shell脚本/shell脚本案例-mysql备份脚本.md","localizedDate":"September 21, 2024","excerpt":"<h2>案例需求</h2>\\n<p>写一个mysql binlog备份脚本，要求每天0点0分，计算机自动备份前一天的binlog日志，打包后发送给备份服务器。</p>\\n<h2>脚本应用场景：</h2>\\n<p>文件备份</p>\\n<h2>解决问题</h2>\\n<p>日常文件备份</p>\\n<p>日常数据备份</p>\\n<h2>脚本思路</h2>\\n<p>1、确定binlog的位置及备份时间间隔 每天</p>\\n<p>当前要备份的binlog是谁</p>\\n<p>刷新binlog日志，生成新的binlog用于存储备份节点后的数据</p>\\n<p>2、打包binlog日志 以年-月-日_binlog.tar.gz格式</p>","autoDesc":true}');export{m as comp,u as data};
