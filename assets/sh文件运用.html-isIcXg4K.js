import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,d as e}from"./app-AuAuVshg.js";const i={},t=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> src/.vuepress/dist
<span class="token function">git</span> init
<span class="token function">git</span> branch <span class="token parameter variable">-m</span> master main
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;deploy&#39;</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> https://github.com/tufujie/tufujie.github.io.git main

<span class="token comment">#  使用read命令达到类似bat中的pause命令效果</span>
<span class="token builtin class-name">echo</span> 按任意键继续
<span class="token builtin class-name">read</span> <span class="token parameter variable">-n</span> <span class="token number">1</span>
<span class="token builtin class-name">echo</span> 继续运行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[t];function c(r,p){return n(),a("div",null,l)}const m=s(i,[["render",c],["__file","sh文件运用.html.vue"]]);export{m as default};
