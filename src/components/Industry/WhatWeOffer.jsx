import {
  GraduationCap,
  Users,
  Briefcase,
  Building2,
  UserCircle2,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Workshops",
    text: "Practical workshops designed to strengthen skills, improve team capability and support organisational growth.",
    gradient: "linear-gradient(135deg, #6918DC 0%, #B625B9 100%)",
  },
  {
    icon: Users,
    title: "Upskilling Staff",
    text: "Targeted learning programs that empower staff with modern skills and leadership confidence.",
    gradient: "linear-gradient(135deg, #B625B9 0%, #E94B6C 100%)",
  },
  {
    icon: Briefcase,
    title: "Hiring Skilled Interns",
    text: "Access high-performing interns ready to contribute with practical knowledge and fresh ideas.",
    gradient: "linear-gradient(135deg, #E94B6C 0%, #F6A83D 100%)",
  },
  {
    icon: Building2,
    title: "Business Advisory",
    text: "Strategic business guidance to improve operations, growth planning and performance.",
    gradient: "linear-gradient(135deg, #6918DC 0%, #E94B6C 100%)",
  },
  {
    icon: UserCircle2,
    title: "Owner-Managed Firms",
    text: "Tailored support for founders and owner-led businesses navigating growth challenges.",
    gradient: "linear-gradient(135deg, #B625B9 0%, #F6A83D 100%)",
  },
  {
    icon: TrendingUp,
    title: "Leadership Development",
    text: "Develop stronger leaders who can inspire teams and drive long-term business success.",
    gradient: "linear-gradient(135deg, #6918DC 0%, #F6A83D 100%)",
  },
];



export default function WhatWeOffer() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold tracking-widest mb-4"
            style={{
              borderColor: "rgba(105,24,220,0.2)",
              background: "rgba(105,24,220,0.05)",
              color: "#6918DC",
            }}
          >
            ⭐ What We Offer
          </div>
          <div
            className="w-16 h-1 rounded-full mb-4"
            style={{
              background: "linear-gradient(90deg, #6918DC, #B625B9, #E94B6C, #F6A83D)",
            }}
          />
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Industry-Focused{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #6918DC, #B625B9, #E94B6C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Solutions
            </span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Practical programs and strategic support designed to help businesses
            grow stronger teams and leadership capability.
          </p>
        </div>
 
        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col"
              >
                <div
                  className="h-1 w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: item.gradient }}
                />
                <div className="p-7 flex flex-col flex-1">
                  <div
                    className="w-13 h-13 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105"
                    style={{ width: 52, height: 52, background: item.gradient }}
                  >
                    <Icon size={22} className="text-white" strokeWidth={2} />
                  </div>
                  <h3 className="font-extrabold text-gray-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{item.text}</p>
                  <button className="mt-5 inline-flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all duration-200"
                    style={{ color: "#6918DC" }}>
                    Learn more →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}