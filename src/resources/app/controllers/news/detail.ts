import { Request, Response } from "express";
function newsDetail(req: Request, res: Response) {
  res.render("newsDetail", { title: "Chi tiết tin tức", id: req.params.id });
}
export default newsDetail;
