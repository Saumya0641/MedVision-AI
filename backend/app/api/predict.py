from fastapi import APIRouter, UploadFile, File

from app.services.image_service import save_uploaded_image
from app.services.detector import detect
from app.services.findings import build_findings
from app.services.knowledge import enrich_findings
from app.services.report_builder import build_report

router = APIRouter()


@router.post("/predict")
async def predict(file: UploadFile = File(...)):
    image_path = save_uploaded_image(file)

    detection_result = detect(image_path)

    findings = build_findings(detection_result["detections"])
    findings = enrich_findings(findings)

    report = build_report(findings)

    return {
        "success": True,
        "filename": file.filename,
        "annotated_image": detection_result["annotated_image"],
        "detections": detection_result["detections"],
        "findings": findings,
        "report": report,
        
    }