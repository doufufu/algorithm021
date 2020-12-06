## 学习方法
### 题目不要只做一遍
做五遍，第一遍可以看题10-15分钟，列举全部思路，自己写，写不出来看题解。
做完一次再闭卷做第二次
第二天做第三次
一周后做四次
面试前再复习一次

### 做题要看别人写的好的部分参考
自己做完后，看题解，看自己语言相关排名点赞前三的
然后切换到国际站，看国外的disscuss排名靠前的思路
不要自己死抠

## 数组array、链表linked list、跳表
### 数组
数组 ：插入，删除是o(n)，lookup是o(1)

### 链表
链表：插入，删除都是o(1)，lookup是o(n)

### 跳表
跳表：对标平衡树和二分查找。原始的有序序列添加多级索引，升维+空间换时间

参考：
- Java 源码分析（ArrayList）http://developer.classpath.org/doc/java/util/ArrayList-source.html
- Linked List 的标准实现代码 http://www.geeksforgeeks.org/implementing-a-linked-list-in-java-using-class/
- Linked List 示例代码 http://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/code/LinkedList.java
- Java 源码分析（LinkedList） http://developer.classpath.org/doc/java/util/LinkedList-source.html
- LRU Cache - Linked list： LRU 缓存机制 http://leetcode-cn.com/problems/lru-cache
- Redis - Skip List：跳跃表、为啥 Redis 使用跳表（Skip List）而不是使用 Red-Black？ http://redisbook.readthedocs.io/en/latest/internal-datastruct/skiplist.html

## 栈、队列、双端队列、优先队列
### 栈
先入后出。
常见题目：找匹配，找最近相关性的题目。如括号匹配。
另一种题目：找出最大矩形面积。通过判断入栈内容是否小于栈顶元素，判断是否为右边界值。为右边界，则计算面积，否则压入栈中继续循环。

### 队列
先入先出，常见题目：滚动窗口sliding window

参考：
Java 的 PriorityQueue 文档
Java 的 Stack 源码
Java 的 Queue 源码
Python 的 heapq
高性能的 container 库
