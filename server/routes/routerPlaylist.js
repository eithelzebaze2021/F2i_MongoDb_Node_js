const express = require('express');
const routePlaylist = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /playlist
 */
 routePlaylist.get('/playlist', services.acceuilRoutesPlaylist);

/**
 *  @description ajouter playlist
 *  @method GET /ajouter-playlist
 */
routePlaylist.get('/ajouter-playlist', services.ajouter_playlist)

/**
 *  @description pour modifier playlist
 *  @method GET /modifier-playlist
 */
routePlaylist.get('/modifier-playlist', services.modifier_playlist)

// API Playlist
routePlaylist.post('/api/playlists', controller.createPlaylist);
routePlaylist.get('/api/playlists', controller.readPlaylist);
routePlaylist.put('/api/playlists/:id', controller.updatePlaylist);
routePlaylist.delete('/api/playlists/:id', controller.deletePlaylist);

module.exports = routePlaylist;