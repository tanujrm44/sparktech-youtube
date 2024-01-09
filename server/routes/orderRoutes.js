import express from "express"
import { protect, admin } from "../middleware/authMiddleware.js"

import {
  addOrderItems,
  getUserOrders,
  getOrderById,
} from "../controllers/orderController.js"
const router = express.Router()

router.route("/").post(protect, addOrderItems)
router.route("/user-orders").get(protect, getUserOrders)
router.route("/:id").get(protect, getOrderById)

export default router
