import { Request, Response, NextFunction } from 'express';
import services from '../services/Users';

const edit = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    await services.edit({ id, name, email, password });
    return res.status(200).send('updated');
  } catch (error) {
    next(error);
  }
};

export default edit;
