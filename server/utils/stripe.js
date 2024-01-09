import { Stripe } from "stripe"
import dotenv from "dotenv"
dotenv.config()

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const stripeUtil = app => {
  app.post("/create-checkout-session", async (req, res) => {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: req.body.map(item => ({
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
            },
            unit_amount: item.price * 100, //cents
          },
          quantity: item.qty,
        })),
        success_url: `${process.env.CLIENT_URL}/success-screen`,
        cancel_url: `${process.env.CLIENT_URL}/place-order`,
      })
      res.json({ url: session.url })
    } catch (error) {
      console.log(error)
      res.status(500)
      throw new Error(error.message)
    }
  })
}

export default stripeUtil
