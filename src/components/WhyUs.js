export default function WhyUs() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-20 text-center">

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug">
        Why Businesses Choose Us
      </h2>

      {/* Subtext */}
      <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-10 md:mb-12 leading-7">
        We don’t just build websites — we build digital growth systems that convert visitors into customers.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

        {/* Card 1 */}
        <div className="p-6 md:p-8 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-purple-500 transition">
          <h3 className="text-purple-400 font-semibold mb-2 text-lg">
            Fast Delivery
          </h3>
          <p className="text-gray-400 text-sm leading-6">
            Get your website in just a few days.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 md:p-8 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-purple-500 transition">
          <h3 className="text-purple-400 font-semibold mb-2 text-lg">
            High Quality
          </h3>
          <p className="text-gray-400 text-sm leading-6">
            Pixel-perfect modern UI design.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 md:p-8 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-purple-500 transition">
          <h3 className="text-purple-400 font-semibold mb-2 text-lg">
            Support
          </h3>
          <p className="text-gray-400 text-sm leading-6">
            24/7 help after project delivery.
          </p>
        </div>

      </div>

    </section>
  );
}