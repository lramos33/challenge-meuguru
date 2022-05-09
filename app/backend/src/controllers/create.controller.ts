import { Request, Response, NextFunction } from 'express';
import services from '../services';

const create = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { name, email, password } = req.body;
    await services.create({ name, email, password });
    return res.status(201).send('user created');
  } catch (error) {
    next(error);
  }
};

export default create;
