import { NextFunction, Request, Response } from 'express';
import News from '../../models/news';

async function createNews(req: Request, res: Response, next: NextFunction) {
  try {
    const newData = await News.create(req.body);
    newData.save();
    console.log(req.body);
    res.status(201).json({ status: 1 });
  } catch (err) {
    console.log([err]);
    res.status(400).json({ status: 0 });
  }
}
export default createNews;
