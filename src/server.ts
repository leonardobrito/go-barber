import express from 'express';
import routes from './routes';
import './database';

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.info(`🚀 Server started on port ${port}!`);
});
