import ValidationError from '../../interfaces/validationError.interface';

const nameValidation = (name: string): void | ValidationError => {
  if (name === '') {
    return { code: 400, message: 'Name is required' };
  }

  if (typeof name !== 'string') {
    return { code: 400, message: 'Name must be a string' };
  }
};

export default nameValidation;
