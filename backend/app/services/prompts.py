def build_prompt(detections):

    if len(detections) == 0:
        return """
Generate a professional chest X-ray report.

No abnormalities were detected.

Mention:
- Findings
- Impression
- Recommendation
- Disclaimer
"""

    findings = ""

    for d in detections:

        findings += f"""
Disease: {d['disease']}
Confidence: {d['confidence']}%
"""

    prompt = f"""
You are an expert radiologist.

Generate a professional chest X-ray report.

Detected findings:

{findings}

The report should contain:

1. Findings
2. Impression
3. Recommendations
4. Disclaimer

Keep the report concise and professional.
"""

    return prompt