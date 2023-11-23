import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"
import Product from "./models/productModel.js"
import productRoutes from "./routes/productRoutes.js"
import { errorHandler, notFound } from "./middleware/errorMiddleware.js"

dotenv.config()

connectDB()

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())

app.get("/", (req, res) => {
  res.send("Api is running...")
})

app.use("/api/products", productRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}`)
})
