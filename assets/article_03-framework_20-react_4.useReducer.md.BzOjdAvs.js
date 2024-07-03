import{_ as s,c as i,o as a,a7 as t}from"./chunks/framework.GnyprNw9.js";const g=JSON.parse('{"title":"4.useReducer","description":"","frontmatter":{"title":"4.useReducer","author":"Potter","date":"2024-04-15T10:22:13.000Z","tags":["react"],"categories":["react18"]},"headers":[],"relativePath":"article/03-framework/20-react/4.useReducer.md","filePath":"article/03-framework/20-react/4.useReducer.md","lastUpdated":1719974778000}'),n={name:"article/03-framework/20-react/4.useReducer.md"},e=t(`<h1 id="_4-react18-usereducer" tabindex="-1">4. React18 - useReducer <a class="header-anchor" href="#_4-react18-usereducer" aria-label="Permalink to &quot;4. React18 - useReducer&quot;">​</a></h1><hr><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> React </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;react&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createRoot } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;react-dom/client&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FunctionComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">setNumber</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> React.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">useReducer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">state</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">action</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (action.type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;add&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> state </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> action.payload;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> state;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onClick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    setNumber</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;add&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, payload: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//update1=&gt;update2=&gt;update1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    setNumber</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;add&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, payload: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//update2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }}&gt;{number}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> element </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">FunctionComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> root</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createRoot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;root&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">root.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(element);</span></span></code></pre></div><h2 id="实现原理" tabindex="-1">实现原理 <a class="header-anchor" href="#实现原理" aria-label="Permalink to &quot;实现原理&quot;">​</a></h2><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20240410182947.svg" alt=""></p><p>完整流程图：<a href="https://app.diagrams.net/#G16Kjv05HiqfSzPxsqYDot4-oii-eSWHQr" target="_blank" rel="noreferrer">draw.io (diagrams.net)</a></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><ul><li>初始挂载 <ol><li>初次渲染构建fiber树，建立ReactCurrentDispatcher.current与HooksDispatcherOnMount的关联</li><li>调用Function Component 执行React.useReducer(HooksDispatcherOnMount)，直接拿reducer 的initial值</li><li>jsx 通过bebal 转义Function Component 执行结果得到vdom，此时vdom 就引用hook 的初始值，然后会把初始值放置在vdom的props上</li><li>创建button fiber 会将vdom的props 赋值给fiber.pendingProps</li><li>在完成阶段会将，创建真实button dom 并用fiber.pendingProps设置其属性</li></ol></li><li>点击button按钮，触发调用HooksDispatcherOnMount.useReducer 绑定的dispatchReducerAction 方法，然后开启重新从root 更新 <ul><li>构建新的Fiber树</li><li>建立ReactCurrentDispatcher.current与HooksDispatcherOnUpdate 的关联</li><li>调用FunctionComponent 执行React.useReducer(HooksDispatcherOnUpdate )，拿到newState 状态</li><li>jsx 通过bebal 转义Function Component 执行结果得到vdom，此时vdom 就引用hook 的newState 值，然后会把值放置在vdom的props上</li><li>复用老的button Fiber 节点，将vdom props 放置button fiber.pendingProps 上面</li><li>在完button fiber完成阶段，对比新老props 得到updatePayload 将其挂载至button fiber.updateQueue上面</li></ul></li><li>最后：在commitRoot 阶段，将button fiber.updateQueue 更新至真实Dom节点</li></ul><h2 id="常见疑问" tabindex="-1">常见疑问 <a class="header-anchor" href="#常见疑问" aria-label="Permalink to &quot;常见疑问&quot;">​</a></h2><ul><li>每种类型的节点memoizedState，分别都是存下什么 <ul><li>HostRootFilber.memoizedState：element vdom</li><li>FunctionComponent和其他Fiber：updateQueue</li><li>Hook.memoizedState: reducer 初始值</li></ul></li><li>哪里使用hook.memoizedState，然后给元素进行真实更新的呢？ <ul><li>没并有用直接将hook.memoizedState 在哪里赋值给真实Dom 属性，而是重新通过jsx bebal 编译产生新的虚拟dom时使用了更新newState</li></ul></li></ul>`,11),l=[e];function h(p,k,r,d,o,E){return a(),i("div",null,l)}const u=s(n,[["render",h]]);export{g as __pageData,u as default};
