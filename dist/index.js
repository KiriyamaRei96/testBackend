"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const express_handlebars_1 = require("express-handlebars");
const app = (0, express_1.default)();
const port = 3000;
// static file
app.use(express_1.default.static(path_1.default.join(__dirname, "../src/public")));
// request logger
app.use((0, morgan_1.default)("combined"));
// template engine
app.engine("hbs", (0, express_handlebars_1.engine)({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path_1.default.join(__dirname, "../src/resources/views"));
app.get("/", (req, res) => {
    res.render("home", { title: "Home" });
});
app.get("/news", (req, res) => {
    res.render("news", { title: "News" });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
