import ValidationError from '../../interfaces/validationError.interface';

const { Users } = require('../../database/models');

const EMAIL_REGEX = /(.+)@(.+){2,}\.(.+){2,}/;

const emailValidation = async (email: string): Promise<void | ValidationError> => {
  if (email === '') {
    return { code: 400, message: 'Email is required' };
  }

  if (typeof email !== 'string') {
    return { code: 400, message: 'Email must be a string' };
  }

  if (!email.match(EMAIL_REGEX)) {
    return { code: 400, message: 'Invalid email' };
  }

  const registeredUser = await Users.findOne({ where: { email } });

  if (registeredUser) {
    return { code: 409, message: 'Email already registered' };
  }
};

export default emailValidation;
