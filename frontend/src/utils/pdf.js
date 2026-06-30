import jsPDF from "jspdf";

export function generatePDF(prediction) {
  const doc = new jsPDF();

  let y = 20;

  // Title
  doc.setFontSize(22);
  doc.text("MedVision AI Report", 20, y);

  y += 12;

  doc.setFontSize(12);

  doc.text(`Generated: ${new Date().toLocaleString()}`, 20, y);

  y += 15;

  // Findings

  doc.setFontSize(16);
  doc.text("Detected Findings", 20, y);

  y += 10;

  prediction.detections.forEach((item) => {
    doc.setFontSize(12);

    doc.text(`• ${item.disease} (${item.confidence}%)`, 25, y);

    y += 8;
  });

  y += 8;

  // Report

  doc.setFontSize(16);
  doc.text("Medical Report", 20, y);

  y += 10;

  const report = prediction.report.report;

  doc.setFontSize(12);

  doc.text("Summary:", 20, y);

  y += 8;

  doc.text(report.summary, 25, y);

  y += 12;

  doc.text("Recommendation:", 20, y);

  y += 8;

  doc.text(report.recommendation, 25, y);

  y += 12;

  doc.text("Disclaimer:", 20, y);

  y += 8;

  doc.text(report.disclaimer, 25, y, {
    maxWidth: 160,
  });

  doc.save("MedVision_Report.pdf");
}
