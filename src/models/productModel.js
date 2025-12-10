import fs from "fs";

function readFile() {
  return JSON.parse(fs.readFileSync("./src/database/products.json"));
}

function writeFile(product) {
  const data = JSON.stringify(product)

  fs.writeFileSync("./src/database/products.json", data);

  return product;
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

export function createProduct(id, name, price) {
  const products = readFile();
  const newProduct = {id, name, price};

  products.push(newProduct);

  writeFile(products);

  return newProduct;
}
