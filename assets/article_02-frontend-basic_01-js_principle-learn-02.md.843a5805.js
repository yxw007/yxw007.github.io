import{_ as e,c as l,o as i,A as t}from"./app.88061379.js";const _=JSON.parse('{"title":"响应式核心原理","description":"","frontmatter":{"title":"响应式核心原理","author":"Potter","date":"2022-05-12 18:42","tags":["Proxy","watchEffect","dep","Reflect"],"categories":["响应式原理"]},"headers":[{"level":3,"title":"概要内容","slug":"概要内容","link":"#概要内容","children":[]},{"level":2,"title":"核心原理-流转图","slug":"核心原理-流转图","link":"#核心原理-流转图","children":[{"level":3,"title":"流转步骤讲解","slug":"流转步骤讲解","link":"#流转步骤讲解","children":[]},{"level":3,"title":"疑问解答：","slug":"疑问解答","link":"#疑问解答","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"relativePath":"article/02-frontend-basic/01-js/principle-learn-02.md","lastUpdated":1678887599000}'),a={name:"article/02-frontend-basic/01-js/principle-learn-02.md"},r=t('<h3 id="概要内容" tabindex="-1">概要内容 <a class="header-anchor" href="#概要内容" aria-hidden="true">#</a></h3><ul><li>核心原理：流转图</li><li>流转步骤：讲解&amp;疑问解答</li></ul><hr><blockquote><p>由于Vue3 Reactive源码涉及的代码较多，给初学者学习带来一定的门槛，所以尤大讲解的最核心的响应式demo来讲解响应式核心原理实现</p></blockquote><h2 id="核心原理-流转图" tabindex="-1">核心原理-流转图 <a class="header-anchor" href="#核心原理-流转图" aria-hidden="true">#</a></h2><hr><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20210726223603.jpg" alt="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20210726223603.jpg"></p><h3 id="流转步骤讲解" tabindex="-1">流转步骤讲解 <a class="header-anchor" href="#流转步骤讲解" aria-hidden="true">#</a></h3><ul><li>第1步：利用Proxy 封装代理响应式对象</li><li>第2步：巧妙利用Javascript是单线程执行特性，用watchEffect包装一层调用，让activeUpdate暂存匿名函数。</li><li>第3步：执行匿名函数，让匿名函数访问到的对象属性，触发对象的get 拦截</li><li>第4、5、6步：get拦截到的属性访问，创建依赖跟踪对象dep，然后利用dep搜集依赖匿名函数</li><li>第7、8步：set拦截到属性设置，获取属性对应的依赖对象dep，然后调用之前搜集的依赖匿名函数</li></ul><hr><h3 id="疑问解答" tabindex="-1">疑问解答： <a class="header-anchor" href="#疑问解答" aria-hidden="true">#</a></h3><ul><li>为啥要用proxy拦截? ( 请阅读：<a href="https://yanxuewen.cn/2021/07/17/principle-learn-01/" target="_blank" rel="noreferrer">响应式根基：Object.defineProperty 与 Proxy 拦截区别</a> )</li><li>为啥要用WeakMap？ <ul><li>原因：可被垃圾回收器自动回收，而Map不会被垃圾回收器自动回收，需要手动清理。否则会造成内存泄漏</li></ul></li><li>为啥要用Reflect获取对象属性和设置对象属性？ <ul><li>原因1：保证不管存不存在原型链继承，都能保存操作正确。</li><li>原因2：语义更明确，避免异常抛出等</li></ul></li></ul><hr><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h2><ul><li>watchEffect : 暂存当前匿名函数</li><li>proxy：对象访问拦截</li><li>dep：依赖收集</li></ul><blockquote><p>demo 源码：<a href="https://github.com/yxw007/vue-principle-learn/blob/master/vue-3-min/reactivity/reactivity.html" target="_blank" rel="noreferrer">vue-principle-learn</a></p></blockquote><blockquote><p>为了方便记牢响应式原理，记住这3个角色便于以后快速回忆起响应式原理。</p></blockquote><hr><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-hidden="true">#</a></h2><ul><li><a href="https://www.bilibili.com/video/BV1rC4y187Vw" target="_blank" rel="noreferrer">【课程】Vue 3 Deep Dive with Evan You 【中英字幕】- Vue Mastery</a></li></ul>',20),n=[r];function c(d,h,o,s,p,u){return i(),l("div",null,n)}const g=e(a,[["render",c]]);export{_ as __pageData,g as default};
