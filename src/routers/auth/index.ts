import express from 'express';
import { asyncHandler } from '../../helper/asyncHandler';
import UserController from '../../controllers/userController';
const auth = express.Router();

auth.post('/sign-up', asyncHandler(UserController.register));

export default auth;