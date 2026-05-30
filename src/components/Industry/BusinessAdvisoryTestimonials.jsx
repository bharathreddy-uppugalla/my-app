import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Working with the Visgrow advisory team completely transformed how we approach growth. Within 3 months we had clear KPIs, a restructured team, and a 40% increase in revenue.",
    name: "David Murillo",
    role: "Managing Director, DM Holdings",
    gradient: "linear-gradient(135deg, #6918DC, #B625B9)",
  },
  {
    quote: "The advisor we were matched with understood our industry immediately. She identified inefficiencies we'd been blind to for years. Honestly the best business decision we've made.",
    name: "Carmela Leano",
    role: "CEO, Pacific Trade Group",
    gradient: "linear-gradient(135deg, #B625B9, #E94B6C)",
  },
  {
    quote: "We were about to make a very expensive hiring mistake. The strategic session helped us realise we needed systems, not just staff. Saved us tens of thousands.",
    name: "Ivan Almaraz",
    role: "Founder, Almaraz Retail",
    gradient: "linear-gradient(135deg, #E94B6C, #F6A83D)",
  },
];

function getInitials(name) {
  return name.split(" ").slice(0, 2).map((n) => n[0]).join("").toUpperCase();
}

export default function BusinessAdvisoryTestimonials() {
  return (
    <section className="py-20 bg-gray-50 font-body">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-brand-pink mb-2">
            Client Stories
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            What Business Owners Say
          </h2>
          <div className="w-16 h-1 bg-brand-gradient rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map((i) => <Star key={i} size={14} fill="#F6A83D" stroke="none" />)}
              </div>

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
                  <p className="text-xs text-gray-400 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trustpilot-style badge */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-6 py-3 shadow-sm">
            <div className="flex gap-1">
              {[1,2,3,4,5].map((i) => <Star key={i} size={16} fill={i <= 4 ? "#00B67A" : "#ddd"} stroke="none" />)}
            </div>
            <div>
              <p className="text-xs font-bold text-gray-700">TrustScore <strong>4.7</strong></p>
              <p className="text-xs text-gray-400">Based on 200+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
