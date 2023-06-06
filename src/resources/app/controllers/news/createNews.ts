import { NextFunction, Request, Response } from 'express';
import News from '../../models/news';
import { ResponseType } from '../../../utils/type';

async function createNews(req: Request, res: Response, next: NextFunction) {
  try {
    const resData = req.body;
    if (resData.relate) {
      resData.relate = resData.relate.split(',');
    }

    const newData = await News.create(resData);
    const data = await News.findById(newData.id).populate('relate');
    const resItem: ResponseType = { data, status: 1 };
    res.status(201).json(resItem);
  } catch (err: any) {
    const errors: any = {};
    Object.keys(err.errors).forEach(
      key => (errors[key] = err.errors[key].message),
    );

    res.status(400).json({ status: 0, errors });
  }
}
export default createNews;
