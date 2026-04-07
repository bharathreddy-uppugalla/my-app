import React from "react";
import founderImg from "../../images/founder.png"; // add your image

export default function About() {
  return (
    <div className="w-full bg-white font-body">

      {/* HERO */}
      <section className="w-full py-20 px-6 text-center bg-brand-gradient text-white">
        <h1 className="text-h1 mb-4">About Vis-Grow</h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          Empowering students and graduates to succeed in the competitive Australian job market.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-h2 mb-8 text-brand-purple">Who We Are</h2>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Vis-Grow Internships is owned and operated by Mustafa Kadir, a highly experienced professional with over 15 years of industry expertise.
          </p>

          <p>
            Mustafa is a passionate talent placement specialist dedicated to increasing student employability in Australia. He understands the challenges students and graduates face when entering the job market.
          </p>

          <p>
            Through ongoing engagement with CEOs, Managing Directors, and senior industry leaders, Mustafa brings unique insights into what employers truly seek.
          </p>
        </div>
      </section>

      {/* FOUNDER PROFILE */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="relative">
            <img
              src={founderImg}
              alt="Mustafa Kadir"
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* LINKEDIN STYLE CARD */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">

            <h3 className="text-h2 text-brand-purple mb-2">Mustafa Kadir</h3>
            <p className="text-sm text-gray-500 mb-4">
              Founder & Principal Consultant • Vis-Grow Internships
            </p>

            <div className="flex gap-4 mb-6">
              <div className="bg-brand-gradient text-white px-4 py-2 rounded-full text-sm">
                15+ Years Experience
              </div>
              <div className="bg-gray-100 px-4 py-2 rounded-full text-sm">
                Industry Leader
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Mustafa has built a strong career across IT, Manufacturing, FMCG, Services, and Education sectors, holding leadership roles including IT Engineer, Consultant, General Manager, and Managing Director.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              He has mentored hundreds of graduates, helping them build powerful personal brands, optimise resumes, master LinkedIn, and confidently succeed in interviews.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              He is also an Executive Committee Member of the Australian Computer Society (ACS) and serves on their national Membership Advisory Board.
            </p>

            <button className="px-6 py-3 rounded-full bg-brand-gradient text-white font-semibold hover:scale-105 transition">
              Connect on LinkedIn
            </button>

          </div>

        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-h2 mb-10 text-brand-purple">What We Do</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Internship Opportunities</h3>
              <p className="text-gray-600">
                We partner with leading companies across Australia to create valuable internship opportunities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Career Coaching</h3>
              <p className="text-gray-600">
                1-on-1 coaching to help you understand the job market and prepare for success.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
