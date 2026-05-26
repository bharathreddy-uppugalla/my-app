import { Link } from "react-router-dom";
import {

    ArrowRight,
    ChevronRight,
} from "lucide-react";

export default function IndustryCTA() {
return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
          Ready to Strengthen Your Team?
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
          Let's discuss how Visgrow can support your organisation with workshops,
          advisory, and skilled talent solutions.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition shadow-lg"
            style={{
              background: "linear-gradient(90deg, #6918DC, #B625B9, #E94B6C, #F6A83D)",
            }}
          >
            Start the Conversation <ArrowRight size={18} />
          </Link>
          <Link
            to="/industry/workshops"
            className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-8 py-4 rounded-full font-bold hover:border-purple-300 hover:text-purple-700 transition"
          >
            Browse Programs <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}