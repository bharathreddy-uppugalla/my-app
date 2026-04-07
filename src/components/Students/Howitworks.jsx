import React from "react";

const steps = [
  {
    number: "01",
    title: "Sign Up",
    desc: "Register and tell us about your background, goals, and career aspirations.",
    icon: (
      // Person with plus
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="22" y1="11" x2="16" y2="11" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "1-on-1 Coaching",
    desc: "Work with expert coaches to enhance your CV, LinkedIn, and interview skills.",
    icon: (
      // Chat / coaching
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Get Matched",
    desc: "We connect you with internship opportunities that align with your goals.",
    icon: (
      // Rocket
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Start Your Career",
    desc: "Begin your professional journey with confidence and the right support.",
    icon: (
      // Trophy
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 6 2 18 2 18 9" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2" />
        <rect x="6" y="18" width="12" height="4" />
        <path d="M6 9a6 6 0 0 0 12 0" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-brand-purple via-[#5515c8] to-[#2d0e95] font-body">

      {/* Background glow effects */}
      <div className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-30 top-[-200px] right-[-100px]"
        style={{ background: "radial-gradient(circle, rgba(182,37,185,0.25) 0%, transparent 70%)" }}
      />
      <div className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 bottom-[-150px] left-[-100px]"
        style={{ background: "radial-gradient(circle, rgba(246,168,61,0.15) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-h1 text-brand-white text-center mb-4">
          How It Works
        </h2>

        <p className="text-center text-white/70 max-w-xl mx-auto mb-16 leading-relaxed">
          Our proven 4-step process makes the transition from study to work easier than ever.
        </p>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, i) => (
            <div key={step.number} className="relative group">

              {/* Card */}
              <div className="relative rounded-2xl p-8 bg-white/10 border border-white/20 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:-translate-y-2 hover:shadow-2xl">

                {/* Step Number */}
                <div className="text-[3.5rem] font-extrabold text-white/10 mb-4 leading-none">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6 p-3 transition group-hover:bg-white/30">
                  {step.icon}
                </div>

                {/* Divider */}
                <div className="w-8 h-[2px] bg-white/30 mb-5 rounded"></div>

                {/* Title */}
                <h3 className="text-white font-bold text-lg mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Arrow (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 text-white/30">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
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