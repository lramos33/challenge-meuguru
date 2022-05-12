import { Request, Response, NextFunction } from 'express';
import services from '../services/Users';

const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await services.getById(id);

    if (!result) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export default getById;
