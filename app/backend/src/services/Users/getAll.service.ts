import Response from '../../interfaces/response.interface';

const { Users } = require('../../database/models');

const getAll = async (): Promise<Response[]> => Users.findAll({ order: [['id', 'ASC']] });

export default getAll;
