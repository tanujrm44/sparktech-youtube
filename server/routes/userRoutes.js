import express from "express"
import {
  deleteUser,
  forgotPassword,
  getUserById,
  getUsers,
  loginUser,
  logoutUser,
  registerUser,
  resetPassword,
  updateUser,
  updateUserProfile,
} from "../controllers/userController.js"
import { protect, admin } from "../middleware/authMiddleware.js"
const router = express.Router()

router.route("/").get(protect, admin, getUsers)
router.route("/login").post(loginUser)
router.route("/register").post(registerUser)
router.route("/update").put(updateUserProfile)
router.route("/logout").get(logoutUser)
router.route("/forgot-password").post(forgotPassword)
router
  .route("/:id")
  .put(protect, admin, updateUser)
  .get(protect, admin, getUserById)
  .delete(protect, admin, deleteUser)
router.route("/reset-password/:resetToken").patch(resetPassword)

export default router
