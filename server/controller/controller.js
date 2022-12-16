var Userdb = require('../model/User');
var Songdb = require('../model/Song');
var Playlistdb = require('../model/Playlist');
const argon2 = require('argon2');



/////// End point CRUD Api For User

// create and save new user
exports.createUser = async (req,res)=>{

    console.log(req.body)

    // validate request
    if(!req.body){
        res.status(400).send({ message : "C'est vide"});
        return;
    }
    
    if(req.body.firstName.lenth <=1 ){
    
    return res.status(401).json({
    error: true,
    message : "firstName_incorrect"})
    
    }
    
    if(req.body.lastName.lenth <=1 ){
    
    return res.status(401).json({
    error: true,
    message : "lastName_incorrect"})
    
    }
    
    if(req.body.email.lenth <=1 ){
    
    return res.status(401).json({
    error: true,
    message : "email_incorrect"})
    
    }
    
    if(req.body.password !== req.body.password2 ){
    
    return res.status(401).json({
    error: true,
    message : "password_incorrect"})
    
    }
    
    if(req.body.password <= 16 ){
    
    return res.status(401).json({
    error: true,
    message : "password_incorrect"})
    
    }

    if((req.body.role !== '2') && (req.body.role !== '1') ){
    
        return res.status(401).json({
        error: true,
        message : "role_incorrect"})
        
        }
    
    //const hash =  await argon2.hash(req.body.password)

    // new user
    const user = new Userdb({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        password : req.body.password,
        role: req.body.role,
    })

    // enregistrer user dans bd
    user
        .save(user)
        .then(data => {
            res.redirect('/');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Une erreur est présente !!"
            });
        });

}

//Liste utilisateur
exports.readUser = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Pas de résultat pour "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erreur avec " + id})
            })

    }else{
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Une Erreur présente" })
            })
    }

    
}

// Modifier un utilisateur sachant l'id
exports.updateUser = (req, res)=>{

    if((req.body.role !== '2') && (req.body.role !== '1') ){
    
        return res.status(401).json({
        error: true,
        message : "role_incorrect"})
        
        }

    if(!req.body){
        return res
            .status(400)
            .send({ message : "c'est vide"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Impossible de modifier ${id}. Peut être user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Erreur modification information"})
        })
}

// Supprimer un utilisateur
exports.deleteUser = (req, res)=>{
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Impossible de supprimer avec l'id ${id}`})
            }else{
                res.send({
                    message : "Suppréssion Reussi!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Erreur " + id
            });
        });

}

/////// End point CRUD Api For Song

// Ajouter un song

exports.createSong = async (req,res)=>{

    // validate request
    if(!req.body){
        res.status(400).send({ message : "C'est vide"});
        return;
    }
    
    if(req.body.title.lenth <=1 ){
    
    return res.status(401).json({
    error: true,
    message : "Title_incorrect"})
    
    }

    // new song
    const song = new Songdb({
        title:req.body.title,
        url:req.body.url,
        rating:req.body.rating,
        artist:req.body.artist,
    })

    // enregistrer user dans bd
    song
        .save(song)
        .then(data => {
            //res.send(data)
            res.redirect('/song');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Une erreur est présente !!"
            });
        });

}


//Liste song
exports.readSong = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Songdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Pas de résultat pour "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erreur avec " + id})
            })

    }else{
        Songdb.find()
            .then(song => {
                res.send(song)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Une Erreur présente" })
            })
    }

    
}

// Modifier un song
exports.updateSong = (req, res)=>{

    if(!req.body){
        return res
            .status(400)
            .send({ message : "c'est vide"})
    }

    const id = req.params.id;
    Songdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Impossible de modifier ${id}. Peut être user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Erreur modification information"})
        })
}

// Supprimer un song
exports.deleteSong = (req, res)=>{
    const id = req.params.id;

    Songdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Impossible de supprimer avec l'id ${id}`})
            }else{
                res.send({
                    message : "Suppréssion Reussi!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Erreur " + id
            });
        });

}



/////// End point CRUD Api For Playlist

// Ajouter une playlist

exports.createPlaylist = async (req,res)=>{

    // validate request
    if(!req.body){
        res.status(400).send({ message : "C'est vide"});
        return;
    }
    
    if(req.body.name.lenth <=1 ){
    
    return res.status(401).json({
    error: true,
    message : "Name_incorrect"})
    
    }

    // new playlist
    const playlist = new Playlistdb({
        name : req.body.name,
        songs : req.body.songs,
        user : req.body.user
    })

    // enregistrer user dans bd
    playlist
        .save(playlist)
        .then(data => {
            //res.send(data)
            res.redirect('/ajouter_playlist');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Une erreur est présente !!"
            });
        });

}

//Liste playlist
exports.readPlaylist = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Playlistdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Pas de résultat pour "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erreur avec " + id})
            })

    }else{
        Playlistdb.find()
            .then(playlist => {
                res.send(playlist)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Une Erreur présente" })
            })
    }

    
}

// Modifier une playlist
exports.updatePlaylist = (req, res)=>{

    if(!req.body){
        return res
            .status(400)
            .send({ message : "c'est vide"})
    }

    const id = req.params.id;
    Songdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Impossible de modifier ${id}. Peut être user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Erreur modification information"})
        })
}

// Supprimer une Playlist
exports.deletePlaylist = (req, res)=>{
    const id = req.params.id;

    Songdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Impossible de supprimer avec l'id ${id}`})
            }else{
                res.send({
                    message : "Suppréssion Reussi!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Erreur " + id
            });
        });

}