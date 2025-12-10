import { Router } from "express";
import { handleChat } from "../services/chat";

const router = Router();

router.post("/chat", async (req, res) => {
  try {
    const { prompt, metadata } = req.body;
    const result = await handleChat(prompt, metadata);
    res.json({ ok: true, data: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: "Internal server error" });
  }
});

export default router;
