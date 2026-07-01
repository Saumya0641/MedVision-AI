import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import UploadCard from "../components/upload/UploadCard";

import SummaryBanner from "../components/common/SummaryBanner";

import OriginalImage from "../components/viewer/OriginalImage";
import AnnotatedImage from "../components/viewer/AnnotatedImage";

import FindingsCard from "../components/findings/FindingsCard";
import ChatBot from "../components/chatbot/ChatBot";

import TechnicalCard from "../components/technical/TechnicalCard";

import { generatePDF } from "../utils/pdf";
import ReportCard from "../components/report/ReportCard";

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

      <main className="max-w-6xl mx-auto px-5 pt-24 pb-10 space-y-8">
        {!prediction ? (
          <UploadCard
            onPrediction={handlePrediction}
            setOriginalImage={setOriginalImage}
            clearPrediction={clearAnalysis}
          />
        ) : (
          <div className="bg-white rounded-2xl border shadow-sm p-5 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-green-600">
                ✓ Analysis Complete
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                Review the AI findings below or analyze another chest X-ray.
              </p>
            </div>

            <button
              onClick={clearAnalysis}
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition"
            >
              Analyze Another Image
            </button>
          </div>
        )}

        {prediction && <SummaryBanner prediction={prediction} />}

        {prediction && (
          <>
            {/* Image Comparison */}

            <section className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-widest text-violet-600 font-semibold">
                  Analysis
                </p>

                <h2 className="text-3xl font-bold mt-1">Image Comparison</h2>

                <p className="text-gray-500">
                  Compare the uploaded scan with the AI-annotated result.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <OriginalImage image={originalImage} />
                <AnnotatedImage prediction={prediction} />
              </div>
            </section>

            {/* Report + Chat */}

            <section className="space-y-5">
              <div>
                <h2 className="text-3xl font-bold">AI Report & Assistant</h2>

                <p className="text-gray-500">
                  Review the generated report and ask questions about your
                  analysis.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <ReportCard
                  report={prediction.report}
                  detections={prediction.detections}
                />

                <ChatBot prediction={prediction} />
              </div>
            </section>

            <div className="flex justify-end">
              <button
                onClick={() => generatePDF(prediction)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
              >
                📄 Download Report
              </button>
            </div>

            <TechnicalCard prediction={prediction} />
          </>
        )}
      </main> 

      <Footer />
    </div>
  );
}

export default Home;
