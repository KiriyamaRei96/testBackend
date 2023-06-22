import express, { Router } from 'express';
import home from '../app/controllers/home';
import signin from '../app/controllers/auth/signin';
const authurRoute: Router = express.Router();
authurRoute.post('/login', home);
authurRoute.post('/signin', signin);

export default authurRoute;
