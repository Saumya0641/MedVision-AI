from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.api.upload import router as upload_router
from app.api.predict import router as predict_router
from app.api.chat import router as chat_router

app = FastAPI(
    title="MedVision AI",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/outputs", StaticFiles(directory="outputs"), name="outputs")

app.include_router(upload_router)
app.include_router(predict_router)
app.include_router(chat_router)

@app.get("/")
async def root():
    return {"message": "Welcome to MedVision AI"}