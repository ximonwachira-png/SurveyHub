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
