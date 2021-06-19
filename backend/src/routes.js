const { Router } = require('express');
const AuthController = require('./controllers/AuthController')
const DashboardController = require('./controllers/DashboardController')
const authMiddleware = require('./middlewares/auth');

const routes = Router();

routes.post('/register', AuthController.register)
routes.post('/authenticate', AuthController.authenticate)
routes.get('/', authMiddleware, DashboardController.index)

module.exports = routes;
