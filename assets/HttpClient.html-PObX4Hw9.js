import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as e}from"./app-AuAuVshg.js";const t={},o=e(`<h2 id="设置环境变量" tabindex="-1"><a class="header-anchor" href="#设置环境变量" aria-hidden="true">#</a> 设置环境变量</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;local&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:8001&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="请求" tabindex="-1"><a class="header-anchor" href="#请求" aria-hidden="true">#</a> 请求</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>### POST请求
POST <span class="token punctuation">{</span><span class="token punctuation">{</span>host<span class="token punctuation">}</span><span class="token punctuation">}</span>/user/login
Content-Type<span class="token operator">:</span> application/json

<span class="token punctuation">{</span>
  <span class="token property">&quot;userName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Jef&quot;</span>
<span class="token punctuation">}</span>

### GET请求
GET <span class="token punctuation">{</span><span class="token punctuation">{</span>host<span class="token punctuation">}</span><span class="token punctuation">}</span>/user/getToken
Content-Type<span class="token operator">:</span> application/json

<span class="token punctuation">{</span>
  <span class="token property">&quot;userName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Jef&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),i=[o];function p(l,c){return s(),a("div",null,i)}const d=n(t,[["render",p],["__file","HttpClient.html.vue"]]);export{d as default};
