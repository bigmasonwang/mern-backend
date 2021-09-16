import express from "express";
import UserController from "../controller/users";

const router = express.Router();

/* GET users listing. */
router.get("/", UserController);

export default router;
