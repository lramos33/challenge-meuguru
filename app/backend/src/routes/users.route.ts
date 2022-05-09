import express from 'express';
import userController from '../controllers';
import middlewares from '../middlewares';

const users = express.Router();

users.post(
  '/',
  middlewares.nameValidation,
  middlewares.emailValidation,
  middlewares.passwordValidation,
  userController.create,
);

users.get(
  '/',
  userController.getAll,
);

users.put(
  '/:id',
  middlewares.userValidation,
  middlewares.nameValidation,
  middlewares.emailValidation,
  middlewares.passwordValidation,
  userController.edit,
);

users.delete(
  '/:id',
  middlewares.userValidation,
  userController.remove,
);

export default users;
