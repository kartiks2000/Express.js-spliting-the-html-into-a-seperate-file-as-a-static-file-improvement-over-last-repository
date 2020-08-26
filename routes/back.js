
const express = require('express');

const router = express.Router();


var allproducts =[];

router.use("/addpro",(req,res,next)=>{
    // console.log("addingpro looged!!" , req.body.proname);
    allproducts.push(req.body.proname);
    // console.log(allproducts);
    res.redirect("/products");
});

module.exports = {
    "router" :router,
    "allproducts" :allproducts,
};