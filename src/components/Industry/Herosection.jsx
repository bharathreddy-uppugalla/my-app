import { Link } from "react-router-dom";
import {
  GraduationCap,
  Users,
  Briefcase,
  Building2,
  UserCircle2,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

import heroImage from "../../images/industryHero.jpg";

const services = [
  { icon: GraduationCap, title: "Workshops" },
  { icon: Users, title: "Upskilling Staff" },
  { icon: Briefcase, title: "Hiring Skilled Interns" },
  { icon: Building2, title: "Business Advisory" },
  { icon: UserCircle2, title: "Owner-Managed Firms" },
  { icon: TrendingUp, title: "Leadership Development" },
];

export default function IndustryHero() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Industry Hero"
          className="w-full h-full object-cover object-center"
        />

        {/* Theme overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/75 via-purple-800/40 to-pink-500/25" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-14">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-white/80 mb-5">
            Industry Solutions
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Empowering Industry.
            <br />
            Building{" "}
            <span className="bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent">
              Futures.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mb-10">
            Strategic programs and talent solutions designed to strengthen
            teams, build leadership capability, and support long-term
            business success.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-white text-purple-700 px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            Start a strategic fit conversation
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Services */}
 <div className="mt-20 rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-xl overflow-hidden">
  {/* Top accent bar */}
  <div className="h-[2px] w-full bg-gradient-to-r from-brand-purple via-brand-violet via-brand-pink to-brand-orange opacity-70" />

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
    {services.map((service, index) => {
      const Icon = service.icon;

      return (
        <div
          key={index}
          className="group relative px-5 py-8 text-center border-r border-white/[0.20] last:border-r-0 hover:bg-white/[0.07] transition-all duration-300 cursor-pointer"
        >
          {/* Per-tile hover top accent */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-brand-purple to-brand-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="flex justify-center mb-4">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{
                background:
                  "linear-gradient(135deg, rgba(105,24,220,0.30) 0%, rgba(182,37,185,0.20) 100%)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <Icon
                size={22}
                className="text-white/70 group-hover:text-white transition-colors duration-300"
              />
            </div>
          </div>

          <h3 className="text-sm font-semibold text-white/80 group-hover:text-white leading-snug transition-colors duration-300">
            {service.title}
          </h3>
        </div>
      );
    })}
  </div>
</div>
        {/* Footer note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-white/75 font-medium">
            Owner Manager Program • 5-Month Program for Private Businesses $5M+
          </p>
        </div>
      </div>
    </section>
  );
}