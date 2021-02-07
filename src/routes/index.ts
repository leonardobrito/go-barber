import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) =>
  response.json({ message: "It's work!" }),
);

routes.post('/users', (request, response) => {
  const { name, email } = request.body;
  const user = {
    name,
    email,
  };

  return response.json({ user });
});

export default routes;