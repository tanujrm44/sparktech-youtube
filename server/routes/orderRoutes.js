import express from "express"
import { protect, admin } from "../middleware/authMiddleware.js"

import { addOrderItems, getOrderById } from "../controllers/orderController.js"
const router = express.Router()

router.route("/").post(protect, addOrderItems)
router.route("/:id").get(protect, getOrderById)

export default router
