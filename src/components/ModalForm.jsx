import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL

const ModalForm = ({ open, onClose }) => {
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
        setFormData({ name: "", phone: "", email: "", zip: "", message: "" });
      } else {
        throw new Error();
      }
    } catch {
      setStatus("❌ Failed to send");
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          background: "#2d2d2d",
          borderRadius: 3,
          color: "white",
          boxShadow: 24,
        },
      }}
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            textAlign: "center",
            fontWeight: "bold",
            color: "white",
            fontSize: 26,
            letterSpacing: 1,
            background: "#2d2d2d",
          }}
        >
          <span style={{ fontWeight: 900, letterSpacing: 1 }}>
            GET <u style={{ color: "#EAAA00" }}>FREE</u> OFFER NOW
          </span>
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{ position: "absolute", right: 8, top: 8, color: "#fff" }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent
          dividers
          sx={{ background: "#2d2d2d", color: "white", border: 0 }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              name="name"
              label="Full Name"
              variant="filled"
              fullWidth
              required
              value={formData.name}
              onChange={handleChange}
              InputProps={{
                style: { background: "#f3f3f3", color: "#222", borderRadius: 8 },
              }}
              InputLabelProps={{ style: { color: "#888", fontWeight: 500 } }}
            />
            <TextField
              name="phone"
              label="Phone Number"
              variant="filled"
              fullWidth
              required
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              InputProps={{
                style: { background: "#f3f3f3", color: "#222", borderRadius: 8 },
              }}
              InputLabelProps={{ style: { color: "#888", fontWeight: 500 } }}
            />
            <TextField
              name="email"
              label="Email Address"
              variant="filled"
              fullWidth
              required
              type="email"
              value={formData.email}
              onChange={handleChange}
              InputProps={{
                style: { background: "#f3f3f3", color: "#222", borderRadius: 8 },
              }}
              InputLabelProps={{ style: { color: "#888", fontWeight: 500 } }}
            />
            <TextField
              name="zip"
              label="ZIP Code"
              variant="filled"
              fullWidth
              required
              value={formData.zip}
              onChange={handleChange}
              InputProps={{
                style: { background: "#f3f3f3", color: "#222", borderRadius: 8 },
              }}
              InputLabelProps={{ style: { color: "#888", fontWeight: 500 } }}
            />
            <TextField
              name="message"
              label="Message"
              variant="filled"
              fullWidth
              multiline
              rows={3}
              value={formData.message}
              onChange={handleChange}
              InputProps={{
                style: { background: "#f3f3f3", color: "#222", borderRadius: 8 },
              }}
              InputLabelProps={{ style: { color: "#888", fontWeight: 500 } }}
            />
          </Box>
        </DialogContent>

        <DialogActions
          sx={{ justifyContent: "center", pb: 2, background: "#2d2d2d", border: 0 }}
        >
          <Button
            type="submit"
            variant="contained"
            size="large"
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
            CONTACT US
          </Button>
        </DialogActions>

        {status && (
          <div
            style={{
              textAlign: "center",
              color: status.includes("✅") ? "lightgreen" : "red",
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            {status}
          </div>
        )}
      </form>
    </Dialog>
  );
};

export default ModalForm;
