/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextFunction, Request, Response } from 'express';
import News from '../../models/news';
import { ResponseType } from '../../../utils/type';
async function forceDeleteNew(req: Request, res: Response, next: NextFunction) {
  try {
    const reqData = req.query;
    await News.updateMany(
      { relate: reqData.id },
      { $pull: { relate: reqData.id } },
    );
    await News.deleteOne({ _id: reqData.id });

    const resItem: ResponseType = { message: 'deleted', status: 1 };
    res.status(200).json(resItem);
  } catch (err) {
    next(err);
  }
}
export default forceDeleteNew;
