import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as n,e}from"./app-AT5MTRLB.js";const t={},o=e(`<p>Arthas 是一款线上监控诊断产品，通过全局视角实时查看应用 load、内存、gc、线程的状态信息，并能在不修改应用代码的情况下，对业务问题进行诊断，包括<mark>查看方法调用的出入参、异常，监测方法执行耗时</mark>，类加载信息等，大大提升线上问题排查效率。</p><h2 id="耗时分析" tabindex="-1"><a class="header-anchor" href="#耗时分析" aria-hidden="true">#</a> 耗时分析</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code># 下载执行arthas
curl <span class="token operator">-</span><span class="token class-name">O</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>arthas<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>arthas<span class="token operator">-</span>boot<span class="token punctuation">.</span>jar
java <span class="token operator">-</span>jar arthas<span class="token operator">-</span>boot<span class="token punctuation">.</span>jar
# 展示当前进程的信息
dashboard
    
# 通过watch命令来查看<span class="token class-name"><span class="token namespace">demo<span class="token punctuation">.</span></span>MathGame</span>#primeFactors函数的返回值：
watch <span class="token class-name"><span class="token namespace">demo<span class="token punctuation">.</span></span>MathGame</span> primeFactors returnObj

# 执行分析，tract <span class="token class-name">Class</span> method &#39;#cost<span class="token operator">&gt;</span><span class="token operator">?</span>&#39;，<span class="token operator">?</span>代表毫秒
trace <span class="token class-name"><span class="token namespace">demo<span class="token punctuation">.</span></span>MathGame</span> primeFactors &#39;#cost<span class="token operator">&gt;</span><span class="token number">200</span>&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=[o];function c(r,l){return s(),n("div",null,p)}const m=a(t,[["render",c],["__file","Arthas.html.vue"]]);export{m as default};
