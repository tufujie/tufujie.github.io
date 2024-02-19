import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,d as s}from"./app-AuAuVshg.js";const a={},l=s(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>设计模式是解决问题的方案，学习现有的设计模式可以做到经验复用。 拥有设计模式词汇，在沟通时就能用更少的词汇来讨论，并且不需要了解底层细节。 应用场景 1.单例模式：应用场景为需要确保一个类只有<strong>一个实例</strong>的地方。 2.工厂方法模式：应用场景为需要创建对象的地方，但需要<strong>根据不同情况创建不同类型的对象</strong>。 3.抽象工厂模式：应用场景为需要<strong>创建一系列相关对象</strong>的地方。 4.生成器模式：应用场景为需要<strong>生成复杂对象</strong>的地方，可以通过生成器来逐步创建对象。 5.原型模式：应用场景为需要<strong>复制对象</strong>的地方，可以通过克隆来创建对象。 6.组合模式：应用场景为需要将对象组合成树形结构的地方。 7.装饰器模式：应用场景为需要动态地给对象添加职责的地方。 8.代理模式：应用场景为需要控制对对象的访问的地方。 9.观察者模式：应用场景为需要实现发布-订阅模型的地方。 10.中介者模式：应用场景为需要简化复杂系统中的对象之间的交互关系的地方。 11.策略模式：应用场景为需要实现多种算法的地方。 12.状态模式：应用场景为需要表示一个对象的状态的地方。 13.职责链模式：应用场景为需要将请求从一个对象传递到另一个对象的地方。 14.解释器模式：应用场景为需要定义语言的语法规则的地方。 15.迭代器模式：应用场景为需要遍历集合的地方。 16.组合模式：应用场景为需要将对象组合成树形结构的地方。 17.桥接模式：应用场景为需要将两个不相关的类一起使用的地方。 18.装饰器模式：应用场景为需要动态地给对象添加职责的地方。 19.外观模式：应用场景为需要简化子系统之间交互的地方。 20.享元模式：应用场景为需要共享对象的地方。 21.工厂方法模式：应用场景为需要创建对象，但需要根据不同情况创建不同类型的对象的地方。 22.抽象工厂模式：应用场景为需要创建一系列相关对象的地方。 23.装饰器模式：应用场景为需要动态地给对象添加职责的地方。</p><h2 id="创建型" tabindex="-1"><a class="header-anchor" href="#创建型" aria-hidden="true">#</a> 创建型</h2><h3 id="单例-singleton" tabindex="-1"><a class="header-anchor" href="#单例-singleton" aria-hidden="true">#</a> 单例（Singleton）</h3><h4 id="intent" tabindex="-1"><a class="header-anchor" href="#intent" aria-hidden="true">#</a> Intent</h4><p>确保一个类只有一个实例，并提供该实例的全局访问点。</p><h4 id="class-diagram" tabindex="-1"><a class="header-anchor" href="#class-diagram" aria-hidden="true">#</a> Class Diagram</h4><p>使用一个私有构造函数、一个私有静态变量以及一个公有静态函数来实现。 私有构造函数保证了不能通过构造函数来创建对象实例，只能通过公有静态函数返回唯一的私有静态变量。</p><h4 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> Implementation</h4><h5 id="_1-懒汉式-线程不安全" tabindex="-1"><a class="header-anchor" href="#_1-懒汉式-线程不安全" aria-hidden="true">#</a> 1 懒汉式-线程不安全</h5><p>以下实现中，私有静态变量 uniqueInstance 被延迟实例化，这样做的好处是，如果没有用到该类，那么就不会实例化 uniqueInstance，从而节约资源。 这个实现在多线程环境下是不安全的，如果多个线程能够同时进入 if (uniqueInstance == null) ，并且此时 uniqueInstance 为 null，那么会有多个线程执行 uniqueInstance = new Singleton(); 语句，这将导致实例化多次 uniqueInstance。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> uniqueInstance<span class="token punctuation">;</span>
    
    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getUniqueInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>uniqueInstance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            uniqueInstance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> uniqueInstance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-懒汉式-线程安全" tabindex="-1"><a class="header-anchor" href="#_2-懒汉式-线程安全" aria-hidden="true">#</a> 2 懒汉式-线程安全</h5><p>只需要对 getUniqueInstance() 方法加锁，那么在一个时间点只能有一个线程能够进入该方法，从而避免了实例化多次 uniqueInstance。 但是当一个线程进入该方法之后，其它试图进入该方法的线程都必须等待，即使 uniqueInstance 已经被实例化了。这会让线程阻塞时间过长，因此该方法有性能问题，不推荐使用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public static synchronized Singleton getUniqueInstance() {
    if (uniqueInstance == null) {
        uniqueInstance = new Singleton();
    }
    return uniqueInstance;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-饿汉式-线程安全" tabindex="-1"><a class="header-anchor" href="#_3-饿汉式-线程安全" aria-hidden="true">#</a> 3 饿汉式-线程安全</h5><p>线程不安全问题主要是由于 uniqueInstance 被实例化多次，采取直接实例化 uniqueInstance 的方式就不会产生线程不安全问题。 但是直接实例化的方式也丢失了延迟实例化带来的节约资源的好处。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>private static Singleton uniqueInstance = new Singleton();
public static Singleton getUniqueInstance() {
    return uniqueInstance;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-双重校验锁-线程安全" tabindex="-1"><a class="header-anchor" href="#_4-双重校验锁-线程安全" aria-hidden="true">#</a> 4 双重校验锁-线程安全</h5><p>uniqueInstance 只需要被实例化一次，之后就可以直接使用了。加锁操作只需要对实例化那部分的代码进行，只有当 uniqueInstance 没有被实例化时，才需要进行加锁。 双重校验锁先判断 uniqueInstance 是否已经被实例化，如果没有被实例化，那么才对实例化语句进行加锁。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Singleton {

    private volatile static Singleton uniqueInstance;
    
    private Singleton() {
    }
    
    public static Singleton getUniqueInstance() {
        if (uniqueInstance == null) {
            synchronized (Singleton.class) {
                if (uniqueInstance == null) {
                    uniqueInstance = new Singleton();
                }
            }
        }
        return uniqueInstance;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>考虑下面的实现，也就是只使用了一个 if 语句。在 uniqueInstance == null 的情况下，如果两个线程都执行了 if 语句，那么两个线程都会进入 if 语句块内。虽然在 if 语句块内有加锁操作，但是两个线程都会执行 uniqueInstance = new Singleton(); 这条语句，只是先后的问题，那么就会进行两次实例化。因此必须使用双重校验锁，也就是需要使用两个 if 语句：第一个 if 语句用来避免 uniqueInstance 已经被实例化之后的加锁操作，而第二个 if 语句进行了加锁，所以只能有一个线程进入，就不会出现 uniqueInstance == null 时两个线程同时进行实例化操作。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (uniqueInstance == null) {
    synchronized (Singleton.class) {
        uniqueInstance = new Singleton();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>uniqueInstance 采用 volatile 关键字修饰也是很有必要的， uniqueInstance = new Singleton(); 这段代码其实是分为三步执行： 1.为 uniqueInstance 分配内存空间 2.初始化 uniqueInstance 3.将 uniqueInstance 指向分配的内存地址 但是由于 JVM 具有指令重排的特性，执行顺序有可能变成 1&gt;3&gt;2。指令重排在单线程环境下不会出现问题，但是在多线程环境下会导致一个线程获得还没有初始化的实例。例如，线程 T1 执行了 1 和 3，此时 T2 调用 getUniqueInstance() 后发现 uniqueInstance 不为空，因此返回 uniqueInstance，但此时 uniqueInstance 还未被初始化。 使用 volatile 可以禁止 JVM 的指令重排，保证在多线程环境下也能正常运行。</p><h5 id="_5-静态内部类实现" tabindex="-1"><a class="header-anchor" href="#_5-静态内部类实现" aria-hidden="true">#</a> 5 静态内部类实现</h5><p>当 Singleton 类被加载时，静态内部类 SingletonHolder 没有被加载进内存。只有当调用 getUniqueInstance() 方法从而触发 SingletonHolder.INSTANCE 时 SingletonHolder 才会被加载，此时初始化 INSTANCE 实例，并且 JVM 能确保 INSTANCE 只被实例化一次。 这种方式不仅具有延迟初始化的好处，而且由 JVM 提供了对线程安全的支持。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Singleton {

    private Singleton() {
    }
    
    private static class SingletonHolder {
        private static final Singleton INSTANCE = new Singleton();
    }
    
    public static Singleton getUniqueInstance() {
        return SingletonHolder.INSTANCE;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_6-枚举实现" tabindex="-1"><a class="header-anchor" href="#_6-枚举实现" aria-hidden="true">#</a> 6 枚举实现</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public enum Singleton {

    INSTANCE;
    
    private String objName;
    
    public String getObjName() {
        return objName;
    }


    public void setObjName(String objName) {
        this.objName = objName;
    }


    public static void main(String[] args) {
        // 单例测试
        Singleton firstSingleton = Singleton.INSTANCE;
        firstSingleton.setObjName(&quot;firstName&quot;);
        System.out.println(firstSingleton.getObjName());
        Singleton secondSingleton = Singleton.INSTANCE;
        secondSingleton.setObjName(&quot;secondName&quot;);
        System.out.println(firstSingleton.getObjName());
        System.out.println(secondSingleton.getObjName());
    
        // 反射获取实例测试
        try {
            Singleton[] enumConstants = Singleton.class.getEnumConstants();
            for (Singleton enumConstant : enumConstants) {
                System.out.println(enumConstant.getObjName());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>firstName secondName secondName secondName</p></blockquote><p>该实现可以防止反射攻击。在其它实现中，通过 setAccessible() 方法可以将私有构造函数的访问级别设置为 public，然后调用构造函数从而实例化对象，如果要防止这种攻击，需要在构造函数中添加防止多次实例化的代码。该实现是由 JVM 保证只会实例化一次，因此不会出现上述的反射攻击。 该实现在多次序列化和序列化之后，不会得到多个实例。而其它实现需要使用 transient 修饰所有字段，并且实现序列化和反序列化的方法。</p><h4 id="case" tabindex="-1"><a class="header-anchor" href="#case" aria-hidden="true">#</a> CASE</h4><p>RedisSingleton、MySQLConnectionSingleton....</p><h4 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h4><ul><li>Logger Classes</li><li>Configuration Classes</li><li>Accesing resources in shared mode</li><li>Factories implemented as Singletons</li></ul><h4 id="jdk" tabindex="-1"><a class="header-anchor" href="#jdk" aria-hidden="true">#</a> JDK</h4><ul><li>java.lang.Runtime#getRuntime()</li><li>java.awt.Desktop#getDesktop()</li><li>java.lang.System#getSecurityManager()</li></ul><h3 id="简单工厂-simple-factory" tabindex="-1"><a class="header-anchor" href="#简单工厂-simple-factory" aria-hidden="true">#</a> 简单工厂（Simple Factory）</h3><h4 id="intent-1" tabindex="-1"><a class="header-anchor" href="#intent-1" aria-hidden="true">#</a> Intent</h4><p>在创建一个对象时不向客户暴露内部细节，并提供一个创建对象的通用接口。</p><h4 id="class-diagram-1" tabindex="-1"><a class="header-anchor" href="#class-diagram-1" aria-hidden="true">#</a> Class Diagram</h4><p>简单工厂把实例化的操作单独放到一个类中，这个类就成为简单工厂类，让简单工厂类来决定应该用哪个具体子类来实例化。 这样做能把客户类和具体子类的实现解耦，客户类不再需要知道有哪些子类以及应当实例化哪个子类。客户类往往有多个，如果不使用简单工厂，那么所有的客户类都要知道所有子类的细节。而且一旦子类发生改变，例如增加子类，那么所有的客户类都要进行修改。</p><h4 id="case-1" tabindex="-1"><a class="header-anchor" href="#case-1" aria-hidden="true">#</a> CASE</h4><p>显示器可以有多个品牌，定义不同的类型对应不同的品牌，通过类型找到对应的品牌，从而制造对应品牌的显示器。</p><h4 id="implementation-1" tabindex="-1"><a class="header-anchor" href="#implementation-1" aria-hidden="true">#</a> Implementation</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface Product {
}
public class ConcreteProduct implements Product {
}
public class ConcreteProduct1 implements Product {
}
public class ConcreteProduct2 implements Product {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下的 Client 类包含了实例化的代码，这是一种错误的实现。如果在客户类中存在这种实例化代码，就需要考虑将代码放到简单工厂中。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Client {

    public static void main(String[] args) {
        int type = 1;
        Product product;
        if (type == 1) {
            product = new ConcreteProduct1();
        } else if (type == 2) {
            product = new ConcreteProduct2();
        } else {
            product = new ConcreteProduct();
        }
        // do something with the product
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下的 SimpleFactory 是简单工厂实现，它被所有需要进行实例化的客户类调用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class SimpleFactory {

    public Product createProduct(int type) {
        if (type == 1) {
            return new ConcreteProduct1();
        } else if (type == 2) {
            return new ConcreteProduct2();
        }
        return new ConcreteProduct();
    }

}
public class Client {

    public static void main(String[] args) {
        SimpleFactory simpleFactory = new SimpleFactory();
        Product product = simpleFactory.createProduct(1);
        // do something with the product
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="工厂方法-factory-method" tabindex="-1"><a class="header-anchor" href="#工厂方法-factory-method" aria-hidden="true">#</a> 工厂方法（Factory Method）</h3><h4 id="intent-2" tabindex="-1"><a class="header-anchor" href="#intent-2" aria-hidden="true">#</a> Intent</h4><p>定义了一个创建对象的接口，但由子类决定要实例化哪个类。工厂方法把实例化操作推迟到子类。</p><h4 id="class-diagram-2" tabindex="-1"><a class="header-anchor" href="#class-diagram-2" aria-hidden="true">#</a> Class Diagram</h4><p>在简单工厂中，创建对象的是另一个类，而在工厂方法中，是由子类来创建对象。 下图中，Factory 有一个 doSomething() 方法，这个方法需要用到一个产品对象，这个产品对象由 factoryMethod() 方法创建。该方法是抽象的，需要由子类去实现。</p><h4 id="implementation-2" tabindex="-1"><a class="header-anchor" href="#implementation-2" aria-hidden="true">#</a> Implementation</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public abstract class Factory {
    abstract public Product factoryMethod();
    public void doSomething() {
        Product product = factoryMethod();
        // do something with the product
    }
}
public class ConcreteFactory extends Factory {
    public Product factoryMethod() {
        return new ConcreteProduct();
    }
}
public class ConcreteFactory1 extends Factory {
    public Product factoryMethod() {
        return new ConcreteProduct1();
    }
}
public class ConcreteFactory2 extends Factory {
    public Product factoryMethod() {
        return new ConcreteProduct2();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="case-2" tabindex="-1"><a class="header-anchor" href="#case-2" aria-hidden="true">#</a> CASE</h4><p>显示器工厂生产显示器，三星工厂生产三星显示器，飞利浦工厂生产飞利浦显示器。</p><h4 id="jdk-1" tabindex="-1"><a class="header-anchor" href="#jdk-1" aria-hidden="true">#</a> JDK</h4><ul><li>java.util.Calendar</li><li>java.util.ResourceBundle</li><li>java.text.NumberFormat</li><li>java.nio.charset.Charset</li><li>java.net.URLStreamHandlerFactory</li><li>java.util.EnumSet</li><li>javax.xml.bind.JAXBContext</li></ul><h3 id="抽象工厂-abstract-factory" tabindex="-1"><a class="header-anchor" href="#抽象工厂-abstract-factory" aria-hidden="true">#</a> 抽象工厂（Abstract Factory）</h3><h4 id="intent-3" tabindex="-1"><a class="header-anchor" href="#intent-3" aria-hidden="true">#</a> Intent</h4><p>提供一个接口，用于创建 相关的对象家族 。</p><h4 id="class-diagram-3" tabindex="-1"><a class="header-anchor" href="#class-diagram-3" aria-hidden="true">#</a> Class Diagram</h4><p>抽象工厂模式创建的是对象家族，也就是很多对象而不是一个对象，并且这些对象是相关的，也就是说必须一起创建出来。而工厂方法模式只是用于创建一个对象，这和抽象工厂模式有很大不同。 抽象工厂模式用到了工厂方法模式来创建单一对象，AbstractFactory 中的 createProductA() 和 createProductB() 方法都是让子类来实现，这两个方法单独来看就是在创建一个对象，这符合工厂方法模式的定义。 至于创建对象的家族这一概念是在 Client 体现，Client 要通过 AbstractFactory 同时调用两个方法来创建出两个对象，在这里这两个对象就有很大的相关性，Client 需要同时创建出这两个对象。 从高层次来看，抽象工厂使用了组合，即 Cilent 组合了 AbstractFactory，而工厂方法模式使用了继承。</p><h4 id="implementation-3" tabindex="-1"><a class="header-anchor" href="#implementation-3" aria-hidden="true">#</a> Implementation</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class AbstractProductA {
}
public class AbstractProductB {
}
public class ProductA1 extends AbstractProductA {
}
public class ProductA2 extends AbstractProductA {
}
public class ProductB1 extends AbstractProductB {
}
public class ProductB2 extends AbstractProductB {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public abstract class AbstractFactory {
    abstract AbstractProductA createProductA();
    abstract AbstractProductB createProductB();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class ConcreteFactory1 extends AbstractFactory {
    AbstractProductA createProductA() {
        return new ProductA1();
    }

    AbstractProductB createProductB() {
        return new ProductB1();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class ConcreteFactory2 extends AbstractFactory {
    AbstractProductA createProductA() {
        return new ProductA2();
    }

    AbstractProductB createProductB() {
        return new ProductB2();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Client {
    public static void main(String[] args) {
        AbstractFactory abstractFactory = new ConcreteFactory1();
        AbstractProductA productA = abstractFactory.createProductA();
        AbstractProductB productB = abstractFactory.createProductB();
        // do something with productA and productB
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="case-3" tabindex="-1"><a class="header-anchor" href="#case-3" aria-hidden="true">#</a> CASE</h4><p>球类工厂可以生产篮球和足球，球类工厂分为李宁工厂和安踏工厂，球类分为篮球和足球，具体产品为李宁篮球和安踏篮球，李宁足球和安踏足球，分别由李宁工厂和安踏工厂制造。</p><h4 id="jdk-2" tabindex="-1"><a class="header-anchor" href="#jdk-2" aria-hidden="true">#</a> JDK</h4><ul><li>javax.xml.parsers.DocumentBuilderFactory</li><li>javax.xml.transform.TransformerFactory</li><li>javax.xml.xpath.XPathFactory</li></ul><h3 id="建造者-builder" tabindex="-1"><a class="header-anchor" href="#建造者-builder" aria-hidden="true">#</a> 建造者（Builder）</h3><h4 id="intent-4" tabindex="-1"><a class="header-anchor" href="#intent-4" aria-hidden="true">#</a> Intent</h4><p>封装一个对象的构造过程，并允许按步骤构造。</p><h4 id="class-diagram-4" tabindex="-1"><a class="header-anchor" href="#class-diagram-4" aria-hidden="true">#</a> Class Diagram</h4><h4 id="implementation-4" tabindex="-1"><a class="header-anchor" href="#implementation-4" aria-hidden="true">#</a> Implementation</h4><p>以下是一个简易的 StringBuilder 实现，参考了 JDK 1.8 源码。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class AbstractStringBuilder {
    protected char[] value;

    protected int count;
    
    public AbstractStringBuilder(int capacity) {
        count = 0;
        value = new char[capacity];
    }
    
    public AbstractStringBuilder append(char c) {
        ensureCapacityInternal(count + 1);
        value[count++] = c;
        return this;
    }
    
    private void ensureCapacityInternal(int minimumCapacity) {
        // overflow-conscious code
        if (minimumCapacity - value.length &gt; 0)
            expandCapacity(minimumCapacity);
    }
    
    void expandCapacity(int minimumCapacity) {
        int newCapacity = value.length * 2 + 2;
        if (newCapacity - minimumCapacity &lt; 0)
            newCapacity = minimumCapacity;
        if (newCapacity &lt; 0) {
            if (minimumCapacity &lt; 0) // overflow
                throw new OutOfMemoryError();
            newCapacity = Integer.MAX_VALUE;
        }
        value = Arrays.copyOf(value, newCapacity);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class StringBuilder extends AbstractStringBuilder {
    public StringBuilder() {
        super(16);
    }

    @Override
    public String toString() {
        // Create a copy, don&#39;t share the array
        return new String(value, 0, count);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Client {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        final int count = 26;
        for (int i = 0; i &lt; count; i++) {
            sb.append((char) (&#39;a&#39; + i));
        }
        System.out.println(sb.toString());
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>abcdefghijklmnopqrstuvwxyz</p><h4 id="case-4" tabindex="-1"><a class="header-anchor" href="#case-4" aria-hidden="true">#</a> CASE</h4><p>装修公司的装修方案，实际上是不同品牌的商品（吊顶、涂料、地板、地砖）的组合。</p><h4 id="jdk-3" tabindex="-1"><a class="header-anchor" href="#jdk-3" aria-hidden="true">#</a> JDK</h4><ul><li>java.lang.StringBuilder</li><li>java.nio.ByteBuffer</li><li>java.lang.StringBuffer</li><li>java.lang.Appendable</li><li>Apache Camel builders</li></ul><h3 id="原型模式-prototype" tabindex="-1"><a class="header-anchor" href="#原型模式-prototype" aria-hidden="true">#</a> 原型模式（Prototype）</h3><h4 id="intent-5" tabindex="-1"><a class="header-anchor" href="#intent-5" aria-hidden="true">#</a> Intent</h4><p>使用原型实例指定要创建对象的类型，通过复制这个原型来创建新对象。</p><h4 id="class-diagram-5" tabindex="-1"><a class="header-anchor" href="#class-diagram-5" aria-hidden="true">#</a> Class Diagram</h4><h4 id="implementation-5" tabindex="-1"><a class="header-anchor" href="#implementation-5" aria-hidden="true">#</a> Implementation</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public abstract class Prototype {
    abstract Prototype myClone();
}
public class ConcretePrototype extends Prototype {

    private String filed;
    
    public ConcretePrototype(String filed) {
        this.filed = filed;
    }
    
    @Override
    Prototype myClone() {
        return new ConcretePrototype(filed);
    }
    
    @Override
    public String toString() {
        return filed;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Client {
    public static void main(String[] args) {
        Prototype prototype = new ConcretePrototype(&quot;abc&quot;);
        Prototype clone = prototype.myClone();
        System.out.println(clone.toString());
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>abc</p><h4 id="case-5" tabindex="-1"><a class="header-anchor" href="#case-5" aria-hidden="true">#</a> CASE</h4><p>上级考试多套试题，每人题目和答案乱序排列。</p><h4 id="jdk-4" tabindex="-1"><a class="header-anchor" href="#jdk-4" aria-hidden="true">#</a> JDK</h4><ul><li>java.lang.Object#clone()</li></ul><h2 id="结构型" tabindex="-1"><a class="header-anchor" href="#结构型" aria-hidden="true">#</a> 结构型</h2><h3 id="适配器-adapter" tabindex="-1"><a class="header-anchor" href="#适配器-adapter" aria-hidden="true">#</a> 适配器（Adapter）</h3><h4 id="intent-6" tabindex="-1"><a class="header-anchor" href="#intent-6" aria-hidden="true">#</a> Intent</h4><p>把一个类接口转换成另一个用户需要的接口。</p><h4 id="class-diagram-6" tabindex="-1"><a class="header-anchor" href="#class-diagram-6" aria-hidden="true">#</a> Class Diagram</h4><h4 id="implementation-6" tabindex="-1"><a class="header-anchor" href="#implementation-6" aria-hidden="true">#</a> Implementation</h4><p>鸭子（Duck）和火鸡（Turkey）拥有不同的叫声，Duck 的叫声调用 quack() 方法，而 Turkey 调用 gobble() 方法。 要求将 Turkey 的 gobble() 方法适配成 Duck 的 quack() 方法，从而让火鸡冒充鸭子！</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface Duck {
    void quack();
}
public interface Turkey {
    void gobble();
}
public class WildTurkey implements Turkey {
    @Override
    public void gobble() {
        System.out.println(&quot;gobble!&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class TurkeyAdapter implements Duck {
    Turkey turkey;

    public TurkeyAdapter(Turkey turkey) {
        this.turkey = turkey;
    }
    
    @Override
    public void quack() {
        turkey.gobble();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Client {
    public static void main(String[] args) {
        Turkey turkey = new WildTurkey();
        Duck duck = new TurkeyAdapter(turkey);
        duck.quack();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="case-6" tabindex="-1"><a class="header-anchor" href="#case-6" aria-hidden="true">#</a> CASE</h4><ul><li>中台统一消息处理：业务字段和中台字段映射，然后通过反射进行设置值。</li><li>消息队列，发送消息，消费消息，通过反射调用特定的方法传特定的参数。</li></ul><h4 id="jdk-5" tabindex="-1"><a class="header-anchor" href="#jdk-5" aria-hidden="true">#</a> JDK</h4><ul><li>java.util.Arrays#asList()</li><li>java.util.Collections#list()</li><li>java.util.Collections#enumeration()</li><li>javax.xml.bind.annotation.adapters.XMLAdapter</li></ul><h3 id="桥接-bridge" tabindex="-1"><a class="header-anchor" href="#桥接-bridge" aria-hidden="true">#</a> 桥接（Bridge）</h3><h4 id="intent-7" tabindex="-1"><a class="header-anchor" href="#intent-7" aria-hidden="true">#</a> Intent</h4><p>将抽象与实现分离开来，使它们可以独立变化。</p><h4 id="class-diagram-7" tabindex="-1"><a class="header-anchor" href="#class-diagram-7" aria-hidden="true">#</a> Class Diagram</h4><ul><li>Abstraction：定义抽象类的接口</li><li>Implementor：定义实现类接口</li></ul><h4 id="implementation-7" tabindex="-1"><a class="header-anchor" href="#implementation-7" aria-hidden="true">#</a> Implementation</h4><p>RemoteControl 表示遥控器，指代 Abstraction。 TV 表示电视，指代 Implementor。 桥接模式将遥控器和电视分离开来，从而可以独立改变遥控器或者电视的实现。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public abstract class TV {
    public abstract void on();

    public abstract void off();
    
    public abstract void tuneChannel();

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Sony extends TV {
    @Override
    public void on() {
        System.out.println(&quot;Sony.on()&quot;);
    }

    @Override
    public void off() {
        System.out.println(&quot;Sony.off()&quot;);
    }
    
    @Override
    public void tuneChannel() {
        System.out.println(&quot;Sony.tuneChannel()&quot;);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class RCA extends TV {
    @Override
    public void on() {
        System.out.println(&quot;RCA.on()&quot;);
    }

    @Override
    public void off() {
        System.out.println(&quot;RCA.off()&quot;);
    }
    
    @Override
    public void tuneChannel() {
        System.out.println(&quot;RCA.tuneChannel()&quot;);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public abstract class RemoteControl {
    protected TV tv;

    public RemoteControl(TV tv) {
        this.tv = tv;
    }
    
    public abstract void on();
    
    public abstract void off();
    
    public abstract void tuneChannel();

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class ConcreteRemoteControl1 extends RemoteControl {
    public ConcreteRemoteControl1(TV tv) {
        super(tv);
    }

    @Override
    public void on() {
        System.out.println(&quot;ConcreteRemoteControl1.on()&quot;);
        tv.on();
    }
    
    @Override
    public void off() {
        System.out.println(&quot;ConcreteRemoteControl1.off()&quot;);
        tv.off();
    }
    
    @Override
    public void tuneChannel() {
        System.out.println(&quot;ConcreteRemoteControl1.tuneChannel()&quot;);
        tv.tuneChannel();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class ConcreteRemoteControl2 extends RemoteControl {
    public ConcreteRemoteControl2(TV tv) {
        super(tv);
    }

    @Override
    public void on() {
        System.out.println(&quot;ConcreteRemoteControl2.on()&quot;);
        tv.on();
    }
    
    @Override
    public void off() {
        System.out.println(&quot;ConcreteRemoteControl2.off()&quot;);
        tv.off();
    }
    
    @Override
    public void tuneChannel() {
        System.out.println(&quot;ConcreteRemoteControl2.tuneChannel()&quot;);
        tv.tuneChannel();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Client {
    public static void main(String[] args) {
        RemoteControl remoteControl1 = new ConcreteRemoteControl1(new RCA());
        remoteControl1.on();
        remoteControl1.off();
        remoteControl1.tuneChannel();
        RemoteControl remoteControl2 = new ConcreteRemoteControl2(new Sony());
        remoteControl2.on();
        remoteControl2.off();
        remoteControl2.tuneChannel();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="case-7" tabindex="-1"><a class="header-anchor" href="#case-7" aria-hidden="true">#</a> CASE</h4><p>多支付渠道（微信、支付宝）与多支付模式（刷脸、指纹）</p><h4 id="jdk-6" tabindex="-1"><a class="header-anchor" href="#jdk-6" aria-hidden="true">#</a> JDK</h4><ul><li>AWT (It provides an abstraction layer which maps onto the native OS the windowing support.)</li><li>JDBC</li></ul><h3 id="组合-composite" tabindex="-1"><a class="header-anchor" href="#组合-composite" aria-hidden="true">#</a> 组合（Composite）</h3><h4 id="intent-8" tabindex="-1"><a class="header-anchor" href="#intent-8" aria-hidden="true">#</a> Intent</h4><p>将对象组合成树形结构来表示“整体/部分”层次关系，允许用户以相同的方式处理单独对象和组合对象。</p><h4 id="class-diagram-8" tabindex="-1"><a class="header-anchor" href="#class-diagram-8" aria-hidden="true">#</a> Class Diagram</h4><p>组件（Component）类是组合类（Composite）和叶子类（Leaf）的父类，可以把组合类看成是树的中间节点。 组合对象拥有一个或者多个组件对象，因此组合对象的操作可以委托给组件对象去处理，而组件对象可以是另一个组合对象或者叶子对象。</p><h4 id="implementation-8" tabindex="-1"><a class="header-anchor" href="#implementation-8" aria-hidden="true">#</a> Implementation</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public abstract class Component {
    protected String name;

    public Component(String name) {
        this.name = name;
    }
    
    public void print() {
        print(0);
    }
    
    abstract void print(int level);
    
    abstract public void add(Component component);
    
    abstract public void remove(Component component);

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Composite extends Component {

    private List&lt;Component&gt; child;
    
    public Composite(String name) {
        super(name);
        child = new ArrayList&lt;&gt;();
    }
    
    @Override
    void print(int level) {
        for (int i = 0; i &lt; level; i++) {
            System.out.print(&quot;--&quot;);
        }
        System.out.println(&quot;Composite:&quot; + name);
        for (Component component : child) {
            component.print(level + 1);
        }
    }
    
    @Override
    public void add(Component component) {
        child.add(component);
    }
    
    @Override
    public void remove(Component component) {
        child.remove(component);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Leaf extends Component {
    public Leaf(String name) {
        super(name);
    }

    @Override
    void print(int level) {
        for (int i = 0; i &lt; level; i++) {
            System.out.print(&quot;--&quot;);
        }
        System.out.println(&quot;left:&quot; + name);
    }
    
    @Override
    public void add(Component component) {
        throw new UnsupportedOperationException(); // 牺牲透明性换取单一职责原则，这样就不用考虑是叶子节点还是组合节点
    }
    
    @Override
    public void remove(Component component) {
        throw new UnsupportedOperationException();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Client {
    public static void main(String[] args) {
        Composite root = new Composite(&quot;root&quot;);
        Component node1 = new Leaf(&quot;1&quot;);
        Component node2 = new Composite(&quot;2&quot;);
        Component node3 = new Leaf(&quot;3&quot;);
        root.add(node1);
        root.add(node2);
        root.add(node3);
        Component node21 = new Leaf(&quot;21&quot;);
        Component node22 = new Composite(&quot;22&quot;);
        node2.add(node21);
        node2.add(node22);
        Component node221 = new Leaf(&quot;221&quot;);
        node22.add(node221);
        root.print();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Composite:root --left:1 --Composite:2 ----left:21 ----Composite:22 ------left:221 --left:3</p></blockquote><h4 id="case-8" tabindex="-1"><a class="header-anchor" href="#case-8" aria-hidden="true">#</a> CASE</h4><p>营销规则决策树，根据性别、年龄来发放不同类型的优惠券，从而刺激消费起到精准用户促活的目的。</p><h4 id="jdk-7" tabindex="-1"><a class="header-anchor" href="#jdk-7" aria-hidden="true">#</a> JDK</h4><ul><li>javax.swing.JComponent#add(Component)</li><li>java.awt.Container#add(Component)</li><li>java.util.Map#putAll(Map)</li><li>java.util.List#addAll(Collection)</li><li>java.util.Set#addAll(Collection)</li></ul><h3 id="装饰-decorator" tabindex="-1"><a class="header-anchor" href="#装饰-decorator" aria-hidden="true">#</a> 装饰（Decorator）</h3><h4 id="intent-9" tabindex="-1"><a class="header-anchor" href="#intent-9" aria-hidden="true">#</a> Intent</h4><p>为对象动态添加功能。</p><h4 id="class-diagram-9" tabindex="-1"><a class="header-anchor" href="#class-diagram-9" aria-hidden="true">#</a> Class Diagram</h4><p>装饰者（Decorator）和具体组件（ConcreteComponent）都继承自组件（Component），具体组件的方法实现不需要依赖于其它对象，而装饰者组合了一个组件，这样它可以装饰其它装饰者或者具体组件。所谓装饰，就是把这个装饰者套在被装饰者之上，从而动态扩展被装饰者的功能。装饰者的方法有一部分是自己的，这属于它的功能，然后调用被装饰者的方法实现，从而也保留了被装饰者的功能。可以看到，具体组件应当是装饰层次的最低层，因为只有具体组件的方法实现不需要依赖于其它对象。</p><h4 id="implementation-9" tabindex="-1"><a class="header-anchor" href="#implementation-9" aria-hidden="true">#</a> Implementation</h4><p>设计不同种类的饮料，饮料可以添加配料，比如可以添加牛奶，并且支持动态添加新配料。每增加一种配料，该饮料的价格就会增加，要求计算一种饮料的价格。 下图表示在 DarkRoast 饮料上新增新添加 Mocha 配料，之后又添加了 Whip 配料。DarkRoast 被 Mocha 包裹，Mocha 又被 Whip 包裹。它们都继承自相同父类，都有 cost() 方法，外层类的 cost() 方法调用了内层类的 cost() 方法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface Beverage {
    double cost();
}
public class DarkRoast implements Beverage {
    @Override
    public double cost() {
        return 1;
    }
}
public class HouseBlend implements Beverage {
    @Override
    public double cost() {
        return 1;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public abstract class CondimentDecorator implements Beverage {
    protected Beverage beverage;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Milk extends CondimentDecorator {

    public Milk(Beverage beverage) {
        this.beverage = beverage;
    }
    
    @Override
    public double cost() {
        return 1 + beverage.cost();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Mocha extends CondimentDecorator {

    public Mocha(Beverage beverage) {
        this.beverage = beverage;
    }
    
    @Override
    public double cost() {
        return 1 + beverage.cost();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Client {

    public static void main(String[] args) {
        Beverage beverage = new HouseBlend();
        beverage = new Mocha(beverage);
        beverage = new Milk(beverage);
        System.out.println(beverage.cost());
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>3.0</p></blockquote><p><strong>设计原则</strong> 类应该<strong>对扩展开放，对修改关闭</strong>：也就是添加新功能时不需要修改代码。饮料可以动态添加新的配料，而不需要去修改饮料的代码。 不可能把所有的类设计成都满足这一原则，应当把该原则应用于最有可能发生改变的地方。</p><h4 id="case-9" tabindex="-1"><a class="header-anchor" href="#case-9" aria-hidden="true">#</a> CASE</h4><p>SSO单点登录功能拓展，增加拦截用户访问方法范围。</p><h4 id="jdk-8" tabindex="-1"><a class="header-anchor" href="#jdk-8" aria-hidden="true">#</a> JDK</h4><ul><li>java.io.BufferedInputStream(InputStream)</li><li>java.io.DataInputStream(InputStream)</li><li>java.io.BufferedOutputStream(OutputStream)</li><li>java.util.zip.ZipOutputStream(OutputStream)</li><li>java.util.Collections#checkedList|Map|Set|SortedSet|SortedMap</li></ul><h3 id="外观-facade" tabindex="-1"><a class="header-anchor" href="#外观-facade" aria-hidden="true">#</a> 外观（Facade）</h3><h4 id="intent-10" tabindex="-1"><a class="header-anchor" href="#intent-10" aria-hidden="true">#</a> Intent</h4><p>提供了一个统一的接口，用来访问子系统中的一群接口，从而让子系统更容易使用。</p><h4 id="class-diagram-10" tabindex="-1"><a class="header-anchor" href="#class-diagram-10" aria-hidden="true">#</a> Class Diagram</h4><h4 id="implementation-10" tabindex="-1"><a class="header-anchor" href="#implementation-10" aria-hidden="true">#</a> Implementation</h4><p>观看电影需要操作很多电器，使用外观模式实现一键看电影功能。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class SubSystem {
    public void turnOnTV() {
        System.out.println(&quot;turnOnTV()&quot;);
    }

    public void setCD(String cd) {
        System.out.println(&quot;setCD( &quot; + cd + &quot; )&quot;);
    }
    
    public void startWatching(){
        System.out.println(&quot;startWatching()&quot;);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Facade {
    private SubSystem subSystem = new SubSystem();

    public void watchMovie() {
        subSystem.turnOnTV();
        subSystem.setCD(&quot;a movie&quot;);
        subSystem.startWatching();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Client {
    public static void main(String[] args) {
        Facade facade = new Facade();
        facade.watchMovie();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="case-10" tabindex="-1"><a class="header-anchor" href="#case-10" aria-hidden="true">#</a> CASE</h4><p>基于SpringBoot开发门面模式中间件，统一控制接口白名单场景。 <strong>设计原则</strong> 最少知识原则：只和你的密友谈话。也就是说客户对象所需要交互的对象应当尽可能少。</p><h3 id="享元-flyweight" tabindex="-1"><a class="header-anchor" href="#享元-flyweight" aria-hidden="true">#</a> 享元（Flyweight）</h3><h4 id="intent-11" tabindex="-1"><a class="header-anchor" href="#intent-11" aria-hidden="true">#</a> Intent</h4><p>利用共享的方式来支持大量细粒度的对象，这些对象一部分内部状态是相同的。</p><h4 id="class-diagram-11" tabindex="-1"><a class="header-anchor" href="#class-diagram-11" aria-hidden="true">#</a> Class Diagram</h4><ul><li>Flyweight：享元对象</li><li>IntrinsicState：内部状态，享元对象共享内部状态</li><li>ExtrinsicState：外部状态，每个享元对象的外部状态不同</li></ul><h4 id="implementation-11" tabindex="-1"><a class="header-anchor" href="#implementation-11" aria-hidden="true">#</a> Implementation</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface Flyweight {
    void doOperation(String extrinsicState);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class ConcreteFlyweight implements Flyweight {

    private String intrinsicState;
    
    public ConcreteFlyweight(String intrinsicState) {
        this.intrinsicState = intrinsicState;
    }
    
    @Override
    public void doOperation(String extrinsicState) {
        System.out.println(&quot;Object address: &quot; + System.identityHashCode(this));
        System.out.println(&quot;IntrinsicState: &quot; + intrinsicState);
        System.out.println(&quot;ExtrinsicState: &quot; + extrinsicState);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class FlyweightFactory {

    private HashMap&lt;String, Flyweight&gt; flyweights = new HashMap&lt;&gt;();
    
    Flyweight getFlyweight(String intrinsicState) {
        if (!flyweights.containsKey(intrinsicState)) {
            Flyweight flyweight = new ConcreteFlyweight(intrinsicState);
            flyweights.put(intrinsicState, flyweight);
        }
        return flyweights.get(intrinsicState);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Client {

    public static void main(String[] args) {
        FlyweightFactory factory = new FlyweightFactory();
        Flyweight flyweight1 = factory.getFlyweight(&quot;aa&quot;);
        Flyweight flyweight2 = factory.getFlyweight(&quot;aa&quot;);
        flyweight1.doOperation(&quot;x&quot;);
        flyweight2.doOperation(&quot;y&quot;);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Object address: 1163157884 IntrinsicState: aa ExtrinsicState: x Object address: 1163157884 IntrinsicState: aa ExtrinsicState: y</p><h4 id="case-11" tabindex="-1"><a class="header-anchor" href="#case-11" aria-hidden="true">#</a> CASE</h4><h4 id="jdk-9" tabindex="-1"><a class="header-anchor" href="#jdk-9" aria-hidden="true">#</a> JDK</h4><p>Java 利用缓存来加速大量小对象的访问时间。</p><ul><li>java.lang.Integer#valueOf(int)</li><li>java.lang.Boolean#valueOf(boolean)</li><li>java.lang.Byte#valueOf(byte)</li><li>java.lang.Character#valueOf(char)</li></ul><h3 id="代理-proxy" tabindex="-1"><a class="header-anchor" href="#代理-proxy" aria-hidden="true">#</a> 代理（Proxy）</h3><h4 id="intent-12" tabindex="-1"><a class="header-anchor" href="#intent-12" aria-hidden="true">#</a> Intent</h4><p>控制对其它对象的访问。</p><h4 id="class-diagram-12" tabindex="-1"><a class="header-anchor" href="#class-diagram-12" aria-hidden="true">#</a> Class Diagram</h4><p>代理有以下四类：</p><ul><li>远程代理（Remote Proxy）：控制对远程对象（不同地址空间）的访问，它负责将请求及其参数进行编码，并向不同地址空间中的对象发送已经编码的请求。</li><li>虚拟代理（Virtual Proxy）：根据需要创建开销很大的对象，它可以缓存实体的附加信息，以便延迟对它的访问，例如在网站加载一个很大图片时，不能马上完成，可以用虚拟代理缓存图片的大小信息，然后生成一张临时图片代替原始图片。</li><li>保护代理（Protection Proxy）：按权限控制对象的访问，它负责检查调用者是否具有实现一个请求所必须的访问权限。</li><li>智能代理（Smart Reference）：取代了简单的指针，它在访问对象时执行一些附加操作：记录对象的引用次数；当第一次引用一个对象时，将它装入内存；在访问一个实际对象前，检查是否已经锁定了它，以确保其它对象不能改变它。</li></ul><h4 id="implementation-12" tabindex="-1"><a class="header-anchor" href="#implementation-12" aria-hidden="true">#</a> Implementation</h4><p>以下是一个虚拟代理的实现，模拟了图片延迟加载的情况下使用与图片大小相等的临时内容去替换原始图片，直到图片加载完成才将图片显示出来。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface Image {
    void showImage();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class HighResolutionImage implements Image {

    private URL imageURL;
    private long startTime;
    private int height;
    private int width;
    
    public int getHeight() {
        return height;
    }
    
    public int getWidth() {
        return width;
    }
    
    public HighResolutionImage(URL imageURL) {
        this.imageURL = imageURL;
        this.startTime = System.currentTimeMillis();
        this.width = 600;
        this.height = 600;
    }
    
    public boolean isLoad() {
        // 模拟图片加载，延迟 3s 加载完成
        long endTime = System.currentTimeMillis();
        return endTime - startTime &gt; 3000;
    }
    
    @Override
    public void showImage() {
        System.out.println(&quot;Real Image: &quot; + imageURL);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class ImageProxy implements Image {

    private HighResolutionImage highResolutionImage;
    
    public ImageProxy(HighResolutionImage highResolutionImage) {
        this.highResolutionImage = highResolutionImage;
    }
    
    @Override
    public void showImage() {
        while (!highResolutionImage.isLoad()) {
            try {
                System.out.println(&quot;Temp Image: &quot; + highResolutionImage.getWidth() + &quot; &quot; + highResolutionImage.getHeight());
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        highResolutionImage.showImage();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class ImageViewer {

    public static void main(String[] args) throws Exception {
        String image = &quot;http://image.jpg&quot;;
        URL url = new URL(image);
        HighResolutionImage highResolutionImage = new HighResolutionImage(url);
        ImageProxy imageProxy = new ImageProxy(highResolutionImage);
        imageProxy.showImage();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="case-12" tabindex="-1"><a class="header-anchor" href="#case-12" aria-hidden="true">#</a> CASE</h4><p>模拟mybatis-spring中定义DAO接口，使用代理类方式操作数据库原理实现场景。</p><h4 id="jdk-10" tabindex="-1"><a class="header-anchor" href="#jdk-10" aria-hidden="true">#</a> JDK</h4><ul><li>java.lang.reflect.Proxy</li><li>RMI 参考资料</li><li>弗里曼. Head First 设计模式 [M]. 中国电力出版社, 2007.</li><li>Gamma E. 设计模式: 可复用面向对象软件的基础 [M]. 机械工业出版社, 2007.</li><li>Bloch J. Effective java[M]. Addison-Wesley Professional, 2017.</li><li>Design Patterns</li><li>Design patterns implemented in Java</li><li>The breakdown of design patterns in #### JDK</li></ul><h2 id="行为型" tabindex="-1"><a class="header-anchor" href="#行为型" aria-hidden="true">#</a> 行为型</h2><h3 id="责任链-chain-of-responsibility" tabindex="-1"><a class="header-anchor" href="#责任链-chain-of-responsibility" aria-hidden="true">#</a> 责任链（Chain Of Responsibility）</h3><h4 id="intent-13" tabindex="-1"><a class="header-anchor" href="#intent-13" aria-hidden="true">#</a> Intent</h4><p>使多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合关系。将这些对象连成一条链，并沿着这条链发送该请求，直到有一个对象处理它为止。</p><h4 id="class-diagram-13" tabindex="-1"><a class="header-anchor" href="#class-diagram-13" aria-hidden="true">#</a> Class Diagram</h4><ul><li>Handler：定义处理请求的接口，并且实现后继链（successor）</li></ul><h4 id="implementation-13" tabindex="-1"><a class="header-anchor" href="#implementation-13" aria-hidden="true">#</a> Implementation</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public abstract class Handler {

    protected Handler successor;


    public Handler(Handler successor) {
        this.successor = successor;
    }


    protected abstract void handleRequest(Request request);

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class ConcreteHandler1 extends Handler {

    public ConcreteHandler1(Handler successor) {
        super(successor);
    }


    @Override
    protected void handleRequest(Request request) {
        if (request.getType() == RequestType.TYPE1) {
            System.out.println(request.getName() + &quot; is handle by ConcreteHandler1&quot;);
            return;
        }
        if (successor != null) {
            successor.handleRequest(request);
        }
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class ConcreteHandler2 extends Handler {

    public ConcreteHandler2(Handler successor) {
        super(successor);
    }


    @Override
    protected void handleRequest(Request request) {
        if (request.getType() == RequestType.TYPE2) {
            System.out.println(request.getName() + &quot; is handle by ConcreteHandler2&quot;);
            return;
        }
        if (successor != null) {
            successor.handleRequest(request);
        }
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Request {

    private RequestType type;
    private String name;


    public Request(RequestType type, String name) {
        this.type = type;
        this.name = name;
    }


    public RequestType getType() {
        return type;
    }


    public String getName() {
        return name;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public enum RequestType {
    TYPE1, TYPE2
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Client {

    public static void main(String[] args) {
    
        Handler handler1 = new ConcreteHandler1(null);
        Handler handler2 = new ConcreteHandler2(handler1);
    
        Request request1 = new Request(RequestType.TYPE1, &quot;request1&quot;);
        handler2.handleRequest(request1);
    
        Request request2 = new Request(RequestType.TYPE2, &quot;request2&quot;);
        handler2.handleRequest(request2);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>request1 is handle by ConcreteHandler1 request2 is handle by ConcreteHandler2</p></blockquote><h4 id="case-13" tabindex="-1"><a class="header-anchor" href="#case-13" aria-hidden="true">#</a> CASE</h4><p>模拟618、双11电商大促期间，项目上线流程多级负责人审批场景。</p><h4 id="jdk-11" tabindex="-1"><a class="header-anchor" href="#jdk-11" aria-hidden="true">#</a> JDK</h4><ul><li>java.util.logging.Logger#log()</li><li>Apache Commons Chain</li><li>javax.servlet.Filter#doFilter()</li></ul><h3 id="命令-command" tabindex="-1"><a class="header-anchor" href="#命令-command" aria-hidden="true">#</a> 命令（Command）</h3><h4 id="intent-14" tabindex="-1"><a class="header-anchor" href="#intent-14" aria-hidden="true">#</a> Intent</h4><p>将命令封装成对象中，具有以下作用：</p><ul><li>使用命令来参数化其它对象</li><li>将命令放入队列中进行排队</li><li>将命令的操作记录到日志中</li><li>支持可撤销的操作</li></ul><h4 id="class-diagram-14" tabindex="-1"><a class="header-anchor" href="#class-diagram-14" aria-hidden="true">#</a> Class Diagram</h4><ul><li>Command：命令</li><li>Receiver：命令接收者，也就是命令真正的执行者</li><li>Invoker：通过它来调用命令</li><li>Client：可以设置命令与命令的接收者</li></ul><h4 id="implementation-14" tabindex="-1"><a class="header-anchor" href="#implementation-14" aria-hidden="true">#</a> Implementation</h4><p>设计一个遥控器，可以控制电灯开关。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface Command {
    void execute();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class LightOnCommand implements Command {
    Light light;

    public LightOnCommand(Light light) {
        this.light = light;
    }
    
    @Override
    public void execute() {
        light.on();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class LightOffCommand implements Command {
    Light light;

    public LightOffCommand(Light light) {
        this.light = light;
    }
    
    @Override
    public void execute() {
        light.off();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Light {

    public void on() {
        System.out.println(&quot;Light is on!&quot;);
    }
    
    public void off() {
        System.out.println(&quot;Light is off!&quot;);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/** * 遥控器 */

public class Invoker {
    private Command[] onCommands;
    private Command[] offCommands;
    private final int slotNum = 7;

    public Invoker() {
        this.onCommands = new Command[slotNum];
        this.offCommands = new Command[slotNum];
    }
    
    public void setOnCommand(Command command, int slot) {
        onCommands[slot] = command;
    }
    
    public void setOffCommand(Command command, int slot) {
        offCommands[slot] = command;
    }
    
    public void onButtonWasPushed(int slot) {
        onCommands[slot].execute();
    }
    
    public void offButtonWasPushed(int slot) {
        offCommands[slot].execute();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Client {
    public static void main(String[] args) {
        Invoker invoker = new Invoker();
        Light light = new Light();
        Command lightOnCommand = new LightOnCommand(light);
        Command lightOffCommand = new LightOffCommand(light);
        invoker.setOnCommand(lightOnCommand, 0);
        invoker.setOffCommand(lightOffCommand, 0);
        invoker.onButtonWasPushed(0);
        invoker.offButtonWasPushed(0);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="case-14" tabindex="-1"><a class="header-anchor" href="#case-14" aria-hidden="true">#</a> CASE</h4><p>高档餐厅八大菜系，小二点单厨师烹饪。</p><h4 id="jdk-12" tabindex="-1"><a class="header-anchor" href="#jdk-12" aria-hidden="true">#</a> JDK</h4><ul><li>java.lang.Runnable</li><li>Netflix Hystrix</li><li>javax.swing.Action</li></ul><h3 id="解释器-interpreter" tabindex="-1"><a class="header-anchor" href="#解释器-interpreter" aria-hidden="true">#</a> 解释器（Interpreter）</h3><h4 id="intent-15" tabindex="-1"><a class="header-anchor" href="#intent-15" aria-hidden="true">#</a> Intent</h4><p>为语言创建解释器，通常由语言的语法和语法分析来定义。</p><h4 id="class-diagram-15" tabindex="-1"><a class="header-anchor" href="#class-diagram-15" aria-hidden="true">#</a> Class Diagram</h4><ul><li>TerminalExpression：终结符表达式，每个终结符都需要一个 TerminalExpression。</li><li>Context：上下文，包含解释器之外的一些全局信息。</li></ul><h4 id="implementation-15" tabindex="-1"><a class="header-anchor" href="#implementation-15" aria-hidden="true">#</a> Implementation</h4><p>以下是一个规则检验器实现，具有 and 和 or 规则，通过规则可以构建一颗解析树，用来检验一个文本是否满足解析树定义的规则。 例如一颗解析树为 D And (A Or (B C))，文本 &quot;D A&quot; 满足该解析树定义的规则。 这里的 Context 指的是 String。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public abstract class Expression {
    public abstract boolean interpret(String str);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class TerminalExpression extends Expression {

    private String literal = null;
    
    public TerminalExpression(String str) {
        literal = str;
    }
    
    public boolean interpret(String str) {
        StringTokenizer st = new StringTokenizer(str);
        while (st.hasMoreTokens()) {
            String test = st.nextToken();
            if (test.equals(literal)) {
                return true;
            }
        }
        return false;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class AndExpression extends Expression {

    private Expression expression1 = null;
    private Expression expression2 = null;
    
    public AndExpression(Expression expression1, Expression expression2) {
        this.expression1 = expression1;
        this.expression2 = expression2;
    }
    
    public boolean interpret(String str) {
        return expression1.interpret(str) &amp;&amp; expression2.interpret(str);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class OrExpression extends Expression {
    private Expression expression1 = null;
    private Expression expression2 = null;

    public OrExpression(Expression expression1, Expression expression2) {
        this.expression1 = expression1;
        this.expression2 = expression2;
    }
    
    public boolean interpret(String str) {
        return expression1.interpret(str) || expression2.interpret(str);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Client {

    /**     * 构建解析树     */
    public static Expression buildInterpreterTree() {
        // Literal
        Expression terminal1 = new TerminalExpression(&quot;A&quot;);
        Expression terminal2 = new TerminalExpression(&quot;B&quot;);
        Expression terminal3 = new TerminalExpression(&quot;C&quot;);
        Expression terminal4 = new TerminalExpression(&quot;D&quot;);
        // B C
        Expression alternation1 = new OrExpression(terminal2, terminal3);
        // A Or (B C)
        Expression alternation2 = new OrExpression(terminal1, alternation1);
        // D And (A Or (B C))
        return new AndExpression(terminal4, alternation2);
    }
    
    public static void main(String[] args) {
        Expression define = buildInterpreterTree();
        String context1 = &quot;D A&quot;;
        String context2 = &quot;A B&quot;;
        System.out.println(define.interpret(context1));
        System.out.println(define.interpret(context2));
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>true false</p></blockquote><h4 id="case-15" tabindex="-1"><a class="header-anchor" href="#case-15" aria-hidden="true">#</a> CASE</h4><h4 id="jdk-13" tabindex="-1"><a class="header-anchor" href="#jdk-13" aria-hidden="true">#</a> JDK</h4><ul><li>java.util.Pattern</li><li>java.text.Normalizer</li><li>All subclasses of java.text.Format</li><li>javax.el.ELResolver</li></ul><h3 id="迭代器-iterator" tabindex="-1"><a class="header-anchor" href="#迭代器-iterator" aria-hidden="true">#</a> 迭代器（Iterator）</h3><h4 id="intent-16" tabindex="-1"><a class="header-anchor" href="#intent-16" aria-hidden="true">#</a> Intent</h4><p>提供一种顺序访问聚合对象元素的方法，并且不暴露聚合对象的内部表示。</p><h4 id="class-diagram-16" tabindex="-1"><a class="header-anchor" href="#class-diagram-16" aria-hidden="true">#</a> Class Diagram</h4><ul><li>Aggregate 是聚合类，其中 createIterator() 方法可以产生一个 Iterator；</li><li>Iterator 主要定义了 hasNext() 和 next() 方法。</li><li>Client 组合了 Aggregate，为了迭代遍历 Aggregate，也需要组合 Iterator。</li></ul><h4 id="implementation-16" tabindex="-1"><a class="header-anchor" href="#implementation-16" aria-hidden="true">#</a> Implementation</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface Aggregate {
    Iterator createIterator();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class ConcreteAggregate implements Aggregate {

    private Integer[] items;
    
    public ConcreteAggregate() {
        items = new Integer[10];
        for (int i = 0; i &lt; items.length; i++) {
            items[i] = i;
        }
    }
    
    @Override
    public Iterator createIterator() {
        return new ConcreteIterator&lt;Integer&gt;(items);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface Iterator&lt;Item&gt; {

    Item next();
    
    boolean hasNext();

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class ConcreteIterator&lt;Item&gt; implements Iterator {

    private Item[] items;
    private int position = 0;
    
    public ConcreteIterator(Item[] items) {
        this.items = items;
    }
    
    @Override
    public Object next() {
        return items[position++];
    }
    
    @Override
    public boolean hasNext() {
        return position &lt; items.length;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Client {

    public static void main(String[] args) {
        Aggregate aggregate = new ConcreteAggregate();
        Iterator&lt;Integer&gt; iterator = aggregate.createIterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="case-16" tabindex="-1"><a class="header-anchor" href="#case-16" aria-hidden="true">#</a> CASE</h4><p>模拟公司组织架构树结构关系，深度迭代遍历人员信息输出。</p><h4 id="jdk-14" tabindex="-1"><a class="header-anchor" href="#jdk-14" aria-hidden="true">#</a> JDK</h4><ul><li>java.util.Iterator</li><li>java.util.Enumeration</li></ul><h3 id="中介者-mediator" tabindex="-1"><a class="header-anchor" href="#中介者-mediator" aria-hidden="true">#</a> 中介者（Mediator）</h3><h4 id="intent-17" tabindex="-1"><a class="header-anchor" href="#intent-17" aria-hidden="true">#</a> Intent</h4><p>集中相关对象之间复杂的沟通和控制方式。</p><h4 id="class-diagram-17" tabindex="-1"><a class="header-anchor" href="#class-diagram-17" aria-hidden="true">#</a> Class Diagram</h4><ul><li>Mediator：中介者，定义一个接口用于与各同事（Colleague）对象通信。</li><li>Colleague：同事，相关对象</li></ul><h4 id="implementation-17" tabindex="-1"><a class="header-anchor" href="#implementation-17" aria-hidden="true">#</a> Implementation</h4><p>Alarm（闹钟）、CoffeePot（咖啡壶）、Calendar（日历）、Sprinkler（喷头）是一组相关的对象，在某个对象的事件产生时需要去操作其它对象，形成了下面这种依赖结构：</p><p>使用中介者模式可以将复杂的依赖结构变成星形结构：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public abstract class Colleague {
    public abstract void onEvent(Mediator mediator);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Alarm extends Colleague {

    @Override
    public void onEvent(Mediator mediator) {
        mediator.doEvent(&quot;alarm&quot;);
    }
    
    public void doAlarm() {
        System.out.println(&quot;doAlarm()&quot;);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class CoffeePot extends Colleague {
    @Override
    public void onEvent(Mediator mediator) {
        mediator.doEvent(&quot;coffeePot&quot;);
    }

    public void doCoffeePot() {
        System.out.println(&quot;doCoffeePot()&quot;);
    }

}
public class Calender extends Colleague {
    @Override
    public void onEvent(Mediator mediator) {
        mediator.doEvent(&quot;calender&quot;);
    }

    public void doCalender() {
        System.out.println(&quot;doCalender()&quot;);
    }

}
public class Sprinkler extends Colleague {
    @Override
    public void onEvent(Mediator mediator) {
        mediator.doEvent(&quot;sprinkler&quot;);
    }

    public void doSprinkler() {
        System.out.println(&quot;doSprinkler()&quot;);
    }

}
public abstract class Mediator {
    public abstract void doEvent(String eventType);
}
public class ConcreteMediator extends Mediator {
    private Alarm alarm;
    private CoffeePot coffeePot;
    private Calender calender;
    private Sprinkler sprinkler;

    public ConcreteMediator(Alarm alarm, CoffeePot coffeePot, Calender calender, Sprinkler sprinkler) {
        this.alarm = alarm;
        this.coffeePot = coffeePot;
        this.calender = calender;
        this.sprinkler = sprinkler;
    }
    
    @Override
    public void doEvent(String eventType) {
        switch (eventType) {
            case &quot;alarm&quot;:
                doAlarmEvent();
                break;
            case &quot;coffeePot&quot;:
                doCoffeePotEvent();
                break;
            case &quot;calender&quot;:
                doCalenderEvent();
                break;
            default:
                doSprinklerEvent();
        }
    }
    
    public void doAlarmEvent() {
        alarm.doAlarm();
        coffeePot.doCoffeePot();
        calender.doCalender();
        sprinkler.doSprinkler();
    }
    
    public void doCoffeePotEvent() {
        // ...
    }
    
    public void doCalenderEvent() {
        // ...
    }
    
    public void doSprinklerEvent() {
        // ...
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Client {
    public static void main(String[] args) {
        Alarm alarm = new Alarm();
        CoffeePot coffeePot = new CoffeePot();
        Calender calender = new Calender();
        Sprinkler sprinkler = new Sprinkler();
        Mediator mediator = new ConcreteMediator(alarm, coffeePot, calender, sprinkler);
        // 闹钟事件到达，调用中介者就可以操作相关对象
        alarm.onEvent(mediator);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>doAlarm()doCoffeePot()doCalender()doSprinkler()</p><h4 id="case-17" tabindex="-1"><a class="header-anchor" href="#case-17" aria-hidden="true">#</a> CASE</h4><p>按照Mybatis原理手写ORM框架，给JDBC方式操作数据库增加中介者。</p><h4 id="jdk-15" tabindex="-1"><a class="header-anchor" href="#jdk-15" aria-hidden="true">#</a> JDK</h4><ul><li>All scheduleXXX() methods of java.util.Timer</li><li>java.util.concurrent.Executor#execute()</li><li>submit() and invokeXXX() methods of java.util.concurrent.ExecutorService</li><li>scheduleXXX() methods of java.util.concurrent.ScheduledExecutorService</li><li>java.lang.reflect.Method#invoke()</li></ul><h3 id="备忘录-memento" tabindex="-1"><a class="header-anchor" href="#备忘录-memento" aria-hidden="true">#</a> 备忘录（Memento）</h3><h4 id="intent-18" tabindex="-1"><a class="header-anchor" href="#intent-18" aria-hidden="true">#</a> Intent</h4><p>在不违反封装的情况下获得对象的内部状态，从而在需要时可以将对象恢复到最初状态。</p><h4 id="class-diagram-18" tabindex="-1"><a class="header-anchor" href="#class-diagram-18" aria-hidden="true">#</a> Class Diagram</h4><ul><li>Originator：原始对象</li><li>Caretaker：负责保存好备忘录</li><li>Menento：备忘录，存储原始对象的的状态。备忘录实际上有两个接口，一个是提供给 Caretaker 的窄接口：它只能将备忘录传递给其它对象；一个是提供给 Originator 的宽接口，允许它访问到先前状态所需的所有数据。理想情况是只允许 Originator 访问本备忘录的内部状态。</li></ul><h4 id="implementation-18" tabindex="-1"><a class="header-anchor" href="#implementation-18" aria-hidden="true">#</a> Implementation</h4><p>以下实现了一个简单计算器程序，可以输入两个值，然后计算这两个值的和。备忘录模式允许将这两个值存储起来，然后在某个时刻用存储的状态进行恢复。 实现参考：Memento Pattern - Calculator Example - Java Sourcecode</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/** * Originator Interface */

public interface Calculator {

    // Create Memento
    PreviousCalculationToCareTaker backupLastCalculation();
    
    // setMemento
    void restorePreviousCalculation(PreviousCalculationToCareTaker memento);
    
    int getCalculationResult();
    
    void setFirstNumber(int firstNumber);
    
    void setSecondNumber(int secondNumber);

}
/** * Originator #### Implementation */

public class CalculatorImp implements Calculator {

    private int firstNumber;
    private int secondNumber;
    
    @Override
    public PreviousCalculationToCareTaker backupLastCalculation() {
        // create a memento object used for restoring two numbers
        return new PreviousCalculationImp(firstNumber, secondNumber);
    }
    
    @Override
    public void restorePreviousCalculation(PreviousCalculationToCareTaker memento) {
        this.firstNumber = ((PreviousCalculationToOriginator) memento).getFirstNumber();
        this.secondNumber = ((PreviousCalculationToOriginator) memento).getSecondNumber();
    }
    
    @Override
    public int getCalculationResult() {
        // result is adding two numbers
        return firstNumber + secondNumber;
    }
    
    @Override
    public void setFirstNumber(int firstNumber) {
        this.firstNumber = firstNumber;
    }
    
    @Override
    public void setSecondNumber(int secondNumber) {
        this.secondNumber = secondNumber;
    }

}
/** * Memento Interface to Originator * * This interface allows the originator to restore its state */
public interface PreviousCalculationToOriginator {
    int getFirstNumber();
    int getSecondNumber();
}
/** *  Memento interface to CalculatorOperator (Caretaker) */
public interface PreviousCalculationToCareTaker {
    // no operations permitted for the caretaker
}
/** * Memento Object #### Implementation * &lt;p&gt; * Note that this object implements both interfaces to Originator and CareTaker */
public class PreviousCalculationImp implements PreviousCalculationToCareTaker,
        PreviousCalculationToOriginator {

    private int firstNumber;
    private int secondNumber;
    
    public PreviousCalculationImp(int firstNumber, int secondNumber) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }
    
    @Override
    public int getFirstNumber() {
        return firstNumber;
    }
    
    @Override
    public int getSecondNumber() {
        return secondNumber;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>/** * CareTaker object */</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Client {

    public static void main(String[] args) {
        // program starts
        Calculator calculator = new CalculatorImp();
    
        // assume user enters two numbers
        calculator.setFirstNumber(10);
        calculator.setSecondNumber(100);
    
        // find result
        System.out.println(calculator.getCalculationResult());
    
        // Store result of this calculation in case of error
        PreviousCalculationToCareTaker memento = calculator.backupLastCalculation();
    
        // user enters a number
        calculator.setFirstNumber(17);
    
        // user enters a wrong second number and calculates result
        calculator.setSecondNumber(-290);
    
        // calculate result
        System.out.println(calculator.getCalculationResult());
    
        // user hits CTRL + Z to undo last operation and see last result
        calculator.restorePreviousCalculation(memento);
    
        // result restored
        System.out.println(calculator.getCalculationResult());
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>110 -273 110</p><h4 id="case-18" tabindex="-1"><a class="header-anchor" href="#case-18" aria-hidden="true">#</a> CASE</h4><p>互联网系统上线过程中，配置文件回滚。</p><h4 id="jdk-16" tabindex="-1"><a class="header-anchor" href="#jdk-16" aria-hidden="true">#</a> JDK</h4><ul><li>java.io.Serializable</li></ul><h3 id="观察者-observer" tabindex="-1"><a class="header-anchor" href="#观察者-observer" aria-hidden="true">#</a> 观察者（Observer）</h3><h4 id="intent-19" tabindex="-1"><a class="header-anchor" href="#intent-19" aria-hidden="true">#</a> Intent</h4><p>定义对象之间的一对多依赖，当一个对象状态改变时，它的所有依赖都会收到通知并且自动更新状态。 主题（Subject）是被观察的对象，而其所有依赖者（Observer）称为观察者。</p><h4 id="class-diagram-19" tabindex="-1"><a class="header-anchor" href="#class-diagram-19" aria-hidden="true">#</a> Class Diagram</h4><p>主题（Subject）具有注册和移除观察者、并通知所有观察者的功能，主题是通过维护一张观察者列表来实现这些操作的。 观察者（Observer）的注册功能需要调用主题的 registerObserver() 方法。</p><h4 id="implementation-19" tabindex="-1"><a class="header-anchor" href="#implementation-19" aria-hidden="true">#</a> Implementation</h4><p>天气数据布告板会在天气信息发生改变时更新其内容，布告板有多个，并且在将来会继续增加。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface Subject {
    void registerObserver(Observer o);

    void removeObserver(Observer o);
    
    void notifyObserver();

}
public class WeatherData implements Subject {
    private List&lt;Observer&gt; observers;
    private float temperature;
    private float humidity;
    private float pressure;

    public WeatherData() {
        observers = new ArrayList&lt;&gt;();
    }
    
    public void setMeasurements(float temperature, float humidity, float pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        notifyObserver();
    }
    
    @Override
    public void registerObserver(Observer o) {
        observers.add(o);
    }
    
    @Override
    public void removeObserver(Observer o) {
        int i = observers.indexOf(o);
        if (i &gt;= 0) {
            observers.remove(i);
        }
    }
    
    @Override
    public void notifyObserver() {
        for (Observer o : observers) {
            o.update(temperature, humidity, pressure);
        }
    }

}
public interface Observer {
    void update(float temp, float humidity, float pressure);
}
public class StatisticsDisplay implements Observer {

    public StatisticsDisplay(Subject weatherData) {
        weatherData.reisterObserver(this);
    }
    
    @Override
    public void update(float temp, float humidity, float pressure) {
        System.out.println(&quot;StatisticsDisplay.update: &quot; + temp + &quot; &quot; + humidity + &quot; &quot; + pressure);
    }

}
public class CurrentConditionsDisplay implements Observer {

    public CurrentConditionsDisplay(Subject weatherData) {
        weatherData.registerObserver(this);
    }
    
    @Override
    public void update(float temp, float humidity, float pressure) {
        System.out.println(&quot;CurrentConditionsDisplay.update: &quot; + temp + &quot; &quot; + humidity + &quot; &quot; + pressure);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class WeatherStation {
    public static void main(String[] args) {
        WeatherData weatherData = new WeatherData();
        CurrentConditionsDisplay currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
        StatisticsDisplay statisticsDisplay = new StatisticsDisplay(weatherData);

        weatherData.setMeasurements(0, 0, 0);
        weatherData.setMeasurements(1, 1, 1);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CurrentConditionsDisplay.update: 0.0 0.0 0.0 StatisticsDisplay.update: 0.0 0.0 0.0 CurrentConditionsDisplay.update: 1.0 1.0 1.0 StatisticsDisplay.update: 1.0 1.0 1.0</p><h4 id="case-19" tabindex="-1"><a class="header-anchor" href="#case-19" aria-hidden="true">#</a> CASE</h4><p>小汽车指标摇号过程，监听消息通知用户中签。</p><h4 id="jdk-17" tabindex="-1"><a class="header-anchor" href="#jdk-17" aria-hidden="true">#</a> JDK</h4><ul><li>java.util.Observer</li><li>java.util.EventListener</li><li>javax.servlet.http.HttpSessionBindingListener</li><li>RxJava</li></ul><h3 id="状态-state" tabindex="-1"><a class="header-anchor" href="#状态-state" aria-hidden="true">#</a> 状态（State）</h3><h4 id="intent-20" tabindex="-1"><a class="header-anchor" href="#intent-20" aria-hidden="true">#</a> Intent</h4><p>允许对象在内部状态改变时改变它的行为，对象看起来好像修改了它所属的类。</p><h4 id="class-diagram-20" tabindex="-1"><a class="header-anchor" href="#class-diagram-20" aria-hidden="true">#</a> Class Diagram</h4><h4 id="implementation-20" tabindex="-1"><a class="header-anchor" href="#implementation-20" aria-hidden="true">#</a> Implementation</h4><p>糖果销售机有多种状态，每种状态下销售机有不同的行为，状态可以发生转移，使得销售机的行为也发生改变。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface State {
    /**     * 投入 25 分钱     */
    void insertQuarter();

    /**     * 退回 25 分钱     */
    void ejectQuarter();
    
    /**     * 转动曲柄     */
    void turnCrank();
    
    /**     * 发放糖果     */
    void dispense();

}
public class HasQuarterState implements State {

    private GumballMachine gumballMachine;
    
    public HasQuarterState(GumballMachine gumballMachine) {
        this.gumballMachine = gumballMachine;
    }
    
    @Override
    public void insertQuarter() {
        System.out.println(&quot;You can&#39;t insert another quarter&quot;);
    }
    
    @Override
    public void ejectQuarter() {
        System.out.println(&quot;Quarter returned&quot;);
        gumballMachine.setState(gumballMachine.getNoQuarterState());
    }
    
    @Override
    public void turnCrank() {
        System.out.println(&quot;You turned...&quot;);
        gumballMachine.setState(gumballMachine.getSoldState());
    }
    
    @Override
    public void dispense() {
        System.out.println(&quot;No gumball dispensed&quot;);
    }

}
public class NoQuarterState implements State {

    GumballMachine gumballMachine;
    
    public NoQuarterState(GumballMachine gumballMachine) {
        this.gumballMachine = gumballMachine;
    }
    
    @Override
    public void insertQuarter() {
        System.out.println(&quot;You insert a quarter&quot;);
        gumballMachine.setState(gumballMachine.getHasQuarterState());
    }
    
    @Override
    public void ejectQuarter() {
        System.out.println(&quot;You haven&#39;t insert a quarter&quot;);
    }
    
    @Override
    public void turnCrank() {
        System.out.println(&quot;You turned, but there&#39;s no quarter&quot;);
    }
    
    @Override
    public void dispense() {
        System.out.println(&quot;You need to pay first&quot;);
    }

}
public class SoldOutState implements State {

    GumballMachine gumballMachine;
    
    public SoldOutState(GumballMachine gumballMachine) {
        this.gumballMachine = gumballMachine;
    }
    
    @Override
    public void insertQuarter() {
        System.out.println(&quot;You can&#39;t insert a quarter, the machine is sold out&quot;);
    }
    
    @Override
    public void ejectQuarter() {
        System.out.println(&quot;You can&#39;t eject, you haven&#39;t inserted a quarter yet&quot;);
    }
    
    @Override
    public void turnCrank() {
        System.out.println(&quot;You turned, but there are no gumballs&quot;);
    }
    
    @Override
    public void dispense() {
        System.out.println(&quot;No gumball dispensed&quot;);
    }

}
public class SoldState implements State {

    GumballMachine gumballMachine;
    
    public SoldState(GumballMachine gumballMachine) {
        this.gumballMachine = gumballMachine;
    }
    
    @Override
    public void insertQuarter() {
        System.out.println(&quot;Please wait, we&#39;re already giving you a gumball&quot;);
    }
    
    @Override
    public void ejectQuarter() {
        System.out.println(&quot;Sorry, you already turned the crank&quot;);
    }
    
    @Override
    public void turnCrank() {
        System.out.println(&quot;Turning twice doesn&#39;t get you another gumball!&quot;);
    }
    
    @Override
    public void dispense() {
        gumballMachine.releaseBall();
        if (gumballMachine.getCount() &gt; 0) {
            gumballMachine.setState(gumballMachine.getNoQuarterState());
        } else {
            System.out.println(&quot;Oops, out of gumballs&quot;);
            gumballMachine.setState(gumballMachine.getSoldOutState());
        }
    }

}
public class GumballMachine {

    private State soldOutState;
    private State noQuarterState;
    private State hasQuarterState;
    private State soldState;
    
    private State state;
    private int count = 0;
    
    public GumballMachine(int numberGumballs) {
        count = numberGumballs;
        soldOutState = new SoldOutState(this);
        noQuarterState = new NoQuarterState(this);
        hasQuarterState = new HasQuarterState(this);
        soldState = new SoldState(this);
    
        if (numberGumballs &gt; 0) {
            state = noQuarterState;
        } else {
            state = soldOutState;
        }
    }
    
    public void insertQuarter() {
        state.insertQuarter();
    }
    
    public void ejectQuarter() {
        state.ejectQuarter();
    }
    
    public void turnCrank() {
        state.turnCrank();
        state.dispense();
    }
    
    public void setState(State state) {
        this.state = state;
    }
    
    public void releaseBall() {
        System.out.println(&quot;A gumball comes rolling out the slot...&quot;);
        if (count != 0) {
            count -= 1;
        }
    }
    
    public State getSoldOutState() {
        return soldOutState;
    }
    
    public State getNoQuarterState() {
        return noQuarterState;
    }
    
    public State getHasQuarterState() {
        return hasQuarterState;
    }
    
    public State getSoldState() {
        return soldState;
    }
    
    public int getCount() {
        return count;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Client {

    public static void main(String[] args) {
        GumballMachine gumballMachine = new GumballMachine(5);
    
        gumballMachine.insertQuarter();
        gumballMachine.turnCrank();
    
        gumballMachine.insertQuarter();
        gumballMachine.ejectQuarter();
        gumballMachine.turnCrank();
    
        gumballMachine.insertQuarter();
        gumballMachine.turnCrank();
        gumballMachine.insertQuarter();
        gumballMachine.turnCrank();
        gumballMachine.ejectQuarter();
    
        gumballMachine.insertQuarter();
        gumballMachine.insertQuarter();
        gumballMachine.turnCrank();
        gumballMachine.insertQuarter();
        gumballMachine.turnCrank();
        gumballMachine.insertQuarter();
        gumballMachine.turnCrank();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You insert a quarter You turned... A gumball comes rolling out the slot... You insert a quarter Quarter returned You turned, but there&#39;s no quarter You need to pay first You insert a quarter You turned... A gumball comes rolling out the slot... You insert a quarter You turned... A gumball comes rolling out the slot... You haven&#39;t insert a quarter You insert a quarter You can&#39;t insert another quarter You turned... A gumball comes rolling out the slot... You insert a quarter You turned... A gumball comes rolling out the slot... Oops, out of gumballs You can&#39;t insert a quarter, the machine is sold out You turned, but there are no gumballs No gumball dispensed</p><h4 id="case-20" tabindex="-1"><a class="header-anchor" href="#case-20" aria-hidden="true">#</a> CASE</h4><p>系统营销活动，状态流程审核发布上线。</p><h3 id="策略-strategy" tabindex="-1"><a class="header-anchor" href="#策略-strategy" aria-hidden="true">#</a> 策略（Strategy）</h3><h4 id="intent-21" tabindex="-1"><a class="header-anchor" href="#intent-21" aria-hidden="true">#</a> Intent</h4><p>定义一系列算法，封装每个算法，并使它们可以互换。 策略模式可以让算法独立于使用它的客户端。</p><h4 id="class-diagram-21" tabindex="-1"><a class="header-anchor" href="#class-diagram-21" aria-hidden="true">#</a> Class Diagram</h4><ul><li>Strategy 接口定义了一个算法族，它们都实现了 behavior() 方法。</li><li>Context 是使用到该算法族的类，其中的 doSomething() 方法会调用 behavior()，setStrategy(Strategy) 方法可以动态地改变 strategy 对象，也就是说能动态地改变 Context 所使用的算法。</li></ul><p>与状态模式的比较 状态模式的类图和策略模式类似，并且都是能够动态改变对象的行为。但是状态模式是通过状态转移来改变 Context 所组合的 State 对象，而策略模式是通过 Context 本身的决策来改变组合的 Strategy 对象。所谓的状态转移，是指 Context 在运行过程中由于一些条件发生改变而使得 State 对象发生改变，注意必须要是在运行过程中。 状态模式主要是用来解决状态转移的问题，当状态发生转移了，那么 Context 对象就会改变它的行为；而策略模式主要是用来封装一组可以互相替代的算法族，并且可以根据需要动态地去替换 Context 使用的算法。</p><h4 id="implementation-21" tabindex="-1"><a class="header-anchor" href="#implementation-21" aria-hidden="true">#</a> Implementation</h4><p>设计一个鸭子，它可以动态地改变叫声。这里的算法族是鸭子的叫声行为。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface QuackBehavior {
    void quack();
}
public class Quack implements QuackBehavior {
    @Override
    public void quack() {
        System.out.println(&quot;quack!&quot;);
    }
}
public class Squeak implements QuackBehavior{
    @Override
    public void quack() {
        System.out.println(&quot;squeak!&quot;);
    }
}
public class Duck {

    private QuackBehavior quackBehavior;
    
    public void performQuack() {
        if (quackBehavior != null) {
            quackBehavior.quack();
        }
    }
    
    public void setQuackBehavior(QuackBehavior quackBehavior) {
        this.quackBehavior = quackBehavior;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Client {

    public static void main(String[] args) {
        Duck duck = new Duck();
        duck.setQuackBehavior(new Squeak());
        duck.performQuack();
        duck.setQuackBehavior(new Quack());
        duck.performQuack();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>squeak! quack!</p><h4 id="case-21" tabindex="-1"><a class="header-anchor" href="#case-21" aria-hidden="true">#</a> CASE</h4><p>多种营销类型优惠券，折扣金额计算策略。</p><h4 id="jdk-18" tabindex="-1"><a class="header-anchor" href="#jdk-18" aria-hidden="true">#</a> JDK</h4><ul><li>java.util.Comparator#compare()</li><li>javax.servlet.http.HttpServlet</li><li>javax.servlet.Filter#doFilter()</li></ul><h3 id="模板方法-template-method" tabindex="-1"><a class="header-anchor" href="#模板方法-template-method" aria-hidden="true">#</a> 模板方法（Template Method）</h3><h4 id="intent-22" tabindex="-1"><a class="header-anchor" href="#intent-22" aria-hidden="true">#</a> Intent</h4><p>定义算法框架，并将一些步骤的实现延迟到子类。 通过模板方法，子类可以重新定义算法的某些步骤，而不用改变算法的结构。</p><h4 id="class-diagram-22" tabindex="-1"><a class="header-anchor" href="#class-diagram-22" aria-hidden="true">#</a> Class Diagram</h4><h4 id="implementation-22" tabindex="-1"><a class="header-anchor" href="#implementation-22" aria-hidden="true">#</a> Implementation</h4><p>冲咖啡和冲茶都有类似的流程，但是某些步骤会有点不一样，要求复用那些相同步骤的代码。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public abstract class CaffeineBeverage {

    final void prepareRecipe() {
        boilWater();
        brew();
        pourInCup();
        addCondiments();
    }
    
    abstract void brew();
    
    abstract void addCondiments();
    
    void boilWater() {
        System.out.println(&quot;boilWater&quot;);
    }
    
    void pourInCup() {
        System.out.println(&quot;pourInCup&quot;);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Coffee extends CaffeineBeverage {
    @Override
    void brew() {
        System.out.println(&quot;Coffee.brew&quot;);
    }

    @Override
    void addCondiments() {
        System.out.println(&quot;Coffee.addCondiments&quot;);
    }

}
public class Tea extends CaffeineBeverage {
    @Override
    void brew() {
        System.out.println(&quot;Tea.brew&quot;);
    }

    @Override
    void addCondiments() {
        System.out.println(&quot;Tea.addCondiments&quot;);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Client {
    public static void main(String[] args) {
        CaffeineBeverage caffeineBeverage = new Coffee();
        caffeineBeverage.prepareRecipe();
        System.out.println(&quot;-----------&quot;);
        caffeineBeverage = new Tea();
        caffeineBeverage.prepareRecipe();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>boilWater Coffee.brew pourInCup Coffee.addCondiments</p></blockquote><hr><p>boilWater Tea.brew pourInCup Tea.addCondiments</p><h4 id="case-22" tabindex="-1"><a class="header-anchor" href="#case-22" aria-hidden="true">#</a> CASE</h4><p>爬虫各类电商商品，生成营销推广海报。</p><h4 id="jdk-19" tabindex="-1"><a class="header-anchor" href="#jdk-19" aria-hidden="true">#</a> JDK</h4><ul><li>java.util.Collections#sort()</li><li>java.io.InputStream#skip()</li><li>java.io.InputStream#read()</li><li>java.util.AbstractList#indexOf()</li></ul><h3 id="访问者-visitor" tabindex="-1"><a class="header-anchor" href="#访问者-visitor" aria-hidden="true">#</a> 访问者（Visitor）</h3><h4 id="intent-23" tabindex="-1"><a class="header-anchor" href="#intent-23" aria-hidden="true">#</a> Intent</h4><p>为一个对象结构（比如组合结构）增加新能力。</p><h4 id="class-diagram-23" tabindex="-1"><a class="header-anchor" href="#class-diagram-23" aria-hidden="true">#</a> Class Diagram</h4><ul><li>Visitor：访问者，为每一个 ConcreteElement 声明一个 visit 操作</li><li>ConcreteVisitor：具体访问者，存储遍历过程中的累计结果</li><li>ObjectStructure：对象结构，可以是组合结构，或者是一个集合。</li></ul><h4 id="implementation-23" tabindex="-1"><a class="header-anchor" href="#implementation-23" aria-hidden="true">#</a> Implementation</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface Element {
    void accept(Visitor visitor);
}
class CustomerGroup {

    private List&lt;Customer&gt; customers = new ArrayList&lt;&gt;();
    
    void accept(Visitor visitor) {
        for (Customer customer : customers) {
            customer.accept(visitor);
        }
    }
    
    void addCustomer(Customer customer) {
        customers.add(customer);
    }

}
public class Customer implements Element {

    private String name;
    private List&lt;Order&gt; orders = new ArrayList&lt;&gt;();
    
    Customer(String name) {
        this.name = name;
    }
    
    String getName() {
        return name;
    }
    
    void addOrder(Order order) {
        orders.add(order);
    }
    
    public void accept(Visitor visitor) {
        visitor.visit(this);
        for (Order order : orders) {
            order.accept(visitor);
        }
    }

}
public class Order implements Element {

    private String name;
    private List&lt;Item&gt; items = new ArrayList();
    
    Order(String name) {
        this.name = name;
    }
    
    Order(String name, String itemName) {
        this.name = name;
        this.addItem(new Item(itemName));
    }
    
    String getName() {
        return name;
    }
    
    void addItem(Item item) {
        items.add(item);
    }
    
    public void accept(Visitor visitor) {
        visitor.visit(this);
    
        for (Item item : items) {
            item.accept(visitor);
        }
    }

}
public class Item implements Element {

    private String name;
    
    Item(String name) {
        this.name = name;
    }
    
    String getName() {
        return name;
    }
    
    public void accept(Visitor visitor) {
        visitor.visit(this);
    }

}
public interface Visitor {
    void visit(Customer customer);

    void visit(Order order);
    
    void visit(Item item);

}
public class GeneralReport implements Visitor {

    private int customersNo;
    private int ordersNo;
    private int itemsNo;
    
    public void visit(Customer customer) {
        System.out.println(customer.getName());
        customersNo++;
    }
    
    public void visit(Order order) {
        System.out.println(order.getName());
        ordersNo++;
    }
    
    public void visit(Item item) {
        System.out.println(item.getName());
        itemsNo++;
    }
    
    public void displayResults() {
        System.out.println(&quot;Number of customers: &quot; + customersNo);
        System.out.println(&quot;Number of orders:    &quot; + ordersNo);
        System.out.println(&quot;Number of items:     &quot; + itemsNo);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Client {
    public static void main(String[] args) {
        Customer customer1 = new Customer(&quot;customer1&quot;);
        customer1.addOrder(new Order(&quot;order1&quot;, &quot;item1&quot;));
        customer1.addOrder(new Order(&quot;order2&quot;, &quot;item1&quot;));
        customer1.addOrder(new Order(&quot;order3&quot;, &quot;item1&quot;));

        Order order = new Order(&quot;order_a&quot;);
        order.addItem(new Item(&quot;item_a1&quot;));
        order.addItem(new Item(&quot;item_a2&quot;));
        order.addItem(new Item(&quot;item_a3&quot;));
        Customer customer2 = new Customer(&quot;customer2&quot;);
        customer2.addOrder(order);
    
        CustomerGroup customers = new CustomerGroup();
        customers.addCustomer(customer1);
        customers.addCustomer(customer2);
    
        GeneralReport visitor = new GeneralReport();
        customers.accept(visitor);
        visitor.displayResults();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>customer1 order1 item1 order2 item1 order3 item1 customer2 order_a item_a1 item_a2 item_a3 Number of customers: 2 Number of orders: 4 Number of items: 6</p><h4 id="case-23" tabindex="-1"><a class="header-anchor" href="#case-23" aria-hidden="true">#</a> CASE</h4><p>家长与校长，对学生和老师的不同视角信息的访问。</p><h4 id="jdk-20" tabindex="-1"><a class="header-anchor" href="#jdk-20" aria-hidden="true">#</a> JDK</h4><ul><li>javax.lang.model.element.Element and javax.lang.model.element.ElementVisitor</li><li>javax.lang.model.type.TypeMirror and javax.lang.model.type.TypeVisitor</li></ul><h3 id="空对象-null" tabindex="-1"><a class="header-anchor" href="#空对象-null" aria-hidden="true">#</a> 空对象（Null）</h3><h4 id="intent-24" tabindex="-1"><a class="header-anchor" href="#intent-24" aria-hidden="true">#</a> Intent</h4><p>使用什么都不做的空对象来代替 NULL。 一个方法返回 NULL，意味着方法的调用端需要去检查返回值是否是 NULL，这么做会导致非常多的冗余的检查代码。并且如果某一个调用端忘记了做这个检查返回值，而直接使用返回的对象，那么就有可能抛出空指针异常。</p><h4 id="class-diagram-24" tabindex="-1"><a class="header-anchor" href="#class-diagram-24" aria-hidden="true">#</a> Class Diagram</h4><h4 id="implementation-24" tabindex="-1"><a class="header-anchor" href="#implementation-24" aria-hidden="true">#</a> Implementation</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public abstract class AbstractOperation {
    abstract void request();
}
public class RealOperation extends AbstractOperation {
    @Override
    void request() {
        System.out.println(&quot;do something&quot;);
    }
}
public class NullOperation extends AbstractOperation{
    @Override
    void request() {
        // do nothing
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">AbstractOperation</span> abstractOperation <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        abstractOperation<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">AbstractOperation</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> para<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>para <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">NullOperation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RealOperation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="case-24" tabindex="-1"><a class="header-anchor" href="#case-24" aria-hidden="true">#</a> CASE</h4>`,385),d=[l];function r(t,v){return i(),n("div",null,d)}const m=e(a,[["render",r],["__file","设计模式总结.html.vue"]]);export{m as default};
