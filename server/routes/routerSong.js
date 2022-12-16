const express = require('express');
const routeSong = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /song
 */
 routeSong.get('/song', services.acceuilRoutesSong);

/**
 *  @description ajouter song
 *  @method GET /ajouter-song
 */
routeSong.get('/ajouter-song', services.ajouter_song)

/**
 *  @description pour modifier song
 *  @method GET /modifier-song
 */
routeSong.get('/modifier-song', services.modifier_song)

// API song
routeSong.post('/api/songs', controller.createSong);
routeSong.get('/api/songs', controller.readSong);
routeSong.put('/api/songs/:id', controller.updateSong);
routeSong.delete('/api/songs/:id', controller.deleteSong);

module.exports = routeSong;