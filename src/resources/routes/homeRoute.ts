import express, { Router } from 'express';
import home from '../app/controllers/home';
const homeRoute: Router = express.Router();
homeRoute.get('/', home);
export default homeRoute;
