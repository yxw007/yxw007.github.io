import{_ as a,c as e,o as s,a8 as n}from"./chunks/framework.Bou8hzLb.js";const b=JSON.parse('{"title":"创建通用JS公共模块并发布至npm","description":"","frontmatter":{"title":"创建通用JS公共模块并发布至npm","author":"Potter","date":"2022-05-12 18:52","tags":["UMD","rollup","verdaccio","npm"],"categories":["模块化"]},"headers":[],"relativePath":"article/04-practic/Library/Web04.md","filePath":"article/04-practic/Library/Web04.md","lastUpdated":1720416380000}'),l={name:"article/04-practic/Library/Web04.md"},t=n(`<h1 id="创建通用js公共模块并发布至npm" tabindex="-1">创建通用JS公共模块并发布至npm <a class="header-anchor" href="#创建通用js公共模块并发布至npm" aria-label="Permalink to &quot;创建通用JS公共模块并发布至npm&quot;">​</a></h1><hr><h3 id="如何创建js公共模块" tabindex="-1">如何创建JS公共模块 <a class="header-anchor" href="#如何创建js公共模块" aria-label="Permalink to &quot;如何创建JS公共模块&quot;">​</a></h3><blockquote><p>由于代码有点多就不贴代码了，直接去代码仓库看吧 <a href="https://github.com/aa4790139/JSCommonUtils" target="_blank" rel="noreferrer">传输门</a></p></blockquote><hr><h3 id="概要内容" tabindex="-1">概要内容 <a class="header-anchor" href="#概要内容" aria-label="Permalink to &quot;概要内容&quot;">​</a></h3><hr><h3 id="verdaccio" tabindex="-1">verdaccio <a class="header-anchor" href="#verdaccio" aria-label="Permalink to &quot;verdaccio&quot;">​</a></h3><ul><li><p>简介： 开源轻量的npm私服包管理平台</p></li><li><p>使用起因：</p><blockquote><p>创建好自己的js公共模块时，我们需要在浏览器和Node.js 环境中测试，有了verdaccio 就非常方便我们测试了。而不是去不停npm本地公共模块搞得非常蛋疼，而且很容易出问题，所以为了简单和方便我们使用verdaccio 搞个私有仓库，方便我们模拟安装使用。</p></blockquote></li><li><p>安装</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pnpm install -g verdaccio</span></span></code></pre></div></li><li><p>启动</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>verdaccio</span></span></code></pre></div></li></ul><h3 id="发布至verdaccio平台" tabindex="-1">发布至verdaccio平台 <a class="header-anchor" href="#发布至verdaccio平台" aria-label="Permalink to &quot;发布至verdaccio平台&quot;">​</a></h3><ul><li>常用命令</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//1. 添加用户</span></span>
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
<span class="line"><span>!node_modules/deflate-js</span></span></code></pre></div><blockquote><p>提示: .npmignore文件内容，需要忽略的文件和目录写前面，需要排除忽略的文件或目录前加!写后面</p></blockquote><ul><li>效果图 <img src="https://cdn.jsdelivr.net/gh/aa4790139/BlogPicBed@master//img/20210303144716.png" alt=""></li></ul><h4 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h4><ul><li><a href="https://verdaccio.org/docs/en/installation" target="_blank" rel="noreferrer">verdaccio 官网</a></li><li><a href="https://fe.rualc.com/note/npm-verdaccio.html#npm-install" target="_blank" rel="noreferrer">verdaccio 搭建配置</a></li><li><a href="https://www.rollupjs.com/guide/tools" target="_blank" rel="noreferrer">rollup.js 中文文档</a></li><li><a href="https://github.com/Godiswill/blog/issues/6" target="_blank" rel="noreferrer">rollup 官网打包实践</a></li><li><a href="https://chenshenhai.github.io/rollupjs-note/" target="_blank" rel="noreferrer">Rollup.js 实战学习笔记</a></li><li><a href="https://stackoverflow.com/questions/48092647/npmignore-ignore-whole-folder-except-given-file-types" target="_blank" rel="noreferrer">.npmignore: ignore whole folder except given file types</a></li></ul><hr><h3 id="rollup" tabindex="-1">rollup <a class="header-anchor" href="#rollup" aria-label="Permalink to &quot;rollup&quot;">​</a></h3><blockquote><p>以上: 如发现有问题，欢迎留言指出，我及时更正</p></blockquote>`,23),i=[t];function p(r,o,c,h,d,u){return s(),e("div",null,i)}const g=a(l,[["render",p]]);export{b as __pageData,g as default};
