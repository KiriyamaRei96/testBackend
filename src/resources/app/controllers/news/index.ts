import { NextFunction, Request, Response } from 'express';
import News from '../../models/news';
async function news(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await News.findById(req.params.id);
    res.status(200).json({ data, status: 1 });
  } catch (err) {
    next({ status: 404, error: 'notFound' });
  }
}
export default news;
