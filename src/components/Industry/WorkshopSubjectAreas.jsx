import React, { useState } from "react";

const subjects = [
  {
    title: "Communication",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    title: "Finance",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Human Resources",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Leadership & Management",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Professional Development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3.33 1.67 8.67 1.67 12 0v-5" />
      </svg>
    ),
  },
  {
    title: "Project Management",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Sales",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
];

// Gradient for each card on hover — cycles through brand palette
const gradients = [
  "linear-gradient(135deg, #6918DC, #B625B9)",
  "linear-gradient(135deg, #B625B9, #E94B6C)",
  "linear-gradient(135deg, #E94B6C, #F6A83D)",
  "linear-gradient(135deg, #6918DC, #E94B6C)",
  "linear-gradient(135deg, #F6A83D, #E94B6C)",
  "linear-gradient(135deg, #B625B9, #F6A83D)",
  "linear-gradient(135deg, #6918DC, #F6A83D)",
  "linear-gradient(135deg, #E94B6C, #6918DC)",
];

function SubjectCard({ subject, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center gap-3 p-6 rounded-2xl cursor-pointer transition-all duration-300"
      style={{
        background: hovered ? gradients[index % gradients.length] : "#f9f9fb",
        border: hovered ? "none" : "1.5px solid #ebebf0",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 16px 40px rgba(105,24,220,0.2)"
          : "0 2px 8px rgba(0,0,0,0.04)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="transition-colors duration-300"
        style={{ color: hovered ? "#fff" : "#6918DC" }}
      >
        {subject.icon}
      </div>
      <p
        className="text-sm font-bold text-center leading-snug transition-colors duration-300"
        style={{ color: hovered ? "#fff" : "#1a0033" }}
      >
        {subject.title}
      </p>
    </div>
  );
}

export default function WorkshopSubjectAreas() {
  return (
    <section className="py-20 bg-white font-body">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-brand-pink mb-3">
            Browse by Topic
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            Workshop Subject Areas
          </h2>
          <div className="w-16 h-1 bg-brand-gradient rounded-full mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {subjects.map((subject, i) => (
            <SubjectCard key={subject.title} subject={subject} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
