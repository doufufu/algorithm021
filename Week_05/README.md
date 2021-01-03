学习笔记
### 已学
- Array 数组
- Linked List 链表
- Stack 栈
- Queue 队列
- HashTable 哈希表
- Set、Map
- Tree 二叉树
- BST 二叉搜索树

算法
- Search 查询
- Recursion 递归
- DFS 深度优先
- BFS 广度优先
- Divide & Conquer 分治
- Backtracking 回溯
- Greedy 贪心
- Binary Search 二叉查找

分治、回溯、递归、动态规划

### 递归模版
代码模版
```
public recur(level, parma){
	// terminator
	if(level > MAX_LEVEL){
		// process result
		return;
	}

	// process current logic
	process(level, parma);

	// drill down
	recur(level: level+1, newParam);

	// restore current status
}
```

### 分治
split+merge
代码模版
- 找到最近最简方法，将其拆解成可重复解决的问题
- 数学归纳法思维，拒绝人肉递归
```
functon divide_conquer(problem, parma1, param2, ...){
	// recursion terminator
	if(!problem){
		// result
		return result
	}

	// prepare data
	data = prepare_data(problem);
	subproblems = split_problem(problem, data)

	// conquer subproblems
	subResult1 = self.divide_conquer(subproblems[0], p1, ...);
	subResult2 = self.divide_conquer(subproblems[1], p2, ...);
	subResult3 = self.divide_conquer(subproblems[2], p3, ...);
	...

	// process and generate the final result
	result = process_result(subResult1, subResult2, subResult3, ...)

	// revert the current level status
}
```

### 动态规划 Dynamic Programming
- Divide & Conquer + Optimal substructure 分治+最优子结构
- dp 和 递归/分治 没有根本上的区别（区别在于有无最优子结构）
- 共性：找到重复子问题
- 差异性：最优子结构、中途可以淘汰次优解
e.g. 斐波那契数列（Bottom Up）、62计算不同路径、63不同路径2、1143最长公共子序列（字符串问题）
```
// 62 63二维棋盘求多少种路径到达i,j
int countPaths(boolean[][]gird, int row, int col){
	if(!validSquare(grid, row, col)) return 0;
	if(isAtEnd(grid, row, col)) return 1;
	return countPaths(grid, row + 1, col) + countPaths(grid, row, col + 1)
}

// 1143 求两个字符串最长匹配
// 输入：text1 = "abcde", text2 = "ace" 
// 输出：3  
// 解释：最长公共子序列是 "ace"，它的长度为 3。

以text1为i长度，text2为j长度，转为二维数组
每个i,j记录到目前为止最大匹配。
如果text1[i] === text2[j]，则arr[i][j] = arr[i-1][j-1]+1
否则arr[i][j] = max(arr[i][j-1], arr[i-1][j])

```


总结关键点：
1. 最优子结构 opt[n] = best_of(opt[n-1], opt[n-2], ...)
2. 存储中间状态 opt[i]
3. 递推公式（又叫：状态转移方程 或者 DP方程）
- Fib： opt[i] = opt[n-1] + opt[n-2]
- 二维路径：opt[i,j] = opt[i][j+1] + opt[i+1][j] (需要判断a[i][j]是否有阻碍)