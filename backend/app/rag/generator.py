import os

from dotenv import load_dotenv
from langchain_openai import ChatOpenAI

from app.rag.prompts.chat_prompt import CHAT_PROMPT

load_dotenv()

llm = ChatOpenAI(
    model="openrouter/free",
    api_key=os.getenv("OPENROUTER_API_KEY"),
    base_url=os.getenv("OPENROUTER_BASE_URL"),
    temperature=0,
)


def generate_answer(
    context: str,
    question: str,
    report: str = "",
) -> str:
    """
    Generate an answer from retrieved context using OpenRouter.
    """

    messages = CHAT_PROMPT.format_messages(
    report=report,
    context=context,
    question=question,
    )

    response = llm.invoke(messages)

    return response.content