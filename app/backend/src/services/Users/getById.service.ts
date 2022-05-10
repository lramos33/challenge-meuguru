import Response from '../../interfaces/response.interface';

const { Users } = require('../../database/models');

const getById = async (id: string): Promise<Response> => Users.findByPk(id);

export default getById;
