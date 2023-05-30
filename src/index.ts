import express from "express";
import morgan from "morgan";
import path from "path";
import { engine } from "express-handlebars";
const app = express();
const port = 3000;
// request logger
app.use(morgan("combined"));
// template engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "../src/resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
