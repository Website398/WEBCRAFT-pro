"use client";

export default function ContactSection() {
  return (
    <section className="bg-zinc-100 py-12 md:py-16 px-4 flex justify-center">

      <div className="bg-white w-full max-w-[600px] p-6 sm:p-8 rounded-2xl shadow-xl">

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
          Contact Us
        </h2>

        <p className="text-gray-500 text-sm sm:text-base mb-6">
          Need help or have questions? Contact us anytime 🚀
        </p>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/officialwebcraft/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 border rounded-xl mb-4 hover:bg-pink-50 transition"
        >

          <span className="text-xl sm:text-2xl">
            📸
          </span>

          <div>
            <p className="font-semibold text-sm sm:text-base">
              Instagram
            </p>

            <p className="text-xs sm:text-sm text-gray-500">
              @officialwebcraft
            </p>
          </div>

        </a>

        {/* Email */}
        <a
          href="mailto:webcraft68494@gmail.com?subject=Need%20Help%20From%20WEBCRAFT"
          className="flex items-center gap-3 p-4 border rounded-xl hover:bg-blue-50 transition"
        >

          <span className="text-xl sm:text-2xl">
            📧
          </span>

          <div>
            <p className="font-semibold text-sm sm:text-base">
              Email Support
            </p>

            <p className="text-xs sm:text-sm text-gray-500 break-all">
              webcraft68494@gmail.com
            </p>
          </div>

        </a>

      </div>

    </section>
  );
}