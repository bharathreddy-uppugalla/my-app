import React from "react";
import { CheckCircle, Shield, Zap, Award } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Pre-Vetted & Coached",
    desc: "Every intern completes our career coaching program before placement — they arrive prepared, professional, and ready to contribute.",
    gradient: "linear-gradient(135deg, #6918DC, #B625B9)",
  },
  {
    icon: Zap,
    title: "Zero Recruitment Fees",
    desc: "No agency fees. No hidden costs. Our intern placement is completely free to host businesses across Australia.",
    gradient: "linear-gradient(135deg, #B625B9, #E94B6C)",
  },
  {
    icon: Award,
    title: "Flexible Placements",
    desc: "Choose 3, 6, or 12-month durations. Part-time or full-time. We structure around your business needs.",
    gradient: "linear-gradient(135deg, #E94B6C, #F6A83D)",
  },
  {
    icon: CheckCircle,
    title: "Ongoing Support",
    desc: "We stay involved throughout the placement — coordinating with both you and the intern to ensure success.",
    gradient: "linear-gradient(135deg, #6918DC, #F6A83D)",
  },
];

const points = [
  "Access to 500+ pre-screened, job-ready graduates",
  "Interns matched specifically to your team's needs",
  "Supported by Visgrow coaches throughout placement",
  "Potential to convert top interns to full-time staff",
  "Compliance and paperwork handled by our team",
  "No financial risk — placement is free to host businesses",
];

const stats = [
  { value: "500+", label: "Interns Placed" },
  { value: "50+", label: "Partner Companies" },
  { value: "85%", label: "Conversion Rate" },
  { value: "4.9★", label: "Host Rating" },
];

export default function HireInternsWhy() {
  return (
    <section className="py-24 bg-white font-body overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/5 blur-[100px] -top-40 -right-32 rounded-full pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-orange-400/5 blur-[100px] -bottom-32 -left-32 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Stats bar */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 rounded-2xl p-6"
          style={{ background: "linear-gradient(135deg, #6918DC 0%, #B625B9 40%, #E94B6C 75%, #F6A83D 100%)" }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <p className="text-3xl font-extrabold">{stat.value}</p>
              <p className="text-white/75 text-sm font-medium mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Two col */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-200 bg-purple-50 text-purple-600 text-xs font-bold mb-6">
              ✦ Why Host Visgrow Interns
            </div>

            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Interns Who Are{" "}
              <span className="bg-gradient-to-r from-brand-purple via-brand-pink to-brand-orange bg-clip-text text-transparent">
                Built for Business
              </span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              Visgrow interns aren't just students looking for experience — they're coached,
              prepared professionals. We invest months in their career readiness before they
              walk through your door, so your team gets real value from day one.
            </p>

            <ul className="space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-brand-purple flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-sm font-medium text-gray-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <button className="mt-8 px-8 py-3.5 rounded-full text-white font-bold bg-brand-gradient shadow-lg hover:scale-105 transition">
              Talk to Our Team
            </button>
          </div>

          {/* RIGHT — Benefit cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="rounded-2xl p-6 border border-gray-100 bg-[#fafafa] hover:shadow-lg transition-shadow duration-300"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: b.gradient }}
                  >
                    <Icon size={20} className="text-white" strokeWidth={2} />
                  </div>
                  <h3 className="font-bold text-base text-[#1a0033] mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
