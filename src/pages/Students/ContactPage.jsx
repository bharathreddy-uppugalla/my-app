import React, { useState } from "react";
import Footer from "../../components/Students/Footer";
import Header from "../../components/Students/Header";

export default function StudentContactPage() {
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
    <>
    <Header/>
    <div className="w-full bg-white font-body">

      {/* HERO */}
      <section className="w-full py-20 px-6 text-center bg-brand-gradient text-white">
        <h1 className="text-h1 mb-4">Contact Us</h1>
        <p className="max-w-3xl mx-auto text-white/90">
          Let us kickstart your career with our effective internship program.
        </p>
      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Are you looking to improve your professional profile? At Vis-Grow Internships, we help you become the ideal candidate by building your resume, optimising your LinkedIn profile, and connecting you with host organisations.
        </p>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT INFO */}
          <div>
            <h2 className="text-h2 text-brand-purple mb-6">Get in Touch</h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              No matter what time of the day it is, we are here to support you. Our consultants are always ready to guide you and answer your questions.
            </p>

   <div className="space-y-6">

  {/* EMAIL */}
  <div className="flex items-start gap-4">
    <div className="bg-brand-gradient p-3 rounded-lg flex items-center justify-center">
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </div>
    <div>
      <p className="font-bold">Email</p>
      <p className="text-gray-600">hello@visgrowinternships.com.au</p>
    </div>
  </div>

  {/* PHONE */}
  <div className="flex items-start gap-4">
    <div className="bg-brand-gradient p-3 rounded-lg flex items-center justify-center">
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h2.28a2 2 0 011.95 1.57l.7 3.11a2 2 0 01-.45 1.87l-1.27 1.27a16 16 0 006 6l1.27-1.27a2 2 0 011.87-.45l3.11.7A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.16 21 3 14.84 3 7V5z" />
      </svg>
    </div>
    <div>
      <p className="font-bold">Phone</p>
      <p className="text-gray-600">1300 891 365</p>
      <p className="text-gray-600">0423 737 675</p>
    </div>
  </div>

  {/* LOCATION */}
  <div className="flex items-start gap-4">
    <div className="bg-brand-gradient p-3 rounded-lg flex items-center justify-center">
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0L6.343 16.657A8 8 0 1117.657 16.657z" />
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </div>
    <div>
      <p className="font-bold">Head Office</p>
      <p className="text-gray-600">
        Innovation House,<br />
        50 Mawson Lakes Blvd,<br />
        Mawson Lakes, SA 5095
      </p>
                </div>
              </div>

            </div>
          </div>

          {/* FORM */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">

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
                <h3 className="text-h2 mb-6 text-brand-purple">Send a Message</h3>

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

    </div>
    <Footer/>
            </>
  );
}
