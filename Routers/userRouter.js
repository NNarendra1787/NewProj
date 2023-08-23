const { Accesseries, Total, Laptops, Mobiles, AllinOne } = require('../Controllers/Category');
const { register, login } = require('../Controllers/userControler');
const authorization = require('../midd');

const userRouter = require('express').Router();

userRouter.post('/register', register)
userRouter.post('/login',login)
userRouter.get('/All', AllinOne)
userRouter.get('/Acc', Accesseries)
userRouter.get('/mob', Mobiles)
userRouter.get('/lap', Laptops)
userRouter.get('/total', Total)

module.exports = userRouter