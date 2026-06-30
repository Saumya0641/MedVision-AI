function ReportCard({ report }) {
  if (!report) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Medical Report</h2>

        <p className="text-gray-500">No report available.</p>
      </div>
    );
  }

  const data = report.report;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">📋 {report.title}</h2>

      <div className="space-y-6">
        {/* Summary */}

        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="font-semibold text-lg">Summary</h3>

          <p className="text-gray-600 mt-2">{data.summary}</p>
        </div>

        {/* Findings */}

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-semibold text-lg">Findings</h3>

          <ul className="list-disc list-inside mt-2 text-gray-600">
            {data.findings.map((finding, index) => (
              <li key={index}>{finding}</li>
            ))}
          </ul>
        </div>

        {/* Recommendation */}

        <div className="border-l-4 border-yellow-500 pl-4">
          <h3 className="font-semibold text-lg">Recommendation</h3>

          <p className="text-gray-600 mt-2">{data.recommendation}</p>
        </div>

        {/* Disclaimer */}

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="font-semibold text-red-700">Disclaimer</h3>

          <p className="text-sm text-red-600 mt-2">{data.disclaimer}</p>
        </div>
      </div>
    </div>
  );
}

export default ReportCard;
