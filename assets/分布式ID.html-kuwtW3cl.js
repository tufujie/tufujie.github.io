const e=JSON.parse('{"key":"v-320bd824","path":"/home/%E5%88%86%E5%B8%83%E5%BC%8F/%E5%88%86%E5%B8%83%E5%BC%8FID.html","title":"分布式ID","lang":"zh-CN","frontmatter":{"title":"分布式ID","description":"传统的单体架构的时候，我们基本是单库然后业务单表的结构。每个业务表的ID一般我们都是从1增，通过AUTO_INCREMENT=1设置自增起始值，但是在分布式服务架构模式下分库分表的设计，使得多个库或多个表存储相同的业务数据。这种情况根据数据库的自增ID就会产生相同ID的情况，不能保证主键的唯一性。 默认数据库递增 如上图，如果第一个订单存储在 DB1 上则订单 ID 为1，当一个新订单又入库了存储在 DB2 上订单 ID 也为1。我们系统的架构虽然是分布式的，但是在用户层应是无感知的，重复的订单主键显而易见是不被允许的。那么针对分布式系统如何做到主键唯一性呢？","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/home/%E5%88%86%E5%B8%83%E5%BC%8F/%E5%88%86%E5%B8%83%E5%BC%8FID.html"}],["meta",{"property":"og:site_name","content":"Jef Blog"}],["meta",{"property":"og:title","content":"分布式ID"}],["meta",{"property":"og:description","content":"传统的单体架构的时候，我们基本是单库然后业务单表的结构。每个业务表的ID一般我们都是从1增，通过AUTO_INCREMENT=1设置自增起始值，但是在分布式服务架构模式下分库分表的设计，使得多个库或多个表存储相同的业务数据。这种情况根据数据库的自增ID就会产生相同ID的情况，不能保证主键的唯一性。 默认数据库递增 如上图，如果第一个订单存储在 DB1 上则订单 ID 为1，当一个新订单又入库了存储在 DB2 上订单 ID 也为1。我们系统的架构虽然是分布式的，但是在用户层应是无感知的，重复的订单主键显而易见是不被允许的。那么针对分布式系统如何做到主键唯一性呢？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-28T12:29:12.000Z"}],["meta",{"property":"article:author","content":"Jef"}],["meta",{"property":"article:modified_time","content":"2024-01-28T12:29:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分布式ID\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-28T12:29:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jef\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"UUID","slug":"uuid","link":"#uuid","children":[]},{"level":2,"title":"数据库生成","slug":"数据库生成","link":"#数据库生成","children":[]},{"level":2,"title":"使用Redis实现","slug":"使用redis实现","link":"#使用redis实现","children":[]},{"level":2,"title":"雪花算法-Snowflake","slug":"雪花算法-snowflake","link":"#雪花算法-snowflake","children":[]},{"level":2,"title":"百度-UidGenerator","slug":"百度-uidgenerator","link":"#百度-uidgenerator","children":[{"level":3,"title":"DefaultUidGenerator 实现","slug":"defaultuidgenerator-实现","link":"#defaultuidgenerator-实现","children":[]},{"level":3,"title":"CachedUidGenerator 实现","slug":"cacheduidgenerator-实现","link":"#cacheduidgenerator-实现","children":[]}]},{"level":2,"title":"美团Leaf","slug":"美团leaf","link":"#美团leaf","children":[{"level":3,"title":"Leaf-segment 数据库方案","slug":"leaf-segment-数据库方案","link":"#leaf-segment-数据库方案","children":[]},{"level":3,"title":"Leaf-snowflake方案","slug":"leaf-snowflake方案","link":"#leaf-snowflake方案","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1702565565000,"updatedTime":1706444952000,"contributors":[{"name":"tufujie","email":"jef.tu@foxmail.com","commits":3}]},"readingTime":{"minutes":22.42,"words":6725},"filePathRelative":"home/分布式/分布式ID.md","localizedDate":"2023年12月14日","excerpt":"<p>传统的单体架构的时候，我们基本是单库然后业务单表的结构。每个业务表的ID一般我们都是从1增，通过AUTO_INCREMENT=1设置自增起始值，但是在分布式服务架构模式下分库分表的设计，使得多个库或多个表存储相同的业务数据。这种情况根据数据库的自增ID就会产生相同ID的情况，不能保证主键的唯一性。</p>\\n<figure><figcaption>默认数据库递增</figcaption></figure>\\n<p>如上图，如果第一个订单存储在 DB1 上则订单 ID 为1，当一个新订单又入库了存储在 DB2 上订单 ID 也为1。我们系统的架构虽然是分布式的，但是在用户层应是无感知的，重复的订单主键显而易见是不被允许的。那么针对分布式系统如何做到主键唯一性呢？</p>","autoDesc":true}');export{e as data};
