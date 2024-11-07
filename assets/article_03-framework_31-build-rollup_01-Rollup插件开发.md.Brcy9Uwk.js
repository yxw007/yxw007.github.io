import{_ as s,c as a,a2 as n,o as l}from"./chunks/framework.Dty_nV1T.js";const u=JSON.parse('{"title":"Rollup插件开发","description":"","frontmatter":{"title":"Rollup插件开发","author":"Potter","date":"2022-01-15 14:15","tags":["插件","rollup"],"categories":["rollup"]},"headers":[],"relativePath":"article/03-framework/31-build-rollup/01-Rollup插件开发.md","filePath":"article/03-framework/31-build-rollup/01-Rollup插件开发.md","lastUpdated":1730988105000}'),e={name:"article/03-framework/31-build-rollup/01-Rollup插件开发.md"};function t(h,i,p,r,k,o){return l(),a("div",null,i[0]||(i[0]=[n(`<h1 id="rollup插件开发" tabindex="-1">Rollup插件开发 <a class="header-anchor" href="#rollup插件开发" aria-label="Permalink to &quot;Rollup插件开发&quot;">​</a></h1><hr><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20220115211118.png" alt="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20220115211118.png"></p><h3 id="options" tabindex="-1">options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;options&quot;">​</a></h3><ul><li>作用：获取rollup 配置</li></ul><h3 id="buildstart" tabindex="-1">buildStart <a class="header-anchor" href="#buildstart" aria-label="Permalink to &quot;buildStart&quot;">​</a></h3><ul><li>作用：开始构建时钩子，此时可获取最后的输入配置信息</li></ul><h3 id="resolveid" tabindex="-1">resolveId <a class="header-anchor" href="#resolveid" aria-label="Permalink to &quot;resolveId&quot;">​</a></h3><ul><li>作用：此钩子可以用于路径替换操作，也可以用于终止解析操作</li><li>应用场景： <ul><li><p>定义alias，最后替换代码中的别名路径</p><pre><code>\`\`\`jsx
//1. 配置别名
alias: {
  &#39;@&#39;: &#39;./src&#39;
}

//2. 使用代码
import sum from &#39;@/sum.js&#39;;

function aliasPlugin(){
  return {
   name:&#39;aliasPlugin&#39;,
    //3. 打包时：自动根据别名替换路径
   resolveId(importee, importer) {
       if (importee.startsWith(&#39;@&#39;)) {
           return importee.replace(&#39;@&#39;, path.resolve(__dirname, &#39;src&#39;))
       } // 如果这里返回false，则不再继续向下执行
   }
  }
}
\`\`\`
</code></pre></li><li><p>自动安装第三方插件</p><pre><code>\`\`\`jsx
import { exec } from &#39;child_process&#39;;
import { promisify } from &#39;util&#39;
import fs from &#39;fs&#39;;
import module from &#39;module&#39;
const execAsync = promisify(exec);

function autoInstall(){
    const commands = {
        npm:&#39;npm install&#39;,
        yarn: &#39;yarn add&#39;
    }
    // 获取用的包管理器是yarn 还是 npm 
    const manager = fs.existsSync(&#39;package-lock.json&#39;) ? &#39;npm&#39;:&#39;yarn&#39;;
    const pkgFile = path.resolve(&#39;package.json&#39;);
    // 读取文件内容
    let pkg = JSON.parse(fs.readFileSync(pkgFile,&#39;utf8&#39;));

    // 找到已安装的依赖和内置模块
    const installed = new Set(Object.keys(pkg.dependencies || {}).concat(module.builtinModules))
    // 要执行的命令
    const cmd = commands[manager];

    return {
        name:&#39;auto-install&#39;,
        async resolveId(importee, importer){
            if (!importer) return null; // 如果没有解析路径
            const isExternalPackage =( importee[0] !== &#39;.&#39;) &amp;&amp; (!path.isAbsolute(importee));
            if (isExternalPackage) {
                if (!installed.has(importee)) {
                    console.log(\`\${cmd} \${importee}\`)
                    await execAsync(\`\${cmd} \${importee}\`)
                }
            }
        }
    }
}
\`\`\`
</code></pre></li></ul></li></ul><h3 id="load" tabindex="-1">load <a class="header-anchor" href="#load" aria-label="Permalink to &quot;load&quot;">​</a></h3><ul><li>作用：根据文件路径返回文件内容</li><li>应用场景： <ul><li><p>代码引用资源(png\\svg\\jpg等)：改成引用相对路径地址，而无需打包资源（需要看webpack 里面的打包插件）</p><pre><code>\`\`\`jsx
//1. 打包时转换icon.png
function changeResPlugin(){
 return {
  name:&#39;changeResPlugin&#39;,
  resolveFileUrl({fileName}){
    //说明：将import.meta.ROLLUP_FILE_URL 替换成此返回结果
      return JSON.stringify(new URL(\`test/\${fileName}\`, &#39;http://www.baidu.com&#39;).href);
  },
  load(filepath){
    let fileName = path.basename(filepath);
      let data = fs.readFileSync(filepath,{encoding:&quot;utf-8&quot;});
    //说明：往打包目录发送文件
      let referenceId = this.emitFile({type: &#39;asset&#39;,source:data,fileName});
    return \`export default import.meta.ROLLUP_FILE_URL_\${referenceId}\`
  }
}

//打包结果：
//不用resolveFileUrl 打包结果
var index = new URL(&#39;icon.png&#39;, import.meta.url).href;
export { index as default };

//利用resolveFileUrl转换import.meta.url 打包结果
var index = &quot;http://www.zhufeng.com/icon.png&quot;;
export { index as default };
\`\`\`
</code></pre></li><li><p>引用小图片，可以直接转成base64内容返回</p><pre><code>\`\`\`jsx
//1. 配置
plugins: [
 image({
     dom:true
  })
]

//2. 使用
import logo from &#39;./static/icon.png&#39;;
document.body.appendChild(logo);
console.log(logo);

//3. 打包时加载转换
function changeResPlugin(){
 return {
  name:&#39;changeResPlugin&#39;,
  load(id) {
      if (!filter(id)) {
        return null;
      }
  
      const mime = mimeTypes[extname(id)];
      if (!mime) {
        // not an image
        return null;
      }
  
      const isSvg = mime === mimeTypes[&#39;.svg&#39;];
      const format = isSvg ? &#39;utf-8&#39; : &#39;base64&#39;;
      const source = readFileSync(id, format).replace(/[\\r\\n]+/gm, &#39;&#39;);
      const dataUri = getDataUri({ format, isSvg, mime, source });
      const code = options.dom ? domTemplate({ dataUri }) : constTemplate({ dataUri });
  
      return code.trim();
  }
 }
}

\`\`\`
</code></pre></li></ul></li></ul><h3 id="resolvefileurl" tabindex="-1">resolveFileUrl <a class="header-anchor" href="#resolvefileurl" aria-label="Permalink to &quot;resolveFileUrl&quot;">​</a></h3><ul><li><p>作用：对import.meta.url进行路径的替换</p></li><li><p>应用场景：</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolveFileUrl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({fileName}){</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //说明：将import.meta.ROLLUP_FILE_URL 替换成此返回结果</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`test/\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fileName</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http://www.baidu.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).href);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span></code></pre></div></li></ul><h3 id="transform" tabindex="-1">transform <a class="header-anchor" href="#transform" aria-label="Permalink to &quot;transform&quot;">​</a></h3><ul><li><p>作用：最常用的钩子方法，可以实现各种各样的逻辑转化</p></li><li><p>应用场景：es6 转es5</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> path </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;path&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rollupPluginutils </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;rollup-pluginutils&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> babel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@babel/core&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> babelPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">pluginOptions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> defaultExtensions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.jsx&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.cjs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        exclude</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        include</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        extensions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> defaultExtensions</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pluginOptions;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 生成后缀匹配正则</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> extensionRegExp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RegExp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(extensions.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ext</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`(\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ext</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">})\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;|&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;$&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 创建include和exclude过滤器</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> includeExcludeFilter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rollupPluginutils.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createFilter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(include, exclude);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 实现过滤方法</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> filter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> extensionRegExp.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(id) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> includeExcludeFilter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(id);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;babel&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        transform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">code</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">filename</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(filename)) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果不能转化直接return</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> babel.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">loadPartialConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ filename });</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> transformOptions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> config.options;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> babel.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">transformSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(code, {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">transformOptions,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                caller: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@rollup/plugin-babel&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    supportsStaticESM: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            });</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li></ul><h3 id="moduleparsed" tabindex="-1">moduleParsed <a class="header-anchor" href="#moduleparsed" aria-label="Permalink to &quot;moduleParsed&quot;">​</a></h3><ul><li>作用：获取模块ast信息，可以进行ast代码转换</li></ul><h3 id="resolvedynamicimport" tabindex="-1">resolveDynamicImport <a class="header-anchor" href="#resolvedynamicimport" aria-label="Permalink to &quot;resolveDynamicImport&quot;">​</a></h3><ul><li>作用：动态模块导入钩子</li><li>应用场景： <ul><li><p>解析动态导入路径， 返回转换后路径</p><pre><code>\`\`\`jsx
//1. 使用
import(&#39;multiple&#39;)

//2. 插件转换
function dynamicPlugin(){
 return {
  name: &#39;dynamicPlugin&#39;,
  resolveDynamicImport(id){
   if (id === &#39;multiple&#39;) {
       return path__default[&quot;default&quot;].resolve(__dirname, &#39;src/multiple.js&#39;)
   }   
  }
 }
}

//3. 转换后结果
import(&#39;./multiple.js&#39;);
\`\`\`
</code></pre></li></ul></li></ul><h3 id="buildend" tabindex="-1">buildEnd <a class="header-anchor" href="#buildend" aria-label="Permalink to &quot;buildEnd&quot;">​</a></h3><ul><li>作用：构建结束调用此钩子(包括成功和失败)</li></ul><h2 id="generate阶段hook" tabindex="-1">Generate阶段hook <a class="header-anchor" href="#generate阶段hook" aria-label="Permalink to &quot;Generate阶段hook&quot;">​</a></h2><hr><h2 id="build-阶段hook" tabindex="-1">Build 阶段hook <a class="header-anchor" href="#build-阶段hook" aria-label="Permalink to &quot;Build 阶段hook&quot;">​</a></h2><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20220115210942.png" alt="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20220115210942.png"></p><h3 id="outputoptions" tabindex="-1">outputOptions <a class="header-anchor" href="#outputoptions" aria-label="Permalink to &quot;outputOptions&quot;">​</a></h3><ul><li>作用：生成阶段的第一个钩子，与Build阶段Options 钩子类似</li></ul><h3 id="renderstart" tabindex="-1">renderStart <a class="header-anchor" href="#renderstart" aria-label="Permalink to &quot;renderStart&quot;">​</a></h3><ul><li>作用：开始生成的钩子，与Build阶段BuildStart钩子类似</li></ul><h3 id="banner、footer、intro、outro" tabindex="-1">banner、footer、intro、outro <a class="header-anchor" href="#banner、footer、intro、outro" aria-label="Permalink to &quot;banner、footer、intro、outro&quot;">​</a></h3><ul><li>作用：可以在固定位置插入代码的钩子，比如：文件头、尾等</li></ul><h3 id="renderdynamicimport" tabindex="-1">renderDynamicImport <a class="header-anchor" href="#renderdynamicimport" aria-label="Permalink to &quot;renderDynamicImport&quot;">​</a></h3><ul><li>作用：可以用于实现import()的polyfill</li></ul><h3 id="augmentchunkhash" tabindex="-1">augmentChunkHash <a class="header-anchor" href="#augmentchunkhash" aria-label="Permalink to &quot;augmentChunkHash&quot;">​</a></h3><ul><li><p>作用：将模块名称，改用hash值作为参数</p></li><li><p>示例：</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">augmentChunkHash</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(chunkInfo) { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 用全新的hash作为模块的参数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hash </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Date.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 对动态导入的模块进行hash处理</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (chunkInfo.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;minus&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hash;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li></ul><h3 id="resolveimportmeta" tabindex="-1">resolveImportMeta <a class="header-anchor" href="#resolveimportmeta" aria-label="Permalink to &quot;resolveImportMeta&quot;">​</a></h3><ul><li>作用：解析import.meta中的属性</li></ul><h3 id="renderchunk" tabindex="-1">renderChunk <a class="header-anchor" href="#renderchunk" aria-label="Permalink to &quot;renderChunk&quot;">​</a></h3><ul><li><p>作用：可对输出代码进行转化处理</p></li><li><p>示例：</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">renderChunk</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(code) { </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> code </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;haha&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li></ul><h3 id="generatebundle" tabindex="-1">generateBundle <a class="header-anchor" href="#generatebundle" aria-label="Permalink to &quot;generateBundle&quot;">​</a></h3><ul><li>作用：生成bundle钩子</li></ul><h3 id="writebundle" tabindex="-1">writeBundle <a class="header-anchor" href="#writebundle" aria-label="Permalink to &quot;writeBundle&quot;">​</a></h3><ul><li>作用：Bundle文件生成钩子</li></ul><h3 id="closebundle" tabindex="-1">closeBundle <a class="header-anchor" href="#closebundle" aria-label="Permalink to &quot;closeBundle&quot;">​</a></h3><ul><li>作用：bundle关闭钩子</li></ul><h3 id="rendererror" tabindex="-1">renderError <a class="header-anchor" href="#rendererror" aria-label="Permalink to &quot;renderError&quot;">​</a></h3><ul><li>作用：渲染出错钩子</li></ul><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://rollupjs.org/guide/en/#plugins-overview" target="_blank" rel="noreferrer">https://rollupjs.org/guide/en/#plugins-overview</a></li><li><a href="https://github.com/rollup/plugins/tree/master/packages/image" target="_blank" rel="noreferrer">https://github.com/rollup/plugins/tree/master/packages/image</a></li><li><a href="https://rollupjs.org/guide/en/#build-hooks" target="_blank" rel="noreferrer">https://rollupjs.org/guide/en/#build-hooks</a></li><li><a href="https://rollupjs.org/guide/en/#output-generation-hooks" target="_blank" rel="noreferrer">https://rollupjs.org/guide/en/#output-generation-hooks</a></li></ul><blockquote><p>以上：如发现有问题，欢迎留言指出，我及时更正</p></blockquote>`,50)]))}const E=s(e,[["render",t]]);export{u as __pageData,E as default};
