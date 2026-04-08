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

function StatPill({ value, label }) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 text-center border border-white/10">
      <div className="text-lg font-bold text-white">{value}</div>
      <div className="text-xs text-white/70">{label}</div>
    </div>
  );
}

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

      <h3 className="font-bold text-base mb-1 text-[#1a0033]">
        {item.title}
      </h3>
      <p className="text-sm text-gray-500">{item.desc}</p>
    </div>
  );
}

function PricingCard({ plan }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300 flex flex-col"
      style={{
        background: plan.popular
          ? "linear-gradient(160deg, #6918DC 0%, #B625B9 50%, #E94B6C 100%)"
          : "#fff",
        border: plan.popular
          ? "none"
          : "1px solid rgba(105,24,220,0.1)",
        transform: plan.popular
          ? "scale(1.05)"
          : hovered
          ? "translateY(-5px)"
          : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {plan.popular && (
        <div className="text-center pt-4 text-white text-xs flex justify-center items-center gap-1">
          <Star size={12} /> Most Popular
        </div>
      )}

      <div className="p-7 flex flex-col gap-5 flex-1">
        <h3
          className="text-xl font-bold"
          style={{ color: plan.popular ? "#fff" : "#1a0033" }}
        >
          {plan.name}
        </h3>

        <p
          className="text-sm"
          style={{
            color: plan.popular ? "rgba(255,255,255,0.7)" : "#999",
          }}
        >
          {plan.tagline}
        </p>

        <div className="text-4xl font-bold">
          {plan.price}
          <span className="text-sm ml-1 opacity-70">
            {plan.period}
          </span>
        </div>

        <ul className="flex flex-col gap-3 text-sm">
          {plan.features.map((f) => (
            <li key={f} className="flex gap-2">
              <CheckCircle
                size={16}
                style={{
                  color: plan.popular ? "#F6A83D" : "#6918DC",
                }}
              />
              {f}
            </li>
          ))}
        </ul>

        <Link to="/apply" className="mt-auto">
          <div
            className="mt-6 py-3 text-center rounded-full font-bold"
            style={{
              background: plan.popular
                ? "#fff"
                : "linear-gradient(90deg,#6918DC,#E94B6C)",
              color: plan.popular ? "#6918DC" : "#fff",
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
    <div className="w-full font-sans">

      {/* HERO */}
      <section
        className="relative py-24 text-white text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #6918DC 0%, #B625B9 40%, #E94B6C 75%, #F6A83D 100%)",
        }}
      >
        {/* Blobs */}
        <div
          className="absolute rounded-full"
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
          className="absolute rounded-full"
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
          <span className="text-xs tracking-widest text-white/60 mb-4 block">
            Coaching Program
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Career{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
              Coaching
            </span>
          </h1>

          <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto">
            Launch your career with prestigious internships at top companies.
          </p>

          <Link to="/apply">
            <button className="bg-white text-purple-700 px-8 py-4 rounded-full font-bold hover:scale-105 transition">
              Get In Touch
            </button>
          </Link>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 max-w-xl mx-auto mt-10">
            <StatPill value="190+" label="Students" />
            <StatPill value="85%" label="Success Rate" />
            <StatPill value="5.0★" label="Rating" />
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
          <h2 className="text-3xl font-bold text-center mb-12">
            How It Works
          </h2>

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
          <h2 className="text-3xl font-bold text-center mb-12">
            Coaching Plans
          </h2>

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