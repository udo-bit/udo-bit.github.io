import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as e,d as a}from"./app-B2K6jtY8.js";const n="/assets/ssh_server-DFr2g_V3.png",t="/assets/gitee-B7mZ9noQ.png",l="/assets/git%E4%BB%A4%E7%89%8C-DcekwE2k.png",h="/assets/maven%E9%A1%B9%E7%9B%AE-Bfani7Js.png",r="/assets/c397eede-DSRk2FTm.png",k="/assets/bf2beb81-QHfXFRjK.png",p="/assets/4b3345c3-wpkcdu0K.png",d="/assets/6088bcbf-DzS301N1.png",o="/assets/71fdac31-DTZzf5ix.png",c="/assets/c19abd74-BKBG3qIK.png",g="/assets/f12d4390-39Alv5PK.png",m={},A=a(`<h2 id="docker部署jenkins" tabindex="-1"><a class="header-anchor" href="#docker部署jenkins"><span>docker部署jenkins</span></a></h2><h3 id="_1-下载jenkins镜像" tabindex="-1"><a class="header-anchor" href="#_1-下载jenkins镜像"><span>1. 下载jenkins镜像</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pull</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> jenkins/jenkins</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-启动jenkins容器" tabindex="-1"><a class="header-anchor" href="#_2-启动jenkins容器"><span>2. 启动jenkins容器</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 9050:8080</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-uroot </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-p </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">50000:50000</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-v </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">~/jenkins_home:/var/jenkins_home</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-v </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/etc/localtime:/etc/localtime</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">--name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> jenkins</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">jenkins/jenkins</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>-d</td><td>后台运行</td></tr><tr><td>-uroot</td><td>使用root身份进入容器</td></tr><tr><td>-p 9050:8080</td><td>将容器内的8080端口映射到宿主机的9050端口，访问jenkins的端口</td></tr><tr><td>-p 50000:50000</td><td>将容器内的50000端口映射到宿主机的50000端口</td></tr><tr><td>-v ~/jenkins_home:/var/jenkins_home</td><td>将容器内的/var/jenkins_home目录映射到宿主机的 ~/jenkins_home目录</td></tr><tr><td>-v /etc/localtime:/etc/localtime</td><td>将容器内的时区设置为宿主机的时区</td></tr><tr><td>--name jenkins</td><td>容器名称</td></tr><tr><td>jenkins/jenkins</td><td>镜像名称</td></tr></tbody></table><h3 id="_3-查看容器日期-获取启动密码" tabindex="-1"><a class="header-anchor" href="#_3-查看容器日期-获取启动密码"><span>3. 查看容器日期，获取启动密码</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> logs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> jenkins</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_4-使用浏览器访问jenkins-http-serverip-port-输入启动密码" tabindex="-1"><a class="header-anchor" href="#_4-使用浏览器访问jenkins-http-serverip-port-输入启动密码"><span>4. 使用浏览器访问jenkins http://serverip:port,输入启动密码</span></a></h3><h3 id="_5-安装推荐插件" tabindex="-1"><a class="header-anchor" href="#_5-安装推荐插件"><span>5. 安装推荐插件</span></a></h3><p>因为网络原因，需要将插件源设置为国内的，这样才可以安装插件。进入宿主机目录 ~/jenkins_home/，编辑文件 hudson.model.UpdateCenter.xml</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/jenkins_home/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> hudson.model.UpdateCenter.xml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note"><p class="hint-container-title">Note</p><ol><li>将 url 内容修改为 https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json（清华大学官方镜像）</li><li>重新启动jenkins容器</li></ol><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> jenkins</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></div><h3 id="_6-创建管理员用户并配置实例" tabindex="-1"><a class="header-anchor" href="#_6-创建管理员用户并配置实例"><span>6. 创建管理员用户并配置实例</span></a></h3><h2 id="jenkins部署spring-boot项目" tabindex="-1"><a class="header-anchor" href="#jenkins部署spring-boot项目"><span>jenkins部署spring boot项目</span></a></h2><h3 id="_1-安装插件" tabindex="-1"><a class="header-anchor" href="#_1-安装插件"><span>1. 安装插件</span></a></h3><p>需要安装三个插件：</p><ul><li>Maven Integration: Maven集成工具</li><li>Public Over SSH: 整合工具，通过该工具将jenkins打包好的jar包上传到服务器</li><li>Gitee: 协助使用gitee进行代码拉取</li></ul><h3 id="_2-准备项目代码" tabindex="-1"><a class="header-anchor" href="#_2-准备项目代码"><span>2. 准备项目代码</span></a></h3><p>将项目代码上传到gitee或者github</p><h3 id="_3-准备远程服务器" tabindex="-1"><a class="header-anchor" href="#_3-准备远程服务器"><span>3. 准备远程服务器</span></a></h3><p>可以使用云服务器或者本地服务器，需要安装java环境</p><h3 id="_4-配置java部署环境" tabindex="-1"><a class="header-anchor" href="#_4-配置java部署环境"><span>4. 配置Java部署环境</span></a></h3><h4 id="_4-1-jenkins全局工具配置" tabindex="-1"><a class="header-anchor" href="#_4-1-jenkins全局工具配置"><span>4.1 jenkins全局工具配置</span></a></h4><ul><li>配置JDK，jenkins容器中已经安装了JDK，只需要安装即可，配置路径为：/opt/java/openjdk</li><li>配置Maven，勾选自动安装，不需要手动下载</li><li>配置Git，jenkins容器中已经安装并配置好了git，默认即可</li></ul><h4 id="_4-2-远程凭证配置" tabindex="-1"><a class="header-anchor" href="#_4-2-远程凭证配置"><span>4.2 远程凭证配置</span></a></h4><p>配置远程服务器的相关信息，包括服务器地址、用户名、密码等（确保远程服务器22端口已经开放） <img src="`+n+'" alt="SSH Server" loading="lazy"></p><h4 id="_4-3-配置gitee信息及凭证" tabindex="-1"><a class="header-anchor" href="#_4-3-配置gitee信息及凭证"><span>4.3 配置Gitee信息及凭证</span></a></h4><p>填写git仓库地址和域名<br><img src="'+t+'" alt="gitee.png" loading="lazy"> gitee令牌可以通过https://gitee.com/profile/personal_access_tokens获取<br><img src="'+l+'" alt="git令牌" loading="lazy"></p><h3 id="_5-构建maven项目" tabindex="-1"><a class="header-anchor" href="#_5-构建maven项目"><span>5. 构建maven项目</span></a></h3><h4 id="_5-1-创建项目" tabindex="-1"><a class="header-anchor" href="#_5-1-创建项目"><span>5.1 创建项目</span></a></h4><p>选择&quot;构建一个maven项目&quot;<br><img src="'+h+'" alt="img.png" loading="lazy"> 补充git仓库，指定分支<br><img src="'+r+'" alt="git" loading="lazy"> 配置凭证，类型选择Username with password并补充git仓库用户名和密码。<br><img src="'+k+'" alt="配置凭证" loading="lazy"> 设置打印时间戳<br><img src="'+p+'" alt="打印时间戳" loading="lazy"> 设置构建命令，jenkins把源码从git拉下来以后，进行打包，Goals and options输入 <strong>clean package</strong> ;<br><img src="'+d+'" alt="asset/6088bcbf.png" loading="lazy"> SSH Publisher配置,并启动ssh操作容器<br><img src="'+o+'" alt="" loading="lazy"><img src="'+c+`" alt="" loading="lazy"></p><h4 id="_5-2-远程部署脚本" tabindex="-1"><a class="header-anchor" href="#_5-2-远程部署脚本"><span>5.2 远程部署脚本</span></a></h4><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> JAVA_HOME</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">opt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">java</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> PATH</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$JAVA_HOME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">bin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$PATH</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">JAR_PATH</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/root/data</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">JARFILE</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">jenkins_demo-0.0.1-SNAPSHOT.jar</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ps</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -ef</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $JARFILE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> grep</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">awk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;{print $2}&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">xargs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kill</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -9</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">java</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -jar</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $JAR_PATH</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$JARFILE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">out.log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 2&gt;&amp;1 &amp;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">$?</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ];</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        sleep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 30</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        tail</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 50</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> out.log</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">fi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过控制台输入可以查看部署日志<br><img src="`+g+'" alt="" loading="lazy"></p><h4 id="_5-3-访问测试" tabindex="-1"><a class="header-anchor" href="#_5-3-访问测试"><span>5.3 访问测试</span></a></h4><p>在浏览器输入http://serverip:port/，查看是否部署成功</p><h3 id="附-参考资料" tabindex="-1"><a class="header-anchor" href="#附-参考资料"><span>附：参考资料</span></a></h3><p>原文链接：https://blog.csdn.net/qq_31745863/article/details/133632808</p>',39),v=[A];function b(y,u){return e(),i("div",null,v)}const j=s(m,[["render",b],["__file","jenkins部署基础.html.vue"]]),B=JSON.parse('{"path":"/others/jenkins%E9%83%A8%E7%BD%B2%E5%9F%BA%E7%A1%80.html","title":"jenkins部署基础","lang":"en-US","frontmatter":{"title":"jenkins部署基础","icon":"jenkins","category":"jenkins","description":"docker部署jenkins 1. 下载jenkins镜像 2. 启动jenkins容器 3. 查看容器日期，获取启动密码 4. 使用浏览器访问jenkins http://serverip:port,输入启动密码 5. 安装推荐插件 因为网络原因，需要将插件源设置为国内的，这样才可以安装插件。进入宿主机目录 ~/jenkins_home/，编辑文件...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/others/jenkins%E9%83%A8%E7%BD%B2%E5%9F%BA%E7%A1%80.html"}],["meta",{"property":"og:site_name","content":"Utopia"}],["meta",{"property":"og:title","content":"jenkins部署基础"}],["meta",{"property":"og:description","content":"docker部署jenkins 1. 下载jenkins镜像 2. 启动jenkins容器 3. 查看容器日期，获取启动密码 4. 使用浏览器访问jenkins http://serverip:port,输入启动密码 5. 安装推荐插件 因为网络原因，需要将插件源设置为国内的，这样才可以安装插件。进入宿主机目录 ~/jenkins_home/，编辑文件..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-20T15:00:03.000Z"}],["meta",{"property":"article:author","content":"GXL"}],["meta",{"property":"article:modified_time","content":"2024-09-20T15:00:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"jenkins部署基础\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-20T15:00:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"GXL\\",\\"url\\":\\"https://www.cnblogs.com/feel-myself\\",\\"email\\":\\"gaoxiaoliang123@126.com\\"}]}"]]},"headers":[{"level":2,"title":"docker部署jenkins","slug":"docker部署jenkins","link":"#docker部署jenkins","children":[{"level":3,"title":"1. 下载jenkins镜像","slug":"_1-下载jenkins镜像","link":"#_1-下载jenkins镜像","children":[]},{"level":3,"title":"2. 启动jenkins容器","slug":"_2-启动jenkins容器","link":"#_2-启动jenkins容器","children":[]},{"level":3,"title":"3. 查看容器日期，获取启动密码","slug":"_3-查看容器日期-获取启动密码","link":"#_3-查看容器日期-获取启动密码","children":[]},{"level":3,"title":"4. 使用浏览器访问jenkins http://serverip:port,输入启动密码","slug":"_4-使用浏览器访问jenkins-http-serverip-port-输入启动密码","link":"#_4-使用浏览器访问jenkins-http-serverip-port-输入启动密码","children":[]},{"level":3,"title":"5. 安装推荐插件","slug":"_5-安装推荐插件","link":"#_5-安装推荐插件","children":[]},{"level":3,"title":"6. 创建管理员用户并配置实例","slug":"_6-创建管理员用户并配置实例","link":"#_6-创建管理员用户并配置实例","children":[]}]},{"level":2,"title":"jenkins部署spring boot项目","slug":"jenkins部署spring-boot项目","link":"#jenkins部署spring-boot项目","children":[{"level":3,"title":"1. 安装插件","slug":"_1-安装插件","link":"#_1-安装插件","children":[]},{"level":3,"title":"2. 准备项目代码","slug":"_2-准备项目代码","link":"#_2-准备项目代码","children":[]},{"level":3,"title":"3. 准备远程服务器","slug":"_3-准备远程服务器","link":"#_3-准备远程服务器","children":[]},{"level":3,"title":"4. 配置Java部署环境","slug":"_4-配置java部署环境","link":"#_4-配置java部署环境","children":[]},{"level":3,"title":"5. 构建maven项目","slug":"_5-构建maven项目","link":"#_5-构建maven项目","children":[]},{"level":3,"title":"附：参考资料","slug":"附-参考资料","link":"#附-参考资料","children":[]}]}],"git":{"createdTime":1726844403000,"updatedTime":1726844403000,"contributors":[{"name":"udo-bit","email":"enote_gxl@163.com","commits":1}]},"readingTime":{"minutes":2.71,"words":813},"filePathRelative":"others/jenkins部署基础.md","localizedDate":"September 20, 2024","excerpt":"<h2>docker部署jenkins</h2>\\n<h3>1. 下载jenkins镜像</h3>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">docker</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> pull</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> jenkins/jenkins</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{j as comp,B as data};
