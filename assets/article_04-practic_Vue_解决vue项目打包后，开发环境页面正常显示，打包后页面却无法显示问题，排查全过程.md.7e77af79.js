import{_ as s,o as a,c as n,B as l}from"./app.8c8f63c8.js";const u=JSON.parse('{"title":"解决vue项目打包后，开发环境页面正常显示，打包后页面却无法显示问题，排查全过程","description":"","frontmatter":{"title":"解决vue项目打包后，开发环境页面正常显示，打包后页面却无法显示问题，排查全过程","author":"Potter","date":"2023-10-15T16:18:28.000Z","tags":["xx"],"categories":["xx"]},"headers":[{"level":2,"title":"排查第1阶段","slug":"排查第1阶段","link":"#排查第1阶段","children":[]},{"level":2,"title":"排查第2阶段","slug":"排查第2阶段","link":"#排查第2阶段","children":[]},{"level":2,"title":"排查第3阶段","slug":"排查第3阶段","link":"#排查第3阶段","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"relativePath":"article/04-practic/Vue/解决vue项目打包后，开发环境页面正常显示，打包后页面却无法显示问题，排查全过程.md","lastUpdated":1704702711000}'),p={name:"article/04-practic/Vue/解决vue项目打包后，开发环境页面正常显示，打包后页面却无法显示问题，排查全过程.md"},o=l(`<h1 id="解决vue项目打包后-开发环境页面正常显示-打包后页面却无法显示问题-排查全过程" tabindex="-1">解决vue项目打包后，开发环境页面正常显示，打包后页面却无法显示问题（排查全过程） <a class="header-anchor" href="#解决vue项目打包后-开发环境页面正常显示-打包后页面却无法显示问题-排查全过程" aria-hidden="true">#</a></h1><h2 id="排查第1阶段" tabindex="-1">排查第1阶段 <a class="header-anchor" href="#排查第1阶段" aria-hidden="true">#</a></h2><p>问题细节：</p><ul><li>html 仅显示了app跟节点，app下面仅包含&lt;←- —&gt; 空节点</li></ul><p>怀疑原因：路由未匹配到界面组件</p><p>各种配置：</p><ul><li><p>nginx 配置</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20240108161452.png" alt=""></p><p>访问路径：<a href="https://xx.xx.com/pay/index" target="_blank" rel="noreferrer">https://xx.xx.com/pay/index</a></p></li><li><p>webpack 配置</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#FFCB6B;">output</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#FFCB6B;">path</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#FFCB6B;">filename</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">assetsPath</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js/[name].[chunkhash].js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#FFCB6B;">chunkFilename</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">assetsPath</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js/[id].[chunkhash].js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#FFCB6B;">publicPath</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">config</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">build</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">assetsPublicPath</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">...</span></span>
<span class="line"></span></code></pre></div><p>说明：此时的配置是错误的，path应该配成/pay/ 与 nginx location /pay/ 是对应的。（<strong>注意：此处path也容易配成/path忘掉/也是不对的</strong>）</p></li></ul><h2 id="排查第2阶段" tabindex="-1">排查第2阶段 <a class="header-anchor" href="#排查第2阶段" aria-hidden="true">#</a></h2><p>配置好后发现路由还是未匹配到组件，以下来看下routes</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> [</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">index</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#F07178;">alias</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/index</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#F07178;">nav_name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">首页</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#82AAFF;">component</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">import</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@/view/main</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>无论我如何修改main界面内容都是无法显示，实在找不到原因，最后尝试将其改成官网的demo代码</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> Foo </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;div&gt;foo&lt;/div&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> [</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">index</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#F07178;">alias</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/index</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#F07178;">nav_name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">首页</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">		</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> Foo</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>结果尽量显示出来了，经过不停的捣腾发现vue2.7中() =&gt; import(&quot;@/view/main&quot;) 是无法异步加载组件，需要用defineAsyncComponent套一层，翻了一遍changelog 也未看到说明，算是踩坑了。</p><h2 id="排查第3阶段" tabindex="-1">排查第3阶段 <a class="header-anchor" href="#排查第3阶段" aria-hidden="true">#</a></h2><p>改成defineAsyncComponent 异步加载组件后，界面仍然不显示。此时真想骂人，但是没办法问题必须解决，应该是main组件的问题，所以改成把main的组件代码全部删掉，就搞一个div 123 到template里面，结果显示出来了。那么就是main中的代码问题，所以逐步注释排查到最后，发现是?? 语法问题，将其改成|| 即可。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h2><ul><li>publicPath 与 nginx 中配置的path 路径要匹配（注意不能丢到末尾的/，否则会导致加载资源路径会少一个/）</li><li>快速验证诊断问题是否正确：怀疑某个东西有问题，又实在找不到原因，那么就直接将其改到最简化，验证怀疑的方向对不对。 <ul><li>诊断正确：继续怀疑诊断，想不到就用最笨的方法，逐段注释排查，直到排查出最终原因。</li></ul></li><li>经验总结： <ul><li>一模一样的代码，一种环境运行正常，另外一种环境运行不正常，首先应该怀疑的就是代码是否存在兼容性问题。</li><li>项目接入支付尽量采用低版本特性，避免js or css 新特性无法在老环境中运行的情况（多考虑兼容性）</li></ul></li></ul><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-hidden="true">#</a></h2><ul><li><a href="https://compat-table.github.io/compat-table/es6/" target="_blank" rel="noreferrer">快速查看js语法兼容情况</a></li></ul>`,19),t=[o];function e(c,r,D,F,y,i){return a(),n("div",null,t)}const d=s(p,[["render",e]]);export{u as __pageData,d as default};
