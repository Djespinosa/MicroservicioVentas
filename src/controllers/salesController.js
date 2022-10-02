const db = require('../../database/models/index.js');

const Sale = db.sales;
const User = db.users;
const Product = db.products;

const controller = {
    salesList: async function (req, res) {
      try {
        const nameUser = await User.findAll();
        const allSize = await Product.findAll();  
        const salesList = await Sale.findAll({
              include: ["public.sales.sales_products_id_fkey","public.sales.sales_users_id_fkey"],
              attributes: ['id','products_id','qty', 'sale_at','users_id']
          })            
          return res.json({
              sales: salesList,            
              status: 200 
          });

      } catch (err) {
          console.error(err);
      }
  },

  };
  
  module.exports = controller;