import express from 'express';
import userController from '../controllers';
import middlewares from '../middlewares';

const users = express.Router();

users.post(
  '/',
  middlewares.nameValidation,
  middlewares.registerEmailValidation,
  middlewares.passwordValidation,
  userController.create,
);

users.get(
  '/',
  userController.getAll,
);

users.get(
  '/:id',
  userController.getById,
);

users.put(
  '/:id',
  middlewares.userValidation,
  middlewares.nameValidation,
  middlewares.editEmailValidation,
  middlewares.passwordValidation,
  userController.edit,
);

users.delete(
  '/:id',
  middlewares.userValidation,
  userController.remove,
);

export default users;
