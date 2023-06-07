import { Request, Response, NextFunction } from 'express';
import { ErrorType } from '../../../utils/type';
function error(err: any, req: Request, res: Response, next: NextFunction) {
  const errorResponse: ErrorType = {};
  const errors: any = {};

  if (err.code === 11000) {
    errorResponse.error = 'unique';
  }
  if (err?.errors) {
    Object?.keys(err.errors).forEach(
      key => (errors[key] = err.errors[key].message),
    );
    errorResponse.errors = errors;
  }

  console.log([err]);
  res.status(400).json(errorResponse);
}

export default error;
