const features = [
  {
    title: "Modern UI Design",
    desc: "Clean, minimal and high converting designs for your business.",
  },
  {
    title: "SEO Optimized",
    desc: "Built to rank higher on Google and bring organic traffic.",
  },
  {
    title: "Fast Performance",
    desc: "Lightning fast websites optimized for best user experience.",
  },
  {
    title: "Mobile Friendly",
    desc: "Fully responsive on all devices and screen sizes.",
  },
];

export default function Features() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-20">

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 leading-snug">
        Powerful Features That Grow Your Business
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">

        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 md:p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-purple-500 transition duration-300"
          >
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-purple-400">
              {f.title}
            </h3>

            <p className="text-gray-400 text-sm md:text-base leading-6">
              {f.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}