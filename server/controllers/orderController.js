import mongoose from "mongoose"
import Order from "../models/orderModel.js"
import asyncHandler from "express-async-handler"

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body

  if (orderItems?.length === 0) {
    res.status(400)
    throw new Error("No Order Items")
  } else {
    const order = new Order({
      orderItems: orderItems.map(item => ({
        ...item,
        product: item._id,
      })),
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    })
    const createdOrder = await order.save()

    res.status(201).json(createdOrder)
  }
})

const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  )

  if (order) {
    res.status(200).json(order)
  } else {
    res.status(404)
    throw new Error("Order not found")
  }
})

const getUserOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).populate("user")
  res.json(orders)
})

const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find().populate("user", "id name")
  res.send(orders)
})

const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)
  if (order) {
    order.isDelivered = true
    order.deliveredAt = Date.now()

    const updatedOrder = await order.save()

    res.json(updatedOrder)
  }
  res.status(404)
  throw new Error("Order Not Found")
})

export {
  addOrderItems,
  getOrderById,
  getUserOrders,
  getOrders,
  updateOrderToDelivered,
}
