import{_ as n,c as e,o as i,a8 as a}from"./chunks/framework.Bou8hzLb.js";const f=JSON.parse('{"title":"uniapp 入门实战 02：编译时动态替换配置方案","description":"","frontmatter":{"title":"uniapp 入门实战 02：编译时动态替换配置方案","author":"Potter","date":"2022-05-12 18:42","tags":["UniApp"],"categories":["uniapp 入门实战"]},"headers":[],"relativePath":"article/04-practic/Uniapp/UniApp02.md","filePath":"article/04-practic/Uniapp/UniApp02.md","lastUpdated":1721006686000}'),t={name:"article/04-practic/Uniapp/UniApp02.md"},s=a(`<h1 id="uniapp-入门实战-02-编译时动态替换配置方案" tabindex="-1">uniapp 入门实战 02：编译时动态替换配置方案 <a class="header-anchor" href="#uniapp-入门实战-02-编译时动态替换配置方案" aria-label="Permalink to &quot;uniapp 入门实战 02：编译时动态替换配置方案&quot;">​</a></h1><hr><h2 id="通过vue-config-实现" tabindex="-1">通过vue.config 实现 <a class="header-anchor" href="#通过vue-config-实现" aria-label="Permalink to &quot;通过vue.config 实现&quot;">​</a></h2><p>由于我们公司业务需求，同一份uniapp项目代码需搞出两个不同名称的小程序，所以每次切换项目配置时，需要改好几处配置信息。根据以前的经验，就是通过webpack编译时，动态选择不同的配置。看到工程项目结构后我傻眼了，编译相关的uniapp 框架完全封装集成完，让人无需关系。可问题是我现在需要啊~... 😭</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20210513221230.png" alt="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20210513221230.png"></p><p>先google一下，都找不到uniapp 编译相关资料。只好翻uniapp 官网，看到以下信息，希望就在眼前。</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20210513222337.png" alt="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20210513222337.png"></p><p>所以解决方案就来了 😜</p><ul><li><p>首先：项目根目录创建vue.config.js</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20210513222808.png" alt="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20210513222808.png"></p></li><li><p>其次：vue.config.js（替换微信小程序appid）</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">* 创建日期: 2021-05-13</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">* 文件名称：vue.config.js</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">* 创建作者：Potter</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">* 开发版本：1.0.0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">* 相关说明：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//----------------------------------------------------------------------</span></span></code></pre></div></li></ul><hr><h2 id="概要内容" tabindex="-1">概要内容 <a class="header-anchor" href="#概要内容" aria-label="Permalink to &quot;概要内容&quot;">​</a></h2><pre><code>console.log(&quot;------------------------------------------&quot;);
console.log(&quot;Compile [Auto replace config]: Go...&quot;);
const path = require(&#39;path&#39;)
const fs = require(&#39;fs&#39;);
//-------------------------------------------------------------------------
/**
 * 读取launch_config.json 配置
 */
let serverConfig = undefined;
try {
 const data = fs.readFileSync(path.join(__dirname, &#39;./static/launch_config.json&#39;), &#39;utf8&#39;);
 let launchConfig = JSON.parse(data);
 serverConfig = launchConfig[&quot;server_configs&quot;][launchConfig[&quot;server&quot;]];
 console.log(&quot;Compile [Auto replace config] : current choice configInfo=&quot; + JSON.stringify(serverConfig));
} catch (e) {
 console.error(&quot;Compile [Auto replace config] : read lanch_config error ! e=&quot; + e);
}
//-------------------------------------------------------------------------

/**
 * 读取manifest.json, 采用当前渲染server_config 替换掉manifest.json 中的对应字段
 */
try {
 const manifestPath = path.join(__dirname, &#39;./manifest.json&#39;);
 const data = fs.readFileSync(manifestPath, &#39;utf8&#39;);
 let manifest = JSON.parse(data);

 console.log(&quot;Compile [Auto replace config] : manifest &quot; + \`appid[\${manifest[&quot;mp-weixin&quot;][&#39;appid&#39;]}-&gt;\${serverConfig[&#39;appid&#39;]}]\`);
 manifest[&quot;mp-weixin&quot;][&#39;appid&#39;] = serverConfig[&#39;appid&#39;];

 fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 4));
} catch (e) {
 console.error(&quot;Compile [Auto replace config] : read manifest error ! e=&quot; + e);
}
//-------------------------------------------------------------------------
console.log(&quot;Compile [Auto replace config]: Complete !&quot;);
console.log(&quot;------------------------------------------&quot;);
\`\`\`
</code></pre><ul><li><p>最后：运行即可，可以看到以下appid 已替换</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20210513223413.png" alt="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20210513223413.png"></p></li></ul><hr>`,14),p=[s];function o(l,r,c,g,h,d){return i(),e("div",null,p)}const m=n(t,[["render",o]]);export{f as __pageData,m as default};
