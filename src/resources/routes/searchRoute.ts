import express, { Router } from "express";
import search from "../app/controllers/search";

const searchRoute: Router = express.Router();
searchRoute.get("/", search);
export default searchRoute;
