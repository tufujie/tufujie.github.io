import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as t}from"./app-AuAuVshg.js";const e={},p=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 总库存数量</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> <span class="token constant">PRODUCT_COUNT</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 错误案例一：数据库update相互覆盖
     * 直接在内存中判断是否有库存，计算扣减之后的值更新数据库，并发的情况下会导致相互覆盖发生：
     *
     * <span class="token keyword">@param</span> <span class="token parameter">purchaseProductId</span>  购买的商品id
     * <span class="token keyword">@param</span> <span class="token parameter">purchaseProductNum</span> 购买数量
     * <span class="token keyword">@return</span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Long</span> <span class="token function">createOrderErrorV1</span><span class="token punctuation">(</span><span class="token class-name">Long</span> purchaseProductId<span class="token punctuation">,</span> <span class="token class-name">Integer</span> purchaseProductNum<span class="token punctuation">,</span> <span class="token class-name">Long</span> userId<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
<span class="token comment">//        Product product = productMapper.selectByPrimaryKey(purchaseProductId);</span>
        <span class="token class-name">Product</span> product <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Product</span><span class="token punctuation">(</span>purchaseProductId<span class="token punctuation">,</span> <span class="token constant">PRODUCT_COUNT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ... 忽略校验逻辑</span>

        <span class="token comment">// 商品当前库存</span>
        <span class="token class-name">Integer</span> currentCount <span class="token operator">=</span> product<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 校验库存</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>purchaseProductNum <span class="token operator">&gt;</span> currentCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token string">&quot;当前用户&quot;</span> <span class="token operator">+</span> userId <span class="token operator">+</span> <span class="token string">&quot;商品&quot;</span> <span class="token operator">+</span> purchaseProductId <span class="token operator">+</span> <span class="token string">&quot;仅剩&quot;</span> <span class="token operator">+</span> currentCount <span class="token operator">+</span> <span class="token string">&quot;件，无法购买&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 计算剩余库存</span>
        <span class="token class-name">Integer</span> leftCount <span class="token operator">=</span> currentCount <span class="token operator">-</span> purchaseProductNum<span class="token punctuation">;</span>
        <span class="token comment">// 更新库存</span>
        product<span class="token punctuation">.</span><span class="token function">setCount</span><span class="token punctuation">(</span>leftCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
        product<span class="token punctuation">.</span><span class="token function">setGmtModified</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 更新库存数量</span>
<span class="token comment">//        productMapper.updateByPrimaryKeySelective(product);</span>
        <span class="token constant">PRODUCT_COUNT</span> <span class="token operator">=</span> product<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">OrderInfo</span> order <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrderInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ... 省略 Set</span>
<span class="token comment">//        orderMapper.insertSelective(order);</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;当前用户&quot;</span> <span class="token operator">+</span> userId <span class="token operator">+</span> <span class="token string">&quot;成功创建商品&quot;</span> <span class="token operator">+</span> purchaseProductId <span class="token operator">+</span> <span class="token string">&quot;的订单&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">OrderProduct</span> orderItem <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrderProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        orderItem<span class="token punctuation">.</span><span class="token function">setOrderId</span><span class="token punctuation">(</span>order<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ... 省略 Set</span>
        <span class="token keyword">return</span> order<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 错误案例二：扣减串行执行，但是库存被扣减为负数
     * 在 SQL 中加入运算避免值的相互覆盖，但是库存的数量变为负数，因为校验库存是否足够还是在内存中执行的，并发情况下都会读到有库存：
     *
     * <span class="token keyword">@param</span> <span class="token parameter">purchaseProductId</span>  购买的商品id
     * <span class="token keyword">@param</span> <span class="token parameter">purchaseProductNum</span> 购买数量
     * <span class="token keyword">@return</span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Long</span> <span class="token function">createOrderErrorV2</span><span class="token punctuation">(</span><span class="token class-name">Long</span> purchaseProductId<span class="token punctuation">,</span> <span class="token class-name">Integer</span> purchaseProductNum<span class="token punctuation">,</span> <span class="token class-name">Long</span> userId<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
<span class="token comment">//        Product product = productMapper.selectByPrimaryKey(purchaseProductId);</span>
        <span class="token class-name">Product</span> product <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Product</span><span class="token punctuation">(</span>purchaseProductId<span class="token punctuation">,</span> <span class="token constant">PRODUCT_COUNT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ... 忽略校验逻辑</span>

        <span class="token comment">// 商品当前库存</span>
        <span class="token class-name">Integer</span> currentCount <span class="token operator">=</span> product<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 校验库存</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>purchaseProductNum <span class="token operator">&gt;</span> currentCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token string">&quot;当前用户&quot;</span> <span class="token operator">+</span> userId <span class="token operator">+</span> <span class="token string">&quot;商品&quot;</span> <span class="token operator">+</span> purchaseProductId <span class="token operator">+</span> <span class="token string">&quot;仅剩&quot;</span> <span class="token operator">+</span> currentCount <span class="token operator">+</span> <span class="token string">&quot;件，无法购买&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 更新库存数量</span>
        <span class="token comment">// 使用 set count =  count - #{purchaseProductNum,jdbcType=INTEGER}, 更新库存</span>
<span class="token comment">//        productMapper.updateProductCount(purchaseProductNum, new Date(), product.getId());</span>
        <span class="token constant">PRODUCT_COUNT</span> <span class="token operator">=</span> product<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> purchaseProductNum<span class="token punctuation">;</span>

        <span class="token class-name">OrderInfo</span> order <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrderInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ... 省略 Set</span>
<span class="token comment">//        orderMapper.insertSelective(order);</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;当前用户&quot;</span> <span class="token operator">+</span> userId <span class="token operator">+</span> <span class="token string">&quot;成功创建商品&quot;</span> <span class="token operator">+</span> purchaseProductId <span class="token operator">+</span> <span class="token string">&quot;的订单&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">OrderProduct</span> orderItem <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrderProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        orderItem<span class="token punctuation">.</span><span class="token function">setOrderId</span><span class="token punctuation">(</span>order<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ... 省略 Set</span>
        <span class="token keyword">return</span> order<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 错误案例三：使用 synchronized 实现内存中串行校验，但是依旧扣减为负数
     * 因为我们使用的是事务的注解，synchronized加在方法上，方法执行结束的时候锁就会释放，此时的事务还没有提交，
     * 另一个线程拿到这把锁之后获取的可能是旧库存数，就会有一次扣减，导致负数。
     *
     * <span class="token keyword">@param</span> <span class="token parameter">purchaseProductId</span>  购买的商品id
     * <span class="token keyword">@param</span> <span class="token parameter">purchaseProductNum</span> 购买数量
     * <span class="token keyword">@return</span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
     */</span>

<span class="token comment">//    @Transactional(rollbackFor = Exception.class)</span>
    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token class-name">Long</span> <span class="token function">createOrderErrorV3</span><span class="token punctuation">(</span><span class="token class-name">Long</span> purchaseProductId<span class="token punctuation">,</span> <span class="token class-name">Integer</span> purchaseProductNum<span class="token punctuation">,</span> <span class="token class-name">Long</span> userId<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
<span class="token comment">//        Product product = productMapper.selectByPrimaryKey(purchaseProductId);</span>
        <span class="token class-name">Product</span> product <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Product</span><span class="token punctuation">(</span>purchaseProductId<span class="token punctuation">,</span> <span class="token constant">PRODUCT_COUNT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ... 忽略校验逻辑</span>

        <span class="token comment">// 商品当前库存</span>
        <span class="token class-name">Integer</span> currentCount <span class="token operator">=</span> product<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 校验库存</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>purchaseProductNum <span class="token operator">&gt;</span> currentCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token string">&quot;当前用户&quot;</span> <span class="token operator">+</span> userId <span class="token operator">+</span> <span class="token string">&quot;商品&quot;</span> <span class="token operator">+</span> purchaseProductId <span class="token operator">+</span> <span class="token string">&quot;仅剩&quot;</span> <span class="token operator">+</span> currentCount <span class="token operator">+</span> <span class="token string">&quot;件，无法购买&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 更新库存数量</span>
        <span class="token comment">// 使用 set count =  count - #{purchaseProductNum,jdbcType=INTEGER}, 更新库存</span>
<span class="token comment">//        productMapper.updateProductCount(purchaseProductNum, new Date(), product.getId());</span>
        <span class="token constant">PRODUCT_COUNT</span> <span class="token operator">=</span> product<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> purchaseProductNum<span class="token punctuation">;</span>

        <span class="token class-name">OrderInfo</span> order <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrderInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ... 省略 Set</span>
<span class="token comment">//        orderMapper.insertSelective(order);</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;当前用户&quot;</span> <span class="token operator">+</span> userId <span class="token operator">+</span> <span class="token string">&quot;成功创建商品&quot;</span> <span class="token operator">+</span> purchaseProductId <span class="token operator">+</span> <span class="token string">&quot;的订单&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">OrderProduct</span> orderItem <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrderProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        orderItem<span class="token punctuation">.</span><span class="token function">setOrderId</span><span class="token punctuation">(</span>order<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ... 省略 Set</span>
        <span class="token keyword">return</span> order<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单体应用-正确示例-将事务包含在锁的控制范围内" tabindex="-1"><a class="header-anchor" href="#单体应用-正确示例-将事务包含在锁的控制范围内" aria-hidden="true">#</a> 单体应用：正确示例：将事务包含在锁的控制范围内</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
     * 单体应用解决超卖的问题
     * 正确示例：将事务包含在锁的控制范围内
     * 通过手动提交的方式，保证在锁释放之前，事务已经提交。
     *
     * <span class="token keyword">@param</span> <span class="token parameter">purchaseProductId</span>  购买的商品id
     * <span class="token keyword">@param</span> <span class="token parameter">purchaseProductNum</span> 购买数量
     * <span class="token keyword">@return</span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
     */</span>
<span class="token comment">//    @Transactional(rollbackFor = Exception.class)</span>
    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token class-name">Long</span> <span class="token function">createOrderSingleRightV1</span><span class="token punctuation">(</span><span class="token class-name">Long</span> purchaseProductId<span class="token punctuation">,</span> <span class="token class-name">Integer</span> purchaseProductNum<span class="token punctuation">,</span> <span class="token class-name">Long</span> userId<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
<span class="token comment">//        TransactionStatus transaction1 = PlatformTransactionManager.getTransaction(transactionDefinition);</span>
        <span class="token class-name">TransactionStatus</span> transaction1 <span class="token operator">=</span> <span class="token class-name">TransactionStatus</span><span class="token punctuation">.</span><span class="token constant">COMMITTED</span><span class="token punctuation">;</span>
<span class="token comment">//        Product product = productMapper.selectByPrimaryKey(purchaseProductId);</span>
        <span class="token class-name">Product</span> product <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Product</span><span class="token punctuation">(</span>purchaseProductId<span class="token punctuation">,</span> <span class="token constant">PRODUCT_COUNT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ... 忽略校验逻辑</span>

        <span class="token comment">// 商品当前库存</span>
        <span class="token class-name">Integer</span> currentCount <span class="token operator">=</span> product<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 校验库存</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>purchaseProductNum <span class="token operator">&gt;</span> currentCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//            platformTransactionManager.rollback(transaction1);</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token string">&quot;当前用户&quot;</span> <span class="token operator">+</span> userId <span class="token operator">+</span> <span class="token string">&quot;商品&quot;</span> <span class="token operator">+</span> purchaseProductId <span class="token operator">+</span> <span class="token string">&quot;仅剩&quot;</span> <span class="token operator">+</span> currentCount <span class="token operator">+</span> <span class="token string">&quot;件，无法购买&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 更新库存数量</span>
        <span class="token comment">// 使用 set count =  count - #{purchaseProductNum,jdbcType=INTEGER}, 更新库存</span>
<span class="token comment">//        productMapper.updateProductCount(purchaseProductNum, new Date(), product.getId());</span>
        <span class="token constant">PRODUCT_COUNT</span> <span class="token operator">=</span> product<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> purchaseProductNum<span class="token punctuation">;</span>

        <span class="token class-name">OrderInfo</span> order <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrderInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ... 省略 Set</span>
<span class="token comment">//        orderMapper.insertSelective(order);</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;当前用户&quot;</span> <span class="token operator">+</span> userId <span class="token operator">+</span> <span class="token string">&quot;成功创建商品&quot;</span> <span class="token operator">+</span> purchaseProductId <span class="token operator">+</span> <span class="token string">&quot;的订单&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">OrderProduct</span> orderItem <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrderProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        orderItem<span class="token punctuation">.</span><span class="token function">setOrderId</span><span class="token punctuation">(</span>order<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ... 省略 Set</span>
<span class="token comment">//        platformTransactionManager.commit(transaction1);</span>
        <span class="token keyword">return</span> order<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单体应用-正确示例-使用synchronized的代码块" tabindex="-1"><a class="header-anchor" href="#单体应用-正确示例-使用synchronized的代码块" aria-hidden="true">#</a> 单体应用：正确示例：使用synchronized的代码块</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
     * 单体应用解决超卖的问题
     * 正确示例：使用synchronized的代码块
     *
     * <span class="token keyword">@param</span> <span class="token parameter">purchaseProductId</span>  购买的商品id
     * <span class="token keyword">@param</span> <span class="token parameter">purchaseProductNum</span> 购买数量
     * <span class="token keyword">@return</span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Long</span> <span class="token function">createOrderSingleRightV2</span><span class="token punctuation">(</span><span class="token class-name">Long</span> purchaseProductId<span class="token punctuation">,</span> <span class="token class-name">Integer</span> purchaseProductNum<span class="token punctuation">,</span> <span class="token class-name">Long</span> userId<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">CreateOrderService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//        TransactionStatus transaction1 = PlatformTransactionManager.getTransaction(transactionDefinition);</span>
            <span class="token class-name">TransactionStatus</span> transaction1 <span class="token operator">=</span> <span class="token class-name">TransactionStatus</span><span class="token punctuation">.</span><span class="token constant">COMMITTED</span><span class="token punctuation">;</span>
<span class="token comment">//        Product product = productMapper.selectByPrimaryKey(purchaseProductId);</span>
            <span class="token class-name">Product</span> product <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Product</span><span class="token punctuation">(</span>purchaseProductId<span class="token punctuation">,</span> <span class="token constant">PRODUCT_COUNT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// ... 忽略校验逻辑</span>

            <span class="token comment">// 商品当前库存</span>
            <span class="token class-name">Integer</span> currentCount <span class="token operator">=</span> product<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 校验库存</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>purchaseProductNum <span class="token operator">&gt;</span> currentCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//            platformTransactionManager.rollback(transaction1);</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token string">&quot;当前用户&quot;</span> <span class="token operator">+</span> userId <span class="token operator">+</span> <span class="token string">&quot;商品&quot;</span> <span class="token operator">+</span> purchaseProductId <span class="token operator">+</span> <span class="token string">&quot;仅剩&quot;</span> <span class="token operator">+</span> currentCount <span class="token operator">+</span> <span class="token string">&quot;件，无法购买&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// 更新库存数量</span>
            <span class="token comment">// 使用 set count =  count - #{purchaseProductNum,jdbcType=INTEGER}, 更新库存</span>
<span class="token comment">//        productMapper.updateProductCount(purchaseProductNum, new Date(), product.getId());</span>
            <span class="token constant">PRODUCT_COUNT</span> <span class="token operator">=</span> product<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> purchaseProductNum<span class="token punctuation">;</span>
<span class="token comment">//        platformTransactionManager.commit(transaction2);</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">TransactionStatus</span> transaction2 <span class="token operator">=</span> <span class="token class-name">TransactionStatus</span><span class="token punctuation">.</span><span class="token constant">COMMITTED</span><span class="token punctuation">;</span>
        <span class="token class-name">OrderInfo</span> order <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrderInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ... 省略 Set</span>
<span class="token comment">//        orderMapper.insertSelective(order);</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;当前用户&quot;</span> <span class="token operator">+</span> userId <span class="token operator">+</span> <span class="token string">&quot;成功创建商品&quot;</span> <span class="token operator">+</span> purchaseProductId <span class="token operator">+</span> <span class="token string">&quot;的订单&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">OrderProduct</span> orderItem <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrderProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        orderItem<span class="token punctuation">.</span><span class="token function">setOrderId</span><span class="token punctuation">(</span>order<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ... 省略 Set</span>
<span class="token comment">//        platformTransactionManager.commit(transaction2);</span>
        <span class="token keyword">return</span> order<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单体应用-正确示例-使用lock" tabindex="-1"><a class="header-anchor" href="#单体应用-正确示例-使用lock" aria-hidden="true">#</a> 单体应用：正确示例：使用Lock</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>	<span class="token keyword">private</span> <span class="token class-name">Lock</span> lock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 单体应用解决超卖的问题
     * 正确示例：使用Lock
     *
     * <span class="token keyword">@param</span> <span class="token parameter">purchaseProductId</span>  购买的商品id
     * <span class="token keyword">@param</span> <span class="token parameter">purchaseProductNum</span> 购买数量
     * <span class="token keyword">@return</span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Long</span> <span class="token function">createOrderSingleRightV3</span><span class="token punctuation">(</span><span class="token class-name">Long</span> purchaseProductId<span class="token punctuation">,</span> <span class="token class-name">Integer</span> purchaseProductNum<span class="token punctuation">,</span> <span class="token class-name">Long</span> userId<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TransactionStatus</span> transaction1 <span class="token operator">=</span> <span class="token class-name">TransactionStatus</span><span class="token punctuation">.</span><span class="token constant">COMMITTED</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
<span class="token comment">//            product = productMapper.selectByPrimaryKey(purchaseProductId);</span>
            <span class="token class-name">Product</span> product <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Product</span><span class="token punctuation">(</span>purchaseProductId<span class="token punctuation">,</span> <span class="token constant">PRODUCT_COUNT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//商品当前库存</span>
            <span class="token class-name">Integer</span> currentCount <span class="token operator">=</span> product<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//校验库存</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>purchaseProductNum <span class="token operator">&gt;</span> currentCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token string">&quot;当前用户&quot;</span> <span class="token operator">+</span> userId <span class="token operator">+</span> <span class="token string">&quot;商品&quot;</span> <span class="token operator">+</span> purchaseProductId <span class="token operator">+</span> <span class="token string">&quot;仅剩&quot;</span> <span class="token operator">+</span> currentCount <span class="token operator">+</span> <span class="token string">&quot;件，无法购买&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

<span class="token comment">//            productMapper.updateProductCount(purchaseProductNum, new Date(), product.getId());</span>
            <span class="token constant">PRODUCT_COUNT</span> <span class="token operator">=</span> product<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> purchaseProductNum<span class="token punctuation">;</span>
<span class="token comment">//            platformTransactionManager.commit(transaction1);</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//            platformTransactionManager.rollback(transaction1);</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token comment">// 注意抛异常的时候锁释放不掉，分布式锁也一样，都要在这里删掉</span>
            lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">TransactionStatus</span> transaction <span class="token operator">=</span> <span class="token class-name">TransactionStatus</span><span class="token punctuation">.</span><span class="token constant">COMMITTED</span><span class="token punctuation">;</span>
        <span class="token class-name">OrderInfo</span> order <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrderInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ... 省略 Set</span>
<span class="token comment">//        orderMapper.insertSelective(order);</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;当前用户&quot;</span> <span class="token operator">+</span> userId <span class="token operator">+</span> <span class="token string">&quot;成功创建商品&quot;</span> <span class="token operator">+</span> purchaseProductId <span class="token operator">+</span> <span class="token string">&quot;的订单&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">OrderProduct</span> orderItem <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrderProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ... 省略 Set</span>
<span class="token comment">//        orderItemMapper.insertSelective(orderItem);</span>
<span class="token comment">//        platformTransactionManager.commit(transaction);</span>
        <span class="token keyword">return</span> order<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分布式应用-正确案例一-redis-setnx" tabindex="-1"><a class="header-anchor" href="#分布式应用-正确案例一-redis-setnx" aria-hidden="true">#</a> 分布式应用：正确案例一：Redis setNx</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * 分布式应用
     * 正确案例一：Redis setNx
     *
     * <span class="token keyword">@param</span> <span class="token parameter">purchaseProductId</span>  购买的商品id
     * <span class="token keyword">@param</span> <span class="token parameter">purchaseProductNum</span> 购买数量
     * <span class="token keyword">@return</span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Long</span> <span class="token function">createOrderDistributedRightV1</span><span class="token punctuation">(</span><span class="token class-name">Long</span> purchaseProductId<span class="token punctuation">,</span> <span class="token class-name">Integer</span> purchaseProductNum<span class="token punctuation">,</span> <span class="token class-name">Long</span> userId<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
<span class="token comment">//        Product product = productMapper.selectByPrimaryKey(purchaseProductId);</span>
        <span class="token class-name">Product</span> product <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Product</span><span class="token punctuation">(</span>purchaseProductId<span class="token punctuation">,</span> <span class="token constant">PRODUCT_COUNT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ... 忽略校验逻辑</span>

        <span class="token comment">// 商品当前库存</span>
        <span class="token class-name">Integer</span> currentCount <span class="token operator">=</span> product<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 校验库存</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>purchaseProductNum <span class="token operator">&gt;</span> currentCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token string">&quot;当前用户&quot;</span> <span class="token operator">+</span> userId <span class="token operator">+</span> <span class="token string">&quot;商品&quot;</span> <span class="token operator">+</span> purchaseProductId <span class="token operator">+</span> <span class="token string">&quot;仅剩&quot;</span> <span class="token operator">+</span> currentCount <span class="token operator">+</span> <span class="token string">&quot;件，无法购买&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 计算剩余库存</span>
        <span class="token class-name">Integer</span> leftCount <span class="token operator">=</span> currentCount <span class="token operator">-</span> purchaseProductNum<span class="token punctuation">;</span>
        <span class="token comment">// 更新库存</span>
        product<span class="token punctuation">.</span><span class="token function">setCount</span><span class="token punctuation">(</span>leftCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
        product<span class="token punctuation">.</span><span class="token function">setGmtModified</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 更新库存数量</span>
<span class="token comment">//        productMapper.updateByPrimaryKeySelective(product);</span>
        <span class="token constant">PRODUCT_COUNT</span> <span class="token operator">=</span> product<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">OrderInfo</span> order <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrderInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ... 省略 Set</span>
<span class="token comment">//        orderMapper.insertSelective(order);</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;当前用户&quot;</span> <span class="token operator">+</span> userId <span class="token operator">+</span> <span class="token string">&quot;成功创建商品&quot;</span> <span class="token operator">+</span> purchaseProductId <span class="token operator">+</span> <span class="token string">&quot;的订单&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">OrderProduct</span> orderItem <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrderProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        orderItem<span class="token punctuation">.</span><span class="token function">setOrderId</span><span class="token punctuation">(</span>order<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ... 省略 Set</span>
        <span class="token keyword">return</span> order<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他分布式锁应用" tabindex="-1"><a class="header-anchor" href="#其他分布式锁应用" aria-hidden="true">#</a> 其他分布式锁应用</h2>`,10),o=[p];function c(l,u){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","电商超卖问题解决.html.vue"]]);export{d as default};
