import { Request, Response, NextFunction } from 'express';
import validations from '../services/Validations';

const nameValidation = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;
    const error = validations.nameValidation(name);
    if (error) {
      return res.status(error.code).json({ error: error.message });
    }
    next();
  } catch (error) {
    next(error);
  }
};

export default nameValidation;
