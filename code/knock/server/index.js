const express = require('express');
const cors = require('cors');
const routes = require('./routes/push-routes');

const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175'];

const app = express();
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Push server listening on http://localhost:${PORT}`);
});
