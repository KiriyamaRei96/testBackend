import { Request, Response } from 'express';
function home(req: Request, res: Response) {
  res.render('home', { title: 'Trang chủ' });
}
export default home;
