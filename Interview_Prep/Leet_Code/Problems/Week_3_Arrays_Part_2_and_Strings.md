# Week 3: Arrays Part 2 & Strings
## In-Place Operations, Rotation, String Manipulation

**What You'll Learn:** In-place array modifications, matrix operations, string pattern matching, greedy approaches

**Time Investment:** 4-5 hours | **Problems:** 6 | **Difficulty:** Medium

---

## 📌 Pattern #5: In-Place Operations

### Recognition Signal
Problem asks you to:
- Modify array without extra space O(1)
- "Do it in-place"
- Rotate/shift array
- Remove elements from array
- Avoid creating new array

**Interview Analogy:** You have a bookshelf and need to reorganize books. Instead of using a second shelf (O(n) space), you shuffle books directly on the original shelf (O(1) space).

### Mental Model: Reverse Technique

```
PROBLEM: Rotate array [1,2,3,4,5] right by 2 positions

Brute Force (❌ uses O(n) space):
Result = [4, 5, 1, 2, 3]

Smart Way (✅ O(1) space):
Original: [1, 2, 3, 4, 5]

Step 1: Reverse entire array
        [5, 4, 3, 2, 1]

Step 2: Reverse first k elements (k=2)
        [4, 5, 3, 2, 1]

Step 3: Reverse remaining elements
        [4, 5, 1, 2, 3]

Result: [4, 5, 1, 2, 3] ✓
```

### Code Template

```python
def rotate_array(nums, k):
    k = k % len(nums)  # Handle k > length
    
    # Helper to reverse array in place
    def reverse(start, end):
        while start < end:
            nums[start], nums[end] = nums[end], nums[start]
            start += 1
            end -= 1
    
    # Three reverses = rotation
    reverse(0, len(nums) - 1)        # Reverse entire
    reverse(0, k - 1)                 # Reverse first k
    reverse(k, len(nums) - 1)         # Reverse rest
    
    return nums

# Complexity:
# - Time: O(n) - three linear passes
# - Space: O(1) - only swap pointers
```

---

## 🔥 Problem 3.1: Rotate Array (In-Place)
**Platform:** LeetCode #189 | **Difficulty:** Medium | **Frequency:** Amazon, Google

**Problem:** Rotate array to right by k steps in-place.

**Link:** https://leetcode.com/problems/rotate-array/

**Solved Example:**
```python
def rotate(nums, k):
    k = k % len(nums)
    
    def reverse(start, end):
        while start < end:
            nums[start], nums[end] = nums[end], nums[start]
            start += 1
            end -= 1
    
    reverse(0, len(nums) - 1)
    reverse(0, k - 1)
    reverse(k, len(nums) - 1)

# Example: nums=[1,2,3,4,5], k=2
# Step 1: [5,4,3,2,1]
# Step 2: [4,5,3,2,1]
# Step 3: [4,5,1,2,3]
# Output: [4,5,1,2,3]
```

**Time Complexity:** O(n) - three passes through array
**Space Complexity:** O(1) - only swap

**Edge Cases:**
```python
# k > array length
rotate([1,2,3], 5)  # Same as k=2, output [2,3,1]

# k = 0
rotate([1,2,3], 0)  # No rotation, output [1,2,3]

# Single element
rotate([1], 10)     # Output [1]
```

---

## 📌 Pattern #6: Matrix Operations

### Recognition Signal
Problem asks you to:
- Rotate matrix 90/180 degrees
- Spiral traverse
- Transpose matrix
- Set matrix row/column to zero
- Access neighbors (up, down, left, right)

**Interview Analogy:** Image in a phone. Rotate it 90 degrees: top becomes left, right becomes top. Need to reorganize the entire grid.

### Mental Model: Layer by Layer

```
PROBLEM: Rotate matrix 90 degrees clockwise

Original:          After Rotation:
1 2 3              7 4 1
4 5 6              8 5 2
7 8 9              9 6 3

Key insight: Rotate in concentric layers
Layer 1 (outer): [1,2,3,6,9,8,7,4] → [7,4,1,2,3,6,9,8]
Layer 2 (inner): [5] (single element, stays same)

For each layer:
1. Get top row
2. Left column → Top row
3. Bottom row (reversed) → Left column
4. Right column (reversed) → Bottom row
5. Saved top row → Right column
```

### Code Template

```python
def rotate_matrix(matrix):
    n = len(matrix)
    
    # Process layer by layer
    for layer in range(n // 2):
        first = layer
        last = n - 1 - layer
        
        for i in range(first, last):
            offset = i - first
            
            # Save top
            top = matrix[first][i]
            
            # Move left to top
            matrix[first][i] = matrix[last - offset][first]
            
            # Move bottom to left
            matrix[last - offset][first] = matrix[last][last - offset]
            
            # Move right to bottom
            matrix[last][last - offset] = matrix[i][last]
            
            # Move top to right
            matrix[i][last] = top
    
    return matrix

# Complexity:
# - Time: O(n²) - visit each element once
# - Space: O(1) - only temp variable
```

---

## 🔥 Problem 3.2: Rotate Matrix 90 Degrees
**Platform:** HackerRank | **Difficulty:** Medium | **Frequency:** Microsoft, Adobe

**Problem:** Rotate n×n matrix 90 degrees clockwise in-place.

**Link:** https://www.hackerrank.com/challenges/solve-me-first

**Solved Example:**
```python
def rotate(matrix):
    n = len(matrix)
    
    # Transpose the matrix
    for i in range(n):
        for j in range(i + 1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    
    # Reverse each row
    for i in range(n):
        matrix[i].reverse()
    
    return matrix

# Simpler approach: Transpose + Reverse rows
# Original:        Transpose:       Reverse rows:
# 1 2 3            1 4 7            7 4 1
# 4 5 6    →       2 5 8       →    8 5 2
# 7 8 9            3 6 9            9 6 3
```

**Time Complexity:** O(n²)
**Space Complexity:** O(1)

---

## 🔥 Problem 3.3: Set Matrix Zeroes
**Platform:** CodeSignal | **Difficulty:** Medium | **Frequency:** Facebook, Google

**Problem:** Set entire row and column to 0 if element is 0 (in-place).

**Link:** https://codesignal.com/arcade/intro/level-3

**Solved Example:**
```python
def setZeroes(matrix):
    m, n = len(matrix), len(matrix[0])
    
    # Mark first row and col if they should be zero
    first_row_zero = False
    first_col_zero = False
    
    for i in range(m):
        if matrix[i][0] == 0:
            first_col_zero = True
    
    for j in range(n):
        if matrix[0][j] == 0:
            first_row_zero = True
    
    # Use first row/col as markers
    for i in range(1, m):
        for j in range(1, n):
            if matrix[i][j] == 0:
                matrix[i][0] = 0
                matrix[0][j] = 0
    
    # Set zeros based on markers
    for i in range(1, m):
        for j in range(1, n):
            if matrix[i][0] == 0 or matrix[0][j] == 0:
                matrix[i][j] = 0
    
    # Handle first row and column
    if first_row_zero:
        for j in range(n):
            matrix[0][j] = 0
    
    if first_col_zero:
        for i in range(m):
            matrix[i][0] = 0

# Complexity: O(m×n) time, O(1) space (clever reuse of first row/col)
```

---

## 📌 Pattern #7: String Matching & Conversion

### Recognition Signal
Problem asks you to:
- Find substring/pattern in string
- Convert between formats (int↔string, etc)
- Check if strings are anagram/palindrome
- Pattern matching with wildcards
- String encoding/decoding

**Interview Analogy:** Finding a word in a book. Instead of checking every position naively, use smart pattern matching.

### Mental Model: Character Mapping

```
PROBLEM: Check if two strings are anagrams

Input: "listen", "silent"

Character count of "listen": l:1, i:1, s:1, t:1, e:1, n:1
Character count of "silent": s:1, i:1, l:1, e:1, n:1, t:1

Same counts? YES → Anagrams ✓
```

### Code Template

```python
def is_anagram(s, t):
    # Method 1: Count characters
    from collections import Counter
    return Counter(s) == Counter(t)
    
    # Method 2: Sort (simpler but slower)
    # return sorted(s) == sorted(t)
    
    # Method 3: Manual counting
    if len(s) != len(t):
        return False
    
    count = {}
    for char in s:
        count[char] = count.get(char, 0) + 1
    
    for char in t:
        if char not in count:
            return False
        count[char] -= 1
        if count[char] < 0:
            return False
    
    return True

# Complexity:
# - Time: O(n) for Counter, O(n log n) for sort
# - Space: O(1) for fixed alphabet (26 letters)
```

---

## 🔥 Problem 3.4: Valid Anagram
**Platform:** LeetCode #242 | **Difficulty:** Easy | **Frequency:** Daily

**Problem:** Check if two strings are anagrams (same chars, different order).

**Link:** https://leetcode.com/problems/valid-anagram/

**Solved Example:**
```python
def isAnagram(s, t):
    if len(s) != len(t):
        return False
    
    char_count = {}
    
    # Count characters in s
    for char in s:
        char_count[char] = char_count.get(char, 0) + 1
    
    # Decrement for characters in t
    for char in t:
        if char not in char_count:
            return False
        char_count[char] -= 1
        if char_count[char] < 0:
            return False
    
    # All counts should be 0
    return all(count == 0 for count in char_count.values())

# Example: s="anagram", t="nagaram" → True
# Example: s="rat", t="car" → False
```

**Time Complexity:** O(n)
**Space Complexity:** O(1) - max 26 lowercase letters

---

## 🔥 Problem 3.5: Integer to Roman
**Platform:** HackerRank | **Difficulty:** Medium | **Frequency:** Amazon, Microsoft

**Problem:** Convert integer (1-3999) to Roman numeral.

**Link:** https://www.hackerrank.com/challenges/solve-me-first

**Solved Example:**
```python
def intToRoman(num):
    values = [
        (1000, 'M'), (900, 'CM'), (500, 'D'), (400, 'CD'),
        (100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'),
        (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')
    ]
    
    result = ""
    
    # Greedy: use largest values first
    for value, symbol in values:
        count = num // value
        if count:
            result += symbol * count
            num -= value * count
    
    return result

# Example: 58 → "LVIII"
# 50 (L) + 5 (V) + 3 (III) = "LVIII"

# Greedy works because Roman numeral structure allows it
# Always use largest possible value first
```

**Time Complexity:** O(1) - fixed number of conversions
**Space Complexity:** O(1) - output size bounded (max ~15 chars)

---

## 🔥 Problem 3.6: Longest Common Prefix
**Platform:** LeetCode #14 | **Difficulty:** Easy | **Frequency:** Google, Facebook

**Problem:** Find longest common prefix in array of strings.

**Link:** https://leetcode.com/problems/longest-common-prefix/

**Solved Example:**
```python
def longestCommonPrefix(strs):
    if not strs:
        return ""
    
    # Find minimum length string
    min_len = min(len(s) for s in strs)
    
    # Check each position
    for i in range(min_len):
        char = strs[0][i]
        
        # Check if all strings have same char at position i
        for s in strs[1:]:
            if s[i] != char:
                return strs[0][:i]
    
    # All chars matched
    return strs[0][:min_len]

# Example: ["flower","flow","flight"] → "fl"
# Position 0: all have 'f' ✓
# Position 1: all have 'l' ✓
# Position 2: flower='o', flow='o', flight='i' ✗ → return "fl"
```

**Time Complexity:** O(m×n) - m strings, n is min length
**Space Complexity:** O(1)

**Alternate: Horizontal Scanning**
```python
def longestCommonPrefix(strs):
    if not strs:
        return ""
    
    prefix = strs[0]
    
    for s in strs[1:]:
        # Trim prefix until it matches beginning of s
        while not s.startswith(prefix):
            prefix = prefix[:-1]
            if not prefix:
                return ""
    
    return prefix
```

---

## 🎯 Practice Problems This Week

### Problem 3A: Remove Element (LeetCode #27)
**Difficulty:** Easy
Remove all instances of value in-place

**Hint:** Use two pointers, one to write, one to read

**Link:** https://leetcode.com/problems/remove-element/

**Time:** 15 min

---

### Problem 3B: Plus One (LeetCode #66)
**Difficulty:** Easy
Increment large number represented as array

**Hint:** Handle carries like addition

**Link:** https://leetcode.com/problems/plus-one/

**Time:** 15 min

---

### Problem 3C: Spiral Matrix (HackerRank)
**Difficulty:** Medium
Traverse matrix in spiral order

**Hint:** Track boundaries, shrink each layer

**Time:** 25 min

---

### Problem 3D: String to Integer (CodeSignal)
**Difficulty:** Medium
Parse string to integer (handle overflow, signs)

**Hint:** Character by character, check for overflow

**Time:** 20 min

---

### Problem 3E: Zigzag Conversion (LeetCode #6)
**Difficulty:** Medium
Convert string in zigzag pattern

**Hint:** Track row and direction separately

**Link:** https://leetcode.com/problems/zigzag-conversion/

**Time:** 25 min

---

### Problem 3F: Group Anagrams (LeetCode #49)
**Difficulty:** Medium
Group anagrams together

**Hint:** Use sorted string as key in hash map

**Link:** https://leetcode.com/problems/group-anagrams/

**Time:** 20 min

---

## 🔑 Key Takeaways This Week

✅ **In-place:** Modify data structure without extra space
✅ **Reverse technique:** Powerful for rotations and rearrangements
✅ **Matrix operations:** Layer-by-layer thinking
✅ **String patterns:** Character counting and mapping
✅ **Greedy for conversions:** Use largest/best choice first

## Common Mistakes

❌ Creating new array when problem says "in-place"
❌ Not handling matrix boundaries correctly
❌ String comparison without considering order
❌ Off-by-one in layer-by-layer matrix operations
❌ Not considering special characters in string problems

## Next Week

Week 4: **Linked Lists** - Pointer manipulation, fast/slow pattern, cycle detection

Will introduce you to linked data structures and pointer-based algorithms.

---

**Weekly Checklist:**
- [ ] Understand in-place operations fully
- [ ] Can rotate array/matrix in O(1) space
- [ ] Solved at least 4 of 6 problems
- [ ] Know layer-by-layer matrix approach
