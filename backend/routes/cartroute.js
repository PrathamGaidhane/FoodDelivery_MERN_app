import express from "express";
import { addTocart,removeFromCart,getcart } from "../controllers/cartcontroller.js";
import authMiddleware from "../middlewares/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add",authMiddleware,addTocart)
cartRouter.post("/remove",authMiddleware,removeFromCart)
cartRouter.post("/get",authMiddleware,getcart)

export default cartRouter;