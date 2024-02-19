const e=JSON.parse('{"key":"v-f95d497a","path":"/home/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E4%BC%AA%E4%BB%A3%E7%A0%81.html","title":"设计模式伪代码","lang":"zh-CN","frontmatter":{"title":"设计模式伪代码","description":"I代表接口，C代码类，A代表抽象类，F代表工厂 创建型 1、单例（常用） private volatile static Object obj; private Object() { } private synchronized static Object getSingleton() { if (obj = null) { obj = new Object(); } return obj; }","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/home/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E4%BC%AA%E4%BB%A3%E7%A0%81.html"}],["meta",{"property":"og:site_name","content":"Jef Blog"}],["meta",{"property":"og:title","content":"设计模式伪代码"}],["meta",{"property":"og:description","content":"I代表接口，C代码类，A代表抽象类，F代表工厂 创建型 1、单例（常用） private volatile static Object obj; private Object() { } private synchronized static Object getSingleton() { if (obj = null) { obj = new Object(); } return obj; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-28T02:46:35.000Z"}],["meta",{"property":"article:author","content":"Jef"}],["meta",{"property":"article:modified_time","content":"2023-12-28T02:46:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式伪代码\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-28T02:46:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jef\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"创建型","slug":"创建型","link":"#创建型","children":[{"level":3,"title":"1、单例（常用）","slug":"_1、单例-常用","link":"#_1、单例-常用","children":[]},{"level":3,"title":"简单工厂","slug":"简单工厂","link":"#简单工厂","children":[]},{"level":3,"title":"2、工厂方法(常用)","slug":"_2、工厂方法-常用","link":"#_2、工厂方法-常用","children":[]},{"level":3,"title":"3、抽象工厂","slug":"_3、抽象工厂","link":"#_3、抽象工厂","children":[]},{"level":3,"title":"4、建造者","slug":"_4、建造者","link":"#_4、建造者","children":[]},{"level":3,"title":"5、原型","slug":"_5、原型","link":"#_5、原型","children":[]}]},{"level":2,"title":"结构型","slug":"结构型","link":"#结构型","children":[{"level":3,"title":"1、适配器（常用）","slug":"_1、适配器-常用","link":"#_1、适配器-常用","children":[]},{"level":3,"title":"2、装饰器（常用）","slug":"_2、装饰器-常用","link":"#_2、装饰器-常用","children":[]},{"level":3,"title":"3、代理","slug":"_3、代理","link":"#_3、代理","children":[]},{"level":3,"title":"4、外观","slug":"_4、外观","link":"#_4、外观","children":[]},{"level":3,"title":"5、桥接","slug":"_5、桥接","link":"#_5、桥接","children":[]},{"level":3,"title":"6、组合","slug":"_6、组合","link":"#_6、组合","children":[]},{"level":3,"title":"7、享元","slug":"_7、享元","link":"#_7、享元","children":[]}]},{"level":2,"title":"行为型","slug":"行为型","link":"#行为型","children":[{"level":3,"title":"1、策略","slug":"_1、策略","link":"#_1、策略","children":[]},{"level":3,"title":"2、模板方法（常用）","slug":"_2、模板方法-常用","link":"#_2、模板方法-常用","children":[]},{"level":3,"title":"3、观察者","slug":"_3、观察者","link":"#_3、观察者","children":[]},{"level":3,"title":"4、迭代器（常用）","slug":"_4、迭代器-常用","link":"#_4、迭代器-常用","children":[]},{"level":3,"title":"5、责任链","slug":"_5、责任链","link":"#_5、责任链","children":[]},{"level":3,"title":"6、命令","slug":"_6、命令","link":"#_6、命令","children":[]},{"level":3,"title":"7、备忘录","slug":"_7、备忘录","link":"#_7、备忘录","children":[]},{"level":3,"title":"8、状态","slug":"_8、状态","link":"#_8、状态","children":[]},{"level":3,"title":"9、访问者","slug":"_9、访问者","link":"#_9、访问者","children":[]},{"level":3,"title":"10、中介者","slug":"_10、中介者","link":"#_10、中介者","children":[]},{"level":3,"title":"11、解释器","slug":"_11、解释器","link":"#_11、解释器","children":[]}]}],"git":{"createdTime":1702048727000,"updatedTime":1703731595000,"contributors":[{"name":"tufujie","email":"tufj@hua-cloud.com.cn","commits":2},{"name":"tufujie","email":"jef.tu@foxmail.com","commits":1}]},"readingTime":{"minutes":5.99,"words":1796},"filePathRelative":"home/设计模式/设计模式伪代码.md","localizedDate":"2023年12月8日","excerpt":"<p>I代表接口，C代码类，A代表抽象类，F代表工厂</p>\\n<h2> <strong>创建型</strong></h2>\\n<h3> <strong>1、单例</strong>（常用）</h3>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">volatile</span> <span class=\\"token keyword\\">static</span> <span class=\\"token class-name\\">Object</span> obj<span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">private</span> <span class=\\"token class-name\\">Object</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    \\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">synchronized</span> <span class=\\"token keyword\\">static</span> <span class=\\"token class-name\\">Object</span> <span class=\\"token function\\">getSingleton</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n     <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>obj <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        obj <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Object</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n     <span class=\\"token punctuation\\">}</span>\\n     <span class=\\"token keyword\\">return</span> obj<span class=\\"token punctuation\\">;</span> \\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
