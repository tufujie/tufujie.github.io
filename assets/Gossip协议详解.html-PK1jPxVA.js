const e=JSON.parse('{"key":"v-c709051c","path":"/home/%E5%88%86%E5%B8%83%E5%BC%8F/Gossip%E5%8D%8F%E8%AE%AE%E8%AF%A6%E8%A7%A3.html","title":"Gossip协议详解","lang":"zh-CN","frontmatter":{"title":"Gossip协议详解","description":"背景 在分布式系统中，不同的节点进行数据/信息共享是一个基本的需求。 一种比较简单粗暴的方法就是&nbsp;集中式发散消息，简单来说就是一个主节点同时共享最新信息给其他所有节点，比较适合中心化系统。这种方法的缺陷也很明显，节点多的时候不光同步消息的效率低，还太依赖与中心节点，存在单点风险问题。 于是，分散式发散消息&nbsp;的&nbsp;Gossip 协议&nbsp;就诞生了。 Gossip 协议介绍 Gossip 直译过来就是闲话、流言蜚语的意思。流言蜚语有什么特点呢？容易被传播且传播速度还快，你传我我传他，然后大家都知道了。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/home/%E5%88%86%E5%B8%83%E5%BC%8F/Gossip%E5%8D%8F%E8%AE%AE%E8%AF%A6%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"Jef Blog"}],["meta",{"property":"og:title","content":"Gossip协议详解"}],["meta",{"property":"og:description","content":"背景 在分布式系统中，不同的节点进行数据/信息共享是一个基本的需求。 一种比较简单粗暴的方法就是&nbsp;集中式发散消息，简单来说就是一个主节点同时共享最新信息给其他所有节点，比较适合中心化系统。这种方法的缺陷也很明显，节点多的时候不光同步消息的效率低，还太依赖与中心节点，存在单点风险问题。 于是，分散式发散消息&nbsp;的&nbsp;Gossip 协议&nbsp;就诞生了。 Gossip 协议介绍 Gossip 直译过来就是闲话、流言蜚语的意思。流言蜚语有什么特点呢？容易被传播且传播速度还快，你传我我传他，然后大家都知道了。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-03T10:30:52.000Z"}],["meta",{"property":"article:author","content":"Jef"}],["meta",{"property":"article:modified_time","content":"2024-01-03T10:30:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Gossip协议详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-03T10:30:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jef\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"Gossip 协议介绍","slug":"gossip-协议介绍","link":"#gossip-协议介绍","children":[]},{"level":2,"title":"Gossip 协议应用","slug":"gossip-协议应用","link":"#gossip-协议应用","children":[]},{"level":2,"title":"Gossip 协议消息传播模式","slug":"gossip-协议消息传播模式","link":"#gossip-协议消息传播模式","children":[{"level":3,"title":"反熵(Anti-entropy)","slug":"反熵-anti-entropy","link":"#反熵-anti-entropy","children":[]},{"level":3,"title":"谣言传播(Rumor mongering)","slug":"谣言传播-rumor-mongering","link":"#谣言传播-rumor-mongering","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]},{"level":2,"title":"Gossip 协议优势和缺陷","slug":"gossip-协议优势和缺陷","link":"#gossip-协议优势和缺陷","children":[]},{"level":2,"title":"总结","slug":"总结-1","link":"#总结-1","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1704204500000,"updatedTime":1704277852000,"contributors":[{"name":"tufujie","email":"tufj@hua-cloud.com.cn","commits":2},{"name":"tufujie","email":"jef.tu@foxmail.com","commits":1}]},"readingTime":{"minutes":8.16,"words":2447},"filePathRelative":"home/分布式/Gossip协议详解.md","localizedDate":"2024年1月2日","excerpt":"<h2> 背景</h2>\\n<p>在分布式系统中，不同的节点进行数据/信息共享是一个基本的需求。</p>\\n<p>一种比较简单粗暴的方法就是&nbsp;<strong>集中式发散消息</strong>，简单来说就是一个主节点同时共享最新信息给其他所有节点，比较适合中心化系统。这种方法的缺陷也很明显，节点多的时候不光同步消息的效率低，还太依赖与中心节点，存在单点风险问题。</p>\\n<p>于是，<strong>分散式发散消息</strong>&nbsp;的&nbsp;<strong>Gossip 协议</strong>&nbsp;就诞生了。</p>\\n<h2> Gossip 协议介绍</h2>\\n<p>Gossip\\n直译过来就是闲话、流言蜚语的意思。流言蜚语有什么特点呢？容易被传播且传播速度还快，你传我我传他，然后大家都知道了。</p>","autoDesc":true}');export{e as data};
