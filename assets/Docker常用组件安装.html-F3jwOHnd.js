import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as i,e as n}from"./app-AT5MTRLB.js";const s={},d=n(`<h2 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> <strong>Redis</strong></h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 下载Redis镜像
docker pull redis:4.0.1

// 安装Redis容器
docker run --rm -d --name redis6379 -p 6379:6379 redis:4.0.1 --requirepass &quot;root&quot;

# 进入容器
docker exec -it redis6379 bash
 
# 打开 redis 的客户端
redis-cli
 
# 输入 redis 的密码
auth root
 
# 封装一个 key 值
set age 35
 
# 获取刚才封装的 key 值
get age
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="zookeeper" tabindex="-1"><a class="header-anchor" href="#zookeeper" aria-hidden="true">#</a> <strong>Zookeeper</strong></h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run --name zookeeper-server -p 2181:2181 -e ALLOW_ANONYMOUS_LOGIN=yes -d bitnami/zookeeper:latest
docker run --name zookeeper -p 2181:2181 -d zookeeper:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rocketmq" tabindex="-1"><a class="header-anchor" href="#rocketmq" aria-hidden="true">#</a> <strong>RocketMQ</strong></h2><p>RocketMQ比较复杂，详见具体文件</p><h2 id="kafka" tabindex="-1"><a class="header-anchor" href="#kafka" aria-hidden="true">#</a> <strong>Kafka</strong></h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># --network app-tier
# 172.18.0.69:2181是zookeeper服务的IP和端口，无法连接127.0.0.1
docker run -d --name kafka-server -p 9092:9092 -e ALLOW_PLAINTEXT_LISTENER=yes -e KAFKA_CFG_ZOOKEEPER_CONNECT=172.18.0.69:2181 -e KAFKA_CFG_ADVERTISED_LISTENERS=PLAINTEXT://127.0.0.1:9092 bitnami/kafka:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rabbitmq" tabindex="-1"><a class="header-anchor" href="#rabbitmq" aria-hidden="true">#</a> <strong>RabbitMQ</strong></h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d --hostname my-rabbit --name rabbit -p 15672:15672 -p 5673:5672 rabbitmq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb" aria-hidden="true">#</a> <strong>MongoDB</strong></h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -it -d --name mongo -v /docker_volume/mongodb/data:/data/db -p 27017:27017 mongo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="skywalking" tabindex="-1"><a class="header-anchor" href="#skywalking" aria-hidden="true">#</a> SkyWalking</h2><h3 id="elasticsearch" tabindex="-1"><a class="header-anchor" href="#elasticsearch" aria-hidden="true">#</a> elasticsearch</h3><p>安装es存储数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run --name elasticsearch -p 9200:9200  -p 9300:9300 -e &quot;discovery.type=single-node&quot; -e ES_JAVA_OPTS=&quot;-Xms84m -Xmx512m&quot; -d elasticsearch:7.12.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装 skywalking oap</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run --name skywalking-oap apache/skywalking-oap-server:8.6.0-es7&gt; --restart always -p 11800:11800 -p 12800:12800 -d --privileged=true -e TZ=Asia/Shanghai -e SW_STORAGE=elasticsearch7 -e SW_STORAGE_ES_CLUSTER_NODES=192.168.29.29:9200 -v /etc/localtime:/etc/localtime:ro apache/skywalking-oap-server:8.6.0-es7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装skywalking ui</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run --name skywalking-ui --restart always -p 8081:8080 -d --privileged=true --link skywalking-oap:skywalking-oap -e TZ=Asia/Shanghai -e SW_OAP_ADDRESS=192.168.29.29:12800 -v /etc/localtime:/etc/localtime:ro apache/skywalking-ui:8.6.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="kibana" tabindex="-1"><a class="header-anchor" href="#kibana" aria-hidden="true">#</a> kibana</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull elastic/kibana:6.8.12
# 127.0.0.1:9200替换为部署ES服务器的IP:端口
# --link elasticsearch，可以不用
docker run -d --name kibana001 --link elasticsearch -e ELASTICSEARCH_URL=http://127.0.0.1:9200 -p 5601:5601 elastic/kibana:6.8.12

给Kibana设置账号密码
首先进入kibana容器
docker exec -it kibana001 /bin/bash
配置账号密码
vi config/kibana.yml
#添加以下内容
elasticsearch.username: &quot;elastic&quot;
elasticsearch.password: &quot;xxxxxxxxxx&quot;
完整的配置如下：
server.name: kibana
server.host: &quot;0&quot;
elasticsearch.url: http://#{ip}:9200
elasticsearch.username: &quot;elastic&quot;
elasticsearch.password: &quot;xxxxxxxxxx&quot;
xpack.monitoring.ui.container.elasticsearch.enabled: true

保存，exit 退出容器，重启Kibana
#重启Kibana
docker restart kibana001
重启后，输入Kibana的访问地址：
http://localhost:5601/app/kibana#/home
发现Kibana也已经提示让你输入账号密码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),r=[d];function l(t,c){return a(),i("div",null,r)}const u=e(s,[["render",l],["__file","Docker常用组件安装.html.vue"]]);export{u as default};
