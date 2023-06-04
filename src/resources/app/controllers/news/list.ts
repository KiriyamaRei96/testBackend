import { NextFunction, Request, Response } from 'express';
import News from '../../models/news';
async function newsList(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await News.find({});

    res.json(data);
  } catch (err) {
    next(err);
  }
}
export default newsList;
