import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Briefcase,
  FileText,
  Users,
  Network,
  DollarSign,
  User,
  CheckCircle,
  Star,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

/* ───────────────── DATA ───────────────── */
const services = [
  {
    icon: Briefcase,
    title: "Career Path Planning",
    desc: "Identify your strengths and create a roadmap.",
  },
  {
    icon: FileText,
    title: "Resume & Cover Letter",
    desc: "Professional, ATS-optimized applications.",
  },
  {
    icon: Users,
    title: "Interview Coaching",
    desc: "Mock interviews with expert feedback.",
  },
  {
    icon: Network,
    title: "Networking",
    desc: "Build connections that open doors.",
  },
  {
    icon: DollarSign,
    title: "Salary Negotiation",
    desc: "Maximize your compensation confidently.",
  },
  {
    icon: User,
    title: "Personal Branding",
    desc: "Stand out with a strong online presence.",
  },
];

const steps = [
  "Initial Assessment – Discovery call",
  "Strategy Development – Career roadmap",
  "Skill Building – Resume & interview prep",
  "Job Search – Applications & support",
  "Career Growth – Long-term success",
];

const plans = [
  {
    name: "Career Coaching",
    tagline: "Perfect for getting started",
    price: "$1999",
    period: "/program",
    popular: true,
    features: [
      "Resume review",
      "1-on-1 coaching",
      "LinkedIn optimisation",
      "Interview preparation",
    ],
    cta: "Get Started",
  },
  {
    name: "Internship Program",
    tagline: "Most popular choice",
    price: "$4999",
    period: "/program",
    popular: false,
    features: [
      "Everything in Coaching",
      "Real-time projects",
      "Mock interviews",
      "Industry exposure",
    ],
    cta: "Get Started",
  },
  {
    name: "Academic Program",
    tagline: "Maximum support",
    price: "$5999",
    period: "/program",
    popular: false,
    features: [
      "Everything included",
      "Workshops access",
      "Company introductions",
      "Placement guarantee",
    ],
    cta: "Get Started",
  },
];

/* ───────────────── COMPONENTS ───────────────── */



function ServiceCard({ item }) {
  const Icon = item.icon;
  return (
    <div
      className="p-6 rounded-2xl bg-[#fafafa] border transition hover:shadow-md"
      style={{ borderColor: "rgba(105,24,220,0.08)" }}
    >
      <div
        className="w-11 h-11 flex items-center justify-center rounded-xl mb-4"
        style={{
          background:
            "linear-gradient(135deg, #6918DC 0%, #E94B6C 100%)",
        }}
      >
        <Icon className="text-white" size={20} />
      </div>
      <h3 className="font-bold text-base mb-1 text-[#1a0033]">{item.title}</h3>
      <p className="text-sm text-gray-500">{item.desc}</p>
    </div>
  );
}

function PricingCard({ plan }) {
  const [hovered, setHovered] = useState(false);
  const isPopular = plan.popular;

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300 flex flex-col"
      style={{
        background: isPopular
          ? "linear-gradient(160deg, #6918DC 0%, #B625B9 50%, #E94B6C 100%)"
          : "#fff",
        border: isPopular
          ? "none"
          : "1px solid rgba(105,24,220,0.1)",
        boxShadow: isPopular
          ? "0 24px 64px rgba(105,24,220,0.28)"
          : hovered
          ? "0 16px 48px rgba(105,24,220,0.1)"
          : "0 2px 12px rgba(105,24,220,0.05)",
        transform: isPopular
          ? "scale(1.04)"
          : hovered
          ? "translateY(-4px)"
          : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {isPopular && (
        <div className="flex justify-center pt-4">
          <span className="inline-flex items-center gap-1.5 font-body font-bold text-xs px-4 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}>
            <Star size={11} strokeWidth={2.5} />
            Most Popular
          </span>
        </div>
      )}

      <div className="p-7 flex flex-col gap-5 flex-1">
        {/* Plan Name */}
        <h3
          className="font-body font-bold text-xl"
          style={{ color: isPopular ? "#fff" : "#1a0033" }}
        >
          {plan.name}
        </h3>
        {/* Tagline */}
        <p
          className="font-body font-medium text-sm mt-1"
          style={{ color: isPopular ? "rgba(255,255,255,0.7)" : "#999" }}
        >
          {plan.tagline}
        </p>
        {/* Price */}
        <div className="flex items-end gap-1">
          <span
            className="font-display"
            style={{
              fontSize: "3rem",
              lineHeight: 1,
              color: isPopular ? "#fff" : "#6918DC",
            }}
          >
            {plan.price}
          </span>
          <span
            className="font-body font-medium text-sm mb-1"
            style={{ color: isPopular ? "rgba(255,255,255,0.6)" : "#aaa" }}
          >
            {plan.period}
          </span>
        </div>
        {/* Divider */}
        <div
          className="h-px w-full"
          style={{
            background: isPopular ? "rgba(255,255,255,0.2)" : "rgba(105,24,220,0.07)",
          }}
        />
        {/* Features */}
        <ul className="flex flex-col gap-3 text-sm">
          {plan.features.map((f) => (
            <li key={f} className="flex gap-2 items-start">
              <CheckCircle
                size={16}
                style={{ color: isPopular ? "#F6A83D" : "#6918DC" }}
              />
              {f}
            </li>
          ))}
        </ul>
        {/* CTA Button */}
        <Link to="/apply" className="mt-auto">
          <div
            className="mt-6 py-3 text-center rounded-full font-bold cursor-pointer transition"
            style={{
              background: isPopular
                ? "#fff"
                : "linear-gradient(90deg,#6918DC,#E94B6C)",
              color: isPopular ? "#6918DC" : "#fff",
            }}
          >
            {plan.cta} <ArrowRight size={14} className="inline ml-1" />
          </div>
        </Link>
      </div>
    </div>
  );
}

/* ───────────────── MAIN PAGE ───────────────── */

export default function CareerCoaching() {
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
            width: 440,
            height: 440,
            background: "rgba(249,168,61,0.18)",
            top: -130,
            right: -110,
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 380,
            height: 380,
            background: "rgba(105,24,220,0.22)",
            bottom: -100,
            left: -90,
            filter: "blur(80px)",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span
            className="inline-block font-body font-bold text-white/60 mb-4"
            style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase" }}
          >
            Career Pathways
          </span>

          <h1
            className="font-display text-contact text-white mb-4"
            style={{ letterSpacing: 1 }}
          >
            Career{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #F6A83D 0%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Coaching
            </span>
          </h1>

          <p className="font-body font-medium text-white/75 text-lg mb-8">
            Choose our career coaching program to achieve a professional role in desire industry.
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-3 justify-center">
            {["Coaching materials", "1 on 1 session", "interview preparation"].map((pill) => (
              <span
                key={pill}
                className="font-body font-bold text-sm text-white px-5 py-2 rounded-full"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.35)",
                  background: "rgba(255,255,255,0.1)",
                }}
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Coaching Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} item={s} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-xl mb-3">
              <div className="w-10 h-10 bg-purple-600 text-white flex items-center justify-center rounded-full">
                {i + 1}
              </div>
              {step}
              <ChevronRight className="ml-auto text-gray-300" />
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Coaching Plans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <PricingCard key={p.name} plan={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}