import {userController} from "../controller/userController";
import {Router} from "express";

let userRoutes = Router();


userRoutes.get('/', userController.getAllUsers).post('/', userController.createUser);

userRoutes
    .get('/:userId', userController.getUser)
    .put('/:userId',  userController.updateUser)
    .delete('/:userId',  userController.deleteUser);

export = userRoutes;


