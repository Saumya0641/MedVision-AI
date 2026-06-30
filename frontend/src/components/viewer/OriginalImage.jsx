import { ImageIcon } from "lucide-react";

function OriginalImage({ image }) {
  if (!image) return null;

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
          <h3 className="text-xl font-semibold text-slate-900">
            Original Scan
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Uploaded chest X-ray image
          </p>
        </div>

        <span className="rounded-full bg-slate-100 px-4 py-1 text-sm font-medium text-slate-700">
          Uploaded
        </span>
      </div>

      {/* Image */}
      <div className="p-6">
        <div className="overflow-hidden rounded-3xl bg-slate-100">
          <img
            src={image}
            alt="Original Chest X-ray"
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
          <ImageIcon size={18} />
          <span className="text-sm">Original image uploaded by user</span>
        </div>
      </div>
    </div>
  );
}

export default OriginalImage;
