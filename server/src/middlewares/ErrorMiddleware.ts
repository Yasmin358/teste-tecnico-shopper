import { NextFunction, Request, Response } from 'express';
import HttpException from '../utils/HttpException';

const ErrorMiddleware = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const { status, message } = error as HttpException;
  return res.status(status || 500).json({ message });
};

export default ErrorMiddleware;