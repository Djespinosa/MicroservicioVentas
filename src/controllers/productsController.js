const db = require('../../database/models/index.js');

const Product = db.products;

const controller = {
    productList: async function (req, res) {
        try {
            const Products = await Product.findAll({
                attributes: ['description','id','name', 'price']
            })            
            return res.render('products',{
                Products,            
                status: 200
            });

        } catch (err) {
            console.error(err);
        }
    }  
    }

module.exports = controller;