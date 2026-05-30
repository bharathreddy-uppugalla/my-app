import React, { useState } from "react";
import { ArrowRight, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const profiles = [
  {
    name: "Arjun Sharma",
    role: "Software Developer Intern",
    university: "University of Adelaide",
    degree: "Master of Computer Science",
    location: "Adelaide, SA",
    skills: ["React", "Python", "SQL", "Node.js"],
    available: "Immediately",
    gradient: "linear-gradient(135deg, #6918DC, #B625B9)",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    badge: "Top Pick",
  },
  {
    name: "Priya Patel",
    role: "Accounting & Finance Intern",
    university: "UniSA",
    degree: "Master of Professional Accounting",
    location: "Adelaide, SA",
    skills: ["MYOB", "Excel", "Xero", "Tax Compliance"],
    available: "2 weeks",
    gradient: "linear-gradient(135deg, #B625B9, #E94B6C)",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
    badge: "Featured",
  },
  {
    name: "Carlos Mendez",
    role: "Digital Marketing Intern",
    university: "Flinders University",
    degree: "MBA (Marketing)",
    location: "Melbourne, VIC",
    skills: ["SEO", "Google Ads", "Social Media", "Analytics"],
    available: "Immediately",
    gradient: "linear-gradient(135deg, #E94B6C, #F6A83D)",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
    badge: "New",
  },
  {
    name: "Sophie Zhang",
    role: "Data Analyst Intern",
    university: "University of Melbourne",
    degree: "Master of Business Analytics",
    location: "Sydney, NSW",
    skills: ["Python", "Tableau", "R", "Power BI"],
    available: "1 month",
    gradient: "linear-gradient(135deg, #6918DC, #F6A83D)",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    badge: "High Demand",
  },
  {
    name: "Liam O'Brien",
    role: "Civil Engineering Intern",
    university: "RMIT University",
    degree: "Bachelor of Civil Engineering",
    location: "Brisbane, QLD",
    skills: ["AutoCAD", "Revit", "Project Planning", "Drafting"],
    available: "Immediately",
    gradient: "linear-gradient(135deg, #B625B9, #F6A83D)",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    badge: "Available Now",
  },
  {
    name: "Fatima Al-Hassan",
    role: "HR & People Ops Intern",
    university: "UniSA",
    degree: "Dual MBA & Global Project Management",
    location: "Adelaide, SA",
    skills: ["Recruitment", "HRIS", "Onboarding", "Employee Relations"],
    available: "2 weeks",
    gradient: "linear-gradient(135deg, #F6A83D, #E94B6C)",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80",
    badge: "Top Pick",
  },
];

const gradients = [
  "linear-gradient(135deg, #6918DC, #B625B9)",
  "linear-gradient(135deg, #B625B9, #E94B6C)",
  "linear-gradient(135deg, #E94B6C, #F6A83D)",
  "linear-gradient(135deg, #6918DC, #E94B6C)",
  "linear-gradient(135deg, #F6A83D, #E94B6C)",
  "linear-gradient(135deg, #B625B9, #F6A83D)",
];

function ProfileCard({ profile, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group rounded-2xl overflow-hidden bg-white transition-all duration-300 flex flex-col"
      style={{
        border: "1.5px solid #ebebf0",
        boxShadow: hovered ? "0 20px 60px rgba(105,24,220,0.14)" : "0 2px 12px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gradient bar */}
      <div className="h-[3px]" style={{ background: profile.gradient }} />

      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Avatar row */}
        <div className="flex items-center gap-4">
          <div className="relative flex-shrink-0">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
            />
            {/* Online dot */}
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-extrabold text-[0.95rem] text-[#1a0033] leading-tight">
                  {profile.name}
                </h3>
                <p className="text-xs font-semibold text-gray-500 mt-0.5">{profile.role}</p>
              </div>
              <span
                className="flex-shrink-0 text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
                style={{ background: profile.gradient }}
              >
                {profile.badge}
              </span>
            </div>
          </div>
        </div>

        {/* Meta */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <GraduationCap size={12} className="flex-shrink-0" />
            <span className="truncate">{profile.degree}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Briefcase size={12} className="flex-shrink-0" />
            <span>{profile.university}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <MapPin size={12} className="flex-shrink-0" />
            <span>{profile.location}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100" />

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5">
          {profile.skills.map((skill) => (
            <span
              key={skill}
              className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Available */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-semibold text-gray-600">
              Available: <strong>{profile.available}</strong>
            </span>
          </div>
        </div>

        {/* CTA */}
        <Link to="/industry/hire-interns/request">
          <div
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full font-bold text-sm text-white transition-opacity duration-200"
            style={{ background: profile.gradient, opacity: hovered ? 0.88 : 1 }}
          >
            Request This Intern <ArrowRight size={14} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default function HireInternsProfiles() {
  return (
    <section
      className="py-20 font-body"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f5f5fa 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-brand-pink mb-2">
              Ready to Work
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Featured Intern Profiles
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Pre-screened, coached, and ready to contribute from day one.
            </p>
          </div>
          <Link
            to="/industry/hire-interns/all"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-purple hover:gap-3 transition-all whitespace-nowrap"
          >
            View all profiles <ArrowRight size={15} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((p, i) => (
            <ProfileCard key={p.name} profile={p} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-500 text-sm mb-4">
            Can't find what you need? We'll match you with the{" "}
            <strong className="text-gray-800">perfect candidate</strong> from our pipeline.
          </p>
          <Link to="/industry/hire-interns/request">
            <button className="px-8 py-3.5 rounded-full text-white font-bold bg-brand-gradient shadow-lg hover:scale-105 transition inline-flex items-center gap-2">
              Submit a Hiring Request <ArrowRight size={15} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
