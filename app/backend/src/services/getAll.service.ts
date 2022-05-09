import Response from '../interfaces/response.interface';

const { Users } = require('../database/models');

const getAll = async (): Promise<Response[]> => Users.findAll();

export default getAll;
