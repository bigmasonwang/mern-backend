import { Request, Response, NextFunction } from "express";

const users = (req: Request, res: Response, next: NextFunction) => {
  res.send("respond with a resource");
};

export default users;
