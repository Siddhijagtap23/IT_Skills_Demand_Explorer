# IT Skills Demand Explorer

**Project Type:** Full Stack Web Application  
**Prepared By:** Siddhi Jagtap  
**Batch:** 45  
**Version:** 1.0

---

## 1. Project Overview

IT Skills Demand Explorer is a web-based application that analyzes IT job posting data to identify the most in-demand technical skills across different job roles.

It helps students and job seekers understand industry requirements, compare job roles, identify skill gaps, and plan their learning to improve career readiness.

## 2. Objectives

- Analyze IT job posting data using Python and Pandas.
- Identify the most demanded skills for different IT roles.
- Compare skill requirements across job roles.
- Display skill demand trends through interactive charts.
- Analyze salary and experience information.
- Calculate a readiness score based on users' existing skills.
- Generate personalized skill-gap and learning priority plans.

## 3. Key Features

- User registration and login.
- CSV dataset upload and validation.
- IT skills demand dashboard.
- Role-wise skill analysis.
- Comparison of two job roles.
- Skill demand trends over time.
- Salary and experience insights.
- Skill-gap analysis and readiness score.
- Save and manage learning plans.
- Admin management of users, roles, skills, and datasets.

## 4. Technology Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| Vite | Frontend build tool |
| Python | Backend programming |
| Django | Backend framework |
| Django REST Framework | REST API development |
| PostgreSQL | Database management |
| Pandas | Data cleaning and analysis |
| Chart.js | Data visualization |
| Swagger / OpenAPI | API documentation |
| Postman | API testing |
| Git and GitHub | Version control |

## 5. System Architecture

The application follows a three-layer architecture.

1. **Frontend:** React.js provides the user interface.
2. **Backend:** Django and Django REST Framework handle business logic and APIs.
3. **Database:** PostgreSQL stores application and job posting data.

Pandas processes uploaded datasets, and Chart.js displays analytical results.

**Architecture Flow:**

User → React.js → Django REST API → PostgreSQL

## 6. Project Structure

```text
IT_Skills_Demand_Explorer/
│
├── frontend/
│
├── accounts/
├── datasets/
├── analytics/
├── plans/
│
├── config/
├── docs/
│   ├── SRS.md
│   ├── SYSTEM_DESIGN.md
│   ├── DATABASE_DESIGN.md
│   ├── MODULES.md
│   ├── API_DOCUMENTATION.md
│   ├── TESTING.md
│   └── USER_MANUAL.md
│
├── manage.py
├── requirements.txt
├── README.md
└── .gitignore
```

## 7. How the System Works

1. The administrator uploads an IT job posting CSV dataset.
2. Django validates and processes the dataset using Pandas.
3. Cleaned job posting information is stored in PostgreSQL.
4. The backend analyzes skill demand across different job roles.
5. React retrieves analytics through Django REST APIs.
6. Chart.js displays the results in interactive dashboards.
7. Users analyze their skill gaps and save learning plans.

## 8. Dataset Format

The CSV dataset should contain the following columns:

```text
job_title, role, company, location, experience_min,
experience_max, salary_min, salary_max, skills, posted_date
```

**Maximum supported CSV file size:** 20 MB.

## 9. Installation and Setup

Installation and configuration instructions will be added after the frontend, backend, and database setup is completed.

## 10. API Documentation

Swagger / OpenAPI will be used to provide interactive API documentation after API implementation.

## 11. Testing

The application will be tested using:

- Django Test Framework
- Postman
- React Testing Tools
- Browser Developer Tools

Unit, integration, API, validation, authentication, and smoke testing will be performed.

## 12. Project Documentation

Detailed project documentation is available in the `docs/` folder.

- [Software Requirements Specification](docs/SRS.md)
- [System Design](docs/SYSTEM_DESIGN.md)
- [Database Design](docs/DATABASE_DESIGN.md)
- [Module Documentation](docs/MODULES.md)
- [API Documentation](docs/API_DOCUMENTATION.md)
- [Testing Documentation](docs/TESTING.md)
- [User Manual](docs/USER_MANUAL.md)

## 13. Project Status

**Development Status:** In Progress

The application is currently in the planning and initial setup phase. Features will be updated as they are implemented and tested.

## 14. Author

**Siddhi Jagtap**

**Batch:** 45

**GitHub:** [Siddhijagtap23](https://github.com/Siddhijagtap23)