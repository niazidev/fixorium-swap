import express from "express";
import { getTokenList } from "../tokenList";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tokens = await getTokenList();
    res.json(tokens);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

export default router;
