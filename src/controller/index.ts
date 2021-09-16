import { Request, Response, NextFunction } from "express";

const index = (req: Request, res: Response, next: NextFunction) => {
  res.render("index", { title: "Express" });
};

module.exports = { index };
