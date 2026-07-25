import json

from langchain_groq import ChatGroq
from langchain_core.messages import SystemMessage, HumanMessage

from config import Config


# ==========================
# LLM
# ==========================

llm = ChatGroq(
    model=Config.MODEL_NAME,
    groq_api_key=Config.GROQ_API_KEY,
    temperature=Config.TEMPERATURE,
)


# ==========================
# Plain Text Response
# ==========================

def ask_llm(system_prompt: str, user_prompt: str) -> str:

    messages = [
        SystemMessage(content=system_prompt),
        HumanMessage(content=user_prompt),
    ]

    response = llm.invoke(messages)

    return response.content.strip()


# ==========================
# JSON Response
# ==========================

def ask_llm_json(system_prompt: str, user_prompt: str):

    response = ask_llm(system_prompt, user_prompt)

    # Remove markdown fences if present
    if response.startswith("```json"):
        response = response[len("```json"):]

    if response.startswith("```"):
        response = response[len("```"):]

    if response.endswith("```"):
        response = response[:-3]

    response = response.strip()

    return json.loads(response)


# ==========================
# Debug
# ==========================

def print_debug(title: str, content):

    if Config.DEBUG:
        print("\n" + "=" * 60)
        print(title)
        print("=" * 60)
        print(content)
        print("=" * 60 + "\n")