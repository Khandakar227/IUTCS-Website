import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

export default function validationErrorHandler (req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ message: errors.array()[0].msg });
    next();
}