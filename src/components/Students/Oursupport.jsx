import React from "react";

const SERVICES = [
  {
    id: 1,
    title: "Career Coaching",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    description:
      "Expert coaches work with you one-on-one to clarify your goals and build a personalised roadmap to career success.",
    icon: (
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    ),
    iconExtra: <circle cx="9" cy="7" r="4" />,
    gradient: "linear-gradient(135deg, #6918DC, #B625B9)",
  },
  {
    id: 2,
    title: "Internship Placement",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80",
    description:
      "We connect you with real internship opportunities at leading companies — including exclusive placements not advertised publicly.",
    icon: <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />,
    iconExtra: <path d="M16 3H8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z" />,
    gradient: "linear-gradient(135deg, #B625B9, #E94B6C)",
  },
  {
    id: 3,
    title: "Workshops",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
    description:
      "Hands-on workshops covering personal branding, communication, and industry-specific skills — delivered by working professionals.",
    icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></>,
    gradient: "linear-gradient(135deg, #E94B6C, #F6A83D)",
  },
  {
    id: 4,
    title: "CV & LinkedIn Enhancement",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80",
    description:
      "We craft compelling, ATS-optimised CVs and LinkedIn profiles that attract recruiters and open the right doors.",
    icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></>,
    gradient: "linear-gradient(135deg, #6918DC, #E94B6C)",
  },
  {
    id: 5,
    title: "1-on-1 Coaching Sessions",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    description:
      "Focused, private sessions tailored entirely to your needs — whether it's confidence, direction, or specific skill building.",
    icon: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></>,
    gradient: "linear-gradient(135deg, #B625B9, #F6A83D)",
  },
  {
    id: 6,
    title: "Skill Development",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
    description:
      "Build in-demand skills employers look for — from leadership and project management to digital tools and data literacy.",
    icon: <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>,
    gradient: "linear-gradient(135deg, #6918DC, #F6A83D)",
  },
  {
    id: 7,
    title: "Network Expansion",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=80",
    description:
      "Connect with industry professionals, alumni, and employers through curated events, mentorship, and our growing community.",
    icon: <><circle cx="12" cy="5" r="3" /><circle cx="4" cy="19" r="3" /><circle cx="20" cy="19" r="3" /><path d="M12 8v3M7.5 17.5l4-3M16.5 17.5l-4-3" /></>,
    gradient: "linear-gradient(135deg, #E94B6C, #6918DC)",
  },
  {
    id: 8,
    title: "Interview Preparation",
    image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=600&q=80",
    description:
      "Mock interviews, expert feedback, and coaching on storytelling, body language, and handling tough questions with confidence.",
    icon: <><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></>,
    gradient: "linear-gradient(135deg, #F6A83D, #E94B6C)",
  },
];

export default function OurSupport() {
  return (
    <section className="bg-white py-20 font-[Raleway] relative overflow-hidden">

      {/* Background blur blobs */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/10 blur-[120px] -top-40 -right-32 rounded-full"></div>
      <div className="absolute w-[400px] h-[400px] bg-orange-400/10 blur-[120px] -bottom-32 -left-32 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-14 max-w-xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-200 text-xs font-bold tracking-widest text-purple-600 bg-purple-50 mb-4">
            ⭐ What We Offer
          </div>

          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 mb-4 rounded-full"></div>

          <h2 className="text-4xl font-extrabold leading-tight text-gray-900 mb-4">
            Our Support for{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Your Journey
            </span>
          </h2>

          <p className="text-gray-600 leading-relaxed">
            End-to-end career support to help you stand out, get hired, and grow with confidence.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col"
            >

              {/* IMAGE */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>

                {/* ICON */}
                <div
                  className="absolute -bottom-0 left-5 w-11 h-11 rounded-xl flex items-center justify-center shadow-lg"
                  style={{ background: s.gradient }}
                >
                  <svg
                    className="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {s.icon}
                    {s.iconExtra}
                  </svg>
                </div>
              </div>

              {/* CONTENT */}
              <div className="pt-8 pb-6 px-5 flex flex-col flex-1">

                <span className="text-xs font-bold tracking-widest text-gray-400 mb-1">
                  0{s.id}
                </span>

                <h3 className="text-lg font-extrabold text-gray-900 mb-2">
                  {s.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  {s.description}
                </p>

                {/* CTA */}
                <button className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-purple-600 hover:gap-3 transition">
                  Learn more →
                </button>
              </div>

              {/* HOVER GRADIENT BAR */}
              <div
                className="h-1 w-0 group-hover:w-full transition-all duration-300"
                style={{ background: s.gradient }}
              ></div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}