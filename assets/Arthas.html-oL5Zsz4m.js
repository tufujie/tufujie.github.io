import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as d,d as t}from"./app-AuAuVshg.js";const r={},s=t(`<p>Arthas，官网https://arthas.aliyun.com，是一款线上监控诊断产品，通过全局视角实时查看应用 load、内存、gc、线程的状态信息，并能在不修改应用代码的情况下，对业务问题进行诊断，包括<mark>查看方法调用的出入参、异常，监测方法执行耗时</mark>，类加载信息等，大大提升线上问题排查效率。</p><h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -O https://arthas.aliyun.com/arthas-boot.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java -jar arthas-boot.jar
# 然后选择一个数字选项
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="退出" tabindex="-1"><a class="header-anchor" href="#退出" aria-hidden="true">#</a> 退出</h2><p>如果只是退出当前的连接，可以用 <code>quit</code> 或者 <code>exit</code> 命令。Attach 到目标进程上的 arthas 还会继续运行，端口会保持开放，下次连接时可以直接连接上。</p><p>如果想完全退出 arthas，可以执行 <code>stop</code> 命令。</p><h2 id="命令列表" tabindex="-1"><a class="header-anchor" href="#命令列表" aria-hidden="true">#</a> 命令列表</h2><h3 id="class-classloader-相关" tabindex="-1"><a class="header-anchor" href="#class-classloader-相关" aria-hidden="true">#</a> class/classloader 相关</h3><h4 id="查看文件属性" tabindex="-1"><a class="header-anchor" href="#查看文件属性" aria-hidden="true">#</a> 查看文件属性</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sc -d -f com.jef.entity.User
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="jad" tabindex="-1"><a class="header-anchor" href="#jad" aria-hidden="true">#</a> jad</h4><p>jad（Java Decompiler），<strong>反编译指定已加载类的源码</strong>，通过<strong>code-source</strong>可以查看到类所属jar和版本，<strong>判断代码是否是最新的代码</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jad com.jef.entity.User
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="monitor-watch-trace-相关" tabindex="-1"><a class="header-anchor" href="#monitor-watch-trace-相关" aria-hidden="true">#</a> monitor/watch/trace 相关</h3><h4 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> watch</h4><p><strong>方法执行数据观测</strong>，通过watch命令来查看返回值</p><p>JSON格式查看</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>options json-format true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>观察表达式，<strong>默认值</strong>是<code>{params, target, returnObj}</code> 。观察函数<strong>调用时的参数</strong>、<strong>this 对象</strong>和<strong>返回值</strong>。如果只看输入输出报文，<code>{params,returnObj}</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>watch com.jef.entity getName
# 结合 grep 进行使用
watch com.jef.entity getName | grep &#39;某个关键字&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="trace" tabindex="-1"><a class="header-anchor" href="#trace" aria-hidden="true">#</a> trace</h4><p>方法内部调用路径，并输出方法路径上的每个节点上<strong>耗时</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 执行分析，tract Class method &#39;#cost&gt;?&#39;，?代表毫秒
trace com.jef.entity getName &#39;#cost&gt;200&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jvm-相关" tabindex="-1"><a class="header-anchor" href="#jvm-相关" aria-hidden="true">#</a> jvm 相关</h3><h4 id="查看-dashboard" tabindex="-1"><a class="header-anchor" href="#查看-dashboard" aria-hidden="true">#</a> 查看 dashboard</h4><p>展示当前进程的信息，按<code>Ctrl + C</code>可以中断执行，可以执行其它命令了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dashboard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,29),n=[s];function i(c,o){return a(),d("div",null,n)}const u=e(r,[["render",i],["__file","Arthas.html.vue"]]);export{u as default};