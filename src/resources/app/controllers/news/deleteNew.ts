/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextFunction, Request, Response } from 'express';
import News from '../../models/news';
import { ResponseType } from '../../../utils/type';
async function deleteNew(req: Request, res: Response, next: NextFunction) {
  try {
    const reqData = req.query;
    // @ts-ignore
    await News.deleteById(reqData.id);

    const resItem: ResponseType = { message: 'deleted', status: 1 };
    res.status(200).json(resItem);
  } catch (err) {
    next(err);
  }
}
export default deleteNew;
