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
 
/* ─── DATA ─────────────────────────────────────────── */
 
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
 

 
const stats = [
  { value: "200+", label: "Businesses Supported" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Industry Partners" },
];
 

/* ─── HERO ──────────────────────────────────────────── */
 
export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Industry Hero"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/80 via-purple-800/50 to-pink-500/20" />
      </div>
 
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/25 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          <span className="text-white text-xs font-bold uppercase tracking-widest">
            Industry Solutions
          </span>
        </div>
 
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Empowering Industry.
            <br />
            Building{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #F6A83D, #E94B6C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Futures.
            </span>
          </h1>
 
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mb-10">
            Strategic programs and talent solutions designed to strengthen teams,
            build leadership capability, and support long-term business success.
          </p>
 
          <div className="flex flex-wrap gap-4 mb-16">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-full font-bold hover:scale-105 transition"
            >
              Start a conversation
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/industry/workshops"
              className="inline-flex items-center gap-2 border border-white/30 bg-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition"
            >
              Explore Programs
            </Link>
          </div>
 
          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center px-4 py-4 rounded-2xl text-center"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
              >
                <span className="text-3xl font-extrabold text-white leading-none mb-1">
                  {s.value}
                </span>
                <span className="text-xs font-semibold text-white/70">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
 
        {/* Service tiles */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-xl overflow-hidden">
          <div className="h-[2px] w-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 opacity-70" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="group relative px-4 py-7 text-center border-r border-white/[0.15] last:border-r-0 hover:bg-white/[0.08] transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex justify-center mb-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: "linear-gradient(135deg, rgba(105,24,220,0.30), rgba(182,37,185,0.20))",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                    >
                      <Icon size={20} className="text-white/75 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-xs font-bold text-white/75 group-hover:text-white leading-snug transition-colors">
                    {service.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
 
        <p className="mt-6 text-center text-sm text-white/60 font-medium">
          Owner Manager Program • 5-Month Program for Private Businesses $5M+
        </p>
      </div>
    </section>
  );
}