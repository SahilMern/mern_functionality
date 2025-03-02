import express from "express";
const router = express.Router();
import { productRegister, productsdata, singleproductsdata } from "../controllers/Products.controller.js";

//TODO:- Register product API route
router.post("/productRegister", productRegister);

//TODO:- GET Products Data
router.get("/", productsdata);

//TODO:- GET Single Products Data
router.get("/productsdata/:id", singleproductsdata);

export default router;
