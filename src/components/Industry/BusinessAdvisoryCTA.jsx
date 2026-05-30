import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import BusinessAdvisoryWizard from "./BusinessAdvisoryWizard";

export default function BusinessAdvisoryCTA() {
  const [wizardOpen, setWizardOpen] = useState(false);

  return (
    <>
      <section className="py-24 bg-white font-body">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-200 bg-purple-50 text-purple-600 text-xs font-bold mb-6">
            ✦ Free, No-obligation Service
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Ready to Grow Your Business<br />
            <span className="bg-gradient-to-r from-brand-purple via-brand-pink to-brand-orange bg-clip-text text-transparent">
              with Expert Advice?
            </span>
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed text-base mb-10">
            Post your requirements, get matched with the right advisor, and receive free quotes —
            all within 24 hours.
          </p>

          <button
            onClick={() => setWizardOpen(true)}
            className="px-10 py-4 rounded-full text-white font-bold bg-brand-gradient shadow-lg hover:scale-105 transition inline-flex items-center gap-2 text-base"
          >
            Get Free Quotes Now <ArrowRight size={17} />
          </button>

          <p className="text-xs text-gray-400 mt-5 font-medium">
            No fees. No lock-ins. Fast, free quotes from vetted advisors.
          </p>
        </div>
      </section>

      {wizardOpen && (
        <BusinessAdvisoryWizard onClose={() => setWizardOpen(false)} />
      )}
    </>
  );
}
