from agents.technique import technique_agent
from agents.strategy import strategy_agent
from agents.refiner import refiner_agent
from agents.critic import critic_agent

user_prompt = "Write a blog on AI."

technique_result = technique_agent(user_prompt)

state = {
    "user_prompt": user_prompt,
    **technique_result,
    "strategy": {},
    "draft_prompt": "",
    "critique": {},
    "refined_prompt": "",
    "explanation": "",
    "score": 0.0,
}

state = strategy_agent(state)
state = refiner_agent(state)
state = critic_agent(state)

print(state["critique"])