import { NextFunction, Request, Response } from 'express';
import News from '../../models/news';

async function createNews(req: Request, res: Response, next: NextFunction) {
  try {
    const data = req.body;
    if (data.relate) {
      data.relate = data.relate.split(',');
    }
    const newData = await News.create(data);
    const resData = await News.findById(newData.id).populate('relate');
    res.status(201).json(resData);
  } catch (err: any) {
    const errors: any = {};
    Object.keys(err.errors).forEach(
      key => (errors[key] = err.errors[key].message),
    );

    res.status(400).json({ status: 0, errors });
  }
}
export default createNews;
