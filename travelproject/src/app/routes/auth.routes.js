const express = require('express');
const controller = require('../controller/authController');

const  authRoutes = express.Router();

authRoutes.post('/register', controller.registerUser);

authRoutes.post('/login', controller.login)

module.exports = authRoutes;
