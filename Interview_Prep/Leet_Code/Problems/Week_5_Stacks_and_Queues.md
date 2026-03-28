# Week 5: Stacks & Queues
## LIFO/FIFO Operations, Monotonic Stack, Simulation

**What You'll Learn:** Stack operations, queue basics, monotonic stack optimization, simulation patterns

**Time Investment:** 4-5 hours | **Problems:** 6 | **Difficulty:** Medium

---

## 📌 Pattern #10: Stack - LIFO (Last In First Out)

### Recognition Signal
Problem asks you to:
- Match parentheses/brackets
- Evaluate expressions
- Undo/redo functionality
- Track previous states
- Nested structures

**Interview Analogy:** Stack of plates. Last plate placed is first one you grab. Perfect for "most recent" operations.

### Mental Model: Pairing & Nesting

```
PROBLEM: Valid parentheses "(()())"

As we scan left to right:
Char: ( ( ) ( ) )
Stack: 
    ( → push

    ( ( → push

    ( ( → pop (found match!)
    (

    ( ( → push

    ( ( → pop (found match!)
    (

    ( → pop (found match!)
    empty

Empty stack at end? Valid! ✓
```

### Code Template

```python
def valid_parentheses(s):
    stack = []
    pairs = {'(': ')', '{': '}', '[': ']'}
    
    for char in s:
        if char in pairs:
            # Opening bracket
            stack.append(char)
        else:
            # Closing bracket
            if not stack or pairs[stack.pop()] != char:
                return False
    
    # All brackets matched?
    return len(stack) == 0

# Complexity:
# - Time: O(n) - one pass
# - Space: O(n) - stack size
```

---

## 🔥 Problem 5.1: Valid Parentheses
**Platform:** LeetCode #20 | **Difficulty:** Easy | **Frequency:** Daily

**Problem:** Validate if parentheses/brackets are properly matched.

**Link:** https://leetcode.com/problems/valid-parentheses/

**Solved Example:**
```python
def isValid(s):
    stack = []
    pairs = {'(': ')', '{': '}', '[': ']'}
    
    for char in s:
        if char in pairs:
            stack.append(char)
        else:
            if not stack or pairs[stack.pop()] != char:
                return False
    
    return len(stack) == 0

# Example: "([{}])" → True
# Example: "([)]" → False (interleaved, not nested)

# Why it works: each closing must match most recent opening
# Stack naturally handles this (LIFO)
```

**Time Complexity:** O(n)
**Space Complexity:** O(n)

---

## 📌 Pattern #11: Monotonic Stack

### Recognition Signal
Problem asks you to:
- Find next/previous greater/smaller element
- Daily temperature problems
- Largest rectangle in histogram
- Stock span
- Any "next X" problem

**Interview Analogy:** Line of people by height. If you're looking for next person taller than you, check from back to front of line (monotonic).

### Mental Model: Decreasing Order

```
PROBLEM: Find next greater element

Array: [1, 2, 1, 2, 3]
Index:  0  1  2  3  4

For each element, find first larger element to its right

Index 0 (val=1): Next greater is 2 at index 1
Index 1 (val=2): Next greater is 3 at index 4
Index 2 (val=1): Next greater is 2 at index 3
Index 3 (val=2): Next greater is 3 at index 4
Index 4 (val=3): No greater element

Stack approach (maintain decreasing):
Process 1: stack=[1]
Process 2: 2>1, pop 1 (found 2 > 1), stack=[2]
Process 1: 1<2, stack=[2,1]
Process 2: 2>1, pop 1 (found 2 > 1), 2=2, stack=[2,2]
Process 3: 3>2, pop both (found 3 > them), stack=[3]

Result: [2, 3, 2, 3, -1] ✓
```

### Code Template

```python
def nextGreaterElement(nums):
    stack = []
    result = {}
    
    # Process from right to left
    for num in reversed(nums):
        # Pop smaller elements
        while stack and stack[-1] <= num:
            stack.pop()
        
        # Top of stack is next greater (if exists)
        result[num] = stack[-1] if stack else -1
        
        # Push current
        stack.append(num)
    
    return [result[num] for num in nums]

# Complexity:
# - Time: O(n) - each element pushed/popped once
# - Space: O(n) - stack + result map
```

---

## 🔥 Problem 5.2: Next Greater Element
**Platform:** HackerRank | **Difficulty:** Medium | **Frequency:** Amazon, Google

**Problem:** Find next greater element for each element.

**Link:** https://www.hackerrank.com/challenges/solve-me-first

**Solved Example:**
```python
def nextGreaterElements(nums):
    stack = []
    result = [-1] * len(nums)
    n = len(nums)
    
    # Process twice for circular array
    for i in range(2 * n):
        num = nums[i % n]
        
        # Pop smaller elements
        while stack and nums[stack[-1]] < num:
            result[stack.pop()] = num
        
        if i < n:
            stack.append(i)
    
    return result

# Example: [1, 2, 1] (circular)
# Output: [2, -1, 2]
# (1 at index 0 wraps around to find 2)
```

**Time Complexity:** O(n)
**Space Complexity:** O(n)

---

## 🔥 Problem 5.3: Daily Temperatures
**Platform:** CodeSignal | **Difficulty:** Medium | **Frequency:** Facebook, Uber

**Problem:** Find days until warmer temperature for each day.

**Link:** https://codesignal.com/arcade/intro/level-3

**Solved Example:**
```python
def dailyTemperatures(temps):
    stack = []  # Store indices
    result = [0] * len(temps)
    
    for i, temp in enumerate(temps):
        # Pop if current is warmer
        while stack and temps[stack[-1]] < temp:
            prev_idx = stack.pop()
            result[prev_idx] = i - prev_idx
        
        stack.append(i)
    
    return result

# Example: temps=[73, 74, 75, 71, 69, 72, 76, 73]
# Output: [1, 1, 4, 2, 1, 1, 0, 0]
# 73 → 74 (1 day away)
# 74 → 75 (1 day away)
# 75 → 76 (4 days away)
# 76 → None (no warmer, 0)
```

**Time Complexity:** O(n)
**Space Complexity:** O(n)

---

## 📌 Pattern #12: Queue - FIFO (First In First Out)

### Recognition Signal
Problem asks you to:
- Process in order (BFS)
- Sliding window maximum
- Task scheduling
- Waiting queue
- Deque operations

**Interview Analogy:** Queue at store. First person in is first to be served. Fair and ordered.

### Code Template

```python
from collections import deque

class Queue:
    def __init__(self):
        self.queue = deque()
    
    def enqueue(self, val):
        self.queue.append(val)
    
    def dequeue(self):
        return self.queue.popleft() if self.queue else None
    
    def is_empty(self):
        return len(self.queue) == 0

# Operations: O(1) for all

# Example: BFS uses queue
def bfs(start_node, neighbors):
    queue = deque([start_node])
    visited = {start_node}
    
    while queue:
        node = queue.popleft()
        
        for neighbor in neighbors[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    
    return visited
```

---

## 🔥 Problem 5.4: Min Stack
**Platform:** LeetCode #155 | **Difficulty:** Easy | **Frequency:** Google, Microsoft

**Problem:** Implement stack with push, pop, top, and getMin in O(1).

**Link:** https://leetcode.com/problems/min-stack/

**Solved Example:**
```python
class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []
    
    def push(self, val: int) -> None:
        self.stack.append(val)
        # Track minimum at each level
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)
    
    def pop(self) -> None:
        if self.stack[-1] == self.min_stack[-1]:
            self.min_stack.pop()
        self.stack.pop()
    
    def top(self) -> int:
        return self.stack[-1]
    
    def getMin(self) -> int:
        return self.min_stack[-1]

# Example:
# push(3): stack=[3], min_stack=[3]
# push(1): stack=[3,1], min_stack=[3,1]
# getMin(): returns 1
# pop(): stack=[3], min_stack=[3]
```

**Time Complexity:** O(1) all operations
**Space Complexity:** O(n)

---

## 🔥 Problem 5.5: Evaluate Reverse Polish Notation
**Platform:** HackerRank | **Difficulty:** Medium | **Frequency:** Amazon, Stripe

**Problem:** Evaluate expression in Reverse Polish Notation.

**Link:** https://www.hackerrank.com/challenges/solve-me-first

**Solved Example:**
```python
def evalRPN(tokens):
    stack = []
    operators = {'+', '-', '*', '/'}
    
    for token in tokens:
        if token in operators:
            # Pop two operands
            b = stack.pop()
            a = stack.pop()
            
            # Apply operator
            if token == '+':
                result = a + b
            elif token == '-':
                result = a - b
            elif token == '*':
                result = a * b
            elif token == '/':
                # Truncate towards zero
                result = int(a / b)
            
            stack.append(result)
        else:
            # It's a number
            stack.append(int(token))
    
    return stack[0]

# Example: ["2", "1", "+", "3", "*"] → 9
# Process: 2 1 + → 3, then 3 3 * → 9
# Stack: [2] → [2,1] → [3] → [3,3] → [9]
```

**Time Complexity:** O(n)
**Space Complexity:** O(n)

---

## 🔥 Problem 5.6: Implement Queue Using Stacks
**Platform:** LeetCode #232 | **Difficulty:** Easy | **Frequency:** Google, Facebook

**Problem:** Implement queue using only stacks.

**Link:** https://leetcode.com/problems/implement-queue-using-stacks/

**Solved Example:**
```python
class MyQueue:
    def __init__(self):
        self.in_stack = []  # Push elements here
        self.out_stack = []  # Pop from here
    
    def push(self, x: int) -> None:
        self.in_stack.append(x)
    
    def pop(self) -> int:
        self.peek()  # Ensure out_stack has elements
        return self.out_stack.pop()
    
    def peek(self) -> int:
        # If out_stack is empty, transfer from in_stack
        if not self.out_stack:
            while self.in_stack:
                self.out_stack.append(self.in_stack.pop())
        
        return self.out_stack[-1]
    
    def empty(self) -> bool:
        return not self.in_stack and not self.out_stack

# Idea: Two stacks simulate queue behavior
# in_stack: normal stack (push)
# out_stack: reversed (pop gives FIFO order)
```

**Time Complexity:** O(1) amortized
**Space Complexity:** O(n)

---

## 🎯 Practice Problems This Week

### Problem 5A: Simplify Path (LeetCode #71)
**Difficulty:** Medium
Simplify Unix file path

**Hint:** Stack for directory names

**Link:** https://leetcode.com/problems/simplify-path/

**Time:** 20 min

---

### Problem 5B: Largest Rectangle in Histogram (HackerRank)
**Difficulty:** Hard
Find largest rectangle area in histogram

**Hint:** Monotonic stack for boundaries

**Time:** 30 min

---

### Problem 5C: Sliding Window Maximum (CodeSignal)
**Difficulty:** Hard
Find maximum in sliding window

**Hint:** Deque for efficient tracking

**Time:** 25 min

---

### Problem 5D: Basic Calculator (LeetCode #224)
**Difficulty:** Hard
Evaluate mathematical expression with +, -, *, /

**Hint:** Stack for operations

**Time:** 30 min

---

### Problem 5E: Implement LRU Cache (from Week 11 preview)
**Difficulty:** Medium
Design LRU cache with stack concepts

**Time:** 25 min

---

## 🔑 Key Takeaways This Week

✅ **Stack:** LIFO, perfect for matching and reversal
✅ **Queue:** FIFO, essential for BFS
✅ **Monotonic Stack:** O(n) solution for "next X" problems
✅ **Auxiliary Stack:** Track min/max alongside main stack
✅ **Stack vs Queue:** Choose based on ordering needs

## Common Mistakes

❌ Confusing stack and queue behavior
❌ Not checking empty before pop
❌ Forgetting to handle special cases (negative numbers, division)
❌ Not using monotonic stack when optimization needed
❌ Stack overflow on very large inputs

## Next Week

Week 6: **Trees & Binary Search** - Tree traversals, BST properties, path problems

---

**Weekly Checklist:**
- [ ] Understand LIFO vs FIFO completely
- [ ] Can recognize monotonic stack problems
- [ ] Implemented stack with min tracking
- [ ] Solved at least 4 of 6 problems
- [ ] Know Queue operations fluently
