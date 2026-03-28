# Week 6: Trees & Binary Search
## Tree Traversals, BST Properties, Path Problems

**What You'll Learn:** Tree traversal patterns, BST validation, path finding, tree height/diameter, level-order traversal

**Time Investment:** 4-5 hours | **Problems:** 6 | **Difficulty:** Medium-Hard

---

## 📌 Pattern #13: Tree Traversals

### Recognition Signal
- In-order, pre-order, post-order traversals
- Level-order (BFS)
- DFS on trees
- Path problems
- Finding specific nodes

### Mental Model: Visiting Order

```
PROBLEM: Different traversals of tree
         1
       /   \
      2     3

In-order (Left-Root-Right): 2, 1, 3 (gives BST order)
Pre-order (Root-Left-Right): 1, 2, 3 (good for copying)
Post-order (Left-Right-Root): 2, 3, 1 (good for deleting)
Level-order: 1, 2, 3 (BFS, use queue)
```

### Code Templates

**Recursive In-order:**
```python
def inorder_traversal(root):
    result = []
    
    def dfs(node):
        if not node:
            return
        dfs(node.left)           # Left
        result.append(node.val)  # Root
        dfs(node.right)          # Right
    
    dfs(root)
    return result
```

**Iterative In-order:**
```python
def inorder_traversal_iterative(root):
    result = []
    stack = []
    curr = root
    
    while curr or stack:
        while curr:
            stack.append(curr)
            curr = curr.left
        
        curr = stack.pop()
        result.append(curr.val)
        curr = curr.right
    
    return result
```

**Level-order (BFS):**
```python
from collections import deque

def level_order_traversal(root):
    if not root:
        return []
    
    result = []
    queue = deque([root])
    
    while queue:
        level_size = len(queue)
        current_level = []
        
        for _ in range(level_size):
            node = queue.popleft()
            current_level.append(node.val)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        result.append(current_level)
    
    return result
```

---

## 🔥 Problem 6.1: Inorder Traversal
**Platform:** LeetCode #94 | **Difficulty:** Easy | **Frequency:** Daily

**Problem:** Return in-order traversal of binary tree.

**Link:** https://leetcode.com/problems/binary-tree-inorder-traversal/

**Solved Example:**
```python
def inorderTraversal(root):
    result = []
    
    def dfs(node):
        if not node:
            return
        dfs(node.left)
        result.append(node.val)
        dfs(node.right)
    
    dfs(root)
    return result

# Tree:    1
#           \
#            2
#           /
#          3
# In-order: 1, 3, 2
```

**Time Complexity:** O(n)
**Space Complexity:** O(h) recursive, O(n) iterative

---

## 🔥 Problem 6.2: Level Order Traversal
**Platform:** HackerRank | **Difficulty:** Medium | **Frequency:** Amazon, Google

**Problem:** Return level-order traversal (BFS).

**Link:** https://www.hackerrank.com/challenges/tree-level-order-traversal

**Solved Example:**
```python
from collections import deque

def levelOrder(root):
    if not root:
        return []
    
    result = []
    queue = deque([root])
    
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.popleft()
            level.append(node.val)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        result.append(level)
    
    return result

# Tree:      1
#          /   \
#         2     3
#        / \
#       4   5
# Output: [[1], [2, 3], [4, 5]]
```

**Time Complexity:** O(n)
**Space Complexity:** O(w) where w is max width

---

## 📌 Pattern #14: BST Properties

### Recognition Signal
- Validate BST
- Search in BST
- Insert/delete in BST
- Convert BST to sorted list
- Find specific values in BST

### Mental Model: Min/Max Bounds

```
PROBLEM: Validate Binary Search Tree

Valid BST: Every node must satisfy:
- All nodes in left subtree < node value
- All nodes in right subtree > node value

Invalid: Node might be valid locally but invalid globally
         10
        /  \
       5   15
      / \
     3   8   <- 8 is fine as left child of 10
         /
        6
       /
      3    <- 3 here violates because min bound is 5!
            (3 < 5, can't be in right subtree of node 5)
```

### Code Template

```python
def is_valid_bst(root):
    def validate(node, min_val, max_val):
        if not node:
            return True
        
        # Check bounds
        if node.val <= min_val or node.val >= max_val:
            return False
        
        # Left subtree: max becomes node value
        # Right subtree: min becomes node value
        return (validate(node.left, min_val, node.val) and
                validate(node.right, node.val, max_val))
    
    return validate(root, float('-inf'), float('inf'))

# Complexity: O(n) time, O(h) space
```

---

## 🔥 Problem 6.3: Validate Binary Search Tree
**Platform:** LeetCode #98 | **Difficulty:** Medium | **Frequency:** Microsoft, Google

**Problem:** Validate if tree is a BST.

**Link:** https://leetcode.com/problems/validate-binary-search-tree/

**Solved Example:**
```python
def isValidBST(root):
    def validate(node, min_val, max_val):
        if not node:
            return True
        
        if node.val <= min_val or node.val >= max_val:
            return False
        
        return (validate(node.left, min_val, node.val) and
                validate(node.right, node.val, max_val))
    
    return validate(root, float('-inf'), float('inf'))

# Example:
#       2
#      / \
#     1   3
# Valid: 1 < 2 < 3 ✓

#       5
#      / \
#     1   4
#        / \
#       3   6
# Invalid: 4 < 5, so right subtree can't have 3 (< 4)
```

**Time Complexity:** O(n)
**Space Complexity:** O(h)

---

## 🔥 Problem 6.4: Lowest Common Ancestor
**Platform:** HackerRank | **Difficulty:** Medium | **Frequency:** Google, Amazon

**Problem:** Find LCA of two nodes in BST.

**Link:** https://www.hackerrank.com/challenges/binary-search-tree-lowest-common-ancestor

**Solved Example:**
```python
def lowestCommonAncestor(root, p, q):
    # In BST, LCA is first node where p and q diverge
    
    while root:
        if p.val < root.val and q.val < root.val:
            # Both in left subtree
            root = root.left
        elif p.val > root.val and q.val > root.val:
            # Both in right subtree
            root = root.right
        else:
            # They diverge here, this is LCA
            return root
    
    return root

# Example:
#         6
#       /   \
#      2     8
#     / \   / \
#    0   4 7   9
#       / \
#      3   5
# LCA(2, 4) = 2 (4 is in right subtree of 2)
# LCA(2, 8) = 6 (they're on opposite sides)
```

**Time Complexity:** O(h)
**Space Complexity:** O(1)

---

## 🔥 Problem 6.5: Path Sum
**Platform:** CodeSignal | **Difficulty:** Medium | **Frequency:** Meta, Stripe

**Problem:** Find path from root to leaf with sum equals target.

**Link:** https://codesignal.com/arcade/intro/level-3

**Solved Example:**
```python
def hasPathSum(root, target):
    def dfs(node, current_sum):
        if not node:
            return False
        
        current_sum += node.val
        
        # Check if leaf node
        if not node.left and not node.right:
            return current_sum == target
        
        # Check left and right
        return (dfs(node.left, current_sum) or
                dfs(node.right, current_sum))
    
    return dfs(root, 0)

# Example:
#       5
#      / \
#     4   8
#    /     \
#   11      13
#   / \
#  7   2
# Target = 22: path [5, 4, 11, 2] sums to 22
```

**Time Complexity:** O(n)
**Space Complexity:** O(h)

---

## 🔥 Problem 6.6: Diameter of Binary Tree
**Platform:** LeetCode #543 | **Difficulty:** Medium | **Frequency:** Amazon, Meta

**Problem:** Find longest path between any two nodes.

**Link:** https://leetcode.com/problems/diameter-of-binary-tree/

**Solved Example:**
```python
def diameterOfBinaryTree(root):
    diameter = [0]  # Use list to modify in nested function
    
    def dfs(node):
        if not node:
            return 0
        
        left_height = dfs(node.left)
        right_height = dfs(node.right)
        
        # Update diameter
        diameter[0] = max(diameter[0], left_height + right_height)
        
        # Return height of this subtree
        return 1 + max(left_height, right_height)
    
    dfs(root)
    return diameter[0]

# Example:
#       1
#      / \
#     2   3
#    / \
#   4   5
# Diameter = 3 (path: 4 → 2 → 1 → 3)
```

**Time Complexity:** O(n)
**Space Complexity:** O(h)

---

## 🎯 Practice Problems

### Problem 6A: Maximum Depth (LeetCode #104)
**Link:** https://leetcode.com/problems/maximum-depth-of-binary-tree/
**Time:** 15 min

### Problem 6B: Same Tree (LeetCode #100)
**Link:** https://leetcode.com/problems/same-tree/
**Time:** 15 min

### Problem 6C: Invert Binary Tree (LeetCode #226)
**Link:** https://leetcode.com/problems/invert-binary-tree/
**Time:** 15 min

### Problem 6D: Binary Tree Right View (HackerRank)
**Time:** 20 min

### Problem 6E: Vertical Order Traversal (CodeSignal)
**Time:** 25 min

### Problem 6F: Construct Binary Tree from Traversals (LeetCode #105)
**Time:** 30 min

---

## 🔑 Key Takeaways

✅ **Traversals:** In-order for BST order, pre-order for reconstruction
✅ **BST Bounds:** Min/max validation approach
✅ **Height vs Depth:** Height from bottom, depth from top
✅ **DFS vs BFS:** DFS for paths, BFS for level order
✅ **Recursion Structure:** Return value represents subtree property

## Next Week

Week 7: **Graphs Fundamentals** - Graph representation, BFS/DFS, connectivity

---

**Weekly Checklist:**
- [ ] All three traversals memorized
- [ ] BST validation with min/max bounds
- [ ] Comfortable with recursive tree patterns
- [ ] Solved at least 4 of 6 problems
- [ ] Know when to use DFS vs BFS
