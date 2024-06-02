import{_ as a,o as s,c as n,B as l}from"./app.27536372.js";const m=JSON.parse('{"title":"创建通用JS公共模块并发布至npm","description":"","frontmatter":{"title":"创建通用JS公共模块并发布至npm","author":"Potter","date":"2022-05-12 18:52","tags":["UMD","rollup","verdaccio","npm"],"categories":["模块化"]},"headers":[{"level":3,"title":"概要内容","slug":"概要内容","link":"#概要内容","children":[]},{"level":3,"title":"如何创建JS公共模块","slug":"如何创建js公共模块","link":"#如何创建js公共模块","children":[]},{"level":3,"title":"rollup","slug":"rollup","link":"#rollup","children":[]},{"level":3,"title":"verdaccio","slug":"verdaccio","link":"#verdaccio","children":[]},{"level":3,"title":"发布至verdaccio平台","slug":"发布至verdaccio平台","link":"#发布至verdaccio平台","children":[]},{"level":3,"title":"发布至npm平台","slug":"发布至npm平台","link":"#发布至npm平台","children":[{"level":4,"title":"参考文献：","slug":"参考文献","link":"#参考文献","children":[]}]}],"relativePath":"article/04-practic/Library/Web04.md","lastUpdated":1717326586000}'),e={name:"article/04-practic/Library/Web04.md"},p=l(`<h1 id="创建通用js公共模块并发布至npm" tabindex="-1">创建通用JS公共模块并发布至npm <a class="header-anchor" href="#创建通用js公共模块并发布至npm" aria-hidden="true">#</a></h1><h3 id="概要内容" tabindex="-1">概要内容 <a class="header-anchor" href="#概要内容" aria-hidden="true">#</a></h3><ul><li>创建：JS公共模块</li><li>打包：使用rollup 打包公共模块</li><li>发布：js公共模块至verdaccio平台</li><li>发布：js公共模块至npm平台</li></ul><hr><h3 id="如何创建js公共模块" tabindex="-1">如何创建JS公共模块 <a class="header-anchor" href="#如何创建js公共模块" aria-hidden="true">#</a></h3><blockquote><p>由于代码有点多就不贴代码了，直接去代码仓库看吧 <a href="https://github.com/aa4790139/JSCommonUtils" target="_blank" rel="noreferrer">传输门</a></p></blockquote><hr><h3 id="rollup" tabindex="-1">rollup <a class="header-anchor" href="#rollup" aria-hidden="true">#</a></h3><ul><li>简介： <blockquote><p>Rollup 是一个 JavaScript 模块打包器，可以将小块代码编译成大块复杂的代码，例如 library 或应用程序。</p></blockquote></li><li>使用起因： <blockquote><p>公共相关的js文件想弄成单独的一个模块，方便后续开发使用，而不是不停的copy 和paste，所以就去了解怎么样把js公共相关js 打包成一个模块。</p></blockquote></li><li>安装<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">pnpm install -g rollup</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div></li><li>创建配置文件<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// rollup.config.js</span></span>
<span class="line"><span style="color:#babed8;">import json from &#39;rollup-plugin-json&#39;;</span></span>
<span class="line"><span style="color:#babed8;">import babel from &#39;rollup-plugin-babel&#39;;</span></span>
<span class="line"><span style="color:#babed8;">import {uglify} from &#39;rollup-plugin-uglify&#39;;</span></span>
<span class="line"><span style="color:#babed8;">import {version} from &#39;../package.json&#39;;</span></span>
<span class="line"><span style="color:#babed8;">import multiEntry from &quot;rollup-plugin-multi-entry&quot;;</span></span>
<span class="line"><span style="color:#babed8;">import {terser} from &quot;rollup-plugin-terser&quot;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">    input: &#39;src/*.js&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    output: {</span></span>
<span class="line"><span style="color:#babed8;">        /*输出公共库路径*/</span></span>
<span class="line"><span style="color:#babed8;">        file: &#39;lib/index.js&#39;,</span></span>
<span class="line"><span style="color:#babed8;">        /*配置：UMD 通用定义模块，支持前端端跨平台模块化*/</span></span>
<span class="line"><span style="color:#babed8;">        format: &#39;umd&#39;,</span></span>
<span class="line"><span style="color:#babed8;">        name: &#39;JSCommonUtils&#39;,</span></span>
<span class="line"><span style="color:#babed8;">        /*压缩和混淆js*/</span></span>
<span class="line"><span style="color:#babed8;">        plugins: [terser(), uglify()],</span></span>
<span class="line"><span style="color:#babed8;">        /*JS前缀: 添加库相关信息*/</span></span>
<span class="line"><span style="color:#babed8;">        banner: &#39;/* JSCommonUtils version &#39; + version + &#39; */&#39;,</span></span>
<span class="line"><span style="color:#babed8;">        /*JS尾部: 添加个人相关信息*/</span></span>
<span class="line"><span style="color:#babed8;">        footer: &#39;/* follow me on github aa4790139 */&#39;</span></span>
<span class="line"><span style="color:#babed8;">    },</span></span>
<span class="line"><span style="color:#babed8;">    plugins: [</span></span>
<span class="line"><span style="color:#babed8;">        json(),</span></span>
<span class="line"><span style="color:#babed8;">        babel({</span></span>
<span class="line"><span style="color:#babed8;">            /*过滤node_modules编译*/</span></span>
<span class="line"><span style="color:#babed8;">            exclude: &#39;node_modules/**&#39;</span></span>
<span class="line"><span style="color:#babed8;">        }),</span></span>
<span class="line"><span style="color:#babed8;">        /*允许多输入源*/</span></span>
<span class="line"><span style="color:#babed8;">        multiEntry()</span></span>
<span class="line"><span style="color:#babed8;">    ],</span></span>
<span class="line"><span style="color:#babed8;">};</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div></li></ul><hr><h3 id="verdaccio" tabindex="-1">verdaccio <a class="header-anchor" href="#verdaccio" aria-hidden="true">#</a></h3><ul><li>简介： 开源轻量的npm私服包管理平台</li><li>使用起因： <blockquote><p>创建好自己的js公共模块时，我们需要在浏览器和Node.js 环境中测试，有了verdaccio 就非常方便我们测试了。而不是去不停npm本地公共模块搞得非常蛋疼，而且很容易出问题，所以为了简单和方便我们使用verdaccio 搞个私有仓库，方便我们模拟安装使用。</p></blockquote></li><li>安装<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">pnpm install -g verdaccio</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div></li><li>启动<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">verdaccio</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div></li></ul><h3 id="发布至verdaccio平台" tabindex="-1">发布至verdaccio平台 <a class="header-anchor" href="#发布至verdaccio平台" aria-hidden="true">#</a></h3><ul><li>常用命令</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">//1. 添加用户</span></span>
<span class="line"><span style="color:#babed8;">npm adduser --registry http://localhost:4873</span></span>
<span class="line"><span style="color:#babed8;">//2. 发布至私有仓库位置</span></span>
<span class="line"><span style="color:#babed8;">npm publish --registry http://localhost:4873</span></span>
<span class="line"><span style="color:#babed8;">// 撤回发布刚发布包</span></span>
<span class="line"><span style="color:#babed8;">npm unpublish --force --registry http://localhost:4873 </span></span>
<span class="line"><span style="color:#babed8;">// 撤回发布的指定包</span></span>
<span class="line"><span style="color:#babed8;">npm unpublish package_name  --force --registry http://localhost:4873</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>效果图 <img src="https://cdn.jsdelivr.net/gh/aa4790139/BlogPicBed@master//img/20210303144737.png" alt=""></li></ul><h3 id="发布至npm平台" tabindex="-1">发布至npm平台 <a class="header-anchor" href="#发布至npm平台" aria-hidden="true">#</a></h3><ul><li>创建.npmignore 文件，过滤掉无需上传的文件和目录</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">node_modules/*</span></span>
<span class="line"><span style="color:#babed8;">src/</span></span>
<span class="line"><span style="color:#babed8;">build/</span></span>
<span class="line"><span style="color:#babed8;">.babelrc</span></span>
<span class="line"><span style="color:#babed8;">.gitignore</span></span>
<span class="line"><span style="color:#babed8;">package-lock.json</span></span>
<span class="line"><span style="color:#babed8;">pnpm-lock.yaml</span></span>
<span class="line"><span style="color:#babed8;">!node_modules/crc32</span></span>
<span class="line"><span style="color:#babed8;">!node_modules/deflate-js</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><blockquote><p>提示: .npmignore文件内容，需要忽略的文件和目录写前面，需要排除忽略的文件或目录前加!写后面</p></blockquote><ul><li>效果图 <img src="https://cdn.jsdelivr.net/gh/aa4790139/BlogPicBed@master//img/20210303144716.png" alt=""></li></ul><hr><h4 id="参考文献" tabindex="-1">参考文献： <a class="header-anchor" href="#参考文献" aria-hidden="true">#</a></h4><ul><li><a href="https://verdaccio.org/docs/en/installation" target="_blank" rel="noreferrer">verdaccio 官网</a></li><li><a href="https://fe.rualc.com/note/npm-verdaccio.html#npm-install" target="_blank" rel="noreferrer">verdaccio 搭建配置</a></li><li><a href="https://www.rollupjs.com/guide/tools" target="_blank" rel="noreferrer">rollup.js 中文文档</a></li><li><a href="https://github.com/Godiswill/blog/issues/6" target="_blank" rel="noreferrer">rollup 官网打包实践</a></li><li><a href="https://chenshenhai.github.io/rollupjs-note/" target="_blank" rel="noreferrer">Rollup.js 实战学习笔记</a></li><li><a href="https://stackoverflow.com/questions/48092647/npmignore-ignore-whole-folder-except-given-file-types" target="_blank" rel="noreferrer">.npmignore: ignore whole folder except given file types</a></li></ul><hr><blockquote><p>以上: 如发现有问题，欢迎留言指出，我及时更正</p></blockquote>`,26),o=[p];function i(r,t,c,d,b,u){return s(),n("div",null,o)}const y=a(e,[["render",i]]);export{m as __pageData,y as default};
