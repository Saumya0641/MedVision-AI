from app.rag.retriever import retrieve
from app.rag.generator import generate_answer


def generate_summary(disease, confidence, findings):

    # Build a richer retrieval query
    query = f"""
    Disease: {disease}

    Findings:
    {findings}
    """

    docs = retrieve(query)

    context = "\n\n".join(
        doc.page_content
        for doc in docs
    )

    question = f"""
You are an expert radiologist.

Using ONLY the provided medical context, generate a professional report.

Detected Disease:
{disease}

Confidence:
{confidence:.2f}%

Detected Findings:
{findings}

Generate the report in this format:

## Clinical Summary

## Imaging Findings

## Clinical Significance

## Recommended Next Steps

## Patient-Friendly Explanation

## Disclaimer

Do not invent information outside the provided context.
"""

    return generate_answer(
        context=context,
        question=question
    )