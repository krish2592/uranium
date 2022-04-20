const productModel = require('../models/productModel');

let createProduct = async function (req, res) {
    let newProduct = req.body;
    let saveProduct = await productModel.create(newProduct);
    res.send({staus:true,data:saveProduct});
}

module.exports.createProduct=createProduct;