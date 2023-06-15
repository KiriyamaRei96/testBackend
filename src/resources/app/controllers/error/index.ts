import { Request, Response, NextFunction } from 'express';
import { ErrorType } from '../../../utils/type';
function error(err: any, req: Request, res: Response, next: NextFunction) {
  const errorResponse: ErrorType = {
    status: 0,
  };
  const errors: any = {};
  let status = 400;

  if (err.code === 11000) {
    errorResponse.error = 'unique';
  }
  if (err.error) {
    errorResponse.error = err.error;
    status = err.status;
  }
  if (err?.errors) {
    Object?.keys(err.errors).forEach(
      key => (errors[key] = err.errors[key].message),
    );
    errorResponse.errors = errors;
  }

  console.log([err]);
  res.status(status).json(errorResponse);
}

export default error;
