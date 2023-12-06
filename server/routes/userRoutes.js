import express from "express"
import {
  loginUser,
  logoutUser,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js"
const router = express.Router()

router.route("/login").post(loginUser)
router.route("/register").post(registerUser)
router.route("/update").put(updateUserProfile)
router.route("/logout").get(logoutUser)

export default router
