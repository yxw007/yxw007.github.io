import{_ as s,c as e,o as n,A as a}from"./app.88061379.js";const g=JSON.parse('{"title":"CORS-跨域实战","description":"","frontmatter":{"title":"CORS-跨域实战","author":"Potter","date":"2022-05-12 18:41","tags":["Web","Vue.js","Node.js","Express"],"categories":["部署"]},"headers":[{"level":3,"title":"概要内容","slug":"概要内容","link":"#概要内容","children":[]},{"level":3,"title":"前端需要做什么?","slug":"前端需要做什么","link":"#前端需要做什么","children":[]},{"level":3,"title":"后端需要怎么配置?","slug":"后端需要怎么配置","link":"#后端需要怎么配置","children":[{"level":4,"title":"Nginx","slug":"nginx","link":"#nginx","children":[]},{"level":4,"title":"API Server (Nodejs)","slug":"api-server-nodejs","link":"#api-server-nodejs","children":[]}]},{"level":3,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"relativePath":"article/02-frontend-basic/01-js/JS03.md","lastUpdated":1678887599000}'),l={name:"article/02-frontend-basic/01-js/JS03.md"},t=a(`<h3 id="概要内容" tabindex="-1">概要内容 <a class="header-anchor" href="#概要内容" aria-hidden="true">#</a></h3><ul><li>前端需要做什么?</li><li>后端需要怎么配置?</li></ul><blockquote><p>由于浏览器的同源安全策略，作为前端开发你使用API调用接口必定会碰到跨域问题，网上太多的文章，大部分都是讲得不太清楚，让你看得特别懵逼，让你可能会做出以下愚蠢行为：跨域配置写到前端的header中、Nginx 跨域配置到Web节点中、瞎填Access-Control-Allow-Headers中的值等等，会导致怎么配置都不对，令你自己发狂。经验提醒：不要急着瞎改瞎试，看完理论相关文章后再尝试，然后静下心来思考流程是怎么运转的，用这样的方式很快就会配对了。以下是我成功跨域配置，希望给你提供一点帮助。</p></blockquote><hr><h3 id="前端需要做什么" tabindex="-1">前端需要做什么? <a class="header-anchor" href="#前端需要做什么" aria-hidden="true">#</a></h3><blockquote><p>请求时使用到的header字段梳理并告知后端 <img src="https://cdn.jsdelivr.net/gh/aa4790139/BlogPicBed@master//img/20210126175710.png" alt=""></p></blockquote><hr><h3 id="后端需要怎么配置" tabindex="-1">后端需要怎么配置? <a class="header-anchor" href="#后端需要怎么配置" aria-hidden="true">#</a></h3><h4 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-hidden="true">#</a></h4><blockquote><p>注意：针对API 服务配置跨域，而不是Web服务</p></blockquote><ul><li>疑问1：为啥要配置nginx,因为请求需要转换，所以需要配置</li><li>注意：Access-Control-Allow-Origin *，必须加在Nginx层，否则请求不会转换至api server 层，所以api server 层的Access-Control-Allow-Origin * 可以去掉，否则会报： <img src="https://cdn.jsdelivr.net/gh/aa4790139/BlogPicBed@master//img/20210126211841.png" alt=""></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">location /secret-http-api/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_pass http://127.0.0.1:3001/;</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_read_timeout 240s;</span></span>
<span class="line"><span style="color:#A6ACCD;">            add_header Access-Control-Allow-Origin *;</span></span>
<span class="line"><span style="color:#A6ACCD;">            add_header Access-Control-Allow-Methods &#39;GET, POST, OPTIONS&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">            add_header Access-Control-Allow-Headers &#39;Content-Type,Authorization,Content-Encoding,Accept-Encoding&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">            if ($request_method = &#39;OPTIONS&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                return 204;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><hr><h4 id="api-server-nodejs" tabindex="-1">API Server (Nodejs) <a class="header-anchor" href="#api-server-nodejs" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">        app.use(function (req, res, next) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (req.path !== &#39;/&#39; &amp;&amp; !req.path.includes(&#39;.&#39;)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        res.set({</span></span>
<span class="line"><span style="color:#A6ACCD;">            /* 允许后端发送cookie*/</span></span>
<span class="line"><span style="color:#A6ACCD;">            // &#39;Access-Control-Allow-Credentials&#39;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            /*任意域名都可以访问,或者基于我请求头里面的域*/</span></span>
<span class="line"><span style="color:#A6ACCD;">            // &#39;Access-Control-Allow-Origin&#39;: &#39;*&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            /*允许请求头字段*/</span></span>
<span class="line"><span style="color:#A6ACCD;">            // &#39;Access-Control-Allow-Headers&#39;: &#39;Accept,Content-Encoding,Content-Type,Accept-Encoding&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            /*允许请求方式*/</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;Access-Control-Allow-Methods&#39;: &#39;POST,GET,OPTIONS&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            /*预检成功后相同请求无需预检的有效时间(单位：秒)*/</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;Access-Control-Max-Age&#39;: 3600,</span></span>
<span class="line"><span style="color:#A6ACCD;">            /*默认与允许的文本格式json和编码格式*/</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;Content-Type&#39;: &#39;text/plain; charset=utf-8&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    req.method === &#39;OPTIONS&#39; ? res.status(204).end() : next()</span></span>
<span class="line"><span style="color:#A6ACCD;">});     </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="参考文章" tabindex="-1">参考文章 <a class="header-anchor" href="#参考文章" aria-hidden="true">#</a></h3><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS#%E4%BB%80%E4%B9%88%E6%83%85%E5%86%B5%E4%B8%8B%E9%9C%80%E8%A6%81_cors_%EF%BC%9F" target="_blank" rel="noreferrer">跨源资源共享</a></li><li><a href="https://segmentfault.com/a/1190000022512695" target="_blank" rel="noreferrer">Node设置cors,后端解决跨域问题</a></li><li><a href="https://segmentfault.com/a/1190000009971254" target="_blank" rel="noreferrer">cors跨域之简单请求与预检请求（发送请求头带令牌token）</a></li><li><a href="https://blog.yiguochen.com/options-cors.html" target="_blank" rel="noreferrer">OPTIONS 方法在跨域请求（CORS）中的应用</a></li><li><a href="https://segmentfault.com/a/1190000012550346" target="_blank" rel="noreferrer">Nginx配置跨域请求 Access-Control-Allow-Origin *</a></li></ul><blockquote><p>以上: 如发现有问题，欢迎留言指出，我及时更正</p></blockquote>`,18),o=[t];function r(p,c,i,d,A,C){return n(),e("div",null,o)}const u=s(l,[["render",r]]);export{g as __pageData,u as default};
