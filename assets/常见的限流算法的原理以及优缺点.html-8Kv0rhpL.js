import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as e}from"./app-AuAuVshg.js";const p="/assets/限流1-VjM9KwsR.png",t="/assets/限流2-Ax6MgWC_.png",o="/assets/限流3-SwU2o2Xg.png",i="/assets/限流4-ErrLG2J6.png",c="/assets/限流5-rdx-UOPV.png",l={},r=e('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p><strong>说明</strong></p><p>本文介绍限流常用的算法及其优缺点。</p><p>常用的限流算法有：</p><ol><li><p><mark>计数器</mark>（固定窗口）算法</p></li><li><p><mark>滑动窗口</mark>算法</p></li><li><p><mark>漏桶</mark>算法</p></li><li><p><mark>令牌桶</mark>算法</p></li></ol><p>下面将对这几种算法进行分别介绍，并给出具体的实现。</p><p><strong>限流的含义</strong></p><p>限流是指在系统面临高并发、大流量请求的情况下，限制新的流量对系统的访问，从而保证系统服务的安全性。</p><p>限流会对少部分用户的请求直接进行拒绝或者延迟处理，影响这些用户的体验。衡量系统处理能力的指标是每秒的QPS或者TPS，假设设置的系统每秒的流量阈值是1000，理论上一秒内有第1001个请求进来时，那么这个请求就会被限流。</p><p>以web服务、对外API为例，有以下几种可能导致机器被拖垮：</p><ol><li><p>用户增长过快</p></li><li><p>因为某个热点事件（秒杀、微博热搜）</p></li><li><p>竞争对象爬虫</p></li><li><p>恶意的刷单</p></li></ol><h2 id="计数器算法" tabindex="-1"><a class="header-anchor" href="#计数器算法" aria-hidden="true">#</a> 计数器算法</h2><h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h3><p>计数器算法是限流算法里最简单也是最容易实现的一种算法。方案是：在单位时间内累加访问次数，当访问次数达到设定的阈值时，触发限流策略，当进入下一个单位时间时访问次数清零。</p><p>假设限制每分钟请求量不超过100。方法是：设置一个计数器，当请求到达时如果计数器到达阈值，则拒绝请求，否则计数器加1；每分钟重置计数器为0。如下图所示：</p><figure><img src="'+p+`" alt="IMG_256" tabindex="0" loading="lazy"><figcaption>IMG_256</figcaption></figure><p><strong>代码示例</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CounterTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> timeStamp <span class="token operator">=</span> <span class="token function">getNowTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> reqCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> limit <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span> <span class="token comment">// 时间窗口内最大请求数</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">long</span> interval <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span> <span class="token comment">// 时间窗口ms</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">grant</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">long</span> now <span class="token operator">=</span> <span class="token function">getNowTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>now <span class="token operator">&lt;</span> timeStamp <span class="token operator">+</span> interval<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 在时间窗口内</span>
            reqCount<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token comment">// 判断当前时间窗口内是否超过最大请求控制数</span>
            <span class="token keyword">return</span> reqCount <span class="token operator">&lt;=</span> limit<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            timeStamp <span class="token operator">=</span> now<span class="token punctuation">;</span>
            <span class="token comment">// 超时后重置</span>
            reqCount <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">getNowTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h3><p><strong>优点</strong></p><p>简单，最容易实现。</p><p><strong>缺点</strong></p><p>临界问题（突刺现象）。</p><figure><img src="`+t+'" alt="IMG_257" tabindex="0" loading="lazy"><figcaption>IMG_257</figcaption></figure><p>假设有一个恶意用户，他在0:59时，瞬间发送了100个请求，并且1:00又瞬间发送了100个请求，那么这个用户在 1秒里面，瞬间发送了200个请求。我们刚才规定的是1分钟最多100个请求，也就是每秒钟最多1.7个请求，用户通过在时间窗口的重置节点处突发请求，可以瞬间超过我们的速率限制。用户有可能通过算法的这个漏洞，压垮我们的应用。</p><p>刚才的问题其实是因为我们统计的精度太低。那么如何很好地处理这个问题呢？或者说，如何将临界问题的影响降低呢？我们可以看下面的滑动窗口算法。</p><h2 id="滑动窗口算法" tabindex="-1"><a class="header-anchor" href="#滑动窗口算法" aria-hidden="true">#</a> 滑动窗口算法</h2><h3 id="概述-1" tabindex="-1"><a class="header-anchor" href="#概述-1" aria-hidden="true">#</a> 概述</h3><p>滑动窗口：为了避免计数器中的临界问题，让限制更加平滑，将固定窗口中分割出多个小时间窗口，分别在每个小的时间窗口中记录访问次数，然后根据时间将窗口往前滑动并删除过期的小时间窗口。如下图所示：</p><figure><img src="'+o+'" alt="IMG_258" tabindex="0" loading="lazy"><figcaption>IMG_258</figcaption></figure><p>整个红色的矩形框表示一个时间窗口，一个时间窗口是1分钟。我们将将滑动窗口划成了6格，每格代表的是10秒钟。每过10秒钟，时间窗口往右滑动一格，每个格子都有自己独立的计数器counter，比如当一个请求 在0:35秒到达，那么0:30~0:39对应的counter就会加1。</p><p>滑动窗口怎么解决刚才的临界问题的呢？0:59到达的100个请求会落在灰色的格子中，而1:00到达的请求会落在橘黄色的格子中。当时间到达1:00时，我们的窗口会往右移动一格，那么此时时间窗口内的总请求数量一共是200个，超过了限定的100个，所以此时能够检测出来触发了限流。</p><p>回顾刚才的计数器算法可以发现，计数器算法也是滑动窗口的一种。它没有对时间窗口做进一步地划分，所以只有1格。当滑动窗口的格子划分的越多，那么滑动窗口的滚动就越平滑，限流的统计就会越精确。</p><h3 id="优缺点-1" tabindex="-1"><a class="header-anchor" href="#优缺点-1" aria-hidden="true">#</a> 优缺点</h3><p><strong>优点</strong></p><ol><li>可以基本解决计数器算法的临界问题。</li></ol><p><strong>缺点</strong></p><ol><li>除了需要一个计数器来记录时间窗口内接口请求次数之外，还需要记录在时间窗口内每个接口请求到达的时间点，对内存的占用会比较多。</li></ol><h2 id="漏桶算法" tabindex="-1"><a class="header-anchor" href="#漏桶算法" aria-hidden="true">#</a> 漏桶算法</h2><h3 id="概述-2" tabindex="-1"><a class="header-anchor" href="#概述-2" aria-hidden="true">#</a> 概述</h3><p>请求就像水一样以<strong>任意</strong>速度注入漏桶，桶会按照<strong>固定</strong>的速度将水漏掉。当注入速度持续大于漏出的速度时，漏桶会变满，此时新进入的请求将会被丢弃。限流 和 整形 是漏桶算法的两个核心能力。</p><figure><img src="'+i+`" alt="IMG_259" tabindex="0" loading="lazy"><figcaption>IMG_259</figcaption></figure><p>代码示例</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LeakyBucketLimiter</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 上次请求到来的时间
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">long</span> preTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 漏水速率,n/s
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> leakRate<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 储蓄桶容量
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> capacity<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 当前水量
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> water<span class="token punctuation">;</span>
 
    <span class="token keyword">public</span> <span class="token class-name">LeakyBucketLimiter</span><span class="token punctuation">(</span><span class="token keyword">int</span> leakRate<span class="token punctuation">,</span> <span class="token keyword">int</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>leakRate <span class="token operator">=</span> leakRate<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>capacity <span class="token operator">=</span> capacity<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token comment">//省略get与set方法</span>
 
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">limit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">long</span> now <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token comment">//先漏水,计算剩余水量</span>
        water <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> water <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>now <span class="token operator">-</span> preTime<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token operator">*</span> leakRate<span class="token punctuation">)</span><span class="token punctuation">;</span>
        preTime <span class="token operator">=</span> now<span class="token punctuation">;</span>
 
        <span class="token comment">//桶未满</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>water <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;=</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            water<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
 
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="优缺点-2" tabindex="-1"><a class="header-anchor" href="#优缺点-2" aria-hidden="true">#</a> 优缺点</h3><p><strong>优点</strong></p><ol><li>确保网络中的突发流量被整合成平滑稳定的额流量。</li></ol><p><strong>缺点</strong></p><ol><li><p>漏桶对流量的控制过于严格，在有些场景下无法处理突发流量，不能充分使用系统资源。</p><ol><li>因为漏桶的漏出速率是固定的，即使在某一时刻下游能够处理更大的流量，漏桶也不允许突发流量通过。</li></ol></li></ol><h2 id="令牌桶算法" tabindex="-1"><a class="header-anchor" href="#令牌桶算法" aria-hidden="true">#</a> 令牌桶算法</h2><h3 id="概述-3" tabindex="-1"><a class="header-anchor" href="#概述-3" aria-hidden="true">#</a> 概述</h3><p>令牌桶算法既能像漏桶那样匀速，又能像计数器那样处理突发请求。</p><p>令牌桶算法是网络流量整形(Traffic Shaping)和速率限制(Rate Limiting)中最常使用的一种算法。</p><p>令牌桶算法：以恒定速率向令牌桶发送令牌，请求到达时，尝试从令牌桶中拿令牌，只有拿到令牌才能够放行，否则将会被拒绝。</p><p>令牌桶大小固定，如果令牌桶被填满，则会丢弃新生成的要放进来的令牌，如果桶内没有令牌则触发限流策略。</p><figure><img src="`+c+`" alt="IMG_260" tabindex="0" loading="lazy"><figcaption>IMG_260</figcaption></figure><p><strong>代码示例</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TokenBucketLimiter</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 上次请求到来的时间
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">long</span> preTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 放入令牌速率,n/s
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> putRate<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 令牌桶容量
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> capacity<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 当前令牌数
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> bucket<span class="token punctuation">;</span>
 
    <span class="token keyword">public</span> <span class="token class-name">TokenBucketLimiter</span><span class="token punctuation">(</span><span class="token keyword">int</span> putRate<span class="token punctuation">,</span> <span class="token keyword">int</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>putRate <span class="token operator">=</span> putRate<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>capacity <span class="token operator">=</span> capacity<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token comment">//省略get与set方法</span>
 
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">limit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">long</span> now <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token comment">//先放入令牌，再获取令牌</span>
        bucket <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>capacity<span class="token punctuation">,</span> bucket <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>now <span class="token operator">-</span> preTime<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token operator">*</span> putRate<span class="token punctuation">)</span><span class="token punctuation">;</span>
        preTime <span class="token operator">=</span> now<span class="token punctuation">;</span>
 
        <span class="token keyword">if</span> <span class="token punctuation">(</span>bucket <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
 
        bucket<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="优缺点-3" tabindex="-1"><a class="header-anchor" href="#优缺点-3" aria-hidden="true">#</a> 优缺点</h3><p><strong>优点</strong></p><p>既能够将所有的请求平均分布到时间区间内，又能接受突发请求。</p><p><strong>缺点</strong></p><p>这么完美了，还能有啥缺点？瑕不掩瑜😆</p>`,63),u=[r];function d(k,m){return s(),a("div",null,u)}const g=n(l,[["render",d],["__file","常见的限流算法的原理以及优缺点.html.vue"]]);export{g as default};
