import dotenv from "dotenv"
import mongoose from "mongoose"
import users from "./data/users.js"
import products from "./data/products.js"
import Product from "./models/productModel.js"
import Order from "./models/orderModel.js"
import User from "./models/userModel.js"
import connectDB from "./config/db.js"

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[2]._id

    const sampleProducts = products.map(p => {
      return { ...p, user: adminUser }
    })

    await Product.insertMany(sampleProducts)
    console.log("Data Imported!")
    process.exit()
  } catch (error) {
    console.error(`Error: ${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log("Data Destroyed!")
    process.exit()
  } catch (error) {
    console.error(`Error: ${error}`)
  }
}

if (process.argv[2] == "-d") {
  destroyData()
} else {
  importData()
}
