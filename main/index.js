const customerDetails = require("./models/customerdetails");
const productController = require("./controller/productControler.js")

const express = require('express').Router
require('dotenv').config();
const DB_connection = require("./db/db_connection")
const app = express()
const port = process.env.PORT

app.get('/', productController.getAllProducts);
 
app.post("/userLogin",async (req,res)=>{
console.log("user's auto-generated ID:", customerDetails);

})
async function abc(){

    try {
        await DB_connection.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})