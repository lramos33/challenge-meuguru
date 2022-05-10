import error from './error.middleware';
import userValidation from './userValidation.middleware';
import nameValidation from './nameValidation.middleware';
import registerEmailValidation from './registerEmailValidation.middleware';
import editEmailValidation from './editEmailValidation.middleware';
import passwordValidation from './passwordValidation.middleware';

export default {
  error,
  userValidation,
  nameValidation,
  registerEmailValidation,
  editEmailValidation,
  passwordValidation,
};
