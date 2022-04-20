const orderModel = require('../models/orderModel');
const userModel = require("../models/userModel");
const productModel = require("../models/productModel");

let createOrderPurchase = async function (req, res) {
    let userId = req.body.userId;
    let productId = req.body.productId;
   // let isFreeAppUser1 = req.headers.isfreeappuser;
    let isFreeAppUser1 = req.body.isFreeAppUser;
    let user_id = await userModel.findById(userId).select({ _id: 1 })
    let product_id = await productModel.findById(productId).select({ _id: 1 })

    if (user_id === null) {
        res.send({ message: "User does not exist!" })
    } else if (user_id._id) {

        if (product_id === null) {
            res.send({ message: "Product does not exist!" })
        } else if (product_id._id) {

         if(isFreeAppUser1==="true") {
                let updateUser = await userModel.updateOne({ _id: user_id._id }, { $set: { isFreeAppUser: true } }, { new: true });
                req.body["isFreeAppUser"] = isFreeAppUser1;
                req.body["amount"]=0;
                let orderForFreeAppUser = req.body;
                let saveOrder = await orderModel.create(orderForFreeAppUser)
                res.send({ "User Data": updateUser, "Order:": saveOrder });


            } else if(isFreeAppUser1==="false"){
                let user=await userModel.find().select({balance:1,_id:1})
                let balance=parseInt(user[0].balance)
                let product=await productModel.find().select({price:1,_id:1})
                let price=parseInt(product[0].price)
                if(price<=balance){
                    balance-=price;
                    req.body["amount"]=price;
                    req.body["isFreeAppUser"]=isFreeAppUser1;
                    let orderForPaidUser=req.body
                    let updateUser = await userModel.updateOne({ _id: user_id._id }, { $set: { isFreeAppUser: false ,balance:balance} }, { new: true });
                    let saveUserOrder=await orderModel.create(orderForPaidUser)

                    res.send({Order:saveUserOrder, "Update user:" :updateUser})
                } else if(price>balance) {

                    res.send({msg:"User is having insufficient balance!"})

                }
               
            }

        }
    }


}


module.exports.createOrderPurchase = createOrderPurchase;