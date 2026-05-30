import React, { useState, useRef } from "react";
import { CheckCircle, Play } from "lucide-react";

const points = [
  "Industry practitioners — not academics — lead every session",
  "Practical frameworks you can apply from day one",
  "Programs tailored to your industry and organisation",
  "Measurable outcomes tracked and reported post-program",
  "Available in-person, online, or on-site at your business",
];

const stats = [
  { value: "500+", label: "Professionals Trained" },
  { value: "30+", label: "Workshop Topics" },
  { value: "4.7★", label: "Average Rating" },
  { value: "92%", label: "Would Recommend" },
];

export default function WorkshopWhy() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <section className="py-24 bg-white font-body overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/5 blur-[100px] -top-40 -right-32 rounded-full pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-orange-400/5 blur-[100px] -bottom-32 -left-32 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Stats bar */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 rounded-2xl p-6"
          style={{ background: "linear-gradient(135deg, #6918DC 0%, #B625B9 40%, #E94B6C 75%, #F6A83D 100%)" }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <p className="text-3xl font-extrabold">{stat.value}</p>
              <p className="text-white/75 text-sm font-medium mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main two-col */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-200 bg-purple-50 text-purple-600 text-xs font-bold mb-6">
              ✦ Why Visgrow Workshops
            </div>

            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Facilitators Who Bring{" "}
              <span className="bg-gradient-to-r from-brand-purple via-brand-pink to-brand-orange bg-clip-text text-transparent">
                Real-World Experience
              </span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              Visgrow provides expert facilitators who bring their extensive real-world experience
              into the workshop room. When years of practical knowledge is combined with the
              latest in evidence-based learning, participants are equipped with highly actionable
              skills they can use on the job from day one.
            </p>

            <ul className="space-y-4 mb-8">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-brand-purple flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-sm font-medium text-gray-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <button className="px-8 py-3.5 rounded-full text-white font-bold bg-brand-gradient shadow-lg hover:scale-105 transition">
              Talk to a Learning Specialist
            </button>
          </div>

          {/* RIGHT — Video thumbnail */}
          <div className="relative">
            {/* Gradient ring */}
            <div className="absolute -inset-1 rounded-2xl bg-brand-gradient opacity-25 blur-sm pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-900">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
                alt="Workshop in action"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/50 to-brand-pink/30 flex items-center justify-center">
                <button
                  onClick={handlePlay}
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition"
                >
                  <Play size={26} fill="#6918DC" stroke="none" className="ml-1" />
                </button>
              </div>

              {/* Label */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-gradient bg-red-500 animate-pulse" />
                Visgrow Workshop — Leading with EQ
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
