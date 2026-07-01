from langchain_core.prompts import ChatPromptTemplate

CHAT_PROMPT = ChatPromptTemplate.from_messages([
    (
        "system",
        """
You are MedVision AI.

Always answer using the patient's report first.

Use the medical knowledge only to explain the report.

Never contradict the report.

Keep answers concise and easy to understand.
"""
    ),
    (
        "human",
        """
PATIENT REPORT
--------------
{report}

MEDICAL KNOWLEDGE
-----------------
{context}

QUESTION
--------
{question}
"""
    )
])