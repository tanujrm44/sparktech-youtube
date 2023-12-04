import express from "express"
import { protect, admin } from "../middleware/authMiddleware.js"

import {
  getProductbyId,
  getProducts,
} from "../controllers/productController.js"
const router = express.Router()

router.route("/").get(getProducts)
router.route("/:id").get(getProductbyId)

export default router
