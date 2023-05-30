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
// request logger
app.use((0, morgan_1.default)("combined"));
// template engine
app.engine("handlebars", (0, express_handlebars_1.engine)());
app.set("view engine", "handlebars");
app.set("views", path_1.default.join(__dirname, "../src/resources/views"));
app.get("/", (req, res) => {
    res.render("home");
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
