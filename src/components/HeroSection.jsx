import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import roofingVideo from "../assets/roofing-video.mp4";

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    zip: "",
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
    setStatus("Sending...");

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
        setFormData({ name: "", phone: "", email: "", zip: "" });
      } else {
        throw new Error();
      }
    } catch {
      setStatus("❌ Failed to send");
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={roofingVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <Box
        className="relative z-20 w-full flex flex-col md:flex-row items-center justify-center px-4 py-16"
        sx={{ maxWidth: 1400, mx: "auto" }}
      >
        {/* Left Side: Headline and Description */}
        <Box
          className="flex-1 flex flex-col items-start justify-center mb-10 md:mb-0 md:mr-10"
          sx={{ minWidth: 0 }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            color="common.white"
            sx={{
              fontSize: { xs: 36, md: 56 },
              lineHeight: 1.1,
              mb: 2,
              textShadow: "0 2px 16px #0008",
            }}
          >
            EXPERT ROOFING IN <br /> IRVINE CALIFORNIA
          </Typography>
          <Typography
            variant="h6"
            color="common.white"
            sx={{ mb: 2, fontWeight: 400 }}
          >
            Homeowners Deserve Better Roofing – We're Here to Deliver It
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "#FFC940", fontWeight: 700, mb: 2 }}
          >
            Trusted tools. Real people. Real results.
          </Typography>
        </Box>

        {/* Right Side: Glassmorphic Form */}
        <Paper
          elevation={8}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            minWidth: { xs: "100%", md: 380 },
            maxWidth: 420,
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 32px 0 rgba(31,38,135,0.37)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="w-full md:w-auto"
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            align="center"
            color="common.white"
            sx={{ mb: 3, letterSpacing: 1 }}
          >
            GET <b>FREE</b> OFFER NOW
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              name="name"
              label="Full Name"
              variant="filled"
              fullWidth
              required
              value={formData.name}
              onChange={handleChange}
              InputProps={{ style: { background: "rgba(255,255,255,0.85)" } }}
            />
            <TextField
              name="phone"
              label="Phone Number"
              variant="filled"
              fullWidth
              required
              value={formData.phone}
              onChange={handleChange}
              InputProps={{ style: { background: "rgba(255,255,255,0.85)" } }}
            />
            <TextField
              name="email"
              label="Email Address"
              variant="filled"
              fullWidth
              required
              value={formData.email}
              onChange={handleChange}
              InputProps={{ style: { background: "rgba(255,255,255,0.85)" } }}
            />
            <TextField
              name="zip"
              label="ZIP Code"
              variant="filled"
              fullWidth
              required
              value={formData.zip}
              onChange={handleChange}
              InputProps={{ style: { background: "rgba(255,255,255,0.85)" } }}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                mt: 2,
                fontWeight: "bold",
                bgcolor: "#FFC940",
                color: "#222",
                "&:hover": { bgcolor: "#e6b800" },
              }}
              fullWidth
            >
              CONTACT US
            </Button>
            {status && (
              <Typography
                variant="body2"
                align="center"
                sx={{
                  mt: 1,
                  fontWeight: "bold",
                  color: status.includes("✅") ? "lightgreen" : "red",
                }}
              >
                {status}
              </Typography>
            )}
          </Box>
        </Paper>
      </Box>
    </section>
  );
};

export default HeroSection;
