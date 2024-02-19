import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as i,d as s}from"./app-AuAuVshg.js";const d={},a=s(`<h2 id="build-project" tabindex="-1"><a class="header-anchor" href="#build-project" aria-hidden="true">#</a> <strong>Build Project</strong></h2><p>**构建工程，编译项目 Ctrl + B，**<strong>全局编译</strong>，快速定位错误，快速定位模块中文件错误，当不知道修改了哪一个模块时使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  Compile all modified and dependent files in the project 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="build-module" tabindex="-1"><a class="header-anchor" href="#build-module" aria-hidden="true">#</a> <strong>Build Module</strong></h2><p><strong>构建模块 Ctrl + Alt + B，局部编译</strong>，当已经清楚了哪一模块被修改时使用，鼠标单击模块文件夹或者是文件名、或者是鼠标单击某个文件内任意内容，然后按快捷键都可以针对模块进行编译</p><p><strong>最快定位错误</strong>、快速定位错误、快速定位模块中文件错误</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Compile all modified and dependent files in the module  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="recompile" tabindex="-1"><a class="header-anchor" href="#recompile" aria-hidden="true">#</a> <strong>Recompile</strong></h2><p><strong>重新编译，构建模块、文件夹或文件</strong> <strong>Ctrl + Alt + F9</strong></p><p><strong>焦点放在文件内或者鼠标点击文件后执行快捷键触发，也就是这个文件改完就可以快捷键触发编译</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   Force recompilation for selected module, file or package  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>具体表现方式如下：</strong></p><p>Build工具栏</p><p>成功标识：<strong>build finished At yyyy/MM/dd with n warnings</strong></p><p><strong>表明</strong><mark>有内容更新：</mark></p><p>编译过程如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Executing pre-compile tasks...
Running &#39;before&#39; tasks
Checking sources
# 以下部分是动态的
Copying resources... [module_one]
Copying resources... [module_two]
...
Copying resources... [module_n]
Parsing java... [module_change]
Writing classes... [module_change]
Checking dependencies... [module_change]
Dependency analysis found 0 affected files
Updating dependency information... [module_change]
Adding @NotNull assertions... [module_change]
Adding pattern assertions... [module_change]
# 以上部分是动态的
Running &#39;after&#39; tasks
javac 1.8.0_181 was used to compile java sources
Finished, saving caches...
Executing post-compile tasks...
Synchronizing output directories...
2021/1/19 23:07 - Build completed successfully with 41 warnings in 22 sec, 118 ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>表明</strong><mark>无内容更新：</mark></p><p>编译过程如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Executing pre-compile tasks...
Executing post-compile tasks...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rebuild-project" tabindex="-1"><a class="header-anchor" href="#rebuild-project" aria-hidden="true">#</a> <strong>Rebuild Project</strong></h2><p><strong>重新构建工程。重新编译项目 Ctrl + Shift + B（比较费时间，比较少用，常用于代码初始化或者是编译未生效场景）</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Recompile all files in the project
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Generate Ant Build：生成Ant构建</strong></p><p><strong>Build Artifacts：构建构件</strong></p><p><strong>Analyze APK：分析APK</strong></p><p><strong>Run Ant Target：运行Ant目标</strong></p>`,27),r=[a];function t(l,o){return n(),i("div",null,r)}const g=e(d,[["render",t],["__file","IDEA Build构建菜单.html.vue"]]);export{g as default};
