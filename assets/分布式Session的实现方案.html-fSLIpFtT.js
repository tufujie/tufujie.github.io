import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,d as e}from"./app-AuAuVshg.js";const o="/assets/基于redis存储session方案流程示意图-BP2ksoqw.png",r={},a=e(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p><strong>说明</strong></p><p>本文介绍分布式Session的实现方案。</p><p><strong>cookie和session的区别和联系</strong></p><p>cookie是本地客户端用来<mark>存储少量数据信息</mark>的，<mark>保存在客户端</mark>，<mark>用户能够很容易的获取</mark>，<mark>安全性不高</mark>，<mark>存储的数据量小</mark>。</p><p>session是服务器用来存储部分数据信息，<mark>保存在服务器，用户不容易获取，安全性高</mark>，<mark>储存的数据量相对大</mark>，存储在服务器，会占用一些服务器资源，但是对于它的优点来说，这个缺点可以忽略了。</p><p><strong>session有什么用</strong></p><p>在一次客户端和服务器之间的会话中，客户端(浏览器)向服务器发送请求，首先cookie会自动携带上次请求存储的数据(JSESSIONID)到服务器，服务器根据请求参数中的JSESSIONID到服务器中的session库中查询是否存在此JSESSIONID的信息，如果存在，那么服务器就知道此用户是谁，如果不存在，就会创建一个JSESSIONID，并在本次请求结束后将JSESSIONID返回给客户端，同时将此JSESSIONID在客户端cookie中进行保存。</p><p>客户端和服务器之间是通过http协议进行通信，但是http协议是无状态的，不同次请求会话是没有任何关联的，但是优点是处理速度快。</p><p>session是一次浏览器和服务器的交互的会话，当浏览器关闭的时候，会话就结束了，但是会话session还在，默认session是还保留30分钟的。</p><p><strong>分布式session一致性</strong></p><p>客户端发送一个请求，经过负载均衡后该请求会被分配到服务器中的其中一个，由于不同服务器含有不同的web服务器(例如Tomcat)，不同的web服务器中并不能发现之前web服务器保存的session信息，就会再次生成一个JSESSIONID，之前的状态就会丢失。</p><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h2><h3 id="方案一-客户端存储" tabindex="-1"><a class="header-anchor" href="#方案一-客户端存储" aria-hidden="true">#</a> <strong>方案一：客户端存储</strong></h3><p><strong>简介</strong></p><p>直接将信息存储在cookie中。</p><p>cookie是存储在客户端上的一小段数据，客户端通过http协议和服务器进行cookie交互，通常用来存储一些不敏感信息。</p><p><strong>缺点</strong>：</p><ol><li><p>数据存储在客户端，存在安全隐患</p></li><li><p>cookie存储大小、类型存在限制</p></li><li><p>数据存储在cookie中，如果一次请求cookie过大，会给网络增加更大的开销</p></li></ol><h3 id="方案二-session复制" tabindex="-1"><a class="header-anchor" href="#方案二-session复制" aria-hidden="true">#</a> <strong>方案二：session复制</strong></h3><p><strong>简介</strong></p><p>把session复制到所有服务器上，使每台服务器上都保存了所有用户的session信息。</p><p>session复制是小型企业应用使用较多的一种服务器集群session管理机制，在真正的开发使用的并不是很多，通过对web服务器(例如Tomcat)进行搭建集群。</p><p><strong>存在的问题</strong></p><p>session同步的原理是在同一个局域网里面通过发送广播来异步同步session的，一旦服务器多了，并发上来了，session需要同步的数据量就大了，需要将其他服务器上的session全部同步到本服务器上，会带来一定的网路开销，在用户量特别大的时候，会出现内存不足的情况。</p><p><strong>优点</strong></p><p>服务器之间的session信息都是同步的，任何一台服务器宕机时不会影响另外服务器中session的状态，配置相对简单。 Tomcat内部已经支持分布式架构开发管理机制，可以对tomcat修改配置来支持session复制，在集群中的几台服务器之间同步session对象，使每台服务器上都保存了所有用户的session信息，这样任何一台本机宕机都不会导致session数据的丢失，而服务器使用session时，也只需要在本机获取即可。</p><p><strong>如何配置</strong>：</p><p>在Tomcat安装目录下的config目录中的server.xml文件中，将注释打开，tomcat必须在同一个网关内，要不然收不到广播，同步不了session。</p><h3 id="方案三-session绑定-nginx" tabindex="-1"><a class="header-anchor" href="#方案三-session绑定-nginx" aria-hidden="true">#</a> <strong>方案三：session绑定（Nginx）</strong></h3><p><strong>Nginx简介</strong></p><p>Nginx是一款自由的、开源的、高性能的http服务器和反向代理服务器。 Nginx能做什么：反向代理、负载均衡、http服务器（动静代理）、正向代理。</p><p><strong>如何使用nginx进行session绑定</strong></p><p>我们利用nginx的反向代理和负载均衡，之前是客户端会被分配到其中一台服务器进行处理，具体分配到哪台服务器进行处理还得看服务器的负载均衡算法(轮询、随机、ip-hash、权重等)，但是我们可以基于nginx的ip-hash策略，可以对客户端和服务器进行绑定，同一个客户端就只能访问该服务器，无论客户端发送多少次请求都被同一个服务器处理。</p><p>在nginx安装目录下的conf目录中的nginx.conf文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream aaa {
    ip_hash;
    server 39.105.59.4:8080;
	server 39.105.59.4:8081;
}
server {
    listen 80;
    server_name www.wanyingjing.cn;
    ##root /usr/local/nginx/html;
    ##index index.html index.htm;
    location / {
        proxy_pass http:39.105.59.4;
        index index.html index.htm;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>缺点</strong></p><ol><li><p>容易造成单点故障，如果有一台服务器宕机，那么该台服务器上的session信息将会丢失</p></li><li><p>前端不能有负载均衡，如果有，session绑定将会出问题</p></li></ol><p><strong>优点</strong></p><ol><li>配置简单</li></ol><h3 id="方案四-使用redis存储-推荐" tabindex="-1"><a class="header-anchor" href="#方案四-使用redis存储-推荐" aria-hidden="true">#</a> <strong>方案四：使用Redis存储（推荐）</strong></h3><p>基于redis存储session方案流程示意图</p><figure><img src="`+o+'" alt="基于redis存储session方案流程示意图" tabindex="0" loading="lazy"><figcaption>基于redis存储session方案流程示意图</figcaption></figure><p><strong>优点</strong>：</p><ol><li><p>这是企业中使用的最多的一种方式</p></li><li><p>spring-session、Shiro等可以接管Session，也可将Session读写Redis。</p></li><li><p>数据保存在redis中，无缝接入，不存在任何安全隐患</p></li><li><p>redis自身可做集群，搭建主从，同时方便管理</p></li></ol><p><strong>缺点</strong>：</p><ol><li>多了一次网络调用，web容器需要向redis访问</li></ol><p><strong>总结</strong>：</p><p>一般会将web容器所在的服务器和redis所在的服务器放在同一个机房，减少网络开销，走内网进行连接。</p>',49),t=[a];function p(d,l){return i(),n("div",null,t)}const h=s(r,[["render",p],["__file","分布式Session的实现方案.html.vue"]]);export{h as default};
