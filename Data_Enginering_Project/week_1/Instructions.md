# WEEK 1: Python Basics & Data Engineering Intro
## Complete Setup & Learning Guide

**Time Commitment:** 15-20 hours  
**By End of Week:** Working Python ETL pipeline + Version control setup  
**Status:** ⏱️ STARTING NOW

---

# PART 1: ENVIRONMENT SETUP (3 hours)
## This is your foundation - don't skip it!

### Step 1: Install Python 3.9+
**What you're doing:** Getting Python interpreter on your machine

**macOS:**
```bash
# Using Homebrew (install Homebrew first if you don't have it)
brew install python@3.11

# Verify installation
python3 --version  # Should show Python 3.11.x
```

**Windows:**
1. Go to https://www.python.org/downloads/
2. Download Python 3.11 (latest stable)
3. Run installer
4. ⚠️ **IMPORTANT:** Check "Add Python to PATH" during installation
5. Verify:
   ```cmd
   python --version
   ```

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install python3.11 python3-pip python3-venv

python3 --version
```

**Why:** Python is the language you'll use for data engineering

---

### Step 2: Install Git & Set Up Version Control
**What you're doing:** Installing version control so you can track code changes

**macOS:**
```bash
brew install git
```

**Windows:**
Download from https://git-scm.com/download/win and run installer

**Linux:**
```bash
sudo apt install git
```

**Configure Git:**
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Verify
git config --global user.name
```

**Why:** Professional data engineers use version control. You'll need this to save your work and show employers your code.

---

### Step 3: Create a Project Directory
**What you're doing:** Organizing your workspace

```bash
# Create directory
mkdir ~/data_engineering_course
cd ~/data_engineering_course

# Create Week 1 folder
mkdir week_1_python_basics
cd week_1_python_basics

# Initialize Git repository
git init
```

**Verify:**
```bash
ls -la  # You should see .git directory
git status  # Should show "On branch main"
```

**Why:** Organization makes it easy to find your code later

---

### Step 4: Create Python Virtual Environment
**What you're doing:** Creating isolated Python environment for this project

```bash
# Create virtual environment
python3 -m venv venv

# Activate it
# On macOS/Linux:
source venv/bin/activate

# On Windows:
venv\Scripts\activate

# You should see (venv) at start of terminal line
```

**Why:** Virtual environments keep project dependencies separate. No conflicts between projects!

---

### Step 5: Install Required Packages
**What you're doing:** Installing Python libraries you'll use

```bash
# Make sure you're in virtual environment (see (venv) in terminal?)

# Upgrade pip (package manager)
pip install --upgrade pip

# Install libraries
pip install pandas numpy jupyter requests beautifulsoup4

# Verify installation
pip list
```

**What you installed:**
- `pandas`: Working with data tables
- `numpy`: Numerical computing
- `jupyter`: Interactive notebooks
- `requests`: Making API calls
- `beautifulsoup4`: Web scraping

**Create requirements file (best practice):**
```bash
pip freeze > requirements.txt
```

This saves your packages so you can recreate environment later.

---

### Step 6: Set Up IDE (Code Editor)
**What you're doing:** Installing tool to write code

**Download VSCode:**
https://code.visualstudio.com/

**Install Python Extension in VSCode:**
1. Open VSCode
2. Click Extensions icon (left sidebar)
3. Search "Python"
4. Install Microsoft's Python extension
5. Install Pylance extension (better code intelligence)

**Test it:**
1. Create file: `test.py`
2. Write: `print("Hello, Data Engineer!")`
3. Right-click → "Run Python File"
4. Should see output below

**Why:** VSCode is industry-standard for data engineers

---

### Step 7: Verify Everything Works
**Create a test file:**

```python
# test_setup.py

import pandas as pd
import numpy as np
import requests

print("✅ Python version:", end=" ")
import sys
print(sys.version)

print("✅ Pandas version:", pd.__version__)
print("✅ NumPy version:", np.__version__)
print("✅ Requests version:", requests.__version__)

print("\n🎉 All setup complete!")
```

**Run it:**
```bash
python test_setup.py
```

Should see all versions printed. If you see errors, let me know!

---

## ✅ CHECKPOINT 1: Setup Complete?
- [X] Python 3.9+ installed and working
- [X] Git installed and configured
- [X] Virtual environment created and activated
- [X] Required packages installed (pandas, numpy, jupyter, etc.)
- [X] VSCode installed with Python extension
- [X] test_setup.py runs without errors

**If all checked:** Move to Part 2! 🚀

---

---

# PART 2: DATA ENGINEERING FUNDAMENTALS (3 hours)
## Understanding what data engineers actually do

### Concept 1: What is Data Engineering?

**Simple Definition:**
```
Data Engineering = Building systems to move, store, and transform data
```

**Think of it like:**
- 📦 Data = packages
- 🚚 Engineers = delivery company
- 🏢 Data warehouse = distribution center
- 📊 Data Scientists/Analysts = people using the packages

**Your Job as Data Engineer:**
1. **Collect** data from sources (APIs, databases, logs)
2. **Store** data in organized way (databases, data lakes)
3. **Transform** data into useful format
4. **Deliver** data to people who need it (analysts, ML models)
5. **Monitor** that everything works 24/7

### Concept 2: The Data Pipeline

**A pipeline is:**
```
SOURCE DATA → EXTRACT → TRANSFORM → LOAD → DESTINATION
```

**Real Example: Coffee Shop**
```
Raw data (sales from cash register)
    ↓
Extract (read from register)
    ↓
Transform (organize by product, date, location)
    ↓
Load (put into database)
    ↓
Data warehouse (ready for analysis)
    ↓
Manager checks daily revenue
```

### Concept 3: Why Data Engineering Matters

**Scenario:**
- Data Scientist wants to build ML model
- Needs clean, reliable data
- Without data engineer: Data Scientist spends 80% time cleaning data
- With data engineer: Data is ready, Scientist focuses on ML

**Your Value:**
You make data work so others can focus on insights

### Concept 4: Data vs Databases vs Data Warehouses

**Data:**
- Raw facts (John bought coffee for $5 on Jan 1)
- Unstructured (emails, logs, messy CSVs)

**Database:**
- Organized collection of data
- Used for day-to-day operations (point-of-sale system)
- Optimized for fast reads/writes

**Data Warehouse:**
- Collection organized for analysis
- Used for reports and insights
- Optimized for complex queries over lots of data

**Example:**
```
Coffee Register (Database)
- Tracks: Who bought what, when, how much
- Real-time, optimized for speed
- Used to process sales

Data Warehouse
- Historical data from all registers
- Shows: Revenue trends, popular products
- Optimized for analysis
- Used for reports
```

### Concept 5: Types of Data Engineering

**Batch Processing:**
- Process large amounts of data periodically
- "Every night at 2 AM, process all yesterday's transactions"
- Good for: Reports, aggregations, ML training
- Speed: Can be slow (hours), but processes lots of data

**Real-Time/Streaming:**
- Process data as it arrives
- "Alert if unusual activity detected right now"
- Good for: Fraud detection, live dashboards
- Speed: Fast (seconds), but less data at once

**Your Career Path (Distributed Systems + ML):**
- You'll do both!
- Batch: Training ML models on historical data
- Real-time: Scoring new data with trained model

### Concept 6: Tech Stack Overview

**You'll learn:**

```
Collection Layer:
  ├─ APIs (REST, GraphQL)
  ├─ Databases (MySQL, PostgreSQL)
  └─ Message Queues (Kafka)

Processing Layer:
  ├─ Python (script transformations)
  ├─ Spark (distributed processing)
  └─ SQL (queries)

Storage Layer:
  ├─ Relational DB (PostgreSQL)
  ├─ NoSQL (MongoDB)
  └─ Data Warehouse (PostgreSQL)

Orchestration Layer:
  └─ Airflow (schedule pipelines)

Analytics Layer:
  ├─ SQL queries
  └─ Dashboards (Plotly, Looker)
```

### Concept 7: Real-World Example - Your Week 1 Project

**Scenario:** Movie studio wants to analyze movie data

```
EXTRACT:
├─ Read CSV with movie info (title, year, rating, budget)
├─ Call API to get current user ratings
└─ Handle API errors gracefully

TRANSFORM:
├─ Clean data (fix missing values)
├─ Validate data (ratings 0-10, budget > 0)
├─ Calculate metrics (profit = revenue - budget)
└─ Convert types (string → number)

LOAD:
├─ Write to CSV (for analysts)
├─ Write to JSON (for web app)
└─ Write to Parquet (for fast analysis)

VALIDATE:
└─ Create report showing quality
```

**This is real data engineering!**

---

## 📝 READING ASSIGNMENT (1 hour)

Read these short articles:

1. **"What Do Data Engineers Do?"** (2 min read)
   - Search: "Freecodecamp what do data engineers do"
   - Understand the role

2. **"ETL vs ELT"** (3 min read)
   - Key concept you'll use all the time
   - Extract-Transform-Load vs Extract-Load-Transform

3. **"Why Data Quality Matters"** (2 min read)
   - Understanding why validation is critical

---

## ✅ CHECKPOINT 2: Understanding?
- [✅] Can explain "what is a data pipeline" in your own words
- [✅ ] Understand difference between database and data warehouse
- [✅ ] Know what ETL means
- [✅ ] Can list 5 technologies in the data stack
- [ ✅] Understand your week 1 project goal

---

---

# PART 3: PYTHON BASICS (6 hours)
## Learn the language you'll use daily

## Module 1: Variables & Data Types (1.5 hours)

**What you're learning:** How to store and work with data in Python

### 1.1: Variables (storing information)

```python
# Variable = box that holds a value
name = "Alice"
age = 30
height = 5.8

# You can change variables
age = 31

print(name)   # Output: Alice
print(age)    # Output: 31
```

**Key Rules:**
- Variable names: lowercase, use_underscores
- No spaces in names
- Can't start with number

```python
# Good variable names
customer_name = "John"
transaction_amount = 99.99
is_completed = True

# Bad variable names (don't do this!)
Name = "John"  # Use lowercase
amount$ = 99  # No special characters
1amount = 99  # Can't start with number
```

**Practice:**
```python
# Create your own variables
your_name = "Your Name"
years_coding = 0
favorite_language = "Python"

print(your_name)
print(years_coding)
```

### 1.2: Data Types (different kinds of data)

```python
# STRING - text
name = "John"
email = "john@example.com"

# INTEGER - whole numbers
age = 30
count = 100

# FLOAT - decimal numbers
price = 19.99
temperature = 98.6

# BOOLEAN - True or False
is_active = True
is_admin = False

# Check the type
print(type(name))    # <class 'str'>
print(type(age))     # <class 'int'>
print(type(price))   # <class 'float'>
print(type(is_active))  # <class 'bool'>
```

### 1.3: Converting Between Types

```python
# String to integer
age_string = "30"
age = int(age_string)  # Now it's a number

# Integer to string
count = 100
count_string = str(count)  # Now it's text

# String to float
price_string = "19.99"
price = float(price_string)

# Integer to float
whole = 10
decimal = float(whole)  # 10.0
```

**Practice Exercise:**
```python
# What will these print?
x = "25"
y = int(x)
z = y + 5

print(z)  # What's the result?

# Try it!
```

---

## Module 2: Operations & Expressions (1.5 hours)

### 2.1: Math Operations

```python
# Addition
total = 10 + 5  # 15

# Subtraction
difference = 10 - 3  # 7

# Multiplication
product = 4 * 5  # 20

# Division
quotient = 10 / 3  # 3.333...

# Integer division (no decimals)
quotient_int = 10 // 3  # 3

# Modulo (remainder)
remainder = 10 % 3  # 1

# Power
squared = 5 ** 2  # 25

# Order of operations (PEMDAS)
result = 2 + 3 * 4  # 14 (multiply first)
```

### 2.2: String Operations

```python
# Concatenation (joining strings)
first = "John"
last = "Doe"
full_name = first + " " + last  # "John Doe"

# Repetition
line = "-" * 20  # "--------------------"

# String methods (built-in functions)
text = "hello world"
print(text.upper())   # HELLO WORLD
print(text.capitalize())  # Hello world
print(text.replace("world", "python"))  # hello python

# String length
message = "Python"
length = len(message)  # 6

# Check if text is in string
if "world" in "hello world":
    print("Found it!")
```

### 2.3: Comparison Operations

```python
# These return True or False

age = 25

# Greater than
age > 18  # True

# Less than
age < 30  # True

# Equal
age == 25  # True

# Not equal
age != 30  # True

# Greater than or equal
age >= 25  # True

# Less than or equal
age <= 30  # True
```

### 2.4: Logical Operations

```python
# AND - both must be True
age = 25
has_license = True

can_drive = age > 18 and has_license  # True

# OR - at least one must be True
temperature = 15

is_cold = temperature < 0 or temperature > 100  # False

# NOT - opposite
is_active = True
is_inactive = not is_active  # False
```

**Practice:**
```python
# Write expressions for:
# 1. Person is adult (age >= 18)
# 2. Price is in range ($10-$20)
# 3. Email contains "@"
# 4. User is admin AND active
```

---

## Module 3: Collections (Lists & Dictionaries) (1.5 hours)

### 3.1: Lists (ordered collection of items)

```python
# Create a list
fruits = ["apple", "banana", "orange"]

# Access items (starts at 0!)
first = fruits[0]  # "apple"
second = fruits[1]  # "banana"

# Negative indexing (from the end)
last = fruits[-1]  # "orange"
second_last = fruits[-2]  # "banana"

# Add item
fruits.append("grape")  # ["apple", "banana", "orange", "grape"]

# Remove item
fruits.remove("banana")  # ["apple", "orange", "grape"]

# Check length
count = len(fruits)  # 3

# Check if item in list
if "apple" in fruits:
    print("We have apples!")

# Loop through list
for fruit in fruits:
    print(fruit)
```

### 3.2: Dictionaries (key-value pairs)

```python
# Create a dictionary
person = {
    "name": "John",
    "age": 30,
    "city": "Seattle"
}

# Access values
name = person["name"]  # "John"
age = person["age"]  # 30

# Add new key-value
person["email"] = "john@example.com"

# Change value
person["age"] = 31

# Check if key exists
if "email" in person:
    print("Has email!")

# Loop through dictionary
for key in person:
    print(f"{key}: {person[key]}")

# Get all keys
keys = person.keys()  # dict_keys(['name', 'age', 'city', 'email'])

# Get all values
values = person.values()  # dict_values(['John', 31, 'Seattle', 'john@example.com'])
```

### 3.3: Practical Examples

```python
# List of dictionaries (very common in data engineering!)
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

## Module 4: Control Flow (1.5 hours)

### 4.1: If/Else Statements

```python
age = 25

# If statement
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
        print("Cannot drive without license")
```

### 4.2: For Loops (repeat code multiple times)

```python
# Loop through list
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(fruit)

# Loop with counter
for i in range(5):  # i = 0, 1, 2, 3, 4
    print(i)

# Loop with custom range
for i in range(1, 6):  # 1, 2, 3, 4, 5 (stops before 6)
    print(i)

# Loop with step
for i in range(0, 10, 2):  # 0, 2, 4, 6, 8
    print(i)

# Loop with enumerate (get index and value)
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")
```

### 4.3: While Loops (repeat until condition is false)

```python
# Countdown
count = 5
while count > 0:
    print(count)
    count = count - 1

# User input
password = ""
while password != "secret":
    password = input("Enter password: ")
print("Correct!")
```

### 4.4: Break & Continue

```python
# Break - stop loop early
for i in range(10):
    if i == 5:
        break  # Exit loop
    print(i)  # Prints: 0, 1, 2, 3, 4

# Continue - skip to next iteration
for i in range(5):
    if i == 2:
        continue  # Skip this iteration
    print(i)  # Prints: 0, 1, 3, 4
```

---

## Module 5: Functions (1.5 hours)

### 5.1: Defining Functions

```python
# Simple function
def greet():
    print("Hello, Data Engineer!")

# Call the function
greet()

# Function with parameters
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
```

### 5.2: Default Parameters

```python
def greet(name="Friend"):
    print(f"Hello, {name}!")

greet()  # Hello, Friend!
greet("Alice")  # Hello, Alice!
```

### 5.3: Documentation (docstrings)

```python
def calculate_discount(price, discount_percent=10):
    """
    Calculate discounted price.
    
    Parameters:
    - price: original price
    - discount_percent: discount percentage (default 10%)
    
    Returns:
    - discounted price
    """
    discount_amount = price * (discount_percent / 100)
    return price - discount_amount

# Help information
help(calculate_discount)
```

### 5.4: Practical Functions

```python
# Function to validate email
def is_valid_email(email):
    """Check if email has @ symbol"""
    if "@" in email and "." in email:
        return True
    else:
        return False

# Function to clean data
def clean_name(name):
    """Remove spaces and convert to lowercase"""
    return name.strip().lower()

# Usage
print(is_valid_email("john@example.com"))  # True
print(clean_name("  John Doe  "))  # john doe
```

---

## ✅ CHECKPOINT 3: Python Basics?
- [✅ ] Create variables and use different data types
- [ ✅] Perform math and string operations
- [✅ ] Create and modify lists and dictionaries
- [✅ ] Write if/else and for loops
- [✅ ] Define and call functions
- [✅ ] Understand when to use each data structure

---

---

# PART 4: JUPYTER NOTEBOOKS (2 hours)
## Interactive development environment

### Step 1: Start Jupyter

```bash
# Make sure you're in virtual environment
source venv/bin/activate  # (or on Windows: venv\Scripts\activate)

# Start Jupyter
jupyter notebook
```

Browser should open automatically at http://localhost:8888

### Step 2: Create Your First Notebook

1. Click "New" button
2. Select "Python 3"
3. Rename to "week_1_learning.ipynb"

### Step 3: Understanding Notebook Cells

```
┌─────────────────────────────────────────────┐
│ In [ ]:  <- Click here to edit              │
│                                             │
│ # This is a code cell                       │
│ name = "Alice"                              │
│ print(name)                                 │
│                                             │
│ [Run button]  Ctrl+Enter to run             │
└─────────────────────────────────────────────┘
```

### Step 4: Write Your First Code in Notebook

**Cell 1: Imports (run first)**
```python
import pandas as pd
import numpy as np

print("Libraries imported successfully!")
```

**Cell 2: Variables**
```python
# Data Engineering Learning
course_name = "Data Engineering Fundamentals"
week = 1
hours_per_week = 20

print(f"Course: {course_name}")
print(f"Week: {week}")
print(f"Hours: {hours_per_week}")
```

**Cell 3: Lists & Loop**
```python
# List of tools you'll learn
tools = ["Python", "SQL", "Spark", "Airflow", "Kafka"]

print("Data Engineering Tools:")
for i, tool in enumerate(tools, 1):
    print(f"{i}. {tool}")
```

**Cell 4: Dictionary**
```python
# Movie data (example for Week 1 project)
movie = {
    "title": "The Matrix",
    "year": 1999,
    "rating": 8.7,
    "budget": 63  # in millions
}

print(f"Movie: {movie['title']}")
print(f"Year: {movie['year']}")
print(f"Rating: {movie['rating']}/10")
print(f"Budget: ${movie['budget']}M")
```

### Step 5: Notebook Tips

**Keyboard Shortcuts:**
- `Ctrl+Enter`: Run current cell
- `Shift+Enter`: Run and move to next
- `Esc`: Exit edit mode
- `A`: Add cell above
- `B`: Add cell below
- `D, D`: Delete cell
- `Y`: Convert to code
- `M`: Convert to markdown

**Markdown (text) cells:**
```markdown
# This is a heading

## This is subheading

This is regular text. You can use **bold** and *italics*.

- Bullet points
- Work too

Code inline: `variable_name`
```

---

# PART 5: GIT & VERSION CONTROL (1.5 hours)
## Track your code changes

### Understanding Git

Think of Git like a **save system for code**:
- Snap Shop = Commit (save point)
- Save = staging
- Load = checkout

### Basic Git Workflow

**Step 1: Check status**
```bash
git status
```

**Step 2: Stage changes** (prepare to save)
```bash
# Stage specific file
git add test_setup.py

# Stage all files
git add .
```

**Step 3: Commit** (save snapshot)
```bash
git commit -m "Initial setup: Python environment configured"
```

**Step 4: View history**
```bash
git log --oneline  # Shows all commits
```

### Your Week 1 Commits

```bash
# Commit 1: Setup
git add .
git commit -m "Week 1: Initial setup - Python, Jupyter, Git configured"

# Commit 2: Learning materials
git add notebook.ipynb
git commit -m "Week 1: Python basics learning notebook"

# Commit 3: Practice code
git add practice_exercises.py
git commit -m "Week 1: Python practice exercises - variables, loops, functions"

# Commit 4: Project start
git add movie_project.py
git commit -m "Week 1: Movie data ETL project - basic structure"
```

### Good Commit Messages
```
✅ GOOD:
- "Add data validation function"
- "Fix bug in ETL pipeline"
- "Refactor database queries for performance"

❌ BAD:
- "Update"
- "Fix stuff"
- "Work in progress"
```

**Rule:** Commit messages should explain WHY, not just WHAT

---

---

# PART 6: WEEK 1 PROJECT - MOVIE DATA EXPLORER (5-6 hours)
## Put it all together!

## Project Overview

**Goal:** Build a Python ETL pipeline for movie data
**Time:** 5-6 hours
**Tools:** Python, Pandas, Jupyter, Git

**What you'll do:**
1. Create movie dataset (CSV file)
2. Load data with Python
3. Validate and clean data
4. Analyze and calculate metrics
5. Export results

## Project Setup

```bash
# Create project file
touch movie_project.py

# Or create Jupyter notebook
# File → New → Notebook → movie_project.ipynb
```

## Project Code

### Step 1: Create Sample Data

```python
# movie_project.py

import pandas as pd
import json

# Create sample movie data
movie_data = [
    {"title": "The Matrix", "year": 1999, "rating": 8.7, "budget": 63, "revenue": 467.2},
    {"title": "Inception", "year": 2010, "rating": 8.8, "budget": 160, "revenue": 839.5},
    {"title": "Interstellar", "year": 2014, "rating": 8.6, "budget": 165, "revenue": 731.2},
    {"title": "Pulp Fiction", "year": 1994, "rating": 8.9, "budget": 8.5, "revenue": 213.9},
    {"title": "The Dark Knight", "year": 2008, "rating": 9.0, "budget": 185, "revenue": 1005.0},
    {"title": "Forrest Gump", "year": 1994, "rating": 8.8, "budget": 55, "revenue": 678.2},
    {"title": "Titanic", "year": 1997, "rating": 7.8, "budget": 200, "revenue": 2257.9},
    {"title": "Avatar", "year": 2009, "rating": 7.8, "budget": 237, "revenue": 2923.7},
    # Some messy data to clean:
    {"title": "The Avengers", "year": 2012, "rating": None, "budget": 220, "revenue": 1520.6},
    {"title": "Black Panther", "year": 2018, "rating": 7.3, "budget": 200, "revenue": 1347.0},
]

# Save to CSV
csv_content = "title,year,rating,budget,revenue\n"
for movie in movie_data:
    csv_content += f"{movie['title']},{movie['year']},{movie['rating']},{movie['budget']},{movie['revenue']}\n"

with open('movies.csv', 'w') as f:
    f.write(csv_content)

print("✅ Created movies.csv")
```

### Step 2: Load & Explore Data

```python
# Load data
df = pd.read_csv('movies.csv')

print("🔍 Data Overview:")
print(df)

print("\n📊 Data Info:")
print(df.info())  # Shows data types and nulls

print("\n📈 Statistics:")
print(df.describe())  # Shows summary statistics
```

### Step 3: Data Validation & Cleaning

```python
# Check for missing values
print("\n❌ Missing values:")
print(df.isnull().sum())

# Check data types
print("\n📋 Data types:")
print(df.dtypes)

# Validate values
print("\n🔎 Validation:")
print(f"Years range: {df['year'].min()} - {df['year'].max()}")
print(f"Ratings range: {df['rating'].min()} - {df['rating'].max()}")
print(f"Budget range: ${df['budget'].min()}M - ${df['budget'].max()}M")

# Clean data: Fill missing ratings with median
median_rating = df['rating'].median()
df['rating'].fillna(median_rating, inplace=True)

print(f"\n✅ Filled missing ratings with median: {median_rating}")

# Check again
print("\nAfter cleaning - Missing values:")
print(df.isnull().sum())
```

### Step 4: Transform & Calculate Metrics

```python
# Calculate profit
df['profit'] = df['revenue'] - df['budget']
df['profit_margin'] = (df['profit'] / df['budget'] * 100).round(2)
df['roi'] = (df['profit'] / df['budget']).round(2)

# Add rating category
def rating_category(rating):
    if rating >= 9:
        return "Masterpiece"
    elif rating >= 8:
        return "Excellent"
    elif rating >= 7:
        return "Good"
    else:
        return "Average"

df['rating_category'] = df['rating'].apply(rating_category)

print("\n💰 With Metrics:")
print(df[['title', 'year', 'rating', 'profit', 'roi']])
```

### Step 5: Analysis & Insights

```python
# What's the most profitable movie?
most_profitable = df.loc[df['profit'].idxmax()]
print(f"\n🏆 Most Profitable:")
print(f"{most_profitable['title']} (${most_profitable['profit']:.1f}M profit)")

# Average metrics
print(f"\n📊 Average Metrics:")
print(f"Avg Rating: {df['rating'].mean():.2f}/10")
print(f"Avg Budget: ${df['budget'].mean():.1f}M")
print(f"Avg Revenue: ${df['revenue'].mean():.1f}M")
print(f"Avg Profit: ${df['profit'].mean():.1f}M")

# By decade
df['decade'] = (df['year'] // 10 * 10).astype(str) + "s"
print(f"\n📅 By Decade:")
print(df.groupby('decade')['rating'].mean().round(2))

# Best rated
print(f"\n⭐ Top 3 Rated Movies:")
top_rated = df.nlargest(3, 'rating')[['title', 'year', 'rating']]
print(top_rated)
```

### Step 6: Export Results

```python
# Save cleaned data
df.to_csv('movies_cleaned.csv', index=False)
print("\n✅ Saved: movies_cleaned.csv")

# Export to JSON
movies_json = df.to_json('movies.json', orient='records', indent=2)
print("✅ Saved: movies.json")

# Export summary statistics
summary = {
    'total_movies': len(df),
    'avg_rating': df['rating'].mean(),
    'avg_budget': df['budget'].mean(),
    'avg_profit': df['profit'].mean(),
    'highest_roi': df['roi'].max(),
}

with open('summary.json', 'w') as f:
    json.dump(summary, f, indent=2)

print("✅ Saved: summary.json")
```

### Step 7: Data Quality Report

```python
def generate_quality_report(df):
    """Generate data quality report"""
    
    report = {
        'total_rows': len(df),
        'total_columns': len(df.columns),
        'missing_values': df.isnull().sum().to_dict(),
        'data_types': df.dtypes.astype(str).to_dict(),
        'duplicate_rows': df.duplicated().sum(),
        'quality_score': 0,
    }
    
    # Calculate quality score
    nulls = df.isnull().sum().sum()
    quality_score = max(0, 100 - (nulls / (len(df) * len(df.columns)) * 100))
    report['quality_score'] = round(quality_score, 1)
    
    return report

quality = generate_quality_report(df)
print("\n📋 Data Quality Report:")
print(f"Total Records: {quality['total_rows']}")
print(f"Total Columns: {quality['total_columns']}")
print(f"Missing Values: {quality['missing_values']}")
print(f"Duplicate Rows: {quality['duplicate_rows']}")
print(f"Quality Score: {quality['quality_score']}%")

# Save report
with open('quality_report.json', 'w') as f:
    json.dump(quality, f, indent=2)
```

## Project Submission Checklist

Create a file called `PROJECT_CHECKLIST.md`:

```markdown
# Week 1 Project: Movie Data Explorer

## Completed Items
- [x] Created movies.csv with 10+ rows
- [x] Loaded data with Pandas
- [x] Identified missing values (ratings)
- [x] Cleaned data (filled nulls)
- [x] Calculated metrics (profit, ROI, margin)
- [x] Categorized ratings
- [x] Generated insights (top movies, averages)
- [x] Exported to CSV, JSON, Parquet
- [x] Created quality report
- [x] Committed to Git

## Files Created
- `movies.csv` - Raw data
- `movies_cleaned.csv` - Cleaned data
- `movies.json` - JSON export
- `summary.json` - Summary statistics
- `quality_report.json` - Data quality metrics
- `movie_project.py` - Main code

## Key Learnings
1. How to load and explore data with Pandas
2. Data validation and cleaning
3. Calculating derived metrics
4. Exporting to multiple formats
5. Generating data quality reports

## What Works Well
- Successfully cleaned missing data
- Calculated useful metrics
- Clear data quality report

## What Could Be Improved
- Could add more data validation rules
- Could visualize results with Matplotlib
- Could add error handling for file operations
```

---

# PART 7: FINAL SETUP & COMMIT (1 hour)

### Create Project Structure

```
week_1_python_basics/
├── .gitignore
├── README.md
├── requirements.txt
├── movie_project.py
├── test_setup.py
├── movies.csv
├── movies_cleaned.csv
├── movies.json
├── summary.json
├── quality_report.json
└── week_1_learning.ipynb
```

### Create .gitignore

```bash
# Create file
cat > .gitignore << EOF
# Python
__pycache__/
*.py[cod]
*$py.class
venv/
env/

# Jupyter
.ipynb_checkpoints/

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Data files (optional)
*.csv
*.json
EOF
```

### Create README.md

```markdown
# Week 1: Python Basics & Data Engineering Intro

## Objective
Learn Python fundamentals and build first ETL pipeline

## What You'll Learn
- ✅ Python basics (variables, loops, functions)
- ✅ Data structures (lists, dictionaries)
- ✅ Pandas for data manipulation
- ✅ Data validation and cleaning
- ✅ Git version control

## Project: Movie Data Explorer
Extract, transform, and load movie data

### Files
- `movie_project.py` - Main pipeline
- `movies.csv` - Input data
- `movies_cleaned.csv` - Processed data
- `quality_report.json` - Data quality metrics

## How to Run
```bash
python movie_project.py
```

## Learning Checkpoints
- [x] Can create variables and use data types
- [x] Can write loops and functions
- [x] Can load and explore data
- [x] Can clean and validate data
- [x] Can export to multiple formats
- [x] Can use Git for version control
```

### Final Commits

```bash
# Commit 1: Project structure
git add -A
git commit -m "Week 1: Project structure and requirements setup"

# Commit 2: Learning materials
git add week_1_learning.ipynb
git commit -m "Week 1: Python basics learning notebook"

# Commit 3: Data setup
git add movies.csv test_setup.py
git commit -m "Week 1: Sample data and environment test"

# Commit 4: ETL pipeline
git add movie_project.py
git commit -m "Week 1: Complete movie data ETL pipeline"

# Commit 5: Documentation
git add README.md
git commit -m "Week 1: Project documentation and checklist"

# View history
git log --oneline
```

---

# ✅ WEEK 1 FINAL CHECKPOINT

By end of Week 1, you should have:

- [x] Python 3.9+ installed and working
- [x] Virtual environment created
- [x] Git repository initialized
- [x] Jupyter notebook set up
- [x] Understanding of data engineering fundamentals
- [x] Python basics mastered:
    - [ ] Variables and data types
    - [ ] Control flow (if/loops)
    - [ ] Functions
    - [ ] Lists and dictionaries
- [x] Movie Data ETL pipeline completed:
    - [ ] Data loaded
    - [ ] Data cleaned
    - [ ] Metrics calculated
    - [ ] Results exported
    - [ ] Quality report generated
- [x] 5+ commits to Git
- [x] README documentation

---

# 🎯 NEXT STEPS (After Week 1)

1. **Optional: Extend the project**
   - Add visualization with Matplotlib
   - Add error handling
   - Add logging
   - Add unit tests

2. **Review before Week 2:**
   - Python fundamentals solid?
   - Can explain each concept?
   - Code is clean and commented?

3. **Week 2 Preparation:**
   - You'll learn Pandas and NumPy deeper
   - You'll build bigger data projects
   - You'll learn APIs and web scraping

---

# 📞 HELP!

Having trouble? Tell me:
1. What you're trying to do
2. What error you got
3. What you've already tried

I can help debug or explain concepts better!

---

**Ready to Start? Begin with Part 1: Environment Setup! 🚀**