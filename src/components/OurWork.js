const projects = [
  { title: "Restaurant Website", img: "/work1.png" },
  { title: "Gym website", img: "/work3.png" },
  { title: "Clinic Website", img: "/work2.png" },
];

export default function () {
  return (
    <section className="bg-white text-black py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20">

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center md:text-left">
        Websites We've Built
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

        {projects.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 bg-white"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="h-52 sm:h-56 md:h-60 w-full object-cover"
            />

            {/* Title */}
            <div className="p-4 font-semibold text-sm sm:text-base">
              {item.title}
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}