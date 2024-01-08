import{_ as e,o as a,c as s,B as n}from"./app.8c8f63c8.js";const x=JSON.parse('{"title":"CORS跨域实战","description":"","frontmatter":{"title":"CORS跨域实战","author":"Potter","date":"2022-06-17T16:20:50.000Z","tags":["cors","跨域"],"categories":["web"]},"headers":[{"level":2,"title":"报错示例","slug":"报错示例","link":"#报错示例","children":[]},{"level":2,"title":"解释","slug":"解释","link":"#解释","children":[]},{"level":2,"title":"跨域逻辑","slug":"跨域逻辑","link":"#跨域逻辑","children":[{"level":3,"title":"前端","slug":"前端","link":"#前端","children":[]},{"level":3,"title":"后端","slug":"后端","link":"#后端","children":[]},{"level":3,"title":"nginx：针对API 服务配置跨域，而不是Web服务","slug":"nginx-针对api-服务配置跨域-而不是web服务","link":"#nginx-针对api-服务配置跨域-而不是web服务","children":[]},{"level":3,"title":"API Server (Nodejs)","slug":"api-server-nodejs","link":"#api-server-nodejs","children":[]}]}],"relativePath":"article/06-misc/web/CORS跨域实战.md","lastUpdated":1704702711000}'),l={name:"article/06-misc/web/CORS跨域实战.md"},r=n(`<h1 id="cors跨域实战" tabindex="-1">CORS跨域实战 <a class="header-anchor" href="#cors跨域实战" aria-hidden="true">#</a></h1><h2 id="报错示例" tabindex="-1">报错示例 <a class="header-anchor" href="#报错示例" aria-hidden="true">#</a></h2><p>[Error] Origin <a href="http://qt.e7show.com" target="_blank" rel="noreferrer">http://qt.e7show.com</a> is not allowed by Access-Control-Allow-Origin. [Error] XMLHttpRequest cannot load https://<strong>e7show-resouce.oss-cn-shenzhen.aliyuncs.com</strong>/template/QW_ORDER_LIST_TEMPLATE.xlsx due to <strong>access control checks.</strong> [Error] Failed to load resource: Origin <a href="http://qt.e7show.com" target="_blank" rel="noreferrer">http://qt.e7show.com</a> is not allowed by Access-Control-Allow-Origin. (QW_ORDER_LIST_TEMPLATE.xlsx, line 0)</p><h2 id="解释" tabindex="-1">解释 <a class="header-anchor" href="#解释" aria-hidden="true">#</a></h2><ul><li>Origin ： 访问起源 <strong>qt.e7show.com</strong></li><li><strong>access control checks：检查访问控制，是检查被访问域名的控制 e7show-resouce.oss-cn-shenzhen.aliyuncs.com</strong></li></ul><h2 id="跨域逻辑" tabindex="-1">跨域逻辑 <a class="header-anchor" href="#跨域逻辑" aria-hidden="true">#</a></h2><ul><li>域名：<a href="https://a.xxx.com" target="_blank" rel="noreferrer">a.xxx.com</a> 访问 <a href="http://b.xxx.com" target="_blank" rel="noreferrer">b.xxx.com</a> ，说明a.xxx.com 跨域访问b.xxx.com</li><li>如果 <a href="http://xn--b-ch1b464b.xxx.com" target="_blank" rel="noreferrer">b.xxx.com</a> 设置能允许被跨域访问，请求就会被放行，如果没有设置就会报CORS 错误</li><li>如果仔细思考一下就知道逻辑，当前加载的页面是无法控制别的域名访问控制的，只能控制自己的域名被访问控制</li></ul><blockquote><p><strong>特别注意：跨域访问设置Access-Control-Allow-xxx 是设置的被访问的域名b.xxx.com，而不是当前发起访问的域名a.xxx.com</strong></p></blockquote><hr><h1 id="正确配置跨域-3个关键点-真实心得" tabindex="-1">正确配置跨域，3个关键点（真实心得） <a class="header-anchor" href="#正确配置跨域-3个关键点-真实心得" aria-hidden="true">#</a></h1><blockquote><p>重点提示：跨域问题不在前端而在后端</p></blockquote><hr><h3 id="前端" tabindex="-1">前端 <a class="header-anchor" href="#前端" aria-hidden="true">#</a></h3><blockquote><p>请求使用到的header字段梳理并告知后端</p></blockquote><hr><h3 id="后端" tabindex="-1">后端 <a class="header-anchor" href="#后端" aria-hidden="true">#</a></h3><h3 id="nginx-针对api-服务配置跨域-而不是web服务" tabindex="-1">nginx：针对API 服务配置跨域，而不是Web服务 <a class="header-anchor" href="#nginx-针对api-服务配置跨域-而不是web服务" aria-hidden="true">#</a></h3><blockquote><p>疑问1：nginx 其实就是转换请求，所以需要配置。 注意：Access-Control-Allow-Origin *，必须加在Nginx层，否则请求不会转换至api server 层，所以api server 层的Access-Control-Allow-Origin * 可以去掉，否则会报：</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">location /secret-http-api/ {</span></span>
<span class="line"><span style="color:#babed8;">            proxy_pass &lt;http://127.0.0.1:3001/&gt;;</span></span>
<span class="line"><span style="color:#babed8;">            proxy_read_timeout 240s;</span></span>
<span class="line"><span style="color:#babed8;">            add_header Access-Control-Allow-Origin *;</span></span>
<span class="line"><span style="color:#babed8;">            add_header Access-Control-Allow-Methods &#39;GET, POST, OPTIONS&#39;;</span></span>
<span class="line"><span style="color:#babed8;">            add_header Access-Control-Allow-Headers &#39;Content-Type,Authorization,Content-Encoding,Accept-Encoding&#39;;</span></span>
<span class="line"><span style="color:#babed8;">            if ($request_method = &#39;OPTIONS&#39;) {</span></span>
<span class="line"><span style="color:#babed8;">                return 204;</span></span>
<span class="line"><span style="color:#babed8;">            }</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><hr><h3 id="api-server-nodejs" tabindex="-1">API Server (Nodejs) <a class="header-anchor" href="#api-server-nodejs" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">        app.use(function (req, res, next) {</span></span>
<span class="line"><span style="color:#babed8;">    if (req.path !== &#39;/&#39; &amp;&amp; !req.path.includes(&#39;.&#39;)) {</span></span>
<span class="line"><span style="color:#babed8;">        res.set({</span></span>
<span class="line"><span style="color:#babed8;">            /* 允许后端发送cookie*/</span></span>
<span class="line"><span style="color:#babed8;">            // &#39;Access-Control-Allow-Credentials&#39;: true,</span></span>
<span class="line"><span style="color:#babed8;">            /*任意域名都可以访问,或者基于我请求头里面的域*/</span></span>
<span class="line"><span style="color:#babed8;">            // &#39;Access-Control-Allow-Origin&#39;: &#39;*&#39;,</span></span>
<span class="line"><span style="color:#babed8;">            /*允许请求头字段*/</span></span>
<span class="line"><span style="color:#babed8;">            &#39;Access-Control-Allow-Headers&#39;: &#39;Accept,Content-Encoding,Content-Type,Accept-Encoding&#39;,</span></span>
<span class="line"><span style="color:#babed8;">            /*允许请求方式*/</span></span>
<span class="line"><span style="color:#babed8;">            &#39;Access-Control-Allow-Methods&#39;: &#39;POST,GET,OPTIONS&#39;,</span></span>
<span class="line"><span style="color:#babed8;">            /*预检成功后相同请求无需预检的有效时间(单位：秒)*/</span></span>
<span class="line"><span style="color:#babed8;">            &#39;Access-Control-Max-Age&#39;: 3600,</span></span>
<span class="line"><span style="color:#babed8;">            /*默认与允许的文本格式json和编码格式*/</span></span>
<span class="line"><span style="color:#babed8;">            &#39;Content-Type&#39;: &#39;text/plain; charset=utf-8&#39;</span></span>
<span class="line"><span style="color:#babed8;">        })</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">    req.method === &#39;OPTIONS&#39; ? res.status(204).end() : next()</span></span>
<span class="line"><span style="color:#babed8;">});</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h1 id="参考文章" tabindex="-1">参考文章 <a class="header-anchor" href="#参考文章" aria-hidden="true">#</a></h1><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS#%E4%BB%80%E4%B9%88%E6%83%85%E5%86%B5%E4%B8%8B%E9%9C%80%E8%A6%81_cors_%EF%BC%9F" target="_blank" rel="noreferrer">跨源资源共享</a></li><li><a href="https://segmentfault.com/a/1190000022512695" target="_blank" rel="noreferrer">Node设置cors,后端解决跨域问题</a></li><li><a href="https://segmentfault.com/a/1190000009971254" target="_blank" rel="noreferrer">cors跨域之简单请求与预检请求（发送请求头带令牌token）</a></li><li><a href="https://blog.yiguochen.com/options-cors.html" target="_blank" rel="noreferrer">OPTIONS 方法在跨域请求（CORS）中的应用</a></li><li><a href="https://segmentfault.com/a/1190000012550346" target="_blank" rel="noreferrer">Nginx配置跨域请求 Access-Control-Allow-Origin *</a></li></ul>`,24),o=[r];function t(c,p,i,d,h,b){return a(),s("div",null,o)}const u=e(l,[["render",t]]);export{x as __pageData,u as default};
