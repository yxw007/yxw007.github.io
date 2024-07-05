import{_ as a,c as n,o as s,a7 as p}from"./chunks/framework.GnyprNw9.js";const m=JSON.parse('{"title":"对称加密和非对称加密的应用","description":"","frontmatter":{"title":"对称加密和非对称加密的应用","author":"Potter","date":"2022-05-12 18:41","tags":["对称加密","非对称加密","AES","RSA"],"categories":["加密"]},"headers":[],"relativePath":"article/02-frontend-basic/01-js/JS02.md","filePath":"article/02-frontend-basic/01-js/JS02.md","lastUpdated":1720164171000}'),e={name:"article/02-frontend-basic/01-js/JS02.md"},l=p(`<h1 id="对称加密和非对称加密的应用" tabindex="-1">对称加密和非对称加密的应用 <a class="header-anchor" href="#对称加密和非对称加密的应用" aria-label="Permalink to &quot;对称加密和非对称加密的应用&quot;">​</a></h1><h3 id="概要内容" tabindex="-1">概要内容 <a class="header-anchor" href="#概要内容" aria-label="Permalink to &quot;概要内容&quot;">​</a></h3><ul><li>什么是对称加密</li><li>对称加密demo</li><li>什么是非对称加密</li><li>非对称加密demo</li><li>对称加密与非对称加密组合使用</li><li>介绍一套可行的混合加密方案，怎么应用到接口数据加密中</li><li>Demo源码工程</li></ul><hr><h3 id="什么是对称加密" tabindex="-1">什么是对称加密 <a class="header-anchor" href="#什么是对称加密" aria-label="Permalink to &quot;什么是对称加密&quot;">​</a></h3><ul><li><p>定义：</p><blockquote><p>对称密钥算法（英语：Symmetric-key algorithm）又称为对称加密、私钥加密、共享密钥加密，是密码学中的一类加密算法。这类算法在加密和解密时使用相同的密钥，或是使用两个可以简单地相互推算的密钥</p></blockquote></li><li><p>优点：</p><blockquote><p>算法公开、计算量小、加密速度快、加密效率高，适合对大量数据进行加密的场景。 比如 HLS（HTTP Live Streaming）普通加密场景中，一般会使用 AES-128 对称加密算法对 TS 切片进行加密，以保证多媒体资源安全</p></blockquote></li><li><p>缺点：</p><blockquote><p>安全性不高，只要拿到秘钥就可以把数据解开</p></blockquote></li><li><p>对称加密的过程：</p><blockquote><p>发送方使用密钥将明文数据加密成密文，然后发送出去，接收方收到密文后，使用同一个密钥将密文解密成明文读取 <img src="https://cdn.jsdelivr.net/gh/aa4790139/BlogPicBed@master/img/QQ%E5%9B%BE%E7%89%8720201227142444.png" alt=""></p></blockquote></li><li><p>个人理解：</p><blockquote><p>对称加密就好比一把锁的钥匙，一个密码箱存了东西，如果你有钥匙就可以把密码箱里面的宝贝取走</p></blockquote></li></ul><hr><h3 id="对称加密demo" tabindex="-1">对称加密demo <a class="header-anchor" href="#对称加密demo" aria-label="Permalink to &quot;对称加密demo&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>this.key = CryptoJS.enc.Utf8.parse(&quot;0123456789abcdef&quot;);</span></span>
<span class="line"><span>this.iv = CryptoJS.enc.Utf8.parse(&quot;abcdef0123456789&quot;);</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>* AES 加密</span></span>
<span class="line"><span>* @param iv</span></span>
<span class="line"><span>* @param key</span></span>
<span class="line"><span>* @param content 加密数据</span></span>
<span class="line"><span>* @returns {string}</span></span>
<span class="line"><span>* @private</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>__aesEncrypt(iv, key, content) {</span></span>
<span class="line"><span>    let text = CryptoJS.enc.Utf8.parse(JSON.stringify(content));</span></span>
<span class="line"><span>    let encrypted = CryptoJS.AES.encrypt(text, key,</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            iv: iv,</span></span>
<span class="line"><span>            mode: CryptoJS.mode.CBC,</span></span>
<span class="line"><span>            padding: CryptoJS.pad.Pkcs7,</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    return encrypted.toString();</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>* AES 解密</span></span>
<span class="line"><span>* @param iv</span></span>
<span class="line"><span>* @param key</span></span>
<span class="line"><span>* @param content  解密数据</span></span>
<span class="line"><span>* @returns {string}</span></span>
<span class="line"><span>* @private</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>__aesDecrypt(iv, key, content) {</span></span>
<span class="line"><span>    let decrypt = CryptoJS.AES.decrypt(content, key, {</span></span>
<span class="line"><span>        iv: iv,</span></span>
<span class="line"><span>        mode: CryptoJS.mode.CBC,</span></span>
<span class="line"><span>        padding: CryptoJS.pad.Pkcs7,</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    let decryptText = decrypt.toString(CryptoJS.enc.Utf8);</span></span>
<span class="line"><span>    return decryptText.replace(/\\&quot;/g, &quot;&quot;);</span></span>
<span class="line"><span>},</span></span></code></pre></div><hr><h3 id="什么是非对称加密" tabindex="-1">什么是非对称加密 <a class="header-anchor" href="#什么是非对称加密" aria-label="Permalink to &quot;什么是非对称加密&quot;">​</a></h3><ul><li><p>定义：</p><blockquote><p>非对称加密算法需要两个密钥：公开密钥（publickey：简称公钥）和私有密钥（privatekey：简称私钥）。公钥与私钥是一对，如果用公钥对数据进行加密，只有用对应的私钥才能解密。 因为加密和解密使用的是两个不同的密钥，所以这种算法叫作非对称加密算法</p></blockquote></li><li><p>优点：</p><blockquote><p>安全性更高，公钥是公开的，私钥是自己保存的，不需要将私钥提供给别人</p></blockquote></li><li><p>缺点</p><blockquote><p>加解密速度慢，只适合应对小数据加解密</p></blockquote></li><li><p>对称加密的过程： <img src="https://cdn.jsdelivr.net/gh/aa4790139/BlogPicBed@master/img/QQ%E6%88%AA%E5%9B%BE20201227142658.png" alt=""></p></li><li><p>个人理解</p><blockquote><p>非对称加密：公钥就好比未锁的密码箱，只能存东西进去然后锁住。秘钥就好比密码箱的钥匙，可以打开秘密箱然后把里面的宝贝取走</p></blockquote></li><li><p>非对称加密demo</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>this.rsaEncryptor = new JSEncrypt();</span></span>
<span class="line"><span>this.rsaEncryptor.setPublicKey(this.rsa_pub_key);</span></span>
<span class="line"><span>this.rsaDecryptor = new JSEncrypt();</span></span>
<span class="line"><span>this.rsaDecryptor.setPrivateKey(this.rsa_pri_key);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>* RSA 加密</span></span>
<span class="line"><span>* @param content</span></span>
<span class="line"><span>* @returns {CipherParams|PromiseLike&lt;ArrayBuffer&gt;}</span></span>
<span class="line"><span>* @private</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>__rsaEncrypt(content) {</span></span>
<span class="line"><span>    return this.rsaEncryptor.encrypt(content);</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>* RSA 解密</span></span>
<span class="line"><span>* @param content</span></span>
<span class="line"><span>* @returns {WordArray|PromiseLike&lt;ArrayBuffer&gt;}</span></span>
<span class="line"><span>* @private</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>__rsaDecrypt(content) {</span></span>
<span class="line"><span>    return this.rsaDecryptor.decrypt(content);</span></span>
<span class="line"><span>},</span></span></code></pre></div><hr><h3 id="对称加密与非对称加密组合使用" tabindex="-1">对称加密与非对称加密组合使用 <a class="header-anchor" href="#对称加密与非对称加密组合使用" aria-label="Permalink to &quot;对称加密与非对称加密组合使用&quot;">​</a></h3><blockquote><p>现在对称加密和非对称加密的缺点我们都知道了，那就结合对称加密和非对称加密的优点来个demo，思路：针对小数据对称加密的iv和key，采用非对称加密；针对大数据data采用对称加密。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span>* 混合加密</span></span>
<span class="line"><span>* @param iv</span></span>
<span class="line"><span>* @param key</span></span>
<span class="line"><span>* @param content</span></span>
<span class="line"><span>* @returns {{data: string, iv: (CipherParams|PromiseLike&lt;ArrayBuffer&gt;), key: (CipherParams|PromiseLike&lt;ArrayBuffer&gt;)}}</span></span>
<span class="line"><span>* @private</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>__hybirdEncrypt(iv, key, content) {</span></span>
<span class="line"><span>    const aesEncryptData = this.__aesEncrypt(iv, key, content);</span></span>
<span class="line"><span>    const rsaEncryptIv = this.__rsaEncrypt(iv);</span></span>
<span class="line"><span>    const rsaEncryptKey = this.__rsaEncrypt(key);</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>        iv: rsaEncryptIv,</span></span>
<span class="line"><span>        key: rsaEncryptKey,</span></span>
<span class="line"><span>        data: aesEncryptData,</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>* 混合解密</span></span>
<span class="line"><span>* @param encryptInfo</span></span>
<span class="line"><span>* @returns {string}</span></span>
<span class="line"><span>* @private</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>__hybirdDecrypt(encryptInfo) {</span></span>
<span class="line"><span>    const iv = this.rsaDecryptor.decrypt(encryptInfo.iv);</span></span>
<span class="line"><span>    const key = this.rsaDecryptor.decrypt(encryptInfo.key);</span></span>
<span class="line"><span>    const data = encryptInfo.data;</span></span>
<span class="line"><span>    return this.__aesDecrypt(iv, key, data);</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><h3 id="介绍一套可行混合加密方案-怎么应用到接口数据加密中。流程图如下" tabindex="-1">介绍一套可行混合加密方案，怎么应用到接口数据加密中。流程图如下： <a class="header-anchor" href="#介绍一套可行混合加密方案-怎么应用到接口数据加密中。流程图如下" aria-label="Permalink to &quot;介绍一套可行混合加密方案，怎么应用到接口数据加密中。流程图如下：&quot;">​</a></h3><ul><li>思路如下： <ul><li>第1步：创建一套RSA 公私钥，公钥前端拿着，私钥服务端拿着</li><li>第2步：前端为每一个网络请求生成RequestID</li><li>第3步：客户端生成AES Key，然后将RequestID 作为Key,AES Key 作为Value 存内存</li><li>第4步：客户端用生成的AES Key 加密请求数据Request Data，用RSA公钥对AES Key进行加密，同时把requestID、加密数据、加密AES Key 发送给服务端</li><li>第5步：服务端用RSA私钥解密被加密的AES Key，然后再用解开的AES Key 对RequestData数据进行解密</li><li>第6步：服务端用AES Key对响应数据ResposneData加密+RequestID、返回给前端</li><li>第7步：前端根据服务端返回的RequestID 取出内存的AES key, 用AES key 解密Resposne Data数据，用完后删除内存RequestID 的AES key 数据。</li><li>最后：前端每次发送请求都创建AES Key 去加密数据，收到服务端响应数据解密用完后，就删除掉内存中的AES Key数据，如此循环就用一套RSA公私钥解决混合加密问题</li></ul></li><li>流程图： <img src="https://cdn.jsdelivr.net/gh/aa4790139/BlogPicBed@master/img/%E6%B7%B7%E5%90%88%E5%8A%A0%E5%AF%86%E6%96%B9%E6%A1%88%E6%B5%81%E7%A8%8B%E5%9B%BE.jpg" alt=""></li></ul><hr><h3 id="demo源码工程" tabindex="-1">Demo源码工程： <a class="header-anchor" href="#demo源码工程" aria-label="Permalink to &quot;Demo源码工程：&quot;">​</a></h3><ul><li>访问地址：<a href="https://github.com/aa4790139/encrypt_decrypt_sample" target="_blank" rel="noreferrer">https://github.com/aa4790139/encrypt_decrypt_sample</a></li></ul><h3 id="最后" tabindex="-1">最后： <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后：&quot;">​</a></h3><blockquote><p>由于对称加密DES安全性已不太强，所以就选择了替代品AES。非常感谢阿宝哥提供的<a href="https://mp.weixin.qq.com/s/i_Clg5kmTBwcFoSUNO-naQ" target="_blank" rel="noreferrer">玩转混合加密</a>文章，讲得通俗易懂，让我受益匪浅。最后阿宝哥提到把AES key 存放内存容易让他人搞到AES Key。所以我就去了解Web如何防调试、代 码怎么混淆等，下一篇：<a href="https://yanxuewen.cn/2020/12/27/Web01/" target="_blank" rel="noreferrer">Web如何防调试</a></p></blockquote><hr><h3 id="参考文献" tabindex="-1">参考文献： <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献：&quot;">​</a></h3><ul><li><a href="https://mp.weixin.qq.com/s/i_Clg5kmTBwcFoSUNO-naQ" target="_blank" rel="noreferrer">阿宝哥-玩转混合加密</a></li></ul><hr><h3 id="更多相关资料" tabindex="-1">更多相关资料： <a class="header-anchor" href="#更多相关资料" aria-label="Permalink to &quot;更多相关资料：&quot;">​</a></h3><ul><li><a href="https://www.jianshu.com/p/c44a8a1b7c38" target="_blank" rel="noreferrer">DES加密算法原理</a></li><li><a href="https://www.cxyxiaowu.com/1478.html" target="_blank" rel="noreferrer">算法科普：神秘的 DES 加密算法</a></li></ul><hr><blockquote><p>以上: 如发现有问题，欢迎留言指出，我及时更正</p></blockquote>`,33),t=[l];function i(r,c,o,h,d,u){return s(),n("div",null,t)}const k=a(e,[["render",i]]);export{m as __pageData,k as default};
