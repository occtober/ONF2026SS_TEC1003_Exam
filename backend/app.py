from flask import Flask, jsonify, request
import json
from pathlib import Path

app = Flask(__name__, static_folder="../frontend", static_url_path="")

BASE_DIR = Path(__file__).parent
COURSES_FILE = BASE_DIR / "data" / "courses.json"
QUIZ_FILE = BASE_DIR / "data" / "quiz-cards.json"
MODULES_FILE = BASE_DIR / "data" / "modules.json"


def load_json(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        return json.load(file)


@app.route("/api/quiz", methods=["GET"])
def get_quiz():
    return jsonify(load_json(QUIZ_FILE))


@app.route("/api/courses", methods=["GET"])
def get_courses():
    courses = load_json(COURSES_FILE)
    skill_level = request.args.get("skillLevel")
    if skill_level:
        courses = [ c for c in courses if c["skillLevel"] == skill_level ]
    return jsonify(courses)    


@app.route("/api/courses/<int:course_id>", methods=["GET"])
def get_course(course_id):
    courses = load_json(COURSES_FILE)
    course = next((course for course in courses if course["id"] == course_id), None)

    if course is None:
        return jsonify({"error": "Course not found"}), 404

    return jsonify(course)


@app.route("/api/courses/<int:course_id>/modules", methods=["GET"])
def get_course_modules(course_id):
    modules = load_json(MODULES_FILE)
    return jsonify([module for module in modules if module["courseId"] == course_id])


@app.route("/api/courses/<int:course_id>/modules/<int:module_id>", methods=["GET"])
def get_module(course_id, module_id):
    modules = load_json(MODULES_FILE)
    module = next(
        (
            module for module in modules
            if module["courseId"] == course_id and module["id"] == module_id
        ),
        None
    )

    if module is None:
        return jsonify({"error": "Module not found"}), 404

    return jsonify(module)


@app.route("/")
def index():
    return app.send_static_file("index.html")

@app.route("/health")
def health():
    return jsonify({"status": "ok"}), 200

if __name__ == "__main__":
    app.run(debug=True, port=4000)
