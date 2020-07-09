import express, { request, response } from 'express';
import routes from './routes';

const app = express();

app.get('/', (request, response) =>
  response.json({ message: 'We are connected' }),
);

app.listen(3333, () => {
  console.log(
    '💻 GoBarber node server is alive! Check it on http://localhost:3333',
  );
});
