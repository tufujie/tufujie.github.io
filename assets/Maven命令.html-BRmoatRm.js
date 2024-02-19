import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,d as s}from"./app-AuAuVshg.js";const i={},t=s(`<p>可以在cmd中通过一系列的maven命令来对maven工程进行生命周期管理，包括编译、测试、运行、打包、安装、部署等。</p><h2 id="clean" tabindex="-1"><a class="header-anchor" href="#clean" aria-hidden="true">#</a> <strong>clean</strong></h2><p>clean是maven工程的清理命令，执行 clean会删除target目录及内容。</p><h2 id="validate" tabindex="-1"><a class="header-anchor" href="#validate" aria-hidden="true">#</a> validate</h2><p>对工程进行基础验证，如工程结构、pom、资源文件等是否正确</p><h2 id="compile" tabindex="-1"><a class="header-anchor" href="#compile" aria-hidden="true">#</a> <strong>compile</strong></h2><p>compile是maven工程的编译命令，作用是将src/main/java下的文件编译为class文件输出到target目录下。</p><p>cmd进入命令状态，执行mvn compile，如下图提示成功：</p><div class="language-maven line-numbers-mode" data-ext="maven"><pre class="language-maven"><code>mvn compile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看 target目录，class文件已生成，编译完成。</p><h2 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> <strong>test</strong></h2><p>test是maven工程的测试命令 mvn test，会执行src/test/java下的单元测试类。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cmd执行mvn
test执行src/test/java下单元测试类。

// 全局执行测试类
mvn test

// 指定执行某个测试类，甚至精确到某个方法，改动哪个执行哪个，避免全局编译浪费时间
mvn test -Dtest=[ClassName]

运行测试类中指定的方法：(这个需要maven-surefire-plugin:2.7.3以上版本才能支持)，这种会影响单元测试覆盖率，不建议使用 
mvn test -Dtest=[ClassName]#[MethodName]

//[MethodName]为要运行的方法名，支持*通配符，范例：
mvn test -Dtest=MyClassTest#test1
mvn test -Dtest=MyClassTest#*test*

// 举例说明
mvn test -Dtest=MyClassTest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="package" tabindex="-1"><a class="header-anchor" href="#package" aria-hidden="true">#</a> <mark><strong>package</strong></mark></h2><p>package是maven工程的打包命令，对于Java工程执行package打成jar包，对于web工程打成war包。</p><h2 id="verify" tabindex="-1"><a class="header-anchor" href="#verify" aria-hidden="true">#</a> verify</h2><p>验证工程所有代码、配置进行是否正确，如类中代码的语法检测等。 经过了编译打包，可能会出错，所以再检查一遍。</p><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> <mark><strong>install</strong></mark></h2><p>install是maven工程的安装命令，执行install将maven打成jar包或war包，并且发布到本地仓库。</p><p>// 生成jar</p><p>mvn install</p><p>从运行结果中，可以看出：</p><p>当后面的命令执行时，前面的操作过程也都会自动执行。</p><p>在无法从maven仓库中直接下载jar包时，先手动下载jar包，然后执行命令添加到自己本地的maven仓库中</p><p>// 将jar加到maven仓库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mvn install:install-file -Dfile=java-component-1.0.1-SNAPSHOT.jar -DgroupId=com.jef -DartifactId=java-component -Dversion=1.0.1-SNAPSHOT -Dpackaging=jar

# -DskipTests=true，不执行测试用例，但编译测试用例类生成相应的class文件至 target/test-classes 下
mvn install -DskipTests=true

# -Dmaven.test.skip=true，不执行测试用例，也不编译测试用例类
mvn install -Dmaven.test.skip=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="site" tabindex="-1"><a class="header-anchor" href="#site" aria-hidden="true">#</a> site</h2><p>生成项目的概述、源码测试覆盖率、开发者列表等站点文档（需要额外配置）</p><h2 id="deploy" tabindex="-1"><a class="header-anchor" href="#deploy" aria-hidden="true">#</a> <mark><strong>deploy</strong></mark></h2><p>deploy命令是将相应的模块发布到你配置的仓库位置，提供给别的项目使用</p><p>一般配置如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;repository&gt;
&lt;id&gt;nexus&lt;/id&gt;
&lt;name&gt;nexus&lt;/name&gt;
&lt;url&gt;http://maven.xxx.com/content/groups/public/&lt;/url&gt;
&lt;releases&gt;
&lt;enabled&gt;true&lt;/enabled&gt;
&lt;/releases&gt;
&lt;snapshots&gt;
&lt;enabled&gt;true&lt;/enabled&gt;
&lt;/snapshots&gt;
&lt;/repository&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),l=[t];function d(r,v){return a(),n("div",null,l)}const u=e(i,[["render",d],["__file","Maven命令.html.vue"]]);export{u as default};
