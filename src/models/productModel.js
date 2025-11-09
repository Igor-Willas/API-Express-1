import fs from "fs";

function readFile() {
  return JSON.parse(fs.readFileSync("./src/database/products.json"));
}

export function getAllProducts() {
  const products = readFile();
  return products;
}

export function getProductById(id) {
  const products = readFile();
  return products.find((product) => {
    return product.id === Number(id);
  });
}
