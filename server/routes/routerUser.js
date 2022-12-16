const express = require('express');
const routeUser = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
routeUser.get('/', services.acceuilRoutes);

/**
 *  @description ajouter users
 *  @method GET /ajouter-user
 */
routeUser.get('/ajouter-user', services.ajouter_user)

/**
 *  @description pour modifier user
 *  @method GET /modifier-user
 */
routeUser.get('/modifier-user', services.modifier_user)


// API Users
routeUser.post('/api/users', controller.createUser);
routeUser.get('/api/users', controller.readUser);
routeUser.put('/api/users/:id', controller.updateUser);
routeUser.delete('/api/users/:id', controller.deleteUser);

module.exports = routeUser