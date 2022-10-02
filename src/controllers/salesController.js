const db = require('../../database/models/index.js');

const Sale = db.sales;
const User = db.users;
const Product = db.products;

const controller = {
    salesList: (req, res) => {
      res.render("index");
    },
  };
  
  module.exports = controller;