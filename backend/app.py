from graph.workflow import workflow
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return {"message": "PrompTea Backend Running"}

@app.route("/generate", methods=["POST"])
def generate():

    data = request.get_json()

    user_prompt = data["prompt"]
    level = data.get("level", "Novice")

    state = {
        
        "user_prompt": user_prompt,
        "level": level,
        "selected_techniques": [],
        "technique_reasoning": "",

        "strategy": {},

        "draft_prompt": "",

        "critique": {},

        "refined_prompt": "",

        "explanation": {},

        "score": {},
    }

    result = workflow.invoke(state)

    return jsonify({
        "draft_prompt": result["draft_prompt"],
        "selected_techniques": result["selected_techniques"],
        "strategy": result["strategy"],
        "critique": result["critique"],
        "score": result["score"],
        "explanation": result["explanation"]
    })


if __name__ == "__main__":
    app.run(debug=True)