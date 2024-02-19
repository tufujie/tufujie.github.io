import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as t}from"./app-AuAuVshg.js";const e={},p=t(`<h2 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> 数据库</h2><p>db操作性能较差，并且有锁表的风险，一般不考虑。</p><h3 id="select-for-update" tabindex="-1"><a class="header-anchor" href="#select-for-update" aria-hidden="true">#</a> select for update</h3><p>直接在数据库新建一张表：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> distribute_lock<span class="token punctuation">(</span>
	id <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token keyword">auto_increment</span><span class="token punctuation">,</span>
    business_code <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;业务编码&#39;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>锁的code预先写到数据库中，抢锁的时候，使用select for update查询锁对应的key，也就是这里的stockLock，阻塞就说明别人在使用锁。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> distribute_lock<span class="token punctuation">(</span>business_code<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">&#39;stockLock&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 加上事务就是为了 for update 的锁可以一直生效到事务执行结束</span>
<span class="token comment">// 默认回滚的是 RunTimeException</span>
<span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>rollbackFor <span class="token operator">=</span> <span class="token class-name">Exception</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">singleLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;我进入了方法！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">DistributeLock</span> distributeLock <span class="token operator">=</span> distributeLockMapper<span class="token punctuation">.</span>
        <span class="token function">selectDistributeLock</span><span class="token punctuation">(</span><span class="token string">&quot;stockLock&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>distributeLock <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token string">&quot;分布式锁找不到&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;我进入了锁！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">BusinessUtil</span><span class="token punctuation">.</span><span class="token function">doSomeThing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">&quot;我已经执行完成！&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectDistributeLock<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.deltaqin.distribute.model.DistributeLock<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  select * from distribute_lock
  where businessCode = #{businessCode,jdbcType=VARCHAR}
  for update
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="insert-lock" tabindex="-1"><a class="header-anchor" href="#insert-lock" aria-hidden="true">#</a> insert lock</h3><p>使用唯一键作为限制，插入一条数据，其他待执行的SQL就会失败，当数据删除之后再去获取锁 ，这是利用了唯一索引的排他性。</p><p>直接维护一张锁表：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> method_lock<span class="token punctuation">(</span>
	id <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token keyword">auto_increment</span><span class="token punctuation">,</span>
    business_code <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;业务编码&#39;</span><span class="token punctuation">,</span>
    <span class="token keyword">unique</span> <span class="token keyword">key</span> idx_code<span class="token punctuation">(</span>business_code<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DistributeLockUtil</span> <span class="token punctuation">{</span>
	<span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">MethodlockMapper</span> methodlockMapper<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">tryLock</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 插入一条数据 insert into</span>
            methodlockMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Methodlock</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 插入失败，唯一键异常</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">waitLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">unlock</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 删除数据 delete</span>
        methodlockMapper<span class="token punctuation">.</span><span class="token function">deleteByMethodlock</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-------释放锁------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="client" tabindex="-1"><a class="header-anchor" href="#client" aria-hidden="true">#</a> Client</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">DistributeLockUtil</span> distributeLockUtil <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DistributeLockUtil</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> key <span class="token operator">=</span> <span class="token string">&quot;stockLock&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">boolean</span> locked <span class="token operator">=</span> distributeLockUtil<span class="token punctuation">.</span><span class="token function">tryLock</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>locked<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token class-name">BusinessUtil</span><span class="token punctuation">.</span><span class="token function">doSomeThing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>
	distributeLockUtil<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redis-setnx-px" tabindex="-1"><a class="header-anchor" href="#redis-setnx-px" aria-hidden="true">#</a> Redis setnx px</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">RedisJavaUtil</span><span class="token punctuation">.</span><span class="token function">tryGetDistributedLock</span><span class="token punctuation">(</span>jedis<span class="token punctuation">,</span> <span class="token constant">LOCKKEY</span><span class="token punctuation">,</span> requestId<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> stock <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">BusinessUtil</span><span class="token punctuation">.</span><span class="token function">doSomeThing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">RedisJavaUtil</span><span class="token punctuation">.</span><span class="token function">releaseDistributedLock</span><span class="token punctuation">(</span>jedis<span class="token punctuation">,</span> <span class="token constant">LOCKKEY</span><span class="token punctuation">,</span> requestId<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 尝试获取分布式锁
 *
 * <span class="token keyword">@param</span> <span class="token parameter">jedis</span>                Redis客户端
 * <span class="token keyword">@param</span> <span class="token parameter">lockKey</span>              锁
 * <span class="token keyword">@param</span> <span class="token parameter">requestId</span>            请求标识
 * <span class="token keyword">@param</span> <span class="token parameter">millisecondsToExpire</span> 超期时间
 * <span class="token keyword">@return</span> 是否获取成功
 */</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">tryGetDistributedLock</span><span class="token punctuation">(</span><span class="token class-name">Jedis</span> jedis<span class="token punctuation">,</span> <span class="token class-name">String</span> lockKey<span class="token punctuation">,</span> <span class="token class-name">String</span> requestId<span class="token punctuation">,</span> <span class="token keyword">long</span> millisecondsToExpire<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> result <span class="token operator">=</span> jedis<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>lockKey<span class="token punctuation">,</span> requestId<span class="token punctuation">,</span> <span class="token class-name">SetParams</span><span class="token punctuation">.</span><span class="token function">setParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">nx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">px</span><span class="token punctuation">(</span>millisecondsToExpire<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token constant">LOCK_SUCCESS</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token doc-comment comment">/**
 * 释放分布式锁
 *
 * <span class="token keyword">@param</span> <span class="token parameter">jedis</span>     Redis客户端
 * <span class="token keyword">@param</span> <span class="token parameter">lockKey</span>   锁
 * <span class="token keyword">@param</span> <span class="token parameter">requestId</span> 请求标识
 * <span class="token keyword">@return</span> 是否释放成功
 */</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">releaseDistributedLock</span><span class="token punctuation">(</span><span class="token class-name">Jedis</span> jedis<span class="token punctuation">,</span> <span class="token class-name">String</span> lockKey<span class="token punctuation">,</span> <span class="token class-name">String</span> requestId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> script <span class="token operator">=</span> <span class="token string">&quot;if redis.call(&#39;get&#39;, KEYS[1]) == ARGV[1] then return redis.call(&#39;del&#39;, KEYS[1]) else return 0 end&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">Object</span> result <span class="token operator">=</span> jedis<span class="token punctuation">.</span><span class="token function">eval</span><span class="token punctuation">(</span>script<span class="token punctuation">,</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singletonList</span><span class="token punctuation">(</span>lockKey<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singletonList</span><span class="token punctuation">(</span>requestId<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token constant">RELEASE_SUCCESS</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redisson" tabindex="-1"><a class="header-anchor" href="#redisson" aria-hidden="true">#</a> Redisson</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">RedissonClient</span> redissonClient <span class="token operator">=</span> <span class="token class-name">RedisJavaUtil</span><span class="token punctuation">.</span><span class="token function">getRedissonClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Jedis</span> jedis <span class="token operator">=</span> <span class="token class-name">RedisJavaUtil</span><span class="token punctuation">.</span><span class="token function">getAuthJedis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">RLock</span> lock <span class="token operator">=</span> redissonClient<span class="token punctuation">.</span><span class="token function">getLock</span><span class="token punctuation">(</span><span class="token string">&quot;redisson:stockLock&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">boolean</span> locked <span class="token operator">=</span> lock<span class="token punctuation">.</span><span class="token function">tryLock</span><span class="token punctuation">(</span>expireTime<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或者</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>locked<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
       <span class="token class-name">BusinessUtil</span><span class="token punctuation">.</span><span class="token function">doSomeThing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        <span class="token comment">// 释放锁</span>
        lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="zookeeper-curator" tabindex="-1"><a class="header-anchor" href="#zookeeper-curator" aria-hidden="true">#</a> Zookeeper curator</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">CuratorFramework</span> client <span class="token operator">=</span> <span class="token class-name">CuratorFrameworkFactory</span><span class="token punctuation">.</span><span class="token function">newClient</span><span class="token punctuation">(</span><span class="token string">&quot;localhost:2181&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">ExponentialBackoffRetry</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
client<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">InterProcessMutex</span> lock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InterProcessMutex</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> <span class="token string">&quot;/mylock&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">long</span> expireTime <span class="token operator">=</span> <span class="token number">10L</span><span class="token punctuation">;</span>
<span class="token comment">// 获取锁</span>

<span class="token keyword">boolean</span> locked <span class="token operator">=</span> lock<span class="token punctuation">.</span><span class="token function">acquire</span><span class="token punctuation">(</span>expireTime<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>locked<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token comment">// 执行互斥访问的代码 2181:</span>
        <span class="token class-name">BusinessUtil</span><span class="token punctuation">.</span><span class="token function">doSomeThing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 处理异常</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            lock<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 释放锁</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 处理异常</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
client<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),c=[p];function o(l,i){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","分布式锁.html.vue"]]);export{d as default};
