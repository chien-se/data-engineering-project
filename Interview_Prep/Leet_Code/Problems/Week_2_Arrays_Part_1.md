# Week 2: Arrays Part 1
## Sliding Window & Prefix Sums Patterns

**What You'll Learn:** Sliding window (substring optimization), prefix sums (range queries), handling subarray problems

**Time Investment:** 4-5 hours | **Problems:** 6 | **Difficulty:** Easy-Medium

---

## 📌 Pattern #3: Sliding Window

### Recognition Signal
Problem asks you to:
- Find longest/shortest substring/subarray with property X
- Find subarray with sum = target
- "Consecutive elements" with some constraint
- Avoid nested loops (optimize from O(n²) → O(n))

**Interview Analogy:** Imagine looking through a window of a train. Instead of viewing the entire landscape every second (O(n²)), you slide the window smoothly, updating only what enters/exits (O(n)).

### Mental Model: Expand & Contract

```
PROBLEM: Find longest substring without repeating characters
Input: "abcabcbb"

EXPAND window when we see new character
CONTRACT window when we see duplicate

       left        right
        ↓          ↓
      [a b c a b c b b]
       
Start: left=0, seen={a:0}
Move right to 'b': seen={a:0, b:1}
Move right to 'c': seen={a:0, b:1, c:2}
Move right to 'a': duplicate! contract left
  left was at 'a' (index 0), so move left=1
  Now seen={b:1, c:2, a:3}
Continue expanding...

Result: "abc" with length 3
```

### Code Template

```python
def sliding_window(s, condition):
    left = 0
    window_data = {}  # Store chars/values in current window
    max_length = 0
    
    for right in range(len(s)):
        # EXPAND: Add new element to window
        char = s[right]
        window_data[char] = window_data.get(char, 0) + 1
        
        # CONTRACT: If window violates condition, shrink from left
        while left <= right and not condition(window_data):
            removed = s[left]
            window_data[removed] -= 1
            if window_data[removed] == 0:
                del window_data[removed]
            left += 1
        
        # Update answer
        max_length = max(max_length, right - left + 1)
    
    return max_length

# Key Points:
# - right expands (always moves forward)
# - left contracts (only moves when necessary)
# - window = [left, right] inclusive
```

---

## 🔥 Problem 2.1: Longest Substring Without Repeating Characters
**Platform:** HackerRank-style | **Difficulty:** Medium | **Frequency:** Meta, Amazon

**Problem:** Find length of longest substring without duplicate characters.

**Link:** https://www.hackerrank.com/challenges/solve-me-first (adapt from Recursion/String problem)

**Solved Example:**
```python
def lengthOfLongestSubstring(s):
    char_index = {}  # char -> last index seen
    max_length = 0
    left = 0
    
    for right in range(len(s)):
        char = s[right]
        
        # If duplicate exists and is within window
        if char in char_index and char_index[char] >= left:
            left = char_index[char] + 1
        
        # Update last position of current char
        char_index[char] = right
        
        # Track max length
        max_length = max(max_length, right - left + 1)
    
    return max_length

# Example: "abcabcbb"
# a: index 0 → length 1
# ab: indices 0-1 → length 2
# abc: indices 0-2 → length 3
# abca: 'a' at index 3, duplicate at 0, move left=1
# bcab: indices 1-3 → length 3
# cab: indices 2-3 → length 3
# abc: indices 3-5 → length 3
# bcb: 'b' duplicate, move left → length 2
# Output: 3
```

**Time Complexity:** O(n) - each element visited once
**Space Complexity:** O(min(m, n)) - m is charset size

---

## 🔥 Problem 2.2: Max Consecutive Ones
**Platform:** CodeSignal | **Difficulty:** Easy | **Frequency:** Screening

**Problem:** Given binary array, find maximum consecutive 1's.

**Link:** https://codesignal.com/arcade/intro/level-1

**Solved Example:**
```python
def findMaxConsecutiveOnes(nums):
    max_count = 0
    current_count = 0
    
    for num in nums:
        if num == 1:
            current_count += 1
            max_count = max(max_count, current_count)
        else:
            current_count = 0
    
    return max_count

# Example: [1,1,0,1,1,1] → 3
# Example: [1,0,1,1,0,1] → 2
```

**Why This is Sliding Window:** We maintain a "window" of consecutive 1's, expand when we see 1, reset when we see 0.

---

## 📌 Pattern #4: Prefix Sums

### Recognition Signal
Problem asks you to:
- Sum of subarray from index i to j
- Range queries (multiple times)
- Avoid recalculating sum for each query
- Build preprocessing data structure

**Interview Analogy:** Instead of counting every coin in every possible range (expensive), pre-calculate cumulative sums. Now any range sum is just subtraction.

### Mental Model: Cumulative Sum Array

```
PROBLEM: Given array [1,2,3,4], answer multiple range sum queries

Original:     [1, 2, 3, 4]
             0  1  2  3  4 (index)

Prefix Array: [0, 1, 3, 6, 10]
             (cumsum at each position)
             
To find sum from index 1 to 3:
Query: sum(1,3) = prefix[4] - prefix[1] = 10 - 1 = 9
Verify: 2 + 3 + 4 = 9 ✓
```

### Code Template

```python
def range_sum_query(nums):
    # Build prefix sum array
    prefix = [0]
    for num in nums:
        prefix.append(prefix[-1] + num)
    
    # Query: sum from i to j inclusive
    def sum_range(i, j):
        return prefix[j + 1] - prefix[i]
    
    return prefix  # Return for use in queries

# Complexity:
# - Build: O(n) time, O(n) space
# - Query: O(1) time
# - Total for k queries: O(n + k) vs O(n*k) without prefix
```

---

## 🔥 Problem 2.3: Subarray Sum Equals K
**Platform:** LeetCode #560 | **Difficulty:** Medium | **Frequency:** Amazon, Google

**Problem:** Find number of subarrays that sum to k.

**Link:** https://leetcode.com/problems/subarray-sum-equals-k/

**Solved Example (Using Prefix + Hash Map):**
```python
def subarraySum(nums, k):
    count = 0
    current_sum = 0
    sum_map = {0: 1}  # sum -> frequency
    
    for num in nums:
        current_sum += num
        
        # Check if (current_sum - k) exists
        # This means subarray ending here has sum = k
        if current_sum - k in sum_map:
            count += sum_map[current_sum - k]
        
        # Add current sum to map
        sum_map[current_sum] = sum_map.get(current_sum, 0) + 1
    
    return count

# Example: [1,1,1], k=2
# Index 0: sum=1, map={0:1, 1:1}
# Index 1: sum=2, (2-2)=0 found! count=1, map={0:1, 1:1, 2:1}
# Index 2: sum=3, (3-2)=1 found! count=2, map={0:1, 1:1, 2:1, 3:1}
# Output: 2 (subarrays [1,1] at 0-1 and 1-2)
```

**Why Not Brute Force?** 
- Brute force: O(n²) - check every subarray
- This approach: O(n) - prefix sum + hash map insight

---

## 🔥 Problem 2.4: Minimum Window Substring (Complex Sliding Window)
**Platform:** HackerRank String problem | **Difficulty:** Hard | **Frequency:** Microsoft, Google

**Problem:** Find minimum window substring containing all chars of target string.

**Link:** https://www.hackerrank.com/challenges/sherlock-anagrams (similar concept)

**Solved Example:**
```python
def minWindow(s, t):
    if not s or not t:
        return ""
    
    dict_t = {}
    for char in t:
        dict_t[char] = dict_t.get(char, 0) + 1
    
    required = len(dict_t)  # Unique chars in t
    formed = 0  # Unique chars in window with desired freq
    
    window_counts = {}
    left = 0
    min_len = float('inf')
    min_left = 0
    
    for right in range(len(s)):
        char = s[right]
        window_counts[char] = window_counts.get(char, 0) + 1
        
        # Check if frequency of char matches
        if char in dict_t and window_counts[char] == dict_t[char]:
            formed += 1
        
        # Contract window while valid
        while left <= right and formed == required:
            # Update answer
            if right - left + 1 < min_len:
                min_len = right - left + 1
                min_left = left
            
            char = s[left]
            window_counts[char] -= 1
            if char in dict_t and window_counts[char] < dict_t[char]:
                formed -= 1
            
            left += 1
    
    return s[min_left:min_left + min_len] if min_len != float('inf') else ""

# Example: s="ADOBECODEBANC", t="ABC"
# Answer: "BANC" (length 4)
```

---

## 🔥 Problem 2.5: Continuous Subarray Sum (Prefix + Modulo Pattern)
**Platform:** CodeSignal | **Difficulty:** Medium | **Frequency:** Goldman Sachs, Finance

**Problem:** Find if subarray of length ≥2 has sum divisible by k.

**Link:** https://codesignal.com/arcade/intro/level-2

**Solved Example:**
```python
def checkSubarraySum(nums, k):
    if k == 0:
        # Special case: look for consecutive 0s
        for i in range(len(nums) - 1):
            if nums[i] == 0 and nums[i+1] == 0:
                return True
        return False
    
    remainder_map = {0: -1}  # remainder -> first index
    current_sum = 0
    
    for i, num in enumerate(nums):
        current_sum += num
        remainder = current_sum % k
        
        if remainder in remainder_map:
            # Check if subarray length >= 2
            if i - remainder_map[remainder] >= 2:
                return True
        else:
            # Store first occurrence of remainder
            remainder_map[remainder] = i
    
    return False

# Example: [23,2,4,6,7], k=6
# sum=23, rem=5, map={0:-1, 5:0}
# sum=25, rem=1, map={0:-1, 5:0, 1:1}
# sum=29, rem=5, found! index 2-0=2 >= 2, return True
# Subarray [23,2,4] sums to 29, 29%6=5... wait
# Actually [2,4] sums to 6, 6%6=0 - YES!
```

**Key Insight:** If two indices have same remainder, subarray between them is divisible by k.

---

## 🔥 Problem 2.6: Best Time to Buy and Sell Stock
**Platform:** LeetCode #121 | **Difficulty:** Easy | **Frequency:** Google, Amazon, Meta

**Problem:** Find max profit from single buy-sell transaction.

**Link:** https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

**Solved Example:**
```python
def maxProfit(prices):
    if not prices or len(prices) < 2:
        return 0
    
    min_price = prices[0]
    max_profit = 0
    
    for price in prices[1:]:
        profit = price - min_price
        max_profit = max(max_profit, profit)
        min_price = min(min_price, price)
    
    return max_profit

# Example: [7,1,5,3,6,4]
# index 0: min=7, profit=0
# index 1: min=1, profit=0 (1-1=0)
# index 2: min=1, profit=4 (5-1=4)
# index 3: min=1, profit=2 (3-1=2)
# index 4: min=1, profit=5 (6-1=5)
# index 5: min=1, profit=3 (4-1=3)
# Answer: 5
```

**Why This Works:** Track minimum price seen so far, at each price calculate profit if selling now. This is a simplified prefix minimum approach.

---

## 🎯 Practice Problems This Week

### Problem 2A: First Unique Character (HackerRank)
**Difficulty:** Easy
Find first non-repeating character

**Hint:** Count frequencies first, then find first with count=1

**Time:** 15 min

---

### Problem 2B: Majority Element II (CodeSignal)
**Difficulty:** Medium
Find all elements appearing > n/3 times

**Hint:** Modify the counting approach from Week 1

**Time:** 20 min

---

### Problem 2C: Trapping Rain Water (LeetCode #42)
**Difficulty:** Hard
Calculate trapped rainwater between elevations

**Hint:** Use prefix max/min arrays

**Link:** https://leetcode.com/problems/trapping-rain-water/

**Time:** 30 min

---

### Problem 2D: Find All Anagrams in String (HackerRank)
**Difficulty:** Medium
Find all indices where anagrams of pattern occur

**Hint:** Sliding window with character frequency

**Time:** 20 min

---

### Problem 2E: Product of Array Except Self (LeetCode #238)
**Difficulty:** Medium
For each element, compute product of all others (without division)

**Hint:** Prefix + suffix products

**Link:** https://leetcode.com/problems/product-of-array-except-self/

**Time:** 20 min

---

### Problem 2F: Minimum Size Subarray Sum (CodeSignal)
**Difficulty:** Medium
Find minimum length subarray with sum ≥ target

**Hint:** Sliding window with shrinking

**Time:** 20 min

---

## 🔑 Key Takeaways This Week

✅ **Sliding Window:** Expand-contract for substring/subarray problems
✅ **Prefix Sums:** Precompute for O(1) range queries
✅ **Hash Maps + Prefix:** Powerful combo for subarray problems
✅ **Track Running Stats:** Min/max/sum as you iterate

## Common Mistakes

❌ Not resetting variables when window contracts
❌ Off-by-one in prefix sum array indexing
❌ Using brute force when sliding window available
❌ Not recognizing prefix sum disguised as range query

## Next Week

Week 3: **Arrays Part 2 & Strings** - Matrix operations, string manipulation, rotation patterns

---

**Weekly Checklist:**
- [ ] Understand sliding window expand/contract
- [ ] Can implement prefix sum array
- [ ] Solved at least 4 of 6 problems
- [ ] Know time complexity improvements vs brute force
