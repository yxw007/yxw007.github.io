import{_ as t,c as a,o as e,a3 as l}from"./chunks/framework.fzQw_xmO.js";const m=JSON.parse('{"title":"基础知识","description":"","frontmatter":{"title":"基础知识","author":"Potter","date":"2022/08/05 14:24","tags":["计算机网络"],"categories":["计算机网络"]},"headers":[],"relativePath":"article/01-basic/01-network/01-各种概念.md","filePath":"article/01-basic/01-network/01-各种概念.md","lastUpdated":1742646157000}'),i={name:"article/01-basic/01-network/01-各种概念.md"},r=l('<h1 id="基础知识" tabindex="-1">基础知识 <a class="header-anchor" href="#基础知识" aria-label="Permalink to &quot;基础知识&quot;">​</a></h1><ol><li>集线器：通过广播把消息发给连接端口的所有人（目的：放大信号，缺点：不安全）</li><li>交换机：会记录所有连接端口的mac地址。局域网内主机A 往主机B 发送消息，交互会查看mac 地址找到对应的端口，然后将A主机发送的消息发给B主机端口，而不是通过广播形式发送数据</li><li>路由器：记录ip地址和端口，连接不同网络。（目的：过滤数据，只接收专有的网络数据，不是自己网络数据则转发） <ol><li>查看数据包的IP地址</li><li>转发数据</li></ol></li></ol><p>总结：</p><ol><li>集线器、交换机：用于创建网络</li><li>路由器：用于连接网络</li></ol><h2 id="网络分类" tabindex="-1">网络分类 <a class="header-anchor" href="#网络分类" aria-label="Permalink to &quot;网络分类&quot;">​</a></h2><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20230312221425.png" alt="&quot;img&quot;"></p><h2 id="交换技术分类对比" tabindex="-1">交换技术分类对比 <a class="header-anchor" href="#交换技术分类对比" aria-label="Permalink to &quot;交换技术分类对比&quot;">​</a></h2><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master/img/20230312221511.png" alt="&quot;img&quot;"></p><p>疑问：</p><ol><li><p>网络是如何构成的？</p></li><li><p>网络类型有哪些?</p><ul><li>局域网（LAN）： <strong>Local area network，小于10KM，通常采用有线连接</strong></li><li>城域网（MAN）：<strong>Metropolitan Area Network，10~100KM</strong></li><li>广域网（WAN）：<strong>Wide area network，跨国、洲界，甚至全球（inernet网）</strong></li><li>个人网（WPAN）：<strong>wireless Personal area network，无线个人局域网</strong></li></ul></li><li><p>网络拓扑结构：</p><table tabindex="0"><thead><tr><th>拓扑结构</th><th>描述</th><th>优点</th><th>缺点</th></tr></thead><tbody><tr><td>星型网络</td><td>各站点通过点到点的链路与中心站相连</td><td>新增节点容易、安全性和优先级容易控制</td><td>中心节点出问题，会导致整个网络瘫痪</td></tr><tr><td>环形网络</td><td>各站点通过通信介质连成一个封闭的环形</td><td>易安装和监控</td><td>难以新增节点</td></tr><tr><td>总线型网络</td><td>网络中所有的站点共享一条数据通道</td><td>易安装、成本低，某站点出问题不影响全局</td><td>安全性低、监控难，传输介质故障会导致网络瘫痪、新增节点没星型网络方便</td></tr><tr><td>其他类型：树型、簇星型、网状等</td><td>都是基于以上三种类型搭建出来的</td><td></td><td></td></tr></tbody></table></li><li><p>通讯分类</p><ul><li>点对点：数据以点到点的方式在计算机或通信设备中传输。星型网、环形网采用这种传输方式</li><li>广播式：数据在共用介质中传输。无线网和总线型网络属于这种类型</li></ul></li><li><p>局域网如果从一个主机A 到另外一个主机B</p></li><li><p>广域网如何从一个网络N1 主机A 到另外一个网络N2 主机B</p></li></ol><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><a href="https://www.bilibili.com/video/BV1c4411d7jb?p=5&amp;totalPage=73" target="_blank" rel="noreferrer">计算机网络微课堂</a></li></ul>',12),o=[r];function d(n,s,c,h,p,_){return e(),a("div",null,o)}const u=t(i,[["render",d]]);export{m as __pageData,u as default};
