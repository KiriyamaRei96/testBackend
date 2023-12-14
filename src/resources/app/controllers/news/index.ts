import { NextFunction, Request, Response } from 'express';
import News from '../../models/news';
import fs from 'fs/promises';
async function news(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await News.findById(req.params.id).populate({
      path: 'relate',
      model: 'new',
      options: { _recursed: true },
    });

    const html = await fs.readFile('./src/public/viewer/index.html');
    await fs.writeFile(
      `./src/public/viewer/index.html`,
      Buffer.from(html).toString().replace('<bucket>', 'driver.star'),
    );

    res.status(200).json({ data, status: 1 });
  } catch (err) {
    console.log(err);
    next({ status: 404, error: 'notFound' });
  }
}
export default news;
