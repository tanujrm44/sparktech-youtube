import express from "express"
import { protect, admin } from "../middleware/authMiddleware.js"
import {
  createProduct,
  createProductReview,
  deleteProduct,
  updateProduct,
} from "../controllers/productController.js"

import {
  getProductbyId,
  getProducts,
} from "../controllers/productController.js"
const router = express.Router()

router.route("/").get(getProducts).post(protect, admin, createProduct)
router
  .route("/:id")
  .get(getProductbyId)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct)

router.route("/:id/review").post(protect, createProductReview)

export default router
