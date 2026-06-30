import { Bot } from "lucide-react";

function AnnotatedImage({ prediction }) {
  if (!prediction) return null;

  const imagePath = prediction.annotated_image.replace(/\\/g, "/");

  return (
    <div
      className="
      rounded-[32px]
      bg-white
      border
      border-slate-200
      shadow-[0_20px_60px_rgba(15,23,42,.06)]
      overflow-hidden
      transition-all
      hover:-translate-y-1
      hover:shadow-[0_30px_80px_rgba(15,23,42,.08)]
    "
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">AI Detection</h3>

          <p className="text-sm text-slate-500 mt-1">
            AI annotated chest X-ray
          </p>
        </div>

        <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
          Processed
        </span>
      </div>

      {/* Image */}
      <div className="p-6">
        <div className="overflow-hidden rounded-3xl bg-slate-100">
          <img
            src={`http://127.0.0.1:8000/${imagePath}`}
            alt="AI Detection"
            className="
              w-full
              h-[420px]
              object-contain
              bg-black
              transition-transform
              duration-500
              hover:scale-105
            "
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-slate-100 px-6 py-4">
        <div className="flex items-center gap-2 text-slate-500">
          <Bot size={18} />
          <span className="text-sm">AI-generated detection overlay</span>
        </div>
      </div>
    </div>
  );
}

export default AnnotatedImage;
