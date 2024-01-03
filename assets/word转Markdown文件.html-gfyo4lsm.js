import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as d,e as n}from"./app-AT5MTRLB.js";const i="/assets/验证pandoc-wTBdvl6r.jpg",r={},s=n('<h2 id="pandoc" tabindex="-1"><a class="header-anchor" href="#pandoc" aria-hidden="true">#</a> pandoc</h2><h3 id="安装配置pandoc" tabindex="-1"><a class="header-anchor" href="#安装配置pandoc" aria-hidden="true">#</a> 安装配置pandoc</h3><p>下载安装pandoc</p><p>配置pandoc路径到Path</p><h3 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h3><p>pandoc --version</p><figure><img src="'+i+`" alt="验证pandoc" tabindex="0" loading="lazy"><figcaption>验证pandoc</figcaption></figure><h3 id="执行转换" tabindex="-1"><a class="header-anchor" href="#执行转换" aria-hidden="true">#</a> 执行转换</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 在需要生成的目录执行此命令会方便些，test.docx原文件地址，test.md生成的文件
# 如果目录中有空格，目录使用双引号包起来
# docx没有图片的情况如下
pandoc test.docx -o test.md
 
# docx如果存在图片，需要将图片保存到media目录下面如下：
pandoc test.docx --extract-media=. -o test.md

# 需要根据实际情况调整格式，一般需要调整的内容如下：
- 标题，不支持一级标题，一级标题批量改为二级标题，# -&gt; ##，那么原有的二级标题就会变成 ####，需要替换为 ### ，变为三级标题，原本的三级标题变为######后又被替换变为#####，需要替换为 #### ，变为四级标题
- mark标记，需要将右边错误的mark标记 ]{.mark} 批量改为正确的，然后左右对应的[一个个改为&lt;mark&gt;
- 图片文件名和说明修改，路径修改
- 单行文本换行问题，返回键+空格键
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="typora" tabindex="-1"><a class="header-anchor" href="#typora" aria-hidden="true">#</a> Typora</h2><p>从word文档中复制进来，需要调整内容如下：</p><ol><li>格式、加粗、高亮</li><li>图片位置、图片说明（重命名 /移动文件到...）</li></ol>`,12),c=[s];function t(o,l){return e(),d("div",null,c)}const m=a(r,[["render",t],["__file","word转Markdown文件.html.vue"]]);export{m as default};
