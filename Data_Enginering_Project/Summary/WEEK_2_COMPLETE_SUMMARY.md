# WEEK 2 DATA MANIPULATION - COMPREHENSIVE SUMMARY
## NumPy, Pandas, & Data Cleaning Mastery

---

## TABLE OF CONTENTS
1. [NumPy Fundamentals](#numpy-fundamentals)
2. [NumPy Operations](#numpy-operations)
3. [NumPy Advanced](#numpy-advanced)
4. [Pandas Basics](#pandas-basics)
5. [Pandas Data Access](#pandas-data-access)
6. [Data Cleaning](#data-cleaning)
7. [Data Transformation](#data-transformation)
8. [Grouping & Aggregation](#grouping--aggregation)
9. [File I/O](#file-io)
10. [Quick Reference](#quick-reference)

---

## NUMPY FUNDAMENTALS

### What is NumPy?

**NumPy** = Numerical Python

**Why It Matters:**
- 100x+ faster than Python lists
- Foundation for Pandas and ML libraries
- Vectorization (fast element-wise operations)
- Essential for scientific computing

### Installation & Import

```python
# Install
pip install numpy

# Import
import numpy as np

# Check version
print(np.__version__)
```

### Creating Arrays

#### Basic Array Creation
```python
# From Python list
arr1 = np.array([1, 2, 3, 4, 5])

# 2D array (matrix)
arr2d = np.array([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])

# Zeros array
zeros = np.zeros(5)           # [0. 0. 0. 0. 0.]
zeros_2d = np.zeros((3, 3))  # 3x3 matrix of zeros

# Ones array
ones = np.ones(5)             # [1. 1. 1. 1. 1.]
ones_2d = np.ones((3, 3))    # 3x3 matrix of ones

# Range array
range_arr = np.arange(0, 10, 2)  # [0 2 4 6 8]

# Linspace (evenly spaced)
linspace_arr = np.linspace(0, 1, 5)  # [0.   0.25 0.5  0.75 1.  ]

# Random values
random_arr = np.random.rand(5)       # Random floats 0-1
random_int = np.random.randint(0, 10, 5)  # Random integers

# Identity matrix
identity = np.eye(3)  # 3x3 identity matrix

# Empty array (uninitialized)
empty_arr = np.empty(5)
```

### Array Properties

```python
arr = np.array([[1, 2, 3], [4, 5, 6]])

# Shape (dimensions)
print(arr.shape)      # (2, 3) - 2 rows, 3 columns

# Size (total elements)
print(arr.size)       # 6

# Data type
print(arr.dtype)      # int64 or float64

# Number of dimensions
print(arr.ndim)       # 2

# Reshape (change shape)
reshaped = arr.reshape(3, 2)  # Change to 3 rows, 2 columns
reshaped = arr.flatten()      # Convert to 1D array

# Type conversion
arr_float = arr.astype(float)
arr_int = arr_float.astype(int)
```

---

## NUMPY OPERATIONS

### Element-Wise Operations (Vectorization)

#### Scalar Operations
```python
arr = np.array([1, 2, 3, 4, 5])

# Add scalar
result = arr + 10  # [11 12 13 14 15]

# Multiply scalar
result = arr * 2   # [2 4 6 8 10]

# Subtract scalar
result = arr - 1   # [0 1 2 3 4]

# Divide scalar
result = arr / 2   # [0.5 1.  1.5 2.  2.5]

# Power
result = arr ** 2  # [1 4 9 16 25]
```

#### Array to Array Operations
```python
arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])

# Addition
result = arr1 + arr2  # [5 7 9]

# Multiplication
result = arr1 * arr2  # [4 10 18]

# Subtraction
result = arr1 - arr2  # [-3 -3 -3]

# Division
result = arr2 / arr1  # [4.  2.5 2. ]
```

#### Mathematical Functions
```python
arr = np.array([1, 4, 9, 16, 25])

# Square root
result = np.sqrt(arr)      # [1. 2. 3. 4. 5.]

# Exponential
result = np.exp(arr)       # [2.71e+00 5.46e+01 ...]

# Logarithm
result = np.log(arr)       # [0. 1.39 2.20 2.77 3.22]

# Absolute value
arr_neg = np.array([-1, -2, -3])
result = np.abs(arr_neg)   # [1 2 3]

# Trigonometric
result = np.sin(arr)
result = np.cos(arr)
result = np.tan(arr)
```

### Reduction Operations (Aggregate)

```python
arr = np.array([1, 5, 3, 2, 4])

# Sum
print(np.sum(arr))        # 15

# Mean (average)
print(np.mean(arr))       # 3.0

# Min/Max
print(np.min(arr))        # 1
print(np.max(arr))        # 5

# Standard deviation
print(np.std(arr))        # 1.41

# Median
print(np.median(arr))     # 3.0

# Percentile
print(np.percentile(arr, 75))  # 75th percentile

# Cumulative sum
print(np.cumsum(arr))     # [1 6 9 11 15]
```

### Sorting & Searching

```python
arr = np.array([5, 2, 8, 1, 9])

# Sort
sorted_arr = np.sort(arr)      # [1 2 5 8 9]

# Argsort (indices that would sort)
indices = np.argsort(arr)      # [3 1 0 2 4]

# Max/min index
max_idx = np.argmax(arr)       # 4
min_idx = np.argmin(arr)       # 3

# Find (boolean indexing)
condition = arr > 3
indices = np.where(arr > 3)    # Indices where condition true
```

---

## NUMPY ADVANCED

### Broadcasting

```python
# Broadcasting: different shapes work together
arr1 = np.array([[1, 2, 3]])        # shape (1, 3)
arr2 = np.array([[1], [2], [3]])    # shape (3, 1)

result = arr1 + arr2                 # Broadcasts to (3, 3)
# [[2 3 4]
#  [3 4 5]
#  [4 5 6]]

# Scalar broadcast to array
result = arr1 + 10  # Adds 10 to every element
```

### Boolean Indexing

```python
arr = np.array([1, 2, 3, 4, 5])

# Create boolean mask
mask = arr > 3                # [False False False True True]

# Use mask for indexing
result = arr[mask]            # [4 5]

# Complex conditions
result = arr[(arr > 2) & (arr < 5)]  # [3 4]

# NOT condition
result = arr[~(arr > 3)]      # [1 2 3]
```

### 2D Array Operations

```python
arr2d = np.array([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])

# Sum along axis
np.sum(arr2d)           # Total sum
np.sum(arr2d, axis=0)   # Sum each column
np.sum(arr2d, axis=1)   # Sum each row

# Mean along axis
np.mean(arr2d, axis=0)  # Mean of each column
np.mean(arr2d, axis=1)  # Mean of each row

# Transpose
arr_t = arr2d.T

# Dot product (matrix multiplication)
result = np.dot(arr2d, arr2d.T)

# Reshape
reshaped = arr2d.reshape(1, 9)  # To 1D array
```

### Indexing & Slicing

```python
arr = np.array([10, 20, 30, 40, 50])

# Single element
print(arr[0])      # 10
print(arr[-1])     # 50

# Slicing
print(arr[1:4])    # [20 30 40]
print(arr[:3])     # [10 20 30]
print(arr[2:])     # [30 40 50]
print(arr[::2])    # [10 30 50] (every 2nd)
print(arr[::-1])   # [50 40 30 20 10] (reversed)

# 2D indexing
arr2d = np.array([[1, 2, 3], [4, 5, 6]])
print(arr2d[0])       # [1 2 3] (first row)
print(arr2d[0, 0])    # 1 (first row, first col)
print(arr2d[1, 2])    # 6 (second row, third col)
print(arr2d[:, 0])    # [1 4] (first column)
print(arr2d[0, :])    # [1 2 3] (first row)
```

---

## PANDAS BASICS

### What is Pandas?

**Pandas** = Panel Data (spreadsheet-like data manipulation)

**Why It Matters:**
- Works with tabular (spreadsheet) data
- Most data comes in this format
- Industry standard for data analysis

### Installation & Import

```python
# Install
pip install pandas

# Import
import pandas as pd

# Check version
print(pd.__version__)
```

### Creating DataFrames

#### From Dictionary
```python
data = {
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35],
    'salary': [50000, 60000, 75000]
}
df = pd.DataFrame(data)
```

#### From List of Dictionaries
```python
records = [
    {'id': 1, 'product': 'Laptop', 'price': 999},
    {'id': 2, 'product': 'Mouse', 'price': 25},
    {'id': 3, 'product': 'Keyboard', 'price': 75}
]
df = pd.DataFrame(records)
```

#### From NumPy Array
```python
arr = np.random.rand(3, 4)
df = pd.DataFrame(arr, columns=['A', 'B', 'C', 'D'])
```

### Basic DataFrame Exploration

```python
df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35],
    'salary': [50000, 60000, 75000]
})

# Display
print(df)            # Show table
print(df.head())     # First 5 rows
print(df.tail(2))    # Last 2 rows

# Info
print(df.shape)      # (3, 3) - 3 rows, 3 columns
print(df.columns)    # ['name', 'age', 'salary']
print(df.dtypes)     # Data types of each column
print(df.info())     # Detailed info

# Summary statistics
print(df.describe()) # Mean, std, min, max, etc.

# Data summary
print(df.isnull().sum())   # Count nulls per column
print(df.duplicated().sum()) # Count duplicate rows
```

---

## PANDAS DATA ACCESS

### Accessing Columns

```python
df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35]
})

# Single column (returns Series)
names = df['name']
# or
names = df.name

# Multiple columns (returns DataFrame)
subset = df[['name', 'age']]

# Add new column
df['age_next_year'] = df['age'] + 1

# Remove column
df_drop = df.drop('age', axis=1)
```

### Accessing Rows

```python
# iloc: integer location based
print(df.iloc[0])        # First row
print(df.iloc[0, 1])     # First row, second column
print(df.iloc[:2])       # First 2 rows
print(df.iloc[1:3])      # Rows 1-2

# loc: label based
print(df.loc[0])         # Row with index 0
print(df.loc[0, 'age'])  # Row 0, column 'age'
print(df.loc[[0, 2]])    # Rows 0 and 2

# Direct row access
for idx, row in df.iterrows():
    print(row['name'], row['age'])
```

### Filtering (Boolean Indexing)

```python
df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie', 'Diana'],
    'age': [25, 30, 35, 28],
    'salary': [50000, 60000, 75000, 55000]
})

# Single condition
result = df[df['age'] > 30]

# Multiple conditions (use & for AND, | for OR)
result = df[(df['age'] > 25) & (df['salary'] > 55000)]

# Using isin
result = df[df['name'].isin(['Alice', 'Bob'])]

# String methods
result = df[df['name'].str.startswith('C')]
result = df[df['name'].str.len() > 4]
result = df[df['name'].str.contains('li')]
```

### Sorting & Ranking

```python
df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35]
})

# Sort by column
df_sorted = df.sort_values('age')
df_sorted = df.sort_values('age', ascending=False)

# Sort by multiple columns
df_sorted = df.sort_values(['age', 'name'])

# Reset index after sorting
df_sorted = df.sort_values('age').reset_index(drop=True)

# Ranking
df['rank'] = df['age'].rank()  # Assigns rank 1, 2, 3...
```

---

## DATA CLEANING

### Missing Values (Nulls)

#### Identifying Missing Values
```python
df = pd.DataFrame({
    'name': ['Alice', 'Bob', None, 'Diana'],
    'age': [25, None, 35, 28]
})

# Check for nulls
print(df.isnull())              # Boolean DataFrame
print(df.isnull().sum())        # Count per column
print(df.isnull().any())        # Any nulls per column?
print(df.isnull().any(axis=0))  # Any nulls per row?

# Total nulls
print(df.isnull().sum().sum())
```

#### Handling Missing Values
```python
# Drop rows with ANY null
df_clean = df.dropna()

# Drop rows with ALL nulls
df_clean = df.dropna(how='all')

# Drop rows where specific columns are null
df_clean = df.dropna(subset=['age'])

# Fill nulls with value
df['age'].fillna(0, inplace=True)

# Fill with different values per column
df.fillna({
    'name': 'Unknown',
    'age': 0,
    'salary': df['salary'].mean()
}, inplace=True)

# Forward fill (use previous value)
df['age'].fillna(method='ffill', inplace=True)

# Backward fill (use next value)
df['age'].fillna(method='bfill', inplace=True)

# Interpolate (estimate between values)
df['age'].interpolate(method='linear', inplace=True)
```

### Duplicate Handling

```python
df = pd.DataFrame({
    'id': [1, 2, 2, 3],
    'name': ['Alice', 'Bob', 'Bob', 'Charlie']
})

# Check duplicates
print(df.duplicated())                    # Boolean Series
print(df.duplicated().sum())              # Count duplicates

# Remove duplicates
df_clean = df.drop_duplicates()

# Remove duplicates on specific column
df_clean = df.drop_duplicates(subset=['id'])

# Keep first or last occurrence
df_clean = df.drop_duplicates(subset=['name'], keep='first')
df_clean = df.drop_duplicates(subset=['name'], keep='last')

# Find duplicate rows
df[df.duplicated(keep=False)]  # Show all duplicates (including first)
```

### Data Type Conversion

```python
df = pd.DataFrame({
    'age': ['25', '30', '35'],        # Strings!
    'price': [10.5, 20.3, 15.7],
    'date': ['2024-01-01', '2024-01-02', '2024-01-03']
})

# Convert string to number
df['age'] = df['age'].astype(int)
df['price'] = df['price'].astype(float)

# Convert to datetime
df['date'] = pd.to_datetime(df['date'])

# Convert to category (saves memory)
df['category'] = df['category'].astype('category')

# Convert to string
df['id'] = df['id'].astype(str)

# Convert with error handling
df['value'] = pd.to_numeric(df['value'], errors='coerce')  # Bad values → NaN
```

### Text Cleaning

```python
df = pd.DataFrame({
    'name': ['  alice  ', 'BOB', 'charlie'],
    'email': ['ALICE@EXAMPLE.COM', 'bob@example.com', 'Charlie@Example.Com']
})

# Whitespace removal
df['name'] = df['name'].str.strip()
df['name'] = df['name'].str.lstrip()  # Left only
df['name'] = df['name'].str.rstrip()  # Right only

# Case conversion
df['name'] = df['name'].str.lower()
df['name'] = df['name'].str.upper()
df['name'] = df['name'].str.title()

# Replace characters
df['phone'] = df['phone'].str.replace('-', '')

# Split string into columns
df[['first', 'last']] = df['name'].str.split(' ', expand=True)

# String methods chaining
df['email'] = df['email'].str.strip().str.lower()

# Check string content
df[df['name'].str.startswith('a')]
df[df['name'].str.contains('b')]
df[df['email'].str.endswith('.com')]
```

### Value Validation & Correction

```python
df = pd.DataFrame({
    'age': [25, 30, -5, 150, 35],      # -5 and 150 invalid
    'email': ['john@x', 'bob@example.com', 'invalid']
})

# Validate ranges
invalid_ages = df[(df['age'] < 0) | (df['age'] > 120)]

# Fix invalid values
df.loc[df['age'] < 0, 'age'] = None
df.loc[df['age'] > 120, 'age'] = None

# Remove invalid rows
df_clean = df[(df['age'] >= 0) & (df['age'] <= 120)]

# Standardize values
df['status'] = df['status'].map({
    'Y': 'Yes',
    'N': 'No',
    'y': 'Yes',
    'n': 'No'
})
```

---

## DATA TRANSFORMATION

### Adding Calculated Columns

```python
df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie'],
    'price': [100, 200, 150],
    'quantity': [5, 3, 4]
})

# Simple calculation
df['total'] = df['price'] * df['quantity']

# Complex calculation
df['tax'] = df['total'] * 0.10

# Conditional calculation
df['discount'] = df['total'].apply(
    lambda x: x * 0.1 if x > 500 else 0
)

# Using apply with function
def categorize(value):
    if value < 200:
        return 'Low'
    elif value < 500:
        return 'Medium'
    else:
        return 'High'

df['category'] = df['total'].apply(categorize)
```

### Renaming Columns

```python
df = pd.DataFrame({
    'old_name': [1, 2, 3],
    'old_age': [25, 30, 35]
})

# Rename specific columns
df = df.rename(columns={
    'old_name': 'customer_name',
    'old_age': 'customer_age'
})

# Rename all at once
df.columns = ['name', 'age', 'salary']

# Rename with function
df.columns = df.columns.str.lower()  # Make all lowercase
```

### Reordering Columns

```python
df = pd.DataFrame({
    'c': [1, 2, 3],
    'a': [4, 5, 6],
    'b': [7, 8, 9]
})

# Reorder columns
df = df[['a', 'b', 'c']]

# Select and keep some columns
df = df[['a', 'c']]

# Alphabetical order
df = df[sorted(df.columns)]
```

---

## GROUPING & AGGREGATION

### GroupBy Operations

```python
df = pd.DataFrame({
    'department': ['Sales', 'IT', 'Sales', 'IT', 'HR'],
    'name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'],
    'salary': [50000, 60000, 55000, 65000, 52000]
})

# Group by department
grouped = df.groupby('department')

# Sum salary by department
print(grouped['salary'].sum())

# Multiple aggregations
print(grouped['salary'].agg(['sum', 'mean', 'count']))

# Custom aggregation names
print(grouped['salary'].agg([
    ('total_salary', 'sum'),
    ('avg_salary', 'mean'),
    ('employee_count', 'count')
]))

# Multiple columns
print(grouped[['salary', 'name']].agg({
    'salary': 'mean',
    'name': 'count'
}))

# Group by multiple columns
df.groupby(['department', 'year']).salary.mean()
```

### Aggregation Functions

```python
df = pd.DataFrame({
    'group': ['A', 'A', 'B', 'B'],
    'value': [10, 20, 30, 40]
})

grouped = df.groupby('group')

# Common aggregations
print(grouped['value'].sum())         # Sum
print(grouped['value'].mean())        # Mean
print(grouped['value'].min())         # Min
print(grouped['value'].max())         # Max
print(grouped['value'].count())       # Count
print(grouped['value'].std())         # Standard deviation
print(grouped['value'].first())       # First value
print(grouped['value'].last())        # Last value
print(grouped['value'].size())        # Group size

# Multiple at once
grouped['value'].agg({
    'sum': np.sum,
    'mean': np.mean,
    'min': np.min,
    'max': np.max
})
```

### Pivot Tables

```python
df = pd.DataFrame({
    'date': ['2024-01-01', '2024-01-01', '2024-01-02', '2024-01-02'],
    'product': ['A', 'B', 'A', 'B'],
    'sales': [100, 150, 120, 140]
})

# Create pivot table
pivot = df.pivot_table(
    values='sales',
    index='date',
    columns='product',
    aggfunc='sum'
)
# Result:
# product   A    B
# date
# 2024-01-01  100  150
# 2024-01-02  120  140
```

---

## FILE I/O

### Reading Files

#### CSV
```python
# Read CSV
df = pd.read_csv('data.csv')

# Read with options
df = pd.read_csv('data.csv',
    sep=',',
    header=0,
    dtype={'age': int, 'salary': float},
    na_values=['NA', 'N/A', ''],
    parse_dates=['date'],
    encoding='utf-8'
)

# Read specific columns
df = pd.read_csv('data.csv', usecols=['name', 'age'])

# Read first N rows
df = pd.read_csv('data.csv', nrows=1000)

# Skip rows
df = pd.read_csv('data.csv', skiprows=5)
```

#### JSON
```python
# Read JSON
df = pd.read_json('data.json')

# Read with options
df = pd.read_json('data.json',
    orient='records',  # [{}], default
    lines=True         # Newline delimited JSON
)
```

#### Excel
```python
# Read Excel
df = pd.read_excel('data.xlsx', sheet_name='Sheet1')

# Read specific sheet
df = pd.read_excel('data.xlsx', sheet_name=0)  # First sheet

# Get all sheets
all_sheets = pd.read_excel('data.xlsx', sheet_name=None)
```

#### Parquet
```python
# Read Parquet (fast, compressed)
df = pd.read_parquet('data.parquet')
```

### Writing Files

#### CSV
```python
# Write to CSV
df.to_csv('output.csv', index=False)

# Write with options
df.to_csv('output.csv',
    sep=',',
    index=False,
    encoding='utf-8',
    compression='gzip'
)
```

#### JSON
```python
# Write to JSON
df.to_json('output.json', orient='records', indent=2)

# Newline delimited JSON
df.to_json('output.jsonl', orient='records', lines=True)
```

#### Excel
```python
# Write to Excel
df.to_excel('output.xlsx', sheet_name='Results', index=False)

# Multiple sheets
with pd.ExcelWriter('output.xlsx') as writer:
    df1.to_excel(writer, sheet_name='Sheet1')
    df2.to_excel(writer, sheet_name='Sheet2')
```

#### Parquet
```python
# Write to Parquet
df.to_parquet('output.parquet')

# Parquet is best for:
# - Compression (saves space)
# - Speed (fast read/write)
# - Data type preservation
```

### Comparing File Formats

```
CSV:
  Pros: Human readable, universal
  Cons: Large file size, slow to read
  Use: Data sharing, reports

JSON:
  Pros: Nested structure, API-friendly
  Cons: Large file size
  Use: APIs, web data

Parquet:
  Pros: Compressed, fast, type-safe
  Cons: Not human readable
  Use: Data warehouses, Spark jobs
```

---

## QUICK REFERENCE

### NumPy Cheat Sheet

```python
import numpy as np

# Create
arr = np.array([1, 2, 3])
arr = np.zeros(5)
arr = np.arange(0, 10, 2)

# Access
arr[0]
arr[1:3]
arr[arr > 2]

# Operations
arr + 10
arr * 2
np.sum(arr)
np.mean(arr)

# Shape
arr.shape
arr.reshape(5, 1)

# Sort
np.sort(arr)
np.argsort(arr)
```

### Pandas Cheat Sheet

```python
import pandas as pd

# Create
df = pd.DataFrame({'a': [1, 2], 'b': [3, 4]})

# Access
df['a']
df.loc[0]
df.iloc[0]

# Filter
df[df['a'] > 1]
df[(df['a'] > 1) & (df['b'] < 4)]

# Transform
df['c'] = df['a'] + df['b']
df = df.drop('a', axis=1)

# Aggregate
df.groupby('category').sum()
df['a'].sum()

# Clean
df.dropna()
df.drop_duplicates()
df['a'].astype(int)

# I/O
df.to_csv('out.csv')
df.to_excel('out.xlsx')
pd.read_csv('in.csv')
```

### Common Data Cleaning Patterns

```python
# Handle missing values
df = df.dropna(subset=['critical_column'])
df['optional_column'].fillna(df['optional_column'].mean())

# Remove duplicates
df = df.drop_duplicates(subset=['id'])

# Type conversion
df['date'] = pd.to_datetime(df['date'])
df['age'] = pd.to_numeric(df['age'], errors='coerce')

# Text cleaning
df['name'] = df['name'].str.strip().str.lower()

# Standardization
df['value'] = (df['value'] - df['value'].mean()) / df['value'].std()

# Range validation
df = df[(df['age'] >= 0) & (df['age'] <= 150)]

# Data quality check
quality = 1 - (df.isnull().sum().sum() / (len(df) * len(df.columns)))
print(f"Quality Score: {quality * 100:.1f}%")
```

---

## KEY TAKEAWAYS

✅ **NumPy** provides fast vectorized operations
✅ **Vectorization** is 100x+ faster than loops
✅ **Pandas DataFrames** are the standard for tabular data
✅ **Missing values** require careful handling
✅ **Data cleaning** is 80% of data engineering work
✅ **Type conversion** must happen before analysis
✅ **GroupBy** aggregations summarize data efficiently
✅ **Parquet** is the best format for data storage
✅ **Broadcasting** allows operations on different shapes
✅ **Boolean indexing** filters data efficiently

---

## COMMON PITFALLS & SOLUTIONS

| Issue | Solution |
|-------|----------|
| **SettingWithCopyWarning** | Use `.copy()` when filtering |
| **MemoryError with large files** | Use `chunksize` parameter or Parquet |
| **Type mismatches** | Use `astype()` before operations |
| **Lost index after groupby** | Use `.reset_index()` |
| **NaN propagation** | Use `skipna=True` in functions |
| **Slow CSV reads** | Use Parquet or HDF5 instead |
| **Inconsistent string formats** | Use `.str.lower().str.strip()` |
| **Unexpected sorting** | Specify `ascending` explicitly |

---

**Ready to apply these skills to the Real Estate project? You've got the tools! 🚀**
