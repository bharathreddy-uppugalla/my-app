import React from "react";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

export default function WorkshopCTA() {
  return (
    <section className="py-24 bg-white font-body">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-200 bg-purple-50 text-purple-600 text-xs font-bold mb-6">
          ✦ Browse All Programs
        </div>

        {/* Image strip */}
        <div className="flex items-center justify-center gap-3 mb-8">
          {[
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&q=80",
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
            "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=200&q=80",
          ].map((src, i) => (
            <div
              key={i}
              className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg"
              style={{ marginLeft: i > 0 ? -16 : 0, zIndex: 3 - i }}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
          <span className="ml-2 text-sm font-bold text-gray-600">
            500+ professionals trained
          </span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
          Browse Visgrow's Full Range<br />
          <span className="bg-gradient-to-r from-brand-purple via-brand-pink to-brand-orange bg-clip-text text-transparent">
            of Training Programs
          </span>
        </h2>

        <p className="text-gray-500 max-w-xl mx-auto leading-relaxed text-base mb-10">
          Access our complete workshop catalogue — including information about the key learning
          outcomes, facilitators, and what you can expect.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-8 py-4 rounded-full text-white font-bold bg-brand-gradient shadow-lg hover:scale-105 transition inline-flex items-center gap-2">
            <Download size={16} />
            Download Course Guide
          </button>
          <Link to="/contact">
            <button className="px-8 py-4 rounded-full font-bold text-brand-purple border-2 border-brand-purple hover:bg-brand-purple hover:text-white transition inline-flex items-center gap-2">
              Start a Conversation <ArrowRight size={16} />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
