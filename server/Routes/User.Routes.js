import express from "express";
import { userLogin, userRegster } from "../controllers/User.Controller.js";
const router = express.Router()

router.post("/user-register", userRegster);
router.post("/user-login", userLogin);

export default router;