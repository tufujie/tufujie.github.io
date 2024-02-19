const e=JSON.parse('{"key":"v-c6661330","path":"/home/%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1/Web%20%E5%AE%9E%E6%97%B6%E6%B6%88%E6%81%AF%E6%8E%A8%E9%80%81%E8%AF%A6%E8%A7%A3.html","title":"Web 实时消息推送详解","lang":"zh-CN","frontmatter":{"title":"Web 实时消息推送详解","description":"现在要实现一个站内信 Web 消息推送的功能，对，就是下图这个小红点，一个很常用的功能。 ![站内信 Web 消息推送](.\\\\media\\\\站内信 Web 消息推送.jpg) 不过他还没想好用什么方式做，这里我帮他整理了一下几种方案，并简单做了实现。 什么是消息推送？ 推送的场景比较多，比如有人关注我的公众号，这时我就会收到一条推送消息，以此来吸引我点击打开应用。 消息推送通常是指网站的运营工作等人员，通过某种工具对用户当前网页或移动设备 APP 进行的主动消息推送。 消息推送一般又分为 Web 端消息推送和移动端消息推送。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/home/%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1/Web%20%E5%AE%9E%E6%97%B6%E6%B6%88%E6%81%AF%E6%8E%A8%E9%80%81%E8%AF%A6%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"Jef Blog"}],["meta",{"property":"og:title","content":"Web 实时消息推送详解"}],["meta",{"property":"og:description","content":"现在要实现一个站内信 Web 消息推送的功能，对，就是下图这个小红点，一个很常用的功能。 ![站内信 Web 消息推送](.\\\\media\\\\站内信 Web 消息推送.jpg) 不过他还没想好用什么方式做，这里我帮他整理了一下几种方案，并简单做了实现。 什么是消息推送？ 推送的场景比较多，比如有人关注我的公众号，这时我就会收到一条推送消息，以此来吸引我点击打开应用。 消息推送通常是指网站的运营工作等人员，通过某种工具对用户当前网页或移动设备 APP 进行的主动消息推送。 消息推送一般又分为 Web 端消息推送和移动端消息推送。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-22T10:25:37.000Z"}],["meta",{"property":"article:author","content":"Jef"}],["meta",{"property":"article:modified_time","content":"2023-12-22T10:25:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Web 实时消息推送详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-22T10:25:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jef\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"什么是消息推送？","slug":"什么是消息推送","link":"#什么是消息推送","children":[]},{"level":2,"title":"消息推送常见方案","slug":"消息推送常见方案","link":"#消息推送常见方案","children":[{"level":3,"title":"短轮询","slug":"短轮询","link":"#短轮询","children":[]},{"level":3,"title":"长轮询","slug":"长轮询","link":"#长轮询","children":[]},{"level":3,"title":"iframe 流","slug":"iframe-流","link":"#iframe-流","children":[]},{"level":3,"title":"SSE (我的方式)","slug":"sse-我的方式","link":"#sse-我的方式","children":[]},{"level":3,"title":"Websocket","slug":"websocket","link":"#websocket","children":[]},{"level":3,"title":"MQTT","slug":"mqtt","link":"#mqtt","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1703240737000,"updatedTime":1703240737000,"contributors":[{"name":"tufujie","email":"tufj@hua-cloud.com.cn","commits":1}]},"readingTime":{"minutes":14.61,"words":4384},"filePathRelative":"home/系统设计/Web 实时消息推送详解.md","localizedDate":"2023年12月22日","excerpt":"<p>现在要实现一个站内信 Web 消息推送的功能，对，就是下图这个小红点，一个很常用的功能。</p>\\n<p>![站内信 Web 消息推送](.\\\\media\\\\站内信 Web 消息推送.jpg)</p>\\n<p>不过他还没想好用什么方式做，这里我帮他整理了一下几种方案，并简单做了实现。</p>\\n<h2> <strong>什么是消息推送？</strong></h2>\\n<p>推送的场景比较多，比如有人关注我的公众号，这时我就会收到一条推送消息，以此来吸引我点击打开应用。</p>\\n<p>消息推送通常是指网站的运营工作等人员，通过某种工具对用户当前网页或移动设备 APP 进行的主动消息推送。</p>\\n<p>消息推送一般又分为 Web 端消息推送和移动端消息推送。</p>","autoDesc":true}');export{e as data};
