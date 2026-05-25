import {
  GraduationCap,
  Users,
  Briefcase,
  Building2,
  UserCircle2,
  TrendingUp,
} from "lucide-react";

const offers = [
  {
    icon: GraduationCap,
    title: "Workshops",
    text: "Practical workshops designed to strengthen skills, improve team capability and support organisational growth.",
  },
  {
    icon: Users,
    title: "Upskilling Staff",
    text: "Targeted learning programs that empower staff with modern skills and leadership confidence.",
  },
  {
    icon: Briefcase,
    title: "Hiring Skilled Interns",
    text: "Access high-performing interns ready to contribute with practical knowledge and fresh ideas.",
  },
  {
    icon: Building2,
    title: "Business Advisory",
    text: "Strategic business guidance to improve operations, growth planning and performance.",
  },
  {
    icon: UserCircle2,
    title: "Owner-Managed Firms",
    text: "Tailored support for founders and owner-led businesses navigating growth challenges.",
  },
  {
    icon: TrendingUp,
    title: "Leadership Development",
    text: "Develop stronger leaders who can inspire teams and drive long-term business success.",
  },
];

export default function WhatWeOffer() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.2em] text-purple-600 font-semibold mb-4">
            What We Offer
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            Industry-Focused Solutions
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Practical programs and strategic support designed to help
            businesses grow stronger teams and leadership capability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white flex items-center justify-center mb-5">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}