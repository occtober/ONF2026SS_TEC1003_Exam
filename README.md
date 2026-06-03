# Highsoft Learning Platform

## Project Overview

The Highsoft Learning Platform is a digital learning solution developed as part of the Highsoft case assignment. The platform allows users to discover courses, navigate through modules and lessons, track their progress, complete quizzes, and finish a course journey from onboarding to certification.

The project includes both frontend and backend components that work together to provide a complete learning experience.

## Technology Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Python
* Flask
* JSON

### Development Tools

* Git
* GitHub
* Figma

## Project Structure

```text
project/
├── frontend/
│   ├── html files
│   ├── css/
│   ├── js/
│   ├── images/
│   └── design-system/
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── data/
│   │   ├── courses.json
│   │   ├── modules.json
│   │   └── quiz-cards.json
│   └── README.md
│
└── README.md
```

## Architecture Overview

The platform follows a frontend-backend architecture.

The frontend is responsible for the user interface, navigation, progress tracking and overall user experience. The backend provides course, module and quiz data through Flask API endpoints. Course content is stored in structured JSON files, which are read by the backend and supplied to the frontend when required.

This separation allows content and application logic to be managed independently from the user interface.

## Data Flow

1. Course, module and quiz content is stored in JSON files.
2. Flask reads the JSON files and exposes the data through API endpoints.
3. The frontend requests data from the backend.
4. Content is displayed to users through the interface.
5. User progress is stored locally using localStorage and updated as modules are completed.

## Key Technical Decisions

* Structured JSON files were used instead of hardcoded content to improve maintainability and scalability.
* Flask was chosen as a lightweight backend framework for serving course and quiz data.
* Progress tracking was implemented using localStorage to allow users to continue where they left off.
* Responsive layouts were developed to support both desktop and mobile users.
* Navigation and lesson progression were prioritised to create a clear learning experience.

## Key Features

* Course discovery and recommendation flow
* Course overview and module navigation
* Dynamic course and module content
* Quiz functionality
* Progress tracking
* Responsive mobile and desktop layouts
* Course completion certificate
* Structured backend API endpoints

## Running the Project

### Backend

1. Navigate to the backend folder.
2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Start the Flask server:

```bash
python app.py
```

The backend runs locally on:

```text
http://127.0.0.1:4000
```

### Frontend

Open the frontend files in a browser or run them using a local development server.

## Repository Documentation

Additional documentation is available within the project:

* Frontend README – frontend structure, design system and implementation details.
* Backend README – API endpoints, backend structure and data management.

## Contributors

* Kalaisanthi
* Jeanett

## Project Status

Completed as part of the Highsoft case assignment.
