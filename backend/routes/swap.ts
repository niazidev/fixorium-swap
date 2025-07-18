 import express from "express";
import { getQuote, createSwapTransaction } from "../jupiterSwap";

const router = express.Router();

router.get("/quote", async (req, res) => {
  const { inputMint, outputMint, amount } = req.query;
  try {
    const quote = await getQuote(inputMint as string, outputMint as string, Number(amount));
    res.json(quote);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

router.post("/build", async (req, res) => {
  const { quote, userPubkey } = req.body;
  try {
    const tx = await createSwapTransaction(quote, userPubkey);
    res.json(tx);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

export default router;
