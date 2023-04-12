const express = require("express");
const path = require("path");
const produtos = require("./produtos");

const app = express();
const port = 443;

app.set("view engine", "ejs");
app.set("views", "./views");

const public = path.join(__dirname, "public");
app.use(express.static(public));

app.get("/", (_, res) => res.render("home"));
app.use("/produtos", produtos);
app.get("/contato", (_, res) => res.render("contato"));
app.get("/sobre", (_, res) => res.render("sobre"));

app.listen(port, () => console.log("Server running on port", port));
