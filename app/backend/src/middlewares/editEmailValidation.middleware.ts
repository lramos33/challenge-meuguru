import { Request, Response, NextFunction } from 'express';
import validations from '../services/Validations';

const editEmailValidation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { email } = req.body;
    const error = await validations.editEmailValidation(email, id);
    if (error) {
      return res.status(error.code).json({ error: error.message });
    }
    next();
  } catch (error) {
    next(error);
  }
};

export default editEmailValidation;
