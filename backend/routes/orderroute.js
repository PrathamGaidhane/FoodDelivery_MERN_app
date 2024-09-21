import express from "express";
import authMiddleware from "../middlewares/auth.js";
import { placeOrder, userOrder, verifyOrder,listOrders,updateStatus } from "../controllers/ordercontroller.js";
import userModel from "../models/usermodel.js";

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/userorder",authMiddleware,userOrder);
orderRouter.get("/list",listOrders);
orderRouter.post("/status",updateStatus);

export default orderRouter;