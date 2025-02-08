import express from "express";
const router = express.Router();
import { productRegister } from "../controllers/Products.controller.js";

// Register product API route
router.post("/productRegister", productRegister);

export default router;
