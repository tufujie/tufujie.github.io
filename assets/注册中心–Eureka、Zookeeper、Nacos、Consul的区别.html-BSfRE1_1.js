const t=JSON.parse('{"key":"v-5c04321a","path":"/home/%E6%8A%80%E6%9C%AF%E9%80%89%E5%9E%8B/%E6%8A%80%E6%9C%AF%E6%A0%88%E5%AF%B9%E6%AF%94/%E6%B3%A8%E5%86%8C%E4%B8%AD%E5%BF%83%E2%80%93Eureka%E3%80%81Zookeeper%E3%80%81Nacos%E3%80%81Consul%E7%9A%84%E5%8C%BA%E5%88%AB.html","title":"注册中心–Eureka、Zookeeper、Nacos、Consul的区别","lang":"zh-CN","frontmatter":{"title":"注册中心–Eureka、Zookeeper、Nacos、Consul的区别","description":"简介 本文介绍分布式中常用的注册中心，包括：Eureka、Zookeeper、Nacos、Consul。会介绍他们之间的区别。 注册中心对比 项 Eureka Zookeeper Nacos Consul CAP理论保证项 AP（可用性与容错性）。 各个节点是平等的，只要有一台Eureka就可以保证服务可用，但查询到的数据并不是最新的。 CP（一致性与容错性）。 选举期间若注册服务瘫痪，虽然服务最终会恢复，但选举期间是不可用的。 CP或AP。 默认是AP CP 节点角色 各个节点平等 有Leader和Follower角色 分区问题 采用自我保护机制解决分区问题 采用过半数存活原则 健康检查 Client Beat Keep Alive TCP/HTTP/MYSQL/Client Beat TCP/HTTP/gRPC/Cmd 负载均衡策略 Ribbon – 权重/metadata/Selector Fabio 雪崩保护 有 无 自动注销实例 支持 支持 访问协议 HTTP TCP 监听支持 支持 支持 多数据中心 支持 不支持 跨注册中心同步 不支持 不支持 SpringCloud集成 支持 支持 Dobbo集成 不支持 支持 支持 K8S集成 不支持 不支持","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/home/%E6%8A%80%E6%9C%AF%E9%80%89%E5%9E%8B/%E6%8A%80%E6%9C%AF%E6%A0%88%E5%AF%B9%E6%AF%94/%E6%B3%A8%E5%86%8C%E4%B8%AD%E5%BF%83%E2%80%93Eureka%E3%80%81Zookeeper%E3%80%81Nacos%E3%80%81Consul%E7%9A%84%E5%8C%BA%E5%88%AB.html"}],["meta",{"property":"og:site_name","content":"Jef Blog"}],["meta",{"property":"og:title","content":"注册中心–Eureka、Zookeeper、Nacos、Consul的区别"}],["meta",{"property":"og:description","content":"简介 本文介绍分布式中常用的注册中心，包括：Eureka、Zookeeper、Nacos、Consul。会介绍他们之间的区别。 注册中心对比 项 Eureka Zookeeper Nacos Consul CAP理论保证项 AP（可用性与容错性）。 各个节点是平等的，只要有一台Eureka就可以保证服务可用，但查询到的数据并不是最新的。 CP（一致性与容错性）。 选举期间若注册服务瘫痪，虽然服务最终会恢复，但选举期间是不可用的。 CP或AP。 默认是AP CP 节点角色 各个节点平等 有Leader和Follower角色 分区问题 采用自我保护机制解决分区问题 采用过半数存活原则 健康检查 Client Beat Keep Alive TCP/HTTP/MYSQL/Client Beat TCP/HTTP/gRPC/Cmd 负载均衡策略 Ribbon – 权重/metadata/Selector Fabio 雪崩保护 有 无 自动注销实例 支持 支持 访问协议 HTTP TCP 监听支持 支持 支持 多数据中心 支持 不支持 跨注册中心同步 不支持 不支持 SpringCloud集成 支持 支持 Dobbo集成 不支持 支持 支持 K8S集成 不支持 不支持"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-27T09:32:16.000Z"}],["meta",{"property":"article:author","content":"Jef"}],["meta",{"property":"article:modified_time","content":"2024-01-27T09:32:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"注册中心–Eureka、Zookeeper、Nacos、Consul的区别\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-27T09:32:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jef\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"注册中心对比","slug":"注册中心对比","link":"#注册中心对比","children":[]},{"level":2,"title":"详述","slug":"详述","link":"#详述","children":[{"level":3,"title":"Eureka保证AP","slug":"eureka保证ap","link":"#eureka保证ap","children":[]},{"level":3,"title":"Zookeeper保证CP","slug":"zookeeper保证cp","link":"#zookeeper保证cp","children":[]}]}],"git":{"createdTime":1706347936000,"updatedTime":1706347936000,"contributors":[{"name":"tufujie","email":"tufj@hua-cloud.com.cn","commits":1}]},"readingTime":{"minutes":3.33,"words":998},"filePathRelative":"home/技术选型/技术栈对比/注册中心–Eureka、Zookeeper、Nacos、Consul的区别.md","localizedDate":"2024年1月27日","excerpt":"<h2> 简介</h2>\\n<p>本文介绍分布式中常用的注册中心，包括：Eureka、Zookeeper、Nacos、Consul。会介绍他们之间的区别。</p>\\n<h2> 注册中心对比</h2>\\n<table>\\n<thead>\\n<tr>\\n<th><strong>项</strong></th>\\n<th><strong>Eureka</strong></th>\\n<th><strong>Zookeeper</strong></th>\\n<th><strong>Nacos</strong></th>\\n<th><strong>Consul</strong></th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td><strong>CAP理论保证项</strong></td>\\n<td>AP（可用性与容错性）。 各个节点是平等的，只要有一台Eureka就可以保证服务可用，但查询到的数据并不是最新的。</td>\\n<td>CP（一致性与容错性）。 选举期间若注册服务瘫痪，虽然服务最终会恢复，但选举期间是不可用的。</td>\\n<td>CP或AP。 默认是AP</td>\\n<td>CP</td>\\n</tr>\\n<tr>\\n<td><strong>节点角色</strong></td>\\n<td>各个节点平等</td>\\n<td>有Leader和Follower角色</td>\\n<td></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td><strong>分区问题</strong></td>\\n<td>采用自我保护机制解决分区问题</td>\\n<td>采用过半数存活原则</td>\\n<td></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td><strong>健康检查</strong></td>\\n<td>Client Beat</td>\\n<td>Keep Alive</td>\\n<td>TCP/HTTP/MYSQL/Client Beat</td>\\n<td>TCP/HTTP/gRPC/Cmd</td>\\n</tr>\\n<tr>\\n<td><strong>负载均衡策略</strong></td>\\n<td>Ribbon</td>\\n<td>–</td>\\n<td>权重/metadata/Selector</td>\\n<td>Fabio</td>\\n</tr>\\n<tr>\\n<td><strong>雪崩保护</strong></td>\\n<td>有</td>\\n<td>无</td>\\n<td></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td><strong>自动注销实例</strong></td>\\n<td>支持</td>\\n<td>支持</td>\\n<td></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td><strong>访问协议</strong></td>\\n<td>HTTP</td>\\n<td>TCP</td>\\n<td></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td><strong>监听支持</strong></td>\\n<td>支持</td>\\n<td>支持</td>\\n<td></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td><strong>多数据中心</strong></td>\\n<td>支持</td>\\n<td>不支持</td>\\n<td></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td><strong>跨注册中心同步</strong></td>\\n<td>不支持</td>\\n<td>不支持</td>\\n<td></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td><strong>SpringCloud集成</strong></td>\\n<td>支持</td>\\n<td>支持</td>\\n<td></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td><strong>Dobbo集成</strong></td>\\n<td>不支持</td>\\n<td>支持</td>\\n<td>支持</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td><strong>K8S集成</strong></td>\\n<td>不支持</td>\\n<td>不支持</td>\\n<td></td>\\n<td></td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{t as data};
