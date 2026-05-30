import React, { useState } from "react";
import { Search } from "lucide-react";
import BusinessAdvisoryWizard from "./BusinessAdvisoryWizard";

const mediaBadges = [
  "ABC Australia",
  "9 News",
  "Daily Telegraph",
  "Sydney Morning Herald",
  "news.com.au",
];

export default function BusinessAdvisoryHero() {
  const [postcode, setPostcode] = useState("");
  const [wizardOpen, setWizardOpen] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (postcode.trim().length < 3) {
      setError("Please enter a valid postcode or suburb.");
      return;
    }
    setError("");
    setWizardOpen(true);
  };

  return (
    <>
      <section className="relative overflow-hidden font-body">
        {/* BG image */}
        <img
          src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=1600&q=80"
          alt="Business Advisory"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-28 md:py-36">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8 max-w-3xl drop-shadow-lg">
            Compare free quotes from<br className="hidden md:block" />
            <span className="bg-gradient-to-r from-brand-pink to-brand-orange bg-clip-text text-transparent">
              {" "}business advisors
            </span>{" "}now!
          </h1>

          {/* Search bar */}
          <div className="flex w-full max-w-lg gap-0 rounded-xl overflow-hidden shadow-2xl">
            <input
              className="flex-1 px-5 py-4 text-base font-semibold text-gray-800 focus:outline-none"
              placeholder="Enter your postcode or suburb"
              value={postcode}
              onChange={(e) => { setPostcode(e.target.value); setError(""); }}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button
              onClick={handleSearch}
              className="px-7 py-4 bg-brand-gradient text-white font-bold text-sm hover:opacity-90 transition flex items-center gap-2"
            >
              <Search size={16} />
              Search
            </button>
          </div>

          {error && (
            <p className="mt-3 text-sm text-red-300 font-semibold">{error}</p>
          )}
        </div>
      </section>

      {/* AS SEEN IN */}
      <div className="w-full bg-white border-b border-gray-100 py-5 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-8">
          {mediaBadges.map((name) => (
            <span key={name} className="text-sm font-bold text-gray-300 tracking-wide uppercase">
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* WIZARD */}
      {wizardOpen && (
        <BusinessAdvisoryWizard
          postcodeInitial={postcode}
          onClose={() => setWizardOpen(false)}
        />
      )}
    </>
  );
}
