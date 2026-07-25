from helpers import ask_llm_json
from prompts.technique_prompt import SYSTEM_PROMPT


def technique_agent(user_prompt: str):
    """
    Analyses the user's prompt and returns
    recommended prompt engineering techniques.
    """

    return ask_llm_json(
        SYSTEM_PROMPT,
        user_prompt
    )