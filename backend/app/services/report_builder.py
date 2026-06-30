from app.services.report import generate_report


def build_report(findings):

    report = generate_report(findings)

    return {
        "title": "MedVision AI Chest X-ray Report",
        "report": report
    }