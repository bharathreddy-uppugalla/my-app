import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const footerLinks = {
  Home: [
    { label: "Home", path: "/" },
    { label: "About Visgrow", path: "/about" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Contact Us", path: "/contact" },
  ],

  "Students / Graduates": [
    { label: "Career Coaching", path: "/career-coaching" },
    { label: "Become an Intern", path: "/become-intern" },
    { label: "Graduate Jobs", path: "/grad-jobs" },
    { label: "Workshops", path: "/student/workshops" },
    { label: "Mentor Program", path: "/mentor-program" },
    { label: "Academic Support", path: "/academics" },
  ],

  "Industry / Business": [
    { label: "Workshops", path: "/industry/workshops" },
    { label: "Upskill Staff", path: "/industry/upskill-staff" },
    { label: "Hire Skilled Interns", path: "/industry/hire-interns" },
    { label: "Business Advisory", path: "/industry/business-advisory" },
    { label: "Owner-Managed Firms", path: "/industry/owner-managed" },
    { label: "Leadership Development", path: "/industry/leadership" },
  ],

  "About Us": [
    { label: "Meet the Team", path: "/about" },
    { label: "Why Choose Us", path: "/about" },
    { label: "Our Partners", path: "/about" },
    { label: "Careers", path: "/about" },
  ],

  Testimonials: [
    { label: "Students", path: "/testimonials" },
    { label: "Graduates", path: "/testimonials" },
    { label: "Industry Partners", path: "/testimonials" },
  ],
};

const languages = [
  { label: "English (Australia)",   path: "/" },
  { label: "Chinese (Traditional)", path: "/zh" },
  { label: "Spanish",               path: "/es" },
];

export default function Footer() {
  return (
    <footer className="bg-white font-body">

      {/* ── TOP GRADIENT LINE ── */}
      <div className="h-1 w-full bg-brand-gradient" />

      {/* ── UPPER BAND: Logo + Languages + Contact ── */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-8 flex flex-wrap items-start justify-between gap-8">

          {/* Logo + languages */}
          <div className="flex flex-col gap-5">
            <Link to="/">
              <img
                src={logo}
                alt="Visgrow Internships"
                className="h-16 w-auto object-contain"
              />
            </Link>

            <div className="flex flex-col gap-2">
              {languages.map((l) => (
                <Link
                  key={l.label}
                  to={l.path}
                  className="flex items-center gap-1.5 text-sm font-semibold text-brand-purple hover:text-brand-pink transition-colors"
                >
                  {l.label}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Us card */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-2xl px-6 py-5 min-w-[300px]">
            <p className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">Contact Us</p>

            <div className="flex flex-col gap-3">
              {/* Phone */}
              <a href="tel:1300891365" className="flex items-center gap-2.5 text-sm font-semibold text-gray-700 hover:text-brand-purple transition-colors">
                <span className="w-7 h-7 rounded-lg bg-brand-gradient flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.61 3.4 2 2 0 013.6 1.22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.78a16 16 0 006 6l1.27-.95a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </span>
                1300 891 365
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/610423737675" className="flex items-center gap-2.5 text-sm font-semibold text-gray-700 hover:text-brand-purple transition-colors">
                <span className="w-7 h-7 rounded-lg bg-brand-gradient flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5" fill="white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </span>
                0423 737 675
              </a>

              {/* Email */}
              <a href="mailto:hello@visgrowinternships.com.au" className="flex items-center gap-2.5 text-sm font-semibold text-gray-700 hover:text-brand-purple transition-colors">
                <span className="w-7 h-7 rounded-lg bg-brand-gradient flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                hello@visgrowinternships.com.au
              </a>
            </div>

            {/* Find Us */}
            <div className="mt-4 pt-4 border-t border-purple-100">
              <p className="text-xs font-bold text-brand-purple mb-1 flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Find Us
              </p>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                Adelaide | Melbourne | Sydney | Brisbane
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── MIDDLE: Nav columns ── */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4
                className="text-sm font-bold mb-4 bg-brand-gradient bg-clip-text"
                style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                {heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.path}
                      className="text-sm text-gray-500 font-medium hover:text-brand-purple transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-5 flex flex-wrap items-center justify-between gap-4">

          {/* Copyright */}
          <p className="text-sm text-gray-400 font-medium">
            © {new Date().getFullYear()} Visgrow Internships. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-gray-400 mr-1">Follow Us</span>
            <div className="w-8 h-px bg-gray-300" />

            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-brand-gradient flex items-center justify-center transition-all group">
              <svg className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-brand-gradient flex items-center justify-center transition-all group">
              <svg className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-brand-gradient flex items-center justify-center transition-all group">
              <svg className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* TikTok */}
            <a href="https://tiktok.com" target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-brand-gradient flex items-center justify-center transition-all group">
              <svg className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z"/>
              </svg>
            </a>
          </div>

        </div>
      </div>

      {/* ── BOTTOM GRADIENT LINE ── */}
      <div className="h-1 w-full bg-brand-gradient" />

    </footer>
  );
}