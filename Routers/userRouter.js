const { fetchCart, fetchCartByUser, removeCartItem, addToCart, deleteAll } = require('../Controllers/Cart');
const { Accesseries, Total, Laptops, Mobiles, AllinOne } = require('../Controllers/Category');
const { addProduct, fetchProducts, fetchCategory, fetchByBrand, search, addSingProduct } = require('../Controllers/Product');
const { Register, Login } = require('../Controllers/userControler');
const authorization = require('../midd');

const userRouter = require('express').Router();

userRouter.post('/register', Register)
userRouter.post('/login',Login)

/// basic wale
// userRouter.get('/All', AllinOne)
// userRouter.get('/Acc', Accesseries)
// userRouter.get('/Acc/:cat', Accesseries)
// userRouter.get('/mob', Mobiles)
// userRouter.get('/lap', Laptops)
// userRouter.get('/total', Total)

//Cart Wale
userRouter.get('/fetchcart', fetchCart)
userRouter.get('/fetchcartbyuser/:email', fetchCartByUser)

userRouter.delete('/remove/:email/:productId', removeCartItem)

userRouter.post('/addingtocart', addToCart)
userRouter.delete('/deletall', deleteAll)


// products
userRouter.post('/addProd', addProduct)
userRouter.post('/addsingProd', addSingProduct)
// userRouter.get('/fetchProd',authorization ,fetchProducts)
userRouter.get('/fetchProd',fetchProducts)
// userRouter.get('/category/:cat', fetchCategory)
userRouter.get('/:cat', fetchCategory)
userRouter.get('/category2/:comp', fetchByBrand)
userRouter.get('/search', search)


module.exports = userRouter