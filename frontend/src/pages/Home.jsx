import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import UploadCard from "../components/upload/UploadCard";
import OriginalImage from "../components/viewer/OriginalImage";
import AnnotatedImage from "../components/viewer/AnnotatedImage";
import FindingsCard from "../components/findings/FindingsCard";
import ReportCard from "../components/report/ReportCard";
import { generatePDF } from "../utils/pdf";
import ChatBot from "../components/chatbot/ChatBot";
import TechnicalCard from "../components/technical/TechnicalCard";
import Footer from "../components/layout/Footer";
import SummaryBanner from "../components/common/SummaryBanner";

function Home() {
  const [prediction, setPrediction] = useState(null);
  const [originalImage, setOriginalImage] = useState(null);

  const handlePrediction = (result) => {
    setPrediction(result);
  };

  const clearAnalysis = () => {
    setPrediction(null);
    setOriginalImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFAFC] to-[#F4F6FB]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-28 pb-12 space-y-12">
        <UploadCard
          onPrediction={handlePrediction}
          setOriginalImage={setOriginalImage}
          clearPrediction={clearAnalysis}
        />

        {prediction && <SummaryBanner prediction={prediction} />}

        {/* Image Viewer */}
        {prediction && (
          <>
          <section className="space-y-8">
  <div className="flex items-end justify-between">
    <div>
      <p className="text-sm uppercase tracking-[0.2em] text-violet-600 font-semibold">
        Analysis
      </p>

      <h2 className="text-4xl font-bold mt-2">
        Image Comparison
      </h2>

      <p className="text-slate-500 mt-2">
        Compare the original scan with AI-generated annotations.
      </p>
    </div>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <OriginalImage image={originalImage} />
    <AnnotatedImage prediction={prediction} />
  </div>
</section>
          

            {/* Findings & Report */}

            <section className="space-y-5">
              <div>
                <h2 className="text-3xl font-bold text-slate-800">
                  Analysis Results
                </h2>

                <p className="text-gray-500">
                  AI findings and generated medical report.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <FindingsCard detections={prediction.detections} />
                <ReportCard report={prediction.report} />
              </div>
            </section>

            {/* Download Button */}

            <div className="flex justify-end">
              <button
                onClick={() => generatePDF(prediction)}
                className="
      bg-blue-600
      hover:bg-blue-700
      text-white
      px-6
      py-3
      rounded-xl
      shadow-md
      transition
    "
              >
                📄 Download Report
              </button>
            </div>
          </>
        )}
        {prediction && <TechnicalCard prediction={prediction} />}
      </main>
      <ChatBot />
      <Footer />
    </div>
  );
}

export default Home;
