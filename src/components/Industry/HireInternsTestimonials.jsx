import React, { useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "The intern Visgrow placed with us was exceptional. Within two weeks she was handling client accounts independently. We've since extended her to a full-time role.",
    name: "Sarah Mitchell",
    role: "General Manager",
    company: "Dialog IT",
    gradient: "linear-gradient(135deg, #6918DC, #B625B9)",
  },
  {
    quote: "Zero fees, zero hassle. The matching process was quick and the intern came prepared. I couldn't believe how plug-and-play the whole experience was.",
    name: "James Thornton",
    role: "Managing Director",
    company: "REDARC Electronics",
    gradient: "linear-gradient(135deg, #B625B9, #E94B6C)",
  },
  {
    quote: "We've now hosted three Visgrow interns across our finance team. All three have been outstanding — thoroughly prepared and genuinely motivated.",
    name: "Linda Nguyen",
    role: "CFO",
    company: "GBA Projects",
    gradient: "linear-gradient(135deg, #E94B6C, #F6A83D)",
  },
];

function StarRow() {
  return (
    <div className="flex gap-1 mb-4">
      {[1,2,3,4,5].map(i => (
        <Star key={i} size={14} fill="#F6A83D" stroke="none" />
      ))}
    </div>
  );
}

function getInitials(name) {
  return name.split(" ").slice(0,2).map(n => n[0]).join("").toUpperCase();
}

export default function HireInternsTestimonials() {
  return (
    <section className="py-20 bg-gray-50 font-body">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-brand-pink mb-2">
            Trusted by Industry
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            What Host Companies Say
          </h2>
          <div className="w-16 h-1 bg-brand-gradient rounded-full mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <StarRow />

              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-6 italic">
                "{t.quote}"
              </p>

              <div className="h-px bg-gray-100 mb-5" />

              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0"
                  style={{ background: t.gradient }}
                >
                  {getInitials(t.name)}
                </div>
                <div>
                  <p className="font-extrabold text-sm text-[#1a0033]">{t.name}</p>
                  <p className="text-xs text-gray-400 font-medium">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner label */}
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-6">
            Companies that have hired Visgrow interns
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Dialog IT","REDARC","GBA Projects","PwC","Deloitte","KompleteCare","Aurecon","Tax Store","CFS"].map((co) => (
              <span
                key={co}
                className="px-4 py-2 rounded-full text-sm font-bold text-gray-600 bg-white border border-gray-200 shadow-sm"
              >
                {co}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
