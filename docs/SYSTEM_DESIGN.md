# SYSTEM DESIGN

## Project Name: IT Skills Demand Explorer

**Prepared By:** Siddhi Jagtap  
**Batch:** 45  
**Version:** 1.0

---

# 1. Introduction

IT Skills Demand Explorer is a full-stack web application that analyzes IT job posting data and identifies the most in-demand technical skills.

The system helps students and job seekers understand industry requirements, compare job roles, identify skill gaps, and plan their learning.

# 2. Technology Architecture

The application follows a three-layer architecture:

1. **Frontend Layer:** React.js provides the user interface.
2. **Backend Layer:** Django and Django REST Framework handle business logic and REST APIs.
3. **Database Layer:** PostgreSQL stores application and job posting data.

Pandas is used for CSV data cleaning and analysis. Chart.js is used to display charts and graphs.

# 3. Technology Stack

| Layer | Technology |
|---|---|
| Frontend | React.js |
| Frontend Build Tool | Vite |
| Backend | Python, Django |
| REST API | Django REST Framework |
| Database | PostgreSQL |
| Data Processing | Pandas |
| Data Visualization | Chart.js |
| API Documentation | Swagger / OpenAPI |
| API Testing | Postman |
| Version Control | Git and GitHub |
| Code Editor | Visual Studio Code |

# 4. System Architecture

The system works through communication between the frontend, backend, and database.

**Architecture Flow:**

User → React.js Frontend → Django REST API → Business Logic → PostgreSQL Database

Pandas processes uploaded CSV datasets, and the processed information is returned through APIs to the React frontend. Chart.js displays the analysis in visual form.

# 5. Main System Components

## 5.1 Frontend

The frontend is developed using React.js and Vite.

Main pages:

- Home Page
- Registration Page
- Login Page
- Dashboard
- Job Role Comparison
- Skill Demand Trends
- Salary and Experience Insights
- Skill Gap Analyzer
- Learning Plans
- Admin Dashboard

The frontend communicates with Django REST APIs using HTTP requests and displays the received data.

5.2 Backend

The backend is developed using Python, Django, and Django REST Framework.

It handles:

User authentication and authorization

Role-based access

CSV file uploads and validation

Data processing

Skill demand calculations

Dashboard data

Skill gap analysis

Learning plan management

API error handling

5.3 Database

PostgreSQL is used as the relational database.

It stores:

User information

Uploaded datasets

Job roles

Technical skills

Job postings

Saved learning plans

Django ORM is used to communicate with the database.

5.4 Data Processing

Pandas is used to:

Read uploaded CSV files

Validate required columns

Handle missing values

Remove duplicate records

Clean job posting data

Extract technical skills

Calculate skill demand percentages

5.5 Data Visualization

Chart.js is used to display:

Most demanded technical skills

Skill demand by job role

Job role comparisons

Skill demand trends

Salary insights

Experience requirements

6. Django Application Modules

The backend is divided into four Django applications.

Application

Responsibility

accounts

Registration, login, logout and user roles

datasets

CSV upload, validation and data processing

analytics

Skill demand, comparisons and dashboard APIs

plans

Skill gap analysis and saved learning plans

Each application handles a separate responsibility to keep the backend organized.

7. System Workflow

The user opens the application.

The user registers or logs in.

The user accesses the dashboard.

The admin uploads a job posting CSV dataset.

The backend validates and processes the dataset using Pandas.

Cleaned job posting information is stored in PostgreSQL.

The backend calculates skill demand and other analytics.

The frontend requests data through REST APIs.

The dashboard displays charts and insights.

The user checks skill gaps and saves a learning plan.

8. Authentication and Authorization

The system uses Django authentication and role-based authorization.

Users must log in to access protected features.

Admin users can upload datasets and manage application data.

Regular users can explore analytics and manage their learning plans.

Django sessions and cookies are used to manage authenticated browser sessions.

CSRF protection is applied to protect session-based requests.

9. API Communication

Django REST Framework provides REST APIs for communication between React and Django.

The APIs use HTTP methods:

Method

Purpose

GET

Retrieve information

POST

Create or upload information

PUT / PATCH

Update information

DELETE

Delete information

API responses are provided in JSON format.

Swagger / OpenAPI is used to document API endpoints, request parameters, responses, and authentication requirements.

10. Security Design

The system follows these security practices:

Authentication for protected resources

Role-based permissions

Password hashing

Input validation

CSV file validation and size restrictions

CSRF protection

CORS configuration

API throttling to limit excessive requests

Environment variables for sensitive configuration

Proper error handling

11. Performance Optimization

The system uses the following techniques to improve performance:

Django ORM query optimization

select_related() for related foreign-key data

prefetch_related() for many-to-many and reverse relationships

Django caching for frequently requested analytics

Pagination for large API responses

Efficient Pandas data processing

12. Testing Design

The application will be tested at different levels:

Unit Testing: Testing individual functions and components.

Integration Testing: Testing communication between frontend, backend, and database.

API Testing: Testing REST APIs using Postman.

Authentication Testing: Checking login and protected endpoints.

Validation Testing: Testing invalid CSV files and incorrect inputs.

Smoke Testing: Checking whether important application features work correctly.

13. Deployment Design

The frontend and backend will be deployed as separate services.

Frontend: React application.

Backend: Django REST API.

Database: PostgreSQL.

Environment variables will be configured for database credentials, secret keys, allowed hosts, and frontend API URLs.

The GitHub repository will contain source code, documentation, and setup instructions.

14. Conclusion

IT Skills Demand Explorer uses a modern full-stack architecture combining React.js, Django REST Framework, PostgreSQL, Pandas, and Chart.js.

The system is designed to convert job posting data into useful insights that help students and job seekers understand industry skill requirements and plan their learning effectively.