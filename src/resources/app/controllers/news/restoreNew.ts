/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextFunction, Request, Response } from 'express';
import News from '../../models/news';
import { ResponseType } from '../../../utils/type';

async function restoreNew(req: Request, res: Response, next: NextFunction) {
  try {
    const reqData = req.query;

    const data = await News.findById(reqData.id); // Find the document by its _id

    if (!data) {
      next({ error: 'notFound', status: 404 });
    }
    if (data) {
      await data?.validate();
      await data?.save();
      const resItem: ResponseType = { message: 'restored', status: 1 };
      res.status(200).json(resItem);
    }
  } catch (err) {
    next(err);
  }
}
export default restoreNew;
