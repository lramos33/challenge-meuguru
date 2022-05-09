import { Request, Response, NextFunction } from 'express';
import validations from '../services/Validations';

const passwordValidation = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { password } = req.body;
    const error = validations.passwordValidation(password);
    if (error) {
      return res.status(error.code).json({ error: error.message });
    }
    next();
  } catch (error) {
    next(error);
  }
};

export default passwordValidation;
