def generate_report(findings):

    # No disease detected
    if len(findings) == 0:

        return {
            "summary": "No abnormalities detected.",
            "findings": [],
            "recommendation": "No significant abnormality detected.",
            "disclaimer": "This AI-generated report is for assistance only and is not a medical diagnosis."
        }

    report_findings = []

    for finding in findings:

        report_findings.append(
            f"{finding['display_name']} ({finding['confidence']}%)"
        )

    return {

        "summary": f"{len(findings)} finding(s) detected.",

        "findings": report_findings,

        "recommendation": "Please consult a qualified radiologist for confirmation.",

        "disclaimer": "This AI-generated report is for assistance only and should not replace professional medical advice."
    }