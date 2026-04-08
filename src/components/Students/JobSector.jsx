import React, { useState } from "react";
import { Link } from "react-router";
import {
  Code, Calculator, Wrench, Heart, TrendingUp, Users,
  Building2, Palette, GraduationCap, Plane, Scale, Cpu,
  ArrowRight
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const sectors = [
  {
    title: "Information Technology",
    icon: Code,
    demand: "High",
    avgSalary: "$85k – $150k",
    desc: "Build the digital backbone of modern business.",
  },
  {
    title: "Accounting & Finance",
    icon: Calculator,
    demand: "Very High",
    avgSalary: "$65k – $120k",
    desc: "Drive financial strategy and reporting at scale.",
  },
  {
    title: "Engineering",
    icon: Wrench,
    demand: "High",
    avgSalary: "$75k – $130k",
    desc: "Design systems and solve complex technical challenges.",
  },
  {
    title: "Healthcare & Medical",
    icon: Heart,
    demand: "Very High",
    avgSalary: "$70k – $180k",
    desc: "Make a real difference in people's lives every day.",
  },
  {
    title: "Marketing & Sales",
    icon: TrendingUp,
    demand: "High",
    avgSalary: "$55k – $110k",
    desc: "Connect brands to audiences and drive growth.",
  },
  {
    title: "Human Resources",
    icon: Users,
    demand: "Moderate",
    avgSalary: "$60k – $100k",
    desc: "Shape workplace culture and talent strategy.",
  },
  {
    title: "Business & Management",
    icon: Building2,
    demand: "High",
    avgSalary: "$70k – $140k",
    desc: "Lead teams and steer organisations forward.",
  },
  {
    title: "Design & Creative",
    icon: Palette,
    demand: "Moderate",
    avgSalary: "$50k – $95k",
    desc: "Craft visual experiences that resonate and inspire.",
  },
  {
    title: "Education & Training",
    icon: GraduationCap,
    demand: "Moderate",
    avgSalary: "$45k – $80k",
    desc: "Empower the next generation through knowledge.",
  },
  {
    title: "Hospitality & Tourism",
    icon: Plane,
    demand: "Moderate",
    avgSalary: "$40k – $75k",
    desc: "Create memorable guest experiences worldwide.",
  },
  {
    title: "Legal Services",
    icon: Scale,
    demand: "Moderate",
    avgSalary: "$55k – $120k",
    desc: "Uphold justice and guide clients through complexity.",
  },
  {
    title: "Data & Analytics",
    icon: Cpu,
    demand: "Very High",
    avgSalary: "$80k – $145k",
    desc: "Turn raw data into decisions that move the needle.",
  },
];

/* ─────────────────────────────────────────────
   DEMAND CONFIG
───────────────────────────────────────────── */
const demandConfig = {
  "Very High": {
    label: "Very High",
    pill: "bg-emerald-50 text-emerald-700",
    dot: "bg-emerald-500",
  },
  High: {
    label: "High",
    pill: "bg-violet-50 text-violet-700",
    dot: "bg-violet-500",
  },
  Moderate: {
    label: "Moderate",
    pill: "bg-amber-50 text-amber-700",
    dot: "bg-amber-500",
  },
};

/* ─────────────────────────────────────────────
   SECTOR CARD
───────────────────────────────────────────── */
function SectorCard({ sector, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = sector.icon;
  const demand = demandConfig[sector.demand];

  return (
    <Link
      to="/become-intern"
      className="group block no-underline"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div
        className="relative flex flex-col h-full rounded-2xl bg-white border border-brand-purple/10 overflow-hidden transition-all duration-300"
        style={{
          boxShadow: hovered
            ? "0 20px 60px rgba(105,24,220,0.13)"
            : "0 2px 12px rgba(105,24,220,0.05)",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
        }}
      >
        {/* Gradient top bar */}
        <div className="h-[3px] w-full bg-brand-gradient flex-shrink-0" />

        <div className="flex flex-col flex-1 p-6 gap-4">
          {/* Icon */}
          <div
            className="w-13 h-13 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300"
            style={{
              width: 52,
              height: 52,
              background:
                "linear-gradient(135deg, #6918DC 0%, #E94B6C 100%)",
              transform: hovered ? "scale(1.08)" : "scale(1)",
            }}
          >
            <Icon size={24} className="text-white" strokeWidth={2} />
          </div>

          {/* Title + desc */}
          <div>
            <h3
              className="font-body font-bold text-[1.05rem] leading-snug mb-1"
              style={{ color: "#1a0033" }}
            >
              {sector.title}
            </h3>
            <p className="font-body font-medium text-sm text-gray-500 leading-relaxed m-0">
              {sector.desc}
            </p>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-brand-purple/8" />

          {/* Meta */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-400">Demand</span>
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full ${demand.pill}`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${demand.dot}`}
                />
                {demand.label}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-400">Avg Salary</span>
              <span
                className="text-sm font-bold"
                style={{ color: "#6918DC" }}
              >
                {sector.avgSalary}
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-auto pt-2">
            <div
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-body font-bold text-sm text-white transition-opacity duration-200"
              style={{
                background:
                  "linear-gradient(90deg, #6918DC 0%, #B625B9 30%, #E94B6C 65%, #F6A83D 100%)",
                opacity: hovered ? 0.9 : 1,
              }}
            >
              Explore Opportunities
              <ArrowRight size={15} strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function JobSector() {
  return (
    <div className="w-full font-body">

      {/* ── HERO ── */}
      <section
        className="relative py-24 text-white text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #6918DC 0%, #B625B9 40%, #E94B6C 75%, #F6A83D 100%)",
        }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 440,
            height: 440,
            background: "rgba(249,168,61,0.18)",
            top: -130,
            right: -110,
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 380,
            height: 380,
            background: "rgba(105,24,220,0.22)",
            bottom: -100,
            left: -90,
            filter: "blur(80px)",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span
            className="inline-block font-body font-bold text-white/60 mb-4"
            style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase" }}
          >
            Career Pathways
          </span>

          <h1
            className="font-display text-contact text-white mb-4"
            style={{ letterSpacing: 1 }}
          >
            Explore{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #F6A83D 0%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Job Sectors
            </span>
          </h1>

          <p className="font-body font-medium text-white/75 text-lg mb-8">
            Choose your career path and enter high-demand industries.
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-3 justify-center">
            {["12 Sectors", "High Demand", "Competitive Salaries"].map((pill) => (
              <span
                key={pill}
                className="font-body font-bold text-sm text-white px-5 py-2 rounded-full"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.35)",
                  background: "rgba(255,255,255,0.1)",
                }}
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTOR GRID ── */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-center font-body font-bold mb-2"
            style={{
              fontSize: 11,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#B625B9",
            }}
          >
            Industries
          </p>
          <h2
            className="text-center font-body font-bold text-h2 mb-12"
            style={{ color: "#1a0033" }}
          >
            Find Your Fit
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, i) => (
              <SectorCard key={sector.title} sector={sector} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20 text-white text-center"
        style={{
          background:
            "linear-gradient(135deg, #330066 0%, #6918DC 50%, #B625B9 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto px-6">
          <h2
            className="font-display text-white mb-3"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", letterSpacing: 1 }}
          >
            Not Sure Where You Fit?
          </h2>
          <p className="font-body font-medium text-white/70 text-lg mb-10">
            Get personalised career guidance tailored to your goals.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/career-coaching">
              <button
                className="font-body font-bold text-[15px] px-8 py-4 rounded-full transition-transform duration-200 hover:scale-105"
                style={{ background: "#fff", color: "#6918DC", border: "none" }}
              >
                Get Guidance
              </button>
            </Link>
            <Link to="/academics">
              <button
                className="font-body font-bold text-[15px] px-8 py-4 rounded-full text-white transition-colors duration-200"
                style={{
                  border: "2px solid rgba(255,255,255,0.4)",
                  background: "rgba(255,255,255,0.1)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.2)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
                }
              >
                View Programs
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}