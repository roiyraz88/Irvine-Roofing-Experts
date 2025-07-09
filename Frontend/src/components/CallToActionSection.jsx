/* eslint-disable */
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

// שלח לשרת שלך במקום ל-Google Script
const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000/api/contact";

const CallToActionSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    zip: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!API_URL) {
      console.error("API_URL is not defined");
      setStatus("❌ Missing API URL");
      return;
    }

    setStatus("");
    setIsSending(true);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setIsSending(false);
      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: "", phone: "", email: "", zip: "", message: "" });
      } else {
        setStatus("❌ Failed to send");
      }
    } catch (error) {
      setIsSending(false);
      setStatus("❌ Failed to send");
    }
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <section className="py-16 bg-[#f7f5e9]" id="cta">
      <div className="container mx-auto px-4 max-w-md relative">
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 bg-[#2d2d2d] rounded-xl shadow-2xl p-8 relative"
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
            className="bg-[#EAAA00] hover:bg-[#c99700] text-black font-bold py-3 rounded-lg mt-2 text-lg shadow transition relative"
            disabled={isSending}
          >
            {isSending ? (
              <CircularProgress size={24} sx={{ color: "#222" }} />
            ) : (
              "CONTACT US"
            )}
          </button>
          {status && !isSending && (
            <p
              className={`text-center font-semibold mt-1 ${
                status.includes("✅") ? "text-green-400" : "text-red-500"
              }`}
            >
              {status}
            </p>
          )}
          {/* Spinner overlay */}
          {isSending && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
                borderRadius: 12,
              }}
            >
              <CircularProgress size={60} sx={{ color: "#EAAA00" }} />
            </div>
          )}
        </motion.form>
        {/* Success Modal */}
        <Dialog
          open={showSuccess}
          onClose={handleCloseSuccess}
          maxWidth="xs"
          fullWidth
          PaperProps={{
            sx: {
              background: "#2d2d2d",
              borderRadius: 3,
              color: "white",
              boxShadow: 24,
              textAlign: "center",
              p: 4,
            },
          }}
        >
          <DialogTitle
            sx={{ color: "#EAAA00", fontWeight: "bold", fontSize: 28 }}
          >
            Success!
          </DialogTitle>
          <DialogContent sx={{ color: "white", fontSize: 20, py: 3 }}>
            Thank you! An offer will be sent to you soon.
          </DialogContent>
          <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
            <Button
              onClick={handleCloseSuccess}
              variant="contained"
              sx={{
                px: 5,
                fontWeight: "bold",
                background: "#EAAA00",
                color: "#222",
                borderRadius: 2,
                fontSize: 18,
                boxShadow: 2,
                "&:hover": { background: "#c99700" },
              }}
            >
              CLOSE
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </section>
  );
};

export default CallToActionSection;
