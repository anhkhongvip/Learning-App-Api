import express from 'express';
import auth from './auth';
const routers = express.Router();

routers.use('/v1/api/auth', auth);

export default routers;