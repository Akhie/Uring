const express = require('express');
const router = express.Router();
const { Provider } = require("../models/Provider.js");

const { auth } = require("../middleware/auth");


// Add Service Provider

router.post("/addProvider", (req, res) => {
    const provider = new Provider(req.body)
    console.log(provider);
    provider.save((err, prov) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({ success: true, prov })    
    })
})

router.post("/getProvider", (req, res) => {
// console.log(req.body);
    Provider.find({ "service": req.body.ser })
        .exec((err, providers) => {
            if(err) return res.status(400).send(err);
            // console.log(providers);
            res.status(200).json({ success: true, providers })
        })

});

module.exports = router;