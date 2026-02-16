import express from "express";
import cors from 'cors';
import 'dotenv/config.js';
import connectDB from "./configs/mongodb.js";
import { clearkWebhooks } from './controllers/webhook.js';

// Initialize Express
const app = express();

// connect to database
await connectDB();

// Middlewares
app.use(cors());

// routes
app.get('/', (req, res) => res.send('Api working fine'));
app.post('/clerk', express.json(), clearkWebhooks);

// PORT number
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => { console.log(`Server started at port: ${PORT}`) });