"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Usually 3–7 days depending on project size and features.",
  },
  {
    q: "Do you provide mobile responsive design?",
    a: "Yes, all websites are fully responsive on all devices.",
  },
  {
    q: "Can I request changes after delivery?",
    a: "Yes, we provide revision support after project delivery.",
  },
  {
    q: "Do you help with hosting and domain?",
    a: "Yes, we can help you setup everything end-to-end.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-zinc-950 text-white py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-20">

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12">
        Frequently Asked Questions
      </h2>

      {/* Container */}
      <div className="max-w-3xl mx-auto space-y-4">

        {faqs.map((item, i) => (
          <div
            key={i}
            onClick={() => setOpen(open === i ? null : i)}
            className="border border-zinc-800 rounded-xl p-4 sm:p-5 cursor-pointer bg-black hover:border-purple-500 transition"
          >

            {/* Question */}
            <div className="flex justify-between items-center gap-4">
              <h3 className="font-semibold text-sm sm:text-base md:text-lg">
                {item.q}
              </h3>

              <span className="text-lg sm:text-xl">
                {open === i ? "−" : "+"}
              </span>
            </div>

            {/* Answer */}
            {open === i && (
              <p className="text-gray-400 mt-3 text-sm sm:text-base leading-6">
                {item.a}
              </p>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}