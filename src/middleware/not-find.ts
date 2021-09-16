import { Request, Response, NextFunction } from "express";
import createError from "http-errors";

const notFind = (req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
};

export default notFind;
