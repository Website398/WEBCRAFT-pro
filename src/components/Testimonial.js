export default function Testimonial() {
  const testimonials = [
    {
      name: "Dr.Ritu Singh's ",
      business: "Haridayal Clinic and Maternity Center",
      text:
        "WebCraft ne hamare clinic ke liye premium website banayi.",
    },

    {
      name: "Dr. Manjula Sinha",
      business: "patna dental clinic",
      text:
        "Website clean aur fast hai. Mobile par bhi perfect chalti hai.",
    },

    {
      name: " Amit Patel",
      business: "For Bussiness",
      text:
        "Professional design aur online enquiries bhi badhi hain.",
    },
  ];

  return (
    <section className="bg-[#050510] text-white py-24 px-6 lg:px-20">

      <div className="text-center mb-14">

        <span className="inline-block px-4 py-2 rounded-full border border-zinc-800 text-purple-400 text-sm mb-5">
          TESTIMONIALS
        </span>

        <h2 className="text-4xl font-bold">
          What Our Clients Say
        </h2>

        <p className="text-gray-400 mt-4">
          Businesses trust WebCraft
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {testimonials.map((item, index) => (

          <div
            key={index}
            className="
              bg-zinc-900
              border
              border-zinc-800
              rounded-2xl
              p-8

              transition-all
              duration-300

              hover:-translate-y-3
              hover:scale-105
              hover:border-purple-500
              hover:shadow-2xl
              hover:shadow-purple-500/20
            "
          >

            <div className="text-yellow-400 text-xl mb-4">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-gray-300 leading-7 mb-6">
              {item.text}
            </p>

            <h3 className="font-semibold text-lg">
              {item.name}
            </h3>

            <p className="text-purple-400 text-sm mt-1">
              {item.business}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}