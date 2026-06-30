import { Activity, CheckCircle2, Clock } from "lucide-react";

function SummaryBanner({ prediction }) {
  if (!prediction || !prediction.detections?.length) return null;

  const topDetection = prediction.detections[0];

  return (
    <div
      className="
      rounded-[32px]
      bg-white
      border
      border-slate-200
      shadow-[0_20px_60px_rgba(15,23,42,.06)]
      p-8
    "
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Diagnosis */}
        <div>
          <p className="text-sm text-slate-500 mb-2">
            Diagnosis
          </p>

          <h2 className="text-3xl font-bold text-slate-900">
            {topDetection.disease}
          </h2>
        </div>

        {/* Confidence */}
        <div>
          <p className="text-sm text-slate-500 mb-2">
            Confidence
          </p>

          <h2 className="text-3xl font-bold text-violet-600">
            {topDetection.confidence}%
          </h2>
        </div>

        {/* Status */}
        <div className="flex items-center gap-3">

          <CheckCircle2
            className="text-green-500"
            size={28}
          />

          <div>

            <p className="text-sm text-slate-500">
              Status
            </p>

            <p className="font-semibold">
              Analysis Complete
            </p>

          </div>

        </div>

        {/* Inference */}

        <div className="flex items-center gap-3">

          <Clock
            className="text-indigo-500"
            size={28}
          />

          <div>

            <p className="text-sm text-slate-500">
              Inference
            </p>

            <p className="font-semibold">
              {prediction.technical?.inference_time || "--"}
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}

export default SummaryBanner;