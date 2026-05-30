import React, { useState } from "react";
import { ArrowRight, X, Sparkles } from "lucide-react";

export default function HireInternsHero() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    sector: "",
    internCount: "",
    state: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.firstName || !form.email) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  return (
    <div className="font-body">
      {/* ANNOUNCEMENT BANNER */}
      {bannerVisible && (
        <div className="relative w-full bg-brand-gradient text-white text-center py-2.5 px-10 text-sm font-semibold">
          <Sparkles size={14} className="inline mr-1.5 mb-0.5" />
          Now Matching Businesses with Pre-Vetted Interns — Zero Recruitment Fees
          <button
            onClick={() => setBannerVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100 transition"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* HERO */}
      <section className="relative overflow-hidden min-h-[580px] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80"
          alt="Hire Interns"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-20 flex flex-col lg:flex-row items-center gap-12">

          {/* LEFT */}
          <div className="flex-1 text-white max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              Hire Skilled Interns
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              Find the{" "}
              <span className="bg-gradient-to-r from-brand-pink to-brand-orange bg-clip-text text-transparent">
                Skilled Intern
              </span>
              <br />
              your team needs!
            </h1>

            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Access <strong className="text-white">pre-vetted, job-ready graduates</strong> across
              12+ industries. Zero recruitment fees. Flexible placement durations.
            </p>

            <div className="flex flex-wrap gap-3">
              {["500+ Interns Placed", "12+ Industry Sectors", "Zero Recruitment Fee"].map((tag) => (
                <span
                  key={tag}
                  className="text-sm font-semibold text-white px-4 py-2 rounded-full"
                  style={{
                    border: "1.5px solid rgba(255,255,255,0.3)",
                    background: "rgba(255,255,255,0.08)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 mt-8">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=60&q=80",
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=60&q=80",
                  "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=60&q=80",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-9 h-9 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <p className="text-white/80 text-sm font-medium">
                Trusted by <strong className="text-white">50+ companies</strong> across Australia
              </p>
            </div>
          </div>

          {/* RIGHT — Lead Gen Form */}
          <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden flex-shrink-0">
            <div className="bg-brand-gradient px-6 py-5 text-white text-center">
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-1 text-white/80">Free Service</p>
              <h3 className="text-lg font-extrabold leading-snug">
                Get Your Free Intern<br />Matching Pack
              </h3>
              <p className="text-white/75 text-xs mt-1">
                Tell us what you need — we'll find the right fit.
              </p>
            </div>

            <div className="p-6">
              {submitted ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-brand-gradient flex items-center justify-center text-white text-xl">✓</div>
                  <h4 className="font-bold text-brand-purple text-lg mb-1">Request received!</h4>
                  <p className="text-gray-500 text-sm">Our team will contact you within 24 hours.</p>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange}
                      className="w-full p-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-brand-purple" />
                    <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange}
                      className="w-full p-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-brand-purple" />
                  </div>
                  <input name="email" type="email" placeholder="Work Email Address" value={form.email} onChange={handleChange}
                    className="w-full p-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-brand-purple" />
                  <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange}
                    className="w-full p-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-brand-purple" />
                  <input name="company" placeholder="Company Name" value={form.company} onChange={handleChange}
                    className="w-full p-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-brand-purple" />
                  <select name="sector" value={form.sector} onChange={handleChange}
                    className="w-full p-2.5 rounded-lg border border-gray-200 text-sm text-gray-500 focus:outline-none focus:border-brand-purple">
                    <option value="">Industry Sector</option>
                    {["Information Technology","Accounting & Finance","Engineering","Healthcare","Marketing & Sales","Human Resources","Business & Management","Data & Analytics"].map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                  <select name="internCount" value={form.internCount} onChange={handleChange}
                    className="w-full p-2.5 rounded-lg border border-gray-200 text-sm text-gray-500 focus:outline-none focus:border-brand-purple">
                    <option value="">How many interns do you need?</option>
                    {["1","2–3","4–5","6–10","10+"].map((n) => (
                      <option key={n}>{n}</option>
                    ))}
                  </select>
                  <select name="state" value={form.state} onChange={handleChange}
                    className="w-full p-2.5 rounded-lg border border-gray-200 text-sm text-gray-500 focus:outline-none focus:border-brand-purple">
                    <option value="">State</option>
                    {["SA","VIC","NSW","QLD","WA","ACT","TAS","NT"].map((s) => <option key={s}>{s}</option>)}
                  </select>
                  <button
                    onClick={handleSubmit}
                    disabled={loading || !form.firstName || !form.email}
                    className="w-full py-3 rounded-full text-white font-bold bg-brand-gradient hover:scale-105 transition disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {loading ? "Sending..." : <><span>Find My Intern</span><ArrowRight size={15} /></>}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
