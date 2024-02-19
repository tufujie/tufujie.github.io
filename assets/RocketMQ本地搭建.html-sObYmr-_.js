import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as t,c as o,a as e,b as r,e as i,d}from"./app-AuAuVshg.js";const c="/assets/RocketMQ本地搭建1-Zr0qhH_C.png",l="/assets/RocketMQ本地搭建2-SYzeZdig.png",m="/assets/RocketMQ本地搭建3-b_qsHmkg.png",v="/assets/RocketMQ本地搭建4-TT5QEAdM.png",u={},p=e("h2",{id:"rocketmq源码准备",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rocketmq源码准备","aria-hidden":"true"},"#"),r(),e("strong",null,"RocketMQ源码准备")],-1),g={href:"https://rocketmq.apache.org/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.apache.org/dyn/closer.cgi?path=rocketmq/5.0.0/rocketmq-all-5.0.0-source-release.zip",target:"_blank",rel:"noopener noreferrer"},h=d(`<p>下载源码导入IDEA后，开始配置本地环境。</p><h2 id="创建rocketmq工作目录" tabindex="-1"><a class="header-anchor" href="#创建rocketmq工作目录" aria-hidden="true">#</a> <strong>创建RocketMQ工作目录</strong></h2><p>在D盘新建rocketmq目录，在目录下新建conf,logs,store文件。</p><p>复制 rocketmq-rocketmq-all-5.0.0\\distribution\\conf 配置文件到 D:\\server\\rocketmq\\conf 目录下。</p><p>D:\\server\\rocketmq\\conf\\broker.conf 配置如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>brokerClusterName = DefaultCluster
brokerName = broker-a
brokerId = 0
deleteWhen = 04
fileReservedTime = 48
brokerRole = ASYNC_MASTER
flushDiskType = ASYNC_FLUSH

#nameServer 地址 分号分割
namesrvAddr=127.0.0.1:9876
#存储路径
storePathRootDir=D:\\\\server\\\\rocketmq\\\\store
#commitLog 存储路径
storePathCommitLog=D:\\\\server\\\\rocketmq\\\\store\\\\commitlog
消费队列存储路径
storePathConsumeQueue=D:\\\\server\\\\rocketmq\\\\store\\\\consumequeue
消息索引｜存储路径
storePathindex=D:\\\\server\\\\rocketmq\\\\store\\\\index
#checkpoint 文件存储路径
storeCheckpoint=D:\\\\server\\\\rocketmq\\\\store\\\\checkpoint
#abort 文件存储路径
abortFile=D:\\\\server\\\\rocketmq\\\\store\\\\abort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动namesrv" tabindex="-1"><a class="header-anchor" href="#启动namesrv" aria-hidden="true">#</a> <strong>启动Namesrv</strong></h2><p>找到namesrv的启动类 NamesrvStartup，配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ROCKETMQ_HOME=D:\\server\\rocketmq  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>后，Run NamesrvStartup.main()</p><figure><img src="`+c+'" alt="截图.png" tabindex="0" loading="lazy"><figcaption>截图.png</figcaption></figure><p>IDEA 控制台输出如下，启动成功。</p><figure><img src="'+l+`" alt="截图.png" tabindex="0" loading="lazy"><figcaption>截图.png</figcaption></figure><h2 id="启动broker" tabindex="-1"><a class="header-anchor" href="#启动broker" aria-hidden="true">#</a> <strong>启动Broker</strong></h2><p>在项目broker模块找到启动类 BrokerStartup，配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ROCKETMQ_HOME=D:\\server\\rocketmq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置启动参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-c D:\\\\server\\\\rocketmq\\\\conf\\\\broker.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>后，Run BrokerStartup.main()</p><figure><img src="`+m+'" alt="截图.png" tabindex="0" loading="lazy"><figcaption>截图.png</figcaption></figure><figure><img src="'+v+`" alt="截图.png" tabindex="0" loading="lazy"><figcaption>截图.png</figcaption></figure><p><strong>代码调用可参考</strong></p><p>RocketMqProducer.java和RocketMqConsumer.java</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rocketmq:
  consumer:
    group: springboot_consumer_group
    # 一次拉取消息最大值，注意是拉取消息的最大值而非消费最大值
    pull-batch-size: 10
  name-server: 127.0.0.1:9876
  producer:
    # 发送同一类消息的设置为同一个group，保证唯一
    group: springboot_producer_group
    # 发送消息超时时间，默认3000
    sendMessageTimeout: 10000
    # 发送消息失败重试次数，默认2
    retryTimesWhenSendFailed: 2
    # 异步消息重试此处，默认2
    retryTimesWhenSendAsyncFailed: 2
    # 消息最大长度，默认1024 * 1024 * 4(默认4M)
    maxMessageSize: 4096
    # 压缩消息阈值，默认4k(1024 * 4)
    compressMessageBodyThreshold: 4096
    # 是否在内部发送失败时重试另一个broker，默认false
    retryNextServer: false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rocketmq-dashboard本地搭建" tabindex="-1"><a class="header-anchor" href="#rocketmq-dashboard本地搭建" aria-hidden="true">#</a> RocketMQ Dashboard本地搭建</h2><p><strong>下载</strong></p><p>https://github.com/apache/rocketmq-dashboard</p><p><strong>启动项目</strong></p>`,28);function k(_,f){const n=a("ExternalLinkIcon");return t(),o("div",null,[p,e("p",null,[r("RocketMQ 官网地址："),e("a",g,[r("https://rocketmq.apache.org/"),i(n)])]),e("p",null,[r("下载地址：rocketmq-all-5.0.0-source-release.zip "),e("a",b,[r("https://www.apache.org/dyn/closer.cgi?path=rocketmq/5.0.0/rocketmq-all-5.0.0-source-release.zip"),i(n)])]),h])}const M=s(u,[["render",k],["__file","RocketMQ本地搭建.html.vue"]]);export{M as default};
