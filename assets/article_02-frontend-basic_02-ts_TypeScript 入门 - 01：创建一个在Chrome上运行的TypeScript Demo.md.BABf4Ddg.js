import{_ as s,c as a,o as n,a7 as t}from"./chunks/framework.GnyprNw9.js";const m=JSON.parse('{"title":"TypeScript 入门 - 01：创建一个在Chrome上运行的TypeScript Demo","description":"","frontmatter":{"title":"TypeScript 入门 - 01：创建一个在Chrome上运行的TypeScript Demo","author":"Potter","date":"2022-05-12 18:49","tags":["TypeScript","VSCode","Chrome"],"categories":["TypeScript 入门"]},"headers":[],"relativePath":"article/02-frontend-basic/02-ts/TypeScript 入门 - 01：创建一个在Chrome上运行的TypeScript Demo.md","filePath":"article/02-frontend-basic/02-ts/TypeScript 入门 - 01：创建一个在Chrome上运行的TypeScript Demo.md","lastUpdated":1719974778000}'),e={name:"article/02-frontend-basic/02-ts/TypeScript 入门 - 01：创建一个在Chrome上运行的TypeScript Demo.md"},p=t(`<h1 id="typescript-入门-01-创建一个在chrome上运行的typescript-demo" tabindex="-1">TypeScript 入门 - 01：创建一个在Chrome上运行的TypeScript Demo <a class="header-anchor" href="#typescript-入门-01-创建一个在chrome上运行的typescript-demo" aria-label="Permalink to &quot;TypeScript 入门 - 01：创建一个在Chrome上运行的TypeScript Demo&quot;">​</a></h1><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><blockquote><p>目前使用TypeScript编写前端项目已成为趋势，所以搞一个运行在Chrome的demo 来方便练习一下TypeScript 相关语法。由于技术更新太快，会导致你在网上参考的例子可能已经过时，或者运行不起来。我的建议还是直接先去看官方文档，尝试这编写demo，实在搞不出来再去Google 查找相关文章。</p></blockquote><h2 id="构建环境" tabindex="-1">构建环境 <a class="header-anchor" href="#构建环境" aria-label="Permalink to &quot;构建环境&quot;">​</a></h2><ul><li>vscode：1.53.2</li><li>chrome：87.0.42.80.141</li><li>Node.js：12.8.3</li><li>win10</li></ul><h2 id="具体步骤" tabindex="-1">具体步骤 <a class="header-anchor" href="#具体步骤" aria-label="Permalink to &quot;具体步骤&quot;">​</a></h2><ul><li><p><strong>第一步：创建工程</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//创建目录工程</span></span>
<span class="line"><span>mkdir typescript_chrom_demo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//安装typescript 编译环境（推荐：使用pnpm安装，速度贼快）</span></span>
<span class="line"><span>pnpm install -g typescript</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//初始化工程，会产生tsconfig.json 配置文件</span></span>
<span class="line"><span>tsc ---init</span></span></code></pre></div></li><li><p><strong>第二步：创建目录和相关文件</strong></p><ul><li><p>目录结构效果 <img src="https://cdn.jsdelivr.net/gh/aa4790139/BlogPicBed@master//img/20210304153444.png" alt=""></p></li><li><p>具体内容如下： <strong>helloworld.html</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>   &lt;head&gt;</span></span>
<span class="line"><span>       &lt;title&gt;This is a use TypeScript HTML demo&lt;/title&gt;</span></span>
<span class="line"><span>   &lt;/head&gt;</span></span>
<span class="line"><span>   &lt;body&gt;</span></span>
<span class="line"><span>   &lt;/body&gt;</span></span>
<span class="line"><span>   &lt;script src=&quot;../out/helloworld.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p><strong>helloworld.ts</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let message: string = &#39;Hello Web, I am is TypeSciprt&#39;;</span></span>
<span class="line"><span>console.log(message);</span></span>
<span class="line"><span>document.body.textContent = message;</span></span></code></pre></div><p><strong>tsconfig.json</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span>    &quot;target&quot;: &quot;es5&quot;,                           </span></span>
<span class="line"><span>    &quot;module&quot;: &quot;amd&quot;,                          </span></span>
<span class="line"><span>    &quot;outFile&quot;: &quot;./out/helloworld.js&quot;,         </span></span>
<span class="line"><span>    &quot;strict&quot;: true,                           </span></span>
<span class="line"><span>    &quot;esModuleInterop&quot;: true,                   </span></span>
<span class="line"><span>    &quot;skipLibCheck&quot;: true,                     </span></span>
<span class="line"><span>    &quot;forceConsistentCasingInFileNames&quot;: true  </span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div></li></ul></li><li><p><strong>第三步：创建运行和调试launch.json</strong><img src="https://cdn.jsdelivr.net/gh/aa4790139/BlogPicBed@master//img/20210304153458.png" alt=""><strong>内容如下</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  {</span></span>
<span class="line"><span>      // 使用 IntelliSense 了解相关属性。 </span></span>
<span class="line"><span>      // 悬停以查看现有属性的描述。</span></span>
<span class="line"><span>      // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387</span></span>
<span class="line"><span>      &quot;version&quot;: &quot;0.2.0&quot;,</span></span>
<span class="line"><span>      &quot;configurations&quot;: [</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>              &quot;type&quot;: &quot;pwa-chrome&quot;,</span></span>
<span class="line"><span>              &quot;request&quot;: &quot;launch&quot;,</span></span>
<span class="line"><span>              &quot;name&quot;: &quot;Open helloworld.html&quot;,</span></span>
<span class="line"><span>              &quot;file&quot;: &quot;d:\\\\Work\\\\h5_workspace\\\\typescript_chrome_demo\\\\src\\\\helloworld.html&quot;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>  }</span></span></code></pre></div></li><li><p><strong>第四步：打开终端，开启自动编译typescript</strong></p><pre><code>\`\`\`
tsc -w
\`\`\`

**效果如下**
</code></pre></li><li><p><strong>最后：F5启动运行</strong></p><p><strong>效果如下</strong><img src="https://cdn.jsdelivr.net/gh/aa4790139/BlogPicBed@master//img/20210304153521.png" alt=""></p></li></ul><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://code.visualstudio.com/docs/typescript/typescript-tutorial" target="_blank" rel="noreferrer">TypeScript tutorial in Visual Studio Code</a></li><li><a href="https://code.visualstudio.com/docs/editor/debugging#_start-debugging" target="_blank" rel="noreferrer">VSCode Debugging</a></li><li><a href="https://www.tektutorialshub.com/typescript/typescript-compile-on-save-in-visual-studio-code/" target="_blank" rel="noreferrer">TypeScript Compile on Save in Visual Studio Code</a></li></ul>`,9),l=[p];function i(o,c,r,d,u,h){return n(),a("div",null,l)}const q=s(e,[["render",i]]);export{m as __pageData,q as default};
