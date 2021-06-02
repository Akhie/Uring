const express = require('express');
const router = express.Router();
const { Contact } = require("../models/Contact.js");

const { auth } = require("../middleware/auth");


// Add contact

router.post("/addContact", (req, res) => {
    const contact = new Contact(req.body)
    console.log(contact);
    contact.save((err, cont) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({ success: true, cont })    
    })
})


module.exports = router;