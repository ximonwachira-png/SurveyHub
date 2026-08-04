require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const auth = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

// API
app.use('/api', auth);

// serve static frontend
app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(PORT, () => {
  console.log(`SurveyHub server listening on http://localhost:${PORT}`);
});
