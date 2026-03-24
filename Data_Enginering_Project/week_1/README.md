# Data Engineering Roadmap: Week-by-Week Plan
**Timeline:** 20 weeks | **Commitment:** 15-20 hours/week | **Goal:** Distributed Systems + ML Data Engineering

---

# PHASE 1: FOUNDATIONS (Weeks 1-3)
## Goal: Build Python skills & understand data engineering fundamentals

### **WEEK 1: Python Basics & Data Engineering Intro**
**Time Commitment:** 15-20 hours

#### Learning Objectives:
- [ ] Understand what data engineers do and how they differ from data scientists
- [ ] Know the data engineering lifecycle (collection → storage → processing → analytics)
- [ ] Write Python scripts with proper syntax, data types, and control flow
- [ ] Use Jupyter notebooks effectively for exploratory work

#### Topics:
1. **Data Engineering Fundamentals** (3 hours)
   - What is data engineering?
   - Why distributed systems matter
   - Data pipeline architecture basics
   - Real-world problems you'll solve

2. **Python Basics** (6 hours)
   - Variables, data types (int, float, string, list, dict)
   - Control flow (if/else, loops)
   - Functions and modules
   - Exception handling
   - Reading/writing files (CSV, JSON)

3. **Jupyter & Development Setup** (3 hours)
   - Install Python 3.9+, pip, virtual environments
   - Jupyter notebook setup
   - IDE setup (VSCode or PyCharm)
   - Git basics for version control

4. **Python Best Practices** (3 hours)
   - Code style (PEP 8)
   - Naming conventions
   - Comments and documentation
   - Writing clean, readable code

#### Hands-On Practice:
```python
# Project: Movie Data Explorer
- Read a CSV file of movies (title, year, rating, budget)
- Parse and validate the data
- Calculate statistics (avg rating, highest budget movie)
- Write results to JSON
- Handle missing/corrupted data gracefully
```

#### Checkpoint - By end of Week 1, you should be able to:
- [] Write a Python script that reads CSV → cleans data → writes JSON
- [ ] Use try/except for error handling
- [ ] Explain what a data pipeline is in your own words
- [ ] Set up a Python project with version control

#### Resources:
- Python official tutorial (sections 3-6)
- Real Python: Python for Data Engineers
- YouTube: Corey Schafer Python playlist (videos 1-8)

---

### **WEEK 2: Python Data Manipulation with Pandas & NumPy**
**Time Commitment:** 18-20 hours

#### Learning Objectives:
- [ ] Manipulate tabular data using Pandas DataFrames
- [ ] Perform vectorized operations with NumPy
- [ ] Handle missing data and data quality issues
- [ ] Work with multiple data formats (CSV, JSON, Parquet)

#### Topics:
1. **NumPy Fundamentals** (4 hours)
   - Arrays vs lists
   - Vectorization (why it's fast)
   - Common operations (mean, sum, filtering)
   - Broadcasting and array reshaping

2. **Pandas DataFrames** (7 hours)
   - Creating and exploring DataFrames
   - Selecting columns and rows (iloc, loc)
   - Groupby and aggregations
   - Merging/joining DataFrames
   - Handling missing values (dropna, fillna)
   - Data type conversions

3. **Data Quality & Validation** (4 hours)
   - Identifying data quality issues
   - Data cleaning patterns
   - Validation checks (nulls, outliers, type mismatches)
   - Creating data quality reports

4. **File I/O** (3 hours)
   - Reading/writing CSV, JSON, Parquet, Excel
   - Understanding compression
   - Handling large files

#### Hands-On Practice:
```python
# Project: Real Estate Data Cleaning
- Read messy real estate CSV (missing prices, bad addresses, duplicates)
- Data quality checks:
  * How many nulls? Which columns?
  * Identify duplicate listings
  * Find price outliers (negative values, $0)
- Data cleaning:
  * Fill missing prices with median
  * Remove duplicates
  * Standardize address format
  * Convert price to proper numeric type
- Analysis:
  * Average price by neighborhood
  * Price trends
  * Data quality score before/after cleaning
- Output: Cleaned CSV + quality report
```

#### Checkpoint - By end of Week 2, you should be able to:
- [ ] Load messy data and identify quality issues
- [ ] Write a DataFrame transformation pipeline
- [ ] Explain why vectorization is faster than loops
- [ ] Convert between file formats (CSV ↔ JSON ↔ Parquet)

#### Resources:
- Pandas official documentation (10 min tutorials)
- Real Python: Pandas tutorials
- YouTube: Corey Schafer Pandas playlist

---

### **WEEK 3: APIs & Web Scraping for Data Extraction**
**Time Commitment:** 16-18 hours

#### Learning Objectives:
- [ ] Extract data from REST APIs using the requests library
- [ ] Parse JSON and XML responses
- [ ] Understand pagination and rate limiting
- [ ] Scrape structured data from websites with BeautifulSoup
- [ ] Handle errors and retries in data extraction

#### Topics:
1. **REST APIs & HTTP** (5 hours)
   - How APIs work (requests, responses, status codes)
   - Making GET/POST requests
   - Authentication (API keys, OAuth)
   - Headers and parameters
   - Rate limiting and retries

2. **Requests Library** (4 hours)
   - Making API calls with requests
   - Handling JSON responses
   - Error handling (timeouts, connection errors)
   - Session management for efficiency

3. **Web Scraping** (4 hours)
   - HTML structure basics
   - BeautifulSoup for parsing
   - Finding elements (selectors, tags)
   - Extracting data ethically and legally

4. **Building Extraction Pipelines** (3 hours)
   - Error handling and logging
   - Retry logic
   - Rate limiting
   - Saving extracted data

#### Hands-On Practice:
```python
# Project: Weather Data Pipeline
- Extract weather data from public API (OpenWeatherMap or similar)
- Requirements:
  * Fetch data for 10 cities
  * Handle rate limiting (max 60 calls/min)
  * Parse JSON responses
  * Handle API errors gracefully
  * Retry failed requests
- Transform:
  * Convert Celsius to Fahrenheit
  * Extract: date, city, temp, humidity, conditions
- Validate:
  * Check for missing values
  * Validate temperature ranges
  * Ensure consistent formats
- Store:
  * Save to CSV and JSON
  * Create quality report

# OR Project: Web Scraping
- Scrape product listings from e-commerce site
- Extract: product name, price, rating, availability
- Handle pagination
- Clean and validate data
- Store results
```

#### Checkpoint - By end of Week 3, you should be able to:
- [ ] Call an API and parse the JSON response
- [ ] Implement error handling and retries
- [ ] Explain rate limiting and why it matters
- [ ] Scrape data from a website using BeautifulSoup
- [ ] Write an extraction pipeline with logging

#### Resources:
- Requests documentation
- Real Python: Working with APIs
- YouTube: Tech With Tim - Web Scraping
- RealPython: Beautiful Soup Tutorial

---

## **PHASE 1 MILESTONE: Python Data Pipeline**

### Capstone Project (Week 3, combining Weeks 1-3):
**"Build a Complete Python ETL Pipeline"**

#### Requirements:
```
EXTRACT:
  [ ] Source 1: CSV file (real estate data)
  [ ] Source 2: API call (weather or stocks)
  [ ] Source 3: (Optional) Web scraping

TRANSFORM:
  [ ] Data quality checks
  [ ] Data cleaning and validation
  [ ] Type conversions
  [ ] Aggregations and calculations

LOAD:
  [ ] Write to multiple formats (CSV, JSON, Parquet)
  [ ] Create validation report

TESTING:
  [ ] Unit tests for key functions
  [ ] Error handling for edge cases
  [ ] Logging for debugging

DOCUMENTATION:
  [ ] README explaining the pipeline
  [ ] Code comments
  [ ] Data dictionary
```

#### Deliverables:
- ✅ Python project on GitHub
- ✅ Working ETL pipeline
- ✅ Test suite
- ✅ 2-3 page documentation

#### Success Criteria:
- Pipeline runs without errors
- Handles at least 3 error cases gracefully
- Code is readable and follows PEP 8
- Data quality improved (before/after)
- All tests pass

#### Time to Complete: 8-10 hours

---

---

# PHASE 2: RELATIONAL DATABASES (Weeks 4-6)
## Goal: Master SQL and database design fundamentals

### **WEEK 4: Database Fundamentals & SQL Basics**
**Time Commitment:** 18-20 hours

#### Learning Objectives:
- [ ] Understand relational database concepts (tables, keys, relationships)
- [ ] Design a simple ER (Entity-Relationship) diagram
- [ ] Write basic SQL (SELECT, WHERE, ORDER BY)
- [ ] Create and modify tables (CREATE, ALTER, DROP)
- [ ] Install and configure PostgreSQL locally

#### Topics:
1. **Database Fundamentals** (4 hours)
   - What is a relational database?
   - Tables, rows, columns
   - Primary keys and foreign keys
   - Relationships (1:1, 1:N, M:N)
   - Normalization basics (1NF, 2NF, 3NF)
   - Indexes and why they matter

2. **ER (Entity-Relationship) Diagrams** (3 hours)
   - Designing databases from requirements
   - Entities and attributes
   - Cardinality and participation
   - Creating ERDs

3. **PostgreSQL Setup** (2 hours)
   - Install PostgreSQL locally
   - pgAdmin GUI tool
   - psql command-line interface
   - Creating databases and users

4. **Basic SQL (DDL & DML)** (7 hours)
   - Data Definition Language: CREATE TABLE, ALTER TABLE, DROP
   - Constraints: NOT NULL, UNIQUE, PRIMARY KEY, CHECK
   - Data Manipulation Language: INSERT, UPDATE, DELETE
   - SELECT basics: projection, filtering, sorting
   - LIMIT and OFFSET for pagination

#### Hands-On Practice:
```sql
-- Project: Design a Coffee Shop Database
Requirements:
- Coffee shop chain with multiple locations
- Track: customers, orders, products (coffee types), employees

Schema Design:
CREATE TABLE locations (
  location_id INT PRIMARY KEY,
  location_name VARCHAR(100),
  address VARCHAR(200),
  city VARCHAR(50)
);

CREATE TABLE customers (
  customer_id INT PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(100),
  phone VARCHAR(15),
  created_at DATE
);

CREATE TABLE products (
  product_id INT PRIMARY KEY,
  product_name VARCHAR(100),
  category VARCHAR(50),  -- Coffee, Tea, Pastry
  price DECIMAL(5,2),
  created_at DATE
);

CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  customer_id INT REFERENCES customers(customer_id),
  location_id INT REFERENCES locations(location_id),
  order_date DATE,
  total_amount DECIMAL(8,2),
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
  FOREIGN KEY (location_id) REFERENCES locations(location_id)
);

CREATE TABLE order_items (
  order_item_id INT PRIMARY KEY,
  order_id INT REFERENCES orders(order_id),
  product_id INT REFERENCES products(product_id),
  quantity INT,
  price DECIMAL(5,2)
);

Tasks:
1. Create schema
2. Insert 20+ rows of sample data
3. Write queries:
   - All orders for customer "John Doe"
   - Total revenue by location
   - Most popular product
   - Customers who ordered in last 30 days
```

#### Checkpoint - By end of Week 4, you should be able to:
- [ ] Draw an ER diagram from business requirements
- [ ] Write CREATE TABLE statements with constraints
- [ ] Write SELECT queries with WHERE, ORDER BY, LIMIT
- [ ] Insert and update records
- [ ] Explain why foreign keys matter

#### Resources:
- PostgreSQL official documentation
- Mode Analytics SQL Tutorial (first 25% of course)
- YouTube: Corey Schafer SQL playlist (videos 1-5)

---

### **WEEK 5: Advanced SQL & Joins**
**Time Commitment:** 18-20 hours

#### Learning Objectives:
- [ ] Master JOINs (INNER, LEFT, RIGHT, FULL, CROSS)
- [ ] Use aggregate functions (SUM, AVG, COUNT, MAX, MIN)
- [ ] Group data with GROUP BY and HAVING
- [ ] Write window functions (ROW_NUMBER, RANK, LAG, LEAD)
- [ ] Create views and understand query optimization

#### Topics:
1. **JOIN Operations** (6 hours)
   - INNER JOIN: only matching rows
   - LEFT JOIN: all from left table
   - RIGHT JOIN: all from right table
   - FULL OUTER JOIN: all rows
   - CROSS JOIN: cartesian product
   - Self-joins for hierarchical data
   - Multi-table joins (3+ tables)

2. **Aggregation & Grouping** (5 hours)
   - Aggregate functions: COUNT, SUM, AVG, MAX, MIN
   - GROUP BY: grouping results
   - HAVING: filtering groups
   - Distinct: removing duplicates
   - NULL handling in aggregations

3. **Window Functions** (5 hours)
   - ROW_NUMBER(), RANK(), DENSE_RANK()
   - LAG(), LEAD() for accessing previous/next rows
   - SUM() OVER (PARTITION BY...) for running totals
   - NTILE() for percentiles
   - Frame specifications (ROWS BETWEEN...)

4. **Optimization & Best Practices** (2 hours)
   - Query execution plans (EXPLAIN)
   - Indexes and when to use them
   - Writing efficient queries
   - Common mistakes to avoid

#### Hands-On Practice:
```sql
-- Project: E-commerce Analytics Queries
Using the coffee shop schema from Week 4, write queries:

1. Orders with all customer and location details
   SELECT o.order_id, c.first_name, c.last_name, 
          l.location_name, o.total_amount, o.order_date
   FROM orders o
   JOIN customers c ON o.customer_id = c.customer_id
   JOIN locations l ON o.location_id = l.location_id
   ORDER BY o.order_date DESC;

2. Revenue by location (this month)
   SELECT l.location_name, 
          SUM(o.total_amount) as revenue,
          COUNT(DISTINCT o.customer_id) as customers
   FROM orders o
   JOIN locations l ON o.location_id = l.location_id
   WHERE EXTRACT(YEAR FROM o.order_date) = 2024
     AND EXTRACT(MONTH FROM o.order_date) = CURRENT_MONTH
   GROUP BY l.location_id, l.location_name
   ORDER BY revenue DESC;

3. Customer purchase ranking (who spent most?)
   SELECT c.customer_id, c.first_name, c.last_name,
          SUM(o.total_amount) as total_spent,
          COUNT(o.order_id) as order_count,
          ROW_NUMBER() OVER (ORDER BY SUM(o.total_amount) DESC) as rank
   FROM customers c
   LEFT JOIN orders o ON c.customer_id = o.customer_id
   GROUP BY c.customer_id, c.first_name, c.last_name
   ORDER BY total_spent DESC;

4. Month-over-month growth
   SELECT DATE_TRUNC('month', o.order_date)::DATE as month,
          SUM(o.total_amount) as revenue,
          LAG(SUM(o.total_amount)) OVER (ORDER BY DATE_TRUNC('month', o.order_date)) as prev_month_revenue,
          ROUND((SUM(o.total_amount) - LAG(SUM(o.total_amount)) OVER (ORDER BY DATE_TRUNC('month', o.order_date))) / 
                LAG(SUM(o.total_amount)) OVER (ORDER BY DATE_TRUNC('month', o.order_date)) * 100, 2) as growth_pct
   FROM orders o
   GROUP BY DATE_TRUNC('month', o.order_date)
   ORDER BY month;

5. Product popularity by location
   SELECT l.location_name, p.product_name,
          SUM(oi.quantity) as total_sold,
          AVG(oi.price) as avg_price,
          RANK() OVER (PARTITION BY l.location_id ORDER BY SUM(oi.quantity) DESC) as product_rank
   FROM order_items oi
   JOIN orders o ON oi.order_id = o.order_id
   JOIN locations l ON o.location_id = l.location_id
   JOIN products p ON oi.product_id = p.product_id
   GROUP BY l.location_id, l.location_name, p.product_id, p.product_name
   ORDER BY l.location_name, product_rank;
```

#### Checkpoint - By end of Week 5, you should be able to:
- [ ] Explain difference between INNER, LEFT, RIGHT, FULL JOINs
- [ ] Write queries joining 3+ tables
- [ ] Write GROUP BY queries with HAVING filters
- [ ] Explain window functions and when to use them
- [ ] Read and understand EXPLAIN output

#### Resources:
- Mode Analytics SQL Tutorial (25-50%)
- PostgreSQL window functions documentation
- YouTube: Alex The Analyst SQL series (Joins section)
- LeetCode SQL (easy problems)

---

### **WEEK 6: Linux/Bash & Database Administration**
**Time Commitment:** 18-20 hours

#### Learning Objectives:
- [ ] Navigate Linux file system with Bash commands
- [ ] Write Bash scripts for automation
- [ ] Understand file permissions and ownership
- [ ] Schedule jobs with crontab
- [ ] Perform basic database administration (backup, restore, users)

#### Topics:
1. **Linux Fundamentals** (4 hours)
   - Linux directory structure (/home, /etc, /var, etc.)
   - File system navigation (cd, ls, pwd)
   - File operations (cp, mv, rm, mkdir)
   - File permissions (chmod, chown)
   - Finding files (find, locate, grep)

2. **Bash Scripting** (6 hours)
   - Shell script basics (#!, variables, comments)
   - Input/output (echo, read, redirection)
   - Control flow (if/else, for loops, while)
   - Functions and script organization
   - Error handling (exit codes, error messages)
   - Using pipes and filters

3. **Advanced Bash** (3 hours)
   - Regular expressions and grep
   - Text processing (sed, awk)
   - Environment variables
   - Command substitution
   - Arrays and string manipulation

4. **Database Administration** (4 hours)
   - User management (CREATE ROLE, GRANT)
   - Database backup (pg_dump)
   - Database restore (pg_restore)
   - Connection management
   - Basic performance monitoring

#### Hands-On Practice:
```bash
# Project 1: Backup Automation Script
#!/bin/bash

# Backup changed files from last 24 hours
BACKUP_DIR="/backups"
CURRENT_DIR="/home/user/important_files"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

echo "Starting backup at $(date)"

# Find files modified in last 24 hours
find "$CURRENT_DIR" -type f -mtime -1 -print0 | \
  xargs -0 -I {} cp {} "$BACKUP_DIR/backup_$TIMESTAMP/"

echo "Backup completed. Files backed up: $(find $BACKUP_DIR/backup_$TIMESTAMP/ | wc -l)"

# Project 2: Database Backup Script
#!/bin/bash

# Automated PostgreSQL backup
BACKUP_DIR="/var/backups/postgres"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
DB_NAME="coffee_shop"
DB_USER="postgres"

# Create backup
pg_dump -U $DB_USER $DB_NAME > "$BACKUP_DIR/backup_$TIMESTAMP.sql"

# Compress it
gzip "$BACKUP_DIR/backup_$TIMESTAMP.sql"

# Keep only last 7 days of backups
find $BACKUP_DIR -name "*.sql.gz" -mtime +7 -delete

echo "Database backup completed: backup_$TIMESTAMP.sql.gz"

# Project 3: Cron Job Setup
# Schedule daily backup at 2 AM
0 2 * * * /home/user/scripts/backup_database.sh >> /var/log/backup.log 2>&1

# Check log
cat /var/log/backup.log
```

#### Checkpoint - By end of Week 6, you should be able to:
- [ ] Navigate Linux file system and manage files
- [ ] Write a Bash script with variables, loops, and functions
- [ ] Use grep, find, and piping effectively
- [ ] Schedule automated tasks with crontab
- [ ] Backup and restore a PostgreSQL database
- [ ] Understand basic security (file permissions, user roles)

#### Resources:
- Linux command line basics (Linux Academy or similar)
- Bash scripting guide
- YouTube: Linux Crash Course
- PostgreSQL administration guide

---

## **PHASE 2 MILESTONE: Database Design & Admin Project**

### Capstone Project (Week 6, combining Weeks 4-6):
**"Design and Manage a Data Platform"**

#### Requirements:
```
1. DATABASE DESIGN:
   [ ] Design a realistic database (e-commerce, social media, or your choice)
   [ ] Create ER diagram with 5+ entities
   [ ] Implement proper normalization
   [ ] Set up constraints and relationships

2. DATA LOADING:
   [ ] Generate realistic test data (100k+ rows)
   [ ] Write Python script to populate database
   [ ] Verify data integrity

3. ADVANCED SQL:
   [ ] Write 10 analytical queries using:
        - Multiple JOINs
        - GROUP BY and aggregations
        - Window functions
        - Subqueries
   [ ] Optimize slow queries using indexes

4. AUTOMATION:
   [ ] Create Bash script for daily backups
   [ ] Set up cron job for scheduled backups
   [ ] Test backup and restore process

5. ADMINISTRATION:
   [ ] Create user roles with different permissions
   [ ] Document access control
   [ ] Set up monitoring/alerting basics

6. DOCUMENTATION:
   [ ] Database schema documentation
   [ ] ER diagram
   [ ] Query performance analysis
   [ ] Runbook for common operations
```

#### Deliverables:
- ✅ PostgreSQL database with 5+ tables
- ✅ ER diagram (visual document)
- ✅ 10+ analytical SQL queries
- ✅ Python data loading script
- ✅ Bash backup script
- ✅ 3-5 page documentation

#### Success Criteria:
- Database is normalized to 3NF
- All queries execute efficiently
- Backup/restore works correctly
- Code is documented and tested
- Can explain design decisions

#### Time to Complete: 10-12 hours

---

---

# PHASE 3: DATA PIPELINES & WAREHOUSING (Weeks 7-9)
## Goal: Build automated ETL pipelines and data warehouses

### **WEEK 7: Data Warehousing Fundamentals & Star Schema**
**Time Commitment:** 18-20 hours

#### Learning Objectives:
- [ ] Understand dimensional modeling (Kimball methodology)
- [ ] Design star and snowflake schemas
- [ ] Understand fact tables and dimension tables
- [ ] Implement Slowly Changing Dimensions (SCD Type 2)
- [ ] Build a data warehouse from scratch

#### Topics:
1. **Dimensional Modeling** (5 hours)
   - Why data warehouses differ from operational databases
   - Star vs Snowflake schemas
   - Fact tables: transactions, events, metrics
   - Dimension tables: customers, products, dates, locations
   - Conformed dimensions: shared across fact tables
   - Slowly Changing Dimensions (SCD Type 1, 2, 3)

2. **Designing a Star Schema** (6 hours)
   - Business process analysis
   - Identifying facts and dimensions
   - Grain (level of detail) in fact tables
   - Date/time dimensions
   - Handling slowly changing dimensions
   - Surrogate keys vs natural keys

3. **Data Warehouse Architecture** (4 hours)
   - Staging → transformation → warehouse flow
   - Fact table design patterns
   - Handling late-arriving facts
   - Data quality in warehouses
   - Partitioning strategies

4. **Advanced SQL for Analytics** (3 hours)
   - CUBE and ROLLUP for multidimensional aggregations
   - Materialized views for performance
   - OLAP operations

#### Hands-On Practice:
```sql
-- Project: Design a Sales Data Warehouse
Business Scenario:
- Multinational retail company
- Track: sales transactions, products, customers, time, locations

FACT TABLE (Sales):
CREATE TABLE fact_sales (
  sales_key INT PRIMARY KEY,
  date_key INT REFERENCES dim_date(date_key),
  customer_key INT REFERENCES dim_customer(customer_key),
  product_key INT REFERENCES dim_product(product_key),
  location_key INT REFERENCES dim_location(location_key),
  quantity INT,
  unit_price DECIMAL(10,2),
  total_amount DECIMAL(12,2),
  discount_amount DECIMAL(10,2),
  tax_amount DECIMAL(10,2),
  net_amount DECIMAL(12,2)
);

DIMENSION TABLES:
CREATE TABLE dim_date (
  date_key INT PRIMARY KEY,
  date_id DATE,
  year INT,
  quarter INT,
  month INT,
  day_of_week VARCHAR(10),
  is_weekend BOOLEAN,
  is_holiday BOOLEAN
);

CREATE TABLE dim_customer (
  customer_key INT PRIMARY KEY,
  customer_id INT,
  customer_name VARCHAR(100),
  email VARCHAR(100),
  country VARCHAR(50),
  is_active BOOLEAN,
  effective_date DATE,
  end_date DATE,
  is_current BOOLEAN
);

CREATE TABLE dim_product (
  product_key INT PRIMARY KEY,
  product_id INT,
  product_name VARCHAR(100),
  category VARCHAR(50),
  subcategory VARCHAR(50),
  supplier_id INT,
  cost_price DECIMAL(10,2),
  is_active BOOLEAN,
  effective_date DATE,
  end_date DATE,
  is_current BOOLEAN
);

CREATE TABLE dim_location (
  location_key INT PRIMARY KEY,
  location_id INT,
  store_name VARCHAR(100),
  city VARCHAR(50),
  state VARCHAR(50),
  country VARCHAR(50),
  region VARCHAR(50)
);

-- Queries using warehouse:

-- Total sales by month
SELECT d.year, d.month, SUM(f.net_amount) as revenue
FROM fact_sales f
JOIN dim_date d ON f.date_key = d.date_key
GROUP BY d.year, d.month
ORDER BY d.year, d.month;

-- Top 10 customers by revenue
SELECT c.customer_name, SUM(f.net_amount) as lifetime_value
FROM fact_sales f
JOIN dim_customer c ON f.customer_key = c.customer_key
WHERE c.is_current = TRUE
GROUP BY c.customer_key, c.customer_name
ORDER BY lifetime_value DESC
LIMIT 10;

-- Sales by product category over time (using CUBE)
SELECT d.year, d.month, p.category,
       SUM(f.net_amount) as revenue,
       COUNT(*) as transaction_count
FROM fact_sales f
JOIN dim_date d ON f.date_key = d.date_key
JOIN dim_product p ON f.product_key = p.product_key
GROUP BY CUBE (d.year, d.month, p.category)
ORDER BY d.year, d.month, p.category;
```

#### Checkpoint - By end of Week 7, you should be able to:
- [ ] Explain the difference between star and snowflake schemas
- [ ] Design a fact table from business requirements
- [ ] Design dimension tables including SCD Type 2
- [ ] Write queries using CUBE and ROLLUP
- [ ] Explain why data warehouses perform better than normalized databases

#### Resources:
- "The Kimball Group Reader" (Chapters 1-3)
- YouTube: Analytics Engineering with dbt
- DataTalks.Club Data Warehouse course

---

### **WEEK 8: Apache Airflow & Orchestration**
**Time Commitment:** 18-20 hours

#### Learning Objectives:
- [ ] Understand DAG (Directed Acyclic Graph) concepts
- [ ] Build data pipelines with Apache Airflow
- [ ] Implement error handling and retries
- [ ] Monitor pipeline health and failures
- [ ] Write production-ready ETL pipelines

#### Topics:
1. **Airflow Fundamentals** (5 hours)
   - DAG (Directed Acyclic Graph) concept
   - Tasks and operators
   - Scheduling (cron expressions)
   - Dependencies between tasks
   - Idempotency and data pipeline best practices
   - Airflow installation and setup

2. **Building DAGs** (6 hours)
   - Defining tasks with operators:
     - BashOperator: run shell commands
     - PythonOperator: run Python functions
     - PostgresOperator: run SQL
     - EmailOperator: send notifications
   - Task dependencies (set_downstream, set_upstream, >>)
   - Branching and conditional logic
   - Dynamic DAGs

3. **Error Handling & Monitoring** (4 hours)
   - Retries and exponential backoff
   - On-failure callbacks
   - XCom: passing data between tasks
   - Monitoring and alerting
   - Logging best practices
   - Testing DAGs

4. **Production Patterns** (3 hours)
   - Idempotent design
   - Incremental loading (only new data)
   - SLA monitoring
   - Scaling Airflow
   - CI/CD for DAGs

#### Hands-On Practice:
```python
# Project: Build a Weather Data Pipeline with Airflow

from airflow import DAG
from airflow.operators.python import PythonOperator
from airflow.operators.postgres_operator import PostgresOperator
from airflow.utils.dates import days_ago
from datetime import timedelta
import requests
import pandas as pd
from sqlalchemy import create_engine

# Define default arguments
default_args = {
    'owner': 'data_engineer',
    'retries': 3,
    'retry_delay': timedelta(minutes=5),
    'email_on_failure': True,
    'email': ['your_email@example.com'],
}

# Create DAG
dag = DAG(
    'weather_data_pipeline',
    default_args=default_args,
    description='Daily weather data collection and loading',
    schedule_interval='0 2 * * *',  # Daily at 2 AM
    start_date=days_ago(1),
    catchup=False,
)

# Task 1: Extract weather data from API
def extract_weather_data(**context):
    cities = ['Seattle', 'Portland', 'San Francisco', 'Los Angeles', 'New York']
    api_key = 'your_api_key'
    
    weather_data = []
    for city in cities:
        url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
        response = requests.get(url)
        response.raise_for_status()  # Raise if error
        
        data = response.json()
        weather_data.append({
            'city': city,
            'temperature': data['main']['temp'],
            'humidity': data['main']['humidity'],
            'condition': data['weather'][0]['main'],
            'timestamp': context['ds'],
        })
    
    # Push to XCom for next task
    context['task_instance'].xcom_push(key='weather_data', value=weather_data)
    return weather_data

# Task 2: Validate data quality
def validate_weather_data(**context):
    weather_data = context['task_instance'].xcom_pull(
        key='weather_data',
        task_ids='extract_weather'
    )
    
    # Validation checks
    for record in weather_data:
        assert record['temperature'] > -50, f"Temperature too low: {record['temperature']}"
        assert record['temperature'] < 60, f"Temperature too high: {record['temperature']}"
        assert 0 <= record['humidity'] <= 100, f"Invalid humidity: {record['humidity']}"
    
    print(f"Validated {len(weather_data)} records")
    return weather_data

# Task 3: Load to database
def load_to_database(**context):
    weather_data = context['task_instance'].xcom_pull(
        key='weather_data',
        task_ids='validate_weather'
    )
    
    df = pd.DataFrame(weather_data)
    
    # Load to PostgreSQL
    engine = create_engine('postgresql://user:password@localhost:5432/weather_db')
    df.to_sql('weather_facts', engine, if_exists='append', index=False)
    
    print(f"Loaded {len(df)} records to database")

# Define tasks
extract_task = PythonOperator(
    task_id='extract_weather',
    python_callable=extract_weather_data,
    dag=dag,
)

validate_task = PythonOperator(
    task_id='validate_weather',
    python_callable=validate_weather_data,
    dag=dag,
)

load_task = PythonOperator(
    task_id='load_to_database',
    python_callable=load_to_database,
    dag=dag,
)

# Set up daily aggregation task
aggregate_sql = """
SELECT 
    DATE(timestamp) as date,
    city,
    ROUND(AVG(temperature), 2) as avg_temp,
    MAX(temperature) as max_temp,
    MIN(temperature) as min_temp,
    ROUND(AVG(humidity), 2) as avg_humidity
FROM weather_facts
WHERE DATE(timestamp) = {{ ds }}
GROUP BY DATE(timestamp), city
"""

aggregate_task = PostgresOperator(
    task_id='aggregate_daily_weather',
    postgres_conn_id='postgres_default',
    sql=aggregate_sql,
    dag=dag,
)

# Define task dependencies
extract_task >> validate_task >> load_task >> aggregate_task
```

#### Checkpoint - By end of Week 8, you should be able to:
- [ ] Explain what a DAG is and why it matters
- [ ] Build an Airflow DAG with 5+ tasks
- [ ] Implement error handling and retries
- [ ] Use XCom to pass data between tasks
- [ ] Monitor pipeline execution and failures
- [ ] Explain idempotency and why it matters in ETL

#### Resources:
- Apache Airflow official documentation
- YouTube: Udacity Data Pipelines course
- DataTalks.Club Airflow course
- Medium: Airflow best practices

---

### **WEEK 9: BI Dashboards & Data Visualization**
**Time Commitment:** 16-18 hours

#### Learning Objectives:
- [ ] Design effective data visualizations
- [ ] Use Python visualization libraries (Matplotlib, Seaborn, Plotly)
- [ ] Build interactive dashboards with Plotly
- [ ] Connect dashboards to data warehouse
- [ ] Present insights to stakeholders

#### Topics:
1. **Data Visualization Principles** (3 hours)
   - Choosing right chart type for data
   - Color theory and accessibility
   - Avoiding misleading visualizations
   - Dashboard design principles
   - Storytelling with data

2. **Python Visualization Libraries** (6 hours)
   - Matplotlib basics (line, bar, scatter plots)
   - Seaborn for statistical plots
   - Plotly for interactive dashboards
   - Creating multi-plot layouts
   - Customization and styling

3. **Interactive Dashboards** (5 hours)
   - Dash framework for web dashboards
   - Callbacks for interactivity
   - Connecting to database
   - Real-time data updates
   - Deploying dashboards

4. **Business Intelligence Tools (Light Touch)** (2 hours)
   - Overview of BI tools (why you might use them)
   - Google Looker Studio basics
   - Creating simple reports

#### Hands-On Practice:
```python
# Project: Build Interactive Weather Dashboard

import dash
from dash import dcc, html, Input, Output
import plotly.graph_objects as go
import plotly.express as px
import pandas as pd
from sqlalchemy import create_engine

# Connect to data warehouse
engine = create_engine('postgresql://user:password@localhost:5432/weather_db')

# Initialize Dash app
app = dash.Dash(__name__)

# Define layout
app.layout = html.Div([
    html.H1('Weather Analytics Dashboard'),
    
    html.Div([
        dcc.DatePickerRange(
            id='date-picker',
            start_date='2024-01-01',
            end_date='2024-12-31',
            display_format='YYYY-MM-DD'
        ),
    ]),
    
    html.Div([
        html.Div([
            dcc.Graph(id='temperature-graph')
        ], style={'width': '48%', 'display': 'inline-block'}),
        
        html.Div([
            dcc.Graph(id='humidity-graph')
        ], style={'width': '48%', 'display': 'inline-block'}),
    ]),
    
    html.Div([
        dcc.Graph(id='city-comparison')
    ]),
])

# Callbacks for interactivity
@app.callback(
    Output('temperature-graph', 'figure'),
    Input('date-picker', 'start_date'),
    Input('date-picker', 'end_date')
)
def update_temperature(start_date, end_date):
    # Query data
    query = f"""
    SELECT date, city, avg_temp, max_temp, min_temp
    FROM weather_daily
    WHERE date BETWEEN '{start_date}' AND '{end_date}'
    ORDER BY date
    """
    df = pd.read_sql(query, engine)
    
    # Create figure
    fig = px.line(df, x='date', y='avg_temp', color='city',
                  title='Average Temperature by City',
                  labels={'avg_temp': 'Temp (°C)', 'date': 'Date'})
    return fig

# Run server
if __name__ == '__main__':
    app.run_server(debug=True)
```

#### Checkpoint - By end of Week 9, you should be able to:
- [ ] Choose appropriate chart types for different data
- [ ] Create interactive visualizations with Plotly
- [ ] Build a dashboard connecting to a database
- [ ] Explain design decisions to stakeholders
- [ ] Handle real-time data updates in dashboards

#### Resources:
- Plotly documentation and tutorials
- Dash by Plotly tutorial
- YouTube: Data visualization best practices
- Edward Tufte: The Visual Display of Quantitative Information

---

## **PHASE 3 MILESTONE: End-to-End Data Pipeline**

### Capstone Project (Week 9, combining Weeks 7-9):
**"Build a Complete Data Warehouse & Analytics Pipeline"**

#### Requirements:
```
1. DATA WAREHOUSE DESIGN:
   [ ] Design star schema with 1 fact table + 4+ dimensions
   [ ] Implement SCD Type 2 for slowly changing dimensions
   [ ] Populate warehouse with realistic data (1M+ rows)

2. ETL ORCHESTRATION:
   [ ] Build Airflow DAG with 8+ tasks:
        - Extract from multiple sources
        - Validate data quality
        - Dimension table loads
        - Fact table loads
        - Aggregations/rollups
        - Error handling
   [ ] Schedule daily execution
   [ ] Monitor and alert on failures

3. ANALYTICS & QUERIES:
   [ ] Write 15+ analytical queries:
        - Time-series analysis
        - Aggregations with GROUP BY
        - Window functions
        - CUBE/ROLLUP queries
        - Cohort analysis

4. DASHBOARDS & VISUALIZATION:
   [ ] Build interactive dashboard with:
        - 5+ visualizations
        - Date range filters
        - Drill-down capability
        - Real-time or near-real-time updates
   [ ] Publish for stakeholder viewing

5. DOCUMENTATION & MONITORING:
   [ ] Data dictionary/schema documentation
   [ ] Pipeline runbooks
   [ ] SLA definitions
   [ ] Performance baseline and optimization notes
```

#### Deliverables:
- ✅ PostgreSQL data warehouse (fully normalized)
- ✅ Airflow DAG (production-ready)
- ✅ 15+ analytical SQL queries
- ✅ Interactive dashboard (Dash or similar)
- ✅ Documentation (schema, pipeline, queries)
- ✅ Performance analysis and optimization report

#### Success Criteria:
- Pipeline runs automatically and handles errors
- Data warehouse is properly modeled (star schema)
- All queries execute in <5 seconds
- Dashboard updates as data changes
- Team can understand and maintain the system

#### Time to Complete: 12-15 hours

---

---

# PHASE 4: NOSQL & BIG DATA (Weeks 10-12)
## Goal: Master distributed systems with NoSQL and Spark

### **WEEK 10: Introduction to NoSQL Databases**
**Time Commitment:** 18-20 hours

#### Learning Objectives:
- [ ] Understand when to use NoSQL vs RDBMS
- [ ] Design document-oriented data models (MongoDB)
- [ ] Perform CRUD operations in MongoDB
- [ ] Understand distributed NoSQL architectures
- [ ] Learn data modeling for NoSQL

#### Topics:
1. **NoSQL Fundamentals** (4 hours)
   - When NoSQL is appropriate (scale, flexibility, performance)
   - CAP theorem: Consistency, Availability, Partition tolerance
   - BASE vs ACID
   - Document stores vs key-value vs column stores
   - Denormalization and embedding vs references

2. **MongoDB Basics** (6 hours)
   - Installing MongoDB locally
   - Collections and documents (JSON-like)
   - CRUD operations (Create, Read, Update, Delete)
   - Querying with filters and operators
   - Indexing in MongoDB
   - Aggregation framework

3. **MongoDB Advanced** (4 hours)
   - Complex queries and nested documents
   - Transactions (multi-document)
   - Bulk operations
   - Replication (replica sets)
   - Backup and restore

4. **NoSQL Data Modeling** (4 hours)
   - Denormalization patterns
   - Embedding vs references
   - One-to-many and many-to-many relationships
   - Handling schema evolution

#### Hands-On Practice:
```python
# Project: E-commerce MongoDB Database

from pymongo import MongoClient
from pymongo.errors import DuplicateKeyError
from datetime import datetime
import json

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['ecommerce']

# Create collections
products = db['products']
customers = db['customers']
orders = db['orders']

# Create indexes for performance
products.create_index('product_id', unique=True)
customers.create_index('email', unique=True)
orders.create_index('customer_id')
orders.create_index('created_at')

# Task 1: Insert Products
products_data = [
    {
        'product_id': 'COFFEE_001',
        'name': 'Arabica Coffee Beans',
        'category': 'Coffee',
        'price': 12.99,
        'stock': 500,
        'description': 'Premium Arabica coffee beans from Ethiopia',
        'ratings': [],
        'created_at': datetime.now(),
    },
    # ... more products
]
products.insert_many(products_data)

# Task 2: Insert Customers
customers.insert_one({
    'customer_id': 'CUST_001',
    'email': 'john@example.com',
    'name': 'John Doe',
    'address': {
        'street': '123 Main St',
        'city': 'Seattle',
        'state': 'WA',
        'zip': '98101'
    },
    'phone': '206-555-1234',
    'created_at': datetime.now(),
})

# Task 3: Insert Orders with embedded items
orders.insert_one({
    'order_id': 'ORDER_001',
    'customer_id': 'CUST_001',
    'order_date': datetime.now(),
    'status': 'completed',
    'items': [
        {
            'product_id': 'COFFEE_001',
            'quantity': 2,
            'price': 12.99,
            'subtotal': 25.98
        },
        {
            'product_id': 'COFFEE_002',
            'quantity': 1,
            'price': 14.99,
            'subtotal': 14.99
        }
    ],
    'total_amount': 40.97,
    'shipping_address': {
        'street': '123 Main St',
        'city': 'Seattle',
        'state': 'WA',
        'zip': '98101'
    }
})

# Task 4: Query Examples
# Find all orders for a customer
customer_orders = orders.find({'customer_id': 'CUST_001'})

# Find products in price range
affordable_coffee = products.find({
    'price': {'$gte': 10, '$lte': 15}
})

# Find high-rated products (aggregation)
high_rated = products.aggregate([
    {'$match': {'ratings': {'$not': {'$size': 0}}}},
    {'$group': {
        '_id': '$category',
        'avg_rating': {'$avg': '$rating'},
        'count': {'$sum': 1}
    }},
    {'$sort': {'avg_rating': -1}}
])

# Task 5: Update Operations
orders.update_one(
    {'order_id': 'ORDER_001'},
    {'$set': {'status': 'shipped', 'shipped_date': datetime.now()}}
)

# Task 6: Aggregation Pipeline
sales_by_category = orders.aggregate([
    {'$unwind': '$items'},
    {'$lookup': {
        'from': 'products',
        'localField': 'items.product_id',
        'foreignField': 'product_id',
        'as': 'product_info'
    }},
    {'$group': {
        '_id': {'$arrayElemAt': ['$product_info.category', 0]},
        'total_sales': {'$sum': '$items.subtotal'},
        'order_count': {'$sum': 1}
    }},
    {'$sort': {'total_sales': -1}}
])
```

#### Checkpoint - By end of Week 10, you should be able to:
- [ ] Explain when to use MongoDB vs PostgreSQL
- [ ] Design a document structure for a real use case
- [ ] Write CRUD operations in MongoDB
- [ ] Write aggregation pipeline queries
- [ ] Create indexes and understand their impact
- [ ] Understand CAP theorem and tradeoffs

#### Resources:
- MongoDB official documentation
- MongoDB University (free courses)
- YouTube: MongoDB complete guide
- PyMongo documentation

---

### **WEEK 11: Apache Spark Fundamentals**
**Time Commitment:** 20-22 hours

#### Learning Objectives:
- [ ] Understand distributed computing concepts
- [ ] Work with Spark RDDs and DataFrames
- [ ] Write PySpark applications
- [ ] Understand Spark SQL
- [ ] Optimize Spark jobs
- [ ] Process big data at scale

#### Topics:
1. **Distributed Computing Concepts** (4 hours)
   - MapReduce programming model
   - Hadoop ecosystem overview
   - Why Spark is faster than Hadoop
   - Resilient Distributed Datasets (RDDs)
   - Spark architecture (driver, executors, tasks)
   - Lazy evaluation

2. **Spark DataFrames & Datasets** (6 hours)
   - DataFrames vs RDDs
   - Creating DataFrames
   - DataFrame operations (select, filter, groupBy)
   - Joins in Spark
   - Partitioning for performance
   - Broadcasting large tables

3. **Spark SQL** (4 hours)
   - Writing SQL queries on DataFrames
   - DataFrame to table registration
   - Window functions in Spark SQL
   - Catalyst optimizer
   - Execution plan analysis

4. **Performance Optimization** (4 hours)
   - Shuffling and what causes it
   - Caching and persistence
   - Partitioning strategies
   - Executor memory tuning
   - Monitoring Spark jobs

5. **Advanced Topics** (2 hours)
   - User-defined functions (UDFs)
   - Working with nested data
   - Handling skewed data

#### Hands-On Practice:
```python
# Project: Analyze Large E-commerce Dataset with Spark

from pyspark.sql import SparkSession
from pyspark.sql.functions import *
from pyspark.ml.feature import VectorAssembler
from pyspark.ml.regression import LinearRegression

# Initialize Spark
spark = SparkSession.builder \
    .appName("ecommerce_analysis") \
    .getOrCreate()

# Set log level
spark.sparkContext.setLogLevel("WARN")

# Task 1: Load Data
orders_df = spark.read \
    .option("header", "true") \
    .option("inferSchema", "true") \
    .csv("s3://data/orders/*.csv")

products_df = spark.read \
    .option("header", "true") \
    .option("inferSchema", "true") \
    .csv("s3://data/products/*.csv")

customers_df = spark.read \
    .option("header", "true") \
    .option("inferSchema", "true") \
    .csv("s3://data/customers/*.csv")

# Task 2: Data Exploration
print(f"Orders: {orders_df.count()} rows")
orders_df.printSchema()
orders_df.show(5)

# Task 3: Data Quality Checks
null_counts = orders_df.select([
    count(when(col(c).isNull(), c)).alias(c) 
    for c in orders_df.columns
])
null_counts.show()

# Task 4: Transformations
# Add timestamp column
orders_with_time = orders_df \
    .withColumn("order_date", to_date(col("order_date"))) \
    .withColumn("order_month", month(col("order_date"))) \
    .withColumn("order_year", year(col("order_date")))

# Calculate order metrics
orders_enriched = orders_with_time \
    .withColumn("discount_pct", col("discount") / col("total_amount")) \
    .withColumn("net_amount", col("total_amount") - col("discount"))

# Task 5: Aggregations (Show revenue by month)
revenue_by_month = orders_enriched \
    .groupBy("order_year", "order_month") \
    .agg(
        sum("net_amount").alias("total_revenue"),
        count("*").alias("order_count"),
        avg("net_amount").alias("avg_order_value")
    ) \
    .orderBy("order_year", "order_month")

revenue_by_month.show()

# Task 6: JOINs
orders_with_customer = orders_enriched \
    .join(customers_df, on="customer_id", how="left") \
    .join(products_df, on="product_id", how="left")

# Task 7: Window Functions
from pyspark.sql.window import Window

window_spec = Window.partitionBy("customer_id").orderBy("order_date")

customer_metrics = orders_with_customer \
    .withColumn("order_count", count("*").over(window_spec)) \
    .withColumn("cumulative_revenue", 
               sum("net_amount").over(window_spec)) \
    .withColumn("prev_order_date", 
               lag("order_date").over(window_spec)) \
    .withColumn("days_since_last_order",
               datediff(col("order_date"), col("prev_order_date")))

# Task 8: Spark SQL
orders_enriched.createOrReplaceTempView("orders_temp")
customers_df.createOrReplaceTempView("customers_temp")

result = spark.sql("""
    SELECT 
        c.customer_id,
        c.customer_name,
        COUNT(*) as order_count,
        SUM(o.net_amount) as lifetime_value,
        AVG(o.net_amount) as avg_order_value,
        MAX(o.order_date) as last_order_date
    FROM orders_temp o
    JOIN customers_temp c ON o.customer_id = c.customer_id
    GROUP BY c.customer_id, c.customer_name
    HAVING COUNT(*) > 3
    ORDER BY lifetime_value DESC
""")
result.show()

# Task 9: Optimization (Show execution plan)
result.explain(True)  # Shows optimized plan from Catalyst

# Task 10: Performance Tuning
# Partition and cache frequently used data
orders_partitioned = orders_enriched.repartition(10, "customer_id")
orders_partitioned.cache()

# Do multiple operations on cached data
result1 = orders_partitioned.filter(col("order_year") == 2024)
result2 = orders_partitioned.filter(col("net_amount") > 100)

# Task 11: Machine Learning Pipeline
# Prepare data for ML
from pyspark.ml.pipeline import Pipeline
from pyspark.ml.feature import StandardScaler

ml_data = orders_enriched \
    .select("net_amount", "discount_pct", "order_month", "customer_id") \
    .na.drop()

# Create features
assembler = VectorAssembler(
    inputCols=["discount_pct", "order_month"],
    outputCol="features"
)

# Predict next order amount
lr = LinearRegression(
    featuresCol="features",
    labelCol="net_amount"
)

pipeline = Pipeline(stages=[assembler, lr])
model = pipeline.fit(ml_data)

# Make predictions
predictions = model.transform(ml_data)
predictions.select("net_amount", "prediction").show(5)

# Task 12: Save Results
result.write \
    .mode("overwrite") \
    .parquet("s3://output/customer_metrics")

spark.stop()
```

#### Checkpoint - By end of Week 11, you should be able to:
- [ ] Explain MapReduce and how Spark improves it
- [ ] Create and transform Spark DataFrames
- [ ] Write Spark SQL queries
- [ ] Explain lazy evaluation and its implications
- [ ] Understand and optimize shuffle operations
- [ ] Read and interpret Spark execution plans
- [ ] Build ML pipelines with Spark ML

#### Resources:
- "Learning Spark" (O'Reilly)
- Spark official documentation
- DataCamp Spark course
- YouTube: Spark by Examples

---

### **WEEK 12: Spark Streaming & ML for Data Engineers**
**Time Commitment:** 18-20 hours

#### Learning Objectives:
- [ ] Build real-time data pipelines with Spark Streaming
- [ ] Process streaming data with micro-batches
- [ ] Understand window operations on streams
- [ ] Build feature engineering pipelines
- [ ] Create ML models in production context

#### Topics:
1. **Spark Streaming** (6 hours)
   - Streaming architecture (receiver vs structured streaming)
   - DStreams and micro-batches
   - Stateful operations
   - Window operations
   - Stream joins
   - Fault tolerance

2. **Structured Streaming** (4 hours)
   - DataFrames for streaming
   - Continuous vs micro-batch modes
   - Stateful aggregations
   - Watermarking for late data
   - Output modes (append, update, complete)

3. **Feature Engineering** (5 hours)
   - Feature transformations
   - Handling categorical variables
   - Scaling and normalization
   - Feature interactions
   - Domain-specific features for ML

4. **ML Pipelines in Production** (3 hours)
   - Model training and evaluation
   - Feature stores
   - Model versioning
   - A/B testing

#### Hands-On Practice:
```python
# Project: Real-Time User Activity Stream Processing

from pyspark.sql import SparkSession
from pyspark.sql.functions import *
from pyspark.sql.types import *
import json

spark = SparkSession.builder \
    .appName("user_stream_processing") \
    .getOrCreate()

# Task 1: Read streaming data (simulating Kafka)
# In production, this would be from Kafka: 
# .option("kafka.bootstrap.servers", "localhost:9092")

# Simulating stream of user events
user_events_schema = StructType([
    StructField("event_id", StringType()),
    StructField("user_id", StringType()),
    StructField("event_type", StringType()),  # click, purchase, view
    StructField("product_id", StringType()),
    StructField("amount", DoubleType()),
    StructField("timestamp", LongType()),
])

# For this example, read from a directory (in production: Kafka)
df_stream = spark.readStream \
    .schema(user_events_schema) \
    .option("path", "/path/to/events") \
    .json()

# Task 2: Process streaming data
processed_stream = df_stream \
    .withColumn("event_time", 
                from_unixtime(col("timestamp")).cast("timestamp")) \
    .withColumn("hour", hour(col("event_time"))) \
    .withColumn("event_type_purchase", 
                when(col("event_type") == "purchase", 1).otherwise(0))

# Task 3: Stateless operations (per event)
enriched_stream = processed_stream \
    .filter(col("event_type") != "bot") \
    .select("event_id", "user_id", "product_id", "amount", "event_time")

# Task 4: Stateful aggregations (window operations)
# Count events per user per hour
user_hourly_activity = processed_stream \
    .groupBy(
        window(col("event_time"), "1 hour", "30 minutes"),
        col("user_id")
    ) \
    .agg(
        count("*").alias("event_count"),
        sum(col("event_type_purchase")).alias("purchase_count"),
        sum("amount").alias("total_spent")
    )

# Task 5: Late data handling with watermarking
df_with_watermark = processed_stream \
    .withWatermark("event_time", "10 minutes") \
    .groupBy(
        window(col("event_time"), "5 minutes"),
        col("user_id")
    ) \
    .agg(
        count("*").alias("event_count"),
        avg("amount").alias("avg_amount")
    )

# Task 6: Stream joins (join streaming and static data)
products_df = spark.read \
    .option("header", "true") \
    .csv("/path/to/products.csv")

stream_with_product_info = processed_stream \
    .join(products_df, on="product_id", how="left")

# Task 7: Feature engineering for ML
features_stream = processed_stream \
    .withColumn("time_of_day", hour(col("event_time"))) \
    .withColumn("is_weekend", 
                when(dayofweek(col("event_time")).isin(1, 7), 1).otherwise(0)) \
    .withColumn("log_amount", log1p(col("amount")))

# Task 8: Output to console (for testing)
query1 = enriched_stream \
    .writeStream \
    .outputMode("append") \
    .format("console") \
    .start()

# Task 9: Output to Parquet (for data warehouse)
query2 = features_stream \
    .writeStream \
    .outputMode("append") \
    .format("parquet") \
    .option("path", "/output/events_processed") \
    .option("checkpointLocation", "/tmp/checkpoint1") \
    .start()

# Task 10: Output aggregations to database
user_activity_query = user_hourly_activity \
    .writeStream \
    .outputMode("update") \
    .format("jdbc") \
    .option("url", "jdbc:postgresql://localhost:5432/streaming_db") \
    .option("dbtable", "user_hourly_activity") \
    .option("user", "postgres") \
    .option("password", "password") \
    .option("checkpointLocation", "/tmp/checkpoint2") \
    .start()

# Task 11: Build features for ML
ml_features = features_stream \
    .select(
        "user_id",
        "time_of_day",
        "is_weekend",
        "log_amount",
        "event_type"
    )

# Train model on historical data
historical_df = spark.read.parquet("/path/to/historical_events")

from pyspark.ml import Pipeline
from pyspark.ml.feature import VectorAssembler, OneHotEncoder, StringIndexer
from pyspark.ml.classification import RandomForestClassifier

# Feature pipeline
indexers = [StringIndexer(inputCol=col, outputCol=col+"_idx").fit(historical_df)
            for col in ["event_type"]]

assembler = VectorAssembler(
    inputCols=["time_of_day", "is_weekend", "log_amount", "event_type_idx"],
    outputCol="features"
)

rf = RandomForestClassifier(labelCol="event_type_idx", featuresCol="features")

pipeline = Pipeline(stages=indexers + [assembler, rf])
model = pipeline.fit(historical_df)

# Apply model to stream for real-time predictions
predictions = model.transform(ml_features)

predictions_query = predictions \
    .writeStream \
    .outputMode("append") \
    .format("console") \
    .start()

# Wait for queries
spark.streams.awaitAnyTermination()
```

#### Checkpoint - By end of Week 12, you should be able to:
- [ ] Understand micro-batch vs continuous streaming
- [ ] Write Spark Streaming applications
- [ ] Handle late-arriving data with watermarks
- [ ] Build stateful aggregations on streams
- [ ] Create features for ML on streaming data
- [ ] Design real-time feature pipelines

#### Resources:
- "Spark: The Definitive Guide" (Chapters on Streaming)
- Spark Streaming documentation
- YouTube: Spark Streaming tutorials
- Real-time ML with Spark (Medium articles)

---

## **PHASE 4 MILESTONE: Distributed Data Processing**

### Capstone Project (Week 12, combining Weeks 10-12):
**"Build a Real-Time Data Processing System"**

#### Requirements:
```
1. NOSQL DATABASE:
   [ ] Design and implement MongoDB database
   [ ] 3+ collections with proper indexing
   [ ] Aggregation pipelines for analytics
   [ ] Data validation and constraints

2. SPARK DATA PROCESSING:
   [ ] Load data from multiple sources
   [ ] Transform with DataFrames and SQL
   [ ] Create optimized execution plans
   [ ] 10+ different transformations

3. FEATURE ENGINEERING:
   [ ] Create features for ML models
   [ ] Handle categorical and numerical data
   [ ] Feature scaling and normalization
   [ ] Feature interaction creation

4. REAL-TIME STREAMING (Optional but great):
   [ ] Build Spark Streaming pipeline
   [ ] Process micro-batches
   [ ] Stateful aggregations
   [ ] Write results to database/warehouse

5. ML PIPELINE:
   [ ] Train model on processed data
   [ ] Evaluate model performance
   [ ] Deploy predictions to database
   [ ] Batch and real-time scoring

6. DOCUMENTATION:
   [ ] Architecture diagram
   [ ] Data flow documentation
   [ ] Feature engineering notebook
   [ ] Model performance report
```

#### Deliverables:
- ✅ MongoDB setup with sample data
- ✅ PySpark application (notebook or scripts)
- ✅ Feature engineering pipeline
- ✅ ML model (trained and evaluated)
- ✅ Execution plan analysis
- ✅ Performance metrics and optimization notes

#### Success Criteria:
- Processes 1M+ rows efficiently
- Features are engineered for ML
- Model accuracy >80% (or appropriate metric)
- System scales with data size
- Code is well-documented

#### Time to Complete: 12-15 hours

---

---

# PHASE 5: CAPSTONE & CAREER (Weeks 13-20)
## Goal: Build enterprise-grade project & prepare for interviews

### **WEEK 13: Kafka & Real-Time Integration**
**Time Commitment:** 18-20 hours

#### Learning Objectives:
- [ ] Understand Kafka architecture and design
- [ ] Build producers and consumers
- [ ] Handle at-least-once and exactly-once semantics
- [ ] Design event-driven pipelines
- [ ] Integrate Kafka with Spark

#### Topics:
1. **Kafka Fundamentals** (5 hours)
   - Topics, partitions, brokers
   - Producers and consumers
   - Consumer groups
   - Offsets and ordering
   - Replication and fault tolerance

2. **Building with Kafka** (6 hours)
   - Writing producers (Python)
   - Writing consumers
   - Error handling and retries
   - Exactly-once processing semantics
   - Monitoring consumer lag

3. **Spark + Kafka Integration** (4 hours)
   - Structured Streaming with Kafka
   - Reading from Kafka topics
   - Writing transformation results back
   - Managing offsets

4. **Event-Driven Architectures** (3 hours)
   - Design patterns
   - Event schema and versioning
   - Building streaming pipelines
   - Monitoring and observability

#### Hands-On Practice:
```python
# Project: Real-Time Event Processing with Kafka & Spark

# PRODUCER: Send events to Kafka
from kafka import KafkaProducer
import json
from datetime import datetime
import time

producer = KafkaProducer(
    bootstrap_servers=['localhost:9092'],
    value_serializer=lambda v: json.dumps(v).encode('utf-8')
)

# Simulate user events
events = [
    {'user_id': 'U001', 'event': 'purchase', 'amount': 99.99, 'timestamp': datetime.now().isoformat()},
    {'user_id': 'U002', 'event': 'click', 'product': 'PROD_001', 'timestamp': datetime.now().isoformat()},
    # ... more events
]

for event in events:
    producer.send('user-events', value=event)
    time.sleep(1)

producer.close()

# CONSUMER: Read events from Kafka
from kafka import KafkaConsumer

consumer = KafkaConsumer(
    'user-events',
    bootstrap_servers=['localhost:9092'],
    value_deserializer=lambda m: json.loads(m.decode('utf-8')),
    group_id='event-processors',
    auto_offset_reset='earliest'
)

# SPARK + KAFKA: Read streaming topic
df_kafka = spark.readStream \
    .format("kafka") \
    .option("kafka.bootstrap.servers", "localhost:9092") \
    .option("subscribe", "user-events") \
    .load()

# Parse JSON from Kafka
schema = StructType([
    StructField("user_id", StringType()),
    StructField("event", StringType()),
    StructField("timestamp", TimestampType()),
    StructField("amount", DoubleType()),
])

parsed_df = df_kafka.select(
    from_json(col("value").cast("string"), schema).alias("data")
).select("data.*")

# Process and write back to Kafka
result = parsed_df \
    .filter(col("event") == "purchase") \
    .select("user_id", "amount", "timestamp")

query = result.select(
    to_json(struct("*")).alias("value")
).writeStream \
    .format("kafka") \
    .option("kafka.bootstrap.servers", "localhost:9092") \
    .option("topic", "processed-events") \
    .option("checkpointLocation", "/tmp/checkpoint_kafka") \
    .start()

query.awaitTermination()
```

#### Resources:
- Kafka official documentation
- "Kafka: The Definitive Guide"
- YouTube: Kafka tutorials

---

### **WEEK 14: Data Engineering Best Practices & Production Patterns**
**Time Commitment:** 16-18 hours

#### Learning Objectives:
- [ ] Understand production-grade data engineering
- [ ] Implement monitoring and observability
- [ ] Handle data quality at scale
- [ ] Design for reliability and recovery
- [ ] Document and version data

#### Topics:
1. **Testing Data Pipelines** (4 hours)
   - Unit testing transformations
   - Integration testing
   - Data quality testing
   - CI/CD for data pipelines

2. **Monitoring & Observability** (4 hours)
   - Metrics (volume, latency, quality)
   - Logging and debugging
   - Alerting strategies
   - Dashboard monitoring

3. **Data Quality at Scale** (4 hours)
   - Great Expectations framework
   - Schema validation
   - Anomaly detection
   - SLA management

4. **Disaster Recovery & Backup** (2 hours)
   - Backup strategies
   - Recovery procedures
   - Versioning data
   - Rollback procedures

#### Hands-On Practice:
```python
# Project: Production-Grade Data Pipeline with Testing & Monitoring

# Great Expectations for data quality
from great_expectations.dataset import PandasDataset
import pandas as pd

df = pd.read_csv('data.csv')
ge_df = PandasDataset(df)

# Define expectations
expectations = [
    ge_df.expect_column_to_exist('user_id'),
    ge_df.expect_column_values_to_be_not_null('email'),
    ge_df.expect_column_values_to_match_regex('email', r'.+@.+\..+'),
    ge_df.expect_column_values_to_be_in_set('country', ['USA', 'Canada', 'Mexico']),
]

# Validate
validation_result = ge_df.validate(expectations)
print(validation_result)

# Unit tests for transformations
import pytest

def test_data_transformation():
    input_data = pd.DataFrame({
        'name': ['John', 'Jane'],
        'age': [30, 25]
    })
    
    expected_output = pd.DataFrame({
        'name': ['JOHN', 'JANE'],
        'age_group': ['30-40', '20-30']
    })
    
    actual_output = transform_data(input_data)
    pd.testing.assert_frame_equal(actual_output, expected_output)

# Monitoring with logging
import logging

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)

handler = logging.FileHandler('pipeline.log')
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)
logger.addHandler(handler)

def extract_and_validate(source):
    try:
        logger.info(f"Starting extraction from {source}")
        data = extract_data(source)
        logger.info(f"Extracted {len(data)} records")
        
        validated = validate_data(data)
        logger.info(f"Validation passed")
        
        return validated
    except Exception as e:
        logger.error(f"Failed to extract: {str(e)}", exc_info=True)
        raise
```

---

### **WEEKS 15-17: End-to-End Capstone Project**
**Time Commitment:** 50-60 hours total

#### Major Project: "Design and Deploy a Complete Data Engineering System"

#### Requirements:
```
PROJECT SCOPE: Choose one realistic scenario:
  Option A: Fintech transaction processing system
  Option B: E-commerce analytics platform
  Option C: IoT sensor data pipeline
  Option D: Social media analytics platform

COMPONENTS TO BUILD:

1. DATA INGESTION (Week 15)
   [ ] Multiple data sources (API, database, files)
   [ ] Real-time and batch ingestion
   [ ] Error handling and retries
   [ ] Monitoring source health

2. DATA PROCESSING (Week 15-16)
   [ ] Python transformations
   [ ] Spark jobs for large datasets
   [ ] Feature engineering
   [ ] Aggregations and rollups

3. DATA STORAGE (Week 16)
   [ ] Relational database (PostgreSQL)
   [ ] NoSQL database (MongoDB)
   [ ] Data warehouse with star schema
   [ ] Proper indexing and partitioning

4. ORCHESTRATION (Week 16)
   [ ] Airflow DAG with 15+ tasks
   [ ] Error handling and retries
   [ ] SLA monitoring
   [ ] Dependency management

5. REAL-TIME COMPONENT (Optional, Week 16)
   [ ] Kafka topic configuration
   [ ] Spark Streaming consumer
   [ ] Real-time aggregations
   [ ] Low-latency processing

6. ANALYTICS & BI (Week 17)
   [ ] 20+ analytical SQL queries
   [ ] Dashboard with 8+ visualizations
   [ ] Interactive filters and drill-downs
   [ ] Performance optimizations

7. MONITORING & QUALITY (Week 17)
   [ ] Data quality checks
   [ ] Alert system
   [ ] Performance baselines
   [ ] Operational dashboards

8. DOCUMENTATION & DEPLOYMENT (Week 17)
   [ ] Architecture diagrams
   [ ] Data dictionary
   [ ] Runbooks for operations
   [ ] Disaster recovery plan
   [ ] Deployment guide
   [ ] Performance benchmarks
```

#### Deliverables:
- ✅ GitHub repository with full code
- ✅ Docker setup for local development
- ✅ Working Airflow DAGs
- ✅ Database schemas (RDBMS + NoSQL)
- ✅ Python transformation scripts
- ✅ Spark applications
- ✅ Interactive dashboard
- ✅ Comprehensive documentation (20+ pages)
- ✅ Performance metrics and benchmarks
- ✅ Testing suite (unit + integration)

#### Success Criteria:
- System processes 1M+ records
- Latency: ingestion <5min, analytics <30sec
- Uptime target: 99%
- Data quality score >95%
- Team can understand and maintain system
- All documentation complete
- Reproducible deployment

---

### **WEEK 18: Generative AI for Data Engineering**
**Time Commitment:** 12-14 hours

#### Learning Objectives:
- [ ] Use AI tools for code generation and debugging
- [ ] Leverage AI for schema and SQL design
- [ ] Apply AI for data quality improvements
- [ ] Understand limitations and best practices

#### Topics:
1. **AI-Assisted Development** (3 hours)
   - GitHub Copilot for code completion
   - Using ChatGPT/Claude for debugging
   - Prompt engineering for data tasks

2. **Schema & Query Generation** (3 hours)
   - Designing schemas with AI assistance
   - Writing complex SQL with AI
   - Validating AI-generated code

3. **Data Quality & Anomaly Detection** (3 hours)
   - Using AI for pattern detection
   - Data profiling with AI
   - Automated quality rules

4. **Best Practices & Limitations** (3 hours)
   - When to use AI, when not to
   - Verification and validation
   - Security and governance

#### Hands-On Practice:
```python
# Using Claude/ChatGPT for data engineering tasks

# Prompt: "Generate a Spark transformation for data normalization"
# Result: (AI-generated code that you verify)

from pyspark.sql.functions import col, when, trim, lower

def normalize_customer_data(df):
    """Normalize customer data using Spark transformations"""
    return df \
        .withColumn("email", lower(trim(col("email")))) \
        .withColumn("phone", regexp_replace(col("phone"), "[^0-9]", "")) \
        .withColumn("country", when(col("country") == "", "Unknown").otherwise(col("country")))

# Verify the generated code
# Test with sample data
# Document the transformation
```

---

### **WEEK 19: Interview Preparation**
**Time Commitment:** 12-14 hours

#### Topics:
1. **System Design for Data Engineering** (4 hours)
   - Designing scalable pipelines
   - Handling large datasets
   - Real-time vs batch tradeoffs
   - Architecture decisions

2. **Behavioral Interviews** (3 hours)
   - STAR method for storytelling
   - Discussing your projects
   - Conflict resolution
   - Leadership examples

3. **Technical Interviews** (4 hours)
   - SQL optimization
   - Debugging data issues
   - Performance tuning
   - Trade-off analysis

4. **Mock Interviews** (3 hours)
   - Practice with peers
   - Recording and review
   - Feedback incorporation

#### Sample Interview Questions:
```
System Design:
- Design a real-time event processing system
- Build a data warehouse for e-commerce
- Create a recommendation engine pipeline

Behavioral:
- Tell me about your biggest data challenge
- How did you improve pipeline performance?
- Describe your most complex data project

Technical:
- Optimize this slow SQL query
- Design a schema for X use case
- How would you handle this data quality issue?
```

---

### **WEEK 20: Final Portfolio & Career Launch**
**Time Commitment:** 10-12 hours

#### Activities:
1. **Polish Portfolio** (4 hours)
   - GitHub repository with best practices
   - Clear README files
   - Code comments and documentation
   - Demo videos or screenshots

2. **Build Personal Brand** (3 hours)
   - LinkedIn profile optimization
   - Data engineering blog posts
   - GitHub presence
   - Resume customization

3. **Job Search Strategy** (3 hours)
   - Target companies and roles
   - Networking connections
   - Application strategy
   - Salary negotiation prep

4. **Continuous Learning Plan** (2 hours)
   - Identify areas to deepen
   - Resource recommendations
   - 6-month growth plan
   - Stay current with tools

---

## **PHASE 5 MILESTONES**

### Milestone 1 (Week 14): Production-Ready Pipeline
- ✅ Tested and monitored pipeline
- ✅ Data quality checks passing
- ✅ Documentation complete

### Milestone 2 (Week 17): Capstone Project Complete
- ✅ End-to-end system deployed
- ✅ All components working together
- ✅ Ready for portfolio

### Milestone 3 (Week 20): Career Ready
- ✅ Portfolio polished
- ✅ Resume optimized
- ✅ Interview ready
- ✅ 5+ companies contacted

---

# SUCCESS TRACKING

## Weekly Check-ins
Each week, verify:
- [ ] Completed all learning objectives
- [ ] Built working code/project
- [ ] Can explain concepts in your own words
- [ ] Pushed code to GitHub
- [ ] Documented what you learned

## Monthly Milestones
- **Month 1 (Week 4):** Python + Python Project Complete
- **Month 2 (Week 8):** SQL Expert + Data Warehouse Designed
- **Month 3 (Week 12):** Big Data Expert + Capstone in Progress
- **Month 4 (Week 16):** Capstone Complete + Interview Ready
- **Month 5 (Week 20):** Career Prepared + Job Search Active

## Portfolio Projects by End of Course
1. **Python ETL Pipeline** (Week 3)
2. **Database Design & Admin** (Week 6)
3. **Data Warehouse with Analytics** (Week 9)
4. **Distributed Data System** (Week 12)
5. **Production-Ready End-to-End System** (Week 17)

---

# RESOURCES BY WEEK

| Week | Key Resources |
|------|---------------|
| 1-3 | Real Python, Corey Schafer, Mode SQL |
| 4-6 | PostgreSQL Docs, Mode Analytics, Alex Analyst |
| 7-9 | Kimball Group, dbt, Udacity Nanodegree |
| 10-12 | MongoDB University, Learning Spark, DataTalks |
| 13-20 | Kafka Docs, Production Guides, Interview Prep |

---

# DAILY STUDY SCHEDULE (Suggested)

**Weeks 1-3 (Foundations):**
- 1 hour: Watch videos/read material
- 1.5 hours: Code along with examples
- 1 hour: Work on project
- 0.5 hours: Review and document

**Weeks 4-12 (Core):**
- 1 hour: New concept learning
- 2 hours: Hands-on coding
- 1.5 hours: Project work
- 0.5 hours: Review, troubleshoot

**Weeks 13-20 (Advanced):**
- 1 hour: Advanced topics
- 3-4 hours: Capstone project
- 1 hour: Interview prep / portfolio work
- 0.5 hours: Reflection and planning

---

**You're ready to start! Pick Week 1 and let's go! 🚀**