import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Diogo Dias',
    email: 'diogo@gmail.com.br',
    password_hash: 'dfgh3456dfgh&$$#',
  });

  return res.json(user);
});

export default routes;
