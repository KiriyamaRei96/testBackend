import { NextFunction, Request, Response } from 'express';
import News from '../../models/news';
async function news(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await News.findById(req.query.id);
    console.log(data);
    res.status(200).json('response');
  } catch (err) {
    next(err);
  }
}
export default news;
