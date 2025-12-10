import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import apiRouter from "./routes/api";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api", apiRouter);

app.get("/", (_req, res) => res.send("QuickFix backend OK"));
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
