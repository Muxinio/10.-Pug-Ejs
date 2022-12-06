const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

const handlebarsConfig = {
  defaultLayout: "index.handlebars",
};

app.use(express.urlencoded({ extended: true }));
app.engine("handlebars", exphbs(handlebarsConfig));
app.set("view engine", "handlebars");
app.set("views", "../views");

// ------------------------------------------------------------

let productos = [];

app.post("/productos/form", (req, res) => {
  productos.push(req.body);
  res.redirect("/productos/form");
});

app.get("/productos/form", (req, res) => {
  res.render("formulario");
});

app.get("/productos/list", (req, res) => {
  const isStock = productos.length > 0 ? true : false;
  res.render("lista", { productos, isStock });
});

// ------------------------------------------------------------

app.listen(8080, () => {
  console.log("Servidor ok, puerto 8080");
});
