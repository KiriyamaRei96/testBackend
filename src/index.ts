import express from "express";
import morgan from "morgan";
import path from "path";
import { engine } from "express-handlebars";
import bodyParser from "body-parser";
import routes from "./resources/routes";
const app = express();
const port = 3000;
// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// static file
app.use(express.static(path.join(__dirname, "../src/public")));

// request logger
app.use(morgan("combined"));
// template engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../src/resources/views"));
// routes init
routes(app);
//If no route is matched by now, it must be a 404

app.use(function (req, res, next) {
  res.status(404);
  res.send("Page not found");
  next();
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
