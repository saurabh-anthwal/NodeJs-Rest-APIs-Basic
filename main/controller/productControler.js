const db = require("../models");

const products = db.CustomerDetails;

const addProducts = async(req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "please enter title",
        });
        return
    }

    const productInfo = {
        firstName: req.body.firstName,
        lastName: req.body.lastName
    };

    try{
        const product = await products.create(productInfo);
        res.status(200).send(product);
        console.log(product);
    } catch (err){
        res.status(500).send({
            message: err.message || "error occured"
        })
    }

}


const getAllProducts = async(req,res) =>{
    const products =await products.findAll({});
    res.status(200).send(products);  
}


module.exports = {
    addProducts,
    getAllProducts
}