const express = require('express');
const connection = require("./Config/db")
const userRouter = require('./Routers/userRouter');
const cors = require('cors')
const app = express();
const port = 5000;

app.use(express.json())

app.use(cors({
    origin: "*"
}))

app.use('/api/user', userRouter)


app.listen(port, async()=>{
    try{
        await connection();
        console.log(`Server is running on ${port}`);
    }
    catch(err){
        console.log("Error listing", err);
    }
})