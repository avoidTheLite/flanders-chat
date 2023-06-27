import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();



import router from './server/routes/routes.js';
const port = process.env.PORT;

app.use('/', router);



app.listen(port, () => {
  return console.log(`listening http://localhost:${port}`);
});