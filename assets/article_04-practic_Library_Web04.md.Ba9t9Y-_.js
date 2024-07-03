import{_ as a,c as s,o as n,a7 as l}from"./chunks/framework.GnyprNw9.js";const g=JSON.parse('{"title":"创建通用JS公共模块并发布至npm","description":"","frontmatter":{"title":"创建通用JS公共模块并发布至npm","author":"Potter","date":"2022-05-12 18:52","tags":["UMD","rollup","verdaccio","npm"],"categories":["模块化"]},"headers":[],"relativePath":"article/04-practic/Library/Web04.md","filePath":"article/04-practic/Library/Web04.md","lastUpdated":1719974778000}'),e={name:"article/04-practic/Library/Web04.md"},p=l(`<h1 id="创建通用js公共模块并发布至npm" tabindex="-1">创建通用JS公共模块并发布至npm <a class="header-anchor" href="#创建通用js公共模块并发布至npm" aria-label="Permalink to &quot;创建通用JS公共模块并发布至npm&quot;">​</a></h1><h3 id="概要内容" tabindex="-1">概要内容 <a class="header-anchor" href="#概要内容" aria-label="Permalink to &quot;概要内容&quot;">​</a></h3><ul><li>创建：JS公共模块</li><li>打包：使用rollup 打包公共模块</li><li>发布：js公共模块至verdaccio平台</li><li>发布：js公共模块至npm平台</li></ul><hr><h3 id="如何创建js公共模块" tabindex="-1">如何创建JS公共模块 <a class="header-anchor" href="#如何创建js公共模块" aria-label="Permalink to &quot;如何创建JS公共模块&quot;">​</a></h3><blockquote><p>由于代码有点多就不贴代码了，直接去代码仓库看吧 <a href="https://github.com/aa4790139/JSCommonUtils" target="_blank" rel="noreferrer">传输门</a></p></blockquote><hr><h3 id="rollup" tabindex="-1">rollup <a class="header-anchor" href="#rollup" aria-label="Permalink to &quot;rollup&quot;">​</a></h3><ul><li>简介： <blockquote><p>Rollup 是一个 JavaScript 模块打包器，可以将小块代码编译成大块复杂的代码，例如 library 或应用程序。</p></blockquote></li><li>使用起因： <blockquote><p>公共相关的js文件想弄成单独的一个模块，方便后续开发使用，而不是不停的copy 和paste，所以就去了解怎么样把js公共相关js 打包成一个模块。</p></blockquote></li><li>安装<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pnpm install -g rollup</span></span></code></pre></div></li><li>创建配置文件<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// rollup.config.js</span></span>
<span class="line"><span>import json from &#39;rollup-plugin-json&#39;;</span></span>
<span class="line"><span>import babel from &#39;rollup-plugin-babel&#39;;</span></span>
<span class="line"><span>import {uglify} from &#39;rollup-plugin-uglify&#39;;</span></span>
<span class="line"><span>import {version} from &#39;../package.json&#39;;</span></span>
<span class="line"><span>import multiEntry from &quot;rollup-plugin-multi-entry&quot;;</span></span>
<span class="line"><span>import {terser} from &quot;rollup-plugin-terser&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    input: &#39;src/*.js&#39;,</span></span>
<span class="line"><span>    output: {</span></span>
<span class="line"><span>        /*输出公共库路径*/</span></span>
<span class="line"><span>        file: &#39;lib/index.js&#39;,</span></span>
<span class="line"><span>        /*配置：UMD 通用定义模块，支持前端端跨平台模块化*/</span></span>
<span class="line"><span>        format: &#39;umd&#39;,</span></span>
<span class="line"><span>        name: &#39;JSCommonUtils&#39;,</span></span>
<span class="line"><span>        /*压缩和混淆js*/</span></span>
<span class="line"><span>        plugins: [terser(), uglify()],</span></span>
<span class="line"><span>        /*JS前缀: 添加库相关信息*/</span></span>
<span class="line"><span>        banner: &#39;/* JSCommonUtils version &#39; + version + &#39; */&#39;,</span></span>
<span class="line"><span>        /*JS尾部: 添加个人相关信息*/</span></span>
<span class="line"><span>        footer: &#39;/* follow me on github aa4790139 */&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    plugins: [</span></span>
<span class="line"><span>        json(),</span></span>
<span class="line"><span>        babel({</span></span>
<span class="line"><span>            /*过滤node_modules编译*/</span></span>
<span class="line"><span>            exclude: &#39;node_modules/**&#39;</span></span>
<span class="line"><span>        }),</span></span>
<span class="line"><span>        /*允许多输入源*/</span></span>
<span class="line"><span>        multiEntry()</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>};</span></span></code></pre></div></li></ul><hr><h3 id="verdaccio" tabindex="-1">verdaccio <a class="header-anchor" href="#verdaccio" aria-label="Permalink to &quot;verdaccio&quot;">​</a></h3><ul><li>简介： 开源轻量的npm私服包管理平台</li><li>使用起因： <blockquote><p>创建好自己的js公共模块时，我们需要在浏览器和Node.js 环境中测试，有了verdaccio 就非常方便我们测试了。而不是去不停npm本地公共模块搞得非常蛋疼，而且很容易出问题，所以为了简单和方便我们使用verdaccio 搞个私有仓库，方便我们模拟安装使用。</p></blockquote></li><li>安装<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pnpm install -g verdaccio</span></span></code></pre></div></li><li>启动<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>verdaccio</span></span></code></pre></div></li></ul><h3 id="发布至verdaccio平台" tabindex="-1">发布至verdaccio平台 <a class="header-anchor" href="#发布至verdaccio平台" aria-label="Permalink to &quot;发布至verdaccio平台&quot;">​</a></h3><ul><li>常用命令</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//1. 添加用户</span></span>
<span class="line"><span>npm adduser --registry http://localhost:4873</span></span>
<span class="line"><span>//2. 发布至私有仓库位置</span></span>
<span class="line"><span>npm publish --registry http://localhost:4873</span></span>
<span class="line"><span>// 撤回发布刚发布包</span></span>
<span class="line"><span>npm unpublish --force --registry http://localhost:4873 </span></span>
<span class="line"><span>// 撤回发布的指定包</span></span>
<span class="line"><span>npm unpublish package_name  --force --registry http://localhost:4873</span></span></code></pre></div><ul><li>效果图 <img src="https://cdn.jsdelivr.net/gh/aa4790139/BlogPicBed@master//img/20210303144737.png" alt=""></li></ul><h3 id="发布至npm平台" tabindex="-1">发布至npm平台 <a class="header-anchor" href="#发布至npm平台" aria-label="Permalink to &quot;发布至npm平台&quot;">​</a></h3><ul><li>创建.npmignore 文件，过滤掉无需上传的文件和目录</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>node_modules/*</span></span>
<span class="line"><span>src/</span></span>
<span class="line"><span>build/</span></span>
<span class="line"><span>.babelrc</span></span>
<span class="line"><span>.gitignore</span></span>
<span class="line"><span>package-lock.json</span></span>
<span class="line"><span>pnpm-lock.yaml</span></span>
<span class="line"><span>!node_modules/crc32</span></span>
<span class="line"><span>!node_modules/deflate-js</span></span></code></pre></div><blockquote><p>提示: .npmignore文件内容，需要忽略的文件和目录写前面，需要排除忽略的文件或目录前加!写后面</p></blockquote><ul><li>效果图 <img src="https://cdn.jsdelivr.net/gh/aa4790139/BlogPicBed@master//img/20210303144716.png" alt=""></li></ul><hr><h4 id="参考文献" tabindex="-1">参考文献： <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献：&quot;">​</a></h4><ul><li><a href="https://verdaccio.org/docs/en/installation" target="_blank" rel="noreferrer">verdaccio 官网</a></li><li><a href="https://fe.rualc.com/note/npm-verdaccio.html#npm-install" target="_blank" rel="noreferrer">verdaccio 搭建配置</a></li><li><a href="https://www.rollupjs.com/guide/tools" target="_blank" rel="noreferrer">rollup.js 中文文档</a></li><li><a href="https://github.com/Godiswill/blog/issues/6" target="_blank" rel="noreferrer">rollup 官网打包实践</a></li><li><a href="https://chenshenhai.github.io/rollupjs-note/" target="_blank" rel="noreferrer">Rollup.js 实战学习笔记</a></li><li><a href="https://stackoverflow.com/questions/48092647/npmignore-ignore-whole-folder-except-given-file-types" target="_blank" rel="noreferrer">.npmignore: ignore whole folder except given file types</a></li></ul><hr><blockquote><p>以上: 如发现有问题，欢迎留言指出，我及时更正</p></blockquote>`,26),i=[p];function t(o,r,c,d,u,h){return n(),s("div",null,i)}const b=a(e,[["render",t]]);export{g as __pageData,b as default};
