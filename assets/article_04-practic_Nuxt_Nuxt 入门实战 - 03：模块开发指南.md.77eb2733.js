import{_ as s,o as a,c as n,B as e}from"./app.d65ad660.js";const x=JSON.parse('{"title":"Nuxt 入门实战 - 03：模块开发指南","description":"","frontmatter":{"title":"Nuxt 入门实战 - 03：模块开发指南","author":"Potter","date":"2023-06-21T11:41:30.000Z","tags":["Nuxt"],"categories":["Nuxt 入门实战"]},"headers":[{"level":2,"title":"创建模块项目","slug":"创建模块项目","link":"#创建模块项目","children":[]},{"level":2,"title":"开发","slug":"开发","link":"#开发","children":[]},{"level":2,"title":"开发","slug":"开发-1","link":"#开发-1","children":[]},{"level":2,"title":"打包","slug":"打包","link":"#打包","children":[]},{"level":2,"title":"发布","slug":"发布","link":"#发布","children":[]},{"level":2,"title":"如何使用","slug":"如何使用","link":"#如何使用","children":[]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"relativePath":"article/04-practic/Nuxt/Nuxt 入门实战 - 03：模块开发指南.md","lastUpdated":1715053816000}'),l={name:"article/04-practic/Nuxt/Nuxt 入门实战 - 03：模块开发指南.md"},t=e(`<h1 id="nuxt-入门实战-03-模块开发指南" tabindex="-1">Nuxt 入门实战 - 03：模块开发指南 <a class="header-anchor" href="#nuxt-入门实战-03-模块开发指南" aria-hidden="true">#</a></h1><hr><h2 id="创建模块项目" tabindex="-1">创建模块项目 <a class="header-anchor" href="#创建模块项目" aria-hidden="true">#</a></h2><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">npx nuxi init </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">t </span><span style="color:#C792EA;">module</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">nuxt</span><span style="color:#BABED8;">-</span><span style="color:#FFCB6B;">my</span><span style="color:#BABED8;">-</span><span style="color:#FFCB6B;">module</span></span>
<span class="line"></span></code></pre></div><h2 id="开发" tabindex="-1">开发 <a class="header-anchor" href="#开发" aria-hidden="true">#</a></h2><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">pnpm run dev</span></span>
<span class="line"></span></code></pre></div><h2 id="开发-1" tabindex="-1">开发 <a class="header-anchor" href="#开发-1" aria-hidden="true">#</a></h2><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">pnpm run </span><span style="color:#FFCB6B;">dev</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;">build</span></span>
<span class="line"></span></code></pre></div><h2 id="打包" tabindex="-1">打包 <a class="header-anchor" href="#打包" aria-hidden="true">#</a></h2><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">pnpm run prepack</span></span>
<span class="line"></span></code></pre></div><h2 id="发布" tabindex="-1">发布 <a class="header-anchor" href="#发布" aria-hidden="true">#</a></h2><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">pnpm publish</span></span>
<span class="line"></span></code></pre></div><h2 id="如何使用" tabindex="-1">如何使用 <a class="header-anchor" href="#如何使用" aria-hidden="true">#</a></h2><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">//nuxt.config.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">defineNuxtConfig</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#BABED8;">	modules: [</span><span style="color:#89DDFF;">...,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nuxt-my-module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-hidden="true">#</a></h2><ul><li><a href="https://nuxt.com/docs/guide/going-further/modules" target="_blank" rel="noreferrer">https://nuxt.com/docs/guide/going-further/modules</a></li></ul>`,16),p=[t];function o(i,c,r,d,h,u){return a(),n("div",null,p)}const B=s(l,[["render",o]]);export{x as __pageData,B as default};
