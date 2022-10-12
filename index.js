import express from 'express';
import * as dotenv from 'dotenv';
import initializePgp from 'pg-promise';

const app = express();
dotenv.config();

const connection = {
  database: process.env.DB_NAME,
  password: process.env.USR_PW
};
const pgp = initializePgp({});
export const db = pgp(connection);

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Your skincare inventory!');
});

app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`);
});

export default app;
