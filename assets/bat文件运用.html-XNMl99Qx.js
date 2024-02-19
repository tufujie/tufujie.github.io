import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as i,d as a}from"./app-AuAuVshg.js";const s={},d=a(`<div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>% 注释 %
D:
cd D:\\Desktop\\MyGet
编译Java文件：
javac -encoding utf-8 Main.java
运行Class文件，带args：
java Main D:\\Desktop\\MyGet

命令格式：
cmd /k &quot;cd /d 路径 &amp;&amp; 命令&quot;
start cmd /k &quot;cd /d 路径 &amp;&amp; 命令1 &amp;&amp; 命令2&quot;
...
start cmd /c &quot;java Main D:\\Desktop\\MyGet\\Java技术 &amp;&amp; java Main D:\\Desktop\\MyGet\\Java技术\\源码分析&quot;
说明：
其中代码中 /k 表示执行完命令不关闭cmd命令窗口，如果想执行完关闭，我们只需将 /k 更换为 /c 
cd /d 表示切换路径
cmd是cmd.exe的简写

如果执行的命令有多个，可以写到bat文件中，如：微服务项目，那么我们在命令开头加上 start 关键字即可执行
命令格式：
start &quot;exe或bat文件的路径&quot;
如启动qq程序：
start &quot;D:\\Program Files (x86)\\Tencent\\QQ\\Bin\\QQScLauncher.exe&quot;

停留在运行界面，提示让你输入，只有你按键后才会关闭。
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[d];function v(c,t){return e(),i("div",null,l)}const u=n(s,[["render",v],["__file","bat文件运用.html.vue"]]);export{u as default};
