import React from "react";
import { useNavigate } from "react-router-dom";
import studentImg from "../../images/heroimage.jpg";
import businessImg from "../../images/industryheroimage.jpg";

const panels = [
  {
    path: "/student/home",
    img: studentImg,
    alt: "Student",
    badge: "Students & Graduates",
    overlay: "bg-gradient-to-br from-brand-purple/70 via-black/45 to-brand-pink/60",
    headline: "Struggling to Land Your Dream Job?",
    sub: "Discover the skills and strategies to get hired faster — built for students and fresh grads.",
    cta: "Get Started",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3.33 1.67 8.67 1.67 12 0v-5"/>
      </svg>
    ),
  },
  {
    path: "/industry/home",
    img: businessImg,
    alt: "Industry Professional",
    badge: "Industry Professionals & Owners",
    overlay: "bg-gradient-to-br from-brand-violet/70 via-black/45 to-brand-orange/60",
    headline: "Struggling with Staff Performance?",
    sub: "Close the soft skills gaps driving inconsistency — purpose-built for leaders and business owners.",
    cta: "Upskill Now",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
];

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full h-screen flex gap-2 font-body overflow-hidden bg-black">
      {panels.map(({ path, img, alt, badge, overlay, headline, sub, cta, icon }) => (
        <div
          key={path}
          onClick={() => navigate(path)}
          className="relative flex-1 h-full group cursor-pointer transition-all duration-500 hover:flex-[1.22] rounded-2xl overflow-hidden"
        >
          {/* Background image */}
          <img
            src={img}
            alt={alt}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
          />

          {/* Gradient overlay */}
          <div className={`absolute inset-0 ${overlay}`} />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6">

            {/* Audience badge */}
            <div className="flex items-center gap-2 bg-white/15 border border-white/30 rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-white/80" />
              <span className="font-body text-white text-xs font-semibold uppercase tracking-widest">
                {badge}
              </span>
            </div>

            {/* Glass card */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 text-center max-w-sm shadow-2xl">

              {/* Icon */}
              <div className="w-11 h-11 rounded-full bg-white/15 border border-white/25 flex items-center justify-center mx-auto mb-4">
                {icon}
              </div>

              <h2 className="text-white font-display text-4xl lg:text-5xl mb-3 leading-tight">
                {headline}
              </h2>

              <p className="text-white/85 font-body text-sm leading-relaxed mb-6">
                {sub}
              </p>

              <button className="px-8 py-3 rounded-full text-white text-sm font-bold font-body bg-brand-gradient shadow-lg hover:scale-105 transition tracking-wide uppercase">
                {cta}
              </button>

            </div>
          </div>
        </div>
      ))}
    </section>
  );
}