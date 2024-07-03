import{_ as n,c as a,o as s,a7 as l}from"./chunks/framework.GnyprNw9.js";const g=JSON.parse('{"title":"Web构建优化","description":"","frontmatter":{"title":"Web构建优化","author":"Potter","date":"2022-05-12 18:48","tags":["DllPlugin","DllReferencePlugin","打包优化"],"categories":["webpack"]},"headers":[],"relativePath":"article/05-optimize/Optimization/WebBuild01.md","filePath":"article/05-optimize/Optimization/WebBuild01.md","lastUpdated":1719974778000}'),e={name:"article/05-optimize/Optimization/WebBuild01.md"},p=l(`<h1 id="web构建优化" tabindex="-1">Web构建优化 <a class="header-anchor" href="#web构建优化" aria-label="Permalink to &quot;Web构建优化&quot;">​</a></h1><h3 id="概要内容" tabindex="-1">概要内容 <a class="header-anchor" href="#概要内容" aria-label="Permalink to &quot;概要内容&quot;">​</a></h3><ul><li>DllPlugin 和 DllReferencePlugin 简介</li><li>如何使用DllPlugin打包，及DllReferencePlugin如何引用dll</li><li>构建优化效果</li><li>SplitChunks</li><li>Demo源码工程</li></ul><hr><h3 id="dllplugin-和-dllreferenceplugin-简介" tabindex="-1">DllPlugin 和 DllReferencePlugin 简介 <a class="header-anchor" href="#dllplugin-和-dllreferenceplugin-简介" aria-label="Permalink to &quot;DllPlugin 和 DllReferencePlugin 简介&quot;">​</a></h3><ul><li>DllPlugin:</li></ul><blockquote><p>这个插件是在一个额外的独立的 webpack 设置中创建一个只有 dll 的 bundle(dll-only-bundle)。 这个插件会生成一个名为 manifest.json 的文件，这个文件是用来让 DLLReferencePlugin 映射到相关的依赖上去的。</p></blockquote><ul><li>DllReferencePlugin:</li></ul><blockquote><p>此插件配置在 webpack 的主配置文件中，此插件会把 dll-only-bundles 引用到需要的预编译的依赖中</p></blockquote><ul><li>通俗点讲：</li></ul><blockquote><p>DllPlugin 插件负责把第三方公共库，打包进一个独立的dll库中。最后项目打包时DllReferencePlugin 通过manifest.json 来引用dll的公共库，避免项目每次构建时都将第三库和业务代码进行重复打包。</p></blockquote><ul><li>优点： <ul><li>提升打包构建速度</li><li>公共js文件配置CDN，避免掉重复下载公共库js文件</li></ul></li></ul><hr><h3 id="如何使用dllplugin打包-及dllreferenceplugin如何引用dll" tabindex="-1">如何使用DllPlugin打包，及DllReferencePlugin如何引用dll <a class="header-anchor" href="#如何使用dllplugin打包-及dllreferenceplugin如何引用dll" aria-label="Permalink to &quot;如何使用DllPlugin打包，及DllReferencePlugin如何引用dll&quot;">​</a></h3><ul><li>DllPlugin 配置需要打包第三方库至dll中</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//webpack.dll.config.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const DllPlugin = require(&#39;webpack/lib/DllPlugin&#39;);</span></span>
<span class="line"><span>const path = require(&#39;path&#39;)</span></span>
<span class="line"><span>const fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var packageJsonContent = fs.readFileSync(path.resolve(__dirname, &#39;../package.json&#39;));</span></span>
<span class="line"><span>var packageJson = JSON.parse(packageJsonContent);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var dependencies = Object.keys(packageJson.dependencies);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>    entry: {</span></span>
<span class="line"><span>        vendor: dependencies</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    output: {</span></span>
<span class="line"><span>        path: path.resolve(__dirname, &#39;../dist&#39;),</span></span>
<span class="line"><span>        filename: &#39;vendor.bundle.js&#39;,</span></span>
<span class="line"><span>        library: &#39;vendor_lib&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    plugins: [</span></span>
<span class="line"><span>        new DllPlugin({</span></span>
<span class="line"><span>            context: __dirname,</span></span>
<span class="line"><span>            name: &#39;vendor_lib&#39;,</span></span>
<span class="line"><span>            /* 生成manifest文件输出的位置和文件名称 */</span></span>
<span class="line"><span>            path: path.resolve(__dirname, &#39;../dist/vendor-manifest.json&#39;)</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>DllReferencePlugin如何引用dll</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//webpack.config.js 中 plugins添加以下代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>new DllReferencePlugin({</span></span>
<span class="line"><span>            manifest: require(path.resolve(__dirname, &#39;../dist/vendor-manifest.json&#39;))</span></span>
<span class="line"><span>}),</span></span></code></pre></div><hr><h3 id="构建优化效果" tabindex="-1">构建优化效果 <a class="header-anchor" href="#构建优化效果" aria-label="Permalink to &quot;构建优化效果&quot;">​</a></h3><blockquote><p>简单demo，未抽离公共库打包时间7572ms，抽离公共库打包时间2315ms，打包速度快2倍多 <img src="https://cdn.jsdelivr.net/gh/aa4790139/BlogPicBed@master//img/20201230131323.png" alt=""></p></blockquote><hr><h3 id="splitchunks" tabindex="-1">SplitChunks <a class="header-anchor" href="#splitchunks" aria-label="Permalink to &quot;SplitChunks&quot;">​</a></h3><ul><li>简介：Webpack中一个提取或分离代码的插件，主要作用是提取公共代码，防止代码被重复打包，拆分过大的js文件，合并零散的js文件，可配置</li><li>配置：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//webpack.dll.config.js中optimization 中新增如下配置</span></span>
<span class="line"><span>splitChunks: {</span></span>
<span class="line"><span>            chunks: &quot;async&quot;,</span></span>
<span class="line"><span>            minSize: 30000,</span></span>
<span class="line"><span>            minChunks: 1,</span></span>
<span class="line"><span>            maxAsyncRequests: 5,</span></span>
<span class="line"><span>            maxInitialRequests: 3,</span></span>
<span class="line"><span>            automaticNameDelimiter: &#39;~&#39;,</span></span>
<span class="line"><span>            name: true,</span></span>
<span class="line"><span>            cacheGroups: {</span></span>
<span class="line"><span>                vendors: {</span></span>
<span class="line"><span>                    test: /[\\\\/]node_modules[\\\\/]/,</span></span>
<span class="line"><span>                    priority: -10</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                default: {</span></span>
<span class="line"><span>                    minChunks: 2,</span></span>
<span class="line"><span>                    priority: -20,</span></span>
<span class="line"><span>                    reuseExistingChunk: true</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span></code></pre></div><hr><h3 id="demo源码工程" tabindex="-1">Demo源码工程 <a class="header-anchor" href="#demo源码工程" aria-label="Permalink to &quot;Demo源码工程&quot;">​</a></h3><ul><li>访问地址：<a href="https://github.com/aa4790139/webpack4_confuse_demo" target="_blank" rel="noreferrer">https://github.com/aa4790139/webpack4_confuse_demo</a></li></ul><hr><h3 id="最后" tabindex="-1">最后： <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后：&quot;">​</a></h3><blockquote><p>由于对于公共库抽离和分割包过大优化打包，我只是试探性的去了解和测试。如果你还有什么更好的优化构建方法或者建议，欢迎给我留言。感谢~</p></blockquote><hr><h3 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h3><ul><li><a href="https://www.cnblogs.com/tugenhua0707/p/9520780.html" target="_blank" rel="noreferrer">深入浅出的webpack构建工具---DllPlugin DllReferencePlugin提高构建速度(七)</a></li><li><a href="https://webpack.docschina.org/plugins/split-chunks-plugin/#optimizationsplitchunks" target="_blank" rel="noreferrer">SplitChunksPlugin 使用说明</a></li><li><a href="https://zhuanlan.zhihu.com/p/152097785" target="_blank" rel="noreferrer">Webpack之SplitChunks插件用法详解</a></li><li><a href="https://imweb.io/topic/5b66dd601402769b60847149" target="_blank" rel="noreferrer">webpack 4 Code Splitting 的 splitChunks 配置探索</a></li></ul><blockquote><p>以上: 如发现有问题，欢迎留言指出，我及时更正</p></blockquote>`,35),i=[p];function t(c,r,o,u,d,h){return s(),a("div",null,i)}const m=n(e,[["render",t]]);export{g as __pageData,m as default};
