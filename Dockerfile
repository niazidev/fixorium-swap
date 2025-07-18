 # Backend
FROM node:20 AS backend
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend/ ./
RUN npm run build

# Frontend
FROM node:20 AS frontend
WORKDIR /app/frontend
COPY package*.json ./
COPY tsconfig.json ./
COPY src/ ./src/
COPY public/ ./public/
RUN npm install
RUN npm run build

# Final stage
FROM node:20
WORKDIR /app
COPY --from=backend /app/backend/dist ./backend/dist
COPY --from=frontend /app/frontend/build ./frontend/build
COPY backend/.env ./backend/.env
EXPOSE 3000
CMD ["node", "backend/dist/index.js"]
