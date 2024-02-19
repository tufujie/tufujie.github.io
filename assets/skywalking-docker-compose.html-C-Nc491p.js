import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as e}from"./app-AuAuVshg.js";const t={},p=e(`<p><strong>skywalking-docker-compose.yml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.8&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">elasticsearch</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> elasticsearch<span class="token punctuation">:</span>7.16.2
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> elasticsearch
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9200:9200&quot;</span>
    <span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>
      <span class="token key atrule">test</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;CMD-SHELL&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;curl --silent --fail localhost:9200/_cluster/health || exit 1&quot;</span> <span class="token punctuation">]</span>
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> 30s
      <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 10s
      <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">3</span>
      <span class="token key atrule">start_period</span><span class="token punctuation">:</span> 10s
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> discovery.type=single<span class="token punctuation">-</span>node
      <span class="token punctuation">-</span> bootstrap.memory_lock=true
      <span class="token punctuation">-</span> <span class="token string">&quot;ES_JAVA_OPTS=-Xms512m -Xmx512m&quot;</span>
    <span class="token key atrule">ulimits</span><span class="token punctuation">:</span>
      <span class="token key atrule">memlock</span><span class="token punctuation">:</span>
        <span class="token key atrule">soft</span><span class="token punctuation">:</span> <span class="token number">-1</span>
        <span class="token key atrule">hard</span><span class="token punctuation">:</span> <span class="token number">-1</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./data/es_data<span class="token punctuation">:</span>/usr/share/elasticsearch/data

  <span class="token key atrule">oap</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> apache/skywalking<span class="token punctuation">-</span>oap<span class="token punctuation">-</span>server<span class="token punctuation">:</span>8.9.0
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> oap
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token key atrule">elasticsearch</span><span class="token punctuation">:</span>
        <span class="token key atrule">condition</span><span class="token punctuation">:</span> service_healthy
    <span class="token key atrule">links</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> elasticsearch
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;11800:11800&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;12800:12800&quot;</span>
    <span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>
      <span class="token key atrule">test</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;CMD-SHELL&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/skywalking/bin/swctl ch&quot;</span> <span class="token punctuation">]</span>
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> 30s
      <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 10s
      <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">3</span>
      <span class="token key atrule">start_period</span><span class="token punctuation">:</span> 10s
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">SW_STORAGE</span><span class="token punctuation">:</span> elasticsearch
      <span class="token key atrule">SW_STORAGE_ES_CLUSTER_NODES</span><span class="token punctuation">:</span> elasticsearch<span class="token punctuation">:</span><span class="token number">9200</span>
      <span class="token key atrule">SW_HEALTH_CHECKER</span><span class="token punctuation">:</span> default
      <span class="token key atrule">SW_TELEMETRY</span><span class="token punctuation">:</span> prometheus
      <span class="token key atrule">JAVA_OPTS</span><span class="token punctuation">:</span> <span class="token string">&quot;-Xms1024m -Xmx1024m&quot;</span>

  <span class="token key atrule">skywalking-ui</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> apache/skywalking<span class="token punctuation">-</span>ui<span class="token punctuation">:</span>8.9.0
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> skywalking<span class="token punctuation">-</span>ui
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token key atrule">oap</span><span class="token punctuation">:</span>
        <span class="token key atrule">condition</span><span class="token punctuation">:</span> service_healthy
    <span class="token key atrule">links</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> oap
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9090:8080&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">SW_OAP_ADDRESS</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//oap<span class="token punctuation">:</span><span class="token number">12800</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[p];function c(i,u){return s(),a("div",null,l)}const r=n(t,[["render",c],["__file","skywalking-docker-compose.html.vue"]]);export{r as default};
