import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as t}from"./app-AuAuVshg.js";const p={},e=t(`<p>I代表接口，C代码类，A代表抽象类，F代表工厂</p><h2 id="创建型" tabindex="-1"><a class="header-anchor" href="#创建型" aria-hidden="true">#</a> <strong>创建型</strong></h2><h3 id="_1、单例-常用" tabindex="-1"><a class="header-anchor" href="#_1、单例-常用" aria-hidden="true">#</a> <strong>1、单例</strong>（常用）</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> obj<span class="token punctuation">;</span>

<span class="token keyword">private</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token keyword">synchronized</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">getSingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
     <span class="token keyword">return</span> obj<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简单工厂" tabindex="-1"><a class="header-anchor" href="#简单工厂" aria-hidden="true">#</a> <strong>简单工厂</strong></h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">I</span> <span class="token constant">I1I</span> <span class="token constant">I1</span>
<span class="token class-name">C</span> <span class="token constant">C1</span> <span class="token keyword">implements</span> <span class="token class-name">I1</span>
<span class="token class-name">C</span> <span class="token constant">C2</span> <span class="token keyword">implements</span> <span class="token class-name">I1</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token class-name">F</span> <span class="token class-name">Factory</span> <span class="token keyword">return</span> <span class="token constant">C1</span> <span class="token constant">C2</span>

<span class="token comment">// Client</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、工厂方法-常用" tabindex="-1"><a class="header-anchor" href="#_2、工厂方法-常用" aria-hidden="true">#</a> <strong>2、工厂方法</strong>(常用)</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">I</span> <span class="token constant">I1</span>
<span class="token class-name">C</span> <span class="token constant">C1</span> <span class="token keyword">implements</span> <span class="token class-name">I1</span>
<span class="token class-name">C</span> <span class="token constant">C2</span> <span class="token keyword">implements</span> <span class="token class-name">I1</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token comment">// 有公共的逻辑，然后进行封装</span>
<span class="token class-name">I</span> or <span class="token class-name">A</span> <span class="token constant">A1</span><span class="token operator">:</span> use <span class="token keyword">abstract</span> <span class="token function">factoryMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">to</span> <span class="token namespace">create</span> <span class="token constant">I1</span> <span class="token class-name">Object</span> and <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token constant">I1</span> <span class="token class-name">Object</span> <span class="token operator">=</span> <span class="token function">factoryMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token class-name">F</span> <span class="token class-name">Factory1</span> <span class="token keyword">extends</span> <span class="token class-name">A1</span><span class="token operator">:</span> create <span class="token constant">C1</span> <span class="token class-name">Object</span>
<span class="token class-name">F</span> <span class="token class-name">Factory2</span> <span class="token keyword">extends</span> <span class="token class-name">A1</span><span class="token operator">:</span> create <span class="token constant">C2</span> <span class="token class-name">Object</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token comment">// Client</span>
<span class="token keyword">new</span> <span class="token class-name">Factory1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、抽象工厂" tabindex="-1"><a class="header-anchor" href="#_3、抽象工厂" aria-hidden="true">#</a> <strong>3、抽象工厂</strong></h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 产品</span>
<span class="token class-name">I</span> <span class="token constant">I1</span>
<span class="token class-name">I</span> <span class="token constant">I2</span>
<span class="token comment">// 每种产品有多个型号，例如：C1，C2</span>
<span class="token class-name">C</span> <span class="token constant">C1</span> <span class="token keyword">implements</span> <span class="token class-name">I1</span>
<span class="token class-name">C</span> <span class="token constant">C2</span> <span class="token keyword">implements</span> <span class="token class-name">I1</span>
<span class="token class-name">C</span> <span class="token constant">C3</span> <span class="token keyword">implements</span> <span class="token class-name">I2</span>
<span class="token class-name">C</span> <span class="token constant">C4</span> <span class="token keyword">implements</span> <span class="token class-name">I2</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token class-name">I</span> or <span class="token class-name">A</span> <span class="token constant">A1</span><span class="token operator">:</span> use <span class="token function">createProduct1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">to</span> <span class="token namespace">create</span> <span class="token constant">I1</span> <span class="token class-name">Object</span> and <span class="token function">createProduct1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">to</span> <span class="token namespace">create</span> <span class="token constant">I2</span> <span class="token class-name">Object</span>
<span class="token comment">// 每个工厂可以生产I1，I2两种产品</span>
<span class="token class-name">F</span> <span class="token class-name">Factory1</span> <span class="token keyword">extends</span> <span class="token class-name">A1</span><span class="token operator">:</span> create <span class="token constant">C1</span> <span class="token class-name">Object</span> and <span class="token constant">C2</span> <span class="token class-name">Object</span>
<span class="token class-name">F</span> <span class="token class-name">Factory2</span> <span class="token keyword">extends</span> <span class="token class-name">A1</span><span class="token operator">:</span> create <span class="token constant">C4</span> <span class="token class-name">Object</span> and <span class="token constant">C4</span> <span class="token class-name">Object</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token comment">// Client</span>
<span class="token class-name">A1</span> a1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Factory1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">C1</span> c1 <span class="token operator">=</span> a1<span class="token punctuation">.</span><span class="token function">createProduct1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、建造者" tabindex="-1"><a class="header-anchor" href="#_4、建造者" aria-hidden="true">#</a> <strong>4、建造者</strong></h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 产品</span>
<span class="token class-name">I</span> <span class="token constant">I1</span>
<span class="token class-name">C</span> <span class="token constant">C1</span> <span class="token keyword">implements</span> <span class="token class-name">I1</span>
<span class="token class-name">C</span> <span class="token constant">C2</span> <span class="token keyword">implements</span> <span class="token class-name">I1</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token comment">// 进行组合，有几种产品就要有几个接口，核心为appendXxx</span>
<span class="token class-name">I</span> <span class="token class-name">Menu</span> <span class="token function">appendC1</span><span class="token punctuation">(</span><span class="token class-name">I1</span> i1<span class="token punctuation">)</span> <span class="token function">appendC2</span><span class="token punctuation">(</span><span class="token class-name">I1</span> i1<span class="token punctuation">)</span>
<span class="token class-name">C</span> <span class="token class-name">PackageMenu</span> <span class="token keyword">implements</span> <span class="token class-name">Menu</span>

<span class="token comment">// 创建版本</span>
<span class="token class-name">Builder</span> <span class="token function">getLevelOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token function">getLevelTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token class-name">Client</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、原型" tabindex="-1"><a class="header-anchor" href="#_5、原型" aria-hidden="true">#</a> <strong>5、原型</strong></h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">A</span> <span class="token class-name">A1</span> <span class="token function">myClone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token constant">A1</span>
<span class="token class-name">C</span> <span class="token constant">C1</span> <span class="token keyword">extends</span> <span class="token class-name">A1</span> <span class="token annotation punctuation">@Override</span> <span class="token function">myClone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token constant">C1</span> <span class="token annotation punctuation">@Override</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token class-name">Client</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构型" tabindex="-1"><a class="header-anchor" href="#结构型" aria-hidden="true">#</a> <strong>结构型</strong></h2><h3 id="_1、适配器-常用" tabindex="-1"><a class="header-anchor" href="#_1、适配器-常用" aria-hidden="true">#</a> <strong>1、适配器</strong>（常用）</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">A</span> exchange <span class="token keyword">to</span> <span class="token class-name">B</span> 
<span class="token class-name">Client</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、装饰器-常用" tabindex="-1"><a class="header-anchor" href="#_2、装饰器-常用" aria-hidden="true">#</a> <strong>2、装饰器</strong>（常用）</h3><p>不改变原有的核心逻辑，进行逻辑的补充</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// Server</span>
<span class="token class-name">I</span> <span class="token class-name">I1</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token class-name">C</span> <span class="token constant">C1</span> <span class="token keyword">implements</span> <span class="token class-name">I1</span>

<span class="token comment">// 核心逻辑，需要申明为抽象类，避免实例化</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">A1</span> <span class="token keyword">implements</span> <span class="token class-name">I1</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">I</span> i1<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token class-name">I</span> i1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>i1 <span class="token operator">=</span> i1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> i1<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token comment">// 在核心逻辑的基础上拓展功能</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">A2</span> <span class="token keyword">extends</span> <span class="token class-name">A1</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token function">A2</span><span class="token punctuation">(</span><span class="token class-name">I1</span> i1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>i1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      	<span class="token comment">// 拓展功能</span>
        <span class="token function">doOtherSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Client</span>
<span class="token class-name">A2</span> a2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A2</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">C1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a2<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、代理" tabindex="-1"><a class="header-anchor" href="#_3、代理" aria-hidden="true">#</a> <strong>3、代理</strong></h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">I</span> <span class="token class-name">I1</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token class-name">C</span> <span class="token constant">C1</span> <span class="token keyword">implements</span> <span class="token class-name">I1</span>
<span class="token class-name">C</span> <span class="token constant">C2</span> <span class="token keyword">implements</span> <span class="token class-name">I1</span>
    
<span class="token comment">// 代理类</span>
<span class="token class-name">C</span> <span class="token class-name">C2Porxy</span> <span class="token keyword">implements</span> <span class="token class-name">I1</span> <span class="token punctuation">{</span>
    <span class="token class-name">C1</span> c1<span class="token punctuation">;</span>
    <span class="token class-name">C2</span> c2<span class="token punctuation">;</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token function">doSomehing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>c1 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            c1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">C1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        c1<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
        
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、外观" tabindex="-1"><a class="header-anchor" href="#_4、外观" aria-hidden="true">#</a> <strong>4、外观</strong></h3><p>提供了一个统一的接口，用来访问子系统中的一群接口，从而让子系统更容易使用。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">C</span> <span class="token constant">C1</span> <span class="token punctuation">{</span>
    <span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">C</span> <span class="token class-name">Facade</span> <span class="token punctuation">{</span>
    <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token constant">C1</span><span class="token punctuation">.</span><span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token constant">C2</span><span class="token punctuation">.</span><span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Client</span>
<span class="token class-name">Facade</span><span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、桥接" tabindex="-1"><a class="header-anchor" href="#_5、桥接" aria-hidden="true">#</a> <strong>5、桥接</strong></h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 各种种类和其他种类有关联，支付渠道（微信、支付宝）、模式（密码、指纹、人脸）</span>
<span class="token class-name">A</span> <span class="token class-name">Pay</span> <span class="token class-name">IPayMode</span> payMode <span class="token function">transfer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token class-name">Pay</span><span class="token punctuation">(</span><span class="token class-name">IPayMode</span> payMode<span class="token punctuation">)</span>
<span class="token class-name">C</span> <span class="token class-name">ZfbPay</span> <span class="token keyword">extends</span> <span class="token class-name">Pay</span> <span class="token annotation punctuation">@Override</span> <span class="token function">transfer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>payMode<span class="token punctuation">.</span><span class="token function">security</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token class-name">C</span> <span class="token class-name">WxPay</span> <span class="token keyword">extends</span> <span class="token class-name">Pay</span> <span class="token annotation punctuation">@Override</span> <span class="token function">transfer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>payMode<span class="token punctuation">.</span><span class="token function">security</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>

<span class="token class-name">I</span> <span class="token class-name">IPayMode</span> security
<span class="token class-name">C</span> <span class="token class-name">PayFaceMode</span> <span class="token keyword">implements</span> <span class="token class-name">IPayMode</span>
<span class="token class-name">C</span> <span class="token class-name">PayFingerprintMode</span> <span class="token keyword">implements</span> <span class="token class-name">IPayMode</span> 
<span class="token class-name">C</span> <span class="token class-name">PayPwdMode</span> <span class="token keyword">implements</span> <span class="token class-name">IPayMode</span> 
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token class-name">Client</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、组合" tabindex="-1"><a class="header-anchor" href="#_6、组合" aria-hidden="true">#</a> <strong>6、组合</strong></h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 决策</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_7、享元" tabindex="-1"><a class="header-anchor" href="#_7、享元" aria-hidden="true">#</a> <strong>7、享元</strong></h3><h2 id="行为型" tabindex="-1"><a class="header-anchor" href="#行为型" aria-hidden="true">#</a> <strong>行为型</strong></h2><h3 id="_1、策略" tabindex="-1"><a class="header-anchor" href="#_1、策略" aria-hidden="true">#</a> <strong>1、策略</strong></h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// Server</span>
<span class="token class-name">IStrategy</span> <span class="token punctuation">{</span>
    <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">StrategyImpl1</span> <span class="token keyword">implements</span> <span class="token class-name">IStrategy</span> <span class="token punctuation">{</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;doSomething&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name">StrategyImpl2</span> <span class="token keyword">implements</span> <span class="token class-name">IStrategy</span> <span class="token punctuation">{</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;doSomething&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 策略上下文，一般都是通过构造器或者是setter方法进行策略设置</span>
<span class="token class-name">Context</span> <span class="token punctuation">{</span>
    <span class="token class-name">IStrategy</span> strategy<span class="token punctuation">;</span>
    
    <span class="token class-name">Context</span><span class="token punctuation">(</span><span class="token class-name">IStrategy</span> strategy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>strategy <span class="token operator">=</span> strategy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        strategy<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// Client</span>
<span class="token class-name">IStrategy</span> strategy <span class="token operator">=</span> <span class="token function">getStrategy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token class-name">Context</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Context</span><span class="token punctuation">(</span>strategy<span class="token punctuation">)</span><span class="token punctuation">;</span> 
context<span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、模板方法-常用" tabindex="-1"><a class="header-anchor" href="#_2、模板方法-常用" aria-hidden="true">#</a> <strong>2、模板方法</strong>（常用）</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">A</span> <span class="token constant">A1</span> handler<span class="token punctuation">{</span><span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token class-name">C</span> <span class="token constant">C1</span> <span class="token keyword">extends</span> <span class="token class-name">A1</span>
<span class="token class-name">C</span> <span class="token constant">C2</span> <span class="token keyword">extends</span> <span class="token class-name">A1</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token class-name">Client</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、观察者" tabindex="-1"><a class="header-anchor" href="#_3、观察者" aria-hidden="true">#</a> <strong>3、观察者</strong></h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// Server</span>
<span class="token class-name">IEvenListener</span> <span class="token punctuation">{</span>
    <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">EvenListenerImpl1</span> <span class="token keyword">implements</span> <span class="token class-name">IEevenListener</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name">EvenListenerImpl2</span> <span class="token keyword">implements</span> <span class="token class-name">IEevenListener</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">EvenListenerHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">IEvenListener</span><span class="token punctuation">&gt;</span></span> evenListenerList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">IEvenListener</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token function">addListener</span><span class="token punctuation">(</span><span class="token class-name">IEvenListener</span> evenListener<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        evenListenerList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>evenListener<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
     <span class="token function">removeListener</span><span class="token punctuation">(</span><span class="token class-name">IEvenListener</span> evenListener<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        evenListenerList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>evenListener<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">notify</span><span class="token punctuation">(</span><span class="token class-name">Result</span> result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">IEvenListener</span><span class="token punctuation">&gt;</span></span> users <span class="token operator">=</span> evenListenerList<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">IEvenListener</span> listener <span class="token operator">:</span> users<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            listener<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Client</span>
<span class="token class-name">EvenListenerHandler</span> handler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EvenListenerHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
handler<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">EvenListenerImpl1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
handler<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">EvenListenerImpl2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
handler<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Result</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、迭代器-常用" tabindex="-1"><a class="header-anchor" href="#_4、迭代器-常用" aria-hidden="true">#</a> <strong>4、迭代器</strong>（常用）</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Iterator</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5、责任链" tabindex="-1"><a class="header-anchor" href="#_5、责任链" aria-hidden="true">#</a> <strong>5、责任链</strong></h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">A</span> <span class="token constant">A1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">A</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token keyword">return</span> next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">A</span> <span class="token function">appendNext</span><span class="token punctuation">(</span><span class="token class-name">A</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">abstract</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">void</span> <span class="token function">commonMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;doSomething&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Link</span> next <span class="token operator">=</span> link<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 最后一个节点</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;finished&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        next<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 首个节点</span>
<span class="token class-name">C</span> <span class="token constant">C1</span> <span class="token punctuation">{</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token function">commonMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 最后一个节点，没有后续节点</span>
<span class="token class-name">C</span> <span class="token constant">C2</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token function">commonMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>



<span class="token comment">// Client</span>
<span class="token comment">// A1 a1 = new C1().appendNext(new C2());</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span>A1<span class="token punctuation">&gt;</span></span> linkList <span class="token operator">=</span> <span class="token class-name">Lists</span><span class="token punctuation">.</span><span class="token function">newArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token constant">C1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token constant">C2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> linkList<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    linkList<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">appendNext</span><span class="token punctuation">(</span>linkList<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">A1</span> link <span class="token operator">=</span> linkList<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
link<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、命令" tabindex="-1"><a class="header-anchor" href="#_6、命令" aria-hidden="true">#</a> <strong>6、命令</strong></h3><p>经典例子：小二点1到多个菜，然后下单，对应菜系厨师进行烹饪</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 菜系</span>
<span class="token class-name">I</span> <span class="token class-name">ICussine</span> <span class="token function">cook</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token class-name">C</span> <span class="token class-name">GudongCussine</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">ICook</span> cook<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">SiChuanCussine</span><span class="token punctuation">(</span><span class="token class-name">ICook</span> cook<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cook <span class="token operator">=</span> cook<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">cook</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cook<span class="token punctuation">.</span><span class="token function">doCooking</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token class-name">C</span> <span class="token class-name">SichuanCussine</span>

<span class="token comment">// 区域厨师</span>
<span class="token class-name">I</span> <span class="token class-name">ICook</span> <span class="token function">doCooking</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token class-name">C</span> <span class="token class-name">GudongCook</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doCooking</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;广东厨师，烹饪广东菜&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token class-name">C</span> <span class="token class-name">SichuanCook</span>
    
<span class="token class-name">C</span> <span class="token class-name">XiaoEr</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ICussine</span><span class="token punctuation">&gt;</span></span> cussineList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ICussine</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 命令：点单菜品
     *
     * <span class="token keyword">@param</span> <span class="token parameter">cussine</span> 菜品vo
     * <span class="token keyword">@author</span> Jef
     * <span class="token keyword">@date</span> 2021/12/11
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">order</span><span class="token punctuation">(</span><span class="token class-name">ICussine</span> cussine<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cussineList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cussine<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 命令：下单菜品
     *
     * <span class="token keyword">@author</span> Jef
     * <span class="token keyword">@date</span> 2021/12/11
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">placeOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">ICussine</span> cussine <span class="token operator">:</span> cussineList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cussine<span class="token punctuation">.</span><span class="token function">cook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        cussineList<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
    
<span class="token comment">// Client</span>
<span class="token class-name">XiaoEr</span> xiaoEr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XiaoEr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xiaoEr<span class="token punctuation">.</span><span class="token function">order</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GuangDongCuisine</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GuangDongCook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xiaoEr<span class="token punctuation">.</span><span class="token function">order</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SiChuanCussine</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SiChuanCook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xiaoEr<span class="token punctuation">.</span><span class="token function">placeOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7、备忘录" tabindex="-1"><a class="header-anchor" href="#_7、备忘录" aria-hidden="true">#</a> <strong>7、备忘录</strong></h3><p>在不违反封装的情况下获得对象的内部状态，从而在需要时可以将对象恢复到最初状态。</p><h3 id="_8、状态" tabindex="-1"><a class="header-anchor" href="#_8、状态" aria-hidden="true">#</a> <strong>8、状态</strong></h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">A</span> <span class="token class-name">State</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token function">doOtherSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token class-name">C</span> <span class="token class-name">StateOne</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;可以做&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token function">doOtherSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;可以做&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token class-name">C</span> <span class="token class-name">StateTwo</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;可以做&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token function">doOtherSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;不可以做&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9、访问者" tabindex="-1"><a class="header-anchor" href="#_9、访问者" aria-hidden="true">#</a> <strong>9、访问者</strong></h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 有几个访问者就要有几个接口</span>
<span class="token class-name">I</span> <span class="token class-name">Vistor</span> <span class="token function">visit</span><span class="token punctuation">(</span><span class="token class-name">UserImpl1</span> user1<span class="token punctuation">)</span> <span class="token function">visit</span><span class="token punctuation">(</span><span class="token class-name">UserImpl2</span> user2<span class="token punctuation">)</span>
<span class="token class-name">C</span> <span class="token class-name">VistorImpl1</span><span class="token punctuation">(</span><span class="token class-name">Parent</span><span class="token punctuation">)</span> <span class="token keyword">implements</span> <span class="token class-name">Vistor</span>
<span class="token class-name">C</span> <span class="token class-name">VistorImpl2</span><span class="token punctuation">(</span><span class="token class-name">Principal</span><span class="token punctuation">)</span> <span class="token keyword">implements</span> <span class="token class-name">Vistor</span>

<span class="token class-name">A</span> <span class="token class-name">User</span> <span class="token function">accept</span><span class="token punctuation">(</span><span class="token class-name">Visitor</span> visitor<span class="token punctuation">)</span>
<span class="token class-name">C</span> <span class="token class-name">UserImpl1</span><span class="token punctuation">(</span><span class="token class-name">Teacher</span><span class="token punctuation">)</span> <span class="token keyword">extends</span> <span class="token class-name">User</span> <span class="token function">accept</span><span class="token punctuation">(</span><span class="token class-name">Visitor</span> visitor<span class="token punctuation">)</span> <span class="token punctuation">{</span>visitor<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token class-name">C</span> <span class="token class-name">UserImpl2</span><span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token punctuation">)</span> <span class="token keyword">extends</span> <span class="token class-name">User</span> <span class="token function">accept</span><span class="token punctuation">(</span><span class="token class-name">Visitor</span> visitor<span class="token punctuation">)</span> <span class="token punctuation">{</span>visitor<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>

<span class="token comment">// 不同的访问者对同一份数据，侧重点不同，例如对于校长来说看中老师所在班级的升学率，对于家长来说看中老师的教师级别</span>
<span class="token class-name">Client</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token class-name">Visitor</span> visitor<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">User</span> user <span class="token operator">:</span> userList<span class="token punctuation">)</span> <span class="token punctuation">{</span>user<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>visitor<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10、中介者" tabindex="-1"><a class="header-anchor" href="#_10、中介者" aria-hidden="true">#</a> <strong>10、中介者</strong></h3><p>集中相关对象之间复杂的沟通和控制方式。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 中介者</span>
<span class="token class-name">I</span> <span class="token class-name">Mediator</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token class-name">C</span> <span class="token class-name">MotherBoard</span> <span class="token keyword">implements</span> <span class="token class-name">Mediator</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">CdDriver</span>  cdDriver<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Cpu</span> cpu<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Video</span> video<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Sound</span> sound<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setCdDriver</span><span class="token punctuation">(</span><span class="token class-name">CdDriver</span> cdDriver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cdDriver <span class="token operator">=</span> cdDriver<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setCpu</span><span class="token punctuation">(</span><span class="token class-name">Cpu</span> cpu<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cpu <span class="token operator">=</span> cpu<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setVideo</span><span class="token punctuation">(</span><span class="token class-name">Video</span> video<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>video <span class="token operator">=</span> video<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSound</span><span class="token punctuation">(</span><span class="token class-name">Sound</span> sound<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sound <span class="token operator">=</span> sound<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">changeed</span><span class="token punctuation">(</span><span class="token class-name">BaseColleague</span> colleague<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>colleague <span class="token keyword">instanceof</span> <span class="token class-name">CdDriver</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">openCdDriverReadData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>colleague <span class="token keyword">instanceof</span> <span class="token class-name">Cpu</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">openCpuDealData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 具体的通信操作</span>
    <span class="token doc-comment comment">/**
     * 打开CD读取数据后处理数据
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">openCdDriverReadData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 先获取光驱读取的数据</span>
        <span class="token class-name">String</span> videoAndSounnd <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cdDriver<span class="token punctuation">.</span><span class="token function">getVideoAndSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 把这些数据传递给CPU进行处理</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cpu<span class="token punctuation">.</span><span class="token function">executeData</span><span class="token punctuation">(</span>videoAndSounnd<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * 打开CPU处理数据
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">openCpuDealData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 先获取CPU处理后的数据</span>
        <span class="token class-name">String</span> videoData <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cpu<span class="token punctuation">.</span><span class="token function">getVideoData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> soundData <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cpu<span class="token punctuation">.</span><span class="token function">getSoundData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 把这些数据传递给显卡和声卡显示出来</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>video<span class="token punctuation">.</span><span class="token function">showVideo</span><span class="token punctuation">(</span>videoData<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sound<span class="token punctuation">.</span><span class="token function">showSound</span><span class="token punctuation">(</span>soundData<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>



<span class="token comment">// 同事类</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">BaseColleague</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Mediator</span> mediator<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">BaseColleague</span><span class="token punctuation">(</span><span class="token class-name">Mediator</span> mediator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>mediator <span class="token operator">=</span> mediator<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Mediator</span> <span class="token function">getMediator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> mediator<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体的同事类1</span>
<span class="token class-name">CdDriver</span> <span class="token keyword">extends</span> <span class="token class-name">BaseColleague</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">readCd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setVideoAndSound</span><span class="token punctuation">(</span><span class="token string">&quot;科幻大片视频,科幻大片音频&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 通知主板，自己的状态发生了改变</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getMediator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">changeed</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>

<span class="token comment">// 具体的同事类2</span>
<span class="token class-name">Cpu</span> <span class="token keyword">extends</span> <span class="token class-name">BaseColleague</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">executeData</span><span class="token punctuation">(</span><span class="token class-name">String</span> videoAndSound<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 具体分割数据方法由数据组装方法决定</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data <span class="token operator">=</span> videoAndSound<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setVideoData</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setSoundData</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 通知主板，CPU的工作完成</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getMediator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">changeed</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token comment">// Client</span>
<span class="token comment">// 创建中介者对象</span>
<span class="token class-name">MotherBoard</span> mediator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MotherBoard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 创建各个同事类</span>
<span class="token class-name">CdDriver</span> cdDriver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CdDriver</span><span class="token punctuation">(</span>mediator<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Cpu</span> cpu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cpu</span><span class="token punctuation">(</span>mediator<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Video</span> video <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Video</span><span class="token punctuation">(</span>mediator<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Sound</span> sound <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sound</span><span class="token punctuation">(</span>mediator<span class="token punctuation">)</span><span class="token punctuation">;</span>

mediator<span class="token punctuation">.</span><span class="token function">setCdDriver</span><span class="token punctuation">(</span>cdDriver<span class="token punctuation">)</span><span class="token punctuation">;</span>
mediator<span class="token punctuation">.</span><span class="token function">setCpu</span><span class="token punctuation">(</span>cpu<span class="token punctuation">)</span><span class="token punctuation">;</span>
mediator<span class="token punctuation">.</span><span class="token function">setVideo</span><span class="token punctuation">(</span>video<span class="token punctuation">)</span><span class="token punctuation">;</span>
mediator<span class="token punctuation">.</span><span class="token function">setSound</span><span class="token punctuation">(</span>sound<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 开始读取数据</span>
cdDriver<span class="token punctuation">.</span><span class="token function">readCd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11、解释器" tabindex="-1"><a class="header-anchor" href="#_11、解释器" aria-hidden="true">#</a> <strong>11、解释器</strong></h3><p>InterpreterTest.xml</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>root</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rootId<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>c</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>testC<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>12345<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>c</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>d1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>d2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>d3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>d4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>root</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 准备上下文</span>
<span class="token class-name">Context</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Context</span><span class="token punctuation">(</span><span class="token class-name">FileGlobal<span class="token punctuation">.</span>INTERPRETER_TEST_XMl_DIR</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 想要获取 c 元素的值，也就是如下表达式的值：&quot;root/a/b/c&quot;</span>
<span class="token comment">// 首先要构建解释器的抽象语法树</span>
<span class="token class-name">ElementExpression</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ElementExpression</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ElementExpression</span> aEle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ElementExpression</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ElementExpression</span> bEle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ElementExpression</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ElementTerminalExpression</span> dEle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ElementTerminalExpression</span><span class="token punctuation">(</span><span class="token string">&quot;d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 组合起来</span>
root<span class="token punctuation">.</span><span class="token function">addEle</span><span class="token punctuation">(</span>aEle<span class="token punctuation">)</span><span class="token punctuation">;</span>
aEle<span class="token punctuation">.</span><span class="token function">addEle</span><span class="token punctuation">(</span>bEle<span class="token punctuation">)</span><span class="token punctuation">;</span>
bEle<span class="token punctuation">.</span><span class="token function">addEle</span><span class="token punctuation">(</span>dEle<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 调用</span>
<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ss <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token function">interpret</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> s <span class="token operator">:</span> ss<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;d的值是=&quot;</span> <span class="token operator">+</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,57),c=[e];function o(l,i){return s(),a("div",null,c)}const d=n(p,[["render",o],["__file","设计模式伪代码.html.vue"]]);export{d as default};
