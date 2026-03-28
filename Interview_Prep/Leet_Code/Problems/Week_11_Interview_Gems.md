# Week 11: Interview Gems & Hidden Patterns
## Design Patterns, Less Famous High-Value Problems

**What You'll Learn:** LRU Cache design, Trie trees, system design patterns, median finding, bit manipulation

**Time Investment:** 5-6 hours | **Problems:** 7 | **Difficulty:** Medium-Hard

---

## 📌 Pattern #22: LRU Cache Design

### Recognition Signal
- Design data structure problem
- Get/put O(1)
- Evict least recently used
- Cache management
- Track access order

### Code Template

```python
from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.cache = OrderedDict()
        self.capacity = capacity
    
    def get(self, key):
        if key not in self.cache:
            return -1
        
        # Move to end (most recent)
        self.cache.move_to_end(key)
        return self.cache[key]
    
    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        
        self.cache[key] = value
        
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)  # Remove oldest

# Complexity: O(1) all operations
```

---

## 🔥 Problem 11.1: LRU Cache
**Platform:** LeetCode #146 | **Difficulty:** Medium | **Frequency:** All majors

**Problem:** Implement LRU cache with get/put in O(1).

**Link:** https://leetcode.com/problems/lru-cache/

**Solved Example:**
```python
class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = OrderedDict()
    
    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)
        return self.cache[key]
    
    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)

# OrderedDict maintains insertion order
# move_to_end() makes it most recent
```

**Time Complexity:** O(1) all operations
**Space Complexity:** O(capacity)

---

## 📌 Pattern #23: Trie (Prefix Tree)

### Code Template

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()
    
    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end = True
    
    def search(self, word):
        node = self._find_node(word)
        return node is not None and node.is_end
    
    def startsWith(self, prefix):
        return self._find_node(prefix) is not None
    
    def _find_node(self, prefix):
        node = self.root
        for char in prefix:
            if char not in node.children:
                return None
            node = node.children[char]
        return node

# Complexity: O(word_length)
```

---

## 🔥 Problem 11.2: Implement Trie
**Platform:** LeetCode #208 | **Difficulty:** Medium | **Frequency:** Google, Amazon

**Problem:** Implement Trie with insert, search, startsWith.

**Link:** https://leetcode.com/problems/implement-trie-prefix-tree/

**Solved Example:**
```python
class Trie:
    def __init__(self):
        self.root = {}
    
    def insert(self, word: str) -> None:
        node = self.root
        for char in word:
            if char not in node:
                node[char] = {}
            node = node[char]
        node['$'] = True  # Mark end
    
    def search(self, word: str) -> bool:
        node = self._find(word)
        return node is not None and '$' in node
    
    def startsWith(self, prefix: str) -> bool:
        return self._find(prefix) is not None
    
    def _find(self, prefix):
        node = self.root
        for char in prefix:
            if char not in node:
                return None
            node = node[char]
        return node
```

**Time Complexity:** O(word_length)
**Space Complexity:** O(alphabet_size × word_count)

---

## 🔥 Problem 11.3: Median of Two Sorted Arrays
**Platform:** LeetCode #4 | **Difficulty:** Hard | **Frequency:** Google, Microsoft

**Problem:** Find median of two sorted arrays in O(log(min(m,n))).

**Link:** https://leetcode.com/problems/median-of-two-sorted-arrays/

**Solved Example:**
```python
def findMedianSortedArrays(nums1, nums2):
    if len(nums1) > len(nums2):
        return findMedianSortedArrays(nums2, nums1)
    
    m, n = len(nums1), len(nums2)
    low, high = 0, m
    
    while low <= high:
        cut1 = (low + high) // 2
        cut2 = (m + n + 1) // 2 - cut1
        
        left1 = nums1[cut1 - 1] if cut1 > 0 else float('-inf')
        left2 = nums2[cut2 - 1] if cut2 > 0 else float('-inf')
        right1 = nums1[cut1] if cut1 < m else float('inf')
        right2 = nums2[cut2] if cut2 < n else float('inf')
        
        if left1 <= right2 and left2 <= right1:
            if (m + n) % 2 == 0:
                return (max(left1, left2) + min(right1, right2)) / 2
            else:
                return max(left1, left2)
        elif left1 > right2:
            high = cut1 - 1
        else:
            low = cut1 + 1
    
    return -1  # Should not reach

# Binary search on partition point
```

**Time Complexity:** O(log(min(m, n)))
**Space Complexity:** O(1)

---

## 🔥 Problem 11.4: Insert Delete GetRandom O(1)
**Platform:** LeetCode #380 | **Difficulty:** Medium | **Frequency:** Amazon

**Problem:** Data structure with insert/delete/getRandom all O(1).

**Link:** https://leetcode.com/problems/insert-delete-getrandom-o1/

**Solved Example:**
```python
import random

class RandomizedSet:
    def __init__(self):
        self.nums = []
        self.index_map = {}
    
    def insert(self, val: int) -> bool:
        if val in self.index_map:
            return False
        self.index_map[val] = len(self.nums)
        self.nums.append(val)
        return True
    
    def remove(self, val: int) -> bool:
        if val not in self.index_map:
            return False
        
        # Swap with last element
        last = self.nums[-1]
        idx = self.index_map[val]
        
        self.nums[idx] = last
        self.index_map[last] = idx
        
        self.nums.pop()
        del self.index_map[val]
        return True
    
    def getRandom(self) -> int:
        return random.choice(self.nums)

# Array for random access, map for O(1) lookup
```

**Time Complexity:** O(1) all operations
**Space Complexity:** O(n)

---

## 🔥 Problem 11.5: Merge Intervals
**Platform:** LeetCode #56 | **Difficulty:** Medium | **Frequency:** Amazon

**Problem:** Merge overlapping intervals.

**Link:** https://leetcode.com/problems/merge-intervals/

**Solved Example:**
```python
def merge(intervals):
    if not intervals:
        return []
    
    intervals.sort()
    merged = [intervals[0]]
    
    for start, end in intervals[1:]:
        if start <= merged[-1][1]:
            # Overlapping - merge
            merged[-1] = [merged[-1][0], max(merged[-1][1], end)]
        else:
            # Non-overlapping - add new
            merged.append([start, end])
    
    return merged

# Example: [[1,3],[2,6],[8,10],[15,18]]
# Output: [[1,6],[8,10],[15,18]]

# Key: Sort first, then merge greedily
```

**Time Complexity:** O(n log n)
**Space Complexity:** O(n)

---

## 🔥 Problem 11.6: Word Ladder II
**Platform:** HackerRank | **Difficulty:** Hard | **Frequency:** Facebook

**Problem:** Find all shortest word transformation paths.

**Link:** https://www.hackerrank.com/challenges/solve-me-first

**Solved Example:**
```python
def findLadders(beginWord, endWord, wordList):
    wordSet = set(wordList)
    if endWord not in wordSet:
        return []
    
    neighbors = defaultdict(list)
    distance = {word: float('inf') for word in wordSet}
    distance[beginWord] = 0
    
    # BFS to build graph and find distances
    bfs(beginWord, endWord, wordSet, neighbors, distance)
    
    result = []
    dfs(beginWord, endWord, neighbors, distance, [beginWord], result)
    return result

def bfs(beginWord, endWord, wordSet, neighbors, distance):
    for word in wordSet:
        neighbors[word] = []
    
    queue = deque([beginWord])
    
    while queue:
        word = queue.popleft()
        for neighbor in get_neighbors(word, wordSet):
            neighbors[word].append(neighbor)
            if distance[neighbor] == float('inf'):
                distance[neighbor] = distance[word] + 1
                queue.append(neighbor)

def dfs(word, endWord, neighbors, distance, path, result):
    if word == endWord:
        result.append(path[:])
        return
    
    for neighbor in neighbors[word]:
        if distance[neighbor] == distance[word] + 1:
            path.append(neighbor)
            dfs(neighbor, endWord, neighbors, distance, path, result)
            path.pop()
```

**Time Complexity:** O(n² × n!) worst case
**Space Complexity:** O(n)

---

## 🔥 Problem 11.7: Serialize and Deserialize BST
**Platform:** LeetCode #449 | **Difficulty:** Medium | **Frequency:** Google, Meta

**Problem:** Serialize/deserialize BST to/from string.

**Link:** https://leetcode.com/problems/serialize-and-deserialize-bst/

**Solved Example:**
```python
class Codec:
    def serialize(self, root):
        def preorder(node):
            if not node:
                return []
            return [node.val] + preorder(node.left) + preorder(node.right)
        
        return ','.join(map(str, preorder(root)))
    
    def deserialize(self, data):
        if not data:
            return None
        
        vals = list(map(int, data.split(',')))
        
        def build(lower, upper):
            if not vals or vals[0] < lower or vals[0] > upper:
                return None
            
            val = vals.pop(0)
            node = TreeNode(val)
            node.left = build(lower, val)
            node.right = build(val, upper)
            return node
        
        return build(float('-inf'), float('inf'))

# Use BST property: left < root < right
```

**Time Complexity:** O(n)
**Space Complexity:** O(n)

---

## 🎯 Practice Problems

### Problem 11A: Min Stack with GetMin (LeetCode #155)
**Already covered** in Week 5, but worth reviewing for design patterns

### Problem 11B: Validate Parentheses in Expression (CodeSignal)
**Time:** 20 min

### Problem 11C: Implement Calculator (LeetCode #224)
**Time:** 30 min

### Problem 11D: Employee Free Time (HackerRank)
**Time:** 25 min

---

## 🔑 Key Takeaways

✅ **Design Patterns:** Solve multiple constraints simultaneously
✅ **Data Structure Choice:** Array + HashMap hybrid approaches
✅ **Trie:** Essential for string prefix problems
✅ **LRU Cache:** Understand order tracking (OrderedDict)
✅ **Hidden Patterns:** Merge intervals, median finding tricks

## Next Week

Week 12: **Mock Interviews & Final Review** - Timed practice, weak area reinforcement

---

**Weekly Checklist:**
- [ ] LRU Cache with OrderedDict
- [ ] Trie insert/search/startsWith
- [ ] Design pattern thinking
- [ ] Solved all 7 problems
- [ ] Understand multiple solutions per problem
