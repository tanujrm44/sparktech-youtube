import express from "express"
import { protect, admin } from "../middleware/authMiddleware.js"
import { createProduct } from "../controllers/productController.js"

import {
  getProductbyId,
  getProducts,
} from "../controllers/productController.js"
const router = express.Router()

router.route("/").get(getProducts).post(protect, admin, createProduct)
router.route("/:id").get(getProductbyId)

export default router
