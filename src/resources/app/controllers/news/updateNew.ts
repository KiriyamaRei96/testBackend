import { NextFunction, Request, Response } from 'express';
import News from '../../models/news';
import { ResponseType } from '../../../utils/type';

async function updateNew(req: Request, res: Response, next: NextFunction) {
  try {
    const reqData = req.body;
    if (reqData.relate) {
      reqData.relate = reqData.relate.split(',');
    }

    const item = await News.findById(reqData.id);
    console.log(item);
    const data = 'response';

    const resItem: ResponseType = { data, status: 1 };
    res.status(201).json(resItem);
  } catch (err) {
    next(err);
  }
}
export default updateNew;
