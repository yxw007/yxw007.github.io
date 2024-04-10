import{_ as e,o as a,c as s,B as l}from"./app.6d4f2e95.js";const u=JSON.parse('{"title":"实现一个将JSON转markdown table的vscode插件","description":"","frontmatter":{},"headers":[{"level":2,"title":"准备","slug":"准备","link":"#准备","children":[]},{"level":2,"title":"快速生成插件项目","slug":"快速生成插件项目","link":"#快速生成插件项目","children":[]},{"level":2,"title":"修改项目","slug":"修改项目","link":"#修改项目","children":[]},{"level":2,"title":"发布","slug":"发布","link":"#发布","children":[]},{"level":2,"title":"安装插件测试","slug":"安装插件测试","link":"#安装插件测试","children":[]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"relativePath":"article/04-practic/vscode/实现一个将JSON转markdown table的vscode插件.md","lastUpdated":1712743479000}'),n={name:"article/04-practic/vscode/实现一个将JSON转markdown table的vscode插件.md"},t=l(`<h1 id="实现一个将json转markdown-table的vscode插件" tabindex="-1">实现一个将JSON转markdown table的vscode插件 <a class="header-anchor" href="#实现一个将json转markdown-table的vscode插件" aria-hidden="true">#</a></h1><h2 id="准备" tabindex="-1">准备 <a class="header-anchor" href="#准备" aria-hidden="true">#</a></h2><ol><li><p><a href="https://login.live.com/" target="_blank" rel="noreferrer">注册Microsoft 账号</a></p></li><li><p><a href="https://login.microsoftonline.com/common/oauth2/authorize?client_id=499b84ac-1321-427f-aa17-267ca6975798&amp;site_id=501454&amp;response_mode=form_post&amp;response_type=code+id_token&amp;redirect_uri=https%3A%2F%2Fapp.vssps.visualstudio.com%2F_signedin&amp;nonce=902323fe-1c94-4666-afa8-07cc8bf7402e&amp;state=realm%3Daex.dev.azure.com%26reply_to%3Dhttps%253A%252F%252Faex.dev.azure.com%252Fsignup%253FacquisitionId%253D015cfa9b-53cd-4373-9145-264d43b1e8a2%2526acquisitionType%253DbyDefault%26ht%3D3%26mkt%3Dzh-CN%26nonce%3D902323fe-1c94-4666-afa8-07cc8bf7402e&amp;resource=https%3A%2F%2Fmanagement.core.windows.net%2F&amp;cid=902323fe-1c94-4666-afa8-07cc8bf7402e&amp;wsucxt=1&amp;githubsi=true&amp;msaoauth2=true&amp;mkt=zh-CN" target="_blank" rel="noreferrer">azure平台创建Publisher</a> (温馨提示：如果无法创建Publisher，尝试换个浏览器试试，我就是chrome点击创建没反应，改成edge就可以了)</p></li><li><p><a href="https://dev.azure.com/" target="_blank" rel="noreferrer">创建Person access token</a></p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20240410175658.png" alt=""></p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20240410175724.png" alt=""></p><blockquote><p>提示：点击create后记得保存token，后面发布插件至vscode marketplace 需要用到</p></blockquote></li></ol><h2 id="快速生成插件项目" tabindex="-1">快速生成插件项目 <a class="header-anchor" href="#快速生成插件项目" aria-hidden="true">#</a></h2><ul><li><p>全局安装插件模板</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">npm install -g yo</span></span>
<span class="line"><span style="color:#FFCB6B;">npm install -g generator-code</span></span>
<span class="line"></span></code></pre></div></li><li><p>根据模板生成插件项目</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yo code extensionProject</span></span>
<span class="line"></span></code></pre></div><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20240410175746.png" alt=""></p></li></ul><h2 id="修改项目" tabindex="-1">修改项目 <a class="header-anchor" href="#修改项目" aria-hidden="true">#</a></h2><ul><li><p>package.json</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20240410175758.png" alt=""></p><ol><li>入口文件</li><li>azure创建的Publisher</li><li>配置快捷键和命令title</li></ol></li><li><p>extension.js</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20240410175807.png" alt=""></p><ul><li>注意：框出来注册的命名名称，必须与package.json 中配置的command对应一致，否则就会导致快捷键无效问题</li><li>activate 函数就是写插件代码的地方</li></ul></li></ul><h2 id="发布" tabindex="-1">发布 <a class="header-anchor" href="#发布" aria-hidden="true">#</a></h2><ul><li><p>安装vsce</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">vsce</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">login</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">Publisher</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Publisher 就是创建Publisher名称</span></span>
<span class="line"></span></code></pre></div></li><li><p>打包插件成vsix文件（可用于本地安装）</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">vsce</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">package</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 工程根目录下会生成一个xxx.vsix 文件</span></span>
<span class="line"></span></code></pre></div></li><li><p>发布到vscode marketplace</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">vsce</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">publish</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 注意：会提示输入个人访问令牌,就填前面生成个人令牌是保存的值</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 提示：发布成功后需要过几分才能在marketplace上搜索到</span></span>
<span class="line"></span></code></pre></div></li></ul><h2 id="安装插件测试" tabindex="-1">安装插件测试 <a class="header-anchor" href="#安装插件测试" aria-hidden="true">#</a></h2><ul><li><p>本地安装，选择打包生成的xxx.vsix文件即可</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20240410175816.png" alt=""></p></li><li><p>marketplace安装：就是正常的搜索安装即可</p></li></ul><p>完整：<a href="https://github.com/yxw007/JsonToMarkdown.git" target="_blank" rel="noreferrer">demo</a></p><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-hidden="true">#</a></h2><ul><li><a href="https://juejin.cn/post/7121381959883816968" target="_blank" rel="noreferrer">https://juejin.cn/post/7121381959883816968</a></li></ul>`,14),i=[t];function p(c,o,r,d,h,m){return a(),s("div",null,i)}const b=e(n,[["render",p]]);export{u as __pageData,b as default};
