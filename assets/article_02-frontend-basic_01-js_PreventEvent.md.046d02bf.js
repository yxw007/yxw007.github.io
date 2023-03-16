import{_ as s,c as a,o as n,A as e}from"./app.28f53c98.js";const u=JSON.parse('{"title":"屏蔽：键盘按键、鼠标点击事件","description":"","frontmatter":{"title":"屏蔽：键盘按键、鼠标点击事件","author":"Potter","date":"2022-05-12 18:50","tags":["事件屏蔽"],"categories":["H5"]},"headers":[{"level":3,"title":"概要内容","slug":"概要内容","link":"#概要内容","children":[]},{"level":3,"title":"屏蔽-键盘按键","slug":"屏蔽-键盘按键","link":"#屏蔽-键盘按键","children":[]},{"level":3,"title":"屏蔽-鼠标点击","slug":"屏蔽-鼠标点击","link":"#屏蔽-鼠标点击","children":[]},{"level":3,"title":"屏蔽-BackSpace","slug":"屏蔽-backspace","link":"#屏蔽-backspace","children":[]}],"relativePath":"article/02-frontend-basic/01-js/PreventEvent.md","lastUpdated":1678977386000}'),l={name:"article/02-frontend-basic/01-js/PreventEvent.md"},p=e(`<h3 id="概要内容" tabindex="-1">概要内容 <a class="header-anchor" href="#概要内容" aria-hidden="true">#</a></h3><ul><li>屏蔽-键盘按键</li><li>屏蔽-鼠标点击</li><li>屏蔽-BackSpace</li></ul><h3 id="屏蔽-键盘按键" tabindex="-1">屏蔽-键盘按键 <a class="header-anchor" href="#屏蔽-键盘按键" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">//添加按键监听</span></span>
<span class="line"><span style="color:#A6ACCD;">window.addEventListener(&#39;keydown&#39;, this.onKeyDown,true);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//移除按键监听</span></span>
<span class="line"><span style="color:#A6ACCD;">window.removeEventListener(&quot;keydown&quot;,this.onKeyDown,true);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">onKeyDown(val){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;按下&#39; + val.key);</span></span>
<span class="line"><span style="color:#A6ACCD;">    val.preventDefault();</span></span>
<span class="line"><span style="color:#A6ACCD;">    val.stopPropagation();</span></span>
<span class="line"><span style="color:#A6ACCD;">    val.cancelBubble = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">    window.event.returnValue = false;</span></span>
<span class="line"><span style="color:#A6ACCD;">    window.event.preventDefault();</span></span>
<span class="line"><span style="color:#A6ACCD;">    window.event.stopPropagation();</span></span>
<span class="line"><span style="color:#A6ACCD;">    window.event.cancelBubble = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">    return false;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="屏蔽-鼠标点击" tabindex="-1">屏蔽-鼠标点击 <a class="header-anchor" href="#屏蔽-鼠标点击" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">//添加鼠标点击监听</span></span>
<span class="line"><span style="color:#A6ACCD;">window.addEventListener(&#39;mousedown&#39;,this.onClick,true);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//移除鼠标点击监听</span></span>
<span class="line"><span style="color:#A6ACCD;">window.removeEventListener(&#39;mousedown&#39;,this.onClick,true);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//which: 1-左键 2-中键 3-右键</span></span>
<span class="line"><span style="color:#A6ACCD;">onClick(val){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.error(&#39;点击&#39; + val.which);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return false;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="屏蔽-backspace" tabindex="-1">屏蔽-BackSpace <a class="header-anchor" href="#屏蔽-backspace" aria-hidden="true">#</a></h3><p>在IE页面跳转过程中，按BackSpace退格键默认返回上此浏览页，导致路由中断引起(Vue)页面卡死，所以需要在IE中屏蔽掉BackSpce退格键，但是在输入框中则不屏蔽。</p><ul><li>preventBackSpce.js：</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">export const banBackSpace = (e) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let ev = e || window.event</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 各种浏览器下获取事件对象</span></span>
<span class="line"><span style="color:#A6ACCD;">  let obj = ev.relatedTarget || ev.srcElement || ev.target || ev.currentTarget</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 按下Backspace键</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (ev.keyCode === 8) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 标签名称</span></span>
<span class="line"><span style="color:#A6ACCD;">    let tagName = obj.nodeName.toLowerCase();</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 如果标签不是input或者textarea则阻止Backspace</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (tagName !== &#39;input&#39; &amp;&amp; tagName !== &#39;textarea&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return stopIt(ev)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    let tagType = obj.type.toLowerCase() // 标签类型</span></span>
<span class="line"><span style="color:#A6ACCD;">    // input标签除了下面几种类型，全部阻止Backspace</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (tagName === &#39;input&#39; &amp;&amp; (tagType !== &#39;text&#39; &amp;&amp; tagType !== &#39;textarea&#39; &amp;&amp; tagType !== &#39;password&#39;)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return stopIt(ev)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // input或者textarea输入框如果不可编辑则阻止Backspace</span></span>
<span class="line"><span style="color:#A6ACCD;">    if ((tagName === &#39;input&#39; || tagName === &#39;textarea&#39;) &amp;&amp; (obj.readOnly === true || obj.disabled === true)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return stopIt(ev)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function stopIt(ev) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (ev.preventDefault) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // preventDefault()方法阻止元素发生默认的行为</span></span>
<span class="line"><span style="color:#A6ACCD;">    ev.preventDefault()</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (ev.returnValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // IE浏览器下用window.event.returnValue = false;实现阻止元素发生默认的行为</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return false</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>使用方法：</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">1. 在需要使用的Vue页面引入组件(一般在main.vue中添加)</span></span>
<span class="line"><span style="color:#A6ACCD;">import {banBackSpace} from &quot;@/util/preventBackspace&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2. mounted 钩子函数挂载事件</span></span>
<span class="line"><span style="color:#A6ACCD;">document.onkeypress = banBackSpace;</span></span>
<span class="line"><span style="color:#A6ACCD;">document.onkeydown = banBackSpace;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><hr><blockquote><p>以上: 如发现有问题，欢迎留言指出，我及时更正</p></blockquote>`,14),t=[p];function o(c,i,r,C,A,y){return n(),a("div",null,t)}const D=s(l,[["render",o]]);export{u as __pageData,D as default};
