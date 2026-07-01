from fastapi import APIRouter
from pydantic import BaseModel

from app.rag.chat import ask

router = APIRouter()


class ChatRequest(BaseModel):
    question: str
    disease: str | None = None
    report: str | None = None


@router.post("/chat")
def chat(request: ChatRequest):

    answer = ask(
    question=request.question,
    disease=request.disease,
    report=request.report,
)

    return {
        "answer": answer
    }

# from fastapi import APIRouter
# from pydantic import BaseModel

# router = APIRouter()

# class ChatRequest(BaseModel):
#     question: str
#     disease: str | None = None

# @router.post("/chat")
# def chat(request: ChatRequest):

#     disease = (request.disease or "").lower()
#     question = request.question.lower()

#     if disease == "pneumonia":
#         answer = (
#             "Pneumonia is an infection of the lungs. "
#             "The AI detected patterns consistent with pneumonia in this X-ray."
#         )

#     elif disease == "effusion":
#         answer = (
#             "Pleural effusion is a buildup of fluid between the lungs and the chest wall."
#         )

#     elif disease == "emphysema":
#         answer = (
#             "Emphysema is a chronic lung disease that damages the air sacs and makes breathing difficult."
#         )

#     else:
#         answer = (
#             "No specific disease information is available for this scan."
#         )

#     return {"answer": answer}