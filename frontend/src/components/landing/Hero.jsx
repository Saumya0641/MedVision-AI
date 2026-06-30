import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-screen bg-[#FAFAFC] overflow-hidden flex items-center">
      {/* Background Gradient */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-br from-violet-300/40 via-indigo-200/20 to-transparent blur-[140px]" />

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(to right,#000 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <span className="inline-flex rounded-full border border-violet-200 bg-white px-5 py-2 text-sm text-slate-600 shadow-sm">
            AI-powered Medical Imaging Platform
          </span>

          <h1 className="mt-10 text-6xl md:text-8xl font-bold tracking-tight leading-none">
            Chest X-ray
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-fuchsia-500 bg-clip-text text-transparent">
              Intelligence
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-xl text-slate-500 leading-9">
            Detect lung diseases using advanced computer vision, generate
            structured AI reports, and assist clinicians with faster diagnostic
            workflows.
          </p>

          <div className="mt-14 flex justify-center gap-5">
            <Link
              to="/dashboard"
              className="rounded-2xl bg-slate-900 text-white px-8 py-4 font-semibold hover:scale-105 transition"
            >
              Start Analysis
            </Link>

            <button className="rounded-2xl border border-slate-300 bg-white px-8 py-4 hover:bg-slate-100 transition flex items-center gap-2">
              Learn More
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.2,
          }}
          className="mt-24 flex justify-center"
        >
          <ChevronDown className="text-slate-400" size={32} />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
