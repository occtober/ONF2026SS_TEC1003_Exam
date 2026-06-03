# Highsoft Learning Platform

## Overview

This repository contains the frontend and backend implementation of a digital learning platform developed for the Highsoft case assignment.
The platform allows users to discover courses, navigate through modules and lessons, track their progress, and complete a course journey from onboarding to certification.

## Project Structure

### Frontend

The frontend contains the user interface and styling of the platform.

**Pages**

* Landing page
* Course detail page
* Module pages
* Module summary page
* Course completion page

**Styling**

* button.css
* cards.css
* header.css
* input.css
* pill-tag.css
* progress.css
* tableofcontents.css
* typography.css
* variables.css

**Assets**

* Course images
* Video thumbnails
* Logo
* Diploma image

**JavaScript**

* main.js

---

### Backend

The backend handles course content and application data.

**Data Files**

* courses.json
* modules.json
* quiz-cards.json

**Files**

* app.py
* requirements.txt
* .gitignore

The backend uses structured JSON data to manage course information, modules and quiz content, making it easier to maintain and expand the platform without hardcoding content into individual pages.

---

## Technologies Used

* HTML
* CSS
* JavaScript
* Python
* JSON
* Git
* GitHub

---

## Architecture Overview

The platform follows a simple frontend-backend structure.
The frontend is responsible for displaying content, handling navigation and managing user interactions. The backend manages course, module and quiz data using structured JSON files. Flask acts as the connection between the frontend and backend by serving data to the application.

## Data Flow

1. Course, module and quiz data is stored in JSON files.
2. The Flask backend reads and serves the data.
3. The frontend displays the content to users.
4. User progress is stored locally using localStorage and updated as lessons and modules are completed.

## Key Technical Decisions

* Structured JSON data was used instead of hardcoded content to improve scalability and maintainability.
* Progress tracking was implemented using localStorage to preserve user progress between pages.
* Navigation and lesson progression were prioritised to create a clear learning experience.
* Responsive layouts were designed to support both mobile and desktop users.

## Running the Project

## Backend

1. Navigate to the backend folder.
2. Install dependencies:
pip install -r requirements.txt

3. Run the application:
python app.py

## Frontend 

Open the frontend files in a browser or run them using a local development server.

## Repository Relationship

The frontend and backend work together as a single application. The frontend provides the user interface, while the backend supplies the structured course, module and quiz data required by the platform.

## Key Features

* Course recommendation flow
* Dynamic course content
* Module and lesson navigation
* Progress tracking
* Responsive layouts
* Course completion certificate

---

## Contributors

* Shanti
* Jeanett

---

## Project Status

Completed as part of the Highsoft case assignment.
