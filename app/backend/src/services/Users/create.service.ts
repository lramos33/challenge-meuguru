import CreateBody from '../../interfaces/createBody.interface';

const { Users } = require('../../database/models');

const create = async (user: CreateBody): Promise<void> => {
  await Users.create(user);
};

export default create;
