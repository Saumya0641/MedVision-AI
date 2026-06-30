from ultralytics import YOLO
import cv2
import os
import time

MODEL = YOLO("weights/best.pt")


def detect(image_path):

    start = time.time()

    results = MODEL(image_path, conf=0.30)

    end = time.time()
    inference_time = round((end - start) * 1000, 2)  # milliseconds

    detections = []

    annotated_image = results[0].plot()

    output_path = os.path.join(
        "outputs",
        os.path.basename(image_path)
    ).replace("\\", "/")

    cv2.imwrite(output_path, annotated_image)

    for box in results[0].boxes:

        confidence = float(box.conf[0])

        if confidence < 0.30:
            continue

        cls = int(box.cls[0])

        detections.append({
            "disease": MODEL.names[cls],
            "confidence": round(confidence * 100, 2),
            "bbox": [round(x, 2) for x in box.xyxy[0].tolist()]
        })

    return {
        "success": True,
        "findings": len(detections),
        "detections": detections,
        "annotated_image": output_path,

        "technical": {
            "model": "YOLO11",
            "confidence_threshold": 0.30,
            "total_detections": len(detections),
            "inference_time_ms": inference_time
        }
    }