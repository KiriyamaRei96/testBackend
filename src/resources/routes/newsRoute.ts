import express, { Router } from 'express';
import news from '../app/controllers/news';
import newsList from '../app/controllers/news/list';
import createNews from '../app/controllers/news/createNews';
import updateNew from '../app/controllers/news/updateNew';
import deleteNew from '../app/controllers/news/deleteNew';
import deletedList from '../app/controllers/news/deletedList';
import restoreNew from '../app/controllers/news/restoreNew';

const newsRoute: Router = express.Router();
newsRoute.put('/update', updateNew);
newsRoute.put('/restore', restoreNew);

newsRoute.delete('/delete', deleteNew);
newsRoute.post('/create', createNews);
newsRoute.get('/list', newsList);
newsRoute.get('/deleted', deletedList);

newsRoute.get('/:id', news);

export default newsRoute;
