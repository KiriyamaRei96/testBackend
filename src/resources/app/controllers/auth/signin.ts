import { NextFunction, Request, Response } from 'express';

import { ResponseType } from '../../../utils/type';
import Users from '../../models/user';

async function signin(req: Request, res: Response, next: NextFunction) {
  try {
    const reqData = req.body;

    const userData = await Users.create(reqData);

    const resItem: ResponseType = { data: userData, status: 1 };
    res.status(201).json(resItem);
  } catch (err) {
    next(err);
  }
}
export default signin;
