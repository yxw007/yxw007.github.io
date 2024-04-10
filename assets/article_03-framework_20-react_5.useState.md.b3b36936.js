import{_ as s,o as a,c as n,B as e}from"./app.69f741f6.js";const d=JSON.parse('{"title":"5. React18 - useState","description":"","frontmatter":{},"headers":[{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":2,"title":"实现原理","slug":"实现原理","link":"#实现原理","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"relativePath":"article/03-framework/20-react/5.useState.md","lastUpdated":1712745201000}'),l={name:"article/03-framework/20-react/5.useState.md"},o=e(`<h1 id="_5-react18-usestate" tabindex="-1">5. React18 - useState <a class="header-anchor" href="#_5-react18-usestate" aria-hidden="true">#</a></h1><hr><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-hidden="true">#</a></h2><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">*</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#BABED8;"> React </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">createRoot</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">react-dom/client</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">FunctionComponent</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">number</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">setNumber</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">React</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">useState</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={()</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">setNumber</span><span style="color:#F07178;">(</span><span style="color:#BABED8;font-style:italic;">number</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">number</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#676E95;font-style:italic;">//0</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}}&gt;{</span><span style="color:#BABED8;">number</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> element </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">FunctionComponent</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> root </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">createRoot</span><span style="color:#BABED8;">(document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">root</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#BABED8;">(element)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="实现原理" tabindex="-1">实现原理 <a class="header-anchor" href="#实现原理" aria-hidden="true">#</a></h2><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20240410183028.svg" alt=""></p><p>详细流程图：<a href="https://app.diagrams.net/#G1_bOuJ9OdaQQhLKgCo6XtW_p6onKr-Mkm#%7B%22pageId%22%3A%22gINCcu49F0h3ws6Z-8CI%22%7D" target="_blank" rel="noreferrer">https://app.diagrams.net/#G1_bOuJ9OdaQQhLKgCo6XtW_p6onKr-Mkm#{&quot;pageId&quot;%3A&quot;gINCcu49F0h3ws6Z-8CI&quot;}</a></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h2><ol><li>useState其实也是一个useReducer hook，只是内部内置了baseStateReducer函数</li><li>初次渲染，走mount流程 <ul><li>构建Fiber树</li><li>创建Function component fiber时，建立ReactCurrentDispatcher.current与HooksDispatcherOnMount的关联</li><li>执行Function Component 函数，执行React.useState(HooksDispatcherOnMount)，构建fiber的hook 单向链表</li><li>hook.memoizedState放置initial初始值，同时hook.queue.lastRenderedReducer = baseStateReducer</li><li>jsx 就直接引用useState 返回的number值，jsx通过bebal 转义变成Vdom，此时使用的就是newState值，对应的属性也会挂载至Vdom的props上</li></ul></li><li>点击按钮时调用dispatchSetState 的派发方法 <ul><li>执行hook.queue中的lastRenderedReducer拿到最新的newsState，然后将其挂载至update.eagerState上</li><li>重新从root开始构建新的fiber树</li><li>建立ReactCurrentDispatcher.current与HooksDispatcherOnUpdate 的关联</li><li>执行Function Component 函数，执行React.useState(HooksDispatcherOnUpdate )，updateReducer 从hasEagerState拿到最新的newState</li><li>最后jsx通过bebal 转义变成Vdom，此时使用的就是newState值，对应的属性也会挂载至Vdom的props上</li></ul></li></ol>`,9),t=[o];function p(r,c,i,F,D,y){return a(),n("div",null,t)}const B=s(l,[["render",p]]);export{d as __pageData,B as default};
