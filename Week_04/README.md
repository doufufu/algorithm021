学习笔记

### 一、广度优先-bfs
特点：
- 每个节点都访问一次
- 每个节点仅访问一次

###### 代码模版
```
def bfs(graph, start, end):
	queue = []
	queue.append([start])
	visited.add(start)

	while queue:
		node = queue.popleft()
		visited.add(node)

		process(node)
		nodes= generate_related_nodes(node)
		queue.push(nodes)
	# other processing work
	# ...
```

###### e.g. 

### 二、深度优先-dfs
特点：
- 每个节点都访问一次
- 每个节点仅访问一次

###### 代码模版
```
# 二叉树
def dfs(node):
	if node in visited:
		# already visited
		return
	visited.add(node)

	# process current node
	# ... # logic here
	dfs(node.left)
	dfs(node.right)

-----

# 多叉树

visited = set()
def dfs(node, visited):
	
	if node in visited: # terminator
		# already visited
		return

	visited.add(node)

	# process current node here
	...
	for next_node in node.children():
		if not next_node in visited:
			dfs(next node, visited)
			# 这里是不是dfs(next_node, visited) ??????

-----

# 非递归

def DFS(self, tree):
	if tree.root is None:
		return []

	visited, stack = [], [tree.root]

	while stack:
		node = stack.pop()
		visited.add(node)

		process (node)
		nodes = generate_related_nodes(node)
		stack.push(nodes)

	# other processing work
	# ...
```

###### e.g. 100相同的树


### 三、回溯
能回到上一步
###### e.g. 47-全排列、78子集

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
	# 优化 if( (r*r- x) < (1e-6)) break;
		r = (r + x/r) / 2
	return r

js:
r = x
while(r*r > x)
	r = (r + x/r) / 2 || 0
return r
```

-------

33搜索旋转排序数组-题解：
1.暴力： 还原O(logN) -> 升序 -> 二分： O(logN) (写+总结)
2.正解：二分查找 （ps：大概理解，还没写：根据num[0],mid,num[len-1]和target比较，可以确定左右是否升序/旋转再进行下一次二分）
```
（来不及写代码）暴力升序的二分思路：
	left第一个，right最后一个
	while left <= right
		let 中间
		if（判断中间数是否大于left)
			则left=mid，
		else
			right=mid
			// 说明中间的比左边小，无序的数在左边。
	return right。拿到无序的index
```