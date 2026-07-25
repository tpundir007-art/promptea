from langgraph.graph import StateGraph, END

from graph.state import PromptState

from agents.technique import technique_agent
from agents.strategy import strategy_agent
from agents.refiner import refiner_agent
from agents.critic import critic_agent
from agents.scorecard import scorecard_agent
from agents.explainability import explainability_agent


# ----------------------------
# Wrapper Nodes
# ----------------------------

def technique_node(state: PromptState):
    """
    Runs the Technique Agent and updates the shared state.
    """
    result = technique_agent(state["user_prompt"])

    state["selected_techniques"] = result["selected_techniques"]
    state["technique_reasoning"] = result["technique_reasoning"]

    return state


def strategy_node(state: PromptState):
    return strategy_agent(state)


def refiner_node(state: PromptState):
    return refiner_agent(state)


def critic_node(state: PromptState):
    return critic_agent(state)


def scorecard_node(state: PromptState):
    return scorecard_agent(state)


def explainability_node(state: PromptState):
    return explainability_agent(state)


# ----------------------------
# Build Graph
# ----------------------------

builder = StateGraph(PromptState)

builder.add_node("Technique", technique_node)
builder.add_node("Strategy", strategy_node)
builder.add_node("Refiner", refiner_node)
builder.add_node("Critic", critic_node)
builder.add_node("Scorecard", scorecard_node)
builder.add_node("Explainability", explainability_node)


builder.set_entry_point("Technique")

builder.add_edge("Technique", "Strategy")
builder.add_edge("Strategy", "Refiner")
builder.add_edge("Refiner", "Critic")
builder.add_edge("Critic", "Scorecard")
builder.add_edge("Scorecard", "Explainability")
builder.add_edge("Explainability", END)


workflow = builder.compile()