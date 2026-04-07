import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const NAV_ITEMS = [
  { label: "Home", path: "/student/home" },
  { label: "Job Sector", path: "/student/jobsector" },
  { label: "Carrer Coaching", path: "/students/carrercoaching" },
  { label: "Become a Intern", path: "/students/becomeaintern" },
  { label: "Acadamic", path: "/students/acadamics" },
];

const SearchFilterIcon = () => (
  <div className="flex items-center gap-1 text-gray-500 hover:text-brand-purple transition cursor-pointer">
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>

    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
    </svg>
  </div>
);

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="h-2 w-full bg-brand-gradient" />

      <div className="w-full px-10 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src={logo}
              alt="Visgrow"
              className="h-[70px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-gray-700 font-semibold hover:text-brand-purple transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-6">
            <SearchFilterIcon />

            <Link
              to="/student/contact"
              className="px-6 py-3 rounded-full text-white text-sm font-bold bg-brand-gradient shadow-md hover:scale-105 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 flex flex-col gap-4">

            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-gray-700 text-lg font-semibold hover:text-brand-purple"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/contact"
              className="mt-3 w-fit px-6 py-2.5 rounded-full text-white text-sm font-bold bg-brand-gradient shadow-md"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>

          </div>
        )}
      </div>
    </header>
  );
}