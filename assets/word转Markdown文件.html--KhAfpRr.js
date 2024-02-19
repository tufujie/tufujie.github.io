import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as d,d as i}from"./app-AuAuVshg.js";const n="/assets/验证pandoc-wTBdvl6r.jpg",r={},t=i('<h2 id="pandoc" tabindex="-1"><a class="header-anchor" href="#pandoc" aria-hidden="true">#</a> pandoc</h2><h3 id="安装配置pandoc" tabindex="-1"><a class="header-anchor" href="#安装配置pandoc" aria-hidden="true">#</a> 安装配置pandoc</h3><p>下载安装pandoc</p><p>配置pandoc路径到Path</p><h3 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h3><p>pandoc --version</p><figure><img src="'+n+`" alt="验证pandoc" tabindex="0" loading="lazy"><figcaption>验证pandoc</figcaption></figure><h3 id="执行转换" tabindex="-1"><a class="header-anchor" href="#执行转换" aria-hidden="true">#</a> 执行转换</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 在需要生成的目录执行此命令会方便些，test.docx原文件地址，test.md生成的文件
# 如果目录中有空格，目录使用双引号包起来
# docx没有图片的情况如下
pandoc test.docx -o test.md
 
# docx如果存在图片，需要将图片保存到media目录下面如下：
pandoc test.docx --extract-media=. -o test.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="黏贴到typora-推荐" tabindex="-1"><a class="header-anchor" href="#黏贴到typora-推荐" aria-hidden="true">#</a> 黏贴到Typora-<mark>推荐</mark></h2><ul><li>方式1：从word文档中复制到Typora中（没有很多代码的文档）</li><li>方式2：先复制到Sublime Text，然后从Sublime Text复制到Typora中（很多代码的文档）</li></ul><h2 id="typora导入" tabindex="-1"><a class="header-anchor" href="#typora导入" aria-hidden="true">#</a> Typora导入</h2><p>从Typora工具中导入word，然后做调整</p><h2 id="语雀导入导出" tabindex="-1"><a class="header-anchor" href="#语雀导入导出" aria-hidden="true">#</a> 语雀导入导出</h2><p>word先导入到语雀，然后导出为MD文件，除了一些颜色</p><h2 id="常见的调整" tabindex="-1"><a class="header-anchor" href="#常见的调整" aria-hidden="true">#</a> 常见的调整</h2><p>需要根据实际情况调整格式，一般需要调整的内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>标题，不支持一级标题，一级标题批量改为二级标题，# -&gt; ##，那么原有的二级标题就会变成 ####，需要替换为 ### ，变为三级标题，原本的三级标题变为######后又被替换变为#####，需要替换为 #### ，变为四级标题
mark标记，需要将右边错误的mark标记 ]{.mark} 批量改为正确的，然后左右对应的[一个个改为&lt;mark&gt;
图片文件名和说明修改，路径修改，长宽修改。图片位置（通过设置相对路径可以解决）、图片说明（点击图片，进行文件的描述，重命名 /移动文件到...给文件重命名，一般描述和文件名一致）
单行文本换行问题，返回键+空格键
格式、加粗*号调整、列表调整、高亮
其它按实际情况进行微调
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),s=[t];function c(o,l){return e(),d("div",null,s)}const m=a(r,[["render",c],["__file","word转Markdown文件.html.vue"]]);export{m as default};
