import { Request, Response } from "express";
function news(req: Request, res: Response) {
  res.render("news", { title: "Tin tức" });
}
export default news;
