# Week 8: Advanced Graphs
## Dijkstra's Algorithm, Shortest Paths, Union-Find

**What You'll Learn:** Dijkstra's shortest path, Union-Find with path compression, Strongly Connected Components, advanced graph patterns

**Time Investment:** 4-5 hours | **Problems:** 6 | **Difficulty:** Hard

---

## 📌 Pattern #18: Dijkstra's Algorithm

### Recognition Signal
- Find shortest path with weighted edges
- Network delay time
- Cheapest flights
- Path with minimum cost
- Single-source shortest path (positive weights)

### Mental Model: Greedy Exploration

```
Always explore nearest unvisited node
Distance from A: B=1, C=1, D=3, E=4
Visit in order: A → B/C → D → E
```

### Code Template

```python
import heapq

def dijkstra(graph, start, end):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    heap = [(0, start)]
    visited = set()
    
    while heap:
        curr_dist, curr_node = heapq.heappop(heap)
        
        if curr_node in visited:
            continue
        visited.add(curr_node)
        
        if curr_node == end:
            return curr_dist
        
        for neighbor, weight in graph[curr_node]:
            distance = curr_dist + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(heap, (distance, neighbor))
    
    return distances[end]

# Complexity: O((V + E) log V)
```

---

## 🔥 Problem 8.1: Network Delay Time
**Platform:** LeetCode #743 | **Difficulty:** Medium | **Frequency:** Google

**Problem:** Find time for signal from node k to reach all nodes.

**Link:** https://leetcode.com/problems/network-delay-time/

**Solved Example:**
```python
def networkDelayTime(times, n, k):
    from collections import defaultdict
    import heapq
    
    graph = defaultdict(list)
    for u, v, w in times:
        graph[u].append((v, w))
    
    distances = [float('inf')] * (n + 1)
    distances[k] = 0
    heap = [(0, k)]
    
    while heap:
        dist, node = heapq.heappop(heap)
        
        if dist > distances[node]:
            continue
        
        for neighbor, weight in graph[node]:
            new_dist = dist + weight
            if new_dist < distances[neighbor]:
                distances[neighbor] = new_dist
                heapq.heappush(heap, (new_dist, neighbor))
    
    max_dist = max(distances[1:n+1])
    return max_dist if max_dist != float('inf') else -1
```

**Time Complexity:** O((n + m) log n)
**Space Complexity:** O(n + m)

---

## 📌 Pattern #19: Union-Find (Disjoint Set Union)

### Code Template

```python
class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n
    
    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    
    def union(self, x, y):
        root_x, root_y = self.find(x), self.find(y)
        if root_x == root_y:
            return False
        if self.rank[root_x] < self.rank[root_y]:
            root_x, root_y = root_y, root_x
        self.parent[root_y] = root_x
        if self.rank[root_x] == self.rank[root_y]:
            self.rank[root_x] += 1
        return True

# Complexity: O(α(n)) ≈ O(1) amortized
```

---

## 🔥 Problem 8.2: Redundant Connection
**Platform:** CodeSignal | **Difficulty:** Medium | **Frequency:** Google

**Problem:** Find extra edge creating a cycle.

**Solved Example:**
```python
def findRedundantConnection(edges):
    uf = UnionFind(len(edges) + 1)
    
    for u, v in edges:
        if not uf.union(u, v):
            return [u, v]
    
    return []

# Union fails = edge creates cycle
```

**Time Complexity:** O(n × α(n))
**Space Complexity:** O(n)

---

## 🔥 Problem 8.3: Cheapest Flights Within K Stops
**Platform:** LeetCode #787 | **Difficulty:** Medium

**Problem:** Cheapest price with at most k stops.

**Link:** https://leetcode.com/problems/cheapest-flights-within-k-stops/

**Solved Example:**
```python
def findCheapestPrice(n, flights, src, dst, k):
    from collections import defaultdict
    import heapq
    
    graph = defaultdict(list)
    for u, v, price in flights:
        graph[u].append((v, price))
    
    heap = [(0, src, 0)]  # (price, node, stops)
    visited = {}
    
    while heap:
        price, node, stops = heapq.heappop(heap)
        
        if node == dst:
            return price
        if stops > k:
            continue
        if node in visited and visited[node] <= stops:
            continue
        
        visited[node] = stops
        
        for neighbor, flight_price in graph[node]:
            heapq.heappush(heap, (price + flight_price, neighbor, stops + 1))
    
    return -1
```

**Time Complexity:** O((k×n + m) log n)

---

## 🔥 Problem 8.4: Alien Dictionary
**Platform:** LeetCode #269 | **Difficulty:** Hard | **Frequency:** Google

**Problem:** Determine alien alphabet order from word list.

**Link:** https://leetcode.com/problems/alien-dictionary/

**Solved Example:**
```python
def alienOrder(words):
    from collections import defaultdict, deque
    
    graph = defaultdict(set)
    in_degree = {word[0]: 0 for word in words}
    
    for word in words:
        for char in word:
            if char not in in_degree:
                in_degree[char] = 0
    
    for i in range(len(words) - 1):
        w1, w2 = words[i], words[i + 1]
        for j in range(min(len(w1), len(w2))):
            if w1[j] != w2[j]:
                if w2[j] not in graph[w1[j]]:
                    graph[w1[j]].add(w2[j])
                    in_degree[w2[j]] += 1
                break
        else:
            if len(w1) > len(w2):
                return ""
    
    queue = deque([c for c in in_degree if in_degree[c] == 0])
    result = []
    
    while queue:
        char = queue.popleft()
        result.append(char)
        for neighbor in graph[char]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    
    return "".join(result) if len(result) == len(in_degree) else ""
```

**Time Complexity:** O(n × L)
**Space Complexity:** O(1) - 26 chars max

---

## 🔥 Problem 8.5: Number of Connected Components
**Platform:** HackerRank | **Difficulty:** Medium

**Problem:** Count connected components using Union-Find.

**Solved Example:**
```python
def countComponents(n, edges):
    uf = UnionFind(n)
    for u, v in edges:
        uf.union(u, v)
    return len(set(uf.find(i) for i in range(n)))
```

**Time Complexity:** O(n + m × α(n))

---

## 🔥 Problem 8.6: Surrounded Regions
**Platform:** LeetCode #130 | **Difficulty:** Medium | **Frequency:** Amazon

**Problem:** Mark regions surrounded by 'X'.

**Link:** https://leetcode.com/problems/surrounded-regions/

**Solved Example:**
```python
def solve(board):
    if not board:
        return
    
    m, n = len(board), len(board[0])
    
    def dfs(i, j):
        if i < 0 or i >= m or j < 0 or j >= n or board[i][j] != 'O':
            return
        board[i][j] = 'T'
        dfs(i+1, j)
        dfs(i-1, j)
        dfs(i, j+1)
        dfs(i, j-1)
    
    # Mark boundary-touching O as safe
    for i in range(m):
        dfs(i, 0)
        dfs(i, n-1)
    for j in range(n):
        dfs(0, j)
        dfs(m-1, j)
    
    # Convert: T→O, remaining O→X
    for i in range(m):
        for j in range(n):
            if board[i][j] == 'T':
                board[i][j] = 'O'
            elif board[i][j] == 'O':
                board[i][j] = 'X'
```

**Time Complexity:** O(m × n)

---

## 🎯 Practice Problems

### Problem 8A: Path With Minimum Effort (LeetCode #1631)
**Difficulty:** Hard
**Hint:** Dijkstra's tracking max edge not sum

**Time:** 25 min

### Problem 8B: Min Cost to Connect All Points (LeetCode #1584)
**Difficulty:** Hard
**Hint:** MST - Kruskal's algorithm

**Time:** 30 min

### Problem 8C: Graph Valid Tree (LeetCode #261)
**Difficulty:** Medium
**Hint:** n nodes, n-1 edges, connected, no cycles

**Time:** 20 min

### Problem 8D: Number of Provinces (LeetCode #547)
**Difficulty:** Medium
**Hint:** Count connected components

**Time:** 20 min

### Problem 8E: Swim in Rising Water (LeetCode #778)
**Difficulty:** Hard
**Hint:** Dijkstra's or binary search + BFS

**Time:** 30 min

---

## 🔑 Key Takeaways

✅ **Dijkstra's:** O((V+E) log V) for positive weights
✅ **Union-Find:** Path compression + union by rank = nearly O(1)
✅ **Topological Sort:** Kahn's algorithm for ordering
✅ **Graph Building:** Adjacency list most common
✅ **Choose Algorithm:** Based on weight and graph properties

## Next Week

Week 9: **Dynamic Programming Part 1** - Memoization, 1D DP, knapsack problems

---

**Weekly Checklist:**
- [ ] Dijkstra's from scratch
- [ ] Union-Find with optimizations
- [ ] Topological sort variations
- [ ] Solved at least 4 of 6
- [ ] Understand MST concepts
