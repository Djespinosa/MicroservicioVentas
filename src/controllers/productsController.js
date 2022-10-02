const db = require('../../database/models/index.js');

const Product = db.products;

const controller = {
    productList: (req, res) => {
    res.render("index");
  }
}
module.exports = controller;