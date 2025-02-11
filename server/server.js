console.log("JAI SHREE RAM JI / JAI BAJARANG BALI JI");
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
const app = express();
const PORT = process.env.PORT || 9080;

import cookieParser from "cookie-parser";
import "./Database/Connection.js";

const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:3001"], // Allow requests only from this frontend
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow only certain HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
};

//? Middlewares
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

//TODO:- USER ROUTES
import userRoutes from "./Routes/User.Routes.js";
app.use("/api/v1", userRoutes);

//TODO:- PRODUCTS ROUTES
import productRoutes from "./Routes/Products.routes.js";
app.use("/api/v1/products", productRoutes);
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
