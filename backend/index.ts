 import express from "express";
import swapRoutes from "./routes/swap";
import tokensRoutes from "./routes/tokens";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/swap", swapRoutes);
app.use("/tokens", tokensRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend running on ${PORT}`));
