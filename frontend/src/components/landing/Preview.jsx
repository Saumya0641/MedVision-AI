import { motion } from "framer-motion";
import { Activity, FileText, Bot, ShieldCheck } from "lucide-react";

function Preview() {
  return (
    <section className="relative -mt-28 pb-32 bg-[#fafafc]">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        animate={{
          y: [0, -10, 0],
        }}
        style={{
          animationDuration: "6s",
        }}
        className="max-w-6xl mx-auto px-6"
      >
        <div
          className="
          rounded-[36px]
          bg-white/80
          backdrop-blur-xl
          border
          border-white
          shadow-[0_30px_80px_rgba(15,23,42,0.08)]
          overflow-hidden
        "
        >
          {/* Top Bar */}

          <div className="flex items-center gap-2 px-6 py-5 border-b">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>

            <div className="ml-5 text-slate-400 text-sm">
              MedVision Dashboard
            </div>
          </div>

          <div className="grid lg:grid-cols-2">
            {/* Left */}

            <div className="p-10">
              <div className="h-72 rounded-3xl bg-gradient-to-br from-slate-100 to-slate-50 border flex items-center justify-center">
                <Activity size={80} className="text-violet-500" />
              </div>
            </div>

            {/* Right */}

            <div className="p-10 space-y-5">
              <div className="rounded-2xl border p-5">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-green-500" />

                  <div>
                    <h3 className="font-semibold">AI Detection</h3>

                    <p className="text-sm text-slate-500">Pneumonia detected</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border p-5">
                <div className="flex items-center gap-3">
                  <FileText className="text-violet-600" />

                  <div>
                    <h3 className="font-semibold">Medical Report</h3>

                    <p className="text-sm text-slate-500">
                      AI generated report
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border p-5">
                <div className="flex items-center gap-3">
                  <Bot className="text-indigo-600" />

                  <div>
                    <h3 className="font-semibold">AI Assistant</h3>

                    <p className="text-sm text-slate-500">
                      Ask questions about the report
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Preview;
