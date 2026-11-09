# API DOCUMENTATION

## Project Name: IT Skills Demand Explorer

**Prepared By:** Siddhi Jagtap  
**Batch:** 45  
**Version:** 1.0

---

# 1. Introduction

The IT Skills Demand Explorer uses Django REST Framework to provide REST APIs.

These APIs allow the React frontend to communicate with the Django backend and perform application operations.

The API responses are provided in JSON format.

# 2. API Base URL

During local development:

`http://127.0.0.1:8000/api/`

# 3. Authentication APIs

| Endpoint | Method | Description |
|---|---|---|
| /api/accounts/register/ | POST | Register a new user |
| /api/accounts/login/ | POST | Login user |
| /api/accounts/logout/ | POST | Logout user |
| /api/accounts/profile/ | GET | Retrieve user profile

4. Dataset APIs

These APIs are accessible only to authorized administrators.

Endpoint

Method

Description

/api/datasets/

GET

List uploaded datasets

/api/datasets/upload/

POST

Upload a CSV dataset

/api/datasets/{id}/

GET

Retrieve dataset details

/api/datasets/{id}/delete/

DELETE

Delete a dataset

5. Analytics APIs

Endpoint

Method

Description

/api/analytics/dashboard/

GET

Retrieve dashboard statistics

/api/analytics/skills/

GET

Retrieve skill demand information

/api/analytics/roles/

GET

Retrieve available job roles

/api/analytics/trends/

GET

Retrieve skill demand trends

/api/analytics/salary/

GET

Retrieve salary insights

/api/analytics/experience/

GET

Retrieve experience insights

6. Job Role Comparison API

Endpoint

Method

Description

/api/analytics/compare/

GET

Compare two job roles

Example request:

GET /api/analytics/compare/?role1=Data Analyst&role2=Python Developer

7. Skill Gap APIs

Endpoint

Method

Description

/api/analytics/skill-gap/

POST

Analyze user skill gaps

/api/analytics/readiness-score/

POST

Calculate readiness score

Example request:

{
  "role": "Data Analyst",
  "known_skills": ["SQL", "Excel", "Python"]
}

8. Learning Plan APIs

Endpoint

Method

Description

/api/plans/

GET

Retrieve saved learning plans

/api/plans/

POST

Create a learning plan

/api/plans/{id}/

GET

Retrieve a specific plan

/api/plans/{id}/

DELETE

Delete a learning plan

9. HTTP Status Codes

Status Code

Description

200

OK - Request successful

201

Created - Resource created

204

No Content - Resource deleted

400

Bad Request - Invalid input

401

Unauthorized - Authentication required

403

Forbidden - Permission denied

404

Not Found - Resource not found

500

Internal Server Error

10. API Security

The APIs will use Django authentication and authorization.

Protected endpoints require an authenticated session.

Admin-only APIs require administrator permissions.

Input data is validated before processing.

CSRF protection is applied to session-based requests.

API throttling helps prevent excessive requests.

11. API Documentation Tool

Swagger / OpenAPI will be used to generate interactive API documentation.

It will describe:

API endpoints

HTTP methods

Request parameters

Request body

Response format

Authentication requirements

Error responses

12. Conclusion

The REST API layer connects the React frontend with the Django backend.

It provides structured access to authentication, dataset management, analytics, skill gap analysis, and learning plan functionality.