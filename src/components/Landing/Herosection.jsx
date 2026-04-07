import React from "react";
import { useNavigate } from "react-router-dom";
import studentImg from "../../images/heroimage.jpg";
import businessImg from "../../images/heroimage.avif";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full h-screen flex font-body overflow-hidden">

      {/* STUDENT */}
      <div
        onClick={() => navigate("/student/home")}
        className="relative flex-1 h-full group cursor-pointer transition-all duration-500 hover:flex-[1.2]"
      >
        <img
          src={studentImg}
          alt="Student"
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/70 via-black/50 to-brand-pink/60" />

        {/* Glass Card */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 text-center max-w-md shadow-2xl">

            <h2 className="text-white text-h2 lg:text-h1 mb-4">
              Struggling to find a Professional job?
            </h2>

            <p className="text-white/90 mb-6">
              Internships, coaching & real-world skills to land your dream job in Australia.
            </p>

            <button className="px-8 py-3 rounded-full text-white font-bold bg-brand-gradient shadow-lg hover:scale-105 transition">
              I'm a Student/Graduate
            </button>

          </div>
        </div>
      </div>

      {/* BUSINESS */}
      <div
        onClick={() => navigate("/industry")}
        className="relative flex-1 h-full group cursor-pointer transition-all duration-500 hover:flex-[1.2]"
      >
        <img
          src={businessImg}
          alt="Business"
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-violet/70 via-black/50 to-brand-orange/60" />

        {/* Glass Card */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 text-center max-w-md shadow-2xl">

            <h2 className="text-white text-h2 lg:text-h1 mb-4">
              You're too busy running the business to actually grow it.
            </h2>

            <p className="text-white/90 mb-6">
             Break the cycle of burnout by bringing in high-energy interns and leveling up your current staff.
            </p>

            <button className="px-8 py-3 rounded-full text-white font-bold bg-brand-gradient shadow-lg hover:scale-105 transition">
              I'm a Business owner
            </button>

          </div>
        </div>
      </div>

    </section>
  );
}