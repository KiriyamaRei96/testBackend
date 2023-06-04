import express, { Router } from 'express';
import news from '../app/controllers/news';
import newsList from '../app/controllers/news/list';
import createNews from '../app/controllers/news/createNews';

const newsRoute: Router = express.Router();
newsRoute.post('/create', createNews);
newsRoute.get('/list', newsList);
newsRoute.get('/', news);

export default newsRoute;
