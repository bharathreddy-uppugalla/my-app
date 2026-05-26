import { Link } from "react-router-dom";

import {

    ArrowRight,
    Award,
    Target,
    Lightbulb,
    Shield,
} from "lucide-react";


const whyPoints = [
    {
        icon: Target,
    title: "Outcome-Focused",
    desc: "Every program is designed around measurable business results, not just participation.",
  },
  {
    icon: Award,
    title: "Industry-Proven",
    desc: "Curricula developed with and validated by senior leaders across multiple sectors.",
  },
  {
    icon: Lightbulb,
    title: "Tailored Solutions",
    desc: "No cookie-cutter programs — we customise to your team's specific gaps and goals.",
  },
  {
    icon: Shield,
    title: "Trusted Partner",
    desc: "Long-term relationships with businesses who return to us for every growth challenge.",
  },
];
export default function WhyVisgrow() {
  return (
    <section className="py-24 text-white" style={{
      background: "linear-gradient(135deg, #6918DC 0%, #B625B9 50%, #E94B6C 100%)"
    }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <p className="uppercase tracking-[0.2em] text-white/70 text-xs font-bold mb-5">
            Why Visgrow
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Helping Industry Build Stronger Teams
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-10">
            We connect businesses with talent, learning opportunities, and strategic
            support that create lasting growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white font-bold px-7 py-3.5 rounded-full hover:scale-105 transition"
            style={{ color: "#6918DC" }}
          >
            Talk to Our Team <ArrowRight size={16} />
          </Link>
        </div>
 
        {/* Right */}
        <div className="grid sm:grid-cols-2 gap-4">
          {whyPoints.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="rounded-2xl p-6 backdrop-blur-xl"
                style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  <Icon size={20} className="text-white" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-white text-base mb-1">{p.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}