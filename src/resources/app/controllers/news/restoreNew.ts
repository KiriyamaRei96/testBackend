/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextFunction, Request, Response } from 'express';
import News from '../../models/news';
import { ResponseType } from '../../../utils/type';

async function restoreNew(req: Request, res: Response, next: NextFunction) {
  try {
    const reqData = req.query;
    // @ts-ignore
    await News?.restore({ _id: reqData.id });

    const resItem: ResponseType = { message: 'restored', status: 1 };
    res.status(200).json(resItem);
  } catch (err) {
    next(err);
  }
}
export default restoreNew;
