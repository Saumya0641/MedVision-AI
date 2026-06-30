def build_findings(detections):
    """
    Convert raw YOLO detections into a standardized format.
    """

    findings = []

    for detection in detections:

        findings.append({
            "disease": detection["disease"],
            "confidence": round(detection["confidence"], 2),
            "bbox": detection["bbox"]
        })

    return findings