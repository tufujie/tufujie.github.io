import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,d as s}from"./app-AuAuVshg.js";const d="/assets/Redis总结1-oJimtJdC.png",l="/assets/Redis总结2-sBJtwO90.png",t="/assets/Redis总结3-eJnZqnEj.png",a="/assets/Redis总结4-hX8HwPuU.png",r="/assets/Redis总结5-wKlddxAE.png",u="/assets/Redis总结6-0F3MQe-G.png",v="/assets/Redis总结7-9qP2UZc3.png",o="/assets/Redis总结8-HCPl-Wkj.png",c={},m=s('<h2 id="一、redis-常用命令" tabindex="-1"><a class="header-anchor" href="#一、redis-常用命令" aria-hidden="true">#</a> <strong>一、Redis 常用命令</strong></h2><h3 id="_1-连接操作命令" tabindex="-1"><a class="header-anchor" href="#_1-连接操作命令" aria-hidden="true">#</a> <strong>1 连接操作命令</strong></h3><p>quit：关闭连接（connection）</p><p>auth：简单密码认证</p><p>help cmd： 查看 cmd 帮助，例如：help quit</p><h3 id="_2-持久化" tabindex="-1"><a class="header-anchor" href="#_2-持久化" aria-hidden="true">#</a> <strong>2 持久化</strong></h3><p>save：将数据同步保存到磁盘</p><p>bgsave：将数据异步保存到磁盘</p><p>lastsave：返回上次成功将数据保存到磁盘的 Unix 时戳</p><p>shutdown：将数据同步保存到磁盘，然后关闭服务</p><h3 id="_3-远程服务控制" tabindex="-1"><a class="header-anchor" href="#_3-远程服务控制" aria-hidden="true">#</a> <strong>3 远程服务控制</strong></h3><p>info：提供服务器的信息和统计</p><p>monitor：实时转储收到的请求</p><p>slaveof：改变复制策略设置</p><p>config：在运行时配置 Redis 服务器</p><h3 id="_4-对-key-操作的命令" tabindex="-1"><a class="header-anchor" href="#_4-对-key-操作的命令" aria-hidden="true">#</a> <strong>4 对 key 操作的命令</strong></h3><p>exists(key)：确认一个 key 是否存在</p><p>del(key)：删除一个 key</p><p>type(key)：返回值的类型</p><p>keys(pattern)：返回满足给定 pattern 的所有 key</p><p>randomkey：随机返回 key 空间的一个</p><p>keyrename(oldname, newname)：重命名 key</p><p>dbsize：返回当前数据库中 key 的数目</p><p>expire：设定一个 key 的活动时间（s）</p><p>ttl：获得一个 key 的活动时间</p><p>select(index)：按索引查询</p><p>move(key, dbindex)：移动当前数据库中的 key 到 dbindex 数据库</p><p>flushdb：删除当前选择数据库中的所有 key</p><p>flushall：删除所有数据库中的所有 key</p><h3 id="_5-string" tabindex="-1"><a class="header-anchor" href="#_5-string" aria-hidden="true">#</a> <strong>5 String</strong></h3><p>set(key, value)：给数据库中名称为 key 的 string 赋予值 value</p><p>get(key)：返回数据库中名称为 key 的 string 的 value</p><p>getset(key, value)：给名称为 key 的 string 赋予上一次的 value</p><p>mget(key1, key2,…, key N)：返回库中多个 string 的 value</p><p>setnx(key, value)：添加 string，名称为 key，值为 value</p><p>setex(key, time, value)：向库中添加 string，设定过期时间 time</p><p>mset(key N, value N)：批量设置多个 string 的值</p><p>msetnx(key N, value N)：如果所有名称为 key i 的 string 都不存在</p><p>incr(key)：名称为 key 的 string 增 1 操作</p><p>incrby(key, integer)：名称为 key 的 string 增加 integer</p><p>decr(key)：名称为 key 的 string 减 1 操作</p><p>decrby(key, integer)：名称为 key 的 string 减少 integer</p><p>append(key, value)：名称为 key 的 string 的值附加 value</p><p>substr(key, start, end)：返回名称为 key 的 string 的 value 的子串</p><h3 id="_6-list" tabindex="-1"><a class="header-anchor" href="#_6-list" aria-hidden="true">#</a> <strong>6 List</strong></h3><p>rpush(key, value)：在名称为 key 的 list 尾添加一个值为 value 的元素</p><p>lpush(key, value)：在名称为 key 的 list 头添加一个值为 value 的 元素</p><p>llen(key)：返回名称为 key 的 list 的长度</p><p>lrange(key, start, end)：返回名称为 key 的 list 中 start 至 end 之间的元素</p><p>ltrim(key, start, end)：截取名称为 key 的 list</p><p>lindex(key, index)：返回名称为 key 的 list 中 index 位置的元素</p><p>lset(key, index, value)：给名称为 key 的 list 中 index 位置的元素赋值</p><p>lrem(key, count, value)：删除 count 个 key 的 list 中值为 value 的元素</p><p>lpop(key)：返回并删除名称为 key 的 list 中的首元素</p><p>rpop(key)：返回并删除名称为 key 的 list 中的尾元素</p><p>blpop(key1, key2,… key N, timeout)：lpop 命令的 block 版本。</p><p>brpop(key1, key2,… key N, timeout)：rpop 的 block 版本。</p><p>rpoplpush(srckey, dstkey)：返回并删除名称为 srckey 的 list 的尾元素，并将该元素添加到名称为 dstkey 的 list 的头部</p><h3 id="_7-set" tabindex="-1"><a class="header-anchor" href="#_7-set" aria-hidden="true">#</a> <strong>7 Set</strong></h3><p>sadd(key, member)：向名称为 key 的 set 中添加元素 member</p><p>srem(key, member) ：删除名称为 key 的 set 中的元素 member</p><p>spop(key) ：随机返回并删除名称为 key 的 set 中一个元素</p><p>smove(srckey, dstkey, member) ：移到集合元素</p><p>scard(key) ：返回名称为 key 的 set 的基数</p><p>sismember(key, member) ：member 是否是名称为 key 的 set 的元素</p><p>sinter(key1, key2,…key N) ：求交集</p><p>sinterstore(dstkey, (keys)) ：求交集并将交集保存到 dstkey 的集合</p><p>sunion(key1, (keys)) ：求并集</p><p>sunionstore(dstkey, (keys)) ：求并集并将并集保存到 dstkey 的集合</p><p>sdiff(key1, (keys)) ：求差集</p><p>sdiffstore(dstkey, (keys)) ：求差集并将差集保存到 dstkey 的集合</p><p>smembers(key) ：返回名称为 key 的 set 的所有元素</p><p>srandmember(key) ：随机返回名称为 key 的 set 的一个元素</p><h3 id="_8-hash" tabindex="-1"><a class="header-anchor" href="#_8-hash" aria-hidden="true">#</a> <strong>8 Hash</strong></h3><p>hset(key, field, value)：向名称为 key 的 hash 中添加元素 field</p><p>hget(key, field)：返回名称为 key 的 hash 中 field 对应的 value</p><p>hmget(key, (fields))：返回名称为 key 的 hash 中 field i 对应的 value</p><p>hmset(key, (fields))：向名称为 key 的 hash 中添加元素 field</p><p>hincrby(key, field, integer)：将名称为 key 的 hash 中 field 的 value 增加 integer</p><p>hexists(key, field)：名称为 key 的 hash 中是否存在键为 field 的域</p><p>hdel(key, field)：删除名称为 key 的 hash 中键为 field 的域</p><p>hlen(key)：返回名称为 key 的 hash 中元素个数</p><p>hkeys(key)：返回名称为 key 的 hash 中所有键</p><p>hvals(key)：返回名称为 key 的 hash 中所有键对应的 value</p><p><strong>hgetall</strong>(key)：返回名称为 key 的 hash 中所有的键（field）及其对应的 value</p><h3 id="键操作" tabindex="-1"><a class="header-anchor" href="#键操作" aria-hidden="true">#</a> <strong>键操作：</strong></h3><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="字符串操作" tabindex="-1"><a class="header-anchor" href="#字符串操作" aria-hidden="true">#</a> <strong>字符串操作：</strong></h3><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="整数和浮点数操作" tabindex="-1"><a class="header-anchor" href="#整数和浮点数操作" aria-hidden="true">#</a> <strong>整数和浮点数操作：</strong></h3><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="列表-list-操作" tabindex="-1"><a class="header-anchor" href="#列表-list-操作" aria-hidden="true">#</a> <strong>列表（List）操作：</strong></h3><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="集合-set-操作" tabindex="-1"><a class="header-anchor" href="#集合-set-操作" aria-hidden="true">#</a> <strong>集合（Set）操作：</strong></h3><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="哈希-hash-操作" tabindex="-1"><a class="header-anchor" href="#哈希-hash-操作" aria-hidden="true">#</a> <strong>哈希（Hash）操作：</strong></h3><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="有序集合-zsort-操作" tabindex="-1"><a class="header-anchor" href="#有序集合-zsort-操作" aria-hidden="true">#</a> <strong>有序集合（Zsort）操作：</strong></h3><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="排序操作" tabindex="-1"><a class="header-anchor" href="#排序操作" aria-hidden="true">#</a> <strong>排序操作：</strong></h3><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="二、相关实例" tabindex="-1"><a class="header-anchor" href="#二、相关实例" aria-hidden="true">#</a> <strong>二、相关实例</strong></h2><p>本例子使用 maven，需要添加如下依赖：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
  &lt;groupId&gt;redis.clients&lt;/groupId&gt;
  &lt;artifactId&gt;jedis&lt;/artifactId&gt;
  &lt;version&gt;2.6.0&lt;/version&gt; 
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下只是对数据的一些基本操作。</p><h3 id="_1、获取-jedis-操作对象" tabindex="-1"><a class="header-anchor" href="#_1、获取-jedis-操作对象" aria-hidden="true">#</a> 1、获取 Jedis 操作对象：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Jedis jedis;

@Before
public void connectionTest() {
    jedis = new Jedis(&quot;127.0.0.1&quot;, 6379);//redis的地址以及连接端口

    //开启密码验证（配置文件中为 requirepass helloworld）的时候需要执行该方法7
    //jedis.auth(&quot;root&quot;);

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、jedis-对-key-的操作" tabindex="-1"><a class="header-anchor" href="#_2、jedis-对-key-的操作" aria-hidden="true">#</a> 2、Jedis 对 key 的操作：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Test
public void keyTest() throws UnsupportedEncodingException {
    System.out.println(jedis.flushDB());// 清空数据
    System.out.println(jedis.echo(&quot;hello&quot;));

    // 判断key否存在
    System.out.println(jedis.exists(&quot;foo&quot;));
    
    jedis.set(&quot;key&quot;, &quot;values&quot;);
    jedis.set(&quot;key2&quot;, &quot;values&quot;);
    System.out.println(jedis.exists(&quot;key&quot;));// 判断是否存在
    
    // 如果数据库没有任何key，返回nil，否则返回数据库中一个随机的key。
    String randomKey = jedis.randomKey();
    System.out.println(&quot;randomKey: &quot; + randomKey);
    
    // 设置60秒后该key过期
    jedis.expire(&quot;key&quot;, 60);
    
    // key有效毫秒数
    System.out.println(jedis.pttl(&quot;key&quot;));
    
    // 移除key的过期时间
    jedis.persist(&quot;key&quot;);
    
    // 获取key的类型, &quot;string&quot;, &quot;list&quot;, &quot;set&quot;. &quot;none&quot; none表示key不存在
    System.out.println(&quot;type: &quot; + jedis.type(&quot;key&quot;));
    
    // 导出key的值
    byte[] bytes = jedis.dump(&quot;key&quot;);
    System.out.println(new String(bytes));
    
    // 将key重命名
    jedis.renamenx(&quot;key&quot;, &quot;keytest&quot;);
    //判断是否存在
    System.out.println(&quot;key是否存在: &quot; + jedis.exists(&quot;key&quot;));
    //判断是否存在
    System.out.println(&quot;keytest是否存在: &quot; + jedis.exists(&quot;keytest&quot;));
    
    // 查询匹配的key
    // KEYS * 匹配数据库中所有 key 。
    // KEYS h?llo 匹配 hello ， hallo 和 hxllo 等。
    // KEYS h*llo 匹配 hllo 和 heeeeello 等。
    // KEYS h[ae]llo 匹配 hello 和 hallo ，但不匹配 hillo 。
    // 特殊符号用 \\ 隔开。
    Set&lt;String&gt; set = jedis.keys(&quot;k*&quot;);
    System.out.println(set);
    
    // 删除key
    jedis.del(&quot;key&quot;);
    System.out.println(jedis.exists(&quot;key&quot;));

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、jedis-对字符串-string-的相关操作" tabindex="-1"><a class="header-anchor" href="#_3、jedis-对字符串-string-的相关操作" aria-hidden="true">#</a> 3、Jedis 对字符串 (String) 的相关操作：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Test
public void stringTest() {
    jedis.set(&quot;hello&quot;, &quot;hello&quot;);
    System.out.println(jedis.get(&quot;hello&quot;));

    // 使用append 向字符串后面添加
    jedis.append(&quot;hello&quot;, &quot; world&quot;);
    System.out.println(jedis.get(&quot;hello&quot;));
    
    // set覆盖字符串
    jedis.set(&quot;hello&quot;, &quot;123&quot;);
    System.out.println(jedis.get(&quot;hello&quot;));
    
    // 设置过期时间
    jedis.setex(&quot;hello2&quot;, 2, &quot;world2&quot;);
    System.out.println(jedis.get(&quot;hello2&quot;));
    try {
        Thread.sleep(3000);
    } catch (InterruptedException e) {
    }
    System.out.println(jedis.get(&quot;hello2&quot;));
    
    // 一次添加多个key-value对
    jedis.mset(&quot;a&quot;, &quot;1&quot;, &quot;b&quot;, &quot;2&quot;);
    // 获取a和b的value
    List&lt;String&gt; valus = jedis.mget(&quot;a&quot;, &quot;b&quot;);
    System.out.println(valus);
    
    // 批量删除
    jedis.del(&quot;a&quot;, &quot;b&quot;);
    System.out.println(jedis.exists(&quot;a&quot;));
    System.out.println(jedis.exists(&quot;b&quot;));

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、jedis-对链表-lists-的操作" tabindex="-1"><a class="header-anchor" href="#_4、jedis-对链表-lists-的操作" aria-hidden="true">#</a> 4、Jedis 对链表 (Lists) 的操作：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Test
public void listTest() {
    String key = &quot;mylist&quot;;
    jedis.del(key);

    // 队列添加元素
    jedis.rpush(key, &quot;aaaa&quot;);
    jedis.rpush(key, &quot;aaaa&quot;);
    jedis.rpush(key, &quot;bbbb&quot;);
    jedis.rpush(key, &quot;cccc&quot;);
    jedis.rpush(key, &quot;cccc&quot;);
    
    // 队列长度
    System.out.println(&quot;lenth: &quot; + jedis.llen(key));
    
    // 打印队列，从索引0开始，到倒数第1个（全部元素）
    System.out.println(&quot;all elements: &quot; + jedis.lrange(key, 0, -1));
    
    // 索引为1的元素
    System.out.println(&quot;index of 1: &quot; + jedis.lindex(key, 1));
    
    // 设置队列里面一个元素的值，当index超出范围时会返回一个error。
    jedis.lset(key, 1, &quot;aa22&quot;);
    System.out.println(&quot;index of 1: &quot; + jedis.lindex(key, 1));
    
    // 从队列的右边入队一个元素
    jedis.rpush(key, &quot;-2&quot;, &quot;-1&quot;);// 先-2，后-1入队列
    System.out.println(&quot;all elements: &quot; + jedis.lrange(key, 0, -1));
    
    // 从队列的左边入队一个或多个元素
    jedis.lpush(key, &quot;second element&quot;, &quot;first element&quot;);// 先second
    // element，后first
    // elementF入队列
    System.out.println(&quot;all elements: &quot; + jedis.lrange(key, 0, -1));
    
    // 从队列的右边出队一个元素
    System.out.println(jedis.rpop(key));
    // 从队列的左边出队一个元素
    System.out.println(jedis.lpop(key));
    System.out.println(&quot;all elements: &quot; + jedis.lrange(key, 0, -1));
    
    // count &gt; 0: 从头往尾移除值为 value 的元素，count为移除的个数。
    // count &lt; 0: 从尾往头移除值为 value 的元素，count为移除的个数。
    // count = 0: 移除所有值为 value 的元素。
    jedis.lrem(key, 1, &quot;cccc&quot;);
    System.out.println(&quot;all elements: &quot; + jedis.lrange(key, 0, -1));
    
    //即最右边的那个元素也会被包含在内，如果start比list的尾部下标大的时候，
    //会返回一个空列表。
    //如果stop比list的实际尾部大的时候，Redis会当它是最后一个元素的下标。
    System.out.println(jedis.lrange(key, 0, 2));
    System.out.println(&quot;all elements: &quot; + jedis.lrange(key, 0, -1));
    
    // 删除区间以外的元素
    System.out.println(jedis.ltrim(key, 0, 2));
    System.out.println(&quot;all elements: &quot; + jedis.lrange(key, 0, -1));

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、jedis-对集合-sets-的操作" tabindex="-1"><a class="header-anchor" href="#_5、jedis-对集合-sets-的操作" aria-hidden="true">#</a> 5、Jedis 对集合 (Sets) 的操作：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Test
public void testSet() {
    // 清空数据
    System.out.println(jedis.flushDB());
    String key = &quot;myset&quot;;
    String key2 = &quot;myset2&quot;;

    // 集合添加元素
    jedis.sadd(key, &quot;aaa&quot;, &quot;bbb&quot;, &quot;ccc&quot;);
    jedis.sadd(key2, &quot;bbb&quot;, &quot;ccc&quot;, &quot;ddd&quot;);
    
    // 获取集合里面的元素数量
    System.out.println(jedis.scard(key));
    
    // 获得两个集合的交集，并存储在一个关键的结果集
    jedis.sinterstore(&quot;destination&quot;, key, key2);
    System.out.println(jedis.smembers(&quot;destination&quot;));
    
    // 获得两个集合的并集，并存储在一个关键的结果集
    jedis.sunionstore(&quot;destination&quot;, key, key2);
    System.out.println(jedis.smembers(&quot;destination&quot;));
    
    // key集合中，key2集合没有的元素，并存储在一个关键的结果集
    jedis.sdiffstore(&quot;destination&quot;, key, key2);
    System.out.println(jedis.smembers(&quot;destination&quot;));
    
    // 确定某个元素是一个集合的成员
    System.out.println(jedis.sismember(key, &quot;aaa&quot;));
    
    // 从key集合里面随机获取一个元素
    System.out.println(jedis.srandmember(key));
    
    // aaa从key移动到key2集合
    jedis.smove(key, key2, &quot;aaa&quot;);
    System.out.println(jedis.smembers(key));
    System.out.println(jedis.smembers(key2));
    
    // 删除并获取一个集合里面的元素
    System.out.println(jedis.spop(key));
    
    // 从集合里删除一个或多个元素
    jedis.srem(key2, &quot;ccc&quot;, &quot;ddd&quot;);
    System.out.println(jedis.smembers(key2));

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、jedis-对有序集合-sorted-sets-的操作" tabindex="-1"><a class="header-anchor" href="#_6、jedis-对有序集合-sorted-sets-的操作" aria-hidden="true">#</a> 6、Jedis 对有序集合 (Sorted Sets) 的操作：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Test
public void testSortSet() {
    // 清空数据
    System.out.println(jedis.flushDB());
    String key = &quot;mysortset&quot;;

    Map&lt;String, Double&gt; scoreMembers = new HashMap&lt;String, Double&gt;();
    scoreMembers.put(&quot;aaa&quot;, 1001.0);
    scoreMembers.put(&quot;bbb&quot;, 1002.0);
    scoreMembers.put(&quot;ccc&quot;, 1003.0);
    
    // 添加数据
    jedis.zadd(key, 1004.0, &quot;ddd&quot;);
    jedis.zadd(key, scoreMembers);
    
    // 获取一个排序的集合中的成员数量
    System.out.println(jedis.zcard(key));
    
    //返回的成员在指定范围内的有序集合，以0表示有序集第一个成员，
    //以1表示有序集第二个成员，以此类推。
    //负数下标，以-1表示最后一个成员，-2表示倒数第二个成员。
    Set&lt;String&gt; coll = jedis.zrange(key, 0, -1);
    System.out.println(coll);
    
    // 返回的成员在指定范围内的逆序集合
    coll = jedis.zrevrange(key, 0, -1);
    System.out.println(coll);
    
    // 元素下标
    System.out.println(jedis.zscore(key, &quot;bbb&quot;));
    
    // 删除元素
    System.out.println(jedis.zrem(key, &quot;aaa&quot;));
    System.out.println(jedis.zrange(key, 0, -1));
    
    // 给定值范围内的成员数
    System.out.println(jedis.zcount(key, 1002.0, 1003.0));

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7、jedis-对哈希-hashs-的操作" tabindex="-1"><a class="header-anchor" href="#_7、jedis-对哈希-hashs-的操作" aria-hidden="true">#</a> 7、Jedis 对哈希 (Hashs) 的操作：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Test
public void testHash() {
    // 清空数据
    System.out.println(jedis.flushDB());
    String key = &quot;myhash&quot;;
    Map&lt;String, String&gt; hash = new HashMap&lt;String, String&gt;();
    hash.put(&quot;aaa&quot;, &quot;11&quot;);
    hash.put(&quot;bbb&quot;, &quot;22&quot;);
    hash.put(&quot;ccc&quot;, &quot;33&quot;);

    // 添加数据
    jedis.hmset(key, hash);
    jedis.hset(key, &quot;ddd&quot;, &quot;44&quot;);
    
    // 获取hash的所有元素(key值)
    System.out.println(jedis.hkeys(key));
    
    // 获取hash中所有的key对应的value值
    System.out.println(jedis.hvals(key));
    
    // 获取hash里所有元素的数量
    System.out.println(jedis.hlen(key));
    
    // 获取hash中全部的域和值,以Map&lt;String, String&gt; 的形式返回
    Map&lt;String, String&gt; elements = jedis.hgetAll(key);
    System.out.println(elements);
    
    // 判断给定key值是否存在于哈希集中
    System.out.println(jedis.hexists(key, &quot;bbb&quot;));
    
    // 获取hash里面指定字段对应的值
    System.out.println(jedis.hmget(key, &quot;aaa&quot;, &quot;bbb&quot;));
    
    // 获取指定的值
    System.out.println(jedis.hget(key, &quot;aaa&quot;));
    
    // 删除指定的值
    System.out.println(jedis.hdel(key, &quot;aaa&quot;));
    System.out.println(jedis.hgetAll(key));
    
    // 为key中的域 field 的值加上增量 increment
    System.out.println(jedis.hincrBy(key, &quot;bbb&quot;, 100));
    System.out.println(jedis.hgetAll(key));

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8、jedis-操作事务" tabindex="-1"><a class="header-anchor" href="#_8、jedis-操作事务" aria-hidden="true">#</a> 8、Jedis 操作事务：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Test
public void testTransaction() {
    Transaction t = jedis.multi();
    t.set(&quot;hello&quot;, &quot;world&quot;);
    Response&lt;String&gt; response = t.get(&quot;hello&quot;);

    t.zadd(&quot;foo&quot;, 1, &quot;barowitch&quot;);
    t.zadd(&quot;foo&quot;, 0, &quot;barinsky&quot;);
    t.zadd(&quot;foo&quot;, 0, &quot;barikoviev&quot;);
    //返回全部相应并以有序集合的方式返回
    Response&lt;Set&lt;String&gt;&gt; sose = t.zrange(&quot;foo&quot;, 0, -1);
    System.out.println(response);
    System.out.println(sose);
    t.exec(); // 此行注意，不能缺少
    
    String foolbar = response.get(); // Response.get() 可以从响应中获取数据
    
    int soseSize = sose.get().size(); // sose.get() 会立即调用set方法
    System.out.println(foolbar);
    System.out.println(sose.get());

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9、jedis-操作管道" tabindex="-1"><a class="header-anchor" href="#_9、jedis-操作管道" aria-hidden="true">#</a> 9、Jedis 操作管道：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Test
public void testTransactionPipeling() {
    Pipeline p = jedis.pipelined();//开一个管道

    p.set(&quot;fool&quot;, &quot;bar&quot;);
    p.zadd(&quot;foo&quot;, 1, &quot;barowitch&quot;);
    p.zadd(&quot;foo&quot;, 0, &quot;barinsky&quot;);
    p.zadd(&quot;foo&quot;, 0, &quot;barikoviev&quot;);
    Response&lt;String&gt; pipeString = p.get(&quot;fool&quot;);
    Response&lt;Set&lt;String&gt;&gt; sose = p.zrange(&quot;foo&quot;, 0, -1);
    System.out.println(pipeString);
    System.out.println(sose);
    
    p.sync();//提交
    
    System.out.println(&quot;==========&quot;);
    System.out.println(p.get(&quot;fool&quot;));
    System.out.println(p.zrange(&quot;foo&quot;, 0, -1));
    
    int soseSize = sose.get().size();
    Set&lt;String&gt; setBack = sose.get();
    
    System.out.println(soseSize);
    System.out.println(setBack);

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,123),b=[m];function p(y,h){return i(),n("div",null,b)}const k=e(c,[["render",p],["__file","Redis总结.html.vue"]]);export{k as default};
