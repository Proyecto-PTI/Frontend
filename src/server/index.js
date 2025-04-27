const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());

// Mock endpoints separados:

app.get("/api/authorized-access", (req, res) => {
  res.json(82);
});

app.get("/api/denied-attempts", (req, res) => {
  res.json(5);
});

app.get("/api/peak-hour", (req, res) => {
  res.json("12:00-13:00");
});

app.get("/api/most-accessed-door", (req, res) => {
  res.json("A5S103");
});

app.get("/api/hourly-access", (req, res) => {
  res.json({
    labels: [
      "00:00", "01:00", "02:00", "03:00", "04:00", "05:00",
      "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
      "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
      "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
    ],
    data: [
      2, 1, 0, 0, 0, 3,
      5, 12, 18, 20, 32, 28,
      37, 25, 22, 15, 10, 8,
      5, 3, 1, 1, 0, 0
    ]
  });
});

app.get("/api/weekly-evolution", (req, res) => {
  res.json([92, 8]);
});

app.get("/api/recent-records", (req, res) => {
  res.json([
    { user: "Albert Gómez", hour: "08:23", result: "Authorized", door: "A5S103" },
    { user: "Yolanda Romero", hour: "08:51", result: "Authorized", door: "A5S103" },
    { user: "Albert Gómez", hour: "09:48", result: "Denied", door: "C6S108" },
    { user: "Lola Constantin", hour: "11:35", result: "Authorized", door: "B6E001" },
    { user: "Piotr Pomykalsk", hour: "12:12", result: "Authorized", door: "A5201" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Mock API running at http://localhost:${PORT}`);
});

