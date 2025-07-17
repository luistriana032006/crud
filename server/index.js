
import express from 'express';
import cors from 'cors';
import { pool } from './db.js';
import { PORT } from './config.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/ping', async (req, res) => {
  const [result] = await pool.query('SELECT "pong" AS result');
  res.json(result[0]);
});

app.listen(PORT);
console.log(`Server on port ${PORT}`);
