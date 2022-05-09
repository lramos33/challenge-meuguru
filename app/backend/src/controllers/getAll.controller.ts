import { Request, Response, NextFunction } from 'express';
import services from '../services/Users';

const getAll = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await services.getAll();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export default getAll;
