import React, { useState } from "react";
import { Link } from "react-router";
import {
  Briefcase, Users, Award, TrendingUp, Clock, ArrowRight,
  CheckCircle, Star, Shield, Zap, ChevronRight
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const whyChoose = [
  {
    icon: Briefcase,
    title: "Real Work Experience",
    desc: "Gain hands-on experience working on actual projects in professional environments.",
  },
  {
    icon: Users,
    title: "Industry Mentorship",
    desc: "Learn directly from experienced professionals who guide your development.",
  },
  {
    icon: Award,
    title: "Certifications",
    desc: "Earn recognised certifications that boost your resume and credibility.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    desc: "85% of our interns receive full-time job offers from their host companies.",
  },
  {
    icon: Clock,
    title: "Flexible Duration",
    desc: "Choose from 3, 6, or 12-month internship programs that fit your schedule.",
  },
];

const programs = [
  {
    title: "Tech Internship",
    spots: 20,
    desc: "Software development, data science, and IT roles",
    duration: "3–6 months",
    gradient: "linear-gradient(135deg, #6918DC 0%, #B625B9 100%)",
    badge: "bg-violet-50 text-violet-700",
  },
  {
    title: "Finance Internship",
    spots: 15,
    desc: "Banking, accounting, and financial analysis roles",
    duration: "3–6 months",
    gradient: "linear-gradient(135deg, #B625B9 0%, #E94B6C 100%)",
    badge: "bg-pink-50 text-pink-700",
  },
  {
    title: "Engineering Internship",
    spots: 12,
    desc: "Mechanical, electrical, and civil engineering roles",
    duration: "6–12 months",
    gradient: "linear-gradient(135deg, #E94B6C 0%, #F6A83D 100%)",
    badge: "bg-orange-50 text-orange-700",
  },
  {
    title: "Marketing Internship",
    spots: 18,
    desc: "Digital marketing, brand management, and content creation",
    duration: "3–6 months",
    gradient: "linear-gradient(135deg, #6918DC 0%, #E94B6C 100%)",
    badge: "bg-violet-50 text-violet-700",
  },
];

const steps = [
  "Submit your application with resume and cover letter",
  "Complete our skills assessment test",
  "Interview with our career advisors",
  "Get matched with partner companies",
  "Start your internship journey",
];

const plans = [
  {
    name: "Career Coaching Program",
    tagline: "Perfect for getting started",
    price: "$1999",
    period: "/program",
    popular: false,
    features: [
      "Internship placement support",
      "Resume review",
      "Access to coaching material",
      "1 on 1 coaching sessions",
      "Interview preparation guide",
      "LinkedIn profile optimisation",
      "Email support",
    ],
    cta: "Get Started",
  },
  {
    name: "Internship Pogram",
    tagline: "For serious career starters",
    price: "$4999",
    period: "/program",
    popular: true,
    features: [
      "Everything in Career Coaching Program",
      "Real-Time projects",
      "Mock interviews",
      "Enhance skills",
      "Working with Visgrow",
    ],
    cta: "Get Started",
  },
  {
    name: "Acadamics",
    tagline: "Maximum career support",
    price: "$5999",
    period: "/program",
    popular: false,
    features: [
      "Everything Internship Pogram",
      "Access to aditional workshops",
      "Direct company introductions",
      "Guaranteed placement or refund",
    ],
    cta: "Get Started",
  },
];

/* ─────────────────────────────────────────────
   STAT PILL
───────────────────────────────────────────── */
function StatPill({ value, label }) {
  return (
    <div
      className="flex flex-col items-center px-6 py-4 rounded-2xl"
      style={{ background: "rgba(255,255,255,0.12)", border: "1.5px solid rgba(255,255,255,0.2)" }}
    >
      <span className="font-display text-white" style={{ fontSize: "2.2rem", lineHeight: 1 }}>
        {value}
      </span>
      <span className="font-body font-medium text-white/70 text-sm mt-1">{label}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PROGRAM CARD
───────────────────────────────────────────── */
function ProgramCard({ program }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col rounded-2xl bg-white overflow-hidden transition-all duration-300 cursor-pointer"
      style={{
        border: "1px solid rgba(105,24,220,0.1)",
        boxShadow: hovered
          ? "0 20px 60px rgba(105,24,220,0.14)"
          : "0 2px 14px rgba(105,24,220,0.05)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gradient bar */}
      <div className="h-[3px]" style={{ background: program.gradient }} />

      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3
              className="font-body font-bold text-[1.05rem] leading-snug"
              style={{ color: "#1a0033" }}
            >
              {program.title}
            </h3>
            <p className="font-body font-medium text-sm text-gray-500 mt-1 leading-relaxed">
              {program.desc}
            </p>
          </div>
          <span
            className={`flex-shrink-0 text-xs font-bold px-3 py-1 rounded-full ${program.badge}`}
          >
            {program.spots} spots
          </span>
        </div>

        {/* Divider */}
        <div className="h-px w-full" style={{ background: "rgba(105,24,220,0.07)" }} />

        {/* Meta */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-400">Duration</span>
            <span className="text-sm font-bold" style={{ color: "#6918DC" }}>
              {program.duration}
            </span>
          </div>
          <div className="flex items-start justify-between gap-2">
            <span className="text-sm font-medium text-gray-400 mt-1">Partner Companies</span>
           <div className="text-xs text-gray-400 italic">
         Partner companies assigned after selection
                </div>
               
          </div>
        </div>

        {/* CTA */}
        <div className="mt-auto pt-2">
          <Link to="/apply" className="block">
            <div
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-body font-bold text-sm text-white transition-opacity duration-200"
              style={{
                background: program.gradient,
                opacity: hovered ? 0.88 : 1,
              }}
            >
              Apply for This Program
              <ArrowRight size={15} strokeWidth={2.5} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PRICING CARD
───────────────────────────────────────────── */
function PricingCard({ plan }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: plan.popular
          ? "linear-gradient(160deg, #6918DC 0%, #B625B9 50%, #E94B6C 100%)"
          : "#fff",
        border: plan.popular
          ? "none"
          : "1px solid rgba(105,24,220,0.1)",
        boxShadow: plan.popular
          ? "0 24px 64px rgba(105,24,220,0.28)"
          : hovered
          ? "0 16px 48px rgba(105,24,220,0.1)"
          : "0 2px 12px rgba(105,24,220,0.05)",
        transform: plan.popular
          ? "scale(1.04)"
          : hovered
          ? "translateY(-4px)"
          : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {plan.popular && (
        <div className="flex justify-center pt-4">
          <span
            className="inline-flex items-center gap-1.5 font-body font-bold text-xs px-4 py-1.5 rounded-full"
            style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}
          >
            <Star size={11} strokeWidth={2.5} />
            Most Popular
          </span>
        </div>
      )}

      <div className={`p-7 flex flex-col gap-5 flex-1 ${plan.popular ? "pt-4" : ""}`}>
        {/* Name */}
        <div>
          <h3
            className="font-body font-bold text-xl"
            style={{ color: plan.popular ? "#fff" : "#1a0033" }}
          >
            {plan.name}
          </h3>
          <p
            className="font-body font-medium text-sm mt-1"
            style={{ color: plan.popular ? "rgba(255,255,255,0.7)" : "#999" }}
          >
            {plan.tagline}
          </p>
        </div>

        {/* Price */}
        <div className="flex items-end gap-1">
          <span
            className="font-display"
            style={{
              fontSize: "3rem",
              lineHeight: 1,
              color: plan.popular ? "#fff" : "#6918DC",
            }}
          >
            {plan.price}
          </span>
          <span
            className="font-body font-medium text-sm mb-1"
            style={{ color: plan.popular ? "rgba(255,255,255,0.6)" : "#aaa" }}
          >
            {plan.period}
          </span>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full"
          style={{
            background: plan.popular ? "rgba(255,255,255,0.2)" : "rgba(105,24,220,0.07)",
          }}
        />

        {/* Features */}
        <ul className="flex flex-col gap-3 m-0 p-0 list-none">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <CheckCircle
                size={16}
                strokeWidth={2.5}
                className="flex-shrink-0 mt-0.5"
                style={{ color: plan.popular ? "#F6A83D" : "#6918DC" }}
              />
              <span
                className="font-body font-medium text-sm leading-relaxed"
                style={{ color: plan.popular ? "rgba(255,255,255,0.88)" : "#555" }}
              >
                {f}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-auto pt-2">
          <Link to="/apply" className="block">
            <div
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-body font-bold text-sm transition-all duration-200"
              style={
                plan.popular
                  ? {
                      background: "#fff",
                      color: "#6918DC",
                    }
                  : {
                      background:
                        "linear-gradient(90deg, #6918DC 0%, #B625B9 30%, #E94B6C 65%, #F6A83D 100%)",
                      color: "#fff",
                    }
              }
            >
              {plan.cta}
              <ArrowRight size={14} strokeWidth={2.5} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function BecomeIntern() {
  return (
    <div className="w-full font-body">

      {/* ── HERO ── */}
      <section
        className="relative py-24 text-white text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #6918DC 0%, #B625B9 40%, #E94B6C 75%, #F6A83D 100%)",
        }}
      >
        {/* Blobs */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 480,
            height: 480,
            background: "rgba(249,168,61,0.16)",
            top: -140,
            right: -120,
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 400,
            height: 400,
            background: "rgba(105,24,220,0.2)",
            bottom: -110,
            left: -100,
            filter: "blur(80px)",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span
            className="inline-block font-body font-bold text-white/60 mb-4"
            style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase" }}
          >
            Internship Program
          </span>

          <h1
            className="font-display text-white mb-4"
            style={{ fontSize: "clamp(3rem, 9vw, 6rem)", lineHeight: 1, letterSpacing: 1 }}
          >
            Become an{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #F6A83D 0%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Intern
            </span>
          </h1>

          <p className="font-body font-medium text-white/75 text-lg mb-10 max-w-xl mx-auto">
            Launch your career with prestigious internships at top companies. Get real-world
            experience, build your network, and land your dream job.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link to="/apply">
              <button
                className="font-body font-bold text-[15px] px-8 py-4 rounded-full text-brand-purple transition-transform duration-200 hover:scale-105"
                style={{ background: "#fff", border: "none" }}
              >
                Apply Now
              </button>
            </Link>
            <Link to="#programs">
              <button
                className="font-body font-bold text-[15px] px-8 py-4 rounded-full text-white transition-colors duration-200"
                style={{
                  border: "2px solid rgba(255,255,255,0.4)",
                  background: "rgba(255,255,255,0.1)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.2)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
                }
              >
                View Programs
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
            <StatPill value="500+" label="Interns Placed" />
            <StatPill value="85%" label="Job Offer Rate" />
            <StatPill value="50+" label="Partner Companies" />
            <StatPill value="4.9★" label="Avg Rating" />
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-center font-body font-bold mb-2"
            style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: "#B625B9" }}
          >
            Why Us
          </p>
          <h2
            className="text-center font-body font-bold text-h2 mb-4"
            style={{ color: "#1a0033" }}
          >
            Why Choose Our Internship Program?
          </h2>
          <p className="text-center font-body font-medium text-gray-500 text-base max-w-xl mx-auto mb-12">
            Our comprehensive internship program is designed to give you the competitive edge you need.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex gap-4 p-6 rounded-2xl bg-[#fafafa] border transition-shadow duration-200 hover:shadow-md"
                  style={{ borderColor: "rgba(105,24,220,0.08)" }}
                >
                  <div
                    className="w-11 h-11 flex-shrink-0 rounded-xl flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #6918DC 0%, #E94B6C 100%)",
                      minWidth: 44,
                    }}
                  >
                    <Icon size={20} className="text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-body font-bold text-base mb-1" style={{ color: "#1a0033" }}>
                      {item.title}
                    </h3>
                    <p className="font-body font-medium text-sm text-gray-500 leading-relaxed m-0">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section id="programs" className="py-20 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-center font-body font-bold mb-2"
            style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: "#B625B9" }}
          >
            Opportunities
          </p>
          <h2
            className="text-center font-body font-bold text-h2 mb-4"
            style={{ color: "#1a0033" }}
          >
            Available Internship Programs
          </h2>
          <p className="text-center font-body font-medium text-gray-500 text-base max-w-xl mx-auto mb-12">
            Choose from our curated internship opportunities across various industries.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((p) => (
              <ProgramCard key={p.title} program={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p
            className="text-center font-body font-bold mb-2"
            style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: "#B625B9" }}
          >
            How It Works
          </p>
          <h2
            className="text-center font-body font-bold text-h2 mb-12"
            style={{ color: "#1a0033" }}
          >
            Simple Application Process
          </h2>
          <p className="text-center font-body font-medium text-gray-500 mb-12 -mt-8">
            Get started in 5 easy steps
          </p>

          <div className="flex flex-col gap-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex items-center gap-5 p-5 rounded-2xl bg-[#fafafa] border transition-shadow duration-200 hover:shadow-md"
                style={{ borderColor: "rgba(105,24,220,0.08)" }}
              >
                {/* Number circle */}
                <div
                  className="w-11 h-11 flex-shrink-0 rounded-full flex items-center justify-center font-display text-white text-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #6918DC 0%, #B625B9 50%, #E94B6C 100%)",
                    minWidth: 44,
                  }}
                >
                  {i + 1}
                </div>

                <p className="font-body font-medium text-base text-gray-700 m-0 flex-1">
                  {step}
                </p>

                {i < steps.length - 1 && (
                  <ChevronRight size={18} className="text-gray-300 flex-shrink-0 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto px-6">
          <p
            className="text-center font-body font-bold mb-2"
            style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: "#B625B9" }}
          >
            Pricing
          </p>
          <h2
            className="text-center font-body font-bold text-h2 mb-4"
            style={{ color: "#1a0033" }}
          >
            Internship Program Pricing
          </h2>
          <p className="text-center font-body font-medium text-gray-500 text-base max-w-lg mx-auto mb-14">
            Invest in your future with our affordable internship placement services.
          </p>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {[
              { icon: Shield, label: "Secure Payments" },
              { icon: Zap, label: "Instant Activation" },
              { icon: CheckCircle, label: "Satisfaction Guaranteed" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={16} style={{ color: "#6918DC" }} strokeWidth={2} />
                <span className="font-body font-medium text-sm text-gray-500">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        className="py-20 text-white text-center"
        style={{
          background:
            "linear-gradient(135deg, #330066 0%, #6918DC 50%, #B625B9 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto px-6">
          <h2
            className="font-display text-white mb-3"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", letterSpacing: 1 }}
          >
            Ready to Launch Your Career?
          </h2>
          <p className="font-body font-medium text-white/70 text-lg mb-10">
            Join hundreds of students who have successfully landed internships at top companies
            through our program.
          </p>
          <Link to="/apply">
            <button
              className="font-body font-bold text-[15px] px-10 py-4 rounded-full text-brand-purple transition-transform duration-200 hover:scale-105 inline-flex items-center gap-2"
              style={{ background: "#fff", border: "none" }}
            >
              Apply for Internship Now
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}