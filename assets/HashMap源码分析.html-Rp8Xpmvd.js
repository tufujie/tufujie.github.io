import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as i,d as l}from"./app-AuAuVshg.js";const s="/assets/jdk1.8之前的内部结构-HashMap-K-tlcFmN.png",a="/assets/jdk1.8之后的内部结构-HashMap-5gcSdrrG.png",d="/assets/putVal方法添加元素的分析-bB-AHC_l.png",t={},v=l(`<h2 id="hashmap-简介" tabindex="-1"><a class="header-anchor" href="#hashmap-简介" aria-hidden="true">#</a> HashMap 简介</h2><p>HashMap 主要用来存放键值对，它基于哈希表的 Map 接口实现，是常用的 Java 集合之一，是非线程安全的。 HashMap 可以存储 null 的 key 和 value，但 null 作为键只能有一个，null 作为值可以有多个。 JDK1.8 之前 HashMap 由 数组+链表 组成的，数组是 HashMap 的主体，链表则是主要为了解决哈希冲突而存在的（“拉链法”解决冲突）。 JDK1.8 以后的 HashMap 在解决哈希冲突时有了较大的变化，当链表长度大于等于阈值（默认为 8）（将链表转换成红黑树前会判断，如果当前数组的长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树）时，将链表转化为红黑树，以减少搜索时间。 HashMap 默认的初始化大小为 16。之后每次扩充，容量变为原来的 2 倍。并且， HashMap 总是使用 2 的幂作为哈希表的大小。</p><h2 id="底层数据结构分析" tabindex="-1"><a class="header-anchor" href="#底层数据结构分析" aria-hidden="true">#</a> 底层数据结构分析</h2><h3 id="jdk1-8-之前" tabindex="-1"><a class="header-anchor" href="#jdk1-8-之前" aria-hidden="true">#</a> JDK1.8 之前</h3><p>JDK1.8 之前 HashMap 底层是 <strong>数组和链表</strong>， 结合在一起使用也就是 <strong>链表散列</strong>。 HashMap 通过 key 的 hashCode 经过扰动函数处理过后得到 hash 值，然后通过 (n - 1) &amp; hash 判断当前元素存放的位置（这里的 n 指的是数组的长度），如果当前位置存在元素的话，就判断该元素与要存入的元素的 hash 值以及 key 是否相同，如果相同的话，直接覆盖，不相同就通过拉链法解决冲突。 所谓扰动函数指的就是 HashMap 的 hash 方法。使用 hash 方法也就是扰动函数是为了防止一些实现比较差的 hashCode() 方法，换句话说使用扰动函数之后可以减少碰撞。 <strong>JDK 1.8 HashMap 的 hash 方法源码:</strong> JDK 1.8 的 hash 方法 相比于 JDK 1.7 hash 方法更加简化，但是原理不变。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>static final int hash(Object key) {
  int h;
  // key.hashCode()：返回散列值也就是hashcode
  // ^：按位异或
  // &gt;&gt;&gt;:无符号右移，忽略符号位，空位都以0补齐
  return (key == null) ? 0 : (h = key.hashCode()) ^ (h &gt;&gt;&gt; 16);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>对比一下 JDK1.7 的 HashMap 的 hash 方法源码.</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>static int hash(int h) {
    // This function ensures that hashCodes that differ only by
    // constant multiples at each bit position have a bounded
    // number of collisions (approximately 8 at default load factor).

	h ^= (h &gt;&gt;&gt; 20) ^ (h &gt;&gt;&gt; 12);
	return h ^ (h &gt;&gt;&gt; 7) ^ (h &gt;&gt;&gt; 4);

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相比于 JDK1.8 的 hash 方法 ，JDK 1.7 的 hash 方法的性能会稍差一点点，因为毕竟扰动了 4 次。 所谓 “<strong>拉链法</strong>” 就是：将链表和数组相结合。也就是说创建一个链表数组，数组中每一格就是一个链表。若遇到哈希冲突，则将冲突的值加到链表中即可。</p><figure><img src="`+s+'" alt="jdk1.8之前的内部结构-HashMap" tabindex="0" loading="lazy"><figcaption>jdk1.8之前的内部结构-HashMap</figcaption></figure><h3 id="jdk1-8-之后" tabindex="-1"><a class="header-anchor" href="#jdk1-8-之后" aria-hidden="true">#</a> JDK1.8 之后</h3><p>相比于之前的版本，JDK1.8 以后在解决哈希冲突时有了较大的变化。 当链表长度大于等于阈值（默认为 8）时，会首先调用 treeifyBin()方法。这个方法会根据 HashMap 数组来决定是否转换为红黑树。只有当数组长度大于或者等于 64 的情况下，才会执行转换红黑树操作，以减少搜索时间。否则，就是只是执行 resize() 方法对数组扩容。相关源码这里就不贴了，重点关注 treeifyBin()方法即可！</p><figure><img src="'+a+`" alt="jdk1.8之后的内部结构-HashMap" tabindex="0" loading="lazy"><figcaption>jdk1.8之后的内部结构-HashMap</figcaption></figure><p><strong>类的属性</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class HashMap&lt;K,V&gt; extends AbstractMap&lt;K,V&gt; implements Map&lt;K,V&gt;, Cloneable, Serializable {
    // 序列号
    private static final long serialVersionUID = 362498820763181265L;
    // 默认的初始容量是16
    static final int DEFAULT_INITIAL_CAPACITY = 1 &lt;&lt; 4;
    // 最大容量
    static final int MAXIMUM_CAPACITY = 1 &lt;&lt; 30;
    // 默认的负载因子
    static final float DEFAULT_LOAD_FACTOR = 0.75f;
    // 当桶(bucket)上的结点数大于等于这个值时会转成红黑树
    static final int TREEIFY_THRESHOLD = 8;
    // 当桶(bucket)上的结点数小于等于这个值时树转链表
    static final int UNTREEIFY_THRESHOLD = 6;
    // 桶中结构转化为红黑树对应的table的最小容量
    static final int MIN_TREEIFY_CAPACITY = 64;
    // 存储元素的数组，总是2的幂次倍
    transient Node&lt;k,v&gt;[] table;
    // 存放具体元素的集
    transient Set&lt;map.entry&lt;k,v&gt;&gt; entrySet;
    // 存放元素的个数，注意这个不等于数组的长度。
    transient int size;
    // 每次扩容和更改map结构的计数器
    transient int modCount;
    // 阈值(容量*负载因子) 当实际大小超过阈值时，会进行扩容
    int threshold;
    // 负载因子
    final float loadFactor;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>loadFactor 负载因子</strong> loadFactor 负载因子是控制数组存放数据的疏密程度，loadFactor 越趋近于 1，那么 数组中存放的数据(entry)也就越多，也就越密，也就是会让链表的长度增加，loadFactor 越小，也就是趋近于 0，数组中存放的数据(entry)也就越少，也就越稀疏。 <strong>loadFactor 太大导致查找元素效率低，太小导致数组的利用率低，存放的数据会很分散。loadFactor 的默认值为 0.75f 是官方给出的一个比较好的临界值。</strong> 给定的默认容量为 16，负载因子为 0.75。Map 在使用过程中不断的往里面存放数据，当数量超过了 16 * 0.75 = 12 就需要将当前 16 的容量进行扩容，而扩容这个过程涉及到 rehash、复制数据等操作，所以非常消耗性能。</li><li><strong>threshold</strong><strong>threshold = capacity * loadFactor，当 Size&gt;threshold</strong>的时候，那么就要考虑对数组的扩增了，也就是说，这个的意思就是 <strong>衡量数组是否需要扩增的一个标准</strong>。</li></ul><p><strong>Node 节点类源码:</strong> // 继承自 Map.Entry&lt;K,V&gt;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>static class Node&lt;K,V&gt; implements Map.Entry&lt;K,V&gt; {
    final int hash;// 哈希值，存放元素到hashmap中时用来与其他元素hash值比较
    final K key;//键
    V value;//值
    // 指向下一个节点
    Node&lt;K,V&gt; next;
    Node(int hash, K key, V value, Node&lt;K,V&gt; next) {
        this.hash = hash;
        this.key = key;
        this.value = value;
        this.next = next;
    }
    public final K getKey()        { return key; }
    public final V getValue()      { return value; }
    public final String toString() { return key + &quot;=&quot; + value; }
    // 重写hashCode()方法
    public final int hashCode() {
        return Objects.hashCode(key) ^ Objects.hashCode(value);
    }

    public final V setValue(V newValue) {
        V oldValue = value;
        value = newValue;
        return oldValue;
    }
    // 重写 equals() 方法
    public final boolean equals(Object o) {
        if (o == this)
            return true;
        if (o instanceof Map.Entry) {
            Map.Entry&lt;?,?&gt; e = (Map.Entry&lt;?,?&gt;)o;
            if (Objects.equals(key, e.getKey()) &amp;&amp;
                Objects.equals(value, e.getValue()))
                return true;
        }
        return false;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>树节点类源码:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>static final class TreeNode&lt;K,V&gt; extends LinkedHashMap.Entry&lt;K,V&gt; {
    TreeNode&lt;K,V&gt; parent;  // 父
    TreeNode&lt;K,V&gt; left;    // 左
    TreeNode&lt;K,V&gt; right;   // 右
    TreeNode&lt;K,V&gt; prev;    // needed to unlink next upon deletion
    boolean red;           // 判断颜色
    TreeNode(int hash, K key, V val, Node&lt;K,V&gt; next) {
        super(hash, key, val, next);
    }
    // 返回根节点
    final TreeNode&lt;K,V&gt; root() {
        for (TreeNode&lt;K,V&gt; r = this, p;;) {
            if ((p = r.parent) == null)
                return r;
            r = p;
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hashmap-源码分析" tabindex="-1"><a class="header-anchor" href="#hashmap-源码分析" aria-hidden="true">#</a> HashMap 源码分析</h2><h3 id="构造方法" tabindex="-1"><a class="header-anchor" href="#构造方法" aria-hidden="true">#</a> 构造方法</h3><p>HashMap 中有四个构造方法，它们分别如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 默认构造函数。
 public HashMap() {
    this.loadFactor = DEFAULT_LOAD_FACTOR; // all   other fields defaulted
 }

 // 包含另一个“Map”的构造函数
 public HashMap(Map&lt;? extends K, ? extends V&gt; m) {
     this.loadFactor = DEFAULT_LOAD_FACTOR;
     putMapEntries(m, false);//下面会分析到这个方法
 }

 // 指定“容量大小”的构造函数
 public HashMap(int initialCapacity) {
     this(initialCapacity, DEFAULT_LOAD_FACTOR);
 }

 // 指定“容量大小”和“负载因子”的构造函数
 public HashMap(int initialCapacity, float loadFactor) {
     if (initialCapacity &lt; 0)
         throw new IllegalArgumentException(&quot;Illegal initial capacity: &quot; + initialCapacity);
     if (initialCapacity &gt; MAXIMUM_CAPACITY)
         initialCapacity = MAXIMUM_CAPACITY;
     if (loadFactor &lt;= 0 || Float.isNaN(loadFactor))
         throw new IllegalArgumentException(&quot;Illegal load factor: &quot; + loadFactor);
     this.loadFactor = loadFactor;
     // 初始容量暂时存放到 threshold ，在resize中再赋值给 newCap 进行table初始化
     this.threshold = tableSizeFor(initialCapacity);
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>值得注意的是上述四个构造方法中，都初始化了负载因子 loadFactor，由于 HashMap 中没有 capacity 这样的字段，即使指定了初始化容量 initialCapacity ，也只是通过 tableSizeFor 将其扩容到与 initialCapacity 最接近的 2 的幂次方大小，然后暂时赋值给 threshold ，后续通过 resize 方法将 threshold 赋值给 newCap 进行 table 的初始化。 putMapEntries 方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>final void putMapEntries(Map&lt;? extends K, ? extends V&gt; m, boolean evict) {
    int s = m.size();
    if (s &gt; 0) {
        // 判断table是否已经初始化
        if (table == null) { // pre-size
            /*
             * 未初始化，s为m的实际元素个数，ft=s/loadFactor =&gt; s=ft*loadFactor, 跟我们前面提到的
             * 阈值=容量*负载因子 是不是很像，是的，ft指的是要添加s个元素所需的最小的容量
             */
            float ft = ((float)s / loadFactor) + 1.0F;
            int t = ((ft &lt; (float)MAXIMUM_CAPACITY) ?
                    (int)ft : MAXIMUM_CAPACITY);
            /*
             * 根据构造函数可知，table未初始化，threshold实际上是存放的初始化容量，如果添加s个元素所
             * 需的最小容量大于初始化容量，则将最小容量扩容为最接近的2的幂次方大小作为初始化。
             * 注意这里不是初始化阈值
             */
            if (t &gt; threshold)
                threshold = tableSizeFor(t);
        }
        // 已初始化，并且m元素个数大于阈值，进行扩容处理
        else if (s &gt; threshold)
            resize();
        // 将m中的所有元素添加至HashMap中，如果table未初始化，putVal中会调用resize初始化或扩容
        for (Map.Entry&lt;? extends K, ? extends V&gt; e : m.entrySet()) {
            K key = e.getKey();
            V value = e.getValue();
            putVal(hash(key), key, value, false, evict);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="put-方法" tabindex="-1"><a class="header-anchor" href="#put-方法" aria-hidden="true">#</a> put 方法</h3><p>HashMap 只提供了 put 用于添加元素，putVal 方法只是给 put 方法调用的一个方法，并没有提供给用户使用。 <strong>对 putVal 方法添加元素的分析如下：</strong> 1.如果定位到的数组位置没有元素 就直接插入。 2.如果定位到的数组位置有元素就和要插入的 key 比较，如果 key 相同就直接覆盖，如果 key 不相同，就判断 p 是否是一个树节点，如果是就调用e = ((TreeNode&lt;K,V&gt;)p).putTreeVal(this, tab, hash, key, value)将元素添加进入。如果不是就遍历链表插入(插入的是链表尾部)。</p><figure><img src="`+d+`" alt="putVal方法添加元素的分析" tabindex="0" loading="lazy"><figcaption>putVal方法添加元素的分析</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public V put(K key, V value) {
    return putVal(hash(key), key, value, false, true);}
final V putVal(int hash, K key, V value, boolean onlyIfAbsent,
                   boolean evict) {
    Node&lt;K,V&gt;[] tab; Node&lt;K,V&gt; p; int n, i;
    // table未初始化或者长度为0，进行扩容
    if ((tab = table) == null || (n = tab.length) == 0)
        n = (tab = resize()).length;
    // (n - 1) &amp; hash 确定元素存放在哪个桶中，桶为空，新生成结点放入桶中(此时，这个结点是放在数组中)
    if ((p = tab[i = (n - 1) &amp; hash]) == null)
        tab[i] = newNode(hash, key, value, null);
    // 桶中已经存在元素（处理hash冲突）
    else {
        Node&lt;K,V&gt; e; K k;
        //快速判断第一个节点table[i]的key是否与插入的key一样，若相同就直接使用插入的值p替换掉旧的值e。
        if (p.hash == hash &amp;&amp;
            ((k = p.key) == key || (key != null &amp;&amp; key.equals(k))))
                e = p;
        // 判断插入的是否是红黑树节点
        else if (p instanceof TreeNode)
            // 放入树中
            e = ((TreeNode&lt;K,V&gt;)p).putTreeVal(this, tab, hash, key, value);
        // 不是红黑树节点则说明为链表结点
        else {
            // 在链表最末插入结点
            for (int binCount = 0; ; ++binCount) {
                // 到达链表的尾部
                if ((e = p.next) == null) {
                    // 在尾部插入新结点
                    p.next = newNode(hash, key, value, null);
                    // 结点数量达到阈值(默认为 8 )，执行 treeifyBin 方法
                    // 这个方法会根据 HashMap 数组来决定是否转换为红黑树。
                    // 只有当数组长度大于或者等于 64 的情况下，才会执行转换红黑树操作，以减少搜索时间。否则，就是只是对数组扩容。
                    if (binCount &gt;= TREEIFY_THRESHOLD - 1) // -1 for 1st
                        treeifyBin(tab, hash);
                    // 跳出循环
                    break;
                }
                // 判断链表中结点的key值与插入的元素的key值是否相等
                if (e.hash == hash &amp;&amp;
                    ((k = e.key) == key || (key != null &amp;&amp; key.equals(k))))
                    // 相等，跳出循环
                    break;
                // 用于遍历桶中的链表，与前面的e = p.next组合，可以遍历链表
                p = e;
            }
        }
        // 表示在桶中找到key值、hash值与插入元素相等的结点
        if (e != null) {
            // 记录e的value
            V oldValue = e.value;
            // onlyIfAbsent为false或者旧值为null
            if (!onlyIfAbsent || oldValue == null)
                //用新值替换旧值
                e.value = value;
            // 访问后回调
            afterNodeAccess(e);
            // 返回旧值
            return oldValue;
        }
    }
    // 结构性修改
    ++modCount;
    // 实际大小大于阈值则扩容
    if (++size &gt; threshold)
        resize();
    // 插入后回调
    afterNodeInsertion(evict);
    return null;

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>我们再来对比一下 JDK1.7 put 方法的代码</strong><strong>对于 put 方法的分析如下：</strong> ① 如果定位到的数组位置没有元素 就直接插入。 ② 如果定位到的数组位置有元素，遍历以这个元素为头结点的链表，依次和插入的 key 比较，如果 key 相同就直接覆盖，不同就采用头插法插入元素。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public V put(K key, V value)
    if (table == EMPTY_TABLE) {
    inflateTable(threshold);}
    if (key == null)
        return putForNullKey(value);
    int hash = hash(key);
    int i = indexFor(hash, table.length);
    for (Entry&lt;K,V&gt; e = table[i]; e != null; e = e.next) { // 先遍历
        Object k;
        if (e.hash == hash &amp;&amp; ((k = e.key) == key || key.equals(k))) {
            V oldValue = e.value;
            e.value = value;
            e.recordAccess(this);
            return oldValue;
        }
    }

    modCount++;
    addEntry(hash, key, value, i);  // 再插入
    return null;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-方法" tabindex="-1"><a class="header-anchor" href="#get-方法" aria-hidden="true">#</a> get 方法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public V get(Object key) {
    Node&lt;K,V&gt; e;
    return (e = getNode(hash(key), key)) == null ? null : e.value;}
final Node&lt;K,V&gt; getNode(int hash, Object key) {
    Node&lt;K,V&gt;[] tab; Node&lt;K,V&gt; first, e; int n; K k;
    if ((tab = table) != null &amp;&amp; (n = tab.length) &gt; 0 &amp;&amp;
        (first = tab[(n - 1) &amp; hash]) != null) {
        // 数组元素相等
        if (first.hash == hash &amp;&amp; // always check first node
            ((k = first.key) == key || (key != null &amp;&amp; key.equals(k))))
            return first;
        // 桶中不止一个节点
        if ((e = first.next) != null) {
            // 在树中get
            if (first instanceof TreeNode)
                return ((TreeNode&lt;K,V&gt;)first).getTreeNode(hash, key);
            // 在链表中get
            do {
                if (e.hash == hash &amp;&amp;
                    ((k = e.key) == key || (key != null &amp;&amp; key.equals(k))))
                    return e;
            } while ((e = e.next) != null);
        }
    }
    return null;

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="resize-方法" tabindex="-1"><a class="header-anchor" href="#resize-方法" aria-hidden="true">#</a> resize 方法</h3><p>进行扩容，会伴随着一次重新 hash 分配，并且会遍历 hash 表中所有的元素，是非常耗时的。在编写程序中，要尽量避免 resize。resize 方法实际上是将 table 初始化和 table 扩容 进行了整合，底层的行为都是给 table 赋值一个新的数组。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>final Node&lt;K,V&gt;[] resize() {
    Node&lt;K,V&gt;[] oldTab = table;
    int oldCap = (oldTab == null) ? 0 : oldTab.length;
    int oldThr = threshold;
    int newCap, newThr = 0;
    if (oldCap &gt; 0) {
        // 超过最大值就不再扩充了，就只好随你碰撞去吧
        if (oldCap &gt;= MAXIMUM_CAPACITY) {
            threshold = Integer.MAX_VALUE;
            return oldTab;
        }
        // 没超过最大值，就扩充为原来的2倍
        else if ((newCap = oldCap &lt;&lt; 1) &lt; MAXIMUM_CAPACITY &amp;&amp; oldCap &gt;= DEFAULT_INITIAL_CAPACITY)
            newThr = oldThr &lt;&lt; 1; // double threshold
    }
    else if (oldThr &gt; 0) // initial capacity was placed in threshold
        // 创建对象时初始化容量大小放在threshold中，此时只需要将其作为新的数组容量
        newCap = oldThr;
    else {
        // signifies using defaults 无参构造函数创建的对象在这里计算容量和阈值
        newCap = DEFAULT_INITIAL_CAPACITY;
        newThr = (int)(DEFAULT_LOAD_FACTOR * DEFAULT_INITIAL_CAPACITY);
    }
    if (newThr == 0) {
        // 创建时指定了初始化容量或者负载因子，在这里进行阈值初始化，
        // 或者扩容前的旧容量小于16，在这里计算新的resize上限
        float ft = (float)newCap * loadFactor;
        newThr = (newCap &lt; MAXIMUM_CAPACITY &amp;&amp; ft &lt; (float)MAXIMUM_CAPACITY ? (int)ft : Integer.MAX_VALUE);
    }
    threshold = newThr;
    @SuppressWarnings({&quot;rawtypes&quot;,&quot;unchecked&quot;})
        Node&lt;K,V&gt;[] newTab = (Node&lt;K,V&gt;[])new Node[newCap];
    table = newTab;
    if (oldTab != null) {
        // 把每个bucket都移动到新的buckets中
        for (int j = 0; j &lt; oldCap; ++j) {
            Node&lt;K,V&gt; e;
            if ((e = oldTab[j]) != null) {
                oldTab[j] = null;
                if (e.next == null)
                    // 只有一个节点，直接计算元素新的位置即可
                    newTab[e.hash &amp; (newCap - 1)] = e;
                else if (e instanceof TreeNode)
                    // 将红黑树拆分成2棵子树，如果子树节点数小于等于 UNTREEIFY_THRESHOLD（默认为 6），则将子树转换为链表。
                    // 如果子树节点数大于 UNTREEIFY_THRESHOLD，则保持子树的树结构。
                    ((TreeNode&lt;K,V&gt;)e).split(this, newTab, j, oldCap);
                else {
                    Node&lt;K,V&gt; loHead = null, loTail = null;
                    Node&lt;K,V&gt; hiHead = null, hiTail = null;
                    Node&lt;K,V&gt; next;
                    do {
                        next = e.next;
                        // 原索引
                        if ((e.hash &amp; oldCap) == 0) {
                            if (loTail == null)
                                loHead = e;
                            else
                                loTail.next = e;
                            loTail = e;
                        }
                        // 原索引+oldCap
                        else {
                            if (hiTail == null)
                                hiHead = e;
                            else
                                hiTail.next = e;
                            hiTail = e;
                        }
                    } while ((e = next) != null);
                    // 原索引放到bucket里
                    if (loTail != null) {
                        loTail.next = null;
                        newTab[j] = loHead;
                    }
                    // 原索引+oldCap放到bucket里
                    if (hiTail != null) {
                        hiTail.next = null;
                        newTab[j + oldCap] = hiHead;
                    }
                }
            }
        }
    }
    return newTab;

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hashmap-常用方法测试" tabindex="-1"><a class="header-anchor" href="#hashmap-常用方法测试" aria-hidden="true">#</a> HashMap 常用方法测试</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package map;
import java.util.Collection;import java.util.HashMap;import java.util.Set;
public class HashMapDemo {

    public static void main(String[] args) {
        HashMap&lt;String, String&gt; map = new HashMap&lt;String, String&gt;();
        // 键不能重复，值可以重复
        map.put(&quot;san&quot;, &quot;张三&quot;);
        map.put(&quot;si&quot;, &quot;李四&quot;);
        map.put(&quot;wu&quot;, &quot;王五&quot;);
        map.put(&quot;wang&quot;, &quot;老王&quot;);
        map.put(&quot;wang&quot;, &quot;老王2&quot;);// 老王被覆盖
        map.put(&quot;lao&quot;, &quot;老王&quot;);
        System.out.println(&quot;-------直接输出hashmap:-------&quot;);
        System.out.println(map);
        /**
         * 遍历HashMap
         */
        // 1.获取Map中的所有键
        System.out.println(&quot;-------foreach获取Map中所有的键:------&quot;);
        Set&lt;String&gt; keys = map.keySet();
        for (String key : keys) {
            System.out.print(key+&quot;  &quot;);
        }
        System.out.println();//换行
        // 2.获取Map中所有值
        System.out.println(&quot;-------foreach获取Map中所有的值:------&quot;);
        Collection&lt;String&gt; values = map.values();
        for (String value : values) {
            System.out.print(value+&quot;  &quot;);
        }
        System.out.println();//换行
        // 3.得到key的值的同时得到key所对应的值
        System.out.println(&quot;-------得到key的值的同时得到key所对应的值:-------&quot;);
        Set&lt;String&gt; keys2 = map.keySet();
        for (String key : keys2) {
            System.out.print(key + &quot;：&quot; + map.get(key)+&quot;   &quot;);
    
        }
        /**
         * 如果既要遍历key又要value，那么建议这种方式，因为如果先获取keySet然后再执行map.get(key)，map内部会执行两次遍历。
         * 一次是在获取keySet的时候，一次是在遍历所有key的时候。
         */
        // 当我调用put(key,value)方法的时候，首先会把key和value封装到
        // Entry这个静态内部类对象中，把Entry对象再添加到数组中，所以我们想获取
        // map中的所有键值对，我们只要获取数组中的所有Entry对象，接下来
        // 调用Entry对象中的getKey()和getValue()方法就能获取键值对了
        Set&lt;java.util.Map.Entry&lt;String, String&gt;&gt; entrys = map.entrySet();
        for (java.util.Map.Entry&lt;String, String&gt; entry : entrys) {
            System.out.println(entry.getKey() + &quot;--&quot; + entry.getValue());
        }
    
        /**
         * HashMap其他常用方法
         */
        System.out.println(&quot;after map.size()：&quot;+map.size());
        System.out.println(&quot;after map.isEmpty()：&quot;+map.isEmpty());
        System.out.println(map.remove(&quot;san&quot;));
        System.out.println(&quot;after map.remove()：&quot;+map);
        System.out.println(&quot;after map.get(si)：&quot;+map.get(&quot;si&quot;));
        System.out.println(&quot;after map.containsKey(si)：&quot;+map.containsKey(&quot;si&quot;));
        System.out.println(&quot;after containsValue(李四)：&quot;+map.containsValue(&quot;李四&quot;));
        System.out.println(map.replace(&quot;si&quot;, &quot;李四2&quot;));
        System.out.println(&quot;after map.replace(si, 李四2):&quot;+map);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39),r=[v];function u(c,m){return n(),i("div",null,r)}const h=e(t,[["render",u],["__file","HashMap源码分析.html.vue"]]);export{h as default};
