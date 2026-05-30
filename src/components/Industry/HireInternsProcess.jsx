import React from "react";
import { ClipboardList, Search, UserCheck, Rocket, HeartHandshake } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Submit Your Request",
    desc: "Tell us about your business, the role you need filled, and how many interns you're looking for.",
    icon: ClipboardList,
    gradient: "linear-gradient(135deg, #6918DC, #B625B9)",
  },
  {
    number: "02",
    title: "We Find Your Match",
    desc: "Our team reviews your requirements and matches you with the most suitable pre-vetted candidates from our pool.",
    icon: Search,
    gradient: "linear-gradient(135deg, #B625B9, #E94B6C)",
  },
  {
    number: "03",
    title: "Interview & Select",
    desc: "Meet your shortlisted candidates. Choose the intern that fits your team culture and requirements.",
    icon: UserCheck,
    gradient: "linear-gradient(135deg, #E94B6C, #F6A83D)",
  },
  {
    number: "04",
    title: "Onboarding & Start",
    desc: "We handle all the paperwork and coordinate a smooth onboarding. Your intern hits the ground running.",
    icon: Rocket,
    gradient: "linear-gradient(135deg, #6918DC, #E94B6C)",
  },
  {
    number: "05",
    title: "Ongoing Support",
    desc: "Visgrow stays involved — regular check-ins, coaching support, and performance tracking throughout the placement.",
    icon: HeartHandshake,
    gradient: "linear-gradient(135deg, #F6A83D, #B625B9)",
  },
];

export default function HireInternsProcess() {
  return (
    <section
      className="relative py-24 font-body overflow-hidden"
      style={{ background: "linear-gradient(135deg, #6918DC 0%, #5515c8 40%, #2d0e95 100%)" }}
    >
      {/* Glow blobs */}
      <div className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-25 top-[-200px] right-[-100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(182,37,185,0.3) 0%, transparent 70%)" }}
      />
      <div className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 bottom-[-150px] left-[-100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(246,168,61,0.2) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-white/60 mb-3">
            Simple & Free
          </p>
          <h2 className="text-4xl font-extrabold text-white mb-3">
            How It Works
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
            Our 5-step process makes hiring a skilled intern faster and easier than any recruitment agency.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative group">
                <div className="relative rounded-2xl p-7 bg-white/10 border border-white/20 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:-translate-y-2 hover:shadow-2xl h-full">
                  {/* Step number */}
                  <div className="text-[3rem] font-extrabold text-white/10 mb-3 leading-none">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: step.gradient }}
                  >
                    <Icon size={22} className="text-white" strokeWidth={2} />
                  </div>

                  <div className="w-8 h-[2px] bg-white/30 rounded mb-4" />

                  <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <button className="bg-white text-brand-purple font-bold px-10 py-4 rounded-full hover:scale-105 transition text-sm shadow-xl inline-flex items-center gap-2">
            Start Your Hiring Request
          </button>
        </div>
      </div>
    </section>
  );
}
