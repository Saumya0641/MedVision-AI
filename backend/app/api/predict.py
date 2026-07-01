from fastapi import APIRouter, UploadFile, File

from app.services.image_service import save_uploaded_image
from app.services.detector import detect
from app.services.findings import build_findings
from app.services.knowledge import enrich_findings
from app.services.report_builder import build_report

# NEW
from app.rag.summarizer import generate_summary

router = APIRouter()


@router.post("/predict")
async def predict(file: UploadFile = File(...)):
    # Save uploaded image
    image_path = save_uploaded_image(file)

    # Run YOLO detection
    detection_result = detect(image_path)

    # Build findings
    findings = build_findings(detection_result["detections"])
    findings = enrich_findings(findings)

    # Build rule-based report
    report = build_report(findings)

    # -----------------------------
    # Generate RAG Clinical Summary
    # -----------------------------

    detections = detection_result["detections"]

    if detections:
        best_detection = max(
            detections,
            key=lambda x: x["confidence"]
        )

        disease = best_detection["disease"]
        confidence = best_detection["confidence"]

    else:
        disease = "Normal"
        confidence = 100.0

    summary = generate_summary(
    disease=disease,
    confidence=confidence,
    findings=findings
    )

    # Return response
    return {
        "success": True,
        "filename": file.filename,
        "annotated_image": detection_result["annotated_image"],
        "detections": detections,
        "findings": findings,
        "report": report,

        # NEW
        "summary": summary,
        "disease": disease,
        "confidence": confidence,
    }