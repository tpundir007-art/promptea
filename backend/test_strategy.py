from agents.technique import technique_agent
from agents.strategy import strategy_agent

user_prompt = "Write a blog on AI."

# Technique Agent
technique_result = technique_agent(user_prompt)

state = {
    "user_prompt": user_prompt,
    **technique_result,   # Adds selected_techniques and technique_reasoning
    "strategy": "",
    "draft_prompt": "",
    "critique": "",
    "refined_prompt": "",
    "explanation": "",
    "score": 0.0,
}

# Strategy Agent
state = strategy_agent(state)

print(state["strategy"])