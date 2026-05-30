import React, { useState } from "react";
import {
  TrendingUp, BarChart2, Users, Cpu, Scale, ShieldCheck, ArrowRight
} from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Business Strategy",
    desc: "Develop a clear roadmap for growth, market positioning, and long-term competitive advantage.",
    gradient: "linear-gradient(135deg, #6918DC, #B625B9)",
  },
  {
    icon: BarChart2,
    title: "Financial Advisory",
    desc: "Strengthen your financial position, improve cash flow, and plan for profitable growth.",
    gradient: "linear-gradient(135deg, #B625B9, #E94B6C)",
  },
  {
    icon: Users,
    title: "People & HR Strategy",
    desc: "Build a high-performance culture, improve retention, and align your team behind your goals.",
    gradient: "linear-gradient(135deg, #E94B6C, #F6A83D)",
  },
  {
    icon: Cpu,
    title: "Digital Transformation",
    desc: "Modernise your operations and leverage technology to scale faster with less friction.",
    gradient: "linear-gradient(135deg, #6918DC, #F6A83D)",
  },
  {
    icon: ShieldCheck,
    title: "Risk & Compliance",
    desc: "Identify exposure, implement frameworks, and ensure your business is protected and compliant.",
    gradient: "linear-gradient(135deg, #F6A83D, #E94B6C)",
  },
  {
    icon: Scale,
    title: "Exit & Succession Planning",
    desc: "Maximise your business value and plan a smooth transition — whether selling, retiring, or handing over.",
    gradient: "linear-gradient(135deg, #B625B9, #6918DC)",
  },
];

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;
  return (
    <div
      className="rounded-2xl bg-white border border-gray-100 p-7 flex flex-col gap-4 transition-all duration-300 cursor-pointer"
      style={{
        boxShadow: hovered ? "0 20px 60px rgba(105,24,220,0.12)" : "0 2px 12px rgba(0,0,0,0.04)",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300"
        style={{
          background: service.gradient,
          transform: hovered ? "scale(1.08)" : "scale(1)",
        }}
      >
        <Icon size={22} className="text-white" strokeWidth={2} />
      </div>
      <div>
        <h3 className="font-extrabold text-base text-[#1a0033] mb-2">{service.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
      </div>
      <div
        className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold transition-all duration-200"
        style={{ color: hovered ? "#6918DC" : "#aaa" }}
      >
        Learn more <ArrowRight size={13} />
      </div>
    </div>
  );
}

export default function BusinessAdvisoryServices() {
  return (
    <section
      className="py-20 font-body"
      style={{ background: "linear-gradient(180deg, #f5f5fa 0%, #ffffff 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-brand-pink mb-2">
            Advisory Areas
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            What Our Advisors Cover
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Expert guidance across every dimension of your business — from strategy to execution.
          </p>
          <div className="w-16 h-1 bg-brand-gradient rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
