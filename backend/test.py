from app.rag.generator import generate_answer

answer = generate_answer(
    context="Pneumonia is an infection of the lungs.",
    question="What is pneumonia?"
)

print(answer)