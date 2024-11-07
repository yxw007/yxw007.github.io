import{_ as n,c as t,a2 as s,o as p}from"./chunks/framework.Dty_nV1T.js";const u=JSON.parse('{"title":"uni-app 如何引入Iconfont阿里巴巴矢量图标库","description":"","frontmatter":{"title":"uni-app 如何引入Iconfont阿里巴巴矢量图标库","author":"Potter","date":"2022-05-12 18:42","tags":["UniApp"],"categories":["前端"]},"headers":[],"relativePath":"article/04-practic/Uniapp/UniApp01.md","filePath":"article/04-practic/Uniapp/UniApp01.md","lastUpdated":1730988105000}'),o={name:"article/04-practic/Uniapp/UniApp01.md"};function i(e,a,c,l,r,f){return p(),t("div",null,a[0]||(a[0]=[s(`<h1 id="uni-app-如何引入iconfont阿里巴巴矢量图标库" tabindex="-1">uni-app 如何引入Iconfont阿里巴巴矢量图标库 <a class="header-anchor" href="#uni-app-如何引入iconfont阿里巴巴矢量图标库" aria-label="Permalink to &quot;uni-app 如何引入Iconfont阿里巴巴矢量图标库&quot;">​</a></h1><h2 id="步骤如下" tabindex="-1">步骤如下 <a class="header-anchor" href="#步骤如下" aria-label="Permalink to &quot;步骤如下&quot;">​</a></h2><ol><li><p>下载图标项目, 解压后效果如下 <img src="https://cdn.jsdelivr.net/gh/aa4790139/BlogPicBed@master/img/20201113164039.png" alt="&quot;img&quot;"></p></li><li><p>修改iconfont.css文件</p><p>修改前格式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@font-face {font-family: &quot;iconfont&quot;;</span></span>
<span class="line"><span>src: url(&#39;iconfont.eot?t=1605254910083&#39;); /* IE9 */</span></span>
<span class="line"><span>src: url(&#39;iconfont.eot?t=1605254910083#iefix&#39;) format(&#39;embedded-opentype&#39;), /* IE6-IE8 */</span></span>
<span class="line"><span>url(&#39;data:application/x-font-woff2;charset=utf-8;base64,转换的base64内容&#39;) format(&#39;woff2&#39;),</span></span>
<span class="line"><span>url(&#39;iconfont.woff?t=1605254910083&#39;) format(&#39;woff&#39;),</span></span>
<span class="line"><span>url(&#39;iconfont.ttf?t=1605254910083&#39;) format(&#39;truetype&#39;), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */</span></span>
<span class="line"><span>url(&#39;iconfont.svg?t=1605254910083#iconfont&#39;) format(&#39;svg&#39;); /* iOS 4.1- */</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>修改后格式:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@font-face {</span></span>
<span class="line"><span>    font-family: &quot;iconfont&quot;;</span></span>
<span class="line"><span>    src: url(&#39;data:application/x-font-woff2;charset=utf-8;base64,转换的base64内容&#39;) format(&#39;woff2&#39;);</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><p>Copy字体文件iconfont.ttf和样式文件iconfont.css 至UniApp项目static/font目录中</p></li></ol><hr><blockquote><p>以上: 如发现有问题，欢迎留言指出，我及时更正</p></blockquote>`,5)]))}const h=n(o,[["render",i]]);export{u as __pageData,h as default};