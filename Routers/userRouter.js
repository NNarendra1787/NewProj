const { Accesseries, Total, Laptops, Mobiles } = require('../Controllers/Category');
const { register, login } = require('../Controllers/userControler');
const authorization = require('../midd');

const userRouter = require('express').Router();

userRouter.post('/register', register)
userRouter.get('/Acc', Accesseries)
userRouter.get('/mob', Mobiles)
userRouter.get('/lap', Laptops)
userRouter.get('/total', Total)
userRouter.post('/login',login)

module.exports = userRouter