from pydantic import BaseModel
from typing import List


class Finding(BaseModel):
    disease: str
    display_name: str
    confidence: float
    bbox: List[float]
    description: str
    severity: str
    symptoms: List[str]
    possible_causes: List[str]
    recommended_tests: List[str]
    treatment: List[str]


class Report(BaseModel):
    summary: str
    findings: List[str]
    recommendation: str
    disclaimer: str


class PredictionResponse(BaseModel):
    success: bool
    findings: List[Finding]
    report: Report
    annotated_image: str