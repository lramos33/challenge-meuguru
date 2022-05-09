import express from 'express';
import userController from '../controllers';

const users = express.Router();

users.get(
  '/',
  userController.getAll,
);

users.post(
  '/',
  userController.create,
);

export default users;
