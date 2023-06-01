import { Request, Response } from "express";
function search(req: Request, res: Response) {
  res.render("search");
}
export default search;
