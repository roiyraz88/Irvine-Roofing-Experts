// server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/contact", (req, res) => {
  const { name, phone, email, zip, message } = req.body;

  console.log("✅ New form submission:", { name, phone, email, zip, message });

  // כאן אפשר להוסיף שליחה ל-Google Sheets, מייל וכו'

  res.status(200).json({ success: true, message: "Form submitted successfully" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
