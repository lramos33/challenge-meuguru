import User from '../interfaces/user.interface';

const { Users } = require('../database/models');

const create = async (user: User): Promise<void> => {
  await Users.create(user);
};

export default create;
