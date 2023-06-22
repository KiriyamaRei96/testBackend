import { Express } from 'express-serve-static-core';
import homeRoute from './homeRoute';
import newsRoute from './newsRoute';
import searchRoute from './searchRoute';
import authurRoute from './authurRoute';

function routes(app: Express) {
  app.use('/news', newsRoute);
  app.use('/search', searchRoute);
  app.use('/', homeRoute);
  app.use('/auth', authurRoute);
}
export default routes;
