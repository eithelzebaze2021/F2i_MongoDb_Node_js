const mongoose = require('mongoose');
 
var schemaSong = new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    url:{
        type:String
    },
    rating:{
        type:Number
    },
    artist:{},
})

const Songdb = mongoose.model('songdb', schemaSong);

module.exports = Songdb;