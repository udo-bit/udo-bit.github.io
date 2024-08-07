import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,b as e}from"./app-kGRB0WSU.js";const t={},n=e(`<h2 id="_1-配置自动引入组件和依赖插件" tabindex="-1"><a class="header-anchor" href="#_1-配置自动引入组件和依赖插件"><span>1. 配置自动引入组件和依赖插件</span></a></h2><h3 id="_1-1-安装插件" tabindex="-1"><a class="header-anchor" href="#_1-1-安装插件"><span>1.1 安装插件</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 需要安装的插件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> vite-plugin-components</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> vite-plugin-style-import</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-配置vite-config-ts" tabindex="-1"><a class="header-anchor" href="#_1-2-配置vite-config-ts"><span>1.2 配置vite.config.ts</span></a></h3><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" data-title="typescript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">...</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> defineConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(),</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        AutoImport</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">          //第三方组件库的解析器</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          imports</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;vue&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;vue-router&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;pinia&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          resolvers</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ElementPlusResolver</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()],</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">          //指定生成文件位置</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          dts</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;src/auto-imports.d.ts&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }),</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        Components</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            // dirs 指定组件所在位置，默认为 src/components</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            dirs</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;src/components&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            resolvers</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ElementPlusResolver</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            dts</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;src/components.d.ts&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        })</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-参考资料" tabindex="-1"><a class="header-anchor" href="#_1-3-参考资料"><span>1.3 参考资料：</span></a></h3><ul><li>参考：<a href="https://blog.csdn.net/weixin_55776562/article/details/136236256" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/weixin_55776562/article/details/136236256</a></li><li>参考：<a href="https://blog.csdn.net/shanghai597/article/details/130885636" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/shanghai597/article/details/130885636</a></li></ul>`,7),l=[n];function h(p,r){return a(),s("div",null,l)}const c=i(t,[["render",h],["__file","vite_vue_ts入门.html.vue"]]),o=JSON.parse('{"path":"/demo/%E5%89%8D%E7%AB%AF/vite_vue_ts%E5%85%A5%E9%97%A8.html","title":"vite+vue+ts入门","lang":"en-US","frontmatter":{"title":"vite+vue+ts入门","icon":"object-group","order":1,"category":["vue"],"tag":["Layout"],"description":"1. 配置自动引入组件和依赖插件 1.1 安装插件 1.2 配置vite.config.ts 1.3 参考资料： 参考：https://blog.csdn.net/weixin_55776562/article/details/136236256 参考：https://blog.csdn.net/shanghai597/article/details/...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/demo/%E5%89%8D%E7%AB%AF/vite_vue_ts%E5%85%A5%E9%97%A8.html"}],["meta",{"property":"og:site_name","content":"Utopia"}],["meta",{"property":"og:title","content":"vite+vue+ts入门"}],["meta",{"property":"og:description","content":"1. 配置自动引入组件和依赖插件 1.1 安装插件 1.2 配置vite.config.ts 1.3 参考资料： 参考：https://blog.csdn.net/weixin_55776562/article/details/136236256 参考：https://blog.csdn.net/shanghai597/article/details/..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-07T13:56:07.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"Layout"}],["meta",{"property":"article:modified_time","content":"2024-08-07T13:56:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vite+vue+ts入门\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-07T13:56:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"1. 配置自动引入组件和依赖插件","slug":"_1-配置自动引入组件和依赖插件","link":"#_1-配置自动引入组件和依赖插件","children":[{"level":3,"title":"1.1 安装插件","slug":"_1-1-安装插件","link":"#_1-1-安装插件","children":[]},{"level":3,"title":"1.2 配置vite.config.ts","slug":"_1-2-配置vite-config-ts","link":"#_1-2-配置vite-config-ts","children":[]},{"level":3,"title":"1.3 参考资料：","slug":"_1-3-参考资料","link":"#_1-3-参考资料","children":[]}]}],"git":{"createdTime":1723038967000,"updatedTime":1723038967000,"contributors":[{"name":"udo-bit","email":"enote_gxl@163.com","commits":1}]},"readingTime":{"minutes":0.44,"words":133},"filePathRelative":"demo/前端/vite+vue+ts入门.md","localizedDate":"August 7, 2024","excerpt":"<h2>1. 配置自动引入组件和依赖插件</h2>\\n<h3>1.1 安装插件</h3>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># 需要安装的插件</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">npm</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> install</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -D</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> vite-plugin-components</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> vite-plugin-style-import</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{c as comp,o as data};
