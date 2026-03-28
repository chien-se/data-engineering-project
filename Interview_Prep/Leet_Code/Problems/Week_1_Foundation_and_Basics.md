# Week 1: Foundation & Basics
## Learn to Recognize Patterns & Build Mental Models

**What You'll Learn:** How to approach any problem systematically, hash maps, basic array operations, two-pointer thinking

**Time Investment:** 4-5 hours | **Problems:** 5 | **Difficulty:** Easy-Medium

---

## 📌 Pattern #1: Hash Maps for Lookups

### Recognition Signal
Problem asks you to:
- Find a pair/match within a data structure
- Track seen values quickly
- Answer "is X in the list?" in O(1)

**Interview Analogy:** You're at an airport security checkpoint. Instead of scanning every person's ID (O(n)), security has a blacklist database (hash map) they check instantly (O(1)).

### Mental Model: Two-Pass Approach

```
PROBLEM: Given array [2, 7, 11, 15] and target 9, find two numbers that sum to 9

STEP 1: Think about complement
  When I see 2, I need 7 (9 - 2 = 7)
  When I see 7, I need 2 (9 - 7 = 2)

STEP 2: Build lookup during iteration
  Pass 1: Store each number in a hash map with its index
    map = {2: 0, 7: 1, 11: 2, 15: 3}

STEP 3: Find answer
  Loop through and ask: "Is my complement in the map?"
  At index 0: Need 7? YES! Found at index 1
  Answer: [0, 1]
```

### Code Template

```python
def find_match(arr, target):
    seen = {}  # key: value, value: index
    
    for i, num in enumerate(arr):
        complement = target - num
        
        if complement in seen:
            return [seen[complement], i]
        
        seen[num] = i
    
    return []

# Why this works:
# - Time: O(n) - one pass through array
# - Space: O(n) - hash map stores at most n elements
```

### Edge Cases to Watch

```python
# ❌ What breaks this?

# Case 1: Target itself divided by 2
arr = [3, 3], target = 6
# Your code: seen[3] = 0, then at i=1 need complement=3
# Is 3 in seen? YES! But don't use same element twice
# FIX: Use index check or problem constraints

# Case 2: Duplicates
arr = [1, 1, 1], target = 2
# Your code works! Returns first valid pair

# Case 3: Negative numbers
arr = [-1, 2, 3], target = 1
# Your code works! Hash maps work with negative keys
```

---

## 🔥 Problem 1.1: Two Sum
**Platform:** LeetCode #1 | **Difficulty:** Easy | **Frequency:** Daily

**Problem:** Given array `nums` and integer `target`, return indices of two numbers that add to target.

**Link:** https://leetcode.com/problems/two-sum/

**Solved Example:**
```python
def twoSum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# Example: nums=[2,7,11,15], target=9
# Output: [0,1] because nums[0]+nums[1]=9
```

**Complexity:** O(n) time, O(n) space

**Interview Variation:** "What if you can't modify the array and need to optimize space?"
→ Use two-pointer with sorted array (but lose original indices)

---

## 🔥 Problem 1.2: Majority Element
**Platform:** HackerRank | **Difficulty:** Easy | **Frequency:** Common

**Problem:** Given array, find element appearing more than ⌊n/2⌋ times.

**Link:** https://www.hackerrank.com/challenges/simple-array-sum/problem

**Solved Example:**
```python
def majorityElement(nums):
    count_map = {}
    for num in nums:
        count_map[num] = count_map.get(num, 0) + 1
    
    majority_count = len(nums) // 2
    for num, count in count_map.items():
        if count > majority_count:
            return num

# Example: [3,2,3] → Output: 3 (appears 2 times > 1.5)
```

**Why Hash Maps?** Faster than sorting, cleaner than comparison

**Alternate Approach (Boyer-Moore Voting):**
```python
def majorityElement(nums):
    candidate = None
    count = 0
    
    for num in nums:
        if count == 0:
            candidate = num
        count += 1 if num == candidate else -1
    
    return candidate
# This is O(n) time, O(1) space - more optimal!
```

---

## 🔥 Problem 1.3: Contains Duplicate
**Platform:** CodeSignal | **Difficulty:** Easy | **Frequency:** Screening stage

**Problem:** Given array, return True if any value appears more than once.

**Link:** https://codesignal.com/arcade/intro/level-1/

**Solved Example:**
```python
def containsDuplicate(nums):
    seen = set()
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    return False

# Example: [1,2,3,1] → True
# Example: [1,2,3,4] → False
```

**Why Sets Over Hash Maps?** Don't need to store indices, just presence

**Optimization Insight:**
```python
# If len(nums) > len(set(nums)), duplicates exist
# But this creates entire set first (same complexity, less elegant)
# Use the iterative approach above
```

---

## 📌 Pattern #2: Two Pointers

### Recognition Signal
Problem asks you to:
- Find pair meeting some criteria
- Compare from two ends moving inward
- Avoid nested loops (optimize from O(n²) → O(n))

**Interview Analogy:** You have two hands. Instead of checking every combination (hands on same spot), use both hands moving toward each other to find what you need.

### Mental Model: Opposing Movement

```
PROBLEM: [1,2,3,4,5] - find two numbers that sum to 7

        left             right
          ↓              ↓
       [1, 2, 3, 4, 5]
        
left=1, right=5: sum=6 (too small, move left pointer right)
       left            right
         ↓             ↓
       [1, 2, 3, 4, 5]

left=2, right=5: sum=7 (FOUND!)
```

### Code Template

```python
def two_pointer_problem(arr):
    left = 0
    right = len(arr) - 1
    
    while left < right:
        current_sum = arr[left] + arr[right]
        
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1  # Need bigger sum, move left forward
        else:
            right -= 1  # Need smaller sum, move right backward
    
    return []

# Key Insight: Only works on SORTED arrays!
```

---

## 🔥 Problem 1.4: Valid Palindrome (String Pointer Pattern)
**Platform:** HackerRank | **Difficulty:** Easy-Medium | **Frequency:** High

**Problem:** Given string, determine if it's valid palindrome (ignore spaces/punctuation/case).

**Link:** https://www.hackerrank.com/challenges/palindrome-index/problem

**Solved Example:**
```python
def isPalindrome(s):
    left = 0
    right = len(s) - 1
    
    while left < right:
        # Skip non-alphanumeric
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1
        
        # Compare (case-insensitive)
        if s[left].lower() != s[right].lower():
            return False
        
        left += 1
        right -= 1
    
    return True

# Example: "A man, a plan, a canal: Panama" → True
# Example: "race a car" → False
```

**Edge Cases:**
```python
# Empty string or single char → True (palindrome)
# Only special chars → True
# Case sensitive issues → Use .lower()
```

---

## 🔥 Problem 1.5: Container With Most Water (Two-Pointer Optimization)
**Platform:** LeetCode #11 | **Difficulty:** Medium | **Frequency:** Google, Amazon

**Problem:** Given heights array, find two lines that contain most water.

**Link:** https://leetcode.com/problems/container-with-most-water/

**Solved Example:**
```python
def maxArea(height):
    left = 0
    right = len(height) - 1
    max_area = 0
    
    while left < right:
        width = right - left
        h = min(height[left], height[right])
        area = width * h
        max_area = max(max_area, area)
        
        # Move the SHORTER pointer
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    
    return max_area

# Example: [1,8,6,2,5,4,8,3,7] → 49
# (between index 1(8) and 8(7), width=7, height=7, area=49)
```

**Key Insight:**
```
WHY move the SHORTER pointer?
- Area = width × min_height
- Moving the TALLER pointer can only decrease area (width shrinks, height same or worse)
- Moving the SHORTER pointer MIGHT increase area (width shrinks, but height could improve)
```

---

## 🎯 Practice Problems

### Problem 1A: Two Sum Sorted (HackerRank)
**Difficulty:** Easy
**Link:** https://www.hackerrank.com/challenges/find-pair

Two pointer on sorted array to find pair with sum = target

**Hint:** Array is already sorted, use two pointers from opposite ends

**Expected Time:** 10-15 min

---

### Problem 1B: Valid Parentheses Counting (CodeSignal)
**Difficulty:** Easy
**Link:** https://codesignal.com/arcade/intro/level-2

Count matching parentheses

**Hint:** Think about which character comes first/last

**Expected Time:** 10 min

---

### Problem 1C: Remove Duplicates from Sorted Array (LeetCode #26)
**Difficulty:** Easy
**Link:** https://leetcode.com/problems/remove-duplicates-from-sorted-array/

Remove duplicates in-place, return new length

**Hint:** Two pointers, one for writing, one for reading

**Expected Time:** 15-20 min

---

### Problem 1D: Merge Sorted Array (LeetCode #88)
**Difficulty:** Easy
**Link:** https://leetcode.com/problems/merge-sorted-array/

Merge two sorted arrays in-place (from end to start!)

**Hint:** Start from end to avoid overwriting

**Expected Time:** 15-20 min

---

### Problem 1E: 3Sum (HackerRank - Pattern Extension)
**Difficulty:** Medium
**Link:** https://www.hackerrank.com/challenges/3d-surface-area

Find all unique triplets that sum to 0

**Hint:** Fix one number, use two-pointer for other two

**Expected Time:** 25-30 min

---

## 🔑 Key Takeaways This Week

✅ **Hash Maps:** When you need O(1) lookups or counting
✅ **Two Pointers:** When you have sorted data and need pairs
✅ **Recognition:** Read problem → Identify pattern → Choose approach
✅ **Edge Cases:** Always test empty, single element, duplicates, negatives

## Common Mistakes

❌ Using hash map when array already sorted (two-pointer better)
❌ Modifying array while iterating over it
❌ Forgetting to check if complement already exists
❌ Not testing with duplicates

## Next Week

Week 2 dives into **Arrays Part 1**: Sliding Window (substring patterns), Prefix Sums (range queries), Matrix problems.

These patterns build on today's two-pointer thinking but move forward through array instead of opposing directions.

---

**Progress Check:**
- [ ] Understand why hash maps are O(1)
- [ ] Can identify two-pointer situations
- [ ] Code at least 3 problems without solution reference
- [ ] Know 3 edge cases per pattern
