# WEEK 1 PYTHON BASICS - COMPREHENSIVE SUMMARY
## Data Engineering Fundamentals & Python Programming

---

## TABLE OF CONTENTS
1. [Environment Setup](#environment-setup)
2. [Data Engineering Fundamentals](#data-engineering-fundamentals)
3. [Python Basics](#python-basics)
4. [Collections](#collections)
5. [Control Flow](#control-flow)
6. [Functions](#functions)
7. [File I/O](#file-io)
8. [Jupyter Notebooks](#jupyter-notebooks)
9. [Git & Version Control](#git--version-control)
10. [Quick Reference](#quick-reference)

---

## ENVIRONMENT SETUP

### Prerequisites
- Python 3.9+
- pip (Python package manager)
- Virtual environment
- VSCode or IDE
- Git

### Installation Commands

#### Python Installation
```bash
# Check Python version
python3 --version

# macOS (Homebrew)
brew install python@3.11

# Verify
python3 --version
```

#### Virtual Environment Setup
```bash
# Create virtual environment
python3 -m venv venv

# Activate (macOS/Linux)
source venv/bin/activate

# Activate (Windows)
venv\Scripts\activate

# Install packages
pip install pandas numpy jupyter requests beautifulsoup4

# Save dependencies
pip freeze > requirements.txt
```

#### Git Configuration
```bash
# Install Git
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Initialize repository
git init
```

---

## DATA ENGINEERING FUNDAMENTALS

### What is Data Engineering?

**Definition:** Building systems to collect, store, transform, and deliver data

**Core Responsibilities:**
- Extract data from sources (APIs, databases, logs)
- Store data in organized systems
- Transform data into useful formats
- Deliver data to users/models
- Monitor and maintain pipelines

### The Data Pipeline

```
SOURCE → EXTRACT → TRANSFORM → LOAD → DESTINATION
```

**Example:**
```
Raw sales data → Read from register → Organize by product → Store in database → Manager views reports
```

### ETL vs ELT

| Aspect | ETL | ELT |
|--------|-----|-----|
| **Order** | Extract → Transform → Load | Extract → Load → Transform |
| **Processing** | On-premise/staging | Cloud/warehouse |
| **Use Case** | Clean data first | Raw data stored |

### Data Quality

**Dimensions of Data Quality:**
- Completeness (no missing values)
- Accuracy (correct values)
- Consistency (uniform format)
- Timeliness (up-to-date)
- Validity (within valid range)

### Batch vs Real-Time Processing

| Type | Speed | Volume | Use Case |
|------|-------|--------|----------|
| **Batch** | Hours/minutes | Large | Reports, ML training |
| **Real-Time** | Seconds | Smaller | Fraud detection, dashboards |

---

## PYTHON BASICS

### Variables & Data Types

#### Variable Assignment
```python
# String
name = "Alice"
message = 'Hello World'

# Integer (whole numbers)
age = 30
count = 100

# Float (decimal numbers)
price = 19.99
temperature = 98.6

# Boolean (True/False)
is_active = True
is_admin = False

# Check type
print(type(name))      # <class 'str'>
print(type(age))       # <class 'int'>
print(type(price))     # <class 'float'>
```

#### Type Conversion
```python
# String to integer
age_string = "30"
age = int(age_string)

# Integer to string
count = 100
count_str = str(count)

# String to float
price_str = "19.99"
price = float(price_str)

# To boolean
bool_value = bool(1)  # True
bool_value = bool(0)  # False
```

#### Variable Naming Rules
```python
# ✅ Good
customer_name = "John"
total_amount = 100.50
is_completed = True

# ❌ Bad
Name = "John"         # Use lowercase
amount$ = 99          # No special characters
1amount = 99          # Can't start with number
```

### Operators

#### Arithmetic Operators
```python
# Addition
result = 10 + 5       # 15

# Subtraction
result = 10 - 3       # 7

# Multiplication
result = 4 * 5        # 20

# Division
result = 10 / 3       # 3.333...

# Integer division
result = 10 // 3      # 3

# Modulo (remainder)
result = 10 % 3       # 1

# Power
result = 5 ** 2       # 25

# Order of operations (PEMDAS)
result = 2 + 3 * 4    # 14 (multiply first)
```

#### Comparison Operators
```python
age = 25

age > 18              # True
age < 30              # True
age == 25             # True
age != 30             # True
age >= 25             # True
age <= 30             # True
```

#### Logical Operators
```python
# AND (both must be true)
age = 25
has_license = True
can_drive = age > 18 and has_license  # True

# OR (at least one must be true)
temperature = 15
is_cold = temperature < 0 or temperature > 100  # False

# NOT (opposite)
is_active = True
is_inactive = not is_active  # False
```

#### String Operators
```python
# Concatenation
first = "John"
last = "Doe"
full_name = first + " " + last  # "John Doe"

# Repetition
line = "-" * 20  # "--------------------"

# Membership
"world" in "hello world"  # True
```

### String Methods

```python
text = "hello world"

# Case conversion
print(text.upper())              # HELLO WORLD
print(text.capitalize())         # Hello world
print(text.title())              # Hello World

# Whitespace handling
text_with_spaces = "  hello  "
print(text_with_spaces.strip())  # "hello"
print(text_with_spaces.lstrip()) # "hello  "
print(text_with_spaces.rstrip()) # "  hello"

# Finding and replacing
print(text.replace("world", "python"))  # "hello python"
print(text.find("world"))               # 6 (index)
print("world" in text)                  # True

# Splitting and joining
words = text.split()                    # ["hello", "world"]
text_joined = "-".join(words)           # "hello-world"

# String length
length = len("Python")  # 6

# Checking content
print("HELLO".islower())   # False
print("hello".isupper())   # False
print("123".isdigit())     # True
```

---

## COLLECTIONS

### Lists

#### Creating and Accessing Lists
```python
# Create list
fruits = ["apple", "banana", "orange"]

# Access by index (starts at 0)
first = fruits[0]     # "apple"
second = fruits[1]    # "banana"

# Negative indexing (from end)
last = fruits[-1]     # "orange"
second_last = fruits[-2]  # "banana"

# List slicing
fruits[1:3]           # ["banana", "orange"]
fruits[:2]            # ["apple", "banana"]
fruits[::2]           # ["apple", "orange"] (every 2nd)
```

#### List Methods
```python
fruits = ["apple", "banana", "orange"]

# Add item
fruits.append("grape")  # ["apple", "banana", "orange", "grape"]

# Insert at position
fruits.insert(1, "mango")  # Insert at index 1

# Remove item
fruits.remove("banana")  # ["apple", "orange", "grape"]

# Remove by index
fruits.pop(0)  # Removes first item

# Length
len(fruits)    # 3

# Check membership
"apple" in fruits  # True

# Index of item
fruits.index("apple")  # 0

# Clear list
fruits.clear()  # []

# Copy list
fruits_copy = fruits.copy()

# Sort
numbers = [3, 1, 4, 1, 5]
numbers.sort()  # [1, 1, 3, 4, 5]
```

#### List Looping
```python
fruits = ["apple", "banana", "orange"]

# Loop through list
for fruit in fruits:
    print(fruit)

# Loop with index
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

# Loop with range
for i in range(len(fruits)):
    print(fruits[i])
```

### Dictionaries

#### Creating and Accessing Dictionaries
```python
# Create dictionary
person = {
    "name": "John",
    "age": 30,
    "city": "Seattle",
    "email": "john@example.com"
}

# Access values
name = person["name"]       # "John"
age = person["age"]         # 30

# Using .get() (safer)
phone = person.get("phone", "N/A")  # Returns "N/A" if not found
```

#### Dictionary Methods
```python
person = {"name": "John", "age": 30}

# Add/update
person["email"] = "john@example.com"
person["age"] = 31

# Remove
del person["age"]

# Check key exists
if "email" in person:
    print("Has email!")

# Get all keys
keys = person.keys()

# Get all values
values = person.values()

# Get all items (key-value pairs)
items = person.items()

# Clear dictionary
person.clear()

# Copy dictionary
person_copy = person.copy()
```

#### Dictionary Looping
```python
person = {"name": "John", "age": 30, "city": "Seattle"}

# Loop through keys
for key in person:
    print(f"{key}: {person[key]}")

# Loop through items
for key, value in person.items():
    print(f"{key}: {value}")

# Loop through keys
for key in person.keys():
    print(key)

# Loop through values
for value in person.values():
    print(value)
```

### Lists of Dictionaries (Very Common!)

```python
# List of dictionaries
users = [
    {"id": 1, "name": "Alice", "age": 25},
    {"id": 2, "name": "Bob", "age": 30},
    {"id": 3, "name": "Charlie", "age": 35}
]

# Access first user's name
alice_name = users[0]["name"]  # "Alice"

# Loop and print
for user in users:
    print(f"{user['name']} is {user['age']} years old")
```

---

## CONTROL FLOW

### If/Else Statements

```python
age = 25

# Simple if
if age >= 18:
    print("Adult")

# If/else
if age < 18:
    print("Minor")
else:
    print("Adult")

# If/elif/else (multiple conditions)
if age < 13:
    print("Child")
elif age < 18:
    print("Teenager")
elif age < 65:
    print("Adult")
else:
    print("Senior")

# Nested conditions
if age >= 18:
    if has_license:
        print("Can drive")
    else:
        print("Cannot drive")

# One-liner (ternary)
status = "Adult" if age >= 18 else "Minor"

# Multiple conditions
if age >= 18 and has_license and has_insurance:
    print("Can drive")

if age < 13 or age > 65:
    print("Special category")
```

### For Loops

```python
# Loop through list
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(fruit)

# Loop with range
for i in range(5):      # i = 0, 1, 2, 3, 4
    print(i)

# Range with start and stop
for i in range(1, 6):   # 1, 2, 3, 4, 5 (stops before 6)
    print(i)

# Range with step
for i in range(0, 10, 2):  # 0, 2, 4, 6, 8
    print(i)

# Loop with enumerate (get index)
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

# Nested loops
for i in range(3):
    for j in range(2):
        print(f"({i}, {j})")

# Loop with else (runs if loop completes)
for i in range(5):
    print(i)
else:
    print("Loop completed!")
```

### While Loops

```python
# Basic while
count = 5
while count > 0:
    print(count)
    count = count - 1

# User input loop
password = ""
while password != "secret":
    password = input("Enter password: ")

# Infinite loop (use break)
while True:
    user_input = input("Enter 'quit' to exit: ")
    if user_input == "quit":
        break
```

### Break & Continue

```python
# Break - exit loop
for i in range(10):
    if i == 5:
        break
    print(i)  # Prints: 0, 1, 2, 3, 4

# Continue - skip iteration
for i in range(5):
    if i == 2:
        continue
    print(i)  # Prints: 0, 1, 3, 4
```

---

## FUNCTIONS

### Defining Functions

```python
# Simple function
def greet():
    print("Hello, Data Engineer!")

greet()

# Function with parameter
def greet_person(name):
    print(f"Hello, {name}!")

greet_person("Alice")

# Function with multiple parameters
def add(a, b):
    result = a + b
    return result

total = add(5, 3)  # total = 8

# Function with return value
def multiply(x, y):
    return x * y

product = multiply(4, 5)  # product = 20

# Function with default parameter
def greet(name="Friend"):
    print(f"Hello, {name}!")

greet()        # Hello, Friend!
greet("Alice") # Hello, Alice!

# Function with multiple return values
def get_name_age():
    return "John", 30

name, age = get_name_age()

# Function with variable arguments
def sum_all(*numbers):
    total = 0
    for num in numbers:
        total += num
    return total

sum_all(1, 2, 3, 4, 5)  # 15

# Function with keyword arguments
def print_info(name, age, city="Unknown"):
    print(f"{name}, {age}, {city}")

print_info("John", 30, city="Seattle")
```

### Docstrings

```python
def calculate_discount(price, discount_percent=10):
    """
    Calculate discounted price.
    
    Parameters:
    - price: original price (float)
    - discount_percent: discount percentage (default 10%)
    
    Returns:
    - discounted price (float)
    """
    discount_amount = price * (discount_percent / 100)
    return price - discount_amount

# Access docstring
help(calculate_discount)
```

### Lambda Functions

```python
# Lambda (anonymous function)
square = lambda x: x ** 2
print(square(5))  # 25

# Lambda with map
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
# [1, 4, 9, 16, 25]

# Lambda with filter
numbers = [1, 2, 3, 4, 5]
evens = list(filter(lambda x: x % 2 == 0, numbers))
# [2, 4]
```

### Practical Functions for Data Engineering

```python
# Validation function
def is_valid_email(email):
    if "@" in email and "." in email:
        return True
    else:
        return False

# Data cleaning function
def clean_name(name):
    return name.strip().lower()

# Conversion function
def celsius_to_fahrenheit(celsius):
    return (celsius * 9/5) + 32

# Check and transform
def validate_and_transform(data):
    """Clean and validate data"""
    if data is None or data == "":
        return None
    return data.strip().lower()
```

---

## FILE I/O

### Reading Files

```python
# Read entire file
with open('data.txt', 'r') as file:
    content = file.read()

# Read line by line
with open('data.txt', 'r') as file:
    for line in file:
        print(line)

# Read all lines as list
with open('data.txt', 'r') as file:
    lines = file.readlines()

# Read specific number of lines
with open('data.txt', 'r') as file:
    first_line = file.readline()
```

### Writing Files

```python
# Write to file (overwrites if exists)
with open('output.txt', 'w') as file:
    file.write("Hello, World!")

# Append to file
with open('output.txt', 'a') as file:
    file.write("\nNew line")

# Write multiple lines
with open('output.txt', 'w') as file:
    file.writelines(["Line 1\n", "Line 2\n", "Line 3\n"])
```

### Working with CSV

```python
import csv

# Read CSV
with open('data.csv', 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)

# Read CSV as dictionaries
with open('data.csv', 'r') as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(row['name'], row['age'])

# Write CSV
with open('output.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(['name', 'age', 'city'])
    writer.writerow(['John', 30, 'Seattle'])
```

### Working with JSON

```python
import json

# Read JSON
with open('data.json', 'r') as file:
    data = json.load(file)

# Write JSON
with open('output.json', 'w') as file:
    json.dump(data, file, indent=2)

# Parse JSON string
json_string = '{"name": "John", "age": 30}'
data = json.loads(json_string)

# Convert to JSON string
data = {"name": "John", "age": 30}
json_string = json.dumps(data, indent=2)
```

---

## JUPYTER NOTEBOOKS

### Keyboard Shortcuts

```
Ctrl+Enter      Run current cell
Shift+Enter     Run and move to next
Esc             Exit edit mode
A               Add cell above
B               Add cell below
D, D            Delete cell
Y               Convert to code
M               Convert to markdown
```

### Cell Types

#### Code Cell
```python
# Write Python code here
name = "Alice"
age = 30
print(f"{name} is {age} years old")
```

#### Markdown Cell
```markdown
# This is a heading

## This is a subheading

This is regular text. You can use **bold** and *italics*.

- Bullet point 1
- Bullet point 2

Code inline: `variable_name`
```

### Notebook Best Practices

```python
# 1. Imports at top
import pandas as pd
import numpy as np

# 2. Clear variable names
customer_name = "John"
total_sales = 1000

# 3. Use comments
# Calculate percentage growth
growth = (new_value - old_value) / old_value * 100

# 4. Print results
print(f"Growth: {growth:.2f}%")
```

---

## GIT & VERSION CONTROL

### Basic Git Workflow

```bash
# Initialize repository
git init

# Check status
git status

# Stage files
git add filename.py
git add .  # Stage all files

# Commit
git commit -m "Descriptive message about changes"

# View history
git log --oneline

# View changes
git diff

# Undo changes (not staged)
git checkout filename.py

# Undo staged changes
git reset filename.py
```

### Good Commit Messages

```bash
# ✅ Good
git commit -m "Add data validation function"
git commit -m "Fix bug in ETL pipeline"
git commit -m "Refactor database queries for performance"

# ❌ Bad
git commit -m "Update"
git commit -m "Fix stuff"
git commit -m "Work in progress"
```

### Branching (Introduction)

```bash
# Create branch
git branch new_feature

# Switch to branch
git checkout new_feature

# Or create and switch in one command
git checkout -b new_feature

# List branches
git branch

# Delete branch
git branch -d new_feature
```

---

## QUICK REFERENCE

### Common Data Validation Patterns

```python
# Check for None/null
if value is None:
    print("Value is null")

# Check for empty string
if value == "":
    print("Value is empty")

# Check for valid number range
if 0 < age < 150:
    print("Valid age")

# Check for valid email
if "@" in email and "." in email:
    print("Valid email format")

# Check for duplicates
if len(list) != len(set(list)):
    print("Duplicates found")
```

### Common Data Transformation Patterns

```python
# Uppercase conversion
text = text.upper()

# Remove whitespace
text = text.strip()

# Replace characters
text = text.replace(" ", "_")

# Split and join
words = text.split(" ")
text = "-".join(words)

# Convert type
age = int("30")
price = float("19.99")

# Check and default
value = data.get("key", "default_value")
```

### Common Patterns for Data Engineering

```python
# Process list of dictionaries
for record in records:
    # Extract
    value = record["field"]
    
    # Transform
    transformed = value.strip().upper()
    
    # Validate
    if len(transformed) > 0:
        # Load
        processed_records.append(transformed)

# Count occurrences
from collections import Counter
counts = Counter(items)

# Group by key
grouped = {}
for item in items:
    key = item["category"]
    if key not in grouped:
        grouped[key] = []
    grouped[key].append(item)

# Calculate aggregate
total = sum([item["amount"] for item in items])
average = total / len(items)
```

---

## KEY TAKEAWAYS

✅ **Variables** store data in different types
✅ **Operators** perform calculations and comparisons
✅ **Lists** store ordered collections
✅ **Dictionaries** store key-value pairs
✅ **Control Flow** controls program execution
✅ **Functions** organize reusable code
✅ **File I/O** reads and writes data
✅ **Jupyter** provides interactive development
✅ **Git** tracks code changes

---

**Ready to move to Week 2? You've got the Python foundation! 🚀**
