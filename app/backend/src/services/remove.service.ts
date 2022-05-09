const { Users } = require('../database/models');

const remove = async (id: string): Promise<void> => {
  await Users.destroy({ where: { id } });
};

export default remove;
