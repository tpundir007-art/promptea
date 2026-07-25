from agents.technique import technique_agent
from agents.strategy import strategy_agent
from agents.refiner import refiner_agent

user_prompt = "Write a blog on AI."

# Technique
technique_result = technique_agent(user_prompt)

state = {
    "user_prompt": user_prompt,
    **technique_result,
    "strategy": "",
    "draft_prompt": "",
    "critique": "",
    "refined_prompt": "",
    "explanation": "",
    "score": 0.0,
}

# Strategy
state = strategy_agent(state)

# Refiner
state = refiner_agent(state)

print("\n==========================")
print("REFINED PROMPT")
print("==========================\n")

print(state["draft_prompt"])