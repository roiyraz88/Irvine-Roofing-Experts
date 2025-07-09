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
import CircularProgress from "@mui/material/CircularProgress";

// עדכון לכתובת ה-API שלך
const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000/api/contact";

const ModalForm = ({ open, onClose }) => {
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
    setStatus("");
    setIsSending(true);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setIsSending(false);
      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: "", phone: "", email: "", zip: "", message: "" });
      } else {
        setStatus("❌ Failed to send");
      }
    } catch {
      setIsSending(false);
      setStatus("❌ Failed to send");
    }
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    onClose();
  };

  return (
    <>
      <Dialog
        open={open && !showSuccess}
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
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {["name", "phone", "email", "zip", "message"].map((field) => (
                <TextField
                  key={field}
                  name={field}
                  label={
                    field === "zip"
                      ? "ZIP Code"
                      : field.charAt(0).toUpperCase() +
                        field
                          .slice(1)
                          .replace("email", "Email Address")
                          .replace("phone", "Phone Number")
                  }
                  variant="filled"
                  fullWidth
                  required={field !== "message"}
                  type={
                    field === "email"
                      ? "email"
                      : field === "phone"
                      ? "tel"
                      : "text"
                  }
                  value={formData[field]}
                  onChange={handleChange}
                  multiline={field === "message"}
                  rows={field === "message" ? 3 : 1}
                  InputProps={{
                    style: {
                      background: "#f3f3f3",
                      color: "#222",
                      borderRadius: 8,
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#888", fontWeight: 500 },
                  }}
                />
              ))}
            </Box>
          </DialogContent>

          <DialogActions
            sx={{
              justifyContent: "center",
              pb: 2,
              background: "#2d2d2d",
              border: 0,
            }}
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
              disabled={isSending}
            >
              {isSending ? (
                <CircularProgress size={24} sx={{ color: "#222" }} />
              ) : (
                "CONTACT US"
              )}
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
        {/* Spinner overlay */}
        {isSending && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              bgcolor: "rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
            }}
          >
            <CircularProgress size={60} sx={{ color: "#EAAA00" }} />
          </Box>
        )}
      </Dialog>
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
    </>
  );
};

export default ModalForm;
