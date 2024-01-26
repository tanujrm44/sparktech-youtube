import Product from "../models/productModel.js"
import asyncHandler from "express-async-handler"

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

const getProductbyId = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error("Product not found")
  }
})

const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample Name",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "Sample Brand",
    category: "Sample category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample description",
  })

  const createdProduct = product.save()
  res.status(201).json(createdProduct)
})

const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, image, brand, category, countInStock, description } =
    req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    product.name = name
    product.price = price
    product.description = description
    product.image = image
    product.brand = brand
    product.category = category
    product.countInStock = countInStock

    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error("Product Not Found")
  }
})

const deleteProduct = asyncHandler(async (req, res) => {
  const productId = req.params.id

  const product = await Product.findById(productId)

  if (product) {
    await Product.deleteOne({ _id: product._id })
    res.json({ message: "Product Deleted" })
  } else {
    res.status(404)
    throw new Error("Product Not Found")
  }
})

export {
  getProducts,
  getProductbyId,
  createProduct,
  updateProduct,
  deleteProduct,
}
