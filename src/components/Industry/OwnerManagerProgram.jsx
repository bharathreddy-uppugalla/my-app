import { Link } from "react-router-dom";

export default function OwnerManagerProgram() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="rounded-3xl bg-gradient-to-r from-purple-700 via-pink-500 to-orange-400 text-white p-10 lg:p-16">

          <p className="uppercase tracking-[0.2em] text-white/80 mb-4">
            Signature Program
          </p>

          <h2 className="text-4xl font-bold mb-5">
            Owner Manager Program
          </h2>

          <p className="text-xl text-white/90 max-w-3xl mb-8">
            A focused 5-month program for owners of private businesses
            generating $5M+ who want clarity, leadership confidence
            and a stronger strategy for growth.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-white text-purple-700 font-semibold px-8 py-4 rounded-full"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}