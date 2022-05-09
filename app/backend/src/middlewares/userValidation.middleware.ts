import { Request, Response, NextFunction } from 'express';
import validations from '../services/Validations';

const userValidation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const error = await validations.userValidation(id);
    if (error) {
      return res.status(error.code).json({ error: error.message });
    }
    next();
  } catch (error) {
    next(error);
  }
};

export default userValidation;
