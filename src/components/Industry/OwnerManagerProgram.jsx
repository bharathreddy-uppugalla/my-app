import { Link } from "react-router-dom";
import {
  CheckCircle, 
} from "lucide-react";
export default function OwnerManagerProgram() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div
          className="rounded-3xl text-white p-10 lg:p-16 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #6918DC 0%, #B625B9 50%, #E94B6C 80%, #F6A83D 100%)",
          }}
        >
          {/* Decorative blob */}
          <div
            className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] rounded-full pointer-events-none"
            style={{ background: "rgba(246,168,61,0.20)", filter: "blur(60px)" }}
          />
 
          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="uppercase tracking-[0.2em] text-white/70 text-xs font-bold mb-4">
                Signature Program
              </p>
              <h2 className="text-4xl font-bold mb-5">Owner Manager Program</h2>
              <p className="text-xl text-white/85 leading-relaxed">
                A focused 5-month program for owners of private businesses generating $5M+
                who want clarity, leadership confidence and a stronger strategy for growth.
              </p>
            </div>
 
            <div className="space-y-4">
              {[
                "Strategic clarity and focus",
                "Leadership confidence & capability",
                "Peer learning with like-minded owners",
                "Personalised business advisory support",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-orange-300 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-white/90 font-medium">{point}</span>
                </div>
              ))}
 
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-block bg-white font-bold px-8 py-4 rounded-full hover:scale-105 transition"
                  style={{ color: "#6918DC" }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}