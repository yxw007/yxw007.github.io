import{_ as t,c as e,o as a,a7 as l}from"./chunks/framework.GnyprNw9.js";const m=JSON.parse('{"title":"Nuxt 项目实战 - 16：利用CDN+OSS给网站全面提速","description":"","frontmatter":{"title":"Nuxt 项目实战 - 16：利用CDN+OSS给网站全面提速","author":"Potter","date":"2024-07-04 09:47","tags":["Nuxt.js","CDN","OSS","性能优化"],"categories":["Nuxt 项目实战"]},"headers":[],"relativePath":"article/04-practic/Nuxt/Nuxt 项目实战 - 16：利用CDN+OSS给网站全面提速.md","filePath":"article/04-practic/Nuxt/Nuxt 项目实战 - 16：利用CDN+OSS给网站全面提速.md","lastUpdated":1720164609000}'),c={name:"article/04-practic/Nuxt/Nuxt 项目实战 - 16：利用CDN+OSS给网站全面提速.md"},i=l('<h1 id="nuxt-项目实战-16-利用cdn-oss给网站全面提速" tabindex="-1">Nuxt 项目实战 - 16：利用CDN+OSS给网站全面提速 <a class="header-anchor" href="#nuxt-项目实战-16-利用cdn-oss给网站全面提速" aria-label="Permalink to &quot;Nuxt 项目实战 - 16：利用CDN+OSS给网站全面提速&quot;">​</a></h1><h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h2><p>我面试过一些前端同学，同时也看到网上很多前端同学说可以利用CDN加速，提高网站的访问速度，具体如何搞？具体如何配置？估计很多前端都是不知道的，一方面权限所限，另一方面可能只是知道可以利用CDN加速网站，具体如何搞完全不知道，其实我也不太清楚😅。现在我有权限操作打算好好实践一番，让CDN好好给我开发的Nuxt网站提提速。🥰</p><h2 id="创建和配置oss-bucket" tabindex="-1">创建和配置OSS Bucket <a class="header-anchor" href="#创建和配置oss-bucket" aria-label="Permalink to &quot;创建和配置OSS Bucket&quot;">​</a></h2><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/1720150025426.jpg" alt="xx"></p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/1720163991545.jpg" alt=""></p><blockquote><p>注意：读写权限写成私有，避免被别人盗用，其他就按提示填就可以了</p></blockquote><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/1720163993380.jpg" alt=""></p><blockquote><p>提示：记住这个OSS域名，方便后续配置CDN加速域名，需要让加速域名通过CNAME解析到这个OSS域名</p></blockquote><h2 id="创建cdn加速域名" tabindex="-1">创建CDN加速域名 <a class="header-anchor" href="#创建cdn加速域名" aria-label="Permalink to &quot;创建CDN加速域名&quot;">​</a></h2><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/1720163994875.jpg" alt=""></p><blockquote><p>提示：建议创建一个二级域名，类型设置成CNAME，记录值就填成上一步OSS对外公开的域名</p></blockquote><h2 id="上传cdn加速域名证书" tabindex="-1">上传CDN加速域名证书 <a class="header-anchor" href="#上传cdn加速域名证书" aria-label="Permalink to &quot;上传CDN加速域名证书&quot;">​</a></h2><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/1720150026781.png" alt=""></p><blockquote><p>说明：点击证书管理，上传你的CDN域名证书。</p></blockquote><h2 id="完善oss-bucket配置" tabindex="-1">完善OSS Bucket配置 <a class="header-anchor" href="#完善oss-bucket配置" aria-label="Permalink to &quot;完善OSS Bucket配置&quot;">​</a></h2><p>点击绑定域名配置，即可以看到域名转发调用过程，如下图所示：</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/1720163995930.png" alt=""></p><p>点击Bucket授权策略，点击授权，否则会导致无权访问Bucket上的资源 <img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/1720163996665.png" alt="alt text"></p><p>开启TSL并配置TSL启用的版本，如下图所示： <img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/1720163997625.png" alt="alt text"></p><p>开启防盗链，避免其他人引用咋们网站的静态资源（），如下图所示： <img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/1720150027733.png" alt="alt text"></p><blockquote><p>提示：为了避免中途出错，建议先不开启，等整个流程验证走通后再开启，避免问题太多搞不清具体哪步配的有问题。</p></blockquote><h2 id="配置cdn域名-域名管理配置" tabindex="-1">配置CDN域名，域名管理配置 <a class="header-anchor" href="#配置cdn域名-域名管理配置" aria-label="Permalink to &quot;配置CDN域名，域名管理配置&quot;">​</a></h2><blockquote><p>提示：刚开始进入会有提示，可以先使用推荐配置，然后再调整</p></blockquote><p>缓存配置-&gt;配置节点响应头，避免网站访问cdn资源时报跨域错误，如下图所示： <img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/1720163998402.png" alt="alt text"></p><blockquote><p>说明：Access-Control-Allow-Origin 先配置成*，等流程跑通后再调整成你运行访问的域名。其他配置就根据自己的需求来配置。</p></blockquote><p>缓存配置-&gt;性能优化，如下图所示： <img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/1720163999669.png" alt="alt text"></p><h2 id="nuxt项目配置cdn" tabindex="-1">Nuxt项目配置CDN <a class="header-anchor" href="#nuxt项目配置cdn" aria-label="Permalink to &quot;Nuxt项目配置CDN&quot;">​</a></h2><p>nuxt.config.ts配置cdn域名，如下图所示： <img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/1720164000433.png" alt="alt text"></p><blockquote><p>说明：如果你是将nuxt打包后前端静态资源public（提示：nuxt build后，会生成.output目录，至需要把.output/public里面的资源上传就可以了，不要一股脑的把所有资源都上传至OSS）直接上传至你创建OSS Bucket的根目录下的话，此处就直接填CDN加速域名即可。我这么配置的原因是可以动态控制是否使用CDN加速，比如：我测试环境不需要CDN加速，生成环境才需要CDN加速，而且我不想仅将打包后的前端静态资源放置在Bucket根目录下，所以我就动态根据环境加了一个前端，这样后面Bucket可以用于存其他东西，不至于仅存前端网站静态资源，添加前缀就相对比较灵活。</p></blockquote><h2 id="将打包产物上传osst-验证效果" tabindex="-1">将打包产物上传OSSt，验证效果 <a class="header-anchor" href="#将打包产物上传osst-验证效果" aria-label="Permalink to &quot;将打包产物上传OSSt，验证效果&quot;">​</a></h2><p>优化前 <img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/1720150028337.jpg" alt="alt text"></p><p>优化后</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/1720164001163.jpg" alt=""></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><ul><li>CDN加速可以明显提高网站访问速度，减少服务器带宽压力，提高用户体验</li></ul><p>为了提高网站访问速度，提升用户体验，大家赶快去试试吧~ 😄</p><h2 id="参考文章" tabindex="-1">参考文章 <a class="header-anchor" href="#参考文章" aria-label="Permalink to &quot;参考文章&quot;">​</a></h2><ul><li><a href="https://www.jianshu.com/p/c001ac7cdf21" target="_blank" rel="noreferrer">使用阿里云OSS+CDN部署前端页面与加速静态资源</a></li><li><a href="https://help.aliyun.com/zh/oss/user-guide/tutorial-use-static-website-hosting-to-build-a-single-page-application" target="_blank" rel="noreferrer">教程示例：通过静态网站托管部署单页应用</a></li></ul>',39),r=[i];function o(s,n,d,p,h,u){return a(),e("div",null,r)}const x=t(c,[["render",o]]);export{m as __pageData,x as default};
