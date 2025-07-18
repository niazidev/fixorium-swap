 # FIXORIUM Swap System

Solana CEX-style swap frontend for meme tokens (Pump.fun) with backend aggregator integration.

## Features

- Solana wallet connect (browser/mobile)
- Persistent wallet connection
- SOL & meme token balance fetching
- CEX-style swap form (Jupiter aggregator)
- Dynamic token list (Pump.fun, meme tokens)
- Friendly UI (logo, wallet display, copy, disconnect, signal bot)
- Backend REST API for swaps and tokens

## Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/<your-username>/fixorium-swap.git
cd fixorium-swap
npm install
```

### 2. Environment

Copy `.env.example` to `.env` and set your keys.

### 3. Run Dev

```bash
# Frontend
npm start

# Backend
cd backend
npm start
```

### 4. Build & Deploy

```bash
# Build both
npm run build

# Docker
docker-compose up --build
```

Or deploy to Vercel/Netlify with your repo.

## API Endpoints

- `/tokens`: Get meme token list
- `/swap/quote`: Get swap quote
- `/swap/build`: Build swap transaction

## License

MIT
