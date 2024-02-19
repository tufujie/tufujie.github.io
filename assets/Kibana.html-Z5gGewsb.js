import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,d as i}from"./app-AuAuVshg.js";const a={},t=i(`<h2 id="新增索引" tabindex="-1"><a class="header-anchor" href="#新增索引" aria-hidden="true">#</a> 新增索引</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>put /test_index/
<span class="token punctuation">{</span>
    <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;number_of_shards&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">&quot;number_of_replicas&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建出来的索引名为test_index，别名为user，类型名如果没有指定，即为默认的_doc。</span>

<span class="token comment">// type说明</span>
<span class="token comment">// text：会分词，支持模糊查询，不支持聚合</span>
<span class="token comment">// keyword：不会分词，将全部内容作为一个词条，支持聚合</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;number_of_shards&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;number_of_replicas&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aliases&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;phone&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>test_index为索引名称，设置分片数量为3，一经确认无法修改，设置备份数量为0，由于只有一台服务器，所以写0</p><p>新增默认配置索引：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT test_index2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="操作映射" tabindex="-1"><a class="header-anchor" href="#操作映射" aria-hidden="true">#</a> 操作映射</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /test_index/_mapping
{
    &quot;properties&quot;: {
      &quot;name&quot;: {
        &quot;type&quot;: &quot;text&quot;
      },
      &quot;phone&quot;: {
        &quot;type&quot;: &quot;text&quot;
      }
    }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看映射" tabindex="-1"><a class="header-anchor" href="#查看映射" aria-hidden="true">#</a> 查看映射</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET test_index/_mapping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="删除索引" tabindex="-1"><a class="header-anchor" href="#删除索引" aria-hidden="true">#</a> 删除索引</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE test_index
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看索引" tabindex="-1"><a class="header-anchor" href="#查看索引" aria-hidden="true">#</a> 查看索引</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /test_index/_settings
GET test_index
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看所有索引" tabindex="-1"><a class="header-anchor" href="#查看所有索引" aria-hidden="true">#</a> 查看所有索引</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET _all/_settings 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="添加文档" tabindex="-1"><a class="header-anchor" href="#添加文档" aria-hidden="true">#</a> 添加文档</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>put /test_index/_doc/1
{
    &quot;name&quot;: &quot;Jef&quot;,
    &quot;phone&quot;: &quot;18390220001&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>successful表示成功条数</p><p>_id为制定id</p></blockquote><p>不指定文档ID的时候用post：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>post /test_index/_doc/
{
    &quot;name&quot;: &quot;Ran&quot;,
    &quot;phone&quot;: &quot;18390220002&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>_id为文档ID，随机生成</p><h2 id="删除文档" tabindex="-1"><a class="header-anchor" href="#删除文档" aria-hidden="true">#</a> 删除文档</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /test_index/_doc/1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除指定条件的文档" tabindex="-1"><a class="header-anchor" href="#删除指定条件的文档" aria-hidden="true">#</a> 删除指定条件的文档</h3><p>慎用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST test_index/_delete_by_query
{  
  &quot;query&quot;: {
    &quot;match_all&quot;: {&quot;_id&quot;: &quot;1&quot;}
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改文档" tabindex="-1"><a class="header-anchor" href="#修改文档" aria-hidden="true">#</a> 修改文档</h2><p>1、使用put直接覆盖之前的文档</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>put /test_index/_doc/1
{
    &quot;name&quot;: &quot;Jef&quot;,
    &quot;phone&quot;: &quot;18390220002&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、直接修改用post</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>post /test_index/_doc/1/_update
{
   &quot;doc&quot;: {
     &quot;phone&quot;: &quot;18390220003&quot;
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通过id查询文档" tabindex="-1"><a class="header-anchor" href="#通过id查询文档" aria-hidden="true">#</a> 通过id查询文档</h2><p>需要知道文档ID</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /test_index/_doc/1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看文档的指定字段：字段间以英文逗号分割</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /test_index/_doc/1?_source=phone
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查询列表" tabindex="-1"><a class="header-anchor" href="#查询列表" aria-hidden="true">#</a> 查询列表</h2><h3 id="获取所有数据" tabindex="-1"><a class="header-anchor" href="#获取所有数据" aria-hidden="true">#</a> 获取所有数据</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 默认情况下，es一次展示10条数据,通过from和size来控制分页
# 索引test_index的查询
GET test_index/_search
{
  &quot;query&quot;: {
    &quot;match_all&quot;: {}
  },
  &quot;from&quot;: 0,
  &quot;size&quot;: 100
}

#如果没有查询条件也可以使用最简单的
GET test_index/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全文查询" tabindex="-1"><a class="header-anchor" href="#全文查询" aria-hidden="true">#</a> 全文查询</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET test_index/_search
{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;phone&quot;: &quot;1839022000&quot;
    }
  },
  &quot;size&quot;: 500
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="词条查询" tabindex="-1"><a class="header-anchor" href="#词条查询" aria-hidden="true">#</a> 词条查询</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET test_index/_search
{
  &quot;query&quot;: {
    &quot;term&quot;: {
      &quot;phone&quot;: {
        &quot;value&quot;: &quot;18390220002&quot;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用multi-get-api实现批量获取文档" tabindex="-1"><a class="header-anchor" href="#使用multi-get-api实现批量获取文档" aria-hidden="true">#</a> 使用Multi get API实现批量获取文档</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /_mget
{
    &quot;docs&quot;: [{
     &quot;_index&quot;: &quot;test_index&quot;,
     &quot;_type&quot;: &quot;_doc&quot;,
     &quot;_id&quot;: 1
      },
      {
     &quot;_index&quot;: &quot;test_index&quot;,
     &quot;_type&quot;: &quot;_doc&quot;,
     &quot;_id&quot;: &quot;cf7FVI0BDXQuq0jdciYa&quot;
      }
   ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>批量获取文档指定字段：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /_mget
{
    &quot;docs&quot;: [{
     &quot;_index&quot;: &quot;test_index&quot;,
     &quot;_type&quot;: &quot;_doc&quot;,
     &quot;_id&quot;: 1,
     &quot;_source&quot;: &quot;phone&quot;
      },
      {
     &quot;_index&quot;: &quot;test_index&quot;,
     &quot;_type&quot;: &quot;_doc&quot;,
     &quot;_id&quot;: &quot;cf7FVI0BDXQuq0jdciYa&quot;,
     &quot;_source&quot;: [&quot;name&quot;, &quot;phone&quot;]
      }
   ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取同索引同类型下的不同文档：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /test_index/_doc/_mget
{
    &quot;docs&quot;: [
      {
     &quot;_id&quot;: 1
      },
      {
     &quot;_id&quot;: &quot;cf7FVI0BDXQuq0jdciYa&quot;
      }
   ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用bulk-api实现批量操作" tabindex="-1"><a class="header-anchor" href="#使用bulk-api实现批量操作" aria-hidden="true">#</a> 使用Bulk API实现批量操作</h2><p>Bulk会把将要处理的数据载入内存中，所以数量是有限制的，取决于硬件、文档大小以及复杂性、索引以及搜索的负载，一般建议是1000-5000个文档，大小建议5-15MB，默认不能超过100MB，可以在ES 的配置文件（elastcsearch.yml）中配置</p><p>批量添加文档：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /test_index/_doc/_bulk
{&quot;index&quot;: {&quot;_id&quot;: 1}}
{&quot;title&quot;: &quot;Java&quot;, &quot;price&quot;: 10}
{&quot;index&quot;: {&quot;_id&quot;: 2}}
{&quot;title&quot;: &quot;Python&quot;, &quot;price&quot;: 11}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>批量修改和删除文档：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /test_index/_doc/_bulk
{&quot;delete&quot;: {&quot;_index&quot;: &quot;test_index&quot;, &quot;_type&quot;: &quot;_doc&quot;, &quot;_id&quot;: 1}}
{&quot;create&quot;: {&quot;_index&quot;: &quot;test_index&quot;, &quot;_type&quot;: &quot;_doc&quot;, &quot;_id&quot;: 2}}
{&quot;price&quot;: 12}

{&quot;update&quot;: {&quot;_index&quot;: &quot;test_index&quot;, &quot;_type&quot;: &quot;_doc&quot;, &quot;_id&quot;: 3}}
{&quot;doc&quot;: {&quot;price&quot;: 12}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分词器" tabindex="-1"><a class="header-anchor" href="#分词器" aria-hidden="true">#</a> 分词器</h2><p><strong>ik分词器使用</strong> IK分词器有两种分词模式：ik_max_word和ik_smart模式。</p><h3 id="ik-max-word" tabindex="-1"><a class="header-anchor" href="#ik-max-word" aria-hidden="true">#</a> ik_max_word</h3><p>会将文本做最细粒度的拆分，比如会将“乒乓球明年总冠军”拆分为“乒乓球、乒乓、球、明年、总冠军、冠军。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /_analyze
{
  &quot;analyzer&quot;: &quot;ik_max_word&quot;,
  &quot;text&quot;: &quot;乒乓球明年总冠军&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ik-smart" tabindex="-1"><a class="header-anchor" href="#ik-smart" aria-hidden="true">#</a> ik_smart</h3><p>会做最粗粒度的拆分，比如会将“乒乓球明年总冠军”拆分为乒乓球、明年、总冠军。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /_analyze
{
  &quot;analyzer&quot;: &quot;ik_smart&quot;,
  &quot;text&quot;: &quot;乒乓球明年总冠军&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加映射-并指定分词器为ik分词器" tabindex="-1"><a class="header-anchor" href="#添加映射-并指定分词器为ik分词器" aria-hidden="true">#</a> 添加映射，并指定分词器为ik分词器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT test_index
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;name&quot;: {
        &quot;type&quot;: &quot;keyword&quot;,
        &quot;analyzer&quot;: &quot;ik_max_word&quot;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,65),d=[t];function u(l,o){return n(),s("div",null,d)}const v=e(a,[["render",u],["__file","Kibana.html.vue"]]);export{v as default};
