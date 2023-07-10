import{_ as s,o as a,c as n,B as l}from"./app.c500bea5.js";const D=JSON.parse(`{"title":"利用VMware 安装Centos 搭建Nuxt 打包环境","description":"","frontmatter":{},"headers":[{"level":2,"title":"Centos 环境搭建","slug":"centos-环境搭建","link":"#centos-环境搭建","children":[{"level":3,"title":"重置Centos Root 密码","slug":"重置centos-root-密码","link":"#重置centos-root-密码","children":[]},{"level":3,"title":"自动以root 身份登录","slug":"自动以root-身份登录","link":"#自动以root-身份登录","children":[]},{"level":3,"title":"配置虚拟机网络","slug":"配置虚拟机网络","link":"#配置虚拟机网络","children":[]},{"level":3,"title":"开放22和3000端口","slug":"开放22和3000端口","link":"#开放22和3000端口","children":[]},{"level":3,"title":"Centos 磁盘空间不足，拓展磁盘","slug":"centos-磁盘空间不足-拓展磁盘","link":"#centos-磁盘空间不足-拓展磁盘","children":[]},{"level":3,"title":"yum install 安装报错：[Failed to download metadata for repo 'AppStream'](https://techglimpse.com/failed-metadata-repo-appstream-centos-8/)","slug":"yum-install-安装报错-failed-to-download-metadata-for-repo-appstream-https-techglimpse-com-failed-metadata-repo-appstream-centos-8","link":"#yum-install-安装报错-failed-to-download-metadata-for-repo-appstream-https-techglimpse-com-failed-metadata-repo-appstream-centos-8","children":[]}]},{"level":2,"title":"安装Node 环境","slug":"安装node-环境","link":"#安装node-环境","children":[{"level":3,"title":"安装NVM","slug":"安装nvm","link":"#安装nvm","children":[]}]},{"level":2,"title":"安装Docker 环境","slug":"安装docker-环境","link":"#安装docker-环境","children":[]},{"level":2,"title":"Docker 打包和部署","slug":"docker-打包和部署","link":"#docker-打包和部署","children":[{"level":3,"title":"安装git","slug":"安装git","link":"#安装git","children":[]},{"level":3,"title":"获取示例代码","slug":"获取示例代码","link":"#获取示例代码","children":[]},{"level":3,"title":"创建Dockerfile","slug":"创建dockerfile","link":"#创建dockerfile","children":[]}]},{"level":2,"title":"Docker build","slug":"docker-build","link":"#docker-build","children":[]},{"level":2,"title":"Docker run image","slug":"docker-run-image","link":"#docker-run-image","children":[{"level":3,"title":"推送镜像至docker hub","slug":"推送镜像至docker-hub","link":"#推送镜像至docker-hub","children":[]}]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"relativePath":"article/03-framework/04-nuxt/利用VMware 安装Centos 搭建Nuxt 打包环境.md","lastUpdated":1688983339000}`),e={name:"article/03-framework/04-nuxt/利用VMware 安装Centos 搭建Nuxt 打包环境.md"},p=l(`<h1 id="利用vmware-安装centos-搭建nuxt-打包环境" tabindex="-1">利用VMware 安装Centos 搭建Nuxt 打包环境 <a class="header-anchor" href="#利用vmware-安装centos-搭建nuxt-打包环境" aria-hidden="true">#</a></h1><hr><p>VMware 安装Centos 网上教程一大把，我就不在这里赘述了。</p><h2 id="centos-环境搭建" tabindex="-1">Centos 环境搭建 <a class="header-anchor" href="#centos-环境搭建" aria-hidden="true">#</a></h2><h3 id="重置centos-root-密码" tabindex="-1">重置Centos Root 密码 <a class="header-anchor" href="#重置centos-root-密码" aria-hidden="true">#</a></h3><p><a href="https://linuxhint.com/recover_root_password_centos/" target="_blank" rel="noreferrer">重置Centos Root 密码</a></p><p>更多操作：切换至root角色命令</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">//进入root</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">角色</span></span>
<span class="line"><span style="color:#FFCB6B;">su</span></span>
<span class="line"><span style="color:#FFCB6B;">输入root密码</span></span>
<span class="line"></span></code></pre></div><h3 id="自动以root-身份登录" tabindex="-1">自动以root 身份登录 <a class="header-anchor" href="#自动以root-身份登录" aria-hidden="true">#</a></h3><p>免得每次都需要切换成root角色才能操作</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">vim</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">**</span><span style="color:#C3E88D;">/etc/gdm/custom.conf</span></span>
<span class="line"><span style="color:#FFCB6B;">找到[daemon]部分</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">添加一下两句(注意：如果存在对应预计，对应着修改</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">AutomaticLoginEnable</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">True</span></span>
<span class="line"><span style="color:#A6ACCD;">AutomaticLogin</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">root</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">退出reboot即可**</span></span>
<span class="line"></span></code></pre></div><h3 id="配置虚拟机网络" tabindex="-1">配置虚拟机网络 <a class="header-anchor" href="#配置虚拟机网络" aria-hidden="true">#</a></h3><p>由于需要外部可以访问虚拟机服务，所以我们选择桥接模式。<a href="https://blog.csdn.net/zhangxm_qz/article/details/122612605" target="_blank" rel="noreferrer">相关资料</a></p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20230710175240.png" alt=""></p><blockquote><p>注意：确保主机和虚拟机的ip地址在同一个网段，然后网关和子网掩码跟主机的是一样的。打开虚拟机Centos 配置文件</p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">vim</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/sysconfig/network-scripts/ifcfg-ens160</span></span>
<span class="line"><span style="color:#FFCB6B;">添加以下图示内容</span></span>
<span class="line"></span></code></pre></div><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20230710175431.png" alt=""></p><h3 id="开放22和3000端口" tabindex="-1">开放22和3000端口 <a class="header-anchor" href="#开放22和3000端口" aria-hidden="true">#</a></h3><p>由于centos 8开始都采用firewalld来管理端口，所以用firewalld开配置策略</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># add open port</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--permanent</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--add-port=3000/tcp</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--permanent</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--add-port=22/tcp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># reload</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--reload</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># firewalld port status</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--list-all</span></span>
<span class="line"></span></code></pre></div><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20230710175459.png" alt=""></p><h3 id="centos-磁盘空间不足-拓展磁盘" tabindex="-1">Centos 磁盘空间不足，拓展磁盘 <a class="header-anchor" href="#centos-磁盘空间不足-拓展磁盘" aria-hidden="true">#</a></h3><p>如果你磁盘空间设置的够用，可以跳过此段内容</p><p>操作步骤：</p><ol><li><p>关闭虚拟机，调整磁盘空间大小</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20230710175536.png" alt=""></p></li><li><p>创建挂载点：选择一个目录作为您的挂载点。例如，您可以在 <strong><code>/mnt</code></strong> 目录下创建一个新的目录，例如 <strong><code>/mnt/mydisk</code></strong>：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/mnt/mydisk</span></span>
<span class="line"></span></code></pre></div></li><li><p>挂载分区：使用以下命令将分区挂载到先前创建的挂载点上。将 <strong><code>&lt;partition&gt;</code></strong> 替换为您要挂载的分区设备名称，例如 <strong>/dev/nvme0n1p4</strong>，将 <strong><code>&lt;mount_point&gt;</code></strong> 替换为先前创建的挂载点路径：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mount</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">partitio</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">mount_poin</span><span style="color:#A6ACCD;">t</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>例如：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mount</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">**</span><span style="color:#C3E88D;">/dev/nvme0n1p4</span><span style="color:#A6ACCD;">**</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/mnt/mydisk</span></span>
<span class="line"></span></code></pre></div></li><li><p>检查挂载：运行 <strong><code>df -h</code></strong> 命令，您应该能够看到新挂载的分区，并在挂载点处显示其容量信息。</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20230710175804.png" alt=""></p><blockquote><p>说明：看到**/dev/nvme0n1p4，**说明成功了</p></blockquote></li></ol><h3 id="yum-install-安装报错-failed-to-download-metadata-for-repo-appstream-https-techglimpse-com-failed-metadata-repo-appstream-centos-8" tabindex="-1">yum install 安装报错：<code>[Failed to download metadata for repo &#39;AppStream&#39;](https://techglimpse.com/failed-metadata-repo-appstream-centos-8/)</code> <a class="header-anchor" href="#yum-install-安装报错-failed-to-download-metadata-for-repo-appstream-https-techglimpse-com-failed-metadata-repo-appstream-centos-8" aria-hidden="true">#</a></h3><p>Centos 8 2021年12月31 停止维护，Centos 8 不在从官方Centos 获取开发资源。所以修改镜像资源路径</p><p>解决方法</p><ol><li><p><code>cd /etc/yum.repos.d/</code></p></li><li><p>运行以下2条命令</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">s/mirrorlist/#mirrorlist/g</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/yum.repos.d/CentOS-</span><span style="color:#A6ACCD;">*</span></span>
<span class="line"><span style="color:#FFCB6B;">sed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">s|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/yum.repos.d/CentOS-</span><span style="color:#A6ACCD;">*</span></span>
<span class="line"></span></code></pre></div></li><li><p><code>yum update -y</code></p></li></ol><h2 id="安装node-环境" tabindex="-1">安装Node 环境 <a class="header-anchor" href="#安装node-环境" aria-hidden="true">#</a></h2><p>由于在日后的开发中，肯定会碰到不同的项目需要的node项目版本不一样，所以我们用NVM来管理node 将会使日后开发非常方便</p><h3 id="安装nvm" tabindex="-1">安装NVM <a class="header-anchor" href="#安装nvm" aria-hidden="true">#</a></h3><ol><li><p><code>sudo yum install curl -y</code></p></li><li><p><code>curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash</code></p></li><li><p><code>source ~/.bashrc</code></p></li><li><p>nvm install node-version-num 比如：nvm install 16.15.1</p><blockquote><p>说明：如何你不知道有哪些那边，可通过nvm ls-remote 查看</p></blockquote></li></ol><p>相关资料：<strong><strong><a href="https://tecadmin.net/how-to-install-nvm-on-centos-7/" target="_blank" rel="noreferrer">How To Install NVM on CentOS/RHEL 7</a></strong></strong></p><p>如果通过nvm 安装node，无论安装什么node版本都是，找不到对应版本信息：Version &#39;node&#39; not found。<a href="https://stackoverflow.com/questions/26476744/nvm-ls-remote-command-results-in-n-a/36300754" target="_blank" rel="noreferrer">相关资料</a></p><p>解决办法：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">changing</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">from</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> NVM_NODEJS_ORG_MIRROR</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">http://nodejs.org/dist/</span></span>
<span class="line"><span style="color:#FFCB6B;">to</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> NVM_NODEJS_ORG_MIRROR</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">https://nodejs.org/dist/</span></span>
<span class="line"></span></code></pre></div><h2 id="安装docker-环境" tabindex="-1">安装Docker 环境 <a class="header-anchor" href="#安装docker-环境" aria-hidden="true">#</a></h2><ol><li><p>install docker-ce</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dnf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--nobest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker-ce</span></span>
<span class="line"></span></code></pre></div><blockquote><p>说明：—nobest：不适用最佳包，因为安装最佳包可能会失败。</p></blockquote></li><li><p>启动Docker 守护进程</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">enable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--now</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span></span>
<span class="line"></span></code></pre></div><p>可以通过以下命令查看是否以及激活和启用</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is-active</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is-enabled</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span></span>
<span class="line"></span></code></pre></div></li></ol><h2 id="docker-打包和部署" tabindex="-1">Docker 打包和部署 <a class="header-anchor" href="#docker-打包和部署" aria-hidden="true">#</a></h2><h3 id="安装git" tabindex="-1">安装git <a class="header-anchor" href="#安装git" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span></span>
<span class="line"></span></code></pre></div><h3 id="获取示例代码" tabindex="-1">获取示例代码 <a class="header-anchor" href="#获取示例代码" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/Documents/workspace</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/Documents/workspace</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/yxw007/Nuxt-started-demo.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Nuxt-started-demo</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">isntall</span></span>
<span class="line"></span></code></pre></div><h3 id="创建dockerfile" tabindex="-1">创建Dockerfile <a class="header-anchor" href="#创建dockerfile" aria-hidden="true">#</a></h3><blockquote><p>说明：Dockerfile 配置文件放置在getting-started 项目根目录下</p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># use node 16 alpine image</span></span>
<span class="line"><span style="color:#FFCB6B;">FROM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node:16-alpine</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">builder</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># create work directory in app folder</span></span>
<span class="line"><span style="color:#FFCB6B;">WORKDIR</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># install required packages for node image</span></span>
<span class="line"><span style="color:#FFCB6B;">RUN</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apk</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--no-cache</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">openssh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">g++</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">python3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># copy over package.json files</span></span>
<span class="line"><span style="color:#FFCB6B;">COPY</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">package.json</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/app/</span></span>
<span class="line"><span style="color:#FFCB6B;">COPY</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">package-lock.json</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/app/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># install all depencies</span></span>
<span class="line"><span style="color:#FFCB6B;">RUN</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ci</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cache</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clean</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--force</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># copy over all files to the work directory</span></span>
<span class="line"><span style="color:#FFCB6B;">ADD</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># build the project</span></span>
<span class="line"><span style="color:#FFCB6B;">RUN</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># start final image</span></span>
<span class="line"><span style="color:#FFCB6B;">FROM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node:16-alpine</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">WORKDIR</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># copy over build files from builder step</span></span>
<span class="line"><span style="color:#FFCB6B;">COPY</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--from=builder</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/app</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">/app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># expose the host and port 3000 to the server</span></span>
<span class="line"><span style="color:#FFCB6B;">ENV</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HOST</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.0</span><span style="color:#C3E88D;">.0.0</span></span>
<span class="line"><span style="color:#FFCB6B;">EXPOSE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># run the build project with node</span></span>
<span class="line"><span style="color:#FFCB6B;">ENTRYPOINT</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">node</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.output/server/index.mjs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">]</span></span>
<span class="line"></span></code></pre></div><h2 id="docker-build" tabindex="-1">Docker build <a class="header-anchor" href="#docker-build" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dockerHubAccount/Name:Tag</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">example:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">aa4790139/nuxt-started-demo:1.0.1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span>
<span class="line"></span></code></pre></div><h2 id="docker-run-image" tabindex="-1">Docker run image <a class="header-anchor" href="#docker-run-image" aria-hidden="true">#</a></h2><ol><li><p>docker image ls ，get image id</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20230710175919.png" alt=""></p></li><li><p>docker run -itd -p dockerPort:localPort imageID</p><blockquote><p>注意：一定要加上-itd，否则启动后就是Unable to Connect。 <a href="https://blog.csdn.net/weixin_44847332/article/details/123785555" target="_blank" rel="noreferrer">相关资料</a></p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-itd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dockerPort:localPort</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">imageID</span></span>
<span class="line"><span style="color:#FFCB6B;">example:</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-itd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3000</span><span style="color:#C3E88D;">:3000</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">a4a5e167de0c</span></span>
<span class="line"></span></code></pre></div><p>访问你虚拟机ip和3000端口，效果如下：</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20230710175950.png" alt=""></p><p>如果你看到这个界面，那么恭喜你docker 运行 nuxt app 成功了</p></li></ol><p>由于我们不可能打出来的image仅运行在我们的虚拟机中，我们将包推送至docker hub，然后看看我们的image 有没有问题。</p><h3 id="推送镜像至docker-hub" tabindex="-1">推送镜像至docker hub <a class="header-anchor" href="#推送镜像至docker-hub" aria-hidden="true">#</a></h3><ol><li><p>首先：我们需要登录docker hub 创建对应的仓库</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20230710180002.png" alt=""></p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20230710180010.png" alt=""></p></li><li><p>其次：设置access token，设置好access token 后才能使我们打出来的image 推送至对应参考</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20230710180024.png" alt=""></p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20230710180031.png" alt=""></p></li><li><p>然后将image 推送至刚创建的仓库中</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">aa4790139/nuxt-started-demo:1.0.1</span></span>
<span class="line"></span></code></pre></div><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20230710180040.png" alt=""></p></li><li><p>最后：利用docker play 验证，<a href="https://labs.play-with-docker.com/" target="_blank" rel="noreferrer">平台地址</a></p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20230710180048.png" alt=""></p><ul><li><p>拉取镜像文件</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">aa4790139/nuxt-started-demo:1.0.1</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></li><li><p>运行镜像</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20230710180100.png" alt=""></p></li><li><p>效果如下：</p><p><img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20230710180106.png" alt=""></p><blockquote><p>提示：<strong>如果看到这个界面，恭喜你成功了</strong>。 🎉🎉🎉🎉</p></blockquote></li></ul></li></ol><p>文章内容有点长，希望能帮助到你，感谢你的耐心阅读，当然也非常感谢文章外链文章作者，没有他们帮助我不可能成功。</p><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-hidden="true">#</a></h2><ul><li><a href="https://answers.netlify.com/t/nuxt-3-deploy-failed-rollup-failed-to-resolve-import-vue/77680/26" target="_blank" rel="noreferrer">https://answers.netlify.com/t/nuxt-3-deploy-failed-rollup-failed-to-resolve-import-vue/77680/26</a></li><li><a href="https://linuxconfig.org/how-to-install-docker-in-rhel-8" target="_blank" rel="noreferrer">https://linuxconfig.org/how-to-install-docker-in-rhel-8</a></li><li><a href="https://dev.to/rafaelmagalhaes/docker-and-nuxt-3-18nm" target="_blank" rel="noreferrer">https://dev.to/rafaelmagalhaes/docker-and-nuxt-3-18nm</a></li></ul>`,57),o=[p];function t(c,r,i,d,C,y){return a(),n("div",null,o)}const g=s(e,[["render",t]]);export{D as __pageData,g as default};
