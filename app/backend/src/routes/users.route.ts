import express from 'express';
import userController from '../controllers';

const users = express.Router();

users.post(
  '/',
  userController.create,
);

users.get(
  '/',
  userController.getAll,
);

users.put(
  '/:id',
  userController.edit,
);

users.delete(
  '/:id',
  userController.remove,
);

export default users;
