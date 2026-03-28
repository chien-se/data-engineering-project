# Week 10: Dynamic Programming Part 2
## 2D DP, String DP, Complex Patterns

**What You'll Learn:** 2D DP tables, string matching, tree DP, interval DP, space optimization

**Time Investment:** 4-5 hours | **Problems:** 6 | **Difficulty:** Hard

---

## 📌 Pattern #21: 2D DP

### Recognition Signal
- Two string/array problems
- Matrix path problems
- Range/interval problems
- 2D grid traversal
- Comparing two sequences

### Mental Model: 2D Table Building

```
PROBLEM: Edit Distance (transform "horse" to "ros")

dp[i][j] = operations to transform first i chars of s1 to first j chars of s2

         ""  r   o   s
    ""    0  1   2   3
    h     1  1   2   3
    o     2  2   1   2
    r     3  2   2   2
    s     4  3   3   2
    e     5  4   4   3

Fill bottom-up, left-to-right
Each cell depends on three neighbors
```

### Code Template

```python
def edit_distance(s1, s2):
    m, n = len(s1), len(s2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    # Base cases
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j
    
    # Fill table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i-1] == s2[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = 1 + min(
                    dp[i-1][j],      # Delete
                    dp[i][j-1],      # Insert
                    dp[i-1][j-1]     # Replace
                )
    
    return dp[m][n]
```

---

## 🔥 Problem 10.1: Edit Distance
**Platform:** LeetCode #72 | **Difficulty:** Hard | **Frequency:** Facebook, Google

**Problem:** Minimum operations (insert, delete, replace) to transform s1 to s2.

**Link:** https://leetcode.com/problems/edit-distance/

**Solved Example:**
```python
def minDistance(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i-1] == word2[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = 1 + min(
                    dp[i-1][j],
                    dp[i][j-1],
                    dp[i-1][j-1]
                )
    
    return dp[m][n]

# Example: word1="horse", word2="ros"
# Output: 3 (delete h, delete e, keep ros)
```

**Time Complexity:** O(m × n)
**Space Complexity:** O(m × n)

---

## 🔥 Problem 10.2: Longest Common Subsequence
**Platform:** LeetCode #1143 | **Difficulty:** Medium | **Frequency:** Google

**Problem:** Find longest matching subsequence (not necessarily contiguous).

**Link:** https://leetcode.com/problems/longest-common-subsequence/

**Solved Example:**
```python
def longestCommonSubsequence(text1, text2):
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    
    return dp[m][n]

# Example: text1="abc", text2="abc"
# LCS="abc", length=3

# Recurrence: 
# If match: dp[i][j] = dp[i-1][j-1] + 1
# Else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])
```

**Time Complexity:** O(m × n)
**Space Complexity:** O(m × n)

---

## 🔥 Problem 10.3: Interleaving String
**Platform:** HackerRank | **Difficulty:** Medium | **Frequency:** Amazon

**Problem:** Can s3 be formed by interleaving s1 and s2?

**Link:** https://www.hackerrank.com/challenges/string-construction

**Solved Example:**
```python
def isInterleave(s1, s2, s3):
    if len(s1) + len(s2) != len(s3):
        return False
    
    m, n = len(s1), len(s2)
    dp = [[False] * (n + 1) for _ in range(m + 1)]
    dp[0][0] = True
    
    # Base cases
    for i in range(1, m + 1):
        dp[i][0] = dp[i-1][0] and s1[i-1] == s3[i-1]
    for j in range(1, n + 1):
        dp[0][j] = dp[0][j-1] and s2[j-1] == s3[j-1]
    
    # Fill table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            k = i + j - 1
            dp[i][j] = (
                (dp[i-1][j] and s1[i-1] == s3[k]) or
                (dp[i][j-1] and s2[j-1] == s3[k])
            )
    
    return dp[m][n]

# Example: s1="aa", s2="ab", s3="aaba"
# Interleave: a(s1) + a(s2) + b(s2) + a(s1) = "aaba" ✓
```

**Time Complexity:** O(m × n)
**Space Complexity:** O(m × n)

---

## 🔥 Problem 10.4: Unique Paths
**Platform:** LeetCode #62 | **Difficulty:** Medium | **Frequency:** Google

**Problem:** Count paths in m×n grid (right or down only).

**Link:** https://leetcode.com/problems/unique-paths/

**Solved Example:**
```python
def uniquePaths(m, n):
    dp = [[1] * n for _ in range(m)]
    
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
    
    return dp[m-1][n-1]

# Example: m=3, n=3
# Grid:
# [1][1][1]
# [1][2][3]
# [1][3][6]
# Output: 6

# Recurrence: dp[i][j] = dp[i-1][j] + dp[i][j-1]
```

**Time Complexity:** O(m × n)
**Space Complexity:** O(m × n), can optimize to O(n)

---

## 🔥 Problem 10.5: Regular Expression Matching
**Platform:** CodeSignal | **Difficulty:** Hard | **Frequency:** Meta, Google

**Problem:** Match string with regex (. and *).

**Link:** https://codesignal.com/arcade/intro/level-3

**Solved Example:**
```python
def isMatch(s, p):
    m, n = len(s), len(p)
    dp = [[False] * (n + 1) for _ in range(m + 1)]
    dp[0][0] = True
    
    # Handle patterns like a*, a*b*, a*b*c*
    for j in range(2, n + 1):
        if p[j-1] == '*':
            dp[0][j] = dp[0][j-2]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if p[j-1] == '*':
                # Match 0 or more of previous char
                dp[i][j] = dp[i][j-2]  # 0 occurrences
                if p[j-2] == '.' or p[j-2] == s[i-1]:
                    dp[i][j] = dp[i][j] or dp[i-1][j]  # 1+ occurrences
            elif p[j-1] == '.' or p[j-1] == s[i-1]:
                dp[i][j] = dp[i-1][j-1]
    
    return dp[m][n]

# Complex pattern matching
```

**Time Complexity:** O(m × n)
**Space Complexity:** O(m × n)

---

## 🔥 Problem 10.6: Maximum Path Sum (Tree DP)
**Platform:** LeetCode #124 | **Difficulty:** Hard | **Frequency:** Amazon

**Problem:** Find maximum path sum in binary tree.

**Link:** https://leetcode.com/problems/binary-tree-maximum-path-sum/

**Solved Example:**
```python
def maxPathSum(root):
    max_sum = [float('-inf')]
    
    def dfs(node):
        if not node:
            return 0
        
        # Recursively get max path from left and right
        left = max(0, dfs(node.left))
        right = max(0, dfs(node.right))
        
        # Update global max (current path with both subtrees)
        max_sum[0] = max(max_sum[0], node.val + left + right)
        
        # Return max path going downward from this node
        return node.val + max(left, right)
    
    dfs(root)
    return max_sum[0]

# Example:
#      -10
#      /  \
#     9   20
#        /  \
#       15   7
# Max path: 15 + 20 + 7 = 42
```

**Time Complexity:** O(n)
**Space Complexity:** O(h)

---

## 🎯 Practice Problems

### Problem 10A: Best Time to Buy and Sell Stock III (LeetCode #123)
**Difficulty:** Hard
**Hint:** 2D DP with transaction limits

**Time:** 30 min

### Problem 10B: Distinct Subsequences (LeetCode #115)
**Difficulty:** Hard
**Hint:** Count matching subsequences

**Time:** 25 min

### Problem 10C: Wildcard Matching (LeetCode #44)
**Difficulty:** Hard
**Hint:** Similar to regex, use *

**Time:** 30 min

### Problem 10D: Minimum Path Sum (LeetCode #64)
**Difficulty:** Medium
**Hint:** Grid DP with costs

**Time:** 20 min

### Problem 10E: Maximal Square (LeetCode #221)
**Difficulty:** Medium
**Hint:** Largest square in matrix

**Time:** 25 min

---

## 🔑 Key Takeaways

✅ **2D State:** dp[i][j] represents solution for first i, j elements
✅ **Dependencies:** Understand which previous states are needed
✅ **Base Cases:** Initialize first row and column correctly
✅ **Transitions:** Three directions (top, left, diagonal) most common
✅ **Space Optimization:** Can reduce 2D to 1D in many cases

## Common Mistakes

❌ Wrong initialization of base cases
❌ Off-by-one errors in indexing
❌ Not handling edge cases (empty strings, single row/col)
❌ Incorrect dependency direction
❌ Confusing constraints in pattern problems

## Next Week

Week 11: **Interview Gems** - Hidden high-value problems from real interviews

---

**Weekly Checklist:**
- [ ] 2D DP table filling pattern
- [ ] String matching problems fluent
- [ ] Edit distance variants
- [ ] Solved at least 4 of 6
- [ ] Can optimize space to 1D
