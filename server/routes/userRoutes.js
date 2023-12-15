import express from "express"
import {
  forgotPassword,
  loginUser,
  logoutUser,
  registerUser,
  resetPassword,
  updateUserProfile,
} from "../controllers/userController.js"
const router = express.Router()

router.route("/login").post(loginUser)
router.route("/register").post(registerUser)
router.route("/update").put(updateUserProfile)
router.route("/logout").get(logoutUser)
router.route("/forgot-password").post(forgotPassword)
router.route("/reset-password/:resetToken").patch(resetPassword)

export default router
