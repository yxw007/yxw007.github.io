import{_ as a,c as n,o as s,a7 as e}from"./chunks/framework.GnyprNw9.js";const b=JSON.parse('{"title":"屏蔽：键盘按键、鼠标点击事件","description":"","frontmatter":{"title":"屏蔽：键盘按键、鼠标点击事件","author":"Potter","date":"2022-05-12 18:50","tags":["事件屏蔽"],"categories":["H5"]},"headers":[],"relativePath":"article/02-frontend-basic/01-js/PreventEvent.md","filePath":"article/02-frontend-basic/01-js/PreventEvent.md","lastUpdated":1719992488000}'),p={name:"article/02-frontend-basic/01-js/PreventEvent.md"},l=e(`<h1 id="屏蔽-键盘按键、鼠标点击事件" tabindex="-1">屏蔽：键盘按键、鼠标点击事件 <a class="header-anchor" href="#屏蔽-键盘按键、鼠标点击事件" aria-label="Permalink to &quot;屏蔽：键盘按键、鼠标点击事件&quot;">​</a></h1><h3 id="概要内容" tabindex="-1">概要内容 <a class="header-anchor" href="#概要内容" aria-label="Permalink to &quot;概要内容&quot;">​</a></h3><ul><li>屏蔽-键盘按键</li><li>屏蔽-鼠标点击</li><li>屏蔽-BackSpace</li></ul><h3 id="屏蔽-键盘按键" tabindex="-1">屏蔽-键盘按键 <a class="header-anchor" href="#屏蔽-键盘按键" aria-label="Permalink to &quot;屏蔽-键盘按键&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//添加按键监听</span></span>
<span class="line"><span>window.addEventListener(&#39;keydown&#39;, this.onKeyDown,true);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//移除按键监听</span></span>
<span class="line"><span>window.removeEventListener(&quot;keydown&quot;,this.onKeyDown,true);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>onKeyDown(val){</span></span>
<span class="line"><span>    console.log(&#39;按下&#39; + val.key);</span></span>
<span class="line"><span>    val.preventDefault();</span></span>
<span class="line"><span>    val.stopPropagation();</span></span>
<span class="line"><span>    val.cancelBubble = true;</span></span>
<span class="line"><span>    window.event.returnValue = false;</span></span>
<span class="line"><span>    window.event.preventDefault();</span></span>
<span class="line"><span>    window.event.stopPropagation();</span></span>
<span class="line"><span>    window.event.cancelBubble = true;</span></span>
<span class="line"><span>    return false;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="屏蔽-鼠标点击" tabindex="-1">屏蔽-鼠标点击 <a class="header-anchor" href="#屏蔽-鼠标点击" aria-label="Permalink to &quot;屏蔽-鼠标点击&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//添加鼠标点击监听</span></span>
<span class="line"><span>window.addEventListener(&#39;mousedown&#39;,this.onClick,true);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//移除鼠标点击监听</span></span>
<span class="line"><span>window.removeEventListener(&#39;mousedown&#39;,this.onClick,true);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//which: 1-左键 2-中键 3-右键</span></span>
<span class="line"><span>onClick(val){</span></span>
<span class="line"><span>    console.error(&#39;点击&#39; + val.which);</span></span>
<span class="line"><span>    return false;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="屏蔽-backspace" tabindex="-1">屏蔽-BackSpace <a class="header-anchor" href="#屏蔽-backspace" aria-label="Permalink to &quot;屏蔽-BackSpace&quot;">​</a></h3><p>在IE页面跳转过程中，按BackSpace退格键默认返回上此浏览页，导致路由中断引起(Vue)页面卡死，所以需要在IE中屏蔽掉BackSpce退格键，但是在输入框中则不屏蔽。</p><ul><li>preventBackSpce.js：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export const banBackSpace = (e) =&gt; {</span></span>
<span class="line"><span>  let ev = e || window.event</span></span>
<span class="line"><span>  // 各种浏览器下获取事件对象</span></span>
<span class="line"><span>  let obj = ev.relatedTarget || ev.srcElement || ev.target || ev.currentTarget</span></span>
<span class="line"><span>  // 按下Backspace键</span></span>
<span class="line"><span>  if (ev.keyCode === 8) {</span></span>
<span class="line"><span>    // 标签名称</span></span>
<span class="line"><span>    let tagName = obj.nodeName.toLowerCase();</span></span>
<span class="line"><span>    // 如果标签不是input或者textarea则阻止Backspace</span></span>
<span class="line"><span>    if (tagName !== &#39;input&#39; &amp;&amp; tagName !== &#39;textarea&#39;) {</span></span>
<span class="line"><span>      return stopIt(ev)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    let tagType = obj.type.toLowerCase() // 标签类型</span></span>
<span class="line"><span>    // input标签除了下面几种类型，全部阻止Backspace</span></span>
<span class="line"><span>    if (tagName === &#39;input&#39; &amp;&amp; (tagType !== &#39;text&#39; &amp;&amp; tagType !== &#39;textarea&#39; &amp;&amp; tagType !== &#39;password&#39;)) {</span></span>
<span class="line"><span>      return stopIt(ev)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // input或者textarea输入框如果不可编辑则阻止Backspace</span></span>
<span class="line"><span>    if ((tagName === &#39;input&#39; || tagName === &#39;textarea&#39;) &amp;&amp; (obj.readOnly === true || obj.disabled === true)) {</span></span>
<span class="line"><span>      return stopIt(ev)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function stopIt(ev) {</span></span>
<span class="line"><span>  if (ev.preventDefault) {</span></span>
<span class="line"><span>    // preventDefault()方法阻止元素发生默认的行为</span></span>
<span class="line"><span>    ev.preventDefault()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if (ev.returnValue) {</span></span>
<span class="line"><span>    // IE浏览器下用window.event.returnValue = false;实现阻止元素发生默认的行为</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return false</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>使用方法：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 在需要使用的Vue页面引入组件(一般在main.vue中添加)</span></span>
<span class="line"><span>import {banBackSpace} from &quot;@/util/preventBackspace&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. mounted 钩子函数挂载事件</span></span>
<span class="line"><span>document.onkeypress = banBackSpace;</span></span>
<span class="line"><span>document.onkeydown = banBackSpace;</span></span></code></pre></div><hr><blockquote><p>以上: 如发现有问题，欢迎留言指出，我及时更正</p></blockquote>`,15),t=[l];function i(c,o,r,d,u,v){return s(),n("div",null,t)}const m=a(p,[["render",i]]);export{b as __pageData,m as default};
