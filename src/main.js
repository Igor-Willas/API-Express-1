import express from "express";
import {getAllProducts, getProductById} from "./models/productModel.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Olá mundo!");
});

app.get("/products", (req, res) => {
  res.status(200).json(getAllProducts());
});

app.get("/products/:id", (req, res) => {
    const id = Number(req.params.id);
  res.status(200).json(getProductById(id));
});

export default app;
