const e=JSON.parse('{"key":"v-1795ea7a","path":"/home/%E6%8A%80%E6%9C%AF%E9%80%89%E5%9E%8B/%E6%8A%80%E6%9C%AF%E6%A0%88%E5%AF%B9%E6%AF%94/%E6%8A%80%E6%9C%AF%E6%A0%88%E5%AF%B9%E6%AF%94.html","title":"技术栈对比","lang":"zh-CN","frontmatter":{"title":"技术栈对比","description":"Java基础 集合 List Arraylist 与 LinkedList ★★★ ArrayList 是一种顺序存储的线性表，底层使用数组实现 LinkedList是一种链式存储的线性表，本质是一个双向链表，实现了List、Deque接口，可以当成双向链表、队列、栈使用。 是否保证线程安全： ArrayList和LinkedList都是不同步的，也就是不保证线程安全； 底层数据结构： Arraylist 底层使用的是 Object 数组；LinkedList底层使用的是 双向链表 数据结构（JDK1.6 之前为循环链表，JDK1.7取消了循环。注意双向链表和双向循环链表） 插入和删除是否受元素位置的影响：ArrayList采用数组存储，所以插入和删除元素的时间复杂度受元素位置的影响。比如：执行add(E e)方法的时候， ArrayList会默认在将指定的元素追加到此列表的末尾，这种情况时间复杂度就是O(1)。但是如果要在指定位置 i 插入和删除元素的话（add(int index, E element)）时间复杂度就为 O(n-i)。因为在进行上述操作的时候集合中第 i和第 i个元素之后的(n-i)个元素都要执行向后位/向前移一位的操作。LinkedList采用链表存储，所以，如果是在头尾插入或者删除元素不受元素位置的影响（add(E e)、addFirst(E e)、addLast(E e)、removeFirst() 、removeLast()），时间复杂度为 O(1)，如果是要在指定位置 i插入和删除元素的话（add(int index, E element)，remove(Object o)），时间复杂度为 O(n) ，因为需要先移动到指定位置再插入。 是否支持快速随机访问： LinkedList因为使用链表储存，无法通过元素索引快速访问，不支持高效的随机元素访问，而ArrayList因为底层采用Object数组储存，可以通过索引快速随机访问。快速随机访问就是通过元素的序号快速获取元素对象(对应于get(int index)方法)。使用下标访问一个元素，ArrayList 的时间复杂度是 O(1)，而LinkedList 是 O(n)。 内存空间占用： ArrayList 的空间浪费主要体现在在 List列表的结尾会预留一定的容量空间，而 LinkedList的空间花费则体现在它的每一个元素都需要消耗比 ArrayList更多的空间（因为要存放直接后继和直接前驱以及数据）。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/home/%E6%8A%80%E6%9C%AF%E9%80%89%E5%9E%8B/%E6%8A%80%E6%9C%AF%E6%A0%88%E5%AF%B9%E6%AF%94/%E6%8A%80%E6%9C%AF%E6%A0%88%E5%AF%B9%E6%AF%94.html"}],["meta",{"property":"og:site_name","content":"Jef Blog"}],["meta",{"property":"og:title","content":"技术栈对比"}],["meta",{"property":"og:description","content":"Java基础 集合 List Arraylist 与 LinkedList ★★★ ArrayList 是一种顺序存储的线性表，底层使用数组实现 LinkedList是一种链式存储的线性表，本质是一个双向链表，实现了List、Deque接口，可以当成双向链表、队列、栈使用。 是否保证线程安全： ArrayList和LinkedList都是不同步的，也就是不保证线程安全； 底层数据结构： Arraylist 底层使用的是 Object 数组；LinkedList底层使用的是 双向链表 数据结构（JDK1.6 之前为循环链表，JDK1.7取消了循环。注意双向链表和双向循环链表） 插入和删除是否受元素位置的影响：ArrayList采用数组存储，所以插入和删除元素的时间复杂度受元素位置的影响。比如：执行add(E e)方法的时候， ArrayList会默认在将指定的元素追加到此列表的末尾，这种情况时间复杂度就是O(1)。但是如果要在指定位置 i 插入和删除元素的话（add(int index, E element)）时间复杂度就为 O(n-i)。因为在进行上述操作的时候集合中第 i和第 i个元素之后的(n-i)个元素都要执行向后位/向前移一位的操作。LinkedList采用链表存储，所以，如果是在头尾插入或者删除元素不受元素位置的影响（add(E e)、addFirst(E e)、addLast(E e)、removeFirst() 、removeLast()），时间复杂度为 O(1)，如果是要在指定位置 i插入和删除元素的话（add(int index, E element)，remove(Object o)），时间复杂度为 O(n) ，因为需要先移动到指定位置再插入。 是否支持快速随机访问： LinkedList因为使用链表储存，无法通过元素索引快速访问，不支持高效的随机元素访问，而ArrayList因为底层采用Object数组储存，可以通过索引快速随机访问。快速随机访问就是通过元素的序号快速获取元素对象(对应于get(int index)方法)。使用下标访问一个元素，ArrayList 的时间复杂度是 O(1)，而LinkedList 是 O(n)。 内存空间占用： ArrayList 的空间浪费主要体现在在 List列表的结尾会预留一定的容量空间，而 LinkedList的空间花费则体现在它的每一个元素都需要消耗比 ArrayList更多的空间（因为要存放直接后继和直接前驱以及数据）。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T09:17:20.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"技术栈对比"}],["meta",{"property":"article:author","content":"Jef"}],["meta",{"property":"article:modified_time","content":"2024-02-02T09:17:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"技术栈对比\\",\\"image\\":[\\"https://mister-hope.github.io/\\"],\\"dateModified\\":\\"2024-02-02T09:17:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jef\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Java基础","slug":"java基础","link":"#java基础","children":[{"level":3,"title":"集合","slug":"集合","link":"#集合","children":[]},{"level":3,"title":"IO","slug":"io","link":"#io","children":[]},{"level":3,"title":"异常","slug":"异常","link":"#异常","children":[]},{"level":3,"title":"String、StringBuffer和StringBuilder★★★","slug":"string、stringbuffer和stringbuilder★★★","link":"#string、stringbuffer和stringbuilder★★★","children":[]},{"level":3,"title":"equals()和hashCode()★★★","slug":"equals-和hashcode-★★★","link":"#equals-和hashcode-★★★","children":[]},{"level":3,"title":"==和equals() ★★★","slug":"和equals-★★★","link":"#和equals-★★★","children":[]},{"level":3,"title":"面向对象和面向过程★★★","slug":"面向对象和面向过程★★★","link":"#面向对象和面向过程★★★","children":[]},{"level":3,"title":"成员变量与局部变量★★★","slug":"成员变量与局部变量★★★","link":"#成员变量与局部变量★★★","children":[]},{"level":3,"title":"深拷贝和浅拷贝★","slug":"深拷贝和浅拷贝★","link":"#深拷贝和浅拷贝★","children":[]},{"level":3,"title":"重载（Overload）和重写（Override）★★★","slug":"重载-overload-和重写-override-★★★","link":"#重载-overload-和重写-override-★★★","children":[]},{"level":3,"title":"String##equals()和Object##equals()","slug":"string-equals-和object-equals","link":"#string-equals-和object-equals","children":[]},{"level":3,"title":"Iterator和ListIterator","slug":"iterator和listiterator","link":"#iterator和listiterator","children":[]},{"level":3,"title":"Statement和PreparedStatement","slug":"statement和preparedstatement","link":"#statement和preparedstatement","children":[]},{"level":3,"title":"@Before和@BeforeClass","slug":"before和-beforeclass","link":"#before和-beforeclass","children":[]},{"level":3,"title":"java.util.Date与java.sql.Date","slug":"java-util-date与java-sql-date","link":"#java-util-date与java-sql-date","children":[]},{"level":3,"title":"Java和JavaSciprt","slug":"java和javasciprt","link":"#java和javasciprt","children":[]},{"level":3,"title":"Java和C++","slug":"java和c","link":"#java和c","children":[]},{"level":3,"title":"JDK、JRE和JVM","slug":"jdk、jre和jvm","link":"#jdk、jre和jvm","children":[]},{"level":3,"title":"Java和C++","slug":"java和c-1","link":"#java和c-1","children":[]},{"level":3,"title":"基本类型和包装类型","slug":"基本类型和包装类型","link":"#基本类型和包装类型","children":[]},{"level":3,"title":"++i与i++","slug":"i与i","link":"#i与i","children":[]},{"level":3,"title":"int和Integer","slug":"int和integer","link":"#int和integer","children":[]},{"level":3,"title":"a=a+b与a+=b","slug":"a-a-b与a-b","link":"#a-a-b与a-b","children":[]},{"level":3,"title":"字符型常量和字符串常量","slug":"字符型常量和字符串常量","link":"#字符型常量和字符串常量","children":[]},{"level":3,"title":"标识符和关键字是什么","slug":"标识符和关键字是什么","link":"#标识符和关键字是什么","children":[]},{"level":3,"title":"continue、break和return","slug":"continue、break和return","link":"#continue、break和return","children":[]},{"level":3,"title":"public，private，protected，以及不写（默认）","slug":"public-private-protected-以及不写-默认","link":"#public-private-protected-以及不写-默认","children":[]},{"level":3,"title":"&和&&","slug":"和","link":"#和","children":[]},{"level":3,"title":"final、finally、finalize","slug":"final、finally、finalize","link":"#final、finally、finalize","children":[]},{"level":3,"title":"形参与实参","slug":"形参与实参","link":"#形参与实参","children":[]},{"level":3,"title":"静态变量和实例变量","slug":"静态变量和实例变量","link":"#静态变量和实例变量","children":[]},{"level":3,"title":"对象的相等和引用相等","slug":"对象的相等和引用相等","link":"#对象的相等和引用相等","children":[]},{"level":3,"title":"普通类和抽象类","slug":"普通类和抽象类","link":"#普通类和抽象类","children":[]},{"level":3,"title":"组合、聚合和关联","slug":"组合、聚合和关联","link":"#组合、聚合和关联","children":[]},{"level":3,"title":"嵌套公共静态类与顶级类","slug":"嵌套公共静态类与顶级类","link":"#嵌套公共静态类与顶级类","children":[]}]},{"level":2,"title":"数据库","slug":"数据库","link":"#数据库","children":[{"level":3,"title":"InnoDB与MyISAM★★★","slug":"innodb与myisam★★★","link":"#innodb与myisam★★★","children":[]},{"level":3,"title":"B+树索引和哈希索引★★★","slug":"b-树索引和哈希索引★★★","link":"#b-树索引和哈希索引★★★","children":[]},{"level":3,"title":"乐观锁和悲观锁★★★","slug":"乐观锁和悲观锁★★★","link":"#乐观锁和悲观锁★★★","children":[]},{"level":3,"title":"表级锁、行级锁和页面锁★★★","slug":"表级锁、行级锁和页面锁★★★","link":"#表级锁、行级锁和页面锁★★★","children":[]},{"level":3,"title":"共享锁和排他锁","slug":"共享锁和排他锁","link":"#共享锁和排他锁","children":[]},{"level":3,"title":"乐观锁和悲观锁","slug":"乐观锁和悲观锁","link":"#乐观锁和悲观锁","children":[]},{"level":3,"title":"公平锁和非公平锁","slug":"公平锁和非公平锁","link":"#公平锁和非公平锁","children":[]},{"level":3,"title":"MyISAM Static和MyISAM Dynamic","slug":"myisam-static和myisam-dynamic","link":"#myisam-static和myisam-dynamic","children":[]},{"level":3,"title":"binlog录入格式statement，row和mixed","slug":"binlog录入格式statement-row和mixed","link":"#binlog录入格式statement-row和mixed","children":[]},{"level":3,"title":"外连接、内连接与自连接","slug":"外连接、内连接与自连接","link":"#外连接、内连接与自连接","children":[]},{"level":3,"title":"内连接、左连接、右连接","slug":"内连接、左连接、右连接","link":"#内连接、左连接、右连接","children":[]},{"level":3,"title":"drop、delete与truncate的区别","slug":"drop、delete与truncate的区别","link":"#drop、delete与truncate的区别","children":[]},{"level":3,"title":"char 和 varchar","slug":"char-和-varchar","link":"#char-和-varchar","children":[]},{"level":3,"title":"float 和 double","slug":"float-和-double","link":"#float-和-double","children":[]},{"level":3,"title":"BLOB和TEXT","slug":"blob和text","link":"#blob和text","children":[]},{"level":3,"title":"NOW()和CURRENT_DATE()","slug":"now-和current-date","link":"#now-和current-date","children":[]},{"level":3,"title":"主键和候选键","slug":"主键和候选键","link":"#主键和候选键","children":[]},{"level":3,"title":"主键和外键","slug":"主键和外键","link":"#主键和外键","children":[]},{"level":3,"title":"主键、外键和索引","slug":"主键、外键和索引","link":"#主键、外键和索引","children":[]},{"level":3,"title":"主键与唯一索引","slug":"主键与唯一索引","link":"#主键与唯一索引","children":[]},{"level":3,"title":"索引，主键，唯一索引，联合索引","slug":"索引-主键-唯一索引-联合索引","link":"#索引-主键-唯一索引-联合索引","children":[]},{"level":3,"title":"MySQL_fetch_array和MySQL_fetch_object","slug":"mysql-fetch-array和mysql-fetch-object","link":"#mysql-fetch-array和mysql-fetch-object","children":[]}]},{"level":2,"title":"计算机网络","slug":"计算机网络","link":"#计算机网络","children":[{"level":3,"title":"TCP与UDP★★★","slug":"tcp与udp★★★","link":"#tcp与udp★★★","children":[]},{"level":3,"title":"HTTP和HTTPS★★★","slug":"http和https★★★","link":"#http和https★★★","children":[]},{"level":3,"title":"HTTP1.0、HTTP1.1和HTTP2.0","slug":"http1-0、http1-1和http2-0","link":"#http1-0、http1-1和http2-0","children":[]},{"level":3,"title":"HTTP的长连接与短连接","slug":"http的长连接与短连接","link":"#http的长连接与短连接","children":[]},{"level":3,"title":"GET和POST★★★","slug":"get和post★★★","link":"#get和post★★★","children":[]},{"level":3,"title":"URI和URL的区别","slug":"uri和url的区别","link":"#uri和url的区别","children":[]},{"level":3,"title":"TIME WAIT和CLOSE WAIT的区别在哪?","slug":"time-wait和close-wait的区别在哪","link":"#time-wait和close-wait的区别在哪","children":[]},{"level":3,"title":"http响应吗301和302","slug":"http响应吗301和302","link":"#http响应吗301和302","children":[]},{"level":3,"title":"Forward和Redirect★★★","slug":"forward和redirect★★★","link":"#forward和redirect★★★","children":[]}]},{"level":2,"title":"缓存","slug":"缓存-1","link":"#缓存-1","children":[{"level":3,"title":"Redis与Memcache","slug":"redis与memcache","link":"#redis与memcache","children":[]},{"level":3,"title":"Redis，Memcache，MongoDB","slug":"redis-memcache-mongodb","link":"#redis-memcache-mongodb","children":[]},{"level":3,"title":"Redis锁Zookeeper锁","slug":"redis锁zookeeper锁","link":"#redis锁zookeeper锁","children":[]},{"level":3,"title":"RDB和AOF","slug":"rdb和aof","link":"#rdb和aof","children":[]}]},{"level":2,"title":"框架","slug":"框架","link":"#框架","children":[{"level":3,"title":"SpringBoot和SpringCloud","slug":"springboot和springcloud","link":"#springboot和springcloud","children":[]},{"level":3,"title":"Spring Boot、Spring MVC和Spring","slug":"spring-boot、spring-mvc和spring","link":"#spring-boot、spring-mvc和spring","children":[]},{"level":3,"title":"Spring Boo 1.X和t2.X","slug":"spring-boo-1-x和t2-x","link":"#spring-boo-1-x和t2-x","children":[]},{"level":3,"title":"Spring Boot打成的jar和普通的jar","slug":"spring-boot打成的jar和普通的jar","link":"#spring-boot打成的jar和普通的jar","children":[]},{"level":3,"title":"在Spring AOP中，关注点和横切关注点","slug":"在spring-aop中-关注点和横切关注点","link":"#在spring-aop中-关注点和横切关注点","children":[]},{"level":3,"title":"Spring AOP和AspectJ AOP","slug":"spring-aop和aspectj-aop","link":"#spring-aop和aspectj-aop","children":[]},{"level":3,"title":"ApplicationContext和BeanFactory","slug":"applicationcontext和beanfactory","link":"#applicationcontext和beanfactory","children":[]},{"level":3,"title":"BeanFactory和FactoryBean","slug":"beanfactory和factorybean","link":"#beanfactory和factorybean","children":[]},{"level":3,"title":"@Component和@Bean","slug":"component和-bean","link":"#component和-bean","children":[]},{"level":3,"title":"@Autowired和@Resource★★★","slug":"autowired和-resource★★★","link":"#autowired和-resource★★★","children":[]},{"level":3,"title":"@Component，@Controller，@Repository，@Service","slug":"component-controller-repository-service","link":"#component-controller-repository-service","children":[]},{"level":3,"title":"Dubbo和SpringCloud","slug":"dubbo和springcloud","link":"#dubbo和springcloud","children":[]},{"level":3,"title":"REST和RPC","slug":"rest和rpc","link":"#rest和rpc","children":[]},{"level":3,"title":"RPC和HTTP","slug":"rpc和http","link":"#rpc和http","children":[]},{"level":3,"title":"RPC和消息队列","slug":"rpc和消息队列","link":"#rpc和消息队列","children":[]},{"level":3,"title":"Dubbo和Dubbox","slug":"dubbo和dubbox","link":"#dubbo和dubbox","children":[]},{"level":3,"title":"Dubbo SPI和Java SPI","slug":"dubbo-spi和java-spi","link":"#dubbo-spi和java-spi","children":[]},{"level":3,"title":"Hibernate和JPA","slug":"hibernate和jpa","link":"#hibernate和jpa","children":[]},{"level":3,"title":"Eureka和Zookeeper","slug":"eureka和zookeeper","link":"#eureka和zookeeper","children":[]},{"level":3,"title":"Feign和Ribbon","slug":"feign和ribbon","link":"#feign和ribbon","children":[]},{"level":3,"title":"熔断和降级","slug":"熔断和降级","link":"#熔断和降级","children":[]}]},{"level":2,"title":"运维","slug":"运维","link":"#运维","children":[{"level":3,"title":"分布式、集群和微服务","slug":"分布式、集群和微服务","link":"#分布式、集群和微服务","children":[]}]}],"git":{"createdTime":1706347936000,"updatedTime":1706865440000,"contributors":[{"name":"tufujie","email":"tufj@hua-cloud.com.cn","commits":2}]},"readingTime":{"minutes":155.24,"words":46572},"filePathRelative":"home/技术选型/技术栈对比/技术栈对比.md","localizedDate":"2024年1月27日","excerpt":"<h2> Java基础</h2>\\n<h3> 集合</h3>\\n<h4> List</h4>\\n<h5> Arraylist 与 LinkedList ★★★</h5>\\n<p>ArrayList 是一种顺序存储的线性表，底层使用数组实现</p>\\n<p>LinkedList是一种链式存储的线性表，本质是一个双向链表，实现了List、Deque接口，可以当成双向链表、队列、栈使用。</p>\\n<ul>\\n<li><strong>是否保证线程安全</strong>： ArrayList和LinkedList都是不同步的，也就是不保证线程安全；</li>\\n<li><strong>底层数据结构</strong>： Arraylist 底层使用的是 Object 数组；LinkedList底层使用的是 双向链表 数据结构（JDK1.6 之前为循环链表，JDK1.7取消了循环。注意双向链表和双向循环链表）</li>\\n<li><strong>插入和删除是否受元素位置的影响</strong>：ArrayList采用数组存储，所以插入和删除元素的时间复杂度受元素位置的影响。比如：执行add(E e)方法的时候， ArrayList会默认在将指定的元素追加到此列表的末尾，这种情况时间复杂度就是O(1)。但是如果要在指定位置 i 插入和删除元素的话（add(int index, E element)）时间复杂度就为 O(n-i)。因为在进行上述操作的时候集合中第 i和第 i个元素之后的(n-i)个元素都要执行向后位/向前移一位的操作。LinkedList采用链表存储，所以，如果是在头尾插入或者删除元素不受元素位置的影响（add(E e)、addFirst(E e)、addLast(E e)、removeFirst() 、removeLast()），时间复杂度为 O(1)，如果是要在指定位置 i插入和删除元素的话（add(int index, E element)，remove(Object o)），时间复杂度为 O(n) ，因为需要先移动到指定位置再插入。</li>\\n<li><strong>是否支持快速随机访问</strong>： LinkedList因为使用链表储存，无法通过元素索引快速访问，不支持高效的随机元素访问，而ArrayList因为底层采用Object数组储存，可以通过索引快速随机访问。快速随机访问就是通过元素的序号快速获取元素对象(对应于get(int index)方法)。使用下标访问一个元素，ArrayList 的时间复杂度是 O(1)，而LinkedList 是 O(n)。</li>\\n<li><strong>内存空间占用</strong>： ArrayList 的空间浪费主要体现在在 List列表的结尾会预留一定的容量空间，而 LinkedList的空间花费则体现在它的每一个元素都需要消耗比 ArrayList更多的空间（因为要存放直接后继和直接前驱以及数据）。</li>\\n</ul>","autoDesc":true}');export{e as data};
