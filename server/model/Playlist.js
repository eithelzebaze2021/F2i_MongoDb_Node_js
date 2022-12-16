const mongoose = require('mongoose');

var schemaPlaylist = new mongoose.Schema({
    name:{
        type: String,
    },
    songs: [],
    user: {},
})

const Playlistdb = mongoose.model('playlistdb', schemaPlaylist);

module.exports = Playlistdb;