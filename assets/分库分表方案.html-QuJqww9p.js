import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as l,d as o}from"./app-AuAuVshg.js";const t={},a=o('<ol><li>Sharding-JDBC</li><li>动态传tableIndex参数</li></ol><h2 id="拆分依据" tabindex="-1"><a class="header-anchor" href="#拆分依据" aria-hidden="true">#</a> 拆分依据</h2><ul><li>范围（取模），例如：<code>1~1000000</code>，<code>1000001~2000000</code>。。。</li><li>hash取模，x.hashCode() % n</li><li>时间，按日、月、年拆分，例如：2024-02-19，2024-02，2024</li><li>特定用户id字段，例如企业ID，这样会限制只能存储在单个库的单张表上，如果单个用户数据量大的时候不适用</li></ul>',3),c=[a];function _(d,r){return i(),l("div",null,c)}const h=e(t,[["render",_],["__file","分库分表方案.html.vue"]]);export{h as default};
