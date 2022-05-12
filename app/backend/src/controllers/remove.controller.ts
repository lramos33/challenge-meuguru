import { Request, Response, NextFunction } from 'express';
import services from '../services/Users';

const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await services.remove(id);
    return res.status(200).send('removed');
  } catch (error) {
    next(error);
  }
};

export default remove;
