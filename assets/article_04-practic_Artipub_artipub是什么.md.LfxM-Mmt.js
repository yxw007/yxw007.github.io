import{_ as t,c as a,o as r,a3 as e}from"./chunks/framework.fzQw_xmO.js";const m=JSON.parse('{"title":"artipub 01：喜欢写作的朋友们，好消息来啦🎉🎉🎉！用artipub一键自动将文章发布至更多平台，让你的创作之旅更加畅快吧！","description":"","frontmatter":{"title":"artipub 01：喜欢写作的朋友们，好消息来啦🎉🎉🎉！用artipub一键自动将文章发布至更多平台，让你的创作之旅更加畅快吧！","author":"Potter","date":"2024-07-12 16:04","tags":["artipub","esm","rollup"],"categories":["artipub"]},"headers":[],"relativePath":"article/04-practic/Artipub/artipub是什么.md","filePath":"article/04-practic/Artipub/artipub是什么.md","lastUpdated":1742646157000}'),i={name:"article/04-practic/Artipub/artipub是什么.md"},o=e('<h1 id="artipub-是什么" tabindex="-1">Artipub 是什么 <a class="header-anchor" href="#artipub-是什么" aria-label="Permalink to &quot;Artipub 是什么&quot;">​</a></h1><p>ArtiPub（文章发布助手）是一个旨在简化内容创作者跨平台发布文章过程的工具库。它提供了一套简单的API，可以让你轻松地将文章发布到任意平台，如博客、Notion、Dev.to等，无需手动操作每个平台。<a href="https://pup007.github.io/artipub/" target="_blank" rel="noreferrer">artipub网站</a></p><h2 id="❓-为什么需要artipub" tabindex="-1">❓ 为什么需要ArtiPub? <a class="header-anchor" href="#❓-为什么需要artipub" aria-label="Permalink to &quot;❓ 为什么需要ArtiPub?&quot;">​</a></h2><ol><li>markdown中引用的本地图片，需要手动压缩图片，然后上传至图床，最后在把图片链接替换掉</li><li>markdown写完文章后，想发布至其他平台避免手动copy</li><li>markdown写完文章后，我需要修改markdown中的一些内容，让其重新生成markdown内容</li><li>...</li></ol><blockquote><p>说明：ArtiPub全部帮你自动解决这些问题，未来将拓展更多内容</p></blockquote><h2 id="✨-特点" tabindex="-1">✨ 特点 <a class="header-anchor" href="#✨-特点" aria-label="Permalink to &quot;✨ 特点&quot;">​</a></h2><ul><li>🌐 <strong>多平台发布</strong>：支持将markdown文章发布至任意内容平台(平台提供API)，比如：Notion、Medium、Dev.to等。</li><li>✨ <strong>简单易用</strong>：提供了简洁的API，只需几行代码即可实现文章的发布。</li><li>🔌 <strong>支持中间件和插件</strong>：通过插件和中间件，让用户更细粒度的控制处理和发布流程。</li><li>📖 <strong>完全开源</strong>：鼓励社区贡献，持续增加新的平台支持和功能。</li></ul><h2 id="🔧-内置" tabindex="-1">🔧 内置 <a class="header-anchor" href="#🔧-内置" aria-label="Permalink to &quot;🔧 内置&quot;">​</a></h2><h3 id="处理中间件" tabindex="-1">处理中间件 <a class="header-anchor" href="#处理中间件" aria-label="Permalink to &quot;处理中间件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>支持</th><th>描述</th></tr></thead><tbody><tr><td>picCompress</td><td>√</td><td>图片自动压缩</td></tr><tr><td>picUpload</td><td>√</td><td>图片上传</td></tr></tbody></table><h3 id="发布插件" tabindex="-1">发布插件 <a class="header-anchor" href="#发布插件" aria-label="Permalink to &quot;发布插件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>支持</th><th>描述</th></tr></thead><tbody><tr><td>NotionPublisherPlugin</td><td>√</td><td>发布至notion</td></tr><tr><td>DevToPublisherPlugin</td><td>√</td><td>发布至dev.to</td></tr></tbody></table><h2 id="🌟诞生背景" tabindex="-1">🌟诞生背景 <a class="header-anchor" href="#🌟诞生背景" aria-label="Permalink to &quot;🌟诞生背景&quot;">​</a></h2><h3 id="第一阶段-弃坑印象笔记-转用notion" tabindex="-1">第一阶段：弃坑印象笔记，转用Notion <a class="header-anchor" href="#第一阶段-弃坑印象笔记-转用notion" aria-label="Permalink to &quot;第一阶段：弃坑印象笔记，转用Notion&quot;">​</a></h3><p>最开始我是使用印象笔记来记录笔记，随着时间的推移接触的东西越来越多，自然记录的笔记也越来越多，于是我想把笔记分类得更细，但是印象笔记分类最多三级，我在网上学习如何整理笔记，看了一些列的文章最终发现这种最多3级目录分类的方式，让我就用的特别不爽。 还有一个点就是固定&quot;印象笔记&quot;至开始屏幕，每次他们更新版本都把我的&quot;印象笔记&quot;图标从开始屏幕上搞丢了，我每次更新都要手动添加，这个也让我很不爽。给他们反馈过，但是他们的这个问题一直存在，我实在受不了，所以就在网络搜索各种笔记软件，最终发现Notion 非常好的满足我的需求，可以随意创建目录层级、文章管理非常方便、文章布局方式可以非常灵活的调整，这个软件非常适合我，所以我就把印象笔记的笔记全部迁移到了Notion上。</p><h3 id="第二阶段-脱离notion孤岛-把知识分享出去" tabindex="-1">第二阶段：脱离notion孤岛，把知识分享出去 <a class="header-anchor" href="#第二阶段-脱离notion孤岛-把知识分享出去" aria-label="Permalink to &quot;第二阶段：脱离notion孤岛，把知识分享出去&quot;">​</a></h3><p>随着时间的推移我已是Notion的重度用户，导致我写的每个笔记or文章都先在Notion写完，我写了很多的笔记，我希望能把自己的知识分享出去，然后就想到把文章搞到自己blog、掘金、Medium、dev.to等平台，但这个过程非常繁琐，直接磨灭你写文章、分享知识的兴趣， 如果你文章是用中文写的，搞得自己的blog、国内平台还好，但是你要把文章搞得国外平台，这个过程就非常痛苦了，首先要把文章翻译，然后把里面的每张图片重新上传一遍，最让能抓狂的是Medium完全不支持copy markdown至它平台的编辑器，(使用了非常原始的编辑器，可能是平台特意设计如此来确保文章美观和质量)，把markdown内容copy至 Medium编辑器后，文章格式全乱了，这个过程让我非常痛苦，如果你有过这样的经历，你肯定能体会到中间的痛苦，你可能会问：&quot;既然Medium那么难用，你为啥还要把文章放到Medium上面，原因：它非常主流而且写文章还能获得收入，不像国内的各种平台...&quot;</p><h3 id="第三阶段-如何把notion上的文章分发出去呢" tabindex="-1">第三阶段：如何把notion上的文章分发出去呢？ <a class="header-anchor" href="#第三阶段-如何把notion上的文章分发出去呢" aria-label="Permalink to &quot;第三阶段：如何把notion上的文章分发出去呢？&quot;">​</a></h3><p>我写了那么多笔记，如何把我掌握的知识分享出去呢？所以我在网上搜索notion to markdown，立马就找到了<a href="https://github.com/souvikinator/notion-to-md" target="_blank" rel="noreferrer">notion-to-md</a>，此时就可以开心的把自己之前在notion上写的很多文章笔记转成markdown，然后发布至blog平台。搞下来后发现文章图片好像是临时图片地址，过一段时间后就图片就找不到了。这就让我有点头大，如果手动把notion上的文章下载下来，发现文章和图片都在一起，那么能不能写一个工具，把notion下载下来的zip文件，一键格式化成我blog文章格式不就可以了，于是我就添加了一些列处理函数，自动解压zip、自动压缩图片、自动上传图片、自动替换图片地址为cdn、自动提交和发布文章等功能，经过这一番操作后，那么我能不能做一个库用markdown来写文章，然后一键分发至任意平台呢？你可能会问：为什么不用notion写完文章后再通过工具分发至任意平台，当然这样也可以，只是多了在Notion写文章、然后下载文章和后续处理的步骤，所以在想为啥不直接用markdown来写文章，然后通过工具自动处理文章和资源，这个样更加灵活，于是就有了artipub这个文章发布助手。</p><h2 id="🔍artipub-原型" tabindex="-1">🔍artipub 原型 <a class="header-anchor" href="#🔍artipub-原型" aria-label="Permalink to &quot;🔍artipub 原型&quot;">​</a></h2><h3 id="articleprocessor" tabindex="-1">ArticleProcessor <a class="header-anchor" href="#articleprocessor" aria-label="Permalink to &quot;ArticleProcessor&quot;">​</a></h3><ul><li>输入：markdown草稿、图片资源</li><li>处理过程：解析markdown、修改markdown内容、上传图片、替换图片地址等(此过程：要方便上层用户灵活修改markdown内容，所以立马就想到markdown AST，这样就可以方便的修改markdown内容)</li><li>输出：将处理后的ast再转换markdown，存储至指定的地方即可</li></ul><h3 id="publishermanager" tabindex="-1">PublisherManager <a class="header-anchor" href="#publishermanager" aria-label="Permalink to &quot;PublisherManager&quot;">​</a></h3><ul><li>输入：markdown 文章内容</li><li>处理过程：某些平台需要把特定文章部分内容去掉 or 提取特别部分内容（此过程：需要添加各种平台插件，方便把文章发布至各种平台）</li><li>输出：将发布结果输出至控制台即可</li></ul><blockquote><p>补充说明：在正式开放之前，你可能会有各种纠结，产生一种幻想：要做一个最好最牛逼的工具，不停在自high中，不停的发散自己的思维... 特别注意：如果这种状态一直持续下去，你将什么事情的办不了，所以要及时收敛自己的思维，把自己的的初步想法落地，然后再不断的迭代，这样才能做出一个好的工具。今天看了一下<a href="https://www.bilibili.com/video/BV1XT421r7xy/?spm_id_from=333.999.top_right_bar_window_history.content.click&amp;vd_source=48d3cd04603032362c730cc7de10ac65" target="_blank" rel="noreferrer">Anthony 的开源之路：Yak Shaving「薅牛毛」</a>，表示对这种状态深有体会，所以写下这段话告诫大家，及时收敛自己思维和注意力，让自己动手干起来。（曾经我也是这样的人啊）</p></blockquote><h2 id="💪撸起袖子干起来" tabindex="-1">💪撸起袖子干起来 <a class="header-anchor" href="#💪撸起袖子干起来" aria-label="Permalink to &quot;💪撸起袖子干起来&quot;">​</a></h2><h3 id="第一阶段-实现第一个最基本的版本" tabindex="-1">第一阶段：实现第一个最基本的版本 <a class="header-anchor" href="#第一阶段-实现第一个最基本的版本" aria-label="Permalink to &quot;第一阶段：实现第一个最基本的版本&quot;">​</a></h3><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/1720842652294.png" alt="提交记录"></p><blockquote><p>说明：第一个版本总共就10天，最主要还是周末写的多一点，平常工作日就搞一点点。</p></blockquote><h3 id="第二阶段-用在自己的blog项目上-不然怎么验证自己做的库可不可用-好不好用呢" tabindex="-1">第二阶段：用在自己的blog项目上，不然怎么验证自己做的库可不可用，好不好用呢？ <a class="header-anchor" href="#第二阶段-用在自己的blog项目上-不然怎么验证自己做的库可不可用-好不好用呢" aria-label="Permalink to &quot;第二阶段：用在自己的blog项目上，不然怎么验证自己做的库可不可用，好不好用呢？&quot;">​</a></h3><p>最开始我是直接通过发包至npm，然后在blog项目中使用，发现包有各种问题，就导致我发了很多坏的临时的包，如下图： <img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/1720842653704.png" alt="alt text"></p><p>我就在想这样不是办法，第一个问题我的版本增长得太快了，第二个问题我发了这么多坏的包，对artipub使用者不负责，会对以后artipub的宣传带来不好的影响。</p><p>第一个问题的解决方案：我在网上搜了一大圈，有很多更新版本和生成changelog的库，最终还是没有选出用哪个库。偶然的在地铁上打开github看探索页面，看到版本发布。这时就想哪个库发版生成的changelog好看我就选哪个，最终发现<a href="https://github.com/unjs/changelogen" target="_blank" rel="noreferrer">changelogen</a>简单好用，就选用了这个库。 <img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20240715113205.png" alt="alt text"></p><p>第二个问题的解决方案：就想到在artipub项目中加一个playground，这样避免需要频繁发包，这样就可以在playground中测试artipub的各种功能，然后再把artipub的功能集成到blog项目中，这样为了避免掉发布很多坏的包。</p><h3 id="第三阶段-把artipub集成到blog项目中" tabindex="-1">第三阶段：把artipub集成到blog项目中 <a class="header-anchor" href="#第三阶段-把artipub集成到blog项目中" aria-label="Permalink to &quot;第三阶段：把artipub集成到blog项目中&quot;">​</a></h3><p>在集成artipub到blog项目中，立马就发现一个问题，blog还是用commonjs规范来写的代码，虽然artipub支持commonjs和esm 2种规范，但是引用库还是报不能引入esm模块，具体什么错误忘记了。我就在想esm已经是未来的趋势了，那么干脆直接把blog项目改成esm规范，避免乱七八糟的错误，但是当我改成esm规范后还是发现使用artipub 还是有各种问题。这就告诉我：无论你的库，本地测试没有问题，加了playground测试也没有问题，如果没有把库应用到真实的项目中，你永远不知道会出现什么问题，所以要及时把库应用到真实的项目中，这样才能发现问题，然后解决问题。</p><h2 id="📊目前情况" tabindex="-1">📊目前情况 <a class="header-anchor" href="#📊目前情况" aria-label="Permalink to &quot;📊目前情况&quot;">​</a></h2><ul><li>[√] artipub已经集成至自己的blog项目中，验证可以正常使用了。</li><li>[√] artipub已有自己的文档网站，方便查看使用。<a href="https://pup007.github.io/artipub/" target="_blank" rel="noreferrer">aritpub传送门</a></li><li>[ ] 完善api文档</li><li>[ ] 添加测试用例</li><li>[ ] 支持发布文章至更多的平台</li></ul><p>如果你对这项目感兴趣，帮忙点个star🌟，同时特别欢迎你的加入，让咋们一起完善这个项目，以使它帮助更多的人。😊</p><h2 id="📝总结" tabindex="-1">📝总结 <a class="header-anchor" href="#📝总结" aria-label="Permalink to &quot;📝总结&quot;">​</a></h2><ul><li>从一个想法到真实落地实现，中间经历了很多的坎坷，有想法、有灵感、有幻想，这些会让思维不停发散，最后要及时收敛自己的思维和注意力，把想法落地，然后再不断迭代，这样才可能做出你的工具。</li><li>Copilot 是一个非常好用的AI助手，个人感觉比其他各种助手好太多了，毕竟它有最好的模型训练数据github。过程中遇到各种问题，基本它都能辅助你解决，但是它也有它的局限性，比如：你要做一个功能，想法还不是很清晰，你可以不停的和它交流，让你的想法形成初稿然后落地下来的这个过程还是很有帮助的。起初我用9.9美元试用了一个月，后来发现非常好用，而且这钱花的非常值，就立马切换成按年订阅了，推荐大家试试 <a href="https://github.com/features/copilot/plans" target="_blank" rel="noreferrer">GitHub Copilot</a></li></ul><h2 id="📚参考资料" tabindex="-1">📚参考资料 <a class="header-anchor" href="#📚参考资料" aria-label="Permalink to &quot;📚参考资料&quot;">​</a></h2><ul><li><a href="https://github.com/souvikinator/notion-to-md" target="_blank" rel="noreferrer">notion-to-md</a></li><li><a href="https://github.com/unifiedjs/unified" target="_blank" rel="noreferrer">unified</a></li><li><a href="https://github.com/syntax-tree/unist-util-visit" target="_blank" rel="noreferrer">unist-util-visit</a></li><li><a href="https://github.com/remarkjs/remark/tree/main" target="_blank" rel="noreferrer">remark-parse</a></li><li><a href="https://github.com/makenotion/notion-sdk-js" target="_blank" rel="noreferrer">notion-sdk-js</a></li><li><a href="https://github.com/tryfabric/martian" target="_blank" rel="noreferrer">@tryfabric/martian</a></li><li><a href="https://developers.forem.com/api/v1" target="_blank" rel="noreferrer">Dev api</a></li><li><a href="https://github.com/unjs/changelogen" target="_blank" rel="noreferrer">changelogen</a></li><li><a href="https://github.com/rollup/rollup" target="_blank" rel="noreferrer">rollup</a></li><li><a href="https://github.com/unjs/mlly" target="_blank" rel="noreferrer">mlly</a></li><li><a href="https://www.conventionalcommits.org/en/v1.0.0/" target="_blank" rel="noreferrer">Conventional Commits</a></li><li><a href="https://github.com/lovell/sharp" target="_blank" rel="noreferrer">sharp</a></li><li><a href="https://github.com/Microsoft/tslib" target="_blank" rel="noreferrer">tslib</a></li><li><a href="https://docs.github.com/en/graphql/overview/explorer" target="_blank" rel="noreferrer">Github GraphQL API</a></li></ul>',43),l=[o];function n(h,b,u,d,s,p){return r(),a("div",null,l)}const g=t(i,[["render",n]]);export{m as __pageData,g as default};
