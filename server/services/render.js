const axios = require('axios');

/////// For User

exports.acceuilRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.ajouter_user = (req, res) =>{
    res.render('ajouter_user');
}

exports.modifier_user = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("modifier_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}


//// For playlist

exports.acceuilRoutesPlaylist = (req, res) => {
    // Make a get request to /api/playlists
    axios.get('http://localhost:3000/api/playlists')
        .then(function(response){
            res.render('playlists', { playlists : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.ajouter_playlist = (req, res) =>{
    res.render('ajouter_playlist');
}

exports.modifier_playlist = (req, res) =>{
    axios.get('http://localhost:3000/api/playlists', { params : { id : req.query.id }})
        .then(function(playlistdata){
            res.render("modifier_playlist", { playlist : playlistdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}


//// For song

exports.acceuilRoutesSong = (req, res) => {
    // Make a get request to /api/playlists
    axios.get('http://localhost:3000/api/songs')
        .then(function(response){
            res.render('songs', { songs : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.ajouter_song = (req, res) =>{
    res.render('ajouter_song');
}

exports.modifier_song = (req, res) =>{
    axios.get('http://localhost:3000/api/songs', { params : { id : req.query.id }})
        .then(function(songdata){
            res.render("modifier_song", { song : songdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}