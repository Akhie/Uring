const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const providerSchema = mongoose.Schema({
    name:{
        type: String,
    },
    contact:{
        type: Number,
    },
    service:{
        type: String,
    },
    longitude:{
        type: Number,
    },
    lattitude:{
        type: Number,
    }

}, { timestamps: true })


const Provider = mongoose.model('Provider', providerSchema);

module.exports = { Provider }