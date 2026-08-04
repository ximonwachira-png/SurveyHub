# SurveyHub — registration and login (debug branch)

This branch adds a simple frontend (index, register, login) with a colorful responsive design and a minimal Node/Express + SQLite backend for user registration and login.

Quick start (local):

1. Install server deps:
   cd server
   npm install

2. Copy example env and start:
   cp .env.example .env
   npm start

3. Open http://localhost:3000/

Notes:
- The server uses a local SQLite file (see server/.env.example to override DB_FILE).
- Passwords are hashed using bcrypt. This is a minimal demo — do not use in production without reviewing security (HTTPS, session or JWT, rate-limiting, input sanitization, email verification).

Docker (optional)

Build and run with Docker (from repo root):

  docker build -t surveyhub .
  docker run -p 3000:3000 --env PORT=3000 -v $(pwd)/server/surveyhub.db:/app/server/surveyhub.db surveyhub

Or with docker-compose:

  docker-compose up --build -d

Then open http://localhost:3000

Environment

- Copy .env.example to .env and adjust PORT or DB_FILE as needed. Do NOT commit secrets.

Next steps / production hardening

- Add HTTPS, session management (HTTP-only cookies or JWT), email verification, rate-limiting, and stronger input validation before deploying to production.
