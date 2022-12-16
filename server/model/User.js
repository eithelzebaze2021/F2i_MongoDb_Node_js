const mongoose = require('mongoose');

var schemaUser = new mongoose.Schema({
    firstName : {
        type : String,
        required: true
    },
    lastName : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
      },
    role: {
        type: Number,
        default: 2,
        required: true,
      },
})

const Userdb = mongoose.model('userdb', schemaUser);

module.exports = Userdb;