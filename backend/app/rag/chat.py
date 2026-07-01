from .retriever import retrieve
from .generator import generate_answer


def ask(question, disease=None, report=None):

    query = question

    if disease:
        query = f"{disease}\n{question}"

    docs = retrieve(query)

    context = "\n\n".join(
        doc.page_content
        for doc in docs
    )
    return generate_answer(
    context=context,
    report=report,
    question=question
    )