import{_ as s,c as i,o as a,a7 as n}from"./chunks/framework.GnyprNw9.js";const F=JSON.parse('{"title":"利用VMware 安装Centos 搭建Nuxt 打包环境","description":"","frontmatter":{"title":"利用VMware 安装Centos 搭建Nuxt 打包环境","author":"Potter","date":"2023-7-13 11:56","tags":["Nuxt","Centos","VMware"],"categories":["Nuxt"]},"headers":[],"relativePath":"article/03-framework/04-nuxt/利用VMware 安装Centos 搭建Nuxt 打包环境.md","filePath":"article/03-framework/04-nuxt/利用VMware 安装Centos 搭建Nuxt 打包环境.md","lastUpdated":1719974778000}'),t={name:"article/03-framework/04-nuxt/利用VMware 安装Centos 搭建Nuxt 打包环境.md"},e=n(`<h1 id="利用vmware-安装centos-搭建nuxt-打包环境" tabindex="-1">利用VMware 安装Centos 搭建Nuxt 打包环境 <a class="header-anchor" href="#利用vmware-安装centos-搭建nuxt-打包环境" aria-label="Permalink to &quot;利用VMware 安装Centos 搭建Nuxt 打包环境&quot;">​</a></h1><p>VMware 安装Centos 网上教程一大把，我就不在这里赘述了。</p><h2 id="centos-环境搭建" tabindex="-1">Centos 环境搭建 <a class="header-anchor" href="#centos-环境搭建" aria-label="Permalink to &quot;Centos 环境搭建&quot;">​</a></h2><h3 id="重置centos-root-密码" tabindex="-1">重置Centos Root 密码 <a class="header-anchor" href="#重置centos-root-密码" aria-label="Permalink to &quot;重置Centos Root 密码&quot;">​</a></h3><p><a href="https://linuxhint.com/recover_root_password_centos/" target="_blank" rel="noreferrer">重置Centos Root 密码</a></p><p>更多操作：切换至root角色命令</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//进入root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 角色</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">su</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">输入root密码</span></span></code></pre></div><h3 id="自动以root-身份登录" tabindex="-1">自动以root 身份登录 <a class="header-anchor" href="#自动以root-身份登录" aria-label="Permalink to &quot;自动以root 身份登录&quot;">​</a></h3><p>免得每次都需要切换成root角色才能操作</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> **</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/etc/gdm/custom.conf</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">找到[daemon]部分</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">添加一下两句(注意：如果存在对应预计，对应着修改</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AutomaticLoginEnable</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">True</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AutomaticLogin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">root</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">退出reboot即可**</span></span></code></pre></div><h3 id="配置虚拟机网络" tabindex="-1">配置虚拟机网络 <a class="header-anchor" href="#配置虚拟机网络" aria-label="Permalink to &quot;配置虚拟机网络&quot;">​</a></h3><p>由于需要外部可以访问虚拟机服务，所以我们选择桥接模式。<a href="https://blog.csdn.net/zhangxm_qz/article/details/122612605" target="_blank" rel="noreferrer">相关资料</a></p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20230710175240.png" alt=""></p><blockquote><p>注意：确保主机和虚拟机的ip地址在同一个网段，然后网关和子网掩码跟主机的是一样的。打开虚拟机Centos 配置文件</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/sysconfig/network-scripts/ifcfg-ens160</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">添加以下图示内容</span></span></code></pre></div><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20230710175431.png" alt=""></p><h3 id="开放22和3000端口" tabindex="-1">开放22和3000端口 <a class="header-anchor" href="#开放22和3000端口" aria-label="Permalink to &quot;开放22和3000端口&quot;">​</a></h3><p>由于centos 8开始都采用firewalld来管理端口，所以用firewalld开配置策略</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># add open port</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewall-cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --permanent</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --add-port=3000/tcp</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewall-cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --permanent</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --add-port=22/tcp</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># reload</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewall-cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --reload</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># firewalld port status</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewall-cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --list-all</span></span></code></pre></div><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20230710175459.png" alt=""></p><h3 id="centos-磁盘空间不足-拓展磁盘" tabindex="-1">Centos 磁盘空间不足，拓展磁盘 <a class="header-anchor" href="#centos-磁盘空间不足-拓展磁盘" aria-label="Permalink to &quot;Centos 磁盘空间不足，拓展磁盘&quot;">​</a></h3><p>如果你磁盘空间设置的够用，可以跳过此段内容</p><p>操作步骤：</p><ol><li><p>关闭虚拟机，调整磁盘空间大小</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20230710175536.png" alt=""></p></li><li><p>创建挂载点：选择一个目录作为您的挂载点。例如，您可以在 <strong><code>/mnt</code></strong> 目录下创建一个新的目录，例如 <strong><code>/mnt/mydisk</code></strong>：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /mnt/mydisk</span></span></code></pre></div></li><li><p>挂载分区：使用以下命令将分区挂载到先前创建的挂载点上。将 <strong><code>&lt;partition&gt;</code></strong> 替换为您要挂载的分区设备名称，例如 <strong>/dev/nvme0n1p4</strong>，将 <strong><code>&lt;mount_point&gt;</code></strong> 替换为先前创建的挂载点路径：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mount</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">partitio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mount_poin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>例如：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mount</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> **</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/dev/nvme0n1p4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">**</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /mnt/mydisk</span></span></code></pre></div></li><li><p>检查挂载：运行 <strong><code>df -h</code></strong> 命令，您应该能够看到新挂载的分区，并在挂载点处显示其容量信息。</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20230710175804.png" alt=""></p><blockquote><p>说明：看到**/dev/nvme0n1p4，**说明成功了</p></blockquote></li></ol><h3 id="yum-install-安装报错-failed-to-download-metadata-for-repo-appstream-https-techglimpse-com-failed-metadata-repo-appstream-centos-8" tabindex="-1">yum install 安装报错：<code>[Failed to download metadata for repo &#39;AppStream&#39;](https://techglimpse.com/failed-metadata-repo-appstream-centos-8/)</code> <a class="header-anchor" href="#yum-install-安装报错-failed-to-download-metadata-for-repo-appstream-https-techglimpse-com-failed-metadata-repo-appstream-centos-8" aria-label="Permalink to &quot;yum install 安装报错：\`[Failed to download metadata for repo &#39;AppStream&#39;](https://techglimpse.com/failed-metadata-repo-appstream-centos-8/)\`&quot;">​</a></h3><p>Centos 8 2021年12月31 停止维护，Centos 8 不在从官方Centos 获取开发资源。所以修改镜像资源路径</p><p>解决方法</p><ol><li><p><code>cd /etc/yum.repos.d/</code></p></li><li><p>运行以下2条命令</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s/mirrorlist/#mirrorlist/g&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/yum.repos.d/CentOS-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/yum.repos.d/CentOS-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span></span></code></pre></div></li><li><p><code>yum update -y</code></p></li></ol><h2 id="安装node-环境" tabindex="-1">安装Node 环境 <a class="header-anchor" href="#安装node-环境" aria-label="Permalink to &quot;安装Node 环境&quot;">​</a></h2><p>由于在日后的开发中，肯定会碰到不同的项目需要的node项目版本不一样，所以我们用NVM来管理node 将会使日后开发非常方便</p><h3 id="安装nvm" tabindex="-1">安装NVM <a class="header-anchor" href="#安装nvm" aria-label="Permalink to &quot;安装NVM&quot;">​</a></h3><ol><li><p><code>sudo yum install curl -y</code></p></li><li><p><code>curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash</code></p></li><li><p><code>source ~/.bashrc</code></p></li><li><p>nvm install node-version-num 比如：nvm install 16.15.1</p><blockquote><p>说明：如何你不知道有哪些那边，可通过nvm ls-remote 查看</p></blockquote></li></ol><p>相关资料：<strong><strong><a href="https://tecadmin.net/how-to-install-nvm-on-centos-7/" target="_blank" rel="noreferrer">How To Install NVM on CentOS/RHEL 7</a></strong></strong></p><p>如果通过nvm 安装node，无论安装什么node版本都是，找不到对应版本信息：Version &#39;node&#39; not found。<a href="https://stackoverflow.com/questions/26476744/nvm-ls-remote-command-results-in-n-a/36300754" target="_blank" rel="noreferrer">相关资料</a></p><p>解决办法：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">changing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> from</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NVM_NODEJS_ORG_MIRROR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://nodejs.org/dist/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">to</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NVM_NODEJS_ORG_MIRROR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">https://nodejs.org/dist/</span></span></code></pre></div><h2 id="安装docker-环境" tabindex="-1">安装Docker 环境 <a class="header-anchor" href="#安装docker-环境" aria-label="Permalink to &quot;安装Docker 环境&quot;">​</a></h2><ol><li><p>install docker-ce</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dnf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --nobest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker-ce</span></span></code></pre></div><blockquote><p>说明：—nobest：不适用最佳包，因为安装最佳包可能会失败。</p></blockquote></li><li><p>启动Docker 守护进程</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --now</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span></span></code></pre></div><p>可以通过以下命令查看是否以及激活和启用</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is-active</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is-enabled</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span></span></code></pre></div></li></ol><h2 id="docker-打包和部署" tabindex="-1">Docker 打包和部署 <a class="header-anchor" href="#docker-打包和部署" aria-label="Permalink to &quot;Docker 打包和部署&quot;">​</a></h2><h3 id="安装git" tabindex="-1">安装git <a class="header-anchor" href="#安装git" aria-label="Permalink to &quot;安装git&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span></span></code></pre></div><h3 id="获取示例代码" tabindex="-1">获取示例代码 <a class="header-anchor" href="#获取示例代码" aria-label="Permalink to &quot;获取示例代码&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /Documents/workspace</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /Documents/workspace</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/yxw007/Nuxt-started-demo.git</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Nuxt-started-demo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> isntall</span></span></code></pre></div><h3 id="创建dockerfile" tabindex="-1">创建Dockerfile <a class="header-anchor" href="#创建dockerfile" aria-label="Permalink to &quot;创建Dockerfile&quot;">​</a></h3><blockquote><p>说明：Dockerfile 配置文件放置在getting-started 项目根目录下</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># use node 16 alpine image</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node:16-alpine</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> as</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> builder</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># create work directory in app folder</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WORKDIR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /app</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># install required packages for node image</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RUN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apk</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --no-cache</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> openssh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> g++</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> python3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># copy over package.json files</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">COPY</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package.json</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /app/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">COPY</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package-lock.json</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /app/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># install all depencies</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RUN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ci</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cache</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clean</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --force</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># copy over all files to the work directory</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ADD</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /app</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># build the project</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RUN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># start final image</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node:16-alpine</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WORKDIR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /app</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># copy over build files from builder step</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">COPY</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --from=builder</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /app</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  /app</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># expose the host and port 3000 to the server</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ENV</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HOST</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.0.0.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">EXPOSE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># run the build project with node</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ENTRYPOINT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.output/server/index.mjs&quot;]</span></span></code></pre></div><h2 id="docker-build" tabindex="-1">Docker build <a class="header-anchor" href="#docker-build" aria-label="Permalink to &quot;Docker build&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dockerHubAccount/Name:Tag</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">example:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> aa4790139/nuxt-started-demo:1.0.1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span></code></pre></div><h2 id="docker-run-image" tabindex="-1">Docker run image <a class="header-anchor" href="#docker-run-image" aria-label="Permalink to &quot;Docker run image&quot;">​</a></h2><ol><li><p>docker image ls ，get image id</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20230710175919.png" alt=""></p></li><li><p>docker run -itd -p dockerPort:localPort imageID</p><blockquote><p>注意：一定要加上-itd，否则启动后就是Unable to Connect。 <a href="https://blog.csdn.net/weixin_44847332/article/details/123785555" target="_blank" rel="noreferrer">相关资料</a></p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -itd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dockerPort:localPort</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> imageID</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">example:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -itd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 3000:3000</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a4a5e167de0c</span></span></code></pre></div><p>访问你虚拟机ip和3000端口，效果如下：</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20230710175950.png" alt=""></p><p>如果你看到这个界面，那么恭喜你docker 运行 nuxt app 成功了</p></li></ol><p>由于我们不可能打出来的image仅运行在我们的虚拟机中，我们将包推送至docker hub，然后看看我们的image 有没有问题。</p><h3 id="推送镜像至docker-hub" tabindex="-1">推送镜像至docker hub <a class="header-anchor" href="#推送镜像至docker-hub" aria-label="Permalink to &quot;推送镜像至docker hub&quot;">​</a></h3><ol><li><p>首先：我们需要登录docker hub 创建对应的仓库</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20230710180002.png" alt=""></p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20230710180010.png" alt=""></p></li><li><p>其次：设置access token，设置好access token 后才能使我们打出来的image 推送至对应参考</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20230710180024.png" alt=""></p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20230710180031.png" alt=""></p></li><li><p>然后将image 推送至刚创建的仓库中</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> aa4790139/nuxt-started-demo:1.0.1</span></span></code></pre></div><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20230710180040.png" alt=""></p></li><li><p>最后：利用docker play 验证，<a href="https://labs.play-with-docker.com/" target="_blank" rel="noreferrer">平台地址</a></p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20230710180048.png" alt=""></p><ul><li><p>拉取镜像文件</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> aa4790139/nuxt-started-demo:1.0.1</span></span></code></pre></div></li><li><p>运行镜像</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20230710180100.png" alt=""></p></li><li><p>效果如下：</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20230710180106.png" alt=""></p><blockquote><p>提示：<strong>如果看到这个界面，恭喜你成功了</strong>。 🎉🎉🎉🎉</p></blockquote></li></ul></li></ol><p>文章内容有点长，希望能帮助到你，感谢你的耐心阅读，当然也非常感谢文章外链文章作者，没有他们帮助我不可能成功。</p><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://answers.netlify.com/t/nuxt-3-deploy-failed-rollup-failed-to-resolve-import-vue/77680/26" target="_blank" rel="noreferrer">https://answers.netlify.com/t/nuxt-3-deploy-failed-rollup-failed-to-resolve-import-vue/77680/26</a></li><li><a href="https://linuxconfig.org/how-to-install-docker-in-rhel-8" target="_blank" rel="noreferrer">https://linuxconfig.org/how-to-install-docker-in-rhel-8</a></li><li><a href="https://dev.to/rafaelmagalhaes/docker-and-nuxt-3-18nm" target="_blank" rel="noreferrer">https://dev.to/rafaelmagalhaes/docker-and-nuxt-3-18nm</a></li></ul>`,56),l=[e];function p(h,k,r,d,o,c){return a(),i("div",null,l)}const y=s(t,[["render",p]]);export{F as __pageData,y as default};
