import ValidationError from '../../interfaces/validationError.interface';

const { Users } = require('../../database/models');

const userValidation = async (id: string): Promise<void | ValidationError> => {
  const registeredUser = await Users.findOne({ where: { id } });

  if (!registeredUser) {
    return { code: 404, message: 'User not found' };
  }
};

export default userValidation;
