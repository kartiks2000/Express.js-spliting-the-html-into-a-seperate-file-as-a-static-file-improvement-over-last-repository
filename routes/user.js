
const express = require('express');
const path = require('path');

const router = express.Router();

const backprops = require('./back');


router.use('/products',(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","views","products.html"));
    console.log("check the console for Products....");
    backprops.allproducts.map((i)=>{
        console.log("->",i);
    });
    console.log("\n");
});

router.use("/addproduct",(req,res,next)=>{
    // console.log("addproduct logged!!");
    res.sendFile(path.join(__dirname,"../","views","addproduct.html"));
});

module.exports = {
    "router": router,
}