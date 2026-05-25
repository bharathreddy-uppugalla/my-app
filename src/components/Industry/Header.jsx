import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const NAV_ITEMS = [
    { label: "Home", path: "/industry/home" },
  { label: "Workshops", path: "/industry/workshops" },
  { label: "Upskilling Staff", path: "/industry/upskilling" },
  { label: "Hire Skilled Interns", path: "/industry/interns" },
  { label: "Business Advisory", path: "/industry/advisory" },
  { label: "Owner Manager Program", path: "/industry/owners" },
  { label: "Leadership Development", path: "/industry/leadership" },
];

const SearchFilterIcon = () => (
  <div className="flex items-center gap-1 text-gray-500 hover:text-purple-700 transition cursor-pointer">
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>

    <svg
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h8m-8 6h16"
      />
    </svg>
  </div>
);

export default function IndustryHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top gradient */}
      <div className="h-2 w-full bg-gradient-to-r from-purple-700 via-pink-500 to-orange-400" />

      <div className="w-full px-6 lg:px-10">

        {/* Top bar */}
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src={logo}
              alt="Visgrow"
              className="h-[70px] w-auto object-contain"
            />
          </Link>

          {/* Desktop tabs */}
          <nav className="hidden xl:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-sm font-semibold text-gray-700 hover:text-purple-700 transition whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div className="hidden xl:flex items-center gap-5">
            <SearchFilterIcon />

            <Link
              to="/contact"
              className="px-6 py-3 rounded-full text-white text-sm font-bold bg-gradient-to-r from-purple-700 via-pink-500 to-orange-400 shadow-md hover:scale-105 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile button */}
          <button
            className="xl:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="xl:hidden border-t border-gray-100 py-5 flex flex-col gap-4">

            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="text-gray-700 font-semibold text-lg hover:text-purple-700"
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 w-fit px-6 py-3 rounded-full text-white text-sm font-bold bg-gradient-to-r from-purple-700 via-pink-500 to-orange-400 shadow-md"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}