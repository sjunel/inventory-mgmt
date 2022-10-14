import express from 'express';
import * as dotenv from 'dotenv';
import initializePgp from 'pg-promise';
import { engine } from 'express-handlebars';

const app = express();
dotenv.config();

const connection = {
  database: process.env.DB_NAME,
  password: process.env.USR_PW
};
const pgp = initializePgp({});
export const db = pgp(connection);

const PORT = process.env.PORT;

app.engine('handlebars', engine({}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`);
}).on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log(`${PORT} is already in use`);
  } else {
    throw e;
  }
});

export default app;
