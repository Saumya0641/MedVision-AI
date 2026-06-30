import { motion } from "framer-motion";
import { Activity, ArrowRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const dashboard = location.pathname === "/dashboard";

  return (
    <motion.header
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      bg-white/70
      backdrop-blur-xl
      border-b
      border-slate-200/70
    "
    >
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">
        {/* Logo */}

        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg">
            <Activity className="text-white" size={22} />
          </div>

          <div>
            <h1 className="font-bold text-lg text-slate-900">MedVision AI</h1>

            <p className="text-xs text-slate-500">Chest X-ray Intelligence</p>
          </div>
        </Link>

        {/* Navigation */}

        <nav className="hidden md:flex items-center gap-10">
          <a
            href="#features"
            className="text-slate-600 hover:text-black transition"
          >
            Features
          </a>

          <a
            href="#technology"
            className="text-slate-600 hover:text-black transition"
          >
            Technology
          </a>

          <a
            href="#about"
            className="text-slate-600 hover:text-black transition"
          >
            About
          </a>
        </nav>

        {/* CTA */}

        {!dashboard && (
          <button
            onClick={() => navigate("/dashboard")}
            className="
            rounded-2xl
            bg-slate-900
            text-white
            px-6
            py-3
            font-medium
            flex
            items-center
            gap-2
            hover:scale-105
            transition
          "
          >
            Start Analysis
            <ArrowRight size={18} />
          </button>
        )}
      </div>
    </motion.header>
  );
}

export default Navbar;
