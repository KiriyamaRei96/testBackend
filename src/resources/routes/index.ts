import { Express } from 'express-serve-static-core';
import newsRoute from './newsRoute';
import authurRoute from './authurRoute';

function routes(app: Express) {
  app.use('/news', newsRoute);

  app.use('/auth', authurRoute);
}
export default routes;
