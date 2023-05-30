import express from "express";
import morgan from "morgan";
import path from "path";
import { engine } from "express-handlebars";
const app = express();
const port = 3000;
// request logger
app.use(morgan("combined"));
// template engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../src/resources/views"));

app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});
app.get("/news", (req, res) => {
  res.render("news", { title: "News" });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
