const { Accesseries, Total } = require('../Controllers/Category');
const { register, login } = require('../Controllers/userControler');
const authorization = require('../midd');

const userRouter = require('express').Router();

userRouter.post('/register', register)
userRouter.get('/Accesseries', Accesseries)
userRouter.get('/total', Total)
userRouter.post('/login',login)

module.exports = userRouter