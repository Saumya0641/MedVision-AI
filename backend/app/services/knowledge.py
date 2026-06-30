from data.diseases import DISEASES


def enrich_findings(findings):
    """
    Adds medical information to each detected disease.
    """

    enriched = []

    for finding in findings:

        disease = finding["disease"]

        info = DISEASES.get(disease)

        if info:

            enriched.append({
                **finding,
                "display_name": info["display_name"],
                "description": info["description"],
                "severity": info["severity"],
                "symptoms": info["symptoms"],
                "possible_causes": info["possible_causes"],
                "recommended_tests": info["recommended_tests"],
                "treatment": info["treatment"],
            })

        else:
            enriched.append(finding)

    return enriched