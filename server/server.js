import express from "express"
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()

app.get("/", (req, res) => {
  res.send("Api is running...")
})

app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}`)
})
