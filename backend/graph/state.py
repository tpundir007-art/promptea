from typing import TypedDict, Any


class PromptState(TypedDict):
    user_prompt: str

    selected_techniques: list[str]
    technique_reasoning: str

    strategy: dict[str, Any]

    draft_prompt: str

    critique: dict[str, Any]

    refined_prompt: str

    explanation: dict[str, Any]

    score: dict[str, Any]