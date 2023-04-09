const controller = require('../controller/tasks.controller');
const express = require('express');

const taskRoutes = express.Router();

taskRoutes.get('/',controller.getAllTasks).post('/', controller.createTask);

taskRoutes
    .get('/:taskId', controller.getTask)
    .put('/taskId', controller.updateTask)
    .delete('/taskId', controller.delteTask);

module.exports = taskRoutes;