 import fetch from "node-fetch";

const TOKEN_LIST_URL = "https://raw.githubusercontent.com/solana-labs/token-list/main/src/tokens/solana.tokenlist.json";

export async function getTokenList() {
  const res = await fetch(TOKEN_LIST_URL);
  const data = await res.json();
  // Filter for meme tokens, or tokens with pump.fun origin
  const memeTokens = data.tokens.filter(token => 
    token.tags?.includes("meme") || token.extensions?.website?.includes("pump.fun")
  );
  return memeTokens;
}
