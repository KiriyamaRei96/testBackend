import { NextFunction, Request, Response } from 'express';
import News from '../../models/news';
async function newsList(req: Request, res: Response, next: NextFunction) {
  try {
    const query: any = {
      name: { $regex: req?.body?.name || '', $options: 'i' },
      des: { $regex: req?.body?.des || '', $options: 'i' },
    };
    if (req?.body?.type) {
      query.type = req?.body?.type;
    }
    const data = await News.find(query).populate({
      path: 'relate',
      model: 'new',
      options: { _recursed: true },

      // Get friends of friends - populate the 'relate' array for every friend
      populate: { path: 'relate', model: 'new', options: { _recursed: true } },
    });

    console.log(data.length);
    res.json(data);
  } catch (err) {
    next(err);
  }
}
export default newsList;
