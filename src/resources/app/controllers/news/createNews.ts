import { NextFunction, Request, Response } from 'express';
import News from '../../models/news';

async function createNews(req: Request, res: Response, next: NextFunction) {
  try {
    const newData = await News.create(req.body);
    newData.save();
    res.status(201).json({ status: 1 });
  } catch (err: any) {
    const errors: any = {};
    Object.keys(err.errors).forEach(
      key => (errors[key] = err.errors[key].message),
    );

    res.status(400).json({ status: 0, errors });
  }
}
export default createNews;
