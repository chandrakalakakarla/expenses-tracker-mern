const express= require('express')
const dbconnect = require('./dbconnect')
const dotenv=require('dotenv')
const path=require('path')
const app= express()
app.use(express.json())
const userRoute= require('./routes/usersRoute')
app.use('/api/users/',userRoute)
const transactionsRoute = require('./routes/transactionsRoute')
app.use('/api/transactions/' , transactionsRoute)
dotenv.config();
const port =process.env.PORT || 5000

if(process.env.NODE_ENV === 'production')
{
     app.use('/', express.static('../app/build'))

     app.get('*' , (req, res)=>{
         res.sendFile(path.resolve(__dirname, '../app/build/index.html'))
     })
}



app.listen(port, () => console.log(`Node JS Server started at port ${port}!`))
