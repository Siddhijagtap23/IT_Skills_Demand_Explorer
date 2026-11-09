# TESTING DOCUMENTATION

## Project Name: IT Skills Demand Explorer

**Prepared By:** Siddhi Jagtap  
**Batch:** 45  
**Version:** 1.0

---

# 1. Introduction

Testing is an important part of the IT Skills Demand Explorer project.

The purpose of testing is to verify that the application works correctly, produces accurate results, and handles invalid inputs safely.

Testing will be performed on the React frontend, Django backend, REST APIs, and PostgreSQL database.

# 2. Testing Objectives

The main objectives are:

- Verify that all application features work correctly.
- Identify and fix errors.
- Validate user inputs and uploaded CSV files.
- Check authentication and authorization.
- Verify database operations.
- Ensure accurate skill demand calculations.
- Check communication between frontend and backend.

# 3. Types of Testing

## 3.1 Unit Testing

Unit testing checks individual functions and components separately.

Examples:

- Testing skill demand calculation.
- Testing readiness score calculation.
- Testing CSV validation functions.
- Testing user input validation.

**Tools:** Django Test Framework and appropriate React testing tools.

## 3.2 Integration Testing

Integration testing checks whether different parts of the application work together.

Examples:

- React frontend communicating with Django APIs.
- Django backend connecting to PostgreSQL.
- CSV processing and database storage.
- Analytics APIs returning data to the frontend.

## 3.3 API Testing

API testing verifies the REST APIs provided by Django REST Framework.

Examples:

- User registration API.
- Login and logout APIs.
- Dataset upload API.
- Dashboard API.
- Skill gap analysis API.
- Learning plan APIs.

**Tool:** Postman.

## 3.4 Authentication Testing

Authentication testing verifies that users can securely access the application.

Examples:

- Valid login credentials.
- Invalid login credentials.
- Logout functionality.
- Accessing protected APIs without login.
- Checking admin-only permissions.

## 3.5 Validation Testing

Validation testing checks how the application handles incorrect or missing information.

Examples:

- Uploading an invalid file format.
- Uploading an empty CSV file.
- Uploading a CSV file with missing columns.
- Entering invalid job role information.
- Submitting empty form fields.

## 3.6 Smoke Testing

Smoke testing checks whether the main features of the application work after deployment or major changes.

Examples:

Application opens successfully.

User can log in.

Dashboard loads.

Analytics APIs respond.

Admin can upload a dataset.

Learning plans can be accessed.

4. Test Cases

Test ID

Test Scenario

Expected Result

TC01

Register with valid details

User registration successful

TC02

Register with existing email

Validation error displayed

TC03

Login with valid credentials

User logged in

TC04

Login with invalid credentials

Error message displayed

TC05

Access protected API without login

Unauthorized response

TC06

Upload valid CSV file

Dataset accepted

TC07

Upload invalid file format

Validation error displayed

TC08

Upload CSV with missing columns

Error message displayed

TC09

View dashboard

Dashboard data displayed

TC10

Compare two job roles

Comparison results displayed

TC11

Calculate readiness score

Correct score returned

TC12

Save a learning plan

Learning plan saved

TC13

Delete a learning plan

Learning plan deleted

TC14

Access admin API as regular user

Permission denied

5. Testing Tools

Tool

Purpose

Django Test Framework

Backend unit and integration testing

Postman

REST API testing

React Testing Tools

Frontend component testing

PostgreSQL

Database operation verification

Browser Developer Tools

Frontend debugging

6. Bug Reporting

When an error is identified, the following information will be recorded:

Bug ID

Bug description

Steps to reproduce

Expected result

Actual result

Bug status

Bugs will be corrected and tested again.

7. Test Results

Actual test results will be recorded after implementation and execution of the test cases.

The project will maintain a record of passed and failed test cases.

8. Conclusion

Testing helps ensure the reliability, security, and accuracy of IT Skills Demand Explorer.

Different testing methods will be used to verify the frontend, backend, APIs, database, and major application features.