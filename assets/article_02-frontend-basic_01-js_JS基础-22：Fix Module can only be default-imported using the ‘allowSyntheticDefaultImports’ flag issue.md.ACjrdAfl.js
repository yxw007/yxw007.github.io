import{_ as e,c as t,o as a,a7 as i}from"./chunks/framework.GnyprNw9.js";const f=JSON.parse('{"title":"JS基础-22：Fix Module can only be default-imported using the ‘allowSyntheticDefaultImports’ flag issue","description":"","frontmatter":{"title":"JS基础-22：Fix Module can only be default-imported using the ‘allowSyntheticDefaultImports’ flag issue","tags":["js"],"categories":["js"]},"headers":[],"relativePath":"article/02-frontend-basic/01-js/JS基础-22：Fix Module can only be default-imported using the ‘allowSyntheticDefaultImports’ flag issue.md","filePath":"article/02-frontend-basic/01-js/JS基础-22：Fix Module can only be default-imported using the ‘allowSyntheticDefaultImports’ flag issue.md","lastUpdated":1719974778000}'),s={name:"article/02-frontend-basic/01-js/JS基础-22：Fix Module can only be default-imported using the ‘allowSyntheticDefaultImports’ flag issue.md"},l=i(`<h1 id="js基础-22-fix-module-can-only-be-default-imported-using-the-allowsyntheticdefaultimports-flag-issue" tabindex="-1">JS基础-22：Fix Module can only be default-imported using the ‘allowSyntheticDefaultImports’ flag issue <a class="header-anchor" href="#js基础-22-fix-module-can-only-be-default-imported-using-the-allowsyntheticdefaultimports-flag-issue" aria-label="Permalink to &quot;JS基础-22：Fix Module can only be default-imported using the ‘allowSyntheticDefaultImports’ flag issue&quot;">​</a></h1><hr><h2 id="问题现象" tabindex="-1">问题现象 <a class="header-anchor" href="#问题现象" aria-label="Permalink to &quot;问题现象&quot;">​</a></h2><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/1719551051985.png" alt="Untitled"></p><h2 id="原因" tabindex="-1">原因 <a class="header-anchor" href="#原因" aria-label="Permalink to &quot;原因&quot;">​</a></h2><p>模块采用export = 导出的，没有默认导出。</p><p>尝试在tsconfig.json中添加allowSyntheticDefaultImports 没有任何效果，当然你的场景可能有效，可以试试</p><h2 id="解决方法" tabindex="-1">解决方法 <a class="header-anchor" href="#解决方法" aria-label="Permalink to &quot;解决方法&quot;">​</a></h2><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mime </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;mime&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mimeInstance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (mime </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).default;</span></span></code></pre></div><blockquote><p><strong>提示：由于不知道*as mime后是什么，可以打断点看看，看完你就知道怎么使用了</strong></p></blockquote><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://medium.com/@liwp.stephen/fix-module-can-only-be-default-imported-using-the-allowsyntheticdefaultimports-flag-issue-a033a361c6bf" target="_blank" rel="noreferrer"><strong>Fix Module can only be default-imported using the ‘allowSyntheticDefaultImports’ flag issue</strong></a></li><li><a href="https://itecnote.com/tecnote/r-this-module-is-declared-with-using-export-and-can-only-be-used-with-a-default-import-when-using-the-esmoduleinterop-flag/" target="_blank" rel="noreferrer">https://itecnote.com/tecnote/r-this-module-is-declared-with-using-export-and-can-only-be-used-with-a-default-import-when-using-the-esmoduleinterop-flag/</a></li></ul>`,12),n=[l];function o(r,h,d,p,u,c){return a(),t("div",null,n)}const g=e(s,[["render",o]]);export{f as __pageData,g as default};
