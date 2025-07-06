/* eslint-disable */
import React, { useState } from "react";
import { motion } from "framer-motion";

// ודא שקיים משתנה סביבה כזה ב-Vercel וב-.env המקומי שלך
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

const CallToActionSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    zip: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!GOOGLE_SCRIPT_URL) {
      console.error("GOOGLE_SCRIPT_URL is not defined");
      setStatus("❌ Missing script URL");
      return;
    }

    setStatus("Sending...");
    console.log("Sending to:", GOOGLE_SCRIPT_URL); // Debugging URL

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setStatus("✅ Sent successfully!");
        setFormData({ name: "", phone: "", email: "", zip: "", message: "" });
      } else {
        throw new Error("Response not OK");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send");
    }
  };

  return (
    <section className="py-16 bg-[#f7f5e9]" id="cta">
      <div className="container mx-auto px-4 max-w-md">
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 bg-[#2d2d2d] rounded-xl shadow-2xl p-8"
          initial={{ scale: 0.9, y: 60, opacity: 0 }}
          whileInView={{ scale: 1, y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", bounce: 0.45, duration: 0.9 }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-white text-left mb-2 tracking-wide">
            GET <span className="font-black underline">FREE</span> OFFER NOW
          </h2>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Full Name *"
            required
            className="rounded-md px-4 py-3 bg-white/90 text-black font-medium placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-[#EAAA00]"
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Phone Number *"
            required
            className="rounded-md px-4 py-3 bg-white/90 text-black font-medium placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-[#EAAA00]"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email Address *"
            required
            className="rounded-md px-4 py-3 bg-white/90 text-black font-medium placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-[#EAAA00]"
          />
          <input
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            type="text"
            placeholder="ZIP Code *"
            required
            className="rounded-md px-4 py-3 bg-white/90 text-black font-medium placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-[#EAAA00]"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we help you?"
            rows="3"
            className="rounded-md px-4 py-3 bg-white/90 text-black font-medium placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-[#EAAA00]"
          />
          <button
            type="submit"
            className="bg-[#EAAA00] hover:bg-[#c99700] text-black font-bold py-3 rounded-lg mt-2 text-lg shadow transition"
          >
            CONTACT US
          </button>
          {status && (
            <p
              className={`text-center font-semibold mt-1 ${status.includes("✅") ? "text-green-400" : "text-red-500"}`}
            >
              {status}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default CallToActionSection;
