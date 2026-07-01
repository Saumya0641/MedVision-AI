function SummaryBanner({ prediction }) {
  const detection = prediction.detections?.[0];

  return (
    <div className="bg-white rounded-3xl shadow-md p-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <p className="text-gray-500 text-sm">Diagnosis</p>

          <h2 className="text-4xl font-bold text-slate-900 mt-2">
            {detection?.disease || "Normal"}
          </h2>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Confidence</p>

          <h2 className="text-4xl font-bold text-violet-600 mt-2">
            {detection?.confidence || 0}%
          </h2>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Status</p>

          <div className="flex items-center mt-3">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>

            <span className="font-semibold">Analysis Complete</span>
          </div>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Inference</p>

          <h2 className="text-4xl font-bold text-slate-900 mt-2">
            {prediction.technical?.inference_time_ms || "--"} ms
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SummaryBanner;
