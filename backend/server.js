import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is ready");
});

console.log(process.env.MONGO_URI);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
