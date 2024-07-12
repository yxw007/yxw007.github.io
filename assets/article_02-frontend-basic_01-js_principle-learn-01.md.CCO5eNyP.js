import{_ as s,c as i,o as a,a8 as t}from"./chunks/framework.Bou8hzLb.js";const y=JSON.parse('{"title":"响应式根基：Object.defineProperty 与 Proxy 拦截区别","description":"","frontmatter":{"title":"响应式根基：Object.defineProperty 与 Proxy 拦截区别","author":"Potter","date":"2022-05-12 18:42","tags":["Object.defineProperty","Proxy"],"categories":["响应式原理"]},"headers":[],"relativePath":"article/02-frontend-basic/01-js/principle-learn-01.md","filePath":"article/02-frontend-basic/01-js/principle-learn-01.md","lastUpdated":1720789450000}'),l={name:"article/02-frontend-basic/01-js/principle-learn-01.md"},h=t('<h1 id="响应式根基-object-defineproperty-与-proxy-拦截区别" tabindex="-1">响应式根基：Object.defineProperty 与 Proxy 拦截区别 <a class="header-anchor" href="#响应式根基-object-defineproperty-与-proxy-拦截区别" aria-label="Permalink to &quot;响应式根基：Object.defineProperty 与 Proxy 拦截区别&quot;">​</a></h1><hr><blockquote><p>假如你熟悉Vue，同时好奇心比较强，你肯定会想知道Vue是如何实现响应式的，要了解响应式原理就需要我们了解Object.defineProperty 和 Proxy 这两个API。针对这两个API编写对应的测试例子看看情况如何。</p></blockquote><h2 id="object-defineproperty-拦截测试" tabindex="-1">Object.defineProperty 拦截测试 <a class="header-anchor" href="#object-defineproperty-拦截测试" aria-label="Permalink to &quot;Object.defineProperty 拦截测试&quot;">​</a></h2><hr><h2 id="概要内容" tabindex="-1">概要内容 <a class="header-anchor" href="#概要内容" aria-label="Permalink to &quot;概要内容&quot;">​</a></h2><hr><p>---修改：对象-string类型字段，拦截测试------&quot;); hero.name = &quot;吕布&quot; console.log(<code>更改后结果：${hero.name}</code>); ```</p><ul><li><p>输出结果：</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20210717175153.png" alt="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20210717175153.png"></p></li><li><p>结论：<strong>对象-普通字段修改，可以被get set拦截</strong></p></li></ul><h3 id="测试2-修改对象-数组类型字段-新增元素-拦截测试" tabindex="-1">测试2：修改对象-数组类型字段，新增元素，拦截测试 <a class="header-anchor" href="#测试2-修改对象-数组类型字段-新增元素-拦截测试" aria-label="Permalink to &quot;测试2：修改对象-数组类型字段，新增元素，拦截测试&quot;">​</a></h3><ul><li><p>code：</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;------修改：对象-数组类型字段，新增元素，拦截测试------&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hero.equipment.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;盔甲&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`更改后结果： ${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hero</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">equipment</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div></li><li><p>输出结果：</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20210717181404.png" alt="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20210717181404.png"></p></li><li><p>结论：<strong>对象-数组字段新增元素,可以被get拦截，无法被set拦截</strong></p></li></ul><h3 id="测试3-修改对象-添加字段-拦截测试" tabindex="-1">测试3：修改对象-添加字段，拦截测试 <a class="header-anchor" href="#测试3-修改对象-添加字段-拦截测试" aria-label="Permalink to &quot;测试3：修改对象-添加字段，拦截测试&quot;">​</a></h3><ul><li><p>code</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;------修改：对象-添加字段，拦截测试------&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hero.age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 23</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`更改后结果： ${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hero</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">age</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div></li><li><p>输出结果</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20210717181932.png" alt="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20210717181932.png"></p></li><li><p>结论：<strong>对象-添加字段,无法被get set拦截</strong></p></li></ul><h3 id="测试4-修改对象-删除字段-拦截测试" tabindex="-1">测试4：修改对象-删除字段，拦截测试 <a class="header-anchor" href="#测试4-修改对象-删除字段-拦截测试" aria-label="Permalink to &quot;测试4：修改对象-删除字段，拦截测试&quot;">​</a></h3><ul><li><p>code</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;------修改：对象-删除字段，拦截测试------&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">delete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hero.name;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`更改后结果： ${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hero</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div></li><li><p>输出结果</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20210717182115.png" alt="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20210717182115.png"></p></li><li><p>结论</p></li></ul><h3 id="测试5-修改数组类型字段-新增元素-拦截测试" tabindex="-1">测试5：修改数组类型字段，新增元素，拦截测试 <a class="header-anchor" href="#测试5-修改数组类型字段-新增元素-拦截测试" aria-label="Permalink to &quot;测试5：修改数组类型字段，新增元素，拦截测试&quot;">​</a></h3><ul><li><p>code</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">defineProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(hero.equipment, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;push&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`value ${</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} -  ${</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">arguments</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> arguments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;---------------第二部分：对象-数组value拦截测试-----------------------&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;------修改：数组类型字段，新增元素，拦截测试------&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`当前 equipment： ${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hero</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">equipment</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hero.equipment.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;盔甲&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`新增[盔甲]后 equipment： ${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hero</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">equipment</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div></li><li><p>输出结果</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20210717185253.png" alt="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20210717185253.png"></p></li><li><p>结论：<strong>可以利用value 拦截到对象-数组字段元素删减</strong></p></li></ul><h2 id="proxy拦截测试" tabindex="-1">Proxy拦截测试 <a class="header-anchor" href="#proxy拦截测试" aria-label="Permalink to &quot;Proxy拦截测试&quot;">​</a></h2><hr><h3 id="公共代码" tabindex="-1">公共代码 <a class="header-anchor" href="#公共代码" aria-label="Permalink to &quot;公共代码&quot;">​</a></h3><hr><p>---修改：对象string类型字段，拦截测试------&quot;); heroProxy.name = &quot;吕布&quot; console.log(<code>更改后结果：${heroProxy.name}</code>); ```</p><ul><li><p>输出结果</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20210717184434.png" alt="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20210717184434.png"></p></li><li><p>结论：<strong>对象-普通字段修改，可以被get set拦截</strong></p></li></ul><h3 id="测试2-修改对象数组类型字段-新增元素-拦截测试" tabindex="-1">测试2：修改对象数组类型字段，新增元素，拦截测试 <a class="header-anchor" href="#测试2-修改对象数组类型字段-新增元素-拦截测试" aria-label="Permalink to &quot;测试2：修改对象数组类型字段，新增元素，拦截测试&quot;">​</a></h3><ul><li><p>code</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;------修改：对象数组类型字段，新增元素，拦截测试------&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">heroProxy.equipment.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;盔甲&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`更改后结果： ${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">heroProxy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">equipment</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div></li><li><p>输出结果</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20210717184544.png" alt="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20210717184544.png"></p></li><li><p>结论：<strong>对象-数组字段新增元素,可以被get拦截，无法被set拦截</strong></p></li></ul><h3 id="测试3-修改对象-添加字段-拦截测试-1" tabindex="-1">测试3：修改对象-添加字段，拦截测试 <a class="header-anchor" href="#测试3-修改对象-添加字段-拦截测试-1" aria-label="Permalink to &quot;测试3：修改对象-添加字段，拦截测试&quot;">​</a></h3><ul><li><p>code</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;------修改：对象-添加字段，拦截测试------&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">heroProxy.age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 23</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`更改后结果： ${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">heroProxy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">age</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div></li><li><p>输出结果</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20210717184736.png" alt="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20210717184736.png"></p></li><li><p>结论：<strong>对象-添加字段,可以被set拦截</strong></p></li></ul><h3 id="测试4-修改对象-删除字段-拦截测试-1" tabindex="-1">测试4：修改对象-删除字段，拦截测试 <a class="header-anchor" href="#测试4-修改对象-删除字段-拦截测试-1" aria-label="Permalink to &quot;测试4：修改对象-删除字段，拦截测试&quot;">​</a></h3><ul><li><p>code</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;------修改：对象-删除字段，拦截测试------&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">delete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> heroProxy.name;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`更改后结果： ${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">heroProxy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div></li><li><p>输出结果</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20210717185008.png" alt="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20210717185008.png"></p></li><li><p>结论：<strong>对象-删除字段,可以被get拦截</strong></p></li></ul><h3 id="测试5-修改-对象数组类型字段" tabindex="-1">测试5：修改：对象数组类型字段 <a class="header-anchor" href="#测试5-修改-对象数组类型字段" aria-label="Permalink to &quot;测试5：修改：对象数组类型字段&quot;">​</a></h3><ul><li><p>code</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> heroProxyArray </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Proxy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(hero.equipment, handler);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;------修改：对象数组类型字段，新增元素，拦截测试------&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`当前 equipment：`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(heroProxyArray);</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">heroProxyArray.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;匕首&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`新增[匕首]后 equipment：`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(heroProxyArray);</span></span></code></pre></div></li><li><p>输出结果</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20210717185209.png" alt="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20210717185209.png"></p></li><li><p>结论：<strong>利用proxy 即可轻松拦截数组变化</strong></p></li></ul><hr><h3 id="公共代码-1" tabindex="-1">公共代码 <a class="header-anchor" href="#公共代码-1" aria-label="Permalink to &quot;公共代码&quot;">​</a></h3><blockquote><p>demo 源码：<a href="https://github.com/yxw007/vue-principle-learn/tree/master/Proxy%26Reflect" target="_blank" rel="noreferrer">vue-principle-learn</a> 后续我会把vue原理相关的学习资料和demo都会更新到此仓库，欢迎star收藏~</p></blockquote><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><ul><li>Object.defineProperty <ul><li>缺点1：只能遍历对象已存在的属性，进行get set拦截，无法针对新增、删除元素进行拦截</li><li>缺点2：针对array 拦截，需要拦截push、shift、pop、unshift等，拦截操作复杂</li></ul></li><li>Proxy <ul><li>优势1：新增、删减字段都能轻松拦截</li><li>优势2：针对array 拦截，跟object 属性get set一样拦截，无需特殊处理</li></ul></li></ul><p>...</p><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://zhuanlan.zhihu.com/p/60126477" target="_blank" rel="noreferrer">深入实践 ES6 Proxy &amp; Reflect</a></li><li><a href="https://stackoverflow.com/questions/5100376/how-to-watch-for-array-changes" target="_blank" rel="noreferrer">how-to-watch-for-array-changes</a></li></ul>',39),n=[h];function e(p,k,r,E,d,g){return a(),i("div",null,n)}const c=s(l,[["render",e]]);export{y as __pageData,c as default};