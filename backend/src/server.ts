import express from "express";

const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "Motion API running" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});