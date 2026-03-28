# Week 9: Dynamic Programming Part 1
## Overlapping Subproblems, Memoization, 1D DP

**What You'll Learn:** DP fundamentals, memoization, 1D DP patterns, knapsack, optimal substructure

**Time Investment:** 4-5 hours | **Problems:** 6 | **Difficulty:** Medium-Hard

---

## 📌 Pattern #20: Memoization (Top-Down DP)

### Recognition Signal
- Overlapping subproblems
- Optimal substructure
- Recursive solution too slow
- "How many ways" / "minimum/maximum"
- Fibonacci-like structure

### Mental Model: Cache Repeated Calls

```
PROBLEM: Climb n stairs (1 or 2 steps at a time)

Recursive (slow): f(n) = f(n-1) + f(n-2)
f(5) calls: f(4), f(3)
f(4) calls: f(3), f(2)
f(3) called TWICE!
Exponential time: O(2^n)

Memoized (fast): Cache results
f(3) calculated once, reused
f(2) calculated once, reused
Linear time: O(n)
```

### Code Template

```python
def fibonacci_memo(n, memo=None):
    if memo is None:
        memo = {}
    
    if n in memo:
        return memo[n]
    
    if n <= 1:
        return n
    
    memo[n] = fibonacci_memo(n-1, memo) + fibonacci_memo(n-2, memo)
    return memo[n]

# Using decorator
from functools import lru_cache

@lru_cache(maxsize=None)
def fibonacci_decorator(n):
    if n <= 1:
        return n
    return fibonacci_decorator(n-1) + fibonacci_decorator(n-2)

# Complexity:
# - Time: O(n) - each state calculated once
# - Space: O(n) - recursion stack + memo
```

---

## 🔥 Problem 9.1: Climbing Stairs
**Platform:** LeetCode #70 | **Difficulty:** Easy | **Frequency:** Daily

**Problem:** Climb n stairs, 1 or 2 steps at a time. How many ways?

**Link:** https://leetcode.com/problems/climbing-stairs/

**Solved Example:**
```python
def climbStairs(n):
    # Memoization approach
    memo = {}
    
    def dp(i):
        if i in memo:
            return memo[i]
        if i == 0:
            return 1
        if i == 1:
            return 1
        
        memo[i] = dp(i-1) + dp(i-2)
        return memo[i]
    
    return dp(n)

# Example: n=3
# Ways: [1,1,1], [1,2], [2,1]
# Output: 3

# Recurrence: dp(n) = dp(n-1) + dp(n-2)
# Base: dp(0)=1, dp(1)=1
```

**Time Complexity:** O(n)
**Space Complexity:** O(n)

---

## 🔥 Problem 9.2: Coin Change
**Platform:** LeetCode #322 | **Difficulty:** Medium | **Frequency:** Amazon, Google

**Problem:** Minimum coins to make amount (unbounded knapsack).

**Link:** https://leetcode.com/problems/coin-change/

**Solved Example:**
```python
def coinChange(coins, amount):
    memo = {}
    
    def dp(remaining):
        if remaining in memo:
            return memo[remaining]
        
        if remaining == 0:
            return 0
        if remaining < 0:
            return float('inf')
        
        min_coins = float('inf')
        for coin in coins:
            result = 1 + dp(remaining - coin)
            min_coins = min(min_coins, result)
        
        memo[remaining] = min_coins
        return min_coins
    
    result = dp(amount)
    return result if result != float('inf') else -1

# Example: coins=[1,2,5], amount=5
# Ways to make 5: 5×1, 2+2+1, 5
# Minimum: 1 coin (5)
# Output: 1

# Recurrence: dp(amount) = 1 + min(dp(amount-coin) for each coin)
```

**Time Complexity:** O(amount × len(coins))
**Space Complexity:** O(amount)

---

## 🔥 Problem 9.3: House Robber
**Platform:** HackerRank | **Difficulty:** Medium | **Frequency:** Meta, Amazon

**Problem:** Rob houses with max value, can't rob adjacent houses.

**Link:** https://www.hackerrank.com/challenges/house-robber

**Solved Example:**
```python
def rob(nums):
    memo = {}
    
    def dp(i):
        if i in memo:
            return memo[i]
        
        if i < 0:
            return 0
        if i == 0:
            return nums[0]
        
        # Rob current (skip next) or skip current
        memo[i] = max(
            nums[i] + dp(i - 2),  # Rob house i
            dp(i - 1)              # Skip house i
        )
        return memo[i]
    
    return dp(len(nums) - 1)

# Example: nums=[1,2,3,1]
# Rob: skip 1, rob 2, skip 3, rob 1 = 2+1=3
# Or: rob 1, skip 2, rob 3 = 1+3=4
# Output: 4

# Recurrence: dp(i) = max(nums[i] + dp(i-2), dp(i-1))
```

**Time Complexity:** O(n)
**Space Complexity:** O(n)

---

## 🔥 Problem 9.4: Decode Ways
**Platform:** LeetCode #91 | **Difficulty:** Medium | **Frequency:** Google, Meta

**Problem:** Count ways to decode string (A=1, B=2, ..., Z=26).

**Link:** https://leetcode.com/problems/decode-ways/

**Solved Example:**
```python
def numDecodings(s):
    if not s or s[0] == '0':
        return 0
    
    memo = {}
    
    def dp(i):
        if i in memo:
            return memo[i]
        
        if i == len(s):
            return 1
        
        if s[i] == '0':
            return 0
        
        result = dp(i + 1)  # Single digit
        
        # Two digits
        if i + 1 < len(s) and int(s[i:i+2]) <= 26:
            result += dp(i + 2)
        
        memo[i] = result
        return result
    
    return dp(0)

# Example: s="226"
# Decodings: [2,2,6], [22,6], [2,26]
# Output: 3

# Recurrence: dp(i) = dp(i+1) + (dp(i+2) if valid pair)
```

**Time Complexity:** O(n)
**Space Complexity:** O(n)

---

## 🔥 Problem 9.5: Longest Increasing Subsequence
**Platform:** CodeSignal | **Difficulty:** Medium | **Frequency:** Google, Amazon

**Problem:** Find longest increasing subsequence length.

**Link:** https://codesignal.com/arcade/intro/level-3

**Solved Example:**
```python
def lengthOfLIS(nums):
    if not nums:
        return 0
    
    memo = {}
    
    def dp(i, prev):
        # dp(i, prev) = LIS starting from index i, previous value is prev
        if i == len(nums):
            return 0
        
        if (i, prev) in memo:
            return memo[(i, prev)]
        
        # Option 1: Skip current
        result = dp(i + 1, prev)
        
        # Option 2: Take current (if valid)
        if nums[i] > prev:
            result = max(result, 1 + dp(i + 1, nums[i]))
        
        memo[(i, prev)] = result
        return result
    
    return dp(0, float('-inf'))

# Example: nums=[10,9,2,5,3,7,101,18]
# LIS: [2,3,7,101] or [2,3,7,18]
# Output: 4

# Better 1D approach: dp[i] = LIS ending at i
```

**Time Complexity:** O(n²)
**Space Complexity:** O(n)

---

## 🔥 Problem 9.6: Word Break
**Platform:** LeetCode #139 | **Difficulty:** Medium | **Frequency:** Facebook, Google

**Problem:** Can word be segmented using dictionary?

**Link:** https://leetcode.com/problems/word-break/

**Solved Example:**
```python
def wordBreak(s, wordDict):
    word_set = set(wordDict)
    memo = {}
    
    def dp(start):
        if start in memo:
            return memo[start]
        
        if start == len(s):
            return True
        
        for end in range(start + 1, len(s) + 1):
            if s[start:end] in word_set and dp(end):
                memo[start] = True
                return True
        
        memo[start] = False
        return False
    
    return dp(0)

# Example: s="catsandog", wordDict=["cat","cats","and","sand","dog"]
# Can't segment (dog/and mismatch)
# Output: False

# Recurrence: dp(i) = True if any s[i:j] in dict and dp(j) is True
```

**Time Complexity:** O(n³) - n positions × n length checks × string slicing
**Space Complexity:** O(n)

---

## 🎯 Practice Problems

### Problem 9A: Partition Equal Subset Sum (LeetCode #416)
**Difficulty:** Medium
**Hint:** Can we sum to target = sum/2?

**Time:** 25 min

### Problem 9B: Delete and Earn (LeetCode #740)
**Difficulty:** Medium
**Hint:** Similar to House Robber

**Time:** 20 min

### Problem 9C: Minimum Cost For Tickets (LeetCode #983)
**Difficulty:** Medium
**Hint:** DP choice between ticket types

**Time:** 25 min

### Problem 9D: Best Time to Buy and Sell Stock IV (LeetCode #188)
**Difficulty:** Hard
**Hint:** DP with transaction limit

**Time:** 30 min

### Problem 9E: Perfect Squares (LeetCode #279)
**Difficulty:** Medium
**Hint:** Min squares to sum to n

**Time:** 20 min

---

## 🔑 Key Takeaways

✅ **Overlapping Subproblems:** Same calculation repeated → memoize
✅ **Optimal Substructure:** Solution from optimal subsolutions
✅ **State Definition:** What does dp(i) represent?
✅ **Recurrence Relation:** How to compute from previous states
✅ **Base Cases:** Critical for correctness
✅ **Memoization vs Tabulation:** Both equivalent, choose by preference

## Common Mistakes

❌ Not identifying overlapping subproblems
❌ Wrong state definition (can't represent problem)
❌ Missing base cases or edge cases
❌ Infinite recursion due to circular dependencies
❌ Not considering all valid transitions

## Next Week

Week 10: **Dynamic Programming Part 2** - 2D DP, string DP, tree DP

---

**Weekly Checklist:**
- [ ] Understand memoization completely
- [ ] DP state definition practice
- [ ] Solved at least 4 of 6
- [ ] Know unbounded vs 0/1 knapsack difference
- [ ] Write recurrence relations fluently
