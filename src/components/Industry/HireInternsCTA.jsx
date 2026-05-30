import React from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function HireInternsCTA() {
  return (
    <section className="py-24 bg-white font-body">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Avatar strip */}
        <div className="flex items-center justify-center gap-3 mb-8">
          {[
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80",
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80",
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&q=80",
          ].map((src, i) => (
            <div
              key={i}
              className="w-12 h-12 rounded-full overflow-hidden border-4 border-white shadow-lg"
              style={{ marginLeft: i > 0 ? -14 : 0, zIndex: 4 - i }}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
          <span className="ml-2 text-sm font-bold text-gray-600">
            500+ interns ready to place
          </span>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-200 bg-purple-50 text-purple-600 text-xs font-bold mb-6">
          ✦ Free Placement Service
        </div>

        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
          Ready to Strengthen<br />
          <span className="bg-gradient-to-r from-brand-purple via-brand-pink to-brand-orange bg-clip-text text-transparent">
            Your Team?
          </span>
        </h2>

        <p className="text-gray-500 max-w-xl mx-auto leading-relaxed text-base mb-10">
          Browse our full catalogue of job-ready intern profiles across 12 industries —
          and find the right person to drive real value in your business.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/industry/hire-interns/request">
            <button className="px-8 py-4 rounded-full text-white font-bold bg-brand-gradient shadow-lg hover:scale-105 transition inline-flex items-center gap-2">
              Submit a Hiring Request <ArrowRight size={16} />
            </button>
          </Link>
          <Link to="/contact">
            <button className="px-8 py-4 rounded-full font-bold text-brand-purple border-2 border-brand-purple hover:bg-brand-purple hover:text-white transition inline-flex items-center gap-2">
              <Phone size={16} /> Talk to Our Team
            </button>
          </Link>
        </div>

        {/* Trust note */}
        <p className="text-xs text-gray-400 mt-6 font-medium">
          No fees. No lock-ins. We handle the matching, onboarding & support.
        </p>
      </div>
    </section>
  );
}
