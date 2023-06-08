import express, { Router } from 'express';
import news from '../app/controllers/news';
import newsList from '../app/controllers/news/list';
import createNews from '../app/controllers/news/createNews';
import updateNew from '../app/controllers/news/updateNew';

const newsRoute: Router = express.Router();
newsRoute.put('/update', updateNew);

newsRoute.post('/create', createNews);
newsRoute.get('/list', newsList);
newsRoute.get('/:id', news);

export default newsRoute;
