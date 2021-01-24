学习笔记
### 位运算
｜ 与 1011 ｜ 1100 = 1111
& 并 1011 & 1100 = 1000

### 布隆过滤器
bloom Filter vs hash table
一个很长的二进制向量 和一系列随机映射函数。
布隆过滤器可以用于检索一个元素是否在一个集合中。
优点： 空间效率和查询时间都远远超一般算法。模糊识别方式
缺点： 有一定的误识别率和删除困难。

hash
不仅可以判定是否在集合中，
还可以存元素本身和元素的额外信息（如电话号码）

原理
输入的内容用一个数组，存入二进制位，
当一个快速缓存用，如果有则去数据库里查。如果没有则没有。

案例
1. 比特币网络
2. 分布式系统（map reduce） hadoop、 search engine
3. redis缓存
4. 垃圾邮件、评论等的过滤

```
// 代码实现
https://shimo.im/docs/UITYMj1eK88JCJTH/read
```

### LRU Cache
##### cache缓存
1. 记忆
2. 钱包/储物柜
3. 代码模块

##### LRU Cache
两个要素： 大小、替换策略
Hash Table + Double LinkedList
O（1）查询
O（1）修改、更新

### 题解
颠倒二进制位
1. int -> string -> reverse -> int
2. 位运算 for循环
// 待更新