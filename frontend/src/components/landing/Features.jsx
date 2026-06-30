import { motion } from "framer-motion";
import { Activity, FileText, Bot, Cpu } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Disease Detection",
    description:
      "Advanced YOLO model trained for intelligent chest X-ray analysis.",
  },
  {
    icon: FileText,
    title: "Medical Reports",
    description: "Generate structured AI-assisted reports in seconds.",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    description: "Ask questions and understand findings instantly.",
  },
  {
    icon: Cpu,
    title: "Technical Insights",
    description: "Bounding boxes, confidence scores and inference metrics.",
  },
];

function Features() {
  return (
    <section className="py-36 bg-[#fafafc]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-violet-600 font-semibold uppercase tracking-widest">
            Features
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-slate-900">
            Everything you need.
          </h2>

          <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto">
            Built to help clinicians analyze chest X-rays with speed, simplicity
            and confidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                }}
                className="
                  rounded-[32px]
                  bg-white
                  border
                  border-slate-200
                  p-10
                  shadow-sm
                  transition
                "
              >
                <div className="w-16 h-16 rounded-2xl bg-violet-100 flex items-center justify-center">
                  <Icon className="text-violet-600" size={30} />
                </div>

                <h3 className="text-2xl font-semibold mt-8">{feature.title}</h3>

                <p className="mt-4 text-slate-500 leading-7">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
