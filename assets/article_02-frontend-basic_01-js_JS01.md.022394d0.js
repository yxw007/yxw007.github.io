import{_ as e,c as r,o as a,A as t}from"./app.88061379.js";const _=JSON.parse('{"title":"C# 与 JS 之间Gzip互通","description":"","frontmatter":{"title":"C# 与 JS 之间Gzip互通","author":"Potter","date":"2022-05-12 18:41","tags":["C#","Gzip","JS"],"categories":["压缩"]},"headers":[{"level":3,"title":"概要内容","slug":"概要内容","link":"#概要内容","children":[]},{"level":3,"title":"源码地址：","slug":"源码地址","link":"#源码地址","children":[]},{"level":3,"title":"GZip 文件结构图","slug":"gzip-文件结构图","link":"#gzip-文件结构图","children":[]},{"level":3,"title":"参考文献：","slug":"参考文献","link":"#参考文献","children":[]}],"relativePath":"article/02-frontend-basic/01-js/JS01.md","lastUpdated":1678887599000}'),i={name:"article/02-frontend-basic/01-js/JS01.md"},l=t('<h3 id="概要内容" tabindex="-1">概要内容 <a class="header-anchor" href="#概要内容" aria-hidden="true">#</a></h3><ul><li>JS 压缩 Gzip demo</li><li>JS 压缩 Gzip + base64 demo</li><li>JS 解压 CSharp 的 Gzip demo</li><li>JS 解压 CSharp 的 base64 + gzip</li><li>CSharp 压缩 Gzip demo</li><li>CSharp 压缩 Gzip + base64 demo</li><li>CSharp 解压 JS 的 Gzip demo</li><li>CSharp 解压 JS 的 base64 + gzip</li><li>Base64 encode 和 decode</li></ul><h3 id="源码地址" tabindex="-1">源码地址： <a class="header-anchor" href="#源码地址" aria-hidden="true">#</a></h3><p><a href="https://github.com/aa4790139/GzipSample" target="_blank" rel="noreferrer">https://github.com/aa4790139/GzipSample</a></p><h3 id="gzip-文件结构图" tabindex="-1">GZip 文件结构图 <a class="header-anchor" href="#gzip-文件结构图" aria-hidden="true">#</a></h3><p><img src="https://cdn.jsdelivr.net/gh/aa4790139/BlogPicBed@master//img/20210115204550.jpg" alt=""></p><h3 id="参考文献" tabindex="-1">参考文献： <a class="header-anchor" href="#参考文献" aria-hidden="true">#</a></h3><ul><li><a href="https://stackabuse.com/encoding-and-decoding-base64-strings-in-node-js/" target="_blank" rel="noreferrer">Encoding and Decoding Base64 Strings in Node.js</a></li><li><a href="https://zh.wikipedia.org/wiki/DEFLATE" target="_blank" rel="noreferrer">DEFLATE</a></li><li><a href="https://stackoverflow.com/questions/246801/how-can-you-encode-a-string-to-base64-in-javascript" target="_blank" rel="noreferrer">How can you encode a string to Base64 in JavaScript?</a></li><li><a href="https://stackoverflow.com/questions/3195865/converting-byte-array-to-string-in-javascript" target="_blank" rel="noreferrer">Converting byte array to string in javascript</a></li><li><a href="https://www.jianshu.com/p/c5df0156b229" target="_blank" rel="noreferrer">Array.prototype.slice.call()方法详解</a></li><li><a href="https://stackoverflow.com/questions/7056925/how-does-array-prototype-slice-call-work" target="_blank" rel="noreferrer">how does Array.prototype.slice.call() work? </a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators" target="_blank" rel="noreferrer">JS按位操作符</a></li><li><a href="https://www.iditect.com/how-to/58717282.html" target="_blank" rel="noreferrer">Remove trailing zeros from byte[]</a></li><li><a href="https://stackoverflow.com/questions/17191945/conversion-between-utf-8-arraybuffer-and-string" target="_blank" rel="noreferrer">Conversion between UTF-8 ArrayBuffer and String</a></li><li><a href="https://tool.oschina.net/commons?type=4" target="_blank" rel="noreferrer">ASCLL对照表</a></li><li><a href="https://blog.csdn.net/yc0188/article/details/4155168" target="_blank" rel="noreferrer">GZIP文件格式简介</a></li></ul><hr><blockquote><p>以上: 如发现有问题，欢迎留言指出，我及时更正</p></blockquote>',10),o=[l];function n(s,c,h,p,d,g){return a(),r("div",null,o)}const b=e(i,[["render",n]]);export{_ as __pageData,b as default};
