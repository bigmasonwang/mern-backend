import express from "express";
import usersRouter from "./users";

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res) => {
  res.send("APIs working");
});

// TODO: verify token

router.use("/users", usersRouter);

export default router;
