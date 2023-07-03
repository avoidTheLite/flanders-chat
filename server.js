import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'; 

dotenv.config();
const app = express();



await mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Databse'))


import router from './server/routes/routes.js';
const port = process.env.PORT;

app.use('/', router);



app.listen(port, () => {
  return console.log(`listening http://localhost:${port}`);
});
