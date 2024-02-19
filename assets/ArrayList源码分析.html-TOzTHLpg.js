import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as i,d as a}from"./app-AuAuVshg.js";const t={},l=a(`<h2 id="arraylist-简介" tabindex="-1"><a class="header-anchor" href="#arraylist-简介" aria-hidden="true">#</a> ArrayList 简介</h2><p>ArrayList 的底层是数组队列，相当于动态数组。与 Java 中的数组相比，它的容量能动态增长。在添加大量元素前，应用程序可以使用ensureCapacity操作来增加 ArrayList 实例的容量。这可以减少递增式再分配的数量。 ArrayList 继承于 AbstractList ，实现了 List, RandomAccess, Cloneable, java.io.Serializable 这些接口。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class ArrayList&lt;E&gt; extends AbstractList&lt;E&gt;
        implements List&lt;E&gt;, RandomAccess, Cloneable, java.io.Serializable{

  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List : 表明它是一个列表，支持添加、删除、查找等操作，并且可以通过下标进行访问。</li><li>RandomAccess ：这是一个标志接口，表明实现这个接口的 List 集合是支持 <strong>快速随机访问</strong> 的。在 ArrayList 中，我们即可以通过元素的序号快速获取元素对象，这就是快速随机访问。</li><li>Cloneable ：表明它具有拷贝能力，可以进行深拷贝或浅拷贝操作。</li><li>Serializable : 表明它可以进行序列化操作，也就是可以将对象转换为字节流进行持久化存储或网络传输，非常方便。</li></ul><p>![ArrayList 类图](./media/ArrayList 类图.png)</p><h3 id="arraylist-和-vector-的区别-了解即可" tabindex="-1"><a class="header-anchor" href="#arraylist-和-vector-的区别-了解即可" aria-hidden="true">#</a> ArrayList 和 Vector 的区别?（了解即可)</h3><ul><li><p>ArrayList 是 List 的主要实现类，底层使用 Object[]存储，适用于频繁的查找工作，线程不安全 。</p></li><li><p>Vector 是 List 的古老实现类，底层使用Object[] 存储，线程安全。</p></li></ul><h3 id="arraylist-可以添加-null-值吗" tabindex="-1"><a class="header-anchor" href="#arraylist-可以添加-null-值吗" aria-hidden="true">#</a> ArrayList 可以添加 null 值吗？</h3><p>ArrayList 中可以存储任何类型的对象，包括 null 值。不过，不建议向ArrayList 中添加 null 值， null 值无意义，会让代码难以维护比如忘记做判空处理就会导致空指针异常。 示例代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ArrayList&lt;String&gt; listOfStrings = new ArrayList&lt;&gt;();
listOfStrings.add(null);
listOfStrings.add(&quot;java&quot;);System.out.println(listOfStrings);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出： [null, java]</p><h3 id="arraylist-与-linkedlist-区别" tabindex="-1"><a class="header-anchor" href="#arraylist-与-linkedlist-区别" aria-hidden="true">#</a> Arraylist 与 LinkedList 区别?</h3><ul><li><strong>是否保证线程安全</strong>： ArrayList 和 LinkedList 都是不同步的，也就是不保证线程安全；</li><li><strong>底层数据结构</strong>： ArrayList 底层使用的是 Object <strong>数组</strong>；LinkedList 底层使用的是 <strong>双向链表</strong> 数据结构（JDK1.6 之前为循环链表，JDK1.7 取消了循环。注意双向链表和双向循环链表的区别，下面有介绍到！）</li><li><strong>插入和删除是否受元素位置的影响</strong>： <ul><li>ArrayList 采用数组存储，所以插入和删除元素的时间复杂度受元素位置的影响。 比如：执行add(E e)方法的时候， ArrayList 会默认在将指定的元素追加到此列表的末尾，这种情况时间复杂度就是 O(1)。但是如果要在指定位置 i 插入和删除元素的话（add(int index, E element)），时间复杂度就为 O(n)。因为在进行上述操作的时候集合中第 i 和第 i 个元素之后的(n-i)个元素都要执行向后位/向前移一位的操作。</li><li>LinkedList 采用链表存储，所以在头尾插入或者删除元素不受元素位置的影响（add(E e)、addFirst(E e)、addLast(E e)、removeFirst()、 removeLast()），时间复杂度为 O(1)，如果是要在指定位置 i 插入和删除元素的话（add(int index, E element)，remove(Object o),remove(int index)）， 时间复杂度为 O(n) ，因为需要先移动到指定位置再插入和删除。</li></ul></li><li><strong>是否支持快速随机访问</strong>： LinkedList 不支持高效的随机元素访问，而 ArrayList（实现了 RandomAccess 接口） 支持。快速随机访问就是通过元素的序号快速获取元素对象(对应于get(int index)方法)。</li><li><strong>内存空间占用</strong>： ArrayList 的空间浪费主要体现在在 list 列表的结尾会预留一定的容量空间，而 LinkedList 的空间花费则体现在它的每一个元素都需要消耗比 ArrayList 更多的空间（因为要存放直接后继和直接前驱以及数据）。</li></ul><h2 id="arraylist-核心源码解读" tabindex="-1"><a class="header-anchor" href="#arraylist-核心源码解读" aria-hidden="true">#</a> ArrayList 核心源码解读</h2><p>这里以 JDK1.8 为例，分析一下 ArrayList 的底层源码。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class ArrayList&lt;E&gt; extends AbstractList&lt;E&gt;
        implements List&lt;E&gt;, RandomAccess, Cloneable, java.io.Serializable {
    private static final long serialVersionUID = 8683452581122892189L;

    /**
     * 默认初始容量大小
     */
    private static final int DEFAULT_CAPACITY = 10;
    
    /**
     * 空数组（用于空实例）。
     */
    private static final Object[] EMPTY_ELEMENTDATA = {};
    
    //用于默认大小空实例的共享空数组实例。
    //我们把它从EMPTY_ELEMENTDATA数组中区分出来，以知道在添加第一个元素时容量需要增加多少。
    private static final Object[] DEFAULTCAPACITY_EMPTY_ELEMENTDATA = {};
    
    /**
     * 保存ArrayList数据的数组
     */
    transient Object[] elementData; // non-private to simplify nested class access
    
    /**
     * ArrayList 所包含的元素个数
     */
    private int size;
    
    /**
     * 带初始容量参数的构造函数（用户可以在创建ArrayList对象时自己指定集合的初始大小）
     */
    public ArrayList(int initialCapacity) {
        if (initialCapacity &gt; 0) {
            //如果传入的参数大于0，创建initialCapacity大小的数组
            this.elementData = new Object[initialCapacity];
        } else if (initialCapacity == 0) {
            //如果传入的参数等于0，创建空数组
            this.elementData = EMPTY_ELEMENTDATA;
        } else {
            //其他情况，抛出异常
            throw new IllegalArgumentException(&quot;Illegal Capacity: &quot; +
                    initialCapacity);
        }
    }
    
    /**
     * 默认无参构造函数
     * DEFAULTCAPACITY_EMPTY_ELEMENTDATA 为0.初始化为10，也就是说初始其实是空数组 当添加第一个元素的时候数组容量才变成10
     */
    public ArrayList() {
        this.elementData = DEFAULTCAPACITY_EMPTY_ELEMENTDATA;
    }
    
    /**
     * 构造一个包含指定集合的元素的列表，按照它们由集合的迭代器返回的顺序。
     */
    public ArrayList(Collection&lt;? extends E&gt; c) {
        //将指定集合转换为数组
        elementData = c.toArray();
        //如果elementData数组的长度不为0
        if ((size = elementData.length) != 0) {
            // 如果elementData不是Object类型数据（c.toArray可能返回的不是Object类型的数组所以加上下面的语句用于判断）
            if (elementData.getClass() != Object[].class)
                //将原来不是Object类型的elementData数组的内容，赋值给新的Object类型的elementData数组
                elementData = Arrays.copyOf(elementData, size, Object[].class);
        } else {
            // 其他情况，用空数组代替
            this.elementData = EMPTY_ELEMENTDATA;
        }
    }
    
    /**
     * 修改这个ArrayList实例的容量是列表的当前大小。 应用程序可以使用此操作来最小化ArrayList实例的存储。
     */
    public void trimToSize() {
        modCount++;
        if (size &lt; elementData.length) {
            elementData = (size == 0)
                    ? EMPTY_ELEMENTDATA
                    : Arrays.copyOf(elementData, size);
        }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>//下面是ArrayList的扩容机制 //ArrayList的扩容机制提高了性能，如果每次只扩充一个， //那么频繁的插入会导致频繁的拷贝，降低性能，而ArrayList的扩容机制避免了这种情况。</p><pre><code>/**
 * 如有必要，增加此ArrayList实例的容量，以确保它至少能容纳元素的数量
 *
 * @param minCapacity 所需的最小容量
 */
public void ensureCapacity(int minCapacity) {
    //如果是true，minExpand的值为0，如果是false,minExpand的值为10
    int minExpand = (elementData != DEFAULTCAPACITY_EMPTY_ELEMENTDATA)
            // any size if not default element table
            ? 0
            // larger than default for default empty table. It&#39;s already
            // supposed to be at default size.
            : DEFAULT_CAPACITY;
    //如果最小容量大于已有的最大容量
    if (minCapacity &gt; minExpand) {
        ensureExplicitCapacity(minCapacity);
    }
}

// 根据给定的最小容量和当前数组元素来计算所需容量。
private static int calculateCapacity(Object[] elementData, int minCapacity) {
    // 如果当前数组元素为空数组（初始情况），返回默认容量和最小容量中的较大值作为所需容量
    if (elementData == DEFAULTCAPACITY_EMPTY_ELEMENTDATA) {
        return Math.max(DEFAULT_CAPACITY, minCapacity);
    }
    // 否则直接返回最小容量
    return minCapacity;
}

// 确保内部容量达到指定的最小容量。
private void ensureCapacityInternal(int minCapacity) {
    ensureExplicitCapacity(calculateCapacity(elementData, minCapacity));
}

//判断是否需要扩容
private void ensureExplicitCapacity(int minCapacity) {
    modCount++;
    // overflow-conscious code
    if (minCapacity - elementData.length &gt; 0)
        //调用grow方法进行扩容，调用此方法代表已经开始扩容了
        grow(minCapacity);
}

/**
 * 要分配的最大数组大小
 */
private static final int MAX_ARRAY_SIZE = Integer.MAX_VALUE - 8;

/**
 * ArrayList扩容的核心方法。
 */
private void grow(int minCapacity) {
    // oldCapacity为旧容量，newCapacity为新容量
    int oldCapacity = elementData.length;
    //将oldCapacity 右移一位，其效果相当于oldCapacity /2，
    //我们知道位运算的速度远远快于整除运算，整句运算式的结果就是将新容量更新为旧容量的1.5倍，
    int newCapacity = oldCapacity + (oldCapacity &gt;&gt; 1);
    //然后检查新容量是否大于最小需要容量，若还是小于最小需要容量，那么就把最小需要容量当作数组的新容量，
    if (newCapacity - minCapacity &lt; 0)
        newCapacity = minCapacity;
    //再检查新容量是否超出了ArrayList所定义的最大容量，
    //若超出了，则调用hugeCapacity()来比较minCapacity和 MAX_ARRAY_SIZE，
    //如果minCapacity大于MAX_ARRAY_SIZE，则新容量则为Interger.MAX_VALUE，否则，新容量大小则为 MAX_ARRAY_SIZE。
    if (newCapacity - MAX_ARRAY_SIZE &gt; 0)
        newCapacity = hugeCapacity(minCapacity);
    // minCapacity is usually close to size, so this is a win:
    elementData = Arrays.copyOf(elementData, newCapacity);
}

//比较minCapacity和 MAX_ARRAY_SIZE
private static int hugeCapacity(int minCapacity) {
    if (minCapacity &lt; 0) // overflow
        throw new OutOfMemoryError();
    return (minCapacity &gt; MAX_ARRAY_SIZE) ?
            Integer.MAX_VALUE :
            MAX_ARRAY_SIZE;
}

/**
 * 返回此列表中的元素数。
 */
public int size() {
    return size;
}

/**
 * 如果此列表不包含元素，则返回 true 。
 */
public boolean isEmpty() {
    //注意=和==的区别
    return size == 0;
}

/**
 * 如果此列表包含指定的元素，则返回true 。
 */
public boolean contains(Object o) {
    //indexOf()方法：返回此列表中指定元素的首次出现的索引，如果此列表不包含此元素，则为-1
    return indexOf(o) &gt;= 0;
}

/**
 * 返回此列表中指定元素的首次出现的索引，如果此列表不包含此元素，则为-1
 */
public int indexOf(Object o) {
    if (o == null) {
        for (int i = 0; i &lt; size; i++)
            if (elementData[i] == null)
                return i;
    } else {
        for (int i = 0; i &lt; size; i++)
            //equals()方法比较
            if (o.equals(elementData[i]))
                return i;
    }
    return -1;
}

/**
 * 返回此列表中指定元素的最后一次出现的索引，如果此列表不包含元素，则返回-1。.
 */
public int lastIndexOf(Object o) {
    if (o == null) {
        for (int i = size - 1; i &gt;= 0; i--)
            if (elementData[i] == null)
                return i;
    } else {
        for (int i = size - 1; i &gt;= 0; i--)
            if (o.equals(elementData[i]))
                return i;
    }
    return -1;
}

/**
 * 返回此ArrayList实例的浅拷贝。 （元素本身不被复制。）
 */
public Object clone() {
    try {
        ArrayList&lt;?&gt; v = (ArrayList&lt;?&gt;) super.clone();
        //Arrays.copyOf功能是实现数组的复制，返回复制后的数组。参数是被复制的数组和复制的长度
        v.elementData = Arrays.copyOf(elementData, size);
        v.modCount = 0;
        return v;
    } catch (CloneNotSupportedException e) {
        // 这不应该发生，因为我们是可以克隆的
        throw new InternalError(e);
    }
}

/**
 * 以正确的顺序（从第一个到最后一个元素）返回一个包含此列表中所有元素的数组。
 * 返回的数组将是“安全的”，因为该列表不保留对它的引用。 （换句话说，这个方法必须分配一个新的数组）。
 * 因此，调用者可以自由地修改返回的数组。 此方法充当基于阵列和基于集合的API之间的桥梁。
 */
public Object[] toArray() {
    return Arrays.copyOf(elementData, size);
}

/**
 * 以正确的顺序返回一个包含此列表中所有元素的数组（从第一个到最后一个元素）;
 * 返回的数组的运行时类型是指定数组的运行时类型。 如果列表适合指定的数组，则返回其中。
 * 否则，将为指定数组的运行时类型和此列表的大小分配一个新数组。
 * 如果列表适用于指定的数组，其余空间（即数组的列表数量多于此元素），则紧跟在集合结束后的数组中的元素设置为null 。
 * （这仅在调用者知道列表不包含任何空元素的情况下才能确定列表的长度。）
 */
@SuppressWarnings(&quot;unchecked&quot;)
public &lt;T&gt; T[] toArray(T[] a) {
    if (a.length &lt; size)
        // 新建一个运行时类型的数组，但是ArrayList数组的内容
        return (T[]) Arrays.copyOf(elementData, size, a.getClass());
    //调用System提供的arraycopy()方法实现数组之间的复制
    System.arraycopy(elementData, 0, a, 0, size);
    if (a.length &gt; size)
        a[size] = null;
    return a;
}

// Positional Access Operations

@SuppressWarnings(&quot;unchecked&quot;)
E elementData(int index) {
    return (E) elementData[index];
}

/**
 * 返回此列表中指定位置的元素。
 */
public E get(int index) {
    rangeCheck(index);

    return elementData(index);
}

/**
 * 用指定的元素替换此列表中指定位置的元素。
 */
public E set(int index, E element) {
    //对index进行界限检查
    rangeCheck(index);

    E oldValue = elementData(index);
    elementData[index] = element;
    //返回原来在这个位置的元素
    return oldValue;
}

/**
 * 将指定的元素追加到此列表的末尾。
 */
public boolean add(E e) {
    ensureCapacityInternal(size + 1);  // Increments modCount!!
    //这里看到ArrayList添加元素的实质就相当于为数组赋值
    elementData[size++] = e;
    return true;
}

/**
 * 在此列表中的指定位置插入指定的元素。
 * 先调用 rangeCheckForAdd 对index进行界限检查；然后调用 ensureCapacityInternal 方法保证capacity足够大；
 * 再将从index开始之后的所有成员后移一个位置；将element插入index位置；最后size加1。
 */
public void add(int index, E element) {
    rangeCheckForAdd(index);

    ensureCapacityInternal(size + 1);  // Increments modCount!!
    //arraycopy()这个实现数组之间复制的方法一定要看一下，下面就用到了arraycopy()方法实现数组自己复制自己
    System.arraycopy(elementData, index, elementData, index + 1,
            size - index);
    elementData[index] = element;
    size++;
}

/**
 * 删除该列表中指定位置的元素。 将任何后续元素移动到左侧（从其索引中减去一个元素）。
 */
public E remove(int index) {
    rangeCheck(index);

    modCount++;
    E oldValue = elementData(index);

    int numMoved = size - index - 1;
    if (numMoved &gt; 0)
        System.arraycopy(elementData, index + 1, elementData, index,
                numMoved);
    elementData[--size] = null; // clear to let GC do its work
    //从列表中删除的元素
    return oldValue;
}

/**
 * 从列表中删除指定元素的第一个出现（如果存在）。 如果列表不包含该元素，则它不会更改。
 * 返回true，如果此列表包含指定的元素
 */
public boolean remove(Object o) {
    if (o == null) {
        for (int index = 0; index &lt; size; index++)
            if (elementData[index] == null) {
                fastRemove(index);
                return true;
            }
    } else {
        for (int index = 0; index &lt; size; index++)
            if (o.equals(elementData[index])) {
                fastRemove(index);
                return true;
            }
    }
    return false;
}

/*
 * Private remove method that skips bounds checking and does not
 * return the value removed.
 */
private void fastRemove(int index) {
    modCount++;
    int numMoved = size - index - 1;
    if (numMoved &gt; 0)
        System.arraycopy(elementData, index + 1, elementData, index,
                numMoved);
    elementData[--size] = null; // clear to let GC do its work
}

/**
 * 从列表中删除所有元素。
 */
public void clear() {
    modCount++;

    // 把数组中所有的元素的值设为null
    for (int i = 0; i &lt; size; i++)
        elementData[i] = null;

    size = 0;
}

/**
 * 按指定集合的Iterator返回的顺序将指定集合中的所有元素追加到此列表的末尾。
 */
public boolean addAll(Collection&lt;? extends E&gt; c) {
    Object[] a = c.toArray();
    int numNew = a.length;
    ensureCapacityInternal(size + numNew);  // Increments modCount
    System.arraycopy(a, 0, elementData, size, numNew);
    size += numNew;
    return numNew != 0;
}

/**
 * 将指定集合中的所有元素插入到此列表中，从指定的位置开始。
 */
public boolean addAll(int index, Collection&lt;? extends E&gt; c) {
    rangeCheckForAdd(index);

    Object[] a = c.toArray();
    int numNew = a.length;
    ensureCapacityInternal(size + numNew);  // Increments modCount

    int numMoved = size - index;
    if (numMoved &gt; 0)
        System.arraycopy(elementData, index, elementData, index + numNew,
                numMoved);

    System.arraycopy(a, 0, elementData, index, numNew);
    size += numNew;
    return numNew != 0;
}

/**
 * 从此列表中删除所有索引为fromIndex （含）和toIndex之间的元素。
 * 将任何后续元素移动到左侧（减少其索引）。
 */
protected void removeRange(int fromIndex, int toIndex) {
    modCount++;
    int numMoved = size - toIndex;
    System.arraycopy(elementData, toIndex, elementData, fromIndex,
            numMoved);

    // clear to let GC do its work
    int newSize = size - (toIndex - fromIndex);
    for (int i = newSize; i &lt; size; i++) {
        elementData[i] = null;
    }
    size = newSize;
}

/**
 * 检查给定的索引是否在范围内。
 */
private void rangeCheck(int index) {
    if (index &gt;= size)
        throw new IndexOutOfBoundsException(outOfBoundsMsg(index));
}

/**
 * add和addAll使用的rangeCheck的一个版本
 */
private void rangeCheckForAdd(int index) {
    if (index &gt; size || index &lt; 0)
        throw new IndexOutOfBoundsException(outOfBoundsMsg(index));
}

/**
 * 返回IndexOutOfBoundsException细节信息
 */
private String outOfBoundsMsg(int index) {
    return &quot;Index: &quot; + index + &quot;, Size: &quot; + size;
}

/**
 * 从此列表中删除指定集合中包含的所有元素。
 */
public boolean removeAll(Collection&lt;?&gt; c) {
    Objects.requireNonNull(c);
    //如果此列表被修改则返回true
    return batchRemove(c, false);
}

/**
 * 仅保留此列表中包含在指定集合中的元素。
 * 换句话说，从此列表中删除其中不包含在指定集合中的所有元素。
 */
public boolean retainAll(Collection&lt;?&gt; c) {
    Objects.requireNonNull(c);
    return batchRemove(c, true);
}


/**
 * 从列表中的指定位置开始，返回列表中的元素（按正确顺序）的列表迭代器。
 * 指定的索引表示初始调用将返回的第一个元素为next 。 初始调用previous将返回指定索引减1的元素。
 * 返回的列表迭代器是fail-fast 。
 */
public ListIterator&lt;E&gt; listIterator(int index) {
    if (index &lt; 0 || index &gt; size)
        throw new IndexOutOfBoundsException(&quot;Index: &quot; + index);
    return new ListItr(index);
}

/**
 * 返回列表中的列表迭代器（按适当的顺序）。
 * 返回的列表迭代器是fail-fast 。
 */
public ListIterator&lt;E&gt; listIterator() {
    return new ListItr(0);
}

/**
 * 以正确的顺序返回该列表中的元素的迭代器。
 * 返回的迭代器是fail-fast 。
 */
public Iterator&lt;E&gt; iterator() {
    return new Itr();
}
</code></pre><h2 id="arraylist-扩容机制分析" tabindex="-1"><a class="header-anchor" href="#arraylist-扩容机制分析" aria-hidden="true">#</a> ArrayList 扩容机制分析</h2><h3 id="先从-arraylist-的构造函数说起" tabindex="-1"><a class="header-anchor" href="#先从-arraylist-的构造函数说起" aria-hidden="true">#</a> 先从 ArrayList 的构造函数说起</h3><p>ArrayList 有三种方式来初始化，构造方法源码如下（JDK8）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 *默认初始容量大小
 */
 private static final int DEFAULT_CAPACITY = 10;
 // DEFAULTCAPACITY_EMPTY_ELEMENTDATA 变量为一个空的数组 
 private static final Object[] DEFAULTCAPACITY_EMPTY_ELEMENTDATA = {};
   /**
    * 默认构造函数，使用初始容量10构造一个空列表(无参数构造)
    */
    public ArrayList() {
    this.elementData = DEFAULTCAPACITY_EMPTY_ELEMENTDATA;
    }
    /**
 	 * 带初始容量参数的构造函数。（用户自己指定容量）
     */
   public ArrayList(int initialCapacity) {
   if (initialCapacity &gt; 0) {//初始容量大于0
       //创建initialCapacity大小的数组
       this.elementData = new Object[initialCapacity];
   } else if (initialCapacity == 0) {//初始容量等于0
       //创建空数组
       this.elementData = EMPTY_ELEMENTDATA;
   } else {//初始容量小于0，抛出异常
       throw new IllegalArgumentException(&quot;Illegal Capacity: &quot; + initialCapacity);
   }}

/**
 *构造包含指定collection元素的列表，这些元素利用该集合的迭代器按顺序返回
 *如果指定的集合为null，throws NullPointerException。
 */
public ArrayList(Collection&lt;? extends E&gt; c) {
    elementData = c.toArray();
    if ((size = elementData.length) != 0) {
        // c.toArray might (incorrectly) not return Object[] (see 6260652)
        if (elementData.getClass() != Object[].class)
            elementData = Arrays.copyOf(elementData, size, Object[].class);
    } else {
        // replace with empty array.
        this.elementData = EMPTY_ELEMENTDATA;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>细心的同学一定会发现：<strong>以无参数构造方法创建 ArrayList 时，实际上初始化赋值的是一个空数组。当真正对数组进行添加元素操作时，才真正分配容量。即向数组中添加第一个元素时，数组容量扩为 10</strong>。 下面在我们分析 ArrayList 扩容时会讲到这一点内容！ 补充：JDK6 new 无参构造的 ArrayList 对象时，直接创建了长度是 10 的 Object[] 数组 elementData 。</p><h3 id="一步一步分析-arraylist-扩容机制" tabindex="-1"><a class="header-anchor" href="#一步一步分析-arraylist-扩容机制" aria-hidden="true">#</a> 一步一步分析 ArrayList 扩容机制</h3><p>这里以无参构造函数创建的 ArrayList 为例分析。</p><h4 id="add-方法" tabindex="-1"><a class="header-anchor" href="#add-方法" aria-hidden="true">#</a> add 方法</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 *将指定的元素追加到此列表的末尾。
 */
public boolean add(E e) {
  // size为ArrayList的实际数量大小而非容量大小，若未指定容量构建ArrayList对象，size为0
  // 加元素之前，先调用ensureCapacityInternal方法
  ensureCapacityInternal(size + 1);  // Increments modCount!!
  // 这里看到ArrayList添加元素的实质就相当于为数组赋值
  elementData[size++] = e;
  return true;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：JDK11 移除了 ensureCapacityInternal() 和 ensureExplicitCapacity() 方法 ensureCapacityInternal 方法的源码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 确保内部容量达到指定的最小容量。
private void ensureCapacityInternal(int minCapacity) {
  ensureExplicitCapacity(calculateCapacity(elementData, minCapacity));
}
// 根据给定的最小容量和当前数组元素来计算所需容量。
private static int calculateCapacity(Object[] elementData, int minCapacity) {
// 如果当前数组元素为空数组（初始情况），返回默认容量和最小容量中的较大值作为所需容量，
// 最小需要容量为默认容量DEFAULT_CAPACITY 也就是10 
  if (elementData == DEFAULTCAPACITY_EMPTY_ELEMENTDATA) {
      return Math.max(DEFAULT_CAPACITY, minCapacity);
  }
  // 否则直接返回最小容量
  return minCapacity;
}
ensureCapacityInternal 方法非常简单，内部直接调用了 ensureExplicitCapacity 方法：
//判断是否需要扩容
private void ensureExplicitCapacity(int minCapacity) {
  modCount++;
  //判断当前数组容量是否足以存储minCapacity个元素
  if (minCapacity - elementData.length &gt; 0)
      //调用grow方法进行扩容
      grow(minCapacity);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们来仔细分析一下：</p><ul><li>当我们要 add 进第 1 个元素到 ArrayList 时，elementData.length 为 0 （因为还是一个空的 list），因为执行了 ensureCapacityInternal() 方法 ，所以 minCapacity 此时为 10。此时，minCapacity - elementData.length &gt; 0成立，所以会进入 grow(minCapacity) 方法。</li><li>当 add 第 2 个元素时，minCapacity 为 2，此时 elementData.length(容量)在添加第一个元素后扩容成 10 了。此时，minCapacity - elementData.length &gt; 0 不成立，所以不会进入 （执行）grow(minCapacity) 方法。</li><li>添加第 3、4···到第 10 个元素时，依然不会执行 grow 方法，数组容量都为 10。 直到添加第 11 个元素，minCapacity(为 11)比 elementData.length（为 10）要大。进入 grow 方法进行扩容。</li></ul><h4 id="grow-方法" tabindex="-1"><a class="header-anchor" href="#grow-方法" aria-hidden="true">#</a> grow 方法</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  /**
   * 要分配的最大数组大小
   */
    private static final int MAX_ARRAY_SIZE = Integer.MAX_VALUE - 8;
  /**
   * ArrayList扩容的核心方法。
   */
   private void grow(int minCapacity) {
    // oldCapacity为旧容量，newCapacity为新容量
    int oldCapacity = elementData.length;
    // 将oldCapacity 右移一位，其效果相当于oldCapacity /2，
    // 我们知道位运算的速度远远快于整除运算，整句运算式的结果就是将新容量更新为旧容量的1.5倍，
    int newCapacity = oldCapacity + (oldCapacity &gt;&gt; 1);

    // 然后检查新容量是否大于最小需要容量，若还是小于最小需要容量，那么就把最小需要容量当作数组的新容量，
    if (newCapacity - minCapacity &lt; 0)
        newCapacity = minCapacity;

    // 如果新容量大于 MAX_ARRAY_SIZE,进入(执行) \`hugeCapacity()\` 方法来比较 minCapacity 和 MAX_ARRAY_SIZE，
    // 如果minCapacity大于最大容量，则新容量则为\`Integer.MAX_VALUE\`，否则，新容量大小则为 MAX_ARRAY_SIZE 即为 \`Integer.MAX_VALUE - 8\`。
    if (newCapacity - MAX_ARRAY_SIZE &gt; 0)
        newCapacity = hugeCapacity(minCapacity);

    // minCapacity is usually close to size, so this is a win:
    elementData = Arrays.copyOf(elementData, newCapacity);
   }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>int newCapacity = oldCapacity + (oldCapacity &gt;&gt; 1)，<strong>所以 ArrayList 每次扩容之后容量都会变为原来的 1.5 倍左右（oldCapacity 为偶数就是 1.5 倍，否则是 1.5 倍左右）！</strong> 奇偶不同，比如：10+10/2 = 15, 33+33/2=49。如果是奇数的话会丢掉小数. &quot;&gt;&gt;&quot;（移位运算符）：&gt;&gt;1 右移一位相当于除 2，右移 n 位相当于除以 2 的 n 次方。这里 oldCapacity 明显右移了 1 位所以相当于 oldCapacity /2。对于大数据的 2 进制运算,位移运算符比那些普通运算符的运算要快很多,因为程序仅仅移动一下而已,不去计算,这样提高了效率,节省了资源 <strong>我们再来通过例子探究一下grow() 方法：</strong></p><ul><li><p>当 add 第 1 个元素时，oldCapacity 为 0，经比较后第一个 if 判断成立，newCapacity = minCapacity(为 10)。但是第二个 if 判断不会成立，即 newCapacity 不比 MAX_ARRAY_SIZE 大，则不会进入 hugeCapacity 方法。数组容量为 10，add 方法中 return true,size 增为 1。</p></li><li><p>当 add 第 11 个元素进入 grow 方法时，newCapacity 为 15，比 minCapacity（为 11）大，第一个 if 判断不成立。新容量没有大于数组最大 size，不会进入 hugeCapacity 方法。数组容量扩为 15，add 方法中 return true,size 增为 11。</p></li><li><p>以此类推······</p></li></ul><p><strong>这里补充一点比较重要，但是容易被忽视掉的知识点：</strong></p><ul><li>Java 中的 length属性是针对数组说的,比如说你声明了一个数组,想知道这个数组的长度则用到了 length 这个属性.</li><li>Java 中的 length() 方法是针对字符串说的,如果想看这个字符串的长度则用到 length() 这个方法.</li><li>Java 中的 size() 方法是针对泛型集合说的,如果想看这个泛型有多少个元素,就调用此方法来查看!</li></ul><h4 id="hugecapacity-方法" tabindex="-1"><a class="header-anchor" href="#hugecapacity-方法" aria-hidden="true">#</a> hugeCapacity() 方法</h4><p>从上面 grow() 方法源码我们知道：如果新容量大于 MAX_ARRAY_SIZE,进入(执行) hugeCapacity() 方法来比较 minCapacity 和 MAX_ARRAY_SIZE，如果 minCapacity 大于最大容量，则新容量则为Integer.MAX_VALUE，否则，新容量大小则为 MAX_ARRAY_SIZE 即为 Integer.MAX_VALUE - 8。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>private static int hugeCapacity(int minCapacity) {
 if (minCapacity &lt; 0) // overflow
   throw new OutOfMemoryError();
 // 对minCapacity和MAX_ARRAY_SIZE进行比较
 // 若minCapacity大，将Integer.MAX_VALUE作为新数组的大小
 // 若MAX_ARRAY_SIZE大，将MAX_ARRAY_SIZE作为新数组的大小
 // MAX_ARRAY_SIZE = Integer.MAX_VALUE - 8;
 return (minCapacity &gt; MAX_ARRAY_SIZE) ?
   Integer.MAX_VALUE :
   MAX_ARRAY_SIZE;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="system-arraycopy-和-arrays-copyof-方法" tabindex="-1"><a class="header-anchor" href="#system-arraycopy-和-arrays-copyof-方法" aria-hidden="true">#</a> System.arraycopy() 和 Arrays.copyOf()方法</h3><p>阅读源码的话，我们就会发现 ArrayList 中大量调用了这两个方法。比如：我们上面讲的扩容操作以及add(int index, E element)、toArray() 等方法中都用到了该方法！</p><h4 id="system-arraycopy-方法" tabindex="-1"><a class="header-anchor" href="#system-arraycopy-方法" aria-hidden="true">#</a> System.arraycopy() 方法</h4><p>源码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 我们发现 arraycopy 是一个 native 方法,接下来我们解释一下各个参数的具体意义
    /**
    *   复制数组
    * @param src 源数组
    * @param srcPos 源数组中的起始位置
    * @param dest 目标数组
    * @param destPos 目标数组中的起始位置
    * @param length 要复制的数组元素的数量
    */
    public static native void arraycopy(Object src,  int  srcPos,
                                        Object dest, int destPos,
                                        int length);
场景：
    /**
     * 在此列表中的指定位置插入指定的元素。
     *先调用 rangeCheckForAdd 对index进行界限检查；然后调用 ensureCapacityInternal 方法保证capacity足够大；
     *再将从index开始之后的所有成员后移一个位置；将element插入index位置；最后size加1。
     */
    public void add(int index, E element) {
        rangeCheckForAdd(index);

        ensureCapacityInternal(size + 1);  // Increments modCount!!
        //arraycopy()方法实现数组自己复制自己
        //elementData:源数组;index:源数组中的起始位置;elementData：目标数组；index + 1：目标数组中的起始位置； size - index：要复制的数组元素的数量；
        System.arraycopy(elementData, index, elementData, index + 1, size - index);
        elementData[index] = element;
        size++;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们写一个简单的方法测试以下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class ArraycopyTest {

   public static void main(String[] args) {
        // TODO Auto-generated method stub
        int[] a = new int[10];
        a[0] = 0;
        a[1] = 1;
        a[2] = 2;
        a[3] = 3;
        System.arraycopy(a, 2, a, 3, 3);
        a[2]=99;
        for (int i = 0; i &lt; a.length; i++) {
            System.out.print(a[i] + &quot; &quot;);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果： 0 1 99 2 3 0 0 0 0 0</p><h4 id="arrays-copyof-方法" tabindex="-1"><a class="header-anchor" href="#arrays-copyof-方法" aria-hidden="true">#</a> Arrays.copyOf()方法</h4><p>源码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public static int[] copyOf(int[] original, int newLength) {
     // 申请一个新的数组
     int[] copy = new int[newLength];
 // 调用System.arraycopy,将源数组中的数据进行拷贝,并返回新的数组
     System.arraycopy(original, 0, copy, 0,
                      Math.min(original.length, newLength));
     return copy;
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>场景：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
  *以正确的顺序返回一个包含此列表中所有元素的数组（从第一个到最后一个元素）; 返回的数组的运行时类型是指定数组的运行时类型。
  */
 public Object[] toArray() {
 //elementData：要复制的数组；size：要复制的长度
     return Arrays.copyOf(elementData, size);
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>个人觉得使用 Arrays.copyOf()方法主要是为了给原有数组扩容，测试代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class ArrayscopyOfTest {

   public static void main(String[] args) {
        int[] a = new int[3];
        a[0] = 0;
        a[1] = 1;
        a[2] = 2;
        int[] b = Arrays.copyOf(a, 10);
        System.out.println(&quot;b.length&quot;+b.length);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果： 10</p><h4 id="两者联系和区别" tabindex="-1"><a class="header-anchor" href="#两者联系和区别" aria-hidden="true">#</a> 两者联系和区别</h4><p>联系： 看两者源代码可以发现 copyOf()内部实际调用了 System.arraycopy() 方法 区别： arraycopy() 需要目标数组，将原数组拷贝到你自己定义的数组里或者原数组，而且可以选择拷贝的起点和长度以及放入新数组中的位置 copyOf() 是系统自动在内部新建一个数组，并返回该数组。</p><h3 id="ensurecapacity方法" tabindex="-1"><a class="header-anchor" href="#ensurecapacity方法" aria-hidden="true">#</a> ensureCapacity方法</h3><p>ArrayList 源码中有一个 ensureCapacity 方法不知道大家注意到没有，这个方法 ArrayList 内部没有被调用过，所以很显然是提供给用户调用的，那么这个方法有什么作用呢？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   /**
    * 如有必要，增加此 ArrayList 实例的容量，以确保它至少可以容纳由minimum capacity参数指定的元素数。
    * @param   minCapacity   所需的最小容量
    */
    public void ensureCapacity(int minCapacity) {
        int minExpand = (elementData != DEFAULTCAPACITY_EMPTY_ELEMENTDATA)
            // any size if not default element table
            ? 0
            // larger than default for default empty table. It&#39;s already
            // supposed to be at default size.
            : DEFAULT_CAPACITY;

        if (minCapacity &gt; minExpand) {
            ensureExplicitCapacity(minCapacity);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>理论上来说，最好在向 ArrayList 添加大量元素之前用 ensureCapacity 方法，以减少增量重新分配的次数 我们通过下面的代码实际测试以下这个方法的效果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class EnsureCapacityTest {
    public static void main(String[] args) {
        ArrayList&lt;Object&gt; list = new ArrayList&lt;Object&gt;();
        final int N = 10000000;
        long startTime = System.currentTimeMillis();
        for (int i = 0; i &lt; N; i++) {
            list.add(i);
        }
        long endTime = System.currentTimeMillis();
        System.out.println(&quot;使用ensureCapacity方法前：&quot;+(endTime - startTime));

	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果： 使用ensureCapacity方法前：2158</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class EnsureCapacityTest {
    public static void main(String[] args) {
        ArrayList&lt;Object&gt; list = new ArrayList&lt;Object&gt;();
        final int N = 10000000;
        long startTime1 = System.currentTimeMillis();
        list.ensureCapacity(N);
        for (int i = 0; i &lt; N; i++) {
            list.add(i);
        }
        long endTime1 = System.currentTimeMillis();
        System.out.println(&quot;使用ensureCapacity方法后：&quot;+(endTime1 - startTime1));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果： 使用ensureCapacity方法后：1773 通过运行结果，我们可以看出向 ArrayList 添加大量元素之前使用ensureCapacity 方法可以提升性能。不过，这个性能差距几乎可以忽略不计。而且，实际项目根本也不可能往 ArrayList 里面添加这么多元素。</p>`,66),s=[l];function r(d,c){return e(),i("div",null,s)}const m=n(t,[["render",r],["__file","ArrayList源码分析.html.vue"]]);export{m as default};
