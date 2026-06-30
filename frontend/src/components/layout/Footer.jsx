function Footer() {
  return (
    <footer className="mt-16 bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">🩺 MedVision AI</h2>

            <p className="mt-3 text-sm leading-6">
              AI-powered chest X-ray analysis platform designed to assist
              healthcare professionals with disease detection, report
              generation, and medical insights.
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Features</h3>

            <ul className="space-y-2 text-sm">
              <li>✓ Chest X-ray Analysis</li>
              <li>✓ AI Disease Detection</li>
              <li>✓ Medical Report Generation</li>
              <li>✓ PDF Export</li>
              <li>✓ AI Medical Assistant</li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Disclaimer
            </h3>

            <p className="text-sm leading-6">
              MedVision AI is an AI-assisted decision support tool. It is not
              intended to replace professional medical diagnosis or clinical
              judgment.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2026 MedVision AI. All rights reserved.</p>

          <p>Built with ❤️ using React, FastAPI & YOLO11</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
