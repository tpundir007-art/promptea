from helpers import ask_llm

response = ask_llm(
    "You are a helpful assistant.",
    "Say hello in one sentence."
)

print(response)