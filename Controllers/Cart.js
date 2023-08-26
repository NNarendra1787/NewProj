const Cart = require("../Schema/Cart_schema");

const addToCart = async (req, res) => {
  const data = req.body;
  const result = await Cart.create(data);
  return res.send({msg: "Data comes", result: result})
};

const deleteAll = async (req, res) => {
  await Cart.deleteMany();
  return res.send({ msg: "Deleted all data from cart" });
};



const fetchCart = async (req, res) => {
  const result = await Cart.find();

  return res.send({ msg: "Products from Cart Fetched", Result: result });
};

const fetchCartByUser = async (req, res) => {
  const { email } = req.params;

  const result = await Cart.find({ email });
  return res.send({ msg: "Products from Cart Fetched", Result: result });
};

const removeCartItem = async (req, res) => {
  const { email, productId } = req.params;

  try {
    // Find the cart item based on userId and productId and remove it
    await Cart.findOneAndDelete({ user_id: email, id: productId });

    return res.send({ msg: "Item removed from cart" });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    res.status(500).send({ msg: "Error removing item from cart" });
  }
};

module.exports = {
  addToCart,
  deleteAll,
  fetchCart,
  fetchCartByUser,
  removeCartItem
};
