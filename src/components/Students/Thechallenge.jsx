import React, { useState, useRef } from "react";
import promoVideo from "../../videos/VisgrowPromo.mp4";

const challenges = [
  {
    icon: (
      <>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </>
    ),
    title: "Rising Competition",
    desc: "More students and graduates are competing for limited internship positions than ever before.",
    gradient: "linear-gradient(135deg, #6918DC22 0%, #B625B922 100%)",
    iconColor: "#6918DC",
  },
  {
    icon: (
      <>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </>
    ),
    title: "Hard to Stand Out",
    desc: "Without the right guidance and preparation, it's difficult to differentiate yourself from other candidates.",
    gradient: "linear-gradient(135deg, #E94B6C22 0%, #F6A83D22 100%)",
    iconColor: "#E94B6C",
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
    title: "No Industry Connections",
    desc: "Breaking into top companies requires networks most students simply don't have access to yet.",
    gradient: "linear-gradient(135deg, #B625B922 0%, #E94B6C22 100%)",
    iconColor: "#B625B9",
  },
];

export default function TheChallenge() {
  const [videoOpen, setVideoOpen] = useState(false);
  const videoRef = useRef(null);

  const openVideo = () => setVideoOpen(true);
  const closeVideo = () => {
    if (videoRef.current) videoRef.current.pause();
    setVideoOpen(false);
  };

  return (
    <section className="bg-white py-20 relative overflow-hidden font-[Raleway]">

      {/* Background blobs */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-10 blur-[120px] rounded-full -top-24 -left-24"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-500 opacity-10 blur-[120px] rounded-full -bottom-20 -right-20"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-200 text-pink-600 px-4 py-1 rounded-full text-sm font-bold mb-6">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            The Challenge
          </div>

          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Getting an IT Job <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Isn’t Easy Anymore
            </span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">
            One of the best ways to get a job is through an internship program.
            However, the competition is fierce. There are many individuals seeking
            professional experience, which makes it harder to be noticed by top companies.
          </p>

          {challenges.map((c) => (
            <div key={c.title} className="flex items-start gap-4 mb-6">
              
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: c.gradient }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={c.iconColor}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  {c.icon.props.children}
                </svg>
              </div>

              <div>
                <p className="font-extrabold text-gray-900 text-sm mb-1">
                  {c.title}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT - VIDEO */}
        <div className="relative">
          
          {/* Gradient ring */}
          <div className="absolute inset-[-3px] rounded-2xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 opacity-60"></div>

          <div
            onClick={openVideo}
            className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/10] bg-black cursor-pointer group"
          >
            <video
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={promoVideo}
              muted
              preload="metadata"
              playsInline
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 to-pink-500/30 flex items-center justify-center transition-all duration-300 group-hover:from-purple-600/50 group-hover:to-pink-500/40">

              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 24 24" fill="#6918DC" className="w-7 h-7 ml-1">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
            </div>

            {/* Label */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 animate-pulse"></span>
              Watch Our Story
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {videoOpen && (
        <div
          onClick={closeVideo}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-[90%] max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
          >
            <button
              onClick={closeVideo}
              className="absolute -top-10 right-0 text-white text-3xl opacity-80 hover:opacity-100"
            >
              ×
            </button>

            <video
              ref={videoRef}
              src={promoVideo}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}