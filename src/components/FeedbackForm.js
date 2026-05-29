"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { ref, push } from "firebase/database";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !feedback) {
      alert("Please fill all fields");
      return;
    }

    if (loading) return;

    setLoading(true);

    try {
      await push(ref(db, "feedbacks"), {
        name,
        message: feedback,
        createdAt: new Date().toISOString(),
      });

      setName("");
      setFeedback("");

      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    } catch (error) {
      alert("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <section className="bg-white py-16 md:py-20 px-4 flex justify-center relative">

      <div className="w-full max-w-[600px]">

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
          Give Your Feedback
        </h2>

        <p className="text-gray-500 text-sm sm:text-base mb-6">
          Share your experience with us 🚀
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full p-3 border rounded-xl text-sm sm:text-base"
            required
          />

          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Write feedback..."
            rows="4"
            className="w-full p-3 border rounded-xl text-sm sm:text-base"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold"
          >
            {loading ? "Submitting..." : "Submit Feedback"}
          </button>

        </form>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white p-6 sm:p-8 rounded-2xl text-center shadow-xl">
            <div className="text-4xl">🎉</div>
            <h2 className="text-lg sm:text-xl font-bold text-green-600 mt-2">
              Thank You!
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-2">
              Feedback submitted successfully
            </p>
          </div>
        </div>
      )}

    </section>
  );
}