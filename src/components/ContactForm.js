"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { ref, push } from "firebase/database";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    business: "",
    googleBusiness: "",
    websiteType: "",
    budget: "",
    requirements: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "phone") {
      value = value.replace(/\D/g, "");

      if (value.length > 10) return;
    }

    if (name === "budget") {
      value = value.replace(/\D/g, "");

      if (value.length > 4) return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    if (form.phone.length !== 10) {
      alert("Enter valid 10-digit number");
      return;
    }

    const budget = Number(form.budget);

    if (budget < 3000 || budget > 6000) {
      alert("Budget must be between ₹3000 and ₹6000");
      return;
    }

    setLoading(true);

    try {
      await push(ref(db, "leads"), {
        ...form,
        phone: "+91 " + form.phone,
        createdAt: new Date().toISOString(),
      });

      setForm({
        name: "",
        phone: "",
        business: "",
        googleBusiness: "",
        websiteType: "",
        budget: "",
        requirements: "",
      });

      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 2500);

    } catch (error) {
      alert("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="bg-zinc-100 py-16 md:py-24 px-4 flex justify-center relative scroll-mt-24"
    >

      {/* MAIN CARD */}
      <div className="w-full max-w-6xl bg-white rounded-[32px] overflow-hidden shadow-2xl grid lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="bg-gradient-to-br from-purple-700 via-purple-600 to-black text-white p-8 sm:p-10 lg:p-14 flex flex-col justify-center relative overflow-hidden">

          {/* Glow */}
          <div className="absolute top-[-60px] right-[-60px] w-[200px] h-[200px] bg-purple-400/30 blur-[80px] rounded-full"></div>

          <div className="relative z-10">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm mb-6 backdrop-blur-sm">

              <span className="w-2 h-2 rounded-full bg-green-400"></span>

              Available For New Projects

            </div>

            <h2 className="text-3xl sm:text-4xl font-black leading-tight">

              Let’s Build Your
              <br />

              Business Website 🚀

            </h2>

            <p className="mt-6 text-purple-100 text-sm sm:text-base leading-7">

              We create modern, fast and mobile responsive
              websites for local businesses at affordable prices.

            </p>

            {/* Features */}
            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  ⚡
                </div>

                <div>
                  <h3 className="font-semibold">
                    Fast Delivery
                  </h3>

                  <p className="text-sm text-purple-100">
                    Website ready in a few days
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  📱
                </div>

                <div>
                  <h3 className="font-semibold">
                    Mobile Responsive
                  </h3>

                  <p className="text-sm text-purple-100">
                    Perfect on mobile and desktop
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  💎
                </div>

                <div>
                  <h3 className="font-semibold">
                    Premium Design
                  </h3>

                  <p className="text-sm text-purple-100">
                    Modern UI for your business
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <form
          onSubmit={handleSubmit}
          className="p-6 sm:p-8 lg:p-12"
        >

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900">
            Tell Us About Your Business
          </h2>

          <p className="text-gray-500 mt-3 text-sm sm:text-base leading-7">
            Fill this form and our team will contact you
            to build your modern business website 🚀
          </p>

          {/* INPUTS */}
          <div className="space-y-4 mt-8">

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-4 border border-zinc-300 rounded-2xl outline-none focus:border-purple-500 text-sm sm:text-base"
              required
            />

            {/* PHONE */}
            <div className="flex gap-3">

              <div className="px-4 flex items-center justify-center bg-zinc-100 rounded-2xl text-sm font-medium border border-zinc-300">
                +91
              </div>

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="10 Digit Number"
                className="w-full p-4 border border-zinc-300 rounded-2xl outline-none focus:border-purple-500 text-sm sm:text-base"
                required
              />

            </div>

            <input
              name="business"
              value={form.business}
              onChange={handleChange}
              placeholder="Business Name"
              className="w-full p-4 border border-zinc-300 rounded-2xl outline-none focus:border-purple-500 text-sm sm:text-base"
              required
            />

            <input
              name="googleBusiness"
              value={form.googleBusiness}
              onChange={handleChange}
              placeholder="Google Business Profile URL"
              className="w-full p-4 border border-zinc-300 rounded-2xl outline-none focus:border-purple-500 text-sm sm:text-base"
            />

            <select
              name="websiteType"
              value={form.websiteType}
              onChange={handleChange}
              className="w-full p-4 border border-zinc-300 rounded-2xl outline-none focus:border-purple-500 text-sm sm:text-base"
              required
            >
              <option value="">Select Website Type</option>

              <option>Business Website</option>

              <option>Restaurant Website</option>

              <option>Fitness Website</option>

              <option>Hospital Website</option>

            </select>

            <input
              type="number"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              placeholder="Budget (3000 - 6000)"
              min={3000}
              max={6000}
              className="w-full p-4 border border-zinc-300 rounded-2xl outline-none focus:border-purple-500 text-sm sm:text-base"
              required
            />

            <textarea
              name="requirements"
              value={form.requirements}
              onChange={handleChange}
              placeholder="Tell us your requirements..."
              rows="4"
              className="w-full p-4 border border-zinc-300 rounded-2xl outline-none focus:border-purple-500 text-sm sm:text-base resize-none"
              required
            />

          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 py-4 rounded-2xl bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-white font-semibold shadow-lg shadow-purple-500/20"
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>

        </form>

      </div>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">

          <div className="bg-white rounded-3xl p-8 text-center shadow-2xl max-w-sm w-full">

            <div className="text-5xl mb-4">
              🎉
            </div>

            <h2 className="text-2xl font-black text-green-600">
              Thank You!
            </h2>

            <p className="text-gray-500 mt-3 text-sm sm:text-base leading-7">
              Your request has been submitted successfully.
              Our team will contact you soon 🚀
            </p>

          </div>

        </div>
      )}

    </section>
  );
}