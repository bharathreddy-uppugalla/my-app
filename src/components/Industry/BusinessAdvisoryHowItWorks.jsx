import React from "react";

const steps = [
  {
    number: "1",
    title: "Post details",
    desc: "Post details of your business consulting requirements in moments, completely free.",
    gradient: "linear-gradient(135deg, #6918DC, #B625B9)",
  },
  {
    number: "2",
    title: "Find professionals",
    desc: "We will find business consultants in your area and do the legwork to contact them on your behalf.",
    gradient: "linear-gradient(135deg, #B625B9, #E94B6C)",
  },
  {
    number: "3",
    title: "Get quotes",
    desc: "Receive fast, free business consulting quotes from the best business consultants near you.",
    gradient: "linear-gradient(135deg, #E94B6C, #F6A83D)",
  },
  {
    number: "4",
    title: "Compare",
    desc: "Review proposals, compare business consulting prices and choose the best local business consultants for your job.",
    gradient: "linear-gradient(135deg, #6918DC, #E94B6C)",
  },
  {
    number: "5",
    title: "Write review",
    desc: "Submit a review to help others find recommended business consultants.",
    gradient: "linear-gradient(135deg, #F6A83D, #B625B9)",
  },
];

export default function BusinessAdvisoryHowItWorks() {
  return (
    <section className="py-20 bg-white font-body">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Intro text */}
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed text-base">
          Finding business advisors in your area is easy with Visgrow. Enter your location above
          and we'll do all the legwork to get you fast, free quotes from the best business
          advisors near you.
        </p>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Number */}
              <div
                className="text-4xl font-extrabold mb-3 transition-transform duration-300 group-hover:scale-110 inline-block"
                style={{
                  background: step.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {step.number}
              </div>

              {/* Gradient bar */}
              <div
                className="w-10 h-1 rounded-full mb-4"
                style={{ background: step.gradient }}
              />

              <h3 className="font-extrabold text-lg text-[#1a0033] mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>

              {/* Connector arrow (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth={2.5}>
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
