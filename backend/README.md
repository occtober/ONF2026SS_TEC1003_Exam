# Highsoft Course Portal Backend

This folder contains the backend for the Highsoft Course Portal, developed as part of the Highsoft case assignment.

The backend provides course, quiz and module data for the frontend through Flask API endpoints. Data is stored in JSON files inside the `data` folder.

## Tech Stack

* Python
* Flask
* JSON

## Project Structure

```text
backend/
├── app.py
├── requirements.txt
├── README.md
├── .gitignore
└── data/
    ├── courses.json
    ├── modules.json
    └── quiz-cards.json
```

## How to Run

1. Open the backend folder in VS Code.
2. Open a terminal in the backend folder.
3. Install dependencies:

```bash
python -m pip install -r requirements.txt
```

4. Start the backend:

```bash
python app.py
```

The backend runs locally at:

```text
http://127.0.0.1:4000
```

## API Endpoints

* `GET /api/courses`
  Returns all available courses.

* `GET /api/courses?skillLevel=beginner`
  Returns courses filtered by skill level.

* `GET /api/courses/1`
  Returns details for course 1.

* `GET /api/quiz`
  Returns quiz card data.

* `GET /api/courses/1/modules`
  Returns all modules for course 1.

* `GET /api/courses/1/modules/1`
  Returns module 1 for course 1.

* `GET /health`
  Returns server status.

## Data Flow

1. Course, module and quiz content is stored in JSON files.
2. Flask reads the JSON data.
3. API endpoints return the data as JSON.
4. The frontend can use this data to display courses, quiz cards and module content.

## Notes

* The backend currently supports a simple course structure.
* Data is stored locally in JSON files rather than a database.
* The structure makes it easier to expand the platform with more courses and modules later.
