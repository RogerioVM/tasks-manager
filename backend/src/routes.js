const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UsersController');
const DutysController = require('./controllers/DutysController');
const { Router } = require('express');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

routes.post('/sessions', SessionController.create);

routes.get('/profile', ProfileController.index);
routes.put('/profile', ProfileController.update);


routes.get('/tarefas', DutysController.index);
routes.post('/tarefas', DutysController.create);
routes.delete('/tarefas/:id', DutysController.delete);

module.exports = routes;