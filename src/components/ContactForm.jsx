/* eslint-disable */
import React, { useState } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzDuoR19FlP-7clkcZagtwIAg2luzCPhil8gLgg-meZmZBJHbyKa-t3YuhhvornyUw1DQ/exec";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [status, setStatus] = useState({ message: "", success: null });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: "שולח...", success: null });

    const data = new FormData();
    data.append("name", formData.name);
    data.append("phone", formData.phone);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setStatus({ message: "The details sent successfuly ✅", success: true });
        setFormData({ name: "", phone: "" });
      } else {
        throw new Error("שליחה נכשלה");
      }
    } catch (error) {
      setStatus({ message: "There has benn an error, pleade try again ❌", success: false });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md max-w-md mx-auto text-right"
      id="contact"
    >
      <h2 className="text-2xl font-bold mb-4 text-[#163026]">צור קשר</h2>

      <input
        type="text"
        name="name"
        placeholder="שם מלא"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full mb-4 p-2 border rounded text-right"
      />

      <input
        type="tel"
        name="phone"
        placeholder="מספר טלפון"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full mb-4 p-2 border rounded text-right"
      />

      <button
        type="submit"
        className="w-full bg-[#EAAA00] text-white font-bold py-2 rounded hover:bg-[#cc9200]"
      >
        שלח פרטים
      </button>

      {status.message && (
        <p
          className={`mt-4 text-sm text-center font-semibold ${
            status.success === true
              ? "text-green-600"
              : status.success === false
              ? "text-red-600"
              : "text-gray-700"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
