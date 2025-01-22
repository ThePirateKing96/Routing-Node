const express = require("express");
const router = express.Router();

const data = {
  products: [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 300 },
    { id: 4, name: "Headphones", price: 100 },
    { id: 5, name: "Monitor", price: 200 },
  ],
};
let stock=5;

router.get("/", (req, res) => {
  res.json({ data });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const filtered = data.products.find((el) => el.id === Number(id));
  if (filtered) {
    res.json(filtered);
  } else {
    res.status(404).send("<h1>404 Product Not Found</h1>");
  }
});

router.post("/", (req, res) => {
  const { id, name, price } = req.body;
  console.log(name);
  if (id && name && price > 0) {
    stock++;
    data.products.push({ id, name, price });
  } else {
    res.status(404).send("<h1>404 Product Not Updated</h1>");
  }
  console.log(data.products);
});

router.post("/", (req, res) => {
  res.status(201).json({ message: "Product Added" });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const prodIndex = data.products.findIndex((item) => item.id === Number(id));
  if (prodIndex > -1) {
    res.status(201).json({ message: "Product Updated" });
  } else {
    res.status(404).send("<h1>404 Product Not Updated</h1>");
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const prodIndex = data.products.findIndex((item) => item.id === Number(id));
  if (prodIndex > -1 && stock>0) {
    data.products.splice(prodIndex,1) // Important
    stock--;
    res.status(201).json({ message: "Product Deleted" });
  } else {
    res.status(404).send("<h1>404 Product Not Deleted</h1>");
  }
});

module.exports = router;
