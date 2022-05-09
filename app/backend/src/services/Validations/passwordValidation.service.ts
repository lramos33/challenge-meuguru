import ValidationError from '../../interfaces/validationError.interface';

const passwordValidation = (password: string): void | ValidationError => {
  if (password === '') {
    return { code: 400, message: 'Password is required' };
  }

  if (typeof password !== 'string') {
    return { code: 400, message: 'Password must be a string' };
  }
};

export default passwordValidation;
