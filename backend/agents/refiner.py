from helpers import ask_llm
from prompts.refiner_prompt import SYSTEM_PROMPT


def refiner_agent(state):
    """
    Uses the Strategy Agent's plan to rewrite
    the user's prompt.
    """

    user_message = f"""
Original Prompt:
{state["user_prompt"]}

Detected Techniques:
{", ".join(state["selected_techniques"])}

Refinement Strategy:
{state["strategy"]}
"""

    refined_prompt = ask_llm(
        SYSTEM_PROMPT,
        user_message
    )

    state["draft_prompt"] = refined_prompt

    return state