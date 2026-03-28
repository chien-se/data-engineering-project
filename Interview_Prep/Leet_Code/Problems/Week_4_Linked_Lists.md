# Week 4: Linked Lists
## Pointer Manipulation, Reversal, Cycle Detection

**What You'll Learn:** Pointer operations, linked list reversal, fast/slow pointers, cycle detection, list manipulation

**Time Investment:** 4-5 hours | **Problems:** 5 | **Difficulty:** Medium

---

## 📌 Pattern #8: Pointer Manipulation (3-Pointer Reversal)

### Recognition Signal
Problem asks you to:
- Reverse linked list
- Modify node connections
- Reorder list nodes
- Rearrange pointers
- Chain manipulation

**Interview Analogy:** You're standing in a line facing right. To reverse the line, each person turns around. You need to coordinate: the person behind you is now in front.

### Mental Model: Three Pointers

```
PROBLEM: Reverse linked list 1 → 2 → 3 → None

Visual:
prev    curr    next
 ↓      ↓       ↓
None → 1 → 2 → 3 → None

Step 1: Save next node before breaking connection
prev    curr    next
 ↓      ↓       ↓
None    1       2 → 3

Step 2: Reverse link (curr points to prev)
prev    curr
 ↓      ↓
None ← 1    2 → 3

Step 3: Move pointers forward
        prev    curr    next
         ↓      ↓       ↓
        None ← 1 ← 2    3

Repeat until curr is None

Final: 3 → 2 → 1 → None ✓
```

### Code Template

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_list(head):
    prev = None
    curr = head
    
    while curr:
        # Save next before changing pointer
        next_temp = curr.next
        
        # Reverse the link
        curr.next = prev
        
        # Move pointers forward
        prev = curr
        curr = next_temp
    
    # prev is now the new head
    return prev

# Complexity:
# - Time: O(n) - visit each node once
# - Space: O(1) - only pointers, no extra structure
```

---

## 🔥 Problem 4.1: Reverse Linked List
**Platform:** LeetCode #206 | **Difficulty:** Easy | **Frequency:** Daily at FAANG

**Problem:** Reverse a singly linked list.

**Link:** https://leetcode.com/problems/reverse-linked-list/

**Solved Example:**
```python
def reverseList(head):
    prev = None
    curr = head
    
    while curr:
        next_temp = curr.next
        curr.next = prev
        prev = curr
        curr = next_temp
    
    return prev

# Example: 1 → 2 → 3 → None
# Output: 3 → 2 → 1 → None

# Trace:
# Initially: prev=None, curr=1
# After step 1: prev=1, curr=2, 1.next=None
# After step 2: prev=2, curr=3, 2.next=1
# After step 3: prev=3, curr=None, 3.next=2
# Return prev (which is 3)
```

**Time Complexity:** O(n)
**Space Complexity:** O(1) iterative, O(n) recursive

**Recursive Approach:**
```python
def reverseListRecursive(head):
    if not head or not head.next:
        return head
    
    # Reverse the rest of list
    new_head = reverseListRecursive(head.next)
    
    # Fix pointers: make next node point back to current
    head.next.next = head
    head.next = None
    
    return new_head
```

---

## 📌 Pattern #9: Fast & Slow Pointers

### Recognition Signal
Problem asks you to:
- Find middle of list
- Detect cycle
- Find kth element from end
- Find start of cycle
- Merge two sorted lists

**Interview Analogy:** Tortoise and hare. Hare runs twice as fast. When hare finishes, tortoise is at middle.

### Mental Model: Two Speed Movement

```
PROBLEM: Find middle of linked list

Slow pointer: moves 1 step at a time
Fast pointer: moves 2 steps at a time

List: 1 → 2 → 3 → 4 → 5 → None

Step 1:
slow: 1, fast: 2
slow → 1  fast → 2 → 3

Step 2:
slow: 2, fast: 4
slow → 2  fast → 4 → 5

Step 3:
slow: 3, fast: None (finished!)
slow at middle ✓

Result: Middle is at 3
```

### Code Template

```python
def find_middle(head):
    slow = head
    fast = head
    
    # fast moves 2 steps, slow moves 1
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    
    # slow is now at middle
    return slow

# Complexity:
# - Time: O(n)
# - Space: O(1)
```

---

## 🔥 Problem 4.2: Middle of Linked List
**Platform:** LeetCode #876 | **Difficulty:** Easy | **Frequency:** High

**Problem:** Return the middle node of a linked list.

**Link:** https://leetcode.com/problems/middle-of-the-linked-list/

**Solved Example:**
```python
def middleNode(head):
    slow = head
    fast = head
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    
    return slow

# Example: 1 → 2 → 3 → 4 → 5 → None
# Output: 3 (return from node 3)

# If even: 1 → 2 → 3 → 4 → None
# Output: 3 (second middle)
```

**Time Complexity:** O(n)
**Space Complexity:** O(1)

**Edge Cases:**
```python
# Single node: 1 → None
# Output: 1 → None (single node is middle)

# Two nodes: 1 → 2 → None
# Output: 2 → None (second node in even case)
```

---

## 🔥 Problem 4.3: Detect Cycle in Linked List
**Platform:** CodeSignal | **Difficulty:** Medium | **Frequency:** Meta, Google

**Problem:** Check if linked list has a cycle.

**Link:** https://codesignal.com/arcade/intro/level-3

**Solved Example (Floyd's Algorithm):**
```python
def hasCycle(head):
    slow = head
    fast = head
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        
        # If they meet, there's a cycle
        if slow == fast:
            return True
    
    # If fast reaches end, no cycle
    return False

# Why it works:
# In a cycle, fast moves 2 steps, slow moves 1 step
# Fast is chasing slow in the cycle
# Eventually they will meet (like on a circular track)

# Example with cycle:
# 1 → 2 → 3 → 4 → 2 (cycle)
#     ^           |
#     |___________|
# 
# They will eventually meet at node 2 or 3
```

**Time Complexity:** O(n)
**Space Complexity:** O(1)

**Finding Cycle Start:**
```python
def detectCycleStart(head):
    slow = head
    fast = head
    
    # Find meeting point
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            break
    else:
        return None  # No cycle
    
    # Move slow to head, move both 1 step at a time
    # They meet at cycle start
    slow = head
    while slow != fast:
        slow = slow.next
        fast = fast.next
    
    return slow  # Cycle start node
```

---

## 🔥 Problem 4.4: Remove Nth Node From End
**Platform:** LeetCode #19 | **Difficulty:** Medium | **Frequency:** Amazon, Facebook

**Problem:** Remove the nth node from the end of list.

**Link:** https://leetcode.com/problems/remove-nth-node-from-end-of-list/

**Solved Example:**
```python
def removeNthFromEnd(head, n):
    # Dummy node helps handle edge case of removing head
    dummy = ListNode(0)
    dummy.next = head
    
    # Use two pointers with gap of n
    first = dummy
    second = dummy
    
    # Move first pointer n+1 steps ahead
    for _ in range(n + 1):
        if not first:
            return head
        first = first.next
    
    # Move both pointers until first reaches end
    while first:
        first = first.next
        second = second.next
    
    # Remove the node
    second.next = second.next.next
    
    return dummy.next

# Example: 1 → 2 → 3 → 4 → 5, n=2
# Remove node 4 (2nd from end)
# Output: 1 → 2 → 3 → 5

# Dummy helps: if removing head, dummy.next points to new head
```

**Time Complexity:** O(n)
**Space Complexity:** O(1)

**Edge Cases:**
```python
# Removing head: 1 → 2, n=2
# Dummy: 0 → 1 → 2
# Result: 2 (dummy.next points to 2)

# Single element: 1, n=1
# Result: None
```

---

## 🔥 Problem 4.5: Merge Two Sorted Lists
**Platform:** HackerRank | **Difficulty:** Easy | **Frequency:** Very Common

**Problem:** Merge two sorted linked lists into one sorted list.

**Link:** https://www.hackerrank.com/challenges/merge-sorted-linked-lists

**Solved Example:**
```python
def mergeTwoLists(list1, list2):
    # Dummy node simplifies code
    dummy = ListNode(0)
    current = dummy
    
    # Merge while both lists have nodes
    while list1 and list2:
        if list1.val < list2.val:
            current.next = list1
            list1 = list1.next
        else:
            current.next = list2
            list2 = list2.next
        
        current = current.next
    
    # Attach remaining nodes
    if list1:
        current.next = list1
    else:
        current.next = list2
    
    return dummy.next

# Example:
# list1: 1 → 2 → 4 → None
# list2: 1 → 3 → 4 → None
# Output: 1 → 1 → 2 → 3 → 4 → 4 → None

# Two-pointer comparison ensures sorted order
```

**Time Complexity:** O(n + m) - visit each node once
**Space Complexity:** O(1) - only pointers

---

## 🎯 Practice Problems This Week

### Problem 4A: Palindrome Linked List (LeetCode #234)
**Difficulty:** Easy
Check if linked list is palindrome

**Hint:** Find middle, reverse second half, compare

**Link:** https://leetcode.com/problems/palindrome-linked-list/

**Time:** 25 min

---

### Problem 4B: Swap Nodes in Pairs (LeetCode #24)
**Difficulty:** Medium
Swap every two adjacent nodes

**Hint:** Use dummy node, swap connections

**Link:** https://leetcode.com/problems/swap-nodes-in-pairs/

**Time:** 20 min

---

### Problem 4C: Remove Duplicates from Sorted List (HackerRank)
**Difficulty:** Easy
Remove duplicate values from sorted list

**Hint:** Skip nodes with same value

**Time:** 15 min

---

### Problem 4D: Intersection of Two Lists (CodeSignal)
**Difficulty:** Medium
Find intersection node of two lists

**Hint:** Length difference trick

**Time:** 20 min

---

### Problem 4E: Reverse in Groups (HackerRank)
**Difficulty:** Hard
Reverse every k nodes in linked list

**Hint:** Group reversal pattern

**Time:** 30 min

---

## 🔑 Key Takeaways This Week

✅ **Three pointers:** prev, curr, next for reversal
✅ **Fast/Slow:** Two different speeds solve many problems
✅ **Dummy node:** Simplifies edge cases (removing head)
✅ **Pointer arithmetic:** Mental model visualization is key
✅ **Floyd's algorithm:** Elegant cycle detection

## Common Mistakes

❌ Not saving next pointer before changing curr.next
❌ Forgetting dummy node for head removal
❌ Not handling None checks in while loops
❌ Off-by-one in fast/slow pointer distance
❌ Creating new nodes instead of rearranging pointers

## Next Week

Week 5: **Stacks & Queues** - Stack LIFO operations, queue FIFO, monotonic stack patterns

---

**Weekly Checklist:**
- [ ] Understand 3-pointer reversal completely
- [ ] Comfortable with fast/slow pointers
- [ ] Can detect cycles using Floyd's
- [ ] Solved at least 3 of 5 problems
- [ ] Know when to use dummy node
