const express = require('express');
const controller = require('../controller/authController');


let authRoutes = express.Router();

authRoutes.post('/register', controller.registerUser);

authRoutes.post('/login', controller.login)

module.exports = authRoutes;

