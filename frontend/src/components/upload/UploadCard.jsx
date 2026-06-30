import { useRef, useState } from "react";
import { predictImage } from "../../services/api";
import { motion } from "framer-motion";
import { Upload, Activity, CheckCircle2, X } from "lucide-react";

function UploadCard({ onPrediction, setOriginalImage, clearPrediction }) {
  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleBrowse = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedFile(file);
  };

  const removeImage = () => {
    setSelectedFile(null);
    fileInputRef.current.value = "";

    setOriginalImage(null);
    clearPrediction();
  };

  const analyzeImage = async () => {
    if (!selectedFile) return;

    try {
      setLoading(true);

      const result = await predictImage(selectedFile);

      const imageUrl = URL.createObjectURL(selectedFile);

      setOriginalImage(imageUrl);

      onPrediction(result);
    } catch (error) {
      console.error(error);
      alert("Failed to analyze image.");
    } finally {
      setLoading(false);
    }
  };

 return (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="max-w-5xl mx-auto"
  >
    <div
      className="
      rounded-[32px]
      border
      border-slate-200
      bg-white
      shadow-[0_20px_60px_rgba(15,23,42,.06)]
      overflow-hidden
    "
    >
      {/* Header */}

      <div className="px-10 pt-10 text-center">

        <div className="mx-auto w-20 h-20 rounded-full bg-violet-100 flex items-center justify-center">

          <Activity
            className="text-violet-600"
            size={38}
          />

        </div>

        <h2 className="mt-6 text-4xl font-bold text-slate-900">
          Chest X-ray Analysis
        </h2>

        <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
          Upload a chest X-ray image and let MedVision AI
          analyze it for abnormalities, generate a clinical
          report and highlight important findings.
        </p>

      </div>

      {/* Upload Area */}

      <div className="p-10">

        {!selectedFile ? (

          <div
            onClick={handleBrowse}
            className="
            rounded-[28px]
            border-2
            border-dashed
            border-violet-300
            bg-violet-50/40
            py-20
            cursor-pointer
            hover:border-violet-500
            hover:bg-violet-50
            transition
            text-center
          "
          >

            <Upload
              className="mx-auto text-violet-600"
              size={60}
            />

            <h3 className="mt-6 text-2xl font-semibold">
              Upload Chest X-ray
            </h3>

            <p className="mt-3 text-slate-500">
              Drag & Drop or click to browse
            </p>

            <button
              className="
              mt-8
              rounded-2xl
              bg-slate-900
              text-white
              px-8
              py-4
              font-medium
            "
            >
              Browse Files
            </button>

            <div className="mt-8 flex justify-center gap-6 text-sm text-slate-500">

              <span>PNG</span>

              <span>JPG</span>

              <span>JPEG</span>

            </div>

          </div>

        ) : (

          <motion.div
            initial={{ scale: .96 }}
            animate={{ scale: 1 }}
            className="
            rounded-[28px]
            border
            border-green-200
            bg-green-50
            p-10
            text-center
          "
          >

            <CheckCircle2
              className="mx-auto text-green-600"
              size={60}
            />

            <h3 className="mt-6 text-2xl font-semibold">
              Ready for Analysis
            </h3>

            <p className="mt-4 text-slate-600 break-all">
              {selectedFile.name}
            </p>

            <div className="mt-8 flex justify-center gap-5">

              <button
                onClick={removeImage}
                disabled={loading}
                className="
                rounded-2xl
                border
                border-slate-300
                px-6
                py-3
                flex
                items-center
                gap-2
                hover:bg-white
              "
              >
                <X size={18} />

                Remove
              </button>

              <button
                onClick={analyzeImage}
                disabled={loading}
                className="
                rounded-2xl
                bg-slate-900
                text-white
                px-8
                py-3
                hover:scale-105
                transition
              "
              >

                {loading ? (

                  <div className="flex items-center gap-3">

                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />

                    Analyzing...

                  </div>

                ) : (

                  "Start Analysis"

                )}

              </button>

            </div>

          </motion.div>

        )}

      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

    </div>
  </motion.div>
);
}
export default UploadCard;