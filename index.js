require('dotenv').config()
const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req, res) => {
  res.send('shouryadotcom')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})





//require('dotenv').config({path: './env'})
import dotenv from "dotenv"

//import mongoose from "mongoose";
//import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(` Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!!! ", err);
})








