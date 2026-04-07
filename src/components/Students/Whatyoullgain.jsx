import React, { useEffect, useRef, useState } from "react";
import coachingPhoto from "../../images/cochingimage.jpg";

const gains = [
  "Enhanced CV and LinkedIn profile that catches recruiters' attention",
  "Personalized coaching sessions tailored to your unique needs",
  "Access to exclusive internship opportunities with top Australian companies",
  "Development of in-demand professional skills",
  "Expanded professional network in your desired industry",
  "Increased confidence in interviews and professional settings",
  "Strategic career guidance from industry experts",
];

// Counter hook
function useCounter(target, duration = 1600, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime;
    const step = (t) => {
      if (!startTime) startTime = t;
      const progress = Math.min((t - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

export default function WhatYoullGain() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const count = useCounter(95, 1600, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-gray-50 py-24 font-[Raleway] relative overflow-hidden"
    >
      {/* BACKGROUND BLOBS */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/10 blur-[120px] -top-40 -right-32 rounded-full" />
      <div className="absolute w-[400px] h-[400px] bg-orange-400/10 blur-[120px] -bottom-32 -left-32 rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT - IMAGE */}
        <div className="relative">

          {/* Gradient border */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 opacity-30 blur-sm"></div>

          <img
            src={coachingPhoto}
            alt="Coaching"
            className="relative w-full h-[520px] object-cover rounded-2xl shadow-xl"
          />

          {/* STAT CARD */}
          <div className="absolute top-6 right-[-20px] bg-white rounded-xl shadow-xl px-6 py-4 text-center">
            <p className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              {count}%
            </p>
            <p className="text-xs font-semibold text-gray-500">
              Placement Success
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-200 bg-green-50 text-green-600 text-xs font-bold mb-6">
            ✦ What You'll Gain
          </div>

          {/* HEADING */}
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
            Transform Your <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Career Prospects
            </span>
          </h2>

          {/* TEXT */}
          <p className="text-gray-600 leading-relaxed mb-8">
            Our goal is to enhance not only your CV and LinkedIn profile but also
            to develop your skillset and boost your confidence.
          </p>

          {/* LIST */}
          <ul className="space-y-4">
            {gains.map((gain, i) => (
              <li
                key={i}
                className={`flex items-start gap-3 text-sm font-medium text-gray-800 transition-all duration-500 ${
                  visible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-6"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* CHECK ICON */}
                <div className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-green-500 shrink-0">
                  <svg
                    className="w-3 h-3 text-green-500"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M2 7l3 3 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {gain}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}