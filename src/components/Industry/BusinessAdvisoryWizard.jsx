import React, { useState } from "react";
import { X, ArrowLeft, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";

/* ─── STEP DEFINITIONS ─────────────────────────────── */
const STEPS = [
  {
    id: "duration",
    question: "How long has the business been running?",
    type: "radio",
    options: ["Not started yet", "Less than 1 year", "1 – 2 years", "3 – 4 years", "5 years or more"],
    other: true,
  },
  {
    id: "employees",
    question: "How many employees do you have?",
    type: "radio",
    options: ["Just me", "2 – 5", "6 – 15", "16 – 50", "51 – 200", "200+"],
    other: false,
  },
  {
    id: "industry",
    question: "What industry is your business in?",
    type: "radio",
    options: [
      "Technology & IT",
      "Accounting & Finance",
      "Healthcare",
      "Retail & E-commerce",
      "Construction & Engineering",
      "Education",
      "Hospitality & Tourism",
      "Professional Services",
    ],
    other: true,
  },
  {
    id: "consulting",
    question: "Which type(s) of consulting are you interested in?",
    type: "checkbox",
    options: [
      "Business strategy",
      "Operations & process improvement",
      "Financial & accounting advice",
      "HR & people management",
      "Marketing & growth",
      "IT & digital transformation",
      "Leadership development",
      "Legal & compliance",
    ],
    other: false,
  },
  {
    id: "goals",
    question: "What are your goals for this service?",
    type: "checkbox",
    options: [
      "Grow revenue",
      "Reduce costs",
      "Improve team performance",
      "Enter a new market",
      "Fix an existing problem",
      "Plan for exit or sale",
      "Build systems & processes",
    ],
    other: true,
  },
  {
    id: "timeline",
    question: "How long do you need a consultant?",
    type: "radio",
    options: [
      "Just a one-off session",
      "A few weeks",
      "1 – 3 months",
      "3 – 6 months",
      "6 – 12 months",
      "Ongoing / long-term",
    ],
    other: false,
  },
  {
    id: "workStyle",
    question: "How would you like to work with the consultant?",
    type: "radio",
    options: [
      "In-person (on-site at my business)",
      "Online / video calls",
      "Phone calls",
      "Either in-person or online",
    ],
    other: false,
  },
  {
    id: "hiringDecision",
    question: "How likely are you to make a hiring decision?",
    type: "radio",
    options: [
      "I'm ready to hire now",
      "Within the next 2 weeks",
      "Within the next month",
      "I'm still researching",
    ],
    other: false,
  },
  {
    id: "postcode",
    question: "Where do you need the Business Consultant?",
    type: "postcode",
    hint: "The postcode or town for the address where you want the Business Consultant.",
  },
  {
    id: "contact",
    question: "Almost done! How should we reach you?",
    type: "contact",
  },
];

/* ─── QUIT CONFIRM MODAL ─────────────────────────── */
function QuitModal({ onQuit, onContinue }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center animate-fadeIn">
        <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-4">
          <AlertTriangle size={26} className="text-amber-500" />
        </div>
        <h3 className="text-xl font-extrabold text-gray-900 mb-2">Are you sure you want to leave?</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-7">
          We're asking a few questions so we can find you the right pros, and send you quotes fast and free!
        </p>
        <div className="flex gap-3">
          <button
            onClick={onQuit}
            className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-bold hover:border-gray-300 transition text-sm"
          >
            Quit
          </button>
          <button
            onClick={onContinue}
            className="flex-1 py-3 rounded-xl text-white font-bold bg-brand-gradient hover:scale-105 transition text-sm"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── SUCCESS SCREEN ─────────────────────────────── */
function SuccessScreen({ onClose }) {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
      <div className="w-20 h-20 rounded-full bg-brand-gradient flex items-center justify-center mx-auto mb-5 shadow-xl">
        <CheckCircle size={36} className="text-white" />
      </div>
      <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Request Submitted!</h3>
      <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-7">
        One of our expert business advisors will be in touch with you shortly — usually within 24 hours.
      </p>
      <button
        onClick={onClose}
        className="px-8 py-3 rounded-full text-white font-bold bg-brand-gradient hover:scale-105 transition"
      >
        Done
      </button>
    </div>
  );
}

/* ─── MAIN WIZARD ─────────────────────────────────── */
export default function BusinessAdvisoryWizard({ postcodeInitial = "", onClose }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [otherValues, setOtherValues] = useState({});
  const [showQuit, setShowQuit] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [contact, setContact] = useState({ email: "", phone: "" });
  const [postcodeVal, setPostcodeVal] = useState(postcodeInitial);
  const [error, setError] = useState("");

  const step = STEPS[stepIndex];
  const progress = ((stepIndex) / STEPS.length) * 100;

  /* ── Answer helpers ── */
  const toggleCheckbox = (stepId, option) => {
    setAnswers((prev) => {
      const current = prev[stepId] || [];
      return {
        ...prev,
        [stepId]: current.includes(option)
          ? current.filter((o) => o !== option)
          : [...current, option],
      };
    });
  };

  const setRadio = (stepId, option) => {
    setAnswers((prev) => ({ ...prev, [stepId]: option }));
  };

  const isAnswered = () => {
    if (step.type === "radio") return !!answers[step.id];
    if (step.type === "checkbox") return (answers[step.id] || []).length > 0;
    if (step.type === "postcode") return postcodeVal.trim().length >= 3;
    if (step.type === "contact") return contact.email.includes("@") && contact.phone.trim().length >= 8;
    return true;
  };

  const handleNext = () => {
    if (!isAnswered()) { setError("Please select an option to continue."); return; }
    setError("");
    if (stepIndex < STEPS.length - 1) {
      setStepIndex((i) => i + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    setError("");
    if (stepIndex === 0) { setShowQuit(true); return; }
    setStepIndex((i) => i - 1);
  };

  const handleCloseAttempt = () => setShowQuit(true);

  /* ─── OPTION ROWS ─── */
  const OptionRow = ({ label, selected, onClick }) => (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-4 px-5 py-4 rounded-xl border-2 text-left transition-all duration-150"
      style={{
        borderColor: selected ? "#6918DC" : "#e5e7eb",
        background: selected ? "rgba(105,24,220,0.04)" : "#fff",
      }}
    >
      <div
        className="w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all"
        style={{ borderColor: selected ? "#6918DC" : "#d1d5db" }}
      >
        {selected && <div className="w-2.5 h-2.5 rounded-full bg-brand-purple" />}
      </div>
      <span className="text-sm font-semibold text-gray-700">{label}</span>
    </button>
  );

  const CheckRow = ({ label, selected, onClick }) => (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-4 px-5 py-4 rounded-xl border-2 text-left transition-all duration-150"
      style={{
        borderColor: selected ? "#6918DC" : "#e5e7eb",
        background: selected ? "rgba(105,24,220,0.04)" : "#fff",
      }}
    >
      <div
        className="w-5 h-5 rounded-lg border-2 flex-shrink-0 flex items-center justify-center transition-all"
        style={{
          borderColor: selected ? "#6918DC" : "#d1d5db",
          background: selected ? "#6918DC" : "transparent",
        }}
      >
        {selected && (
          <svg viewBox="0 0 12 10" className="w-3 h-3">
            <polyline points="1,5 4,8 11,1" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <span className="text-sm font-semibold text-gray-700">{label}</span>
    </button>
  );

  return (
    <>
      {/* BACKDROP */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 backdrop-blur-sm px-4">
        <div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[92vh] flex flex-col overflow-hidden"
          style={{ animation: "slideUp 0.25s ease" }}
        >
          {/* ── PROGRESS BAR ── */}
          <div className="relative h-1.5 bg-gray-100 flex-shrink-0">
            <div
              className="absolute left-0 top-0 h-full bg-brand-gradient transition-all duration-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* ── HEADER ── */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-shrink-0">
            <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">
              Step {stepIndex + 1} of {STEPS.length}
            </span>
            <button
              onClick={handleCloseAttempt}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
            >
              <X size={15} className="text-gray-500" />
            </button>
          </div>

          {/* ── CONTENT ── */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {submitted ? (
              <SuccessScreen onClose={onClose} />
            ) : (
              <>
                <h2 className="text-xl font-extrabold text-gray-900 mb-5 leading-snug">
                  {step.question}
                </h2>

                {/* Radio */}
                {step.type === "radio" && (
                  <div className="flex flex-col gap-2">
                    {step.options.map((opt) => (
                      <OptionRow
                        key={opt}
                        label={opt}
                        selected={answers[step.id] === opt}
                        onClick={() => setRadio(step.id, opt)}
                      />
                    ))}
                    {step.other && (
                      <div className="flex items-center gap-3 mt-1">
                        <button
                          onClick={() => setRadio(step.id, "__other__")}
                          className="w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all"
                          style={{ borderColor: answers[step.id] === "__other__" ? "#6918DC" : "#d1d5db" }}
                        >
                          {answers[step.id] === "__other__" && (
                            <div className="w-2.5 h-2.5 rounded-full bg-brand-purple" />
                          )}
                        </button>
                        <input
                          className="flex-1 p-3 rounded-xl border-2 border-gray-200 text-sm focus:outline-none focus:border-brand-purple transition"
                          placeholder="Other"
                          value={otherValues[step.id] || ""}
                          onFocus={() => setRadio(step.id, "__other__")}
                          onChange={(e) => {
                            setOtherValues((p) => ({ ...p, [step.id]: e.target.value }));
                            setRadio(step.id, "__other__");
                          }}
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Checkbox */}
                {step.type === "checkbox" && (
                  <div className="flex flex-col gap-2">
                    {step.options.map((opt) => (
                      <CheckRow
                        key={opt}
                        label={opt}
                        selected={(answers[step.id] || []).includes(opt)}
                        onClick={() => toggleCheckbox(step.id, opt)}
                      />
                    ))}
                  </div>
                )}

                {/* Postcode */}
                {step.type === "postcode" && (
                  <div>
                    <p className="text-sm text-gray-500 mb-4 leading-relaxed">{step.hint}</p>
                    <input
                      className="w-full p-4 rounded-xl border-2 border-gray-200 text-sm font-semibold focus:outline-none focus:border-brand-purple transition"
                      placeholder="Postcode or suburb"
                      value={postcodeVal}
                      onChange={(e) => setPostcodeVal(e.target.value)}
                    />
                  </div>
                )}

                {/* Contact */}
                {step.type === "contact" && (
                  <div className="flex flex-col gap-4">
                    <p className="text-sm text-gray-500 leading-relaxed -mt-2">
                      Submit your request and one of our experts will be in touch shortly.
                    </p>
                    <input
                      type="email"
                      placeholder="Email address"
                      value={contact.email}
                      onChange={(e) => setContact((p) => ({ ...p, email: e.target.value }))}
                      className="w-full p-4 rounded-xl border-2 border-gray-200 text-sm focus:outline-none focus:border-brand-purple transition"
                    />
                    <input
                      type="tel"
                      placeholder="Phone number"
                      value={contact.phone}
                      onChange={(e) => setContact((p) => ({ ...p, phone: e.target.value }))}
                      className="w-full p-4 rounded-xl border-2 border-gray-200 text-sm focus:outline-none focus:border-brand-purple transition"
                    />
                    <p className="text-xs text-gray-400 leading-relaxed">
                      By submitting, you agree to be contacted by Visgrow about your enquiry.
                    </p>
                  </div>
                )}

                {error && (
                  <p className="mt-3 text-xs font-bold text-red-500">{error}</p>
                )}
              </>
            )}
          </div>

          {/* ── FOOTER ── */}
          {!submitted && (
            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 flex-shrink-0 gap-3">
              <button
                onClick={handleBack}
                className="flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-bold hover:border-gray-300 transition text-sm"
              >
                <ArrowLeft size={14} /> Back
              </button>

              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-7 py-3 rounded-xl text-white font-bold bg-brand-gradient hover:scale-105 transition text-sm disabled:opacity-50"
              >
                {stepIndex === STEPS.length - 1 ? "Submit Request" : "Continue"}
                {stepIndex < STEPS.length - 1 && <ArrowRight size={14} />}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* QUIT MODAL */}
      {showQuit && (
        <QuitModal
          onQuit={() => { setShowQuit(false); onClose(); }}
          onContinue={() => setShowQuit(false)}
        />
      )}

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to   { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease; }
      `}</style>
    </>
  );
}
