import EditBody from '../../interfaces/editBody.interface';

const { Users } = require('../../database/models');

const edit = async ({ id, name, email, password }: EditBody): Promise<void> => {
  await Users.update({ name, email, password }, { where: { id } });
};

export default edit;
