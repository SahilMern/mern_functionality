console.log("JAI SHREE RAM JI / JAI BAJARANG BALI JI");
import dotenv from 'dotenv';
dotenv.config();
import cors from "cors"
import express from "express";
const app = express();
const PORT = process.env.PORT || 9080;

import cookieParser from "cookie-parser"
import "./Database/Connection.js"

//? Middlewares
app.use(express.json())
app.use(cors())
app.use(cookieParser())

//TODO:- USER ROUTES 
import userRoutes from "./Routes/User.Routes.js";
app.use("/api/v1", userRoutes);


//TODO:- PRODUCTS ROUTES 
import productRoutes from "./Routes/Products.routes.js"
app.use("/api/v1", productRoutes);
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

  