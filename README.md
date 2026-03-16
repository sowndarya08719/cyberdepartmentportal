# Cyber Security Department Portal

A web-based portal designed for the **Computer Science and Engineering (Cyber Security)** department to provide secure login access and a structured department dashboard.

This project demonstrates a secure authentication system combined with a professional department interface similar to a university portal.

## Features

* OTP-based email authentication using Node.js
* Google OAuth login integration
* Secure login validation for institutional email IDs
* Interactive dashboard for the Cyber Security department
* Structured academic sections including:

  * Overview
  * Vision
  * Mission
  * Programme Educational Objectives (PEOs)
  * Programme Specific Outcomes (PSOs)
  * Programme Outcomes (POs)
* Sidebar sections for:

  * Faculty & Staff
  * Infrastructure
  * Research & Consultancy
* Professional UI design with responsive layout and styled components

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Node.js
* Express.js
* Nodemailer
* Google OAuth Authentication

## Project Structure

cyber-security-project
│
├── public
│   ├── login.html
│   ├── dashboard.html
│   ├── signup.html
│   ├── style.css
│   └── script.js
│
├── server.js
├── users.json
├── package.json
└── .env

## Authentication Workflow

1. User enters institutional email ID.
2. System validates the email format.
3. An OTP is sent to the user's email using Nodemailer.
4. User verifies the OTP.
5. After successful authentication, the user is redirected to the department dashboard.

Users can also authenticate using **Google Sign-In**.

## Purpose

This project was developed as a **secure departmental portal prototype** demonstrating authentication mechanisms and a professional web interface for academic departments.

## Future Improvements

* Role-based access control for faculty and students
* Database integration for storing users
* Admin panel for managing department content
* Enhanced cybersecurity features

