import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Code, Calculator, Wrench, Heart, TrendingUp, Users,
  Building2, Palette, GraduationCap, Plane, Scale, Cpu, ArrowRight,
} from "lucide-react";

const sectors = [
  { title: "Information Technology",   icon: Code,         demand: "High",      avgSalary: "$85k – $150k", desc: "Build the digital backbone of modern business." },
  { title: "Accounting & Finance",     icon: Calculator,   demand: "Very High", avgSalary: "$65k – $120k", desc: "Drive financial strategy and reporting at scale." },
  { title: "Engineering",              icon: Wrench,       demand: "High",      avgSalary: "$75k – $130k", desc: "Design systems and solve complex technical challenges." },
  { title: "Healthcare & Medical",     icon: Heart,        demand: "Very High", avgSalary: "$70k – $180k", desc: "Make a real difference in people's lives every day." },
  { title: "Marketing & Sales",        icon: TrendingUp,   demand: "High",      avgSalary: "$55k – $110k", desc: "Connect brands to audiences and drive growth." },
  { title: "Human Resources",          icon: Users,        demand: "Moderate",  avgSalary: "$60k – $100k", desc: "Shape workplace culture and talent strategy." },
  { title: "Business & Management",    icon: Building2,    demand: "High",      avgSalary: "$70k – $140k", desc: "Lead teams and steer organisations forward." },
  { title: "Design & Creative",        icon: Palette,      demand: "Moderate",  avgSalary: "$50k – $95k",  desc: "Craft visual experiences that resonate and inspire." },
  { title: "Education & Training",     icon: GraduationCap,demand: "Moderate",  avgSalary: "$45k – $80k",  desc: "Empower the next generation through knowledge." },
  { title: "Hospitality & Tourism",    icon: Plane,        demand: "Moderate",  avgSalary: "$40k – $75k",  desc: "Create memorable guest experiences worldwide." },
  { title: "Legal Services",           icon: Scale,        demand: "Moderate",  avgSalary: "$55k – $120k", desc: "Uphold justice and guide clients through complexity." },
  { title: "Data & Analytics",         icon: Cpu,          demand: "Very High", avgSalary: "$80k – $145k", desc: "Turn raw data into decisions that move the needle." },
];

const demandConfig = {
  "Very High": { pill: "bg-emerald-50 text-emerald-700", dot: "bg-emerald-500" },
  "High":      { pill: "bg-violet-50 text-violet-700",   dot: "bg-violet-500"  },
  "Moderate":  { pill: "bg-amber-50 text-amber-700",     dot: "bg-amber-500"   },
};

function SectorCard({ sector, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = sector.icon;
  const demand = demandConfig[sector.demand];

  return (
    <Link
      to="/industry/hire-interns/request"
      className="group block no-underline"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative flex flex-col h-full rounded-2xl bg-white border border-brand-purple/10 overflow-hidden transition-all duration-300"
        style={{
          boxShadow: hovered ? "0 20px 60px rgba(105,24,220,0.13)" : "0 2px 12px rgba(105,24,220,0.05)",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
        }}
      >
        {/* Gradient top bar */}
        <div className="h-[3px] w-full bg-brand-gradient flex-shrink-0" />

        <div className="flex flex-col flex-1 p-6 gap-4">
          {/* Icon */}
          <div
            className="w-[52px] h-[52px] rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300"
            style={{
              background: "linear-gradient(135deg, #6918DC 0%, #E94B6C 100%)",
              transform: hovered ? "scale(1.08)" : "scale(1)",
            }}
          >
            <Icon size={24} className="text-white" strokeWidth={2} />
          </div>

          {/* Title + desc */}
          <div>
            <h3 className="font-body font-bold text-[1.05rem] leading-snug mb-1 text-[#1a0033]">
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
              <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full ${demand.pill}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${demand.dot}`} />
                {sector.demand}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-400">Avg Salary</span>
              <span className="text-sm font-bold text-brand-purple">{sector.avgSalary}</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-auto pt-2">
            <div
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-body font-bold text-sm text-white transition-opacity duration-200"
              style={{
                background: "linear-gradient(90deg, #6918DC 0%, #B625B9 30%, #E94B6C 65%, #F6A83D 100%)",
                opacity: hovered ? 0.9 : 1,
              }}
            >
              Hire from this Sector
              <ArrowRight size={15} strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function HireInternsSectors() {
  return (
    <section className="py-20 bg-[#fafafa] font-body">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-brand-pink mb-2">
            Skilled Professionals In These Sectors
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            Browse Interns by Industry
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            We have job-ready interns across 12 high-demand industries. Select a sector to hire.
          </p>
          <div className="w-16 h-1 bg-brand-gradient rounded-full mx-auto mt-4" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sectors.map((sector, i) => (
            <SectorCard key={sector.title} sector={sector} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-gray-400 text-sm mt-10">
          Don't see your sector?{" "}
          <Link to="/contact" className="text-brand-purple font-bold hover:underline">
            Contact us
          </Link>{" "}
          — we match across all industries.
        </p>
      </div>
    </section>
  );
}
