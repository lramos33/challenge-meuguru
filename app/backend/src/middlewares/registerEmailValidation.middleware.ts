import { Request, Response, NextFunction } from 'express';
import validations from '../services/Validations';

const registerEmailValidation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body;
    const error = await validations.registerEmailValidation(email);
    if (error) {
      return res.status(error.code).json({ error: error.message });
    }
    next();
  } catch (error) {
    next(error);
  }
};

export default registerEmailValidation;
