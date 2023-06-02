import { NextFunction, Request, Response } from 'express';
import News from '../../models/news';
async function newsDetail(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await News.findOne({ name: req.params.id });

    res.json(data);
  } catch (err) {
    next(err);
  }
}
export default newsDetail;
