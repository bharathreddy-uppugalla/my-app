const points = [
  "Practical workshops tailored to industry needs",
  "Skilled interns ready to contribute immediately",
  "Leadership and team capability development",
  "Business advisory with measurable outcomes",
];

export default function WhyVisgrow() {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-700 to-pink-500 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <p className="uppercase tracking-[0.2em] text-white/80 mb-4">
            Why VISGROW
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Helping Industry Build Stronger Teams
          </h2>

          <p className="text-lg text-white/85 leading-relaxed">
            We connect businesses with talent, learning opportunities
            and strategic support that create lasting growth.
          </p>
        </div>

        <div className="space-y-5">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl rounded-2xl px-6 py-5"
            >
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}