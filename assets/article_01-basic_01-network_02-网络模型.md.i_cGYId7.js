import{_ as l,c as i,o as t,a7 as e}from"./chunks/framework.GnyprNw9.js";const m=JSON.parse('{"title":"网络模型","description":"","frontmatter":{"title":"网络模型","author":"Potter","date":"2022/08/07 21:24","tags":["ISO","TCP/IP"],"categories":["计算机网络"]},"headers":[],"relativePath":"article/01-basic/01-network/02-网络模型.md","filePath":"article/01-basic/01-network/02-网络模型.md","lastUpdated":1719974778000}'),a={name:"article/01-basic/01-network/02-网络模型.md"},r=e('<h1 id="网络模型" tabindex="-1">网络模型 <a class="header-anchor" href="#网络模型" aria-label="Permalink to &quot;网络模型&quot;">​</a></h1><h2 id="iso-七层模型" tabindex="-1">ISO 七层模型 <a class="header-anchor" href="#iso-七层模型" aria-label="Permalink to &quot;ISO 七层模型&quot;">​</a></h2><ul><li><p>图示 <img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20230312221844.png" alt=""></p></li><li><p>应用层：提供功能（比如：http、ftp、telnet、dns、smtp等）</p><ul><li>用户最终使用的接口</li><li>比如：寄快递把包裹交给快递员，然后由快递员负责运输快递</li></ul></li><li><p>表示层</p><ul><li>数据的表示、安全、压缩</li></ul></li><li><p>会话层</p><ul><li>建立和管理会话</li></ul></li><li><p>传输层：为应用层提供网络支持（协议：TCP\\UDP）</p><ul><li>（主要提供安全及数据完整性保障）网络层不可靠，保证可靠的传输</li></ul></li><li><p>网络层：（协议：IP协议）</p><ul><li>（主要关心的是寻址） ，进行逻辑寻址，定位到对方，找到最短的路</li><li>寻址：具体如何寻址的？（网络号，主机号）</li><li>路由：如何由一个网络路由到另外一个网络的? <img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20230312221908.png" alt=""></li></ul></li><li><p>数据链路层：（mac地址，识别设备）</p><ul><li>（主要关心两个设备之间传递数据），建立逻辑链接，将数据组 合成数据帧进行传递 （差错校测，可靠传输）</li></ul></li><li><p>物理层</p><ul><li>（核心是传输数据比特流），不关心具体的传输媒体（双绞线、光 纤、同轴电缆、无线...）</li></ul></li><li><p>数据传输过程图示</p></li></ul><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20230312221923.png" alt=""></p><h2 id="tcp-ip-网络模型" tabindex="-1">TCP/IP 网络模型 <a class="header-anchor" href="#tcp-ip-网络模型" aria-label="Permalink to &quot;TCP/IP 网络模型&quot;">​</a></h2><ul><li>模型图 <img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20230312222016.png" alt=""><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20230312222037.png" alt=""></li></ul>',6),s=[r];function c(p,n,o,d,h,_){return t(),i("div",null,s)}const g=l(a,[["render",c]]);export{m as __pageData,g as default};
