/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextFunction, Request, Response } from 'express';
import News from '../../models/news';
import { ResponseType } from '../../../utils/type';

async function updateNew(req: Request, res: Response, next: NextFunction) {
  try {
    const reqData = req.body;
    if (reqData.relate) {
      reqData.relate = reqData.relate.split(',');
    }
    const data = await News.findById(reqData.id); // Find the document by its _id

    if (!data) {
      next({ error: 'notFound', status: 404 });
    }
    if (data) {
      // @ts-ignore
      Object.keys(reqData).forEach(key => (data[key] = reqData[key]));

      await data?.validate();
      await data?.save();
      const resItem: ResponseType = { data, status: 1 };
      res.status(201).json(resItem);
    }
  } catch (err) {
    next(err);
  }
}
export default updateNew;
