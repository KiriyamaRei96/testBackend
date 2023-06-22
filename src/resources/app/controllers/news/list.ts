import { NextFunction, Request, Response } from 'express';
import News from '../../models/news';
import { ResponseType } from '../../../utils/type';
import pagination from '../../../utils/pagination';
async function newsList(req: Request, res: Response, next: NextFunction) {
  try {
    const query: any = {
      name: { $regex: req?.body?.name || '', $options: 'i' },
    };
    const { skipCount, paginationData } = await pagination(
      News.find(query, []),
      req?.body,
    );
    if (req?.body?.type) {
      query.type = req?.body?.type;
    }
    const data = await News.find(query, [], {
      sort: {
        createdAt: 'asc', //Sort by Date Added asc
      },
    })
      .populate({
        path: 'relate',

        model: 'new',

        options: { _recursed: true },
      })
      .skip(skipCount)
      .limit(paginationData.limit);
    const response: ResponseType = {
      status: 1,
      data,
      paginationData,
    };

    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
}
export default newsList;
