# DATABASE DESIGN

## Project Name: IT Skills Demand Explorer

**Prepared By:** Siddhi Jagtap  
**Batch:** 45  
**Version:** 1.0

---

# 1. Introduction

The IT Skills Demand Explorer uses PostgreSQL as its relational database.

The database stores user information, job posting datasets, job roles, technical skills, job postings, and saved learning plans.

Django ORM is used to interact with the PostgreSQL database.

# 2. Database Tables

The system contains the following main tables:

1. User
2. Dataset
3. Role
4. Skill
5. JobPosting
6. SavedPlan

# 3. Table Structure

## 3.1 User Table

Stores registered user and administrator information.

| Field | Data Type | Description |
|---|---|---|
| id | Integer | Primary Key |
| username | Varchar | Unique username |
| email | Varchar | User email |
| password | Varchar | Hashed password |
| role | Varchar | Admin or User |
| date_joined | DateTime | Registration date |

## 3.2 Dataset Table

Stores information about uploaded CSV datasets.

| Field | Data Type | Description |
|---|---|---|
| id | Integer | Primary Key |
| name | Varchar | Dataset name |
| file | File | Uploaded CSV file |
| uploaded_by | Foreign Key | User who uploaded the dataset |
| status | Varchar | Processing status |
| row_count | Integer | Number of records |
| uploaded_at | DateTime | Upload date and time |

## 3.3 Role Table

Stores different IT job roles.

| Field | Data Type | Description |
|---|---|---|
| id | Integer | Primary Key |
| name | Varchar | Job role name |
| description | Text| Role description

Examples: Data Analyst, Python Developer, Web Developer.

3.4 Skill Table

Stores technical skills required in IT jobs.

Field

Data Type

Description

id

Integer

Primary Key

name

Varchar

Skill name

category

Varchar

Skill category

Examples: Python, SQL, Excel, Power BI, Tableau.

3.5 JobPosting Table

Stores job posting information extracted from CSV datasets.

Field

Data Type

Description

id

Integer

Primary Key

dataset_id

Foreign Key

Related dataset

role_id

Foreign Key

Related job role

job_title

Varchar

Job title

company

Varchar

Company name

location

Varchar

Job location

experience_min

Integer

Minimum experience

experience_max

Integer

Maximum experience

salary_min

Decimal

Minimum salary

salary_max

Decimal

Maximum salary

posted_date

Date

Job posting date

The JobPosting table has a many-to-many relationship with the Skill table because one job posting can require multiple skills and one skill can appear in multiple job postings.

3.6 SavedPlan Table

Stores learning plans created by users.

Field

Data Type

Description

id

Integer

Primary Key

user_id

Foreign Key

Related user

role_id

Foreign Key

Selected job role

title

Varchar

Learning plan title

readiness_score

Decimal

Calculated readiness percentage

created_at

DateTime

Plan creation date

Each saved plan can contain multiple known skills. A skill can also be included in multiple saved plans.

4. Database Relationships

The database contains the following relationships:

One User can upload multiple Datasets.

One Dataset can contain multiple JobPostings.

One Role can have multiple JobPostings.

One JobPosting can have multiple Skills.

One Skill can belong to multiple JobPostings.

One User can create multiple SavedPlans.

One Role can be associated with multiple SavedPlans.

One SavedPlan can contain multiple known Skills.

5. Entity Relationship Diagram

erDiagram
    USER ||--o{ DATASET : uploads
    USER ||--o{ SAVED_PLAN : creates
    DATASET ||--o{ JOB_POSTING : contains
    ROLE ||--o{ JOB_POSTING : categorizes
    ROLE ||--o{ SAVED_PLAN : selected_for
    JOB_POSTING }o--o{ SKILL : requires
    SAVED_PLAN }o--o{ SKILL : includes

    USER {
        int id PK
        string username
        string email
        string password
        string role
    }

    DATASET {
        int id PK
        string name
        string file
        int uploaded_by FK
        string status
        int row_count
    }

    ROLE {
        int id PK
        string name
        string description
    }

    SKILL {
        int id PK
        string name
        string category
    }

    JOB_POSTING {
        int id PK
        int dataset_id FK
        int role_id FK
        string job_title
        string company
        string location
        int experience_min
        int experience_max
        decimal salary_min
        decimal salary_max
        date posted_date
    }

    SAVED_PLAN {
        int id PK
        int user_id FK
        int role_id FK
        string title
        decimal readiness_score
        datetime created_at
    }

6. Database Constraints

The following constraints will be applied:

Primary keys uniquely identify each record.

Foreign keys maintain relationships between tables.

Username and email must be unique.

Required fields cannot be empty.

Skill names should not be duplicated.

Readiness score must be between 0 and 100.

Related records should follow appropriate deletion rules.

7. Database Operations

The system performs the following database operations:

INSERT: Add users, datasets, job postings, and learning plans.

SELECT: Retrieve skills, job roles, and analytics data.

UPDATE: Modify user information and dataset details.

DELETE: Remove saved learning plans and permitted records.

8. Database Optimization

The following techniques will help improve database performance:

Indexing frequently searched fields.

Using Django ORM efficiently.

Using select_related() for foreign-key relationships.

Using prefetch_related() for many-to-many relationships.

Avoiding unnecessary database queries.

Using transactions for reliable data operations.

9. Conclusion

The PostgreSQL database provides structured storage for IT Skills Demand Explorer.

The relational design maintains data consistency and supports job posting analysis, skill demand calculations, role comparisons, and personalized learning plans.