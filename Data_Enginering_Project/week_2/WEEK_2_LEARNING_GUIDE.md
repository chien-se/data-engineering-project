# WEEK 2: Python Data Manipulation with Pandas & NumPy
## Complete Learning Guide

**Time Commitment:** 18-20 hours  
**Prerequisite:** Week 1 completed  
**By End of Week:** Real Estate Data Cleaning pipeline  
**Status:** ⏱️ STARTING NOW

---

# PART 1: NUMPY FUNDAMENTALS (4 hours)
## Fast numerical computing with arrays

### What is NumPy?

NumPy = **Num**erical **Py**thon

**Why it matters:**
- Faster than Python lists (100x+)
- Used everywhere in data science
- Foundation for Pandas
- Foundation for ML libraries

**Real Example:**
```
Python list:  [1, 2, 3, 4, 5] + [1, 1, 1, 1, 1]
              Add each element one by one (slow)

NumPy array: array([1, 2, 3, 4, 5]) + array([1, 1, 1, 1, 1])
             Add all at once (fast!)
```

---

## Step 1: Install & Import NumPy

```bash
# Make sure virtual environment is activated
source venv/bin/activate  # macOS/Linux
# or: venv\Scripts\activate  # Windows

# NumPy should already be installed, but verify:
python -c "import numpy; print(numpy.__version__)"

# Should print version like: 1.24.3
```

**Create test file:**
```python
# numpy_intro.py
import numpy as np

print("NumPy version:", np.__version__)
print("✅ NumPy imported successfully!")
```

**Run it:**
```bash
python numpy_intro.py
```

---

## Step 2: Create Arrays

### 2.1: Creating Arrays

```python
import numpy as np

# From Python list
arr1 = np.array([1, 2, 3, 4, 5])
print(arr1)  # [1 2 3 4 5]

# 2D array (matrix)
arr2d = np.array([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])
print(arr2d)

# Zeros array (all zeros)
zeros = np.zeros(5)  # [0. 0. 0. 0. 0.]

# Ones array (all ones)
ones = np.ones((3, 3))  # 3x3 matrix of ones

# Range array (like Python range)
range_arr = np.arange(0, 10, 2)  # [0 2 4 6 8]

# Linspace (evenly spaced values)
linspace_arr = np.linspace(0, 1, 5)  # [0.   0.25 0.5  0.75 1.  ]

# Random values
random_arr = np.random.rand(5)  # [0.45 0.23 0.89 ...]

# Identity matrix
identity = np.eye(3)  # 3x3 identity matrix
```

### 2.2: Array Properties

```python
arr = np.array([1, 2, 3, 4, 5])

# Shape (dimensions)
print(arr.shape)  # (5,) - 1D array with 5 elements

# Size (total elements)
print(arr.size)  # 5

# Data type
print(arr.dtype)  # int64 or int32

# Reshape
reshaped = arr.reshape(5, 1)  # Convert to column
print(reshaped.shape)  # (5, 1)

# 2D example
arr2d = np.array([[1, 2, 3], [4, 5, 6]])
print(arr2d.shape)  # (2, 3) - 2 rows, 3 columns
```

---

## Step 3: Array Operations (Vectorization)

### 3.1: Basic Math (Element-wise)

```python
arr = np.array([1, 2, 3, 4, 5])

# Add scalar
result = arr + 10  # [11 12 13 14 15]

# Multiply
result = arr * 2   # [2 4 6 8 10]

# Square root
result = np.sqrt(arr)  # [1. 1.41 1.73 2. 2.24]

# Power
result = arr ** 2  # [1 4 9 16 25]

# Why this matters:
# Instead of: for i in range(len(arr)): arr[i] = arr[i] * 2
# You can:    arr = arr * 2  (MUCH faster!)
```

### 3.2: Array to Array Operations

```python
arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])

# Addition
result = arr1 + arr2  # [5 7 9]

# Multiplication
result = arr1 * arr2  # [4 10 18]

# Broadcasting (when shapes don't match)
arr1 = np.array([[1, 2, 3]])  # shape (1, 3)
arr2 = np.array([[1], [2], [3]])  # shape (3, 1)

result = arr1 + arr2  # Broadcasts to (3, 3)!
# [[2 3 4]
#  [3 4 5]
#  [4 5 6]]
```

### 3.3: Common Functions

```python
arr = np.array([1, 5, 3, 2, 4])

# Sum
print(np.sum(arr))  # 15

# Mean (average)
print(np.mean(arr))  # 3.0

# Min/Max
print(np.min(arr))  # 1
print(np.max(arr))  # 5

# Standard deviation
print(np.std(arr))  # 1.41

# Sorted
print(np.sort(arr))  # [1 2 3 4 5]

# Unique
arr_with_dupes = np.array([1, 2, 2, 3, 3, 3])
print(np.unique(arr_with_dupes))  # [1 2 3]
```

---

## Step 4: Array Indexing & Slicing

```python
arr = np.array([10, 20, 30, 40, 50])

# Single element (like list)
print(arr[0])  # 10
print(arr[-1])  # 50

# Slicing
print(arr[1:4])  # [20 30 40]
print(arr[:3])   # [10 20 30]
print(arr[::2])  # [10 30 50] - every 2nd element

# 2D indexing
arr2d = np.array([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])

print(arr2d[0])      # [1 2 3] - first row
print(arr2d[0, 0])   # 1 - first element
print(arr2d[1, 2])   # 6 - row 1, column 2

# Boolean indexing
arr = np.array([1, 2, 3, 4, 5])
mask = arr > 3  # [False False False True True]
print(arr[mask])  # [4 5]
```

---

## ✅ CHECKPOINT 1: NumPy?
- [✅ ] Can create arrays (zeros, ones, range, random)
- [✅ ] Understand array shape and indexing
- [✅ ] Can perform vectorized operations
- [✅ ] Understand broadcasting
- [✅ ] Can use common functions (sum, mean, std)

---

---

# PART 2: PANDAS FUNDAMENTALS (7 hours)
## Working with tabular data

### What is Pandas?

Pandas = Working with **Pan**el **Da**ta

Pandas = NumPy + spreadsheet functionality

**Why it matters:**
- Most data comes in table format (CSV, Excel, databases)
- Pandas is the standard tool for data manipulation
- You'll use it in 80% of data engineering jobs

---

## Step 1: DataFrames (Pandas Tables)

### 1.1: Creating DataFrames

```python
import pandas as pd
import numpy as np

# From dictionary
data = {
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35],
    'salary': [50000, 60000, 75000]
}
df = pd.DataFrame(data)
print(df)

# From list of dictionaries
records = [
    {'id': 1, 'product': 'Laptop', 'price': 999},
    {'id': 2, 'product': 'Mouse', 'price': 25},
    {'id': 3, 'product': 'Keyboard', 'price': 75}
]
df = pd.DataFrame(records)

# From NumPy array
arr = np.random.rand(3, 4)
df = pd.DataFrame(arr, columns=['A', 'B', 'C', 'D'])
```

### 1.2: Exploring DataFrames

```python
df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35],
    'salary': [50000, 60000, 75000]
})

# Display
print(df)           # Show table
print(df.head())    # First 5 rows
print(df.tail(2))   # Last 2 rows

# Info
print(df.shape)     # (3, 3) - 3 rows, 3 columns
print(df.columns)   # ['name', 'age', 'salary']
print(df.dtypes)    # Data types of each column
print(df.info())    # Detailed info (nulls, memory)

# Statistics
print(df.describe())  # Mean, std, min, max, etc.

# Data summary
print(df.isnull().sum())  # Count of missing values per column
```

---

## Step 2: Accessing Data

### 2.1: Column Access

```python
df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35]
})

# Single column (returns Series)
names = df['name']
# or
names = df.name

# Multiple columns
subset = df[['name', 'age']]

# Column operations
df['age_next_year'] = df['age'] + 1
df['age_group'] = df['age'].apply(lambda x: 'Young' if x < 30 else 'Old')
```

### 2.2: Row Access

```python
df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35]
})

# iloc: integer location based
print(df.iloc[0])      # First row
print(df.iloc[0, 1])   # First row, second column (25)
print(df.iloc[:2])     # First 2 rows

# loc: label based
print(df.loc[0])       # Row with index 0
print(df.loc[0, 'age'])  # Row 0, column 'age'

# Boolean indexing (very useful!)
young = df[df['age'] < 30]  # Rows where age < 30
# Returns: Alice row only
```

### 2.3: Filtering & Selection

```python
df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie', 'Diana'],
    'age': [25, 30, 35, 28],
    'department': ['Sales', 'IT', 'IT', 'HR']
})

# Single condition
result = df[df['age'] > 30]

# Multiple conditions
result = df[(df['age'] > 25) & (df['department'] == 'IT')]

# Using isin
result = df[df['name'].isin(['Alice', 'Bob'])]

# Using str methods (for text columns)
result = df[df['name'].str.startswith('C')]  # Starts with C
result = df[df['name'].str.len() > 4]        # Name length > 4
```

---

## Step 3: Data Cleaning

### 3.1: Missing Values (Nulls)

```python
df = pd.DataFrame({
    'name': ['Alice', 'Bob', None, 'Diana'],
    'age': [25, None, 35, 28],
    'salary': [50000, 60000, 75000, None]
})

# Check for nulls
print(df.isnull())          # Boolean DataFrame
print(df.isnull().sum())    # Count per column

# Remove rows with ANY null
df_clean = df.dropna()

# Remove rows with ALL nulls
df_clean = df.dropna(how='all')

# Remove rows where specific column is null
df_clean = df.dropna(subset=['age'])

# Fill nulls with value
df['age'].fillna(df['age'].mean(), inplace=True)

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
```

### 3.2: Duplicate Handling

```python
df = pd.DataFrame({
    'id': [1, 2, 2, 3],
    'name': ['Alice', 'Bob', 'Bob', 'Charlie']
})

# Check duplicates
print(df.duplicated())  # [False, False, True, False]

# Count duplicates
print(df.duplicated().sum())  # 1

# Remove duplicates
df_clean = df.drop_duplicates()

# Remove duplicates based on specific column
df_clean = df.drop_duplicates(subset=['id'])

# Keep first or last occurrence
df_clean = df.drop_duplicates(subset=['name'], keep='first')
```

### 3.3: Data Type Conversion

```python
df = pd.DataFrame({
    'age': ['25', '30', '35'],  # Strings!
    'price': [10.5, 20.3, 15.7],
    'purchased': ['2024-01-01', '2024-01-02', '2024-01-03']
})

# Convert string to number
df['age'] = df['age'].astype(int)

# Convert to float
df['price'] = df['price'].astype(float)

# Convert to datetime
df['purchased'] = pd.to_datetime(df['purchased'])

# Check dtypes
print(df.dtypes)
```

### 3.4: Standardization & Cleaning Text

```python
df = pd.DataFrame({
    'name': ['  alice  ', 'BOB', 'charlie'],
    'email': ['ALICE@EXAMPLE.COM', 'bob@example.com', 'Charlie@Example.Com']
})

# Remove whitespace
df['name'] = df['name'].str.strip()

# Lowercase
df['name'] = df['name'].str.lower()
df['email'] = df['email'].str.lower()

# Replace characters
df['phone'] = df['phone'].str.replace('-', '')  # Remove dashes

# Split string
df[['first', 'last']] = df['name'].str.split(' ', expand=True)

# All at once (chaining)
df['name'] = df['name'].str.strip().str.lower()
```

---

## Step 4: Grouping & Aggregation

### 4.1: GroupBy

```python
df = pd.DataFrame({
    'department': ['Sales', 'IT', 'Sales', 'IT', 'HR'],
    'name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'],
    'salary': [50000, 60000, 55000, 65000, 52000]
})

# Group by department
grouped = df.groupby('department')

# Get sum of salary by department
print(grouped['salary'].sum())

# Multiple aggregations
print(grouped['salary'].agg([
    ('total_salary', 'sum'),
    ('avg_salary', 'mean'),
    ('count', 'count')
]))

# Multiple columns
print(grouped[['salary', 'name']].agg({
    'salary': 'mean',
    'name': 'count'
}))

# Custom aggregations
result = grouped.agg({
    'salary': ['min', 'max', 'mean'],
    'name': 'count'
})
```

### 4.2: Pivot Tables

```python
df = pd.DataFrame({
    'date': ['2024-01-01', '2024-01-01', '2024-01-02', '2024-01-02'],
    'product': ['A', 'B', 'A', 'B'],
    'sales': [100, 150, 120, 140]
})

# Pivot table
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

## Step 5: Data Quality Validation

### 5.1: Quality Checks

```python
def validate_customer_data(df):
    """Validate customer data quality"""
    
    issues = []
    
    # Check for nulls
    null_counts = df.isnull().sum()
    if null_counts.sum() > 0:
        issues.append(f"Missing values: {null_counts[null_counts > 0].to_dict()}")
    
    # Check age range
    if (df['age'] < 0).any() or (df['age'] > 150).any():
        issues.append("Age out of valid range (0-150)")
    
    # Check email format
    if not df['email'].str.contains('@').all():
        issues.append("Invalid email format")
    
    # Check duplicates
    if df.duplicated(subset=['email']).any():
        issues.append("Duplicate email addresses found")
    
    # Check data types
    if df['salary'].dtype not in ['int64', 'float64']:
        issues.append("Salary must be numeric")
    
    return issues

# Usage
df = pd.read_csv('customers.csv')
issues = validate_customer_data(df)
if issues:
    print("Data Quality Issues:")
    for issue in issues:
        print(f"  ❌ {issue}")
else:
    print("✅ Data validation passed!")
```

---

## ✅ CHECKPOINT 2: Pandas?
- [ ] Create DataFrames from different sources
- [ ] Access rows/columns with iloc and loc
- [ ] Filter data with boolean indexing
- [ ] Handle missing and duplicate values
- [ ] Convert data types
- [ ] GroupBy and aggregations
- [ ] Validate data quality

---

---

# PART 3: FILE I/O (3 hours)
## Reading and writing data

## Step 1: CSV Files

```python
import pandas as pd

# READ CSV
df = pd.read_csv('data.csv')

# READ with options
df = pd.read_csv('data.csv', 
    sep=',',           # Delimiter
    header=0,          # Row number with column names
    dtype={'age': int, 'salary': float},
    na_values=['NA', 'N/A', ''],  # Treat as missing
    parse_dates=['date']  # Convert to datetime
)

# WRITE CSV
df.to_csv('output.csv', index=False)  # Don't write index

# With compression
df.to_csv('output.csv.gz', compression='gzip')
```

## Step 2: JSON Files

```python
# READ JSON
df = pd.read_json('data.json')

# WRITE JSON
df.to_json('output.json', orient='records', indent=2)
# orient options:
# - 'records': List of dicts [{col: val}, ...]
# - 'index': Dict with index as keys
# - 'split': Dict with data, index, columns
```

## Step 3: Parquet (Fast Binary Format)

```python
# READ PARQUET
df = pd.read_parquet('data.parquet')

# WRITE PARQUET
df.to_parquet('output.parquet')

# Why Parquet?
# - Compressed (smaller file)
# - Fast to read/write
# - Preserves data types
# - Industry standard for big data
```

## Step 4: Excel Files

```python
# READ EXCEL
df = pd.read_excel('data.xlsx', sheet_name='Sheet1')

# WRITE EXCEL
df.to_excel('output.xlsx', sheet_name='Results', index=False)

# Multiple sheets
with pd.ExcelWriter('output.xlsx') as writer:
    df1.to_excel(writer, sheet_name='Sheet1')
    df2.to_excel(writer, sheet_name='Sheet2')
```

## Step 5: Performance Comparison

```python
# File sizes (example with 1M rows):
# CSV:     500 MB
# JSON:    800 MB
# Parquet: 150 MB  ← Most efficient!

# Read speed (1M rows):
# CSV:     5-10 seconds
# Parquet: 0.5-1 second  ← 5-10x faster!
```

---

---

# PART 4: WEEK 2 PROJECT - REAL ESTATE DATA CLEANING (6-7 hours)
## Build a data cleaning pipeline

## Project Overview

**Scenario:** Real estate company has messy property data. Clean and prepare it for analysis.

**Deliverables:**
- Cleaned CSV file
- Quality report (JSON)
- Validation checks
- Analysis summary

---

## Project Code

### Step 1: Create Sample Data

```python
# real_estate_project.py

import pandas as pd
import json
from datetime import datetime

# Create messy real estate data
raw_data = {
    'address': [
        '123 Main St', '456 OAK ave', None, '789  PINE ST',
        '101 Elm Street', '202 MAPLE STREET', '303 birch rd', '404 spruce ave'
    ],
    'city': ['Seattle', 'seattle', 'SEATTLE', 'Seattle', None, 'Seattle', 'Seattle', 'seattle'],
    'price': [500000, 550000, 'N/A', 0, 600000, -50000, 575000, 625000],
    'bedrooms': ['3', '4', '3', None, '5', '2', 3.0, '4'],
    'bathrooms': [2.0, 2.5, '2', 2.0, 3.0, 1.5, None, 2.5],
    'sq_feet': [2000, 2500, 2200, 1800, 3000, 1500, 1900, 2400],
    'year_built': [2010, 2015, 2012, '2005', 2020, 1995, 2008, 2018],
    'listed_date': ['2024-01-15', '2024/02/20', '2024-03-10', '01/01/2024', 
                    '2024-02-05', '2024-01-30', '2024-03-05', '2024-02-28']
}

df_raw = pd.DataFrame(raw_data)

# Save raw data
df_raw.to_csv('real_estate_raw.csv', index=False)
print(f"✅ Created raw data: {len(df_raw)} records")
```

### Step 2: Data Quality Assessment

```python
def assess_data_quality(df):
    """Assess data quality before cleaning"""
    
    print("\n📊 DATA QUALITY ASSESSMENT")
    print("=" * 50)
    
    print(f"\nShape: {df.shape[0]} rows, {df.shape[1]} columns")
    
    print("\n❌ Missing Values:")
    nulls = df.isnull().sum()
    print(nulls[nulls > 0])
    
    print("\n📋 Data Types:")
    print(df.dtypes)
    
    print("\n⚠️  Issues Found:")
    
    # Price issues
    price_col = pd.to_numeric(df['price'], errors='coerce')
    bad_prices = df[(pd.to_numeric(df['price'], errors='coerce') <= 0) | 
                     (df['price'] == 'N/A')]
    if len(bad_prices) > 0:
        print(f"  - Invalid prices: {len(bad_prices)} records")
    
    # Bedrooms should be integer
    try:
        beds = pd.to_numeric(df['bedrooms'], errors='coerce')
        if beds.isnull().sum() > 0:
            print(f"  - Invalid bedrooms: {beds.isnull().sum()} records")
    except:
        print(f"  - Bedrooms format issues")
    
    # Address nulls
    if df['address'].isnull().sum() > 0:
        print(f"  - Missing addresses: {df['address'].isnull().sum()} records")
    
    # City standardization
    if df['city'].nunique() > 1:
        print(f"  - City inconsistency: {df['city'].unique()}")

# Run assessment
assess_data_quality(df_raw)
```

### Step 3: Clean Data

```python
def clean_real_estate_data(df):
    """Clean real estate data"""
    
    df = df.copy()  # Don't modify original
    
    print("\n🧹 CLEANING DATA")
    print("=" * 50)
    
    # 1. PRICE - Convert, handle invalid
    print("\n1️⃣ Cleaning prices...")
    df['price'] = pd.to_numeric(df['price'], errors='coerce')
    
    # Remove $0 and negative prices
    invalid_price = (df['price'] <= 0) | (df['price'].isnull())
    print(f"   Removing {invalid_price.sum()} invalid prices")
    df = df[~invalid_price]
    
    # 2. BEDROOMS - Convert to integer
    print("2️⃣ Cleaning bedrooms...")
    df['bedrooms'] = pd.to_numeric(df['bedrooms'], errors='coerce').astype('Int64')
    
    # 3. BATHROOMS - Already numeric or coerce
    print("3️⃣ Cleaning bathrooms...")
    df['bathrooms'] = pd.to_numeric(df['bathrooms'], errors='coerce')
    
    # 4. YEAR_BUILT - Convert to integer
    print("4️⃣ Cleaning year_built...")
    df['year_built'] = pd.to_numeric(df['year_built'], errors='coerce').astype('Int64')
    
    # 5. ADDRESS - Clean whitespace, standardize
    print("5️⃣ Cleaning addresses...")
    df['address'] = df['address'].str.strip().str.title()
    
    # Remove rows with null address
    df = df.dropna(subset=['address'])
    
    # 6. CITY - Standardize case
    print("6️⃣ Cleaning cities...")
    df['city'] = df['city'].str.strip().str.title()
    
    # Fill missing cities
    df['city'].fillna('Unknown', inplace=True)
    
    # 7. DATES - Convert to datetime
    print("7️⃣ Cleaning dates...")
    df['listed_date'] = pd.to_datetime(df['listed_date'], errors='coerce')
    
    # 8. Remove rows with critical nulls
    df = df.dropna(subset=['bedrooms', 'bathrooms', 'listed_date'])
    
    # 9. Remove duplicates (by address)
    print("8️⃣ Removing duplicates...")
    dupes = df.duplicated(subset=['address']).sum()
    print(f"   Removed {dupes} duplicate addresses")
    df = df.drop_duplicates(subset=['address'], keep='first')
    
    print(f"\n✅ Cleaning complete! {len(df)} records remaining")
    return df

# Clean the data
df_clean = clean_real_estate_data(df_raw)
```

### Step 4: Add Derived Features

```python
def add_features(df):
    """Add calculated features"""
    
    df = df.copy()
    
    print("\n📈 ADDING FEATURES")
    print("=" * 50)
    
    # Price per square foot
    df['price_per_sqft'] = (df['price'] / df['sq_feet']).round(2)
    print(f"  ✅ Price per sq ft: ${df['price_per_sqft'].mean():.2f} average")
    
    # Total bathrooms as integer beds
    df['total_rooms'] = df['bedrooms'] + df['bathrooms'].astype(int)
    
    # Days on market
    df['days_listed'] = (datetime.now() - df['listed_date']).dt.days
    print(f"  ✅ Days listed: {df['days_listed'].mean():.0f} days average")
    
    # Property age
    df['property_age'] = datetime.now().year - df['year_built']
    
    # Price category
    def price_category(price):
        if price < 400000:
            return 'Budget'
        elif price < 600000:
            return 'Mid-range'
        else:
            return 'Luxury'
    
    df['price_category'] = df['price'].apply(price_category)
    
    return df

df_clean = add_features(df_clean)
```

### Step 5: Validation Checks

```python
def validate_cleaned_data(df):
    """Validate cleaned data"""
    
    print("\n✔️ VALIDATION CHECKS")
    print("=" * 50)
    
    checks = []
    
    # Check 1: No nulls in critical columns
    critical = ['address', 'price', 'bedrooms']
    nulls = df[critical].isnull().sum()
    if nulls.sum() == 0:
        checks.append(("✅ No nulls in critical columns", True))
    else:
        checks.append((f"❌ Nulls found: {nulls.to_dict()}", False))
    
    # Check 2: Price in reasonable range
    if (df['price'] > 50000).all() and (df['price'] < 10000000).all():
        checks.append(("✅ Prices in reasonable range", True))
    else:
        checks.append(("❌ Price outliers detected", False))
    
    # Check 3: Bedrooms are positive integers
    if (df['bedrooms'] > 0).all():
        checks.append(("✅ Bedrooms are positive", True))
    else:
        checks.append(("❌ Invalid bedroom counts", False))
    
    # Check 4: Listed date is recent
    recent = df['days_listed'] >= 0
    if recent.all():
        checks.append(("✅ Listed dates are valid", True))
    else:
        checks.append(("❌ Invalid listing dates", False))
    
    # Check 5: No duplicates
    if df.duplicated(subset=['address']).sum() == 0:
        checks.append(("✅ No duplicate addresses", True))
    else:
        checks.append(("❌ Duplicates found", False))
    
    # Print results
    for check_name, passed in checks:
        print(f"  {check_name}")
    
    all_passed = all(passed for _, passed in checks)
    return all_passed

validation_passed = validate_cleaned_data(df_clean)
```

### Step 6: Generate Quality Report

```python
def generate_quality_report(df_raw, df_clean):
    """Generate data quality report"""
    
    report = {
        'timestamp': datetime.now().isoformat(),
        'raw_records': len(df_raw),
        'cleaned_records': len(df_clean),
        'records_removed': len(df_raw) - len(df_clean),
        'removal_rate': f"{(len(df_raw) - len(df_clean)) / len(df_raw) * 100:.1f}%",
        'columns': len(df_clean.columns),
        'quality_metrics': {
            'missing_values_before': int(df_raw.isnull().sum().sum()),
            'missing_values_after': int(df_clean.isnull().sum().sum()),
            'duplicates_removed': int(df_raw.duplicated(subset=['address']).sum()),
        },
        'data_types': df_clean.dtypes.astype(str).to_dict(),
        'statistics': {
            'avg_price': f"${df_clean['price'].mean():,.0f}",
            'avg_price_per_sqft': f"${df_clean['price_per_sqft'].mean():.2f}",
            'avg_bedrooms': f"{df_clean['bedrooms'].mean():.1f}",
            'avg_bathrooms': f"{df_clean['bathrooms'].mean():.1f}",
            'avg_days_listed': f"{df_clean['days_listed'].mean():.0f}",
        },
        'quality_score': round(
            (1 - df_clean.isnull().sum().sum() / (len(df_clean) * len(df_clean.columns))) * 100, 1
        )
    }
    
    return report

# Generate report
report = generate_quality_report(df_raw, df_clean)

print("\n📋 QUALITY REPORT")
print("=" * 50)
print(f"Records: {report['raw_records']} → {report['cleaned_records']} (-{report['removal_rate']})")
print(f"Quality Score: {report['quality_score']}%")
print(f"Avg Price: {report['statistics']['avg_price']}")
print(f"Avg Price/SqFt: {report['statistics']['avg_price_per_sqft']}")
```

### Step 7: Export Results

```python
# Save cleaned data
df_clean.to_csv('real_estate_cleaned.csv', index=False)
print("\n✅ Saved: real_estate_cleaned.csv")

# Save quality report
with open('quality_report.json', 'w') as f:
    json.dump(report, f, indent=2)
print("✅ Saved: quality_report.json")

# Save summary statistics
summary = {
    'total_properties': len(df_clean),
    'price_range': {
        'min': f"${df_clean['price'].min():,.0f}",
        'max': f"${df_clean['price'].max():,.0f}",
        'avg': f"${df_clean['price'].mean():,.0f}",
        'median': f"${df_clean['price'].median():,.0f}"
    },
    'by_price_category': df_clean['price_category'].value_counts().to_dict(),
    'by_city': df_clean['city'].value_counts().to_dict(),
}

with open('summary.json', 'w') as f:
    json.dump(summary, f, indent=2)
print("✅ Saved: summary.json")
```

---

# PART 5: GIT COMMIT & DOCUMENTATION (1 hour)

```bash
# Stage all files
git add -A

# Commit
git commit -m "Week 2: Real estate data cleaning pipeline with Pandas & NumPy"

# View history
git log --oneline
```

Create `WEEK_2_NOTES.md`:

```markdown
# Week 2: Pandas & NumPy Mastery

## What I Learned
- NumPy for fast numerical operations
- Pandas DataFrames for data manipulation
- Data cleaning and validation
- File I/O (CSV, JSON, Parquet)

## Key Concepts
- Vectorization (why it's fast)
- GroupBy and aggregations
- Boolean indexing for filtering
- Data type conversion

## Project: Real Estate Data Cleaning
- Cleaned messy property data
- Removed invalid records
- Added calculated features
- Generated quality report

## Files Created
- `real_estate_raw.csv` - Original messy data
- `real_estate_cleaned.csv` - Cleaned data
- `quality_report.json` - Data quality metrics
- `summary.json` - Summary statistics

## Challenges & Solutions
1. **Challenge:** Mixed data types (strings, numbers)
   **Solution:** Used pd.to_numeric() with error handling

2. **Challenge:** Missing values in critical columns
   **Solution:** Removed rows with nulls in address, price

3. **Challenge:** Standardizing text (address capitalization)
   **Solution:** Used str.strip() and str.title()

## Next: Week 3
- APIs and web scraping
- Extracting data from real sources
```

---

# ✅ WEEK 2 FINAL CHECKPOINT

By end of Week 2, you should have:

- [x] NumPy fundamentals mastered
- [x] Pandas DataFrames working smoothly
- [x] Data cleaning pipeline built
- [x] Quality validation checks
- [x] Real estate data project complete
- [x] Results exported (CSV, JSON)
- [x] 2+ commits to Git

**Files in your repo:**
- `real_estate_raw.csv`
- `real_estate_cleaned.csv`
- `quality_report.json`
- `summary.json`
- `real_estate_project.py`
- `WEEK_2_NOTES.md`

---

# 🎯 WHAT'S NEXT (Week 3 Preview)

Week 3: **APIs & Web Scraping**
- Making HTTP requests to APIs
- Parsing JSON responses
- Web scraping with BeautifulSoup
- Error handling and retries
- Final capstone: Movie Data ETL pipeline

**Get ready to extract data from the internet!** 🌐

---

**Ready to Start Week 2? Begin with Part 1: NumPy Fundamentals! 🚀**
