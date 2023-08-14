const mongoose= require("mongoose")
const dotenv=require('dotenv')
dotenv.config();
mongoose.connect(process.env.MONGO_URI)
const connection=mongoose.connection
connection.on('error',err=>console.log(err))
connection.on('connected',()=>console.log('Mongo DB connection successful'))

