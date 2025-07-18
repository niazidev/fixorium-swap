 import fetch from "node-fetch";
import { Connection, Keypair, sendAndConfirmRawTransaction } from "@solana/web3.js";

const JUPITER_API_URL = process.env.JUPITER_API || "https://quote-api.jup.ag/v6";

export async function getQuote(inputMint: string, outputMint: string, amount: number) {
  const url = `${JUPITER_API_URL}/quote?inputMint=${inputMint}&outputMint=${outputMint}&amount=${amount}&slippageBps=50`;
  const res = await fetch(url);
  return await res.json();
}

export async function createSwapTransaction(quote: any, userPubkey: string) {
  const url = `${JUPITER_API_URL}/swap`;
  const body = {
    route: quote.routes[0],
    userPublicKey: userPubkey,
    wrapAndUnwrapSol: true,
  };
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return await res.json();
}

export async function sendSwapTransaction(connection: Connection, txBase64: string, userKeypair: Keypair) {
  const tx = Buffer.from(txBase64, "base64");
  const signature = await sendAndConfirmRawTransaction(connection, tx, [userKeypair]);
  return signature;
}
