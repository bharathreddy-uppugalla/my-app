import React from 'react'
import {
  Star, 
} from "lucide-react";

const testimonials = [
  {
    quote:
      "Visgrow's workshops completely transformed how our team approaches client communication. The results were immediate.",
    name: "Sarah Mitchell",
    role: "Operations Director, Adelaide Tech Co.",
    initials: "SM",
    gradient: "linear-gradient(135deg, #6918DC, #B625B9)",
  },
  {
    quote:
      "The Owner Manager Program gave me the clarity and confidence to scale our business from $3M to $8M in 18 months.",
    name: "James Okafor",
    role: "Founder & CEO, Okafor Group",
    initials: "JO",
    gradient: "linear-gradient(135deg, #B625B9, #E94B6C)",
  },
  {
    quote:
      "Hiring through Visgrow saved us months of recruitment. Our interns hit the ground running from day one.",
    name: "Linda Tran",
    role: "HR Manager, Nexus Engineering",
    initials: "LT",
    gradient: "linear-gradient(135deg, #E94B6C, #F6A83D)",
  },
];
export default function Testimonials() {
  return (
    <section className="py-24 bg-[#f5f5fa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "#B625B9" }}
          >
            Testimonials
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            What Our Clients{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #6918DC, #E94B6C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Say
            </span>
          </h2>
        </div>
 
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-xl transition duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} fill="#F6A83D" stroke="none" />
                ))}
              </div>
 
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6 italic">
                "{t.quote}"
              </p>
 
              <div className="border-t border-gray-100 pt-5 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ background: t.gradient }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}