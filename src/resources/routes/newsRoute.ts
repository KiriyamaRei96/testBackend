import express, { Router } from "express";
import news from "../app/controllers/news";
import newsDetail from "../app/controllers/news/detail";

const newsRoute: Router = express.Router();
newsRoute.get("/", news);
newsRoute.get("/:id", newsDetail);

export default newsRoute;
