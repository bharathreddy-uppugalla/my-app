import { Link } from "react-router-dom";

export default function IndustryCTA() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-gray-900 mb-5">
          Ready to Strengthen Your Team?
        </h2>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Let’s discuss how VISGROW can support your organisation
          with workshops, advisory and skilled talent solutions.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-700 to-pink-500 text-white px-8 py-4 rounded-full font-semibold"
        >
          Start the Conversation
        </Link>
      </div>
    </section>
  );
}