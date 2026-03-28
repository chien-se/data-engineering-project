# Week 7: Graphs Fundamentals
## Graph Representation, BFS/DFS, Connectivity

**What You'll Learn:** Graph representation, BFS/DFS traversal, connected components, cycle detection, adjacency patterns

**Time Investment:** 4-5 hours | **Problems:** 5 | **Difficulty:** Medium

---

## 📌 Pattern #15: Graph Representation

### Types
1. **Adjacency List** (preferred for sparse graphs)
2. **Adjacency Matrix** (better for dense graphs)
3. **Edge List**

```python
# Adjacency List (most common)
graph = {
    0: [1, 2],
    1: [0, 3],
    2: [0, 3],
    3: [1, 2]
}

# Using defaultdict
from collections import defaultdict
graph = defaultdict(list)
graph[0].append(1)
graph[1].append(0)
```

---

## 🔥 Problem 7.1: Clone Graph
**Platform:** LeetCode #133 | **Difficulty:** Medium | **Frequency:** Meta, Google

**Problem:** Create a deep copy of an undirected graph.

**Link:** https://leetcode.com/problems/clone-graph/

**Solved Example:**
```python
def cloneGraph(node):
    if not node:
        return None
    
    visited = {}
    queue = deque([node])
    visited[node] = Node(node.val)
    
    while queue:
        curr = queue.popleft()
        
        for neighbor in curr.neighbors:
            if neighbor not in visited:
                visited[neighbor] = Node(neighbor.val)
                queue.append(neighbor)
            
            visited[curr].neighbors.append(visited[neighbor])
    
    return visited[node]

# Create copy while mapping nodes
# Track visited to avoid infinite loops
```

**Time Complexity:** O(N + E)
**Space Complexity:** O(N)

---

## 📌 Pattern #16: BFS/DFS on Grids

### Recognition Signal
- 2D grid traversal
- Island problems
- Connected regions
- Flood fill
- Distance from point

### Code Template

```python
def dfs_grid(grid, visited, i, j):
    if i < 0 or i >= len(grid) or j < 0 or j >= len(grid[0]):
        return
    if visited[i][j] or grid[i][j] == '0':
        return
    
    visited[i][j] = True
    
    # Explore 4 directions
    dfs_grid(grid, visited, i + 1, j)
    dfs_grid(grid, visited, i - 1, j)
    dfs_grid(grid, visited, i, j + 1)
    dfs_grid(grid, visited, i, j - 1)

def bfs_grid(grid, start_i, start_j):
    queue = deque([(start_i, start_j)])
    visited = set([(start_i, start_j)])
    
    while queue:
        i, j = queue.popleft()
        
        for di, dj in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
            ni, nj = i + di, j + dj
            if 0 <= ni < len(grid) and 0 <= nj < len(grid[0]):
                if (ni, nj) not in visited and grid[ni][nj] == '1':
                    visited.add((ni, nj))
                    queue.append((ni, nj))
```

---

## 🔥 Problem 7.2: Number of Islands
**Platform:** HackerRank | **Difficulty:** Medium | **Frequency:** Amazon, Meta

**Problem:** Count number of islands in 2D grid.

**Link:** https://www.hackerrank.com/challenges/find-the-nearest-clone

**Solved Example:**
```python
def numIslands(grid):
    if not grid:
        return 0
    
    count = 0
    
    def dfs(i, j):
        if i < 0 or i >= len(grid) or j < 0 or j >= len(grid[0]):
            return
        if grid[i][j] != '1':
            return
        
        grid[i][j] = '0'  # Mark as visited
        
        dfs(i + 1, j)
        dfs(i - 1, j)
        dfs(i, j + 1)
        dfs(i, j - 1)
    
    for i in range(len(grid)):
        for j in range(len(grid[0])):
            if grid[i][j] == '1':
                dfs(i, j)
                count += 1
    
    return count

# Example:
# grid = [
#   ['1','1','0','0','0'],
#   ['1','1','0','0','0'],
#   ['0','0','1','0','0'],
#   ['0','0','0','1','1']
# ]
# Output: 3 islands
```

**Time Complexity:** O(m × n)
**Space Complexity:** O(m × n)

---

## 🔥 Problem 7.3: Pacific Atlantic Water Flow
**Platform:** CodeSignal | **Difficulty:** Hard | **Frequency:** Google

**Problem:** Find cells where water flows to both oceans.

**Link:** https://codesignal.com/arcade/intro/level-3

**Solved Example:**
```python
def pacificAtlantic(heights):
    if not heights:
        return []
    
    m, n = len(heights), len(heights[0])
    pacific = set()
    atlantic = set()
    
    def dfs(i, j, visited):
        if (i, j) in visited:
            return
        
        visited.add((i, j))
        
        for di, dj in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
            ni, nj = i + di, j + dj
            if 0 <= ni < m and 0 <= nj < n:
                if heights[ni][nj] >= heights[i][j]:
                    dfs(ni, nj, visited)
    
    # Start from edges - water flows from land to oceans
    for i in range(m):
        dfs(i, 0, pacific)
        dfs(i, n - 1, atlantic)
    
    for j in range(n):
        dfs(0, j, pacific)
        dfs(m - 1, j, atlantic)
    
    return list(pacific & atlantic)

# Start from ocean edges and flow inward (uphill)
# Find cells reachable from both oceans
```

**Time Complexity:** O(m × n)
**Space Complexity:** O(m × n)

---

## 📌 Pattern #17: Topological Sort

### Recognition Signal
- Dependency ordering
- Course scheduling
- Build order
- Alien dictionary
- Directed acyclic graph (DAG)

### Approach
```python
def topological_sort(graph, in_degree):
    from collections import deque
    
    queue = deque([node for node in graph if in_degree[node] == 0])
    topo_order = []
    
    while queue:
        node = queue.popleft()
        topo_order.append(node)
        
        for neighbor in graph[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    
    return topo_order if len(topo_order) == len(graph) else []  # Cycle if not all visited
```

---

## 🔥 Problem 7.4: Course Schedule
**Platform:** LeetCode #207 | **Difficulty:** Medium | **Frequency:** Google, Airbnb

**Problem:** Determine if all courses can be taken (cycle detection in DAG).

**Link:** https://leetcode.com/problems/course-schedule/

**Solved Example:**
```python
def canFinish(numCourses, prerequisites):
    from collections import defaultdict, deque
    
    # Build graph and in-degree
    graph = defaultdict(list)
    in_degree = [0] * numCourses
    
    for course, prereq in prerequisites:
        graph[prereq].append(course)
        in_degree[course] += 1
    
    # Topological sort with Kahn's algorithm
    queue = deque([i for i in range(numCourses) if in_degree[i] == 0])
    completed = 0
    
    while queue:
        course = queue.popleft()
        completed += 1
        
        for next_course in graph[course]:
            in_degree[next_course] -= 1
            if in_degree[next_course] == 0:
                queue.append(next_course)
    
    return completed == numCourses  # All courses completed = no cycle

# Example:
# numCourses = 2, prerequisites = [[1, 0]]
# Course 1 depends on 0
# Can finish: yes (do 0 then 1)

# numCourses = 2, prerequisites = [[1, 0], [0, 1]]
# Circular dependency
# Can finish: no (cycle detected)
```

**Time Complexity:** O(V + E)
**Space Complexity:** O(V + E)

---

## 🔥 Problem 7.5: Word Ladder
**Platform:** LeetCode #127 | **Difficulty:** Hard | **Frequency:** Amazon, Meta

**Problem:** Find shortest path between word transformations.

**Link:** https://leetcode.com/problems/word-ladder/

**Solved Example:**
```python
def ladderLength(beginWord, endWord, wordList):
    from collections import deque, defaultdict
    
    word_set = set(wordList)
    if endWord not in word_set:
        return 0
    
    graph = defaultdict(list)
    
    # Build graph: find all neighbors
    for word in [beginWord] + wordList:
        for i in range(len(word)):
            pattern = word[:i] + '*' + word[i+1:]
            graph[pattern].append(word)
    
    # BFS for shortest path
    queue = deque([(beginWord, 1)])
    visited = {beginWord}
    
    while queue:
        word, length = queue.popleft()
        
        if word == endWord:
            return length
        
        for i in range(len(word)):
            pattern = word[:i] + '*' + word[i+1:]
            
            for next_word in graph[pattern]:
                if next_word not in visited:
                    visited.add(next_word)
                    queue.append((next_word, length + 1))
    
    return 0  # No path found

# Example:
# beginWord = "hit", endWord = "cog"
# wordList = ["hot","dot","dog","lot","log","cog"]
# Shortest path: hit → hot → dot → dog → cog (length 5)
```

**Time Complexity:** O(n × l²) where n is words, l is length
**Space Complexity:** O(n × l)

---

## 🎯 Practice Problems

### Problem 7A: Surrounded Regions (HackerRank)
**Time:** 20 min

### Problem 7B: Graph Valid Tree (LeetCode #261)
**Link:** https://leetcode.com/problems/graph-valid-tree/
**Time:** 20 min

### Problem 7C: Number of Connected Components (CodeSignal)
**Time:** 20 min

### Problem 7D: Bipartite Graph Check (LeetCode #785)
**Time:** 20 min

### Problem 7E: Course Schedule II (LeetCode #210)
**Time:** 25 min

---

## 🔑 Key Takeaways

✅ **Adjacency List:** Most common representation
✅ **BFS:** Shortest path (unweighted)
✅ **DFS:** Traversal and connectivity
✅ **Topological Sort:** Dependency ordering
✅ **Cycle Detection:** In-degree tracking or DFS coloring

## Next Week

Week 8: **Advanced Graphs** - Dijkstra's, shortest paths, strongly connected components

---

**Weekly Checklist:**
- [ ] Adjacency list representation
- [ ] BFS and DFS on graphs
- [ ] Topological sort understanding
- [ ] Solved at least 3 of 5 problems
- [ ] Cycle detection methods
