import { useState } from "react";

function TechnicalCard({ prediction }) {
  const [open, setOpen] = useState(false);

  if (!prediction) return null;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center"
      >
        <h2 className="text-2xl font-bold">🔧 Technical Details</h2>

        <span className="text-2xl">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="border rounded-xl p-4">
              <p className="text-gray-500 text-sm">Model</p>
              <p className="font-semibold">
                {prediction.technical?.model || "YOLO11"}
              </p>
            </div>

            <div className="border rounded-xl p-4">
              <p className="text-gray-500 text-sm">Detections</p>
              <p className="font-semibold">
                {prediction.technical?.total_detections ??
                  prediction.detections.length}
              </p>
            </div>

            <div className="border rounded-xl p-4">
              <p className="text-gray-500 text-sm">Confidence Threshold</p>
              <p className="font-semibold">
                {prediction.technical?.confidence_threshold ?? "0.30"}
              </p>
            </div>

            <div className="border rounded-xl p-4">
              <p className="text-gray-500 text-sm">Filename</p>
              <p className="font-semibold break-all">{prediction.filename}</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4">Bounding Boxes</h3>

          <div className="space-y-3">
            {prediction.detections.map((item, index) => (
              <div key={index} className="border rounded-lg p-4">
                <p>
                  <strong>Disease:</strong> {item.disease}
                </p>

                <p>
                  <strong>Confidence:</strong> {item.confidence}%
                </p>

                <p>
                  <strong>Bounding Box:</strong>
                </p>

                <code className="text-blue-700 text-sm">
                  [{item.bbox.join(", ")}]
                </code>
              </div>
            ))}
          </div>
          <br />
          <div className="border rounded-xl p-4">
            <p className="text-gray-500 text-sm">Inference Time</p>

            <p className="font-semibold">
              {prediction.technical?.inference_time_ms ?? "--"} ms
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default TechnicalCard;
