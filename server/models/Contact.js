const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
        trim: true,
        unique: 1
    },
    message:{
        type: String,
    }

}, { timestamps: true })


const Contact = mongoose.model('Contact', contactSchema);

module.exports = { Contact }