from helpers import ask_llm_json
from prompts.critic_prompt import SYSTEM_PROMPT


def critic_agent(state):
    """
    Reviews the refined prompt.
    """

    user_message = f"""
Original Prompt:
{state["user_prompt"]}

Detected Techniques:
{", ".join(state["selected_techniques"])}

Strategy:
{state["strategy"]}

Refined Prompt:
{state["draft_prompt"]}
"""

    state["critique"] = ask_llm_json(
        SYSTEM_PROMPT,
        user_message
    )

    return state