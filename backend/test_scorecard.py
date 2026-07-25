from agents.technique import technique_agent
from agents.strategy import strategy_agent
from agents.refiner import refiner_agent
from agents.critic import critic_agent
from agents.scorecard import scorecard_agent

user_prompt = "Write a blog on AI."

state = {
    "user_prompt": user_prompt,
    **technique_agent(user_prompt),
    "strategy": {},
    "draft_prompt": "",
    "critique": {},
    "refined_prompt": "",
    "explanation": "",
    "score": {},
}

state = strategy_agent(state)
state = refiner_agent(state)
state = critic_agent(state)
state = scorecard_agent(state)

print(state["score"])