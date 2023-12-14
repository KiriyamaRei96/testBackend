import express, { Router } from 'express';
import signin from '../app/controllers/auth/signin';
const authurRoute: Router = express.Router();

authurRoute.post('/signin', signin);

export default authurRoute;
