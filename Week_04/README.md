学习笔记

### 一、广度优先-bfs

### 二、深度优先-dfs


### 三、回溯
能回到上一步

### 四、贪心
需要获得最优解。
- 能分成子问题来解决
- 子问题的最优解能推到最终问题最优解

###### e.g. 455-分发饼干问题、122最佳的股票买卖时机（回溯、动归、贪心）、55跳跃游戏（穷举、贪心）、柠檬水问题、硬币问题

### 五、动态规划
需要获得最优解 && 能回到上一步
- 保存以前运算结果

### 六、二分查找
1. 目标函数单调性（单调递增/递减）——排除前半部分/后半部分
2. 存在上下界（bounded）——否则空间无限大，没法往中间扩，特殊
3. 能够通过索引访问（index accessible）——单链表不容易搜索

###### 代码模版
```
 left, right = 0, len(array) - 1
 while left <= right:
 	mid = (left + right) / 2

 	if array[mid] == target:
 	 # find the target
 	 break or return result

 	elif array[mid] < target:
 		left = mid + 1
 		# if 实数 left = mid

 	else:
 		right = mid - 1
 		# if 实数 right = mid

```
###### e.g. 69-求平方根（二分、牛顿迭代法）、367有效的完全平方数（二分、动态规划、位运算）、33搜索旋转排序数组

### 七、牛顿迭代法

```
# r: result 69-求平方根（二分、牛顿迭代法）
def mySqrt(self, x):
	r = x
	while r * r > x:
		r = (r + x/r) / 2
	return r

js:
r = x
while(r*r > x)
	r = (r + x/r) / 2 || 0
return r
```