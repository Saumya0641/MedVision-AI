function FindingsCard({ detections }) {
  if (!detections || detections.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">AI Findings</h2>

        <p className="text-gray-500">No findings detected.</p>
      </div>
    );
  }

  const getBadgeColor = (confidence) => {
    if (confidence >= 90) return "bg-green-100 text-green-700";

    if (confidence >= 70) return "bg-yellow-100 text-yellow-700";

    return "bg-red-100 text-red-700";
  };

  const getStatus = (confidence) => {
    if (confidence >= 90) return "High Confidence";

    if (confidence >= 70) return "Moderate Confidence";

    return "Low Confidence";
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">AI Findings</h2>

      <div className="space-y-5">
        {detections.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-5 hover:shadow-md transition"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">🫁 {item.disease}</h3>

                <p className="text-gray-500 mt-1">
                  {getStatus(item.confidence)}
                </p>
              </div>

              <span
                className={`px-4 py-2 rounded-full font-semibold ${getBadgeColor(
                  item.confidence,
                )}`}
              >
                {item.confidence}%
              </span>
            </div>

            {/* Progress Bar */}

            <div className="mt-5">
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full"
                  style={{
                    width: `${item.confidence}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FindingsCard;
