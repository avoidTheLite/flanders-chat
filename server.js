import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'; 

dotenv.config();
const app = express();



await mongoose.connect('mongodb://127.0.0.1:27017/messages')



import router from './server/routes/routes.js';
const port = process.env.PORT;

app.use('/', router);



app.listen(port, () => {
  return console.log(`listening http://localhost:${port}`);
});
