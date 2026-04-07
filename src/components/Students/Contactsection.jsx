import React, { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", goals: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section className="w-full py-20 bg-brand-gradient text-white font-body">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">

        {/* LEFT */}
        <div>
          <h2 className="text-h1 mb-6">
            Let us kickstart your <span className="text-brand-orange">career</span>
          </h2>

          <p className="mb-6 text-white/90 leading-relaxed">
            Are you looking to improve your professional profile? You are in the right place.
            At Vis-Grow Internships, we help you become the ideal candidate by building your resume,
            optimising your LinkedIn profile, and connecting you with host organisations.
          </p>

          <p className="mb-8 text-white/80 leading-relaxed">
            No matter what time of the day it is, we are here to support you. Feel free to reach out anytime —
            our consultants are always ready to guide you.
          </p>

          {/* CONTACT INFO */}
          <div className="space-y-6">

            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-3 rounded-lg">📧</div>
              <div>
                <p className="font-bold">Email</p>
                <p className="text-white/80">hello@visgrowinternships.com.au</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-3 rounded-lg">📞</div>
              <div>
                <p className="font-bold">Phone</p>
                <p className="text-white/80">1300 891 365</p>
                <p className="text-white/80">0423 737 675</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-3 rounded-lg">📍</div>
              <div>
                <p className="font-bold">Head Office</p>
                <p className="text-white/80">
                  Innovation House,<br />50 Mawson Lakes Blvd,<br />Mawson Lakes, SA 5095
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white text-black rounded-2xl p-8 shadow-2xl">

          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-gradient flex items-center justify-center text-white text-xl">
                ✓
              </div>
              <h3 className="text-h2 mb-2">Message Sent!</h3>
              <p className="text-gray-600">We will get back to you shortly.</p>
            </div>
          ) : (
            <>
              <h3 className="text-h2 mb-6 text-brand-purple">Get in Touch</h3>

              <input
                className="w-full mb-4 p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-purple"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
              />

              <input
                className="w-full mb-4 p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-purple"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
              />

              <input
                className="w-full mb-4 p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-purple"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />

              <textarea
                className="w-full mb-6 p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-purple"
                name="goals"
                placeholder="Tell us about your goals"
                value={form.goals}
                onChange={handleChange}
              />

              <button
                onClick={handleSubmit}
                disabled={loading || !form.name || !form.email}
                className="w-full py-3 rounded-full text-white font-bold bg-brand-gradient hover:scale-105 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </>
          )}

        </div>
      </div>
    </section>
  );
}
