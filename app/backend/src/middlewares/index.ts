import error from './error.middleware';
import userValidation from './userValidation.middleware';
import nameValidation from './nameValidation.middleware';
import emailValidation from './emailValidation.middleware';
import passwordValidation from './passwordValidation.middleware';

export default {
  error,
  userValidation,
  nameValidation,
  emailValidation,
  passwordValidation,
};
