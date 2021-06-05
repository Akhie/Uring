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


module.exports = router;